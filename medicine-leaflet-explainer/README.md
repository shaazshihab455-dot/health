# 💊 Medicine Leaflet Explainer

A user-friendly, accessibility-first web application designed to help ordinary people understand medicine leaflets, labels, and package inserts in plain, simple language (around a 12-year-old reading level).

---

## 🌟 Key Features

1. **5-Part Plain Language Structure**:
   - **What this medicine is for**: 1–2 plain sentences describing what the drug treats.
   - **How it is usually taken**: Verbatim from the leaflet with a clear reminder never to change doses.
   - **Important warnings**: Who should not take it, alcohol/driving cautions, and pregnancy warnings.
   - **Possible side effects**: Strictly categorized into *Common & usually mild* vs. *Serious (get immediate medical help)*.
   - **Questions to ask your pharmacist or doctor**: A practical checklist to bring to the pharmacy or clinic.
2. **Safety & Emergency Detection**:
   - Automatically detects emergency symptoms (trouble breathing, chest pain, facial/throat swelling, suspected overdose).
   - Prompts the user with an urgent warning to call emergency services (911 / 999 / 112) immediately.
3. **Medical Jargon Translator**:
   - Automatically clarifies medical terminology in brackets (e.g. `hypertension (high blood pressure)`, `analgesic (painkiller)`).
4. **Strict Grounding Rules**:
   - Only uses facts from the provided leaflet. Missing information is clearly marked with *"This leaflet doesn't say"*.
   - Never prescribes, alters doses, or diagnoses medical symptoms.
   - Always concludes with the mandated safety disclaimer:
     > *"This explains the leaflet only. It is not medical advice. If you're unsure, ask a pharmacist or doctor."*
5. **Accessibility Suite**:
   - **Text-to-Speech (Audio Read-Aloud)**: Reads the simplified explanation out loud (ideal for elderly or low-vision users).
   - **Font Resizing (`A-`, `A`, `A+`)**: Adjustable text sizing.
   - **High Contrast Mode (`🌓 Contrast`)**: For high-contrast visibility.
   - **Easy-Read / Dyslexia-Friendly Font (`📖 Easy Read`)**.
   - **Multilingual Support**: Supports English, Spanish, French, German, Hindi, Bengali, and Arabic.
   - **Print & PDF Export**: Clean, high-legibility printable report to take to a doctor or pharmacist.
6. **One-Click Pre-loaded Samples**:
   - Test immediately with samples for Amoxicillin, Paracetamol, Ibuprofen, Lisinopril, and an Emergency Test Scenario.

---

## 🚀 Quick Start

### Option 1: Double-click Launcher (Windows)
Double-click `start.bat` or run `powershell -ExecutionPolicy Bypass -File .\start.ps1`.  
It will automatically launch the local server and open `http://localhost:3000` in your default browser.

### Option 2: Command Line
```powershell
# Using Node or agy-node
node server.js
# Or with agy-node:
& "$env:APPDATA\Antigravity\bin\agy-node.cmd" server.js
```
Then visit: `http://localhost:3000`

### Option 3: Offline Standalone (No Server Required)
You can directly open `public/index.html` in any modern web browser (Google Chrome, Microsoft Edge, Firefox). The built-in client-side engine will handle parsing and accessibility features automatically offline.

---

## 📂 Project Structure

```
medicine-leaflet-explainer/
├── server.js                 # Zero-dependency Node.js HTTP server & API
├── package.json              # Project metadata & npm scripts
├── start.bat                 # Windows 1-click batch launcher
├── start.ps1                 # PowerShell launcher
├── PROMPT.md                 # System prompt and operational safety specification
├── README.md                 # Documentation
└── public/
    ├── index.html            # Accessible web application layout
    ├── style.css             # Healthcare UI, themes, high contrast & print styles
    ├── app.js                # Frontend controller, TTS audio engine & offline logic
    ├── samples.json          # Realistic sample leaflet texts
    └── medical_glossary.json # Medical terms to plain-English dictionary
```

---

## 🛡️ Safety Disclaimer
This tool explains information contained within medicine leaflets and packaging only. It does not replace professional medical judgment, diagnosis, or treatment. Users should always consult a licensed doctor or pharmacist regarding prescriptions and health conditions.
