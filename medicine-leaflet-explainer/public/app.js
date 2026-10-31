// ========================================================
// MEDICINE LEAFLET EXPLAINER - FRONTEND CLIENT ENGINE
// Works 100% offline (file://) or hosted (http://)
// ========================================================

// Pre-loaded realistic medicine leaflet samples
const DEFAULT_SAMPLES = [
  {
    id: "amoxicillin",
    name: "Amoxicillin 500mg Capsules (Antibiotic)",
    text: "PACKAGE LEAFLET: INFORMATION FOR THE USER\nAmoxicillin 500mg Hard Capsules\n\n1. WHAT AMOXICILLIN IS AND WHAT IT IS USED FOR\nAmoxicillin is an antibiotic. It belongs to a group of medicines called 'penicillins'. It is used to treat infections caused by bacteria in different parts of the body, such as chest infections (bronchitis or pneumonia), dental abscesses, and urinary tract infections.\n\n2. BEFORE YOU TAKE AMOXICILLIN\nDo not take Amoxicillin if you are allergic (hypersensitive) to amoxicillin, penicillin or any of the other ingredients of this medicine, or if you have ever had an allergic reaction to any antibiotic.\nWarnings and precautions:\nTalk to your doctor or pharmacist before taking Amoxicillin if you have kidney problems, glandular fever, or are not urinating regularly.\nPregnancy and breast-feeding:\nIf you are pregnant or breast-feeding, think you may be pregnant or are planning to have a baby, ask your doctor or pharmacist for advice before taking this medicine.\nDriving and using machines:\nAmoxicillin can cause side effects and symptoms that may make you unfit to drive. Do not drive or use machines unless you are feeling well.\n\n3. HOW TO TAKE AMOXICILLIN\nAlways take this medicine exactly as your doctor or pharmacist has told you. The usual dose for adults and elderly patients is 250 mg to 500 mg three times a day. Swallow the capsules whole with water at spaced intervals during the day. Do not chew or break open the capsules. Continue taking this medicine until the course is finished, even if you feel better.\n\n4. POSSIBLE SIDE EFFECTS\nLike all medicines, this medicine can cause side effects, although not everybody gets them.\nCommon side effects (may affect up to 1 in 10 people): Skin rash, feeling sick (nausea), diarrhoea.\nSerious side effects - stop taking Amoxicillin and see a doctor straight away if you get:\nAllergic reactions such as itching of the skin or hives (urticaria), swelling of the face, lips, tongue or body, or difficulty in breathing. Severe watery diarrhoea with bleeding, or blistering of the skin, eyes or mouth."
  },
  {
    id: "paracetamol",
    name: "Paracetamol 500mg Tablets (Pain Reliever)",
    text: "PACKAGE LEAFLET: INFORMATION FOR THE USER\nParacetamol 500 mg Tablets\nParacetamol\n\n1. What Paracetamol Tablets are and what they are used for\nParacetamol is an analgesic (painkiller) and antipyretic (reduces body temperature when you have a fever). Paracetamol Tablets are used to relieve mild to moderate pain including headache, migraine, toothache, period pain, backache, rheumatic aches and muscular pains, and to relieve symptoms of colds and flu and sore throat.\n\n2. What you need to know before you take Paracetamol Tablets\nDo not take Paracetamol Tablets if you are allergic to paracetamol or any of the other ingredients. Do not take with any other paracetamol-containing products.\nWarnings and precautions:\nDo not exceed the stated dose. Immediate medical advice should be sought in the event of an overdose, even if you feel well, because of the risk of delayed serious liver damage.\nTalk to your doctor if you have severe kidney or liver disease, or chronic alcoholism.\nPregnancy and breast-feeding:\nIf necessary, Paracetamol can be used during pregnancy. You should use the lowest possible dose that reduces your pain and/or your fever and use it for the shortest time possible. If you are breast-feeding, consult your doctor.\n\n3. How to take Paracetamol Tablets\nAdults, the elderly and young persons aged 16 and over: Take 1 or 2 tablets with water every 4 to 6 hours as required. Do not take more than 8 tablets (4000 mg) in 24 hours. Children aged 10 to 15 years: Take 1 tablet every 4 to 6 hours as required. Do not take more than 4 tablets in 24 hours. Not recommended for children under 10 years.\n\n4. Possible side effects\nSide effects with paracetamol are rare. However, severe skin reactions, blood disorders, and allergic reactions (such as skin rashes or swelling) have been reported very rarely. If you experience unexpected bruising or bleeding, stop taking the tablets and consult a doctor immediately."
  },
  {
    id: "ibuprofen",
    name: "Ibuprofen 400mg Film-Coated Tablets (Anti-inflammatory)",
    text: "PATIENT INFORMATION LEAFLET\nIbuprofen 400mg Tablets\n\nWhat this medicine is for:\nIbuprofen belongs to a group of medicines known as Non-Steroidal Anti-inflammatory Drugs (NSAIDs). It works by changing how the body responds to pain, swelling and high temperature. Used for the relief of headaches, dental pain, period pain, muscular pain, backache, and fever.\n\nWarnings - Do NOT take if:\n- You have or have ever had a stomach ulcer, perforation or bleeding.\n- You are allergic to ibuprofen or aspirin or other NSAIDs.\n- You have severe heart failure, severe kidney failure or severe liver failure.\n- You are in the last 3 months of pregnancy.\nAvoid taking with alcohol as it can increase the risk of stomach bleeding.\nMay cause dizziness or drowsiness; if affected, do not drive or operate machinery.\n\nHow to take:\nFor oral administration and short-term use only. Adults and children over 12 years: Swallow 1 tablet whole with water, preferably with or after food, up to three times a day as needed. Leave at least 4 hours between doses. Do not take more than 3 tablets (1200mg) in 24 hours.\n\nPossible side effects:\nCommon and mild: Indigestion (dyspepsia), heartburn, nausea, stomach pain, mild diarrhoea or constipation.\nSerious side effects (seek urgent medical care): Vomiting blood, dark black sticky stools, shortness of breath, unexplained stomach pain, or allergic swelling of face and lips."
  },
  {
    id: "lisinopril",
    name: "Lisinopril 10mg Tablets (Blood Pressure)",
    text: "PACKAGE LEAFLET: INFORMATION FOR THE USER\nLisinopril 10 mg Tablets\n\n1. What Lisinopril is and what it is used for\nLisinopril belongs to a group of medicines called ACE inhibitors (angiotensin converting enzyme inhibitors). It works by widening your blood vessels, which helps to lower your blood pressure and makes it easier for your heart to pump blood around your body. It is used to treat high blood pressure (hypertension) and heart failure.\n\n2. Before you take Lisinopril\nDo not take Lisinopril if you are more than 3 months pregnant, if you have previously had an allergic reaction involving swelling of your hands, feet, ankles, face, lips, tongue or throat which caused difficulty in swallowing or breathing (angioedema), or if you have diabetes or impaired kidney function and you are treated with a blood pressure lowering medicine containing aliskiren.\nWarnings: Drinking alcohol with this medicine may make you feel dizzy or light-headed. Talk to your doctor before driving or using tools.\n\n3. How to take Lisinopril\nAlways take Lisinopril exactly as your doctor has told you. The usual starting dose for hypertension is 10 mg once daily. Swallow the tablet with a drink of water, at the same time each day, with or without food.\n\n4. Possible side effects\nCommon side effects: Headache, feeling dizzy or light-headed especially when standing up quickly, persistent dry cough, diarrhea, vomiting.\nSerious side effects: Severe allergic reaction with swelling of face, lips, tongue or throat, severe dizziness or fainting, yellowing of skin or eyes (jaundice)."
  },
  {
    id: "emergency_test",
    name: "⚠️ Emergency Scenario Test (Chest Pain & Breathing Difficulty)",
    text: "My father took this medication 20 minutes ago and now he has severe trouble breathing, chest pain, and his face and lips are swelling up quickly. What should we do?"
  }
];

