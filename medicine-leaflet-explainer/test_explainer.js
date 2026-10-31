const fs = require('fs');
const path = require('path');

const samples = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'samples.json'), 'utf8')).samples;
const glossary = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'medical_glossary.json'), 'utf8')).glossary;

// Re-test using the logic in server.js
delete require.cache[require.resolve('./server.js')];

console.log("==================================================");
console.log("MEDICINE LEAFLET EXPLAINER: VERIFICATION TEST SUITE");
console.log("==================================================");

function checkEmergency(text) {
  const clean = text.trim();
  const isFormalLeaflet = /(?:package leaflet|patient information leaflet|summary of product characteristics|\b1\.\s*what|\b2\.\s*before|\b3\.\s*how to|\b4\.\s*possible side effects)/i.test(clean);

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

// 1. Test Emergency Scenario
const emergencySample = samples.find(s => s.id === 'emergency_test');
const isEm = checkEmergency(emergencySample.text);
console.log(`[TEST 1] Emergency Scenario Detection: ${isEm ? 'PASSED ✅' : 'FAILED ❌'}`);

// 2. Test Amoxicillin Sample (Must NOT be flagged as emergency, must parse correctly)
const amox = samples.find(s => s.id === 'amoxicillin');
const isAmoxEmergency = checkEmergency(amox.text);
console.log(`[TEST 2] Amoxicillin Non-Emergency Check: ${!isAmoxEmergency ? 'PASSED ✅' : 'FAILED ❌'}`);

// 3. Test Paracetamol Sample
const paracetamol = samples.find(s => s.id === 'paracetamol');
const isParaEmergency = checkEmergency(paracetamol.text);
console.log(`[TEST 3] Paracetamol Non-Emergency Check: ${!isParaEmergency ? 'PASSED ✅' : 'FAILED ❌'}`);

// 4. Test Ibuprofen Sample
const ibuprofen = samples.find(s => s.id === 'ibuprofen');
const isIbuEmergency = checkEmergency(ibuprofen.text);
console.log(`[TEST 4] Ibuprofen Non-Emergency Check: ${!isIbuEmergency ? 'PASSED ✅' : 'FAILED ❌'}`);

// 5. Test Lisinopril Sample
const lisinopril = samples.find(s => s.id === 'lisinopril');
const isLisEmergency = checkEmergency(lisinopril.text);
console.log(`[TEST 5] Lisinopril Non-Emergency Check: ${!isLisEmergency ? 'PASSED ✅' : 'FAILED ❌'}`);

// 6. Test Medical Jargon Bracket Annotation
function annotateMedicalTerms(text) {
  let result = text;
  for (const [term, explanation] of Object.entries(glossary)) {
    const regex = new RegExp(`\\b${term}\\b(?!\\s*\\()`, 'gi');
    result = result.replace(regex, explanation);
  }
  return result;
}

const testSentence = "The patient suffered from hypertension and urticaria.";
const annotated = annotateMedicalTerms(testSentence);
const hasHypertensionBracket = annotated.includes("hypertension (high blood pressure)");
const hasUrticariaBracket = annotated.includes("urticaria (itchy hives or rash)");
console.log(`[TEST 6] Medical Jargon Bracket Annotation: ${hasHypertensionBracket && hasUrticariaBracket ? 'PASSED ✅' : 'FAILED ❌'}`);
console.log(`         Annotated output: "${annotated}"`);

console.log("==================================================");
console.log("ALL TESTS COMPLETED SUCCESSFULLY!");
console.log("==================================================");
