const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

// Load glossary & samples
let glossary = {};
try {
  const glossaryData = JSON.parse(fs.readFileSync(path.join(PUBLIC_DIR, 'medical_glossary.json'), 'utf8'));
  glossary = glossaryData.glossary || {};
} catch (e) {
  console.error("Glossary loading error:", e.message);
}

// Emergency detection: distinguishes between active patient distress / emergency vs. a leaflet listing side-effects
function checkEmergency(text) {
  const clean = text.trim();

  // If text is a standard formal medicine leaflet, we do NOT trigger acute emergency 
  // on standard warning phrases like "seek urgent medical care" or "in case of overdose".
  const isFormalLeaflet = /(?:package leaflet|patient information leaflet|summary of product characteristics|\b1\.\s*what|\b2\.\s*before|\b3\.\s*how to|\b4\.\s*possible side effects)/i.test(clean);

  // Active User Distress Signals (someone experiencing symptoms right now)
  const activeDistressSignals = [
    /\b(i am|i'm|i have|my|he has|he's|she has|she's|child|baby|father|mother|brother|sister|son|daughter|someone|we)\b.*?\b(trouble breathing|can't breathe|cannot breathe|difficulty breathing|shortness of breath|swelling|swollen|chest pain|overdose|seizure|convulsion|fainted|passed out|unconscious|choking)\b/i,
    /\b(need (urgent|emergency) help|please help|this is an emergency|call 911|call 999|call 112)\b/i,
    /\b(accidentally took|took too much|swallowed (the whole|too many|a bottle)|poisoned)\b/i,
    /\b(chest pain|chest pressure|crushing chest)\b/i,
    /\b(seizure|convulsions?)\b/i,
    /\b(passed out|loss of consciousness|unconscious)\b/i
  ];

  for (const pattern of activeDistressSignals) {
    if (pattern.test(clean)) return true;
  }

  // If NOT a formal leaflet, also flag acute emergency symptoms directly
  if (!isFormalLeaflet) {
    const acuteKeywords = [
      /\btrouble breathing\b/i,
      /\bcan('t| not) breathe\b/i,
      /\bswelling of (the )?(face|throat|tongue|lips)\b/i,
      /\bsevere allergic reaction\b/i,
      /\banaphylaxis\b/i,
      /\bsuspected overdose\b/i
    ];
    for (const pattern of acuteKeywords) {
      if (pattern.test(clean)) return true;
    }
  }

  return false;
}

// Medical glossary annotator: replaces complex medical words with bracket explanations
function annotateMedicalTerms(text) {
  let result = text;
  for (const [term, explanation] of Object.entries(glossary)) {
    // Avoid double annotating if already bracketed
    const regex = new RegExp(`\\b${term}\\b(?!\\s*\\()`, 'gi');
    result = result.replace(regex, explanation);
  }
  return result;
}

// Rule-based leaflet parsing and explanation engine
function parseAndExplainLeaflet(text) {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const fullText = text;

  // 1. What it is for
  let whatFor = "";
  const whatForMatch = fullText.match(/(?:what (?:this medicine|it|amoxicillin|paracetamol|ibuprofen|lisinopril|[a-z0-9\- ]+) is and what it is used for|what this medicine is for|used for|indication)[^\n:]*[:\n]([\s\S]*?)(?=(?:\d+\.|\bhow to|\bbefore you|\bwarnings|\bdo not take|\bpossible side effects|$))/i);
  
  if (whatForMatch && whatForMatch[1].trim()) {
    const rawParagraph = whatForMatch[1].trim().split('\n')[0];
    whatFor = rawParagraph;
  } else {
    // Search for sentences with "used to treat", "treats", "relieve", "antibiotic", "lowers"
    const sentenceMatch = fullText.match(/([A-Z][^.!?]*\b(?:is used to|treats|relieve|reduces|works by)\b[^.!?]*[.!?])/i);
    if (sentenceMatch) {
      whatFor = sentenceMatch[1].trim();
    }
  }

  if (!whatFor) {
    whatFor = "This leaflet doesn't say clearly what this medicine is for.";
  } else {
    whatFor = annotateMedicalTerms(whatFor);
  }

  // 2. How it is usually taken
  let howTaken = "";
  const howMatch = fullText.match(/(?:how to take[^\n:]*|dosage|directions for use|how it is usually taken)[^\n:]*[:\n]([\s\S]*?)(?=(?:\d+\.|\bpossible side effects|\bstorage|\bhow to store|$))/i);
  
  if (howMatch && howMatch[1].trim()) {
    const rawLines = howMatch[1].trim().split('\n').filter(l => l.trim().length > 3).slice(0, 3);
    howTaken = rawLines.join(' ');
  } else {
    const doseMatch = fullText.match(/([A-Z][^.!?]*\b(?:take|dose|swallow|tablets?|capsules?|with water)\b[^.!?]*[.!?])/i);
    if (doseMatch) {
      howTaken = doseMatch[1].trim();
    }
  }

  if (!howTaken) {
    howTaken = "This leaflet doesn't say how this medicine is taken.";
  } else {
    howTaken = annotateMedicalTerms(howTaken);
  }

  // 3. Important warnings
  let warningsList = [];
  const warningsMatch = fullText.match(/(?:before you take|warnings|do not take|precautions|contraindications)[^\n:]*[:\n]([\s\S]*?)(?=(?:\d+\.|\bhow to take|\bpossible side effects|$))/i);
  
  if (warningsMatch && warningsMatch[1].trim()) {
    const warnSnippet = warningsMatch[1].trim();
    const items = warnSnippet.split('\n').map(s => s.trim().replace(/^[-•*]\s*/, '')).filter(s => s.length > 5);
    warningsList = items.slice(0, 4);
  }

  // Alcohol, pregnancy, driving warnings check across entire text
  if (/alcohol/i.test(fullText) && !warningsList.some(w => /alcohol/i.test(w))) {
    const alcoholSentence = fullText.match(/([^.!?]*\balcohol\b[^.!?]*[.!?])/i);
    if (alcoholSentence) warningsList.push(alcoholSentence[1].trim());
  }
  if (/driv(ing|e)|machin(ery|es)/i.test(fullText) && !warningsList.some(w => /driv|machin/i.test(w))) {
    const driveSentence = fullText.match(/([^.!?]*\b(?:drive|driving|machinery)\b[^.!?]*[.!?])/i);
    if (driveSentence) warningsList.push(driveSentence[1].trim());
  }
  if (/pregnan(t|cy)|breast-?feeding/i.test(fullText) && !warningsList.some(w => /pregnan/i.test(w))) {
    const pregSentence = fullText.match(/([^.!?]*\b(?:pregnant|pregnancy|breast-?feeding)\b[^.!?]*[.!?])/i);
    if (pregSentence) warningsList.push(pregSentence[1].trim() + " (Always check with your doctor or pharmacist first).");
  }

  if (warningsList.length === 0) {
    warningsList = ["This leaflet doesn't list specific warnings or who should not take it."];
  } else {
    warningsList = warningsList.map(w => annotateMedicalTerms(w));
  }

  // 4. Side Effects: Mild vs Serious
  let mildEffects = [];
  let seriousEffects = [];

  const sideEffectsMatch = fullText.match(/(?:possible side effects|side effects|adverse reactions)[^\n:]*[:\n]([\s\S]*?)$/i);
  const effectsText = sideEffectsMatch ? sideEffectsMatch[1] : fullText;

  // Search for serious indicators
  const seriousMatch = effectsText.match(/(?:serious|stop taking|see a doctor straight away|emergency|urgently|seek medical)[^\n:]*[:\n]([\s\S]*?)(?=(?:\bcommon|\bmild|$))/i);
  if (seriousMatch && seriousMatch[1].trim()) {
    const lines = seriousMatch[1].trim().split('\n').map(l => l.trim().replace(/^[-•*]\s*/, '')).filter(l => l.length > 5);
    seriousEffects = lines.slice(0, 3);
  } else {
    // Look for allergic reaction or swelling or breathing
    const allergic = effectsText.match(/([^.!?]*\b(?:allergic reaction|swelling|difficulty in breathing|bleeding|blistering|jaundice)\b[^.!?]*[.!?])/i);
    if (allergic) {
      seriousEffects.push(allergic[1].trim());
    }
  }

  // Common/mild
  const commonMatch = effectsText.match(/(?:common|mild)[^\n:]*[:\n]([\s\S]*?)(?=(?:\bserious|\bstop taking|$))/i);
  if (commonMatch && commonMatch[1].trim()) {
    const lines = commonMatch[1].trim().split('\n').map(l => l.trim().replace(/^[-•*]\s*/, '')).filter(l => l.length > 5);
    mildEffects = lines.slice(0, 3);
  } else {
    const mild = effectsText.match(/([^.!?]*\b(?:nausea|headache|rash|diarrh|stomach pain|dizziness|cough|heartburn|indigestion)\b[^.!?]*[.!?])/i);
    if (mild) {
      mildEffects.push(mild[1].trim());
    }
  }

  if (mildEffects.length === 0) {
    mildEffects = ["This leaflet doesn't specify mild side effects."];
  } else {
    mildEffects = mildEffects.map(e => annotateMedicalTerms(e));
  }

  if (seriousEffects.length === 0) {
    seriousEffects = ["This leaflet doesn't list serious side effects, but get emergency help right away if you get swelling, breathing trouble, or a severe rash."];
  } else {
    seriousEffects = seriousEffects.map(e => annotateMedicalTerms(e));
  }

  // 5. Questions to ask doctor or pharmacist
  const questions = [
    "How many days should I take this medicine, and should I finish the whole pack?",
    "Should I take this medicine before, during, or after meals?",
    "Is it safe to take this alongside my other daily medicines and vitamins?",
    "What should I do if I accidentally forget a dose?"
  ];

  return {
    isEmergency: false,
    whatFor,
    howTaken: howTaken + " (Remember: Never change or adjust your dose on your own. Always follow the exact directions given to you by your healthcare professional.)",
    warnings: warningsList,
    sideEffects: {
      mild: mildEffects,
      serious: seriousEffects
    },
    questions,
    disclaimer: "This explains the leaflet only. It is not medical advice. If you're unsure, ask a pharmacist or doctor."
  };
}

// MIME types
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API: Health check
  if (pathname === '/api/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', engine: 'Node.js', time: new Date().toISOString() }));
    return;
  }

  // API: Explain Leaflet
  if (pathname === '/api/explain' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const data = JSON.parse(body || '{}');
        const text = (data.text || '').trim();

        if (!text) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: "Please enter or paste the medicine leaflet text." }));
          return;
        }

        // Rule: Emergency check first!
        if (checkEmergency(text)) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            isEmergency: true,
            emergencyAlert: "🚨 EMERGENCY DETECTED: Signs of an acute medical emergency were detected (such as difficulty breathing, swelling of face/throat, chest pain, or suspected overdose). Stop reading and immediately call local emergency services (like 911, 999, 112) or go to the nearest emergency hospital.",
            disclaimer: "This explains the leaflet only. It is not medical advice. If you're unsure, ask a pharmacist or doctor."
          }));
          return;
        }

        // Rule: Text is cut off, unreadable, or too short
        if (text.length < 25) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            isUnclear: true,
            message: "The leaflet text provided is too short, cut off, or unclear. Please share a clearer, complete version or photo so I can explain it accurately for you.",
            disclaimer: "This explains the leaflet only. It is not medical advice. If you're unsure, ask a pharmacist or doctor."
          }));
          return;
        }

        // Parse and explain using rule-grounded engine
        const explanation = parseAndExplainLeaflet(text);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(explanation));
      } catch (err) {
        console.error("Error processing explanation:", err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "An unexpected error occurred while processing the leaflet: " + err.message }));
      }
    });
    return;
  }

  // Static File Serving
  let filePath = path.join(PUBLIC_DIR, pathname === '/' ? 'index.html' : pathname);
  
  // Security check to avoid directory traversal
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end("Forbidden");
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Default fallback to index.html for single-page app
      filePath = path.join(PUBLIC_DIR, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end("Server Error: " + readErr.message);
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Medicine Leaflet Explainer running on http://127.0.0.1:${PORT}`);
});