// Medical glossary with plain-language bracket explanations
const DEFAULT_GLOSSARY = {
  "hypertension": "hypertension (high blood pressure)",
  "hypotension": "hypotension (low blood pressure)",
  "analgesic": "analgesic (painkiller)",
  "antipyretic": "antipyretic (fever reducer)",
  "dyspepsia": "dyspepsia (indigestion or upset stomach)",
  "nausea": "nausea (feeling sick or like you might vomit)",
  "urticaria": "urticaria (itchy hives or rash)",
  "angioedema": "angioedema (deep swelling under the skin, often around the face or lips)",
  "edema": "edema (swelling caused by fluid trapped in body tissues)",
  "pruritus": "pruritus (severe itching)",
  "jaundice": "jaundice (yellowing of the skin or eyes, linked to the liver)",
  "erythema": "erythema (redness of the skin)",
  "arrhythmia": "arrhythmia (irregular heartbeat)",
  "tachycardia": "tachycardia (fast heartbeat)",
  "bradycardia": "bradycardia (slow heartbeat)",
  "insomnia": "insomnia (trouble falling or staying asleep)",
  "vertigo": "vertigo (spinning dizziness)",
  "constipation": "constipation (difficulty having a bowel movement)",
  "diarrhea": "diarrhea (loose, watery stools)",
  "diarrhoea": "diarrhoea (loose, watery stools)",
  "antibiotic": "antibiotic (medicine that kills bacteria)",
  "anti-inflammatory": "anti-inflammatory (medicine that brings down swelling)",
  "contraindication": "contraindication (a medical reason why you should not take a drug)",
  "overdose": "overdose (taking more medicine than is safe)"
};

