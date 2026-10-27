export interface EmergencyEvaluation {
  isEmergency: boolean;
  severity: 'CRITICAL_EMERGENCY' | 'URGENT_EVALUATION' | 'STANDARD';
  reason?: string;
  recommendedAction: string;
  emergencyNumbers: {
    name: string;
    number: string;
    description: string;
  }[];
}

const EMERGENCY_RED_FLAGS = [
  // Cardiac / Thoracic
  { pattern: /(chest pain|pressure in chest|crushing chest|radiating to (arm|jaw|back)|heart attack)/i, reason: "Possible acute cardiac event or angina requiring emergency medical attention." },
  { pattern: /(severe shortness of breath|cannot breathe|choking|gasping for air|struggling to breathe)/i, reason: "Severe respiratory distress requiring immediate oxygen and clinical airway evaluation." },
  // Neurological / Stroke (FAST)
  { pattern: /(face drooping|arm weakness|slurred speech|sudden confusion|stroke|paralysis on one side)/i, reason: "Classic signs of acute stroke (FAST). Immediate emergency triage is essential within the golden hour." },
  { pattern: /(loss of consciousness|passed out|fainted and not waking|unresponsive|seizure|convulsions)/i, reason: "Loss of consciousness or active seizure requires emergency medical care." },
  { pattern: /(worst headache of (my )?life|thunderclap headache|sudden explosive headache)/i, reason: "Sudden explosive severe headache may indicate acute intracranial hemorrhage or aneurysm." },
  // Hemorrhage / Trauma
  { pattern: /(coughing (up )?blood|vomiting blood|coffee ground vomit|severe uncontrolled bleeding)/i, reason: "Internal or active uncontrolled hemorrhage requires immediate emergency hospital stabilization." },
  // Anaphylaxis
  { pattern: /(throat (swelling|closing)|tongue swelling|anaphylaxis|severe allergic reaction|cannot swallow)/i, reason: "Acute systemic anaphylaxis is life-threatening and requires prompt epinephrine and emergency airway support." },
  // Infection / Sepsis / Meningitis
  { pattern: /(high fever with stiff neck|fever with extreme confusion|purple rash spreading rapidly)/i, reason: "Possible bacterial meningitis or systemic sepsis." },
  // Suicide / Self-Harm
  { pattern: /(suicide|kill myself|want to end my life|self harm)/i, reason: "Crisis distress warning. Immediate emotional and clinical crisis support is needed." }
];

export function checkEmergencySymptoms(text: string): EmergencyEvaluation {
  if (!text || typeof text !== 'string') {
    return {
      isEmergency: false,
      severity: 'STANDARD',
      recommendedAction: "Proceed with caution. Always consult a licensed doctor for personalized medical diagnosis.",
      emergencyNumbers: getIndianEmergencyNumbers()
    };
  }

  const normalized = text.toLowerCase();

  for (const flag of EMERGENCY_RED_FLAGS) {
    if (flag.pattern.test(normalized)) {
      return {
        isEmergency: true,
        severity: 'CRITICAL_EMERGENCY',
        reason: flag.reason,
        recommendedAction: "DO NOT WAIT. Call emergency services immediately or have someone take you to the nearest emergency room/casualty department. Do not drive yourself.",
        emergencyNumbers: getIndianEmergencyNumbers()
      };
    }
  }

  return {
    isEmergency: false,
    severity: 'STANDARD',
    recommendedAction: "Non-critical educational triage. Monitor your condition and consult a qualified medical professional if symptoms persist or worsen.",
    emergencyNumbers: getIndianEmergencyNumbers()
  };
}

export function getIndianEmergencyNumbers() {
  return [
    {
      name: "National Emergency Helpline",
      number: "112",
      description: "All-in-one emergency service across India (Police, Fire, Ambulance)"
    },
    {
      name: "Medical Ambulance Helpline",
      number: "108",
      description: "Free emergency ambulance and disaster response service in most Indian states"
    },
    {
      name: "National Health Helpline",
      number: "1075",
      description: "Ministry of Health & Family Welfare (MoHFW) India"
    },
    {
      name: "Tele-MANAS Mental Health",
      number: "14416",
      description: "24/7 Free Government Mental Health & Crisis Counseling"
    }
  ];
}