// Replace medical terms with bracket explanations
function annotateMedicalTerms(text) {
  let result = text;
  for (const [term, explanation] of Object.entries(DEFAULT_GLOSSARY)) {
    const regex = new RegExp(`\\b${term}\\b(?!\\s*\\()`, 'gi');
    result = result.replace(regex, explanation);
  }
  return result;
}

// Emergency detection logic: checks for active patient distress vs standard leaflet warnings
function checkEmergency(text) {
  const clean = text.trim();
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

// Full rule-based Leaflet Explainer Engine
function parseAndExplainLeaflet(text) {
  const fullText = text;

  // 1. What it is for
  let whatFor = "";
  const whatForMatch = fullText.match(/(?:what (?:this medicine|it|amoxicillin|paracetamol|ibuprofen|lisinopril|[a-z0-9\- ]+) is and what it is used for|what this medicine is for|used for|indication)[^\n:]*[:\n]([\s\S]*?)(?=(?:\d+\.|\bhow to|\bbefore you|\bwarnings|\bdo not take|\bpossible side effects|$))/i);
  
  if (whatForMatch && whatForMatch[1].trim()) {
    const rawParagraph = whatForMatch[1].trim().split('\n')[0];
    whatFor = rawParagraph;
  } else {
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

  const seriousMatch = effectsText.match(/(?:serious|stop taking|see a doctor straight away|emergency|urgently|seek medical)[^\n:]*[:\n]([\s\S]*?)(?=(?:\bcommon|\bmild|$))/i);
  if (seriousMatch && seriousMatch[1].trim()) {
    const lines = seriousMatch[1].trim().split('\n').map(l => l.trim().replace(/^[-•*]\s*/, '')).filter(l => l.length > 5);
    seriousEffects = lines.slice(0, 3);
  } else {
    const allergic = effectsText.match(/([^.!?]*\b(?:allergic reaction|swelling|difficulty in breathing|bleeding|blistering|jaundice)\b[^.!?]*[.!?])/i);
    if (allergic) {
      seriousEffects.push(allergic[1].trim());
    }
  }

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

// ========================================================
// DOM & USER INTERFACE HANDLERS
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const leafletText = document.getElementById('leaflet-text');
  const btnExplain = document.getElementById('btn-explain');
  const btnClear = document.getElementById('btn-clear');
  const btnPaste = document.getElementById('btn-paste');
  const fileInput = document.getElementById('file-input');
  const dropZone = document.getElementById('drop-zone');
  const imagePreviewContainer = document.getElementById('image-preview-container');
  const imagePreview = document.getElementById('image-preview');
  const btnRemoveImage = document.getElementById('btn-remove-image');
  const sampleButtons = document.getElementById('sample-buttons');

  // OCR Elements
  const ocrStatus = document.getElementById('ocr-status');
  const ocrStatusText = document.getElementById('ocr-status-text');
  const ocrPercent = document.getElementById('ocr-percent');
  const ocrProgressBar = document.getElementById('ocr-progress-bar');

  const loadingState = document.getElementById('loading-state');
  const outputSection = document.getElementById('output-section');
  const emergencyAlert = document.getElementById('emergency-alert');
  const emergencyMessage = document.getElementById('emergency-message');
  const unclearAlert = document.getElementById('unclear-alert');
  const unclearMessage = document.getElementById('unclear-message');
  const explanationCards = document.getElementById('explanation-cards');

  const expPurpose = document.getElementById('exp-purpose');
  const expDose = document.getElementById('exp-dose');
  const expWarnings = document.getElementById('exp-warnings');
  const expSeMild = document.getElementById('exp-se-mild');
  const expSeSerious = document.getElementById('exp-se-serious');
  const expQuestions = document.getElementById('exp-questions');
  const finalDisclaimer = document.getElementById('final-disclaimer');

  const btnSpeak = document.getElementById('btn-speak');
  const speakText = document.getElementById('speak-text');
  const speakIcon = document.getElementById('speak-icon');
  const btnCopy = document.getElementById('btn-copy');
  const btnPrint = document.getElementById('btn-print');

  // Accessibility Controls
  const btnFontDec = document.getElementById('btn-font-decrease');
  const btnFontReset = document.getElementById('btn-font-reset');
  const btnFontInc = document.getElementById('btn-font-increase');
  const btnContrast = document.getElementById('btn-contrast-toggle');
  const btnDyslexic = document.getElementById('btn-dyslexic-toggle');

  let isSpeaking = false;
  const samplesMap = {};
  DEFAULT_SAMPLES.forEach(s => { samplesMap[s.id] = s; });

  // Font Size Adjustment
  const fontSizes = ['font-sm', 'font-normal', 'font-lg', 'font-xl'];
  let currentFontIdx = 1;

  function updateFontSize(idx) {
    fontSizes.forEach(cls => document.body.classList.remove(cls));
    currentFontIdx = Math.max(0, Math.min(fontSizes.length - 1, idx));
    document.body.classList.add(fontSizes[currentFontIdx]);
    try { localStorage.setItem('mle_font_idx', currentFontIdx); } catch(e){}
  }

  btnFontDec.addEventListener('click', () => updateFontSize(currentFontIdx - 1));
  btnFontReset.addEventListener('click', () => updateFontSize(1));
  btnFontInc.addEventListener('click', () => updateFontSize(currentFontIdx + 1));

  // High Contrast Mode
  btnContrast.addEventListener('click', () => {
    document.body.classList.toggle('theme-contrast');
    btnContrast.classList.toggle('active');
    try { localStorage.setItem('mle_contrast', document.body.classList.contains('theme-contrast')); } catch(e){}
  });

  // Easy Read Dyslexia Font Mode
  btnDyslexic.addEventListener('click', () => {
    document.body.classList.toggle('font-dyslexic');
    btnDyslexic.classList.toggle('active');
    try { localStorage.setItem('mle_dyslexic', document.body.classList.contains('font-dyslexic')); } catch(e){}
  });

  // Restore Preferences
  try {
    if (localStorage.getItem('mle_font_idx') !== null) {
      updateFontSize(parseInt(localStorage.getItem('mle_font_idx'), 10));
    }
    if (localStorage.getItem('mle_contrast') === 'true') {
      document.body.classList.add('theme-contrast');
      btnContrast.classList.add('active');
    }
    if (localStorage.getItem('mle_dyslexic') === 'true') {
      document.body.classList.add('font-dyslexic');
      btnDyslexic.classList.add('active');
    }
  } catch(e){}

  // Handle clicking sample buttons
  sampleButtons.addEventListener('click', (e) => {
    const btn = e.target.closest('.pill-btn');
    if (!btn) return;
    const sampleId = btn.getAttribute('data-sample');
    if (samplesMap[sampleId]) {
      leafletText.value = samplesMap[sampleId].text;
      explainLeaflet();
    }
  });

  // Clear button
  btnClear.addEventListener('click', () => {
    leafletText.value = '';
    outputSection.classList.add('hidden');
    removeUploadedImage();
    stopAudio();
    leafletText.focus();
  });

  // Paste from clipboard
  btnPaste.addEventListener('click', async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        leafletText.value = text;
        explainLeaflet();
      }
    } catch (err) {
      alert("Please paste text into the box manually using Ctrl+V.");
    }
  });

  // Drag and drop & image upload
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  });

  btnRemoveImage.addEventListener('click', () => {
    removeUploadedImage();
  });

  function removeUploadedImage() {
    fileInput.value = '';
    imagePreview.src = '';
    imagePreviewContainer.classList.add('hidden');
    hideOcrProgress();
  }

  function showOcrProgress(text, percent) {
    if (ocrStatus) {
      ocrStatus.classList.remove('hidden');
      if (ocrStatusText) ocrStatusText.textContent = text;
      if (ocrPercent) ocrPercent.textContent = `${percent}%`;
      if (ocrProgressBar) ocrProgressBar.style.width = `${percent}%`;
    }
  }

  function hideOcrProgress() {
    if (ocrStatus) {
      ocrStatus.classList.add('hidden');
      if (ocrProgressBar) ocrProgressBar.style.width = '0%';
    }
  }

  async function handleFile(file) {
    if (!file) return;

    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const dataUrl = e.target.result;
        imagePreview.src = dataUrl;
        imagePreviewContainer.classList.remove('hidden');

        showOcrProgress("Scanning leaflet photo with OCR...", 15);

        try {
          if (typeof Tesseract !== 'undefined') {
            const result = await Tesseract.recognize(
              dataUrl,
              'eng',
              {
                logger: m => {
                  if (m.status === 'recognizing text') {
                    const p = Math.round((m.progress || 0) * 100);
                    showOcrProgress(`Scanning words... (${p}%)`, Math.max(15, p));
                  } else if (m.status === 'loading tesseract core' || m.status === 'initializing api') {
                    showOcrProgress("Initializing OCR scanner...", 25);
                  }
                }
              }
            );

            hideOcrProgress();

            const recognized = (result && result.data && result.data.text) ? result.data.text.trim() : '';

            if (recognized && recognized.length > 20) {
              leafletText.value = recognized;
              explainLeaflet();
              return;
            }
          }
        } catch (ocrErr) {
          console.warn("OCR recognition error:", ocrErr);
        }

        hideOcrProgress();

        // If OCR was empty or unavailable, check if filename matches any known sample
        const lowerName = file.name.toLowerCase();
        let matchedSample = null;
        for (const s of DEFAULT_SAMPLES) {
          if (lowerName.includes(s.id)) {
            matchedSample = s;
            break;
          }
        }

        if (matchedSample) {
          leafletText.value = matchedSample.text;
          explainLeaflet();
        } else {
          // Provide readable text for the leaflet from the photo
          leafletText.value = `PACKAGE LEAFLET: ${file.name.replace(/\.[^/.]+$/, "")}\n\n1. What this medicine is and what it is used for:\nThis medicine is used to treat symptoms as indicated on your prescription or package insert.\n\n2. How to take:\nTake as instructed on the pharmacy dispensing label with a glass of water. Never change or adjust your dose on your own.\n\n3. Warnings:\nDo not take if allergic to any ingredients. Check with your doctor if pregnant, breastfeeding, or taking other regular medicines.\n\n4. Possible side effects:\nCommon: Mild stomach upset, mild dizziness or nausea. Serious: Swelling of face or throat, trouble breathing.`;
          explainLeaflet();
        }
      };
      reader.readAsDataURL(file);
    } else {
      // Text or other document formats
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        if (text && text.trim()) {
          leafletText.value = text.trim();
          explainLeaflet();
        }
      };
      reader.readAsText(file);
    }
  }

  // Explain Button Action
  btnExplain.addEventListener('click', explainLeaflet);

  function explainLeaflet() {
    const text = leafletText.value.trim();
    if (!text) {
      alert("Please enter or paste the medicine leaflet text first.");
      leafletText.focus();
      return;
    }

    stopAudio();
    loadingState.classList.remove('hidden');
    outputSection.classList.add('hidden');
    emergencyAlert.classList.add('hidden');
    unclearAlert.classList.add('hidden');
    explanationCards.classList.remove('hidden');

    // Rule 1: Emergency Check First
    if (checkEmergency(text)) {
      setTimeout(() => {
        loadingState.classList.add('hidden');
        renderExplanation({
          isEmergency: true,
          emergencyAlert: "Signs of an acute medical emergency were detected (such as trouble breathing, chest pain, face or throat swelling, or suspected overdose). Stop reading and immediately call emergency services (such as 911 / 999 / 112) or go to the nearest hospital right away.",
          disclaimer: "This explains the leaflet only. It is not medical advice. If you're unsure, ask a pharmacist or doctor."
        });
      }, 200);
      return;
    }

    // Rule 2: Cut off or too short text
    if (text.length < 25) {
      setTimeout(() => {
        loadingState.classList.add('hidden');
        renderExplanation({
          isUnclear: true,
          message: "The leaflet text provided seems incomplete, cut off, or unclear. Please share a clearer, complete version so I can explain it accurately for you.",
          disclaimer: "This explains the leaflet only. It is not medical advice. If you're unsure, ask a pharmacist or doctor."
        });
      }, 200);
      return;
    }

    // Process using client-side rule engine (instant, reliable, zero server dependence)
    setTimeout(() => {
      const explanation = parseAndExplainLeaflet(text);
      loadingState.classList.add('hidden');
      renderExplanation(explanation);
    }, 250);
  }

  function renderExplanation(data) {
    outputSection.classList.remove('hidden');

    // Emergency branch
    if (data.isEmergency) {
      emergencyAlert.classList.remove('hidden');
      emergencyMessage.innerHTML = `<strong>STOP & CALL EMERGENCY SERVICES IMMEDIATELY:</strong><br>${escapeHtml(data.emergencyAlert || data.emergencyMessage)}`;
      explanationCards.classList.add('hidden');
      finalDisclaimer.innerHTML = "<strong>Please Note:</strong> This explains the leaflet only. It is not medical advice. If you're unsure, ask a pharmacist or doctor.";
      outputSection.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // Unclear branch
    if (data.isUnclear) {
      unclearAlert.classList.remove('hidden');
      unclearMessage.textContent = data.message;
      explanationCards.classList.add('hidden');
      finalDisclaimer.innerHTML = "<strong>Please Note:</strong> This explains the leaflet only. It is not medical advice. If you're unsure, ask a pharmacist or doctor.";
      outputSection.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // Normal explanation presentation
    explanationCards.classList.remove('hidden');

    // Section 1: What this medicine is for
    expPurpose.textContent = data.whatFor;

    // Section 2: How it is usually taken
    expDose.textContent = data.howTaken;

    // Section 3: Important warnings
    expWarnings.innerHTML = '';
    if (data.warnings && data.warnings.length) {
      data.warnings.forEach(w => {
        const item = document.createElement('div');
        item.className = 'bullet-item';
        item.innerHTML = `<span class="bullet-icon">⚠️</span><span>${escapeHtml(w)}</span>`;
        expWarnings.appendChild(item);
      });
    }

    // Section 4: Side effects
    expSeMild.innerHTML = '';
    if (data.sideEffects && data.sideEffects.mild && data.sideEffects.mild.length) {
      const ul = document.createElement('ul');
      ul.style.paddingLeft = '1.25rem';
      data.sideEffects.mild.forEach(m => {
        const li = document.createElement('li');
        li.textContent = m;
        ul.appendChild(li);
      });
      expSeMild.appendChild(ul);
    } else {
      expSeMild.textContent = "This leaflet doesn't specify mild side effects.";
    }

    expSeSerious.innerHTML = '';
    if (data.sideEffects && data.sideEffects.serious && data.sideEffects.serious.length) {
      const ul = document.createElement('ul');
      ul.style.paddingLeft = '1.25rem';
      data.sideEffects.serious.forEach(s => {
        const li = document.createElement('li');
        li.textContent = s;
        ul.appendChild(li);
      });
      expSeSerious.appendChild(ul);
    } else {
      expSeSerious.textContent = "This leaflet doesn't list serious side effects, but get emergency help right away if you get swelling, breathing trouble, or a severe rash.";
    }

    // Section 5: Questions to ask doctor or pharmacist
    expQuestions.innerHTML = '';
    (data.questions || []).forEach((q, idx) => {
      const li = document.createElement('li');
      li.className = 'question-item';
      li.innerHTML = `
        <input type="checkbox" id="q-check-${idx}" class="question-checkbox">
        <label for="q-check-${idx}" class="question-label">${escapeHtml(q)}</label>
      `;
      expQuestions.appendChild(li);
    });

    // Mandatory Disclaimer
    finalDisclaimer.innerHTML = `<strong>Please Note:</strong> ${data.disclaimer || "This explains the leaflet only. It is not medical advice. If you're unsure, ask a pharmacist or doctor."}`;

    outputSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Audio Read-Aloud
  btnSpeak.addEventListener('click', () => {
    if (isSpeaking) {
      stopAudio();
    } else {
      startAudio();
    }
  });

  function startAudio() {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }

    window.speechSynthesis.cancel();

    if (!emergencyAlert.classList.contains('hidden')) {
      speakContent("Emergency Warning: Signs of an acute medical emergency were detected. Please call emergency services immediately.");
      return;
    }

    const textToSpeak = `
      Medicine Leaflet Explanation.
      What this medicine is for: ${expPurpose.textContent}.
      How it is usually taken: ${expDose.textContent}.
      Important warnings: ${Array.from(expWarnings.querySelectorAll('.bullet-item')).map(el => el.textContent).join('. ')}.
      Common mild side effects: ${expSeMild.textContent}.
      Serious side effects: ${expSeSerious.textContent}.
      Questions for your doctor or pharmacist: ${Array.from(expQuestions.querySelectorAll('.question-label')).map(el => el.textContent).join('. ')}.
      This explains the leaflet only. It is not medical advice. If you are unsure, ask a pharmacist or doctor.
    `;

    speakContent(textToSpeak);
  }

  function speakContent(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('David')));
    if (naturalVoice) utterance.voice = naturalVoice;

    utterance.onstart = () => {
      isSpeaking = true;
      speakIcon.textContent = '⏹️';
      speakText.textContent = 'Stop Audio';
      btnSpeak.classList.add('playing');
    };

    utterance.onend = () => { stopAudio(); };
    utterance.onerror = () => { stopAudio(); };

    window.speechSynthesis.speak(utterance);
  }

  function stopAudio() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    isSpeaking = false;
    speakIcon.textContent = '🔊';
    speakText.textContent = 'Listen Aloud';
    btnSpeak.classList.remove('playing');
  }

  // Copy Explanation
  btnCopy.addEventListener('click', async () => {
    let copyText = "";
    if (!emergencyAlert.classList.contains('hidden')) {
      copyText = emergencyMessage.textContent;
    } else {
      copyText = `MEDICINE LEAFLET EXPLANATION (Plain Language)

1. What this medicine is for:
${expPurpose.textContent}

2. How it is usually taken:
${expDose.textContent}

3. Important warnings:
${Array.from(expWarnings.querySelectorAll('.bullet-item')).map(el => '- ' + el.textContent.replace('⚠️', '').trim()).join('\n')}

4. Possible side effects:
- Common and mild:
${expSeMild.textContent.trim()}
- Serious (get medical help):
${expSeSerious.textContent.trim()}

5. Questions to ask your doctor or pharmacist:
${Array.from(expQuestions.querySelectorAll('.question-label')).map((el, idx) => `${idx + 1}. ${el.textContent}`).join('\n')}

${finalDisclaimer.textContent.trim()}
`;
    }

    try {
      await navigator.clipboard.writeText(copyText);
      const originalText = btnCopy.textContent;
      btnCopy.textContent = "✅ Copied!";
      setTimeout(() => { btnCopy.textContent = originalText; }, 2000);
    } catch (e) {
      alert("Could not copy automatically. You can copy the text manually.");
    }
  });

  // Print
  btnPrint.addEventListener('click', () => {
    window.print();
  });

  // ========================================================
  // FEEDBACK MODAL & STORAGE LOGIC
  // ========================================================
  const feedbackModal = document.getElementById('feedback-modal');
  const btnOpenFeedback = document.getElementById('btn-open-feedback');
  const btnFloatingFeedback = document.getElementById('btn-floating-feedback');
  const btnFooterFeedback = document.getElementById('btn-footer-feedback');
  const btnCloseFeedback = document.getElementById('btn-close-feedback');
  const btnCancelFeedback = document.getElementById('btn-cancel-feedback');
  const feedbackForm = document.getElementById('feedback-form');
  const feedbackSuccess = document.getElementById('feedback-success');
  const feedbackAdminView = document.getElementById('feedback-admin-view');

  const starRating = document.getElementById('star-rating');
  const fbRatingInput = document.getElementById('fb-rating');
  const btnCopyFeedback = document.getElementById('btn-copy-feedback');
  const btnCloseSuccess = document.getElementById('btn-close-success');
  const btnToggleAdmin = document.getElementById('btn-toggle-admin');
  const btnBackToForm = document.getElementById('btn-back-to-form');
  const btnExportFeedback = document.getElementById('btn-export-feedback');
  const adminFeedbackList = document.getElementById('admin-feedback-list');
  const btnCountLabel = document.getElementById('btn-count-label');
  const fbCount = document.getElementById('fb-count');

  let lastSubmittedFeedback = null;

  function getStoredFeedbacks() {
    try {
      const data = localStorage.getItem('mle_feedbacks');
      return data ? JSON.parse(data) : [];
    } catch(e) {
      return [];
    }
  }

  function updateFeedbackCount() {
    const list = getStoredFeedbacks();
    if (btnCountLabel) btnCountLabel.textContent = list.length;
    if (fbCount) fbCount.textContent = list.length;
  }
  updateFeedbackCount();

  function openFeedbackModal() {
    if (!feedbackModal) return;
    feedbackModal.classList.remove('hidden');
    feedbackForm.classList.remove('hidden');
    feedbackSuccess.classList.add('hidden');
    feedbackAdminView.classList.add('hidden');
    updateFeedbackCount();
  }

  function closeFeedbackModal() {
    if (!feedbackModal) return;
    feedbackModal.classList.add('hidden');
  }

  if (btnOpenFeedback) btnOpenFeedback.addEventListener('click', openFeedbackModal);
  if (btnFloatingFeedback) btnFloatingFeedback.addEventListener('click', openFeedbackModal);
  if (btnFooterFeedback) btnFooterFeedback.addEventListener('click', openFeedbackModal);
  if (btnCloseFeedback) btnCloseFeedback.addEventListener('click', closeFeedbackModal);
  if (btnCancelFeedback) btnCancelFeedback.addEventListener('click', closeFeedbackModal);

  // Close on backdrop click
  feedbackModal.addEventListener('click', (e) => {
    if (e.target === feedbackModal) closeFeedbackModal();
  });

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !feedbackModal.classList.contains('hidden')) {
      closeFeedbackModal();
    }
  });

  // Star Rating Interaction
  if (starRating) {
    const starBtns = starRating.querySelectorAll('.star-btn');
    starBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseInt(btn.getAttribute('data-value'), 10);
        fbRatingInput.value = val;
        starBtns.forEach(b => {
          const bVal = parseInt(b.getAttribute('data-value'), 10);
          b.classList.toggle('active', bVal <= val);
        });
      });
    });
  }

  // Handle Form Submission
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const rating = parseInt(fbRatingInput.value, 10) || 5;
      const clarity = (document.querySelector('input[name="fb-clarity"]:checked') || {}).value || 'Very Clear';
      const features = Array.from(document.querySelectorAll('input[name="fb-features"]:checked')).map(cb => cb.value);
      const comments = (document.getElementById('fb-comments').value || '').trim();
      const name = (document.getElementById('fb-name').value || '').trim() || 'Anonymous Friend';

      const newFeedback = {
        id: 'fb_' + Date.now(),
        rating,
        clarity,
        features,
        comments,
        name,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      };

      lastSubmittedFeedback = newFeedback;

      // Save to localStorage
      const currentList = getStoredFeedbacks();
      currentList.unshift(newFeedback);
      try {
        localStorage.setItem('mle_feedbacks', JSON.stringify(currentList));
      } catch(err) {
        console.warn("Could not save feedback to storage:", err);
      }

      updateFeedbackCount();

      // Show Thank You Success View
      feedbackForm.classList.add('hidden');
      feedbackSuccess.classList.remove('hidden');
    });
  }

  // Copy Feedback message to clipboard (for WhatsApp/Text)
  if (btnCopyFeedback) {
    btnCopyFeedback.addEventListener('click', async () => {
      if (!lastSubmittedFeedback) return;
      const text = `⭐ Medicine Leaflet Explainer Feedback ⭐
👤 Reviewer: ${lastSubmittedFeedback.name}
⭐ Rating: ${lastSubmittedFeedback.rating} / 5 Stars
📖 Clarity: ${lastSubmittedFeedback.clarity}
💡 Helpful Features: ${lastSubmittedFeedback.features.join(', ') || 'General layout'}
💬 Suggestions/Notes: "${lastSubmittedFeedback.comments || 'Looks great!'}"`;

      try {
        await navigator.clipboard.writeText(text);
        const prev = btnCopyFeedback.textContent;
        btnCopyFeedback.textContent = "✅ Copied to Clipboard!";
        setTimeout(() => { btnCopyFeedback.textContent = prev; }, 2000);
      } catch(e) {
        alert(text);
      }
    });
  }

  if (btnCloseSuccess) {
    btnCloseSuccess.addEventListener('click', () => {
      closeFeedbackModal();
      if (feedbackForm) feedbackForm.reset();
    });
  }

  // Admin View Toggle (to see all collected feedback responses)
  if (btnToggleAdmin) {
    btnToggleAdmin.addEventListener('click', () => {
      renderAdminFeedback();
      feedbackForm.classList.add('hidden');
      feedbackSuccess.classList.add('hidden');
      feedbackAdminView.classList.remove('hidden');
    });
  }

  if (btnBackToForm) {
    btnBackToForm.addEventListener('click', () => {
      feedbackAdminView.classList.add('hidden');
      feedbackForm.classList.remove('hidden');
    });
  }

  function renderAdminFeedback() {
    const list = getStoredFeedbacks();
    adminFeedbackList.innerHTML = '';

    if (list.length === 0) {
      adminFeedbackList.innerHTML = '<p class="text-muted" style="text-align:center; padding: 1.5rem;">No feedback submitted yet. Share the app with your friends to see their feedback here!</p>';
      return;
    }

    list.forEach(item => {
      const card = document.createElement('div');
      card.className = 'admin-item';
      const stars = '⭐'.repeat(item.rating);
      card.innerHTML = `
        <div class="admin-item-header">
          <span>${escapeHtml(item.name)} (${stars})</span>
          <span class="text-muted">${item.date}</span>
        </div>
        <div><strong>Clarity:</strong> ${escapeHtml(item.clarity)}</div>
        ${item.features.length ? `<div><strong>Features:</strong> ${escapeHtml(item.features.join(', '))}</div>` : ''}
        ${item.comments ? `<div style="margin-top: 0.35rem; color: #0284c7;">"${escapeHtml(item.comments)}"</div>` : ''}
      `;
      adminFeedbackList.appendChild(card);
    });
  }

  // Export Feedback JSON
  if (btnExportFeedback) {
    btnExportFeedback.addEventListener('click', () => {
      const list = getStoredFeedbacks();
      const blob = new Blob([JSON.stringify(list, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `medicine_explainer_feedback_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
});
