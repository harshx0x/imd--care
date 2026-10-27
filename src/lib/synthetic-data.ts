import {
  LabReportSample,
  Language,
  SymptomRequest,
  SymptomResult,
  ReportExplanationRequest,
  ReportExplanationResult,
  ImportedReportAnalysisResult,
  ImportedTestItem
} from './types';

export const SYNTHETIC_LAB_REPORTS: LabReportSample[] = [
  {
    id: 'cbc-hb',
    name: 'Hemoglobin (CBC Test)',
    category: 'Hematology',
    testName: 'Hemoglobin (Hb)',
    resultValue: '10.2',
    unit: 'g/dL',
    referenceRange: '12.0 - 15.5 g/dL (Adult Female)',
    description: 'Measures the oxygen-carrying protein in red blood cells. Useful in assessing anemia, fatigue, and nutritional health.'
  },
  {
    id: 'lipid-ldl',
    name: 'Lipid Profile — LDL Cholesterol',
    category: 'Cardiovascular / Biochemistry',
    testName: 'LDL Cholesterol ("Bad" Cholesterol)',
    resultValue: '148',
    unit: 'mg/dL',
    referenceRange: 'Less than 100 mg/dL',
    description: 'Low-Density Lipoprotein transports cholesterol through blood vessels. Elevated levels can increase plaque risk.'
  },
  {
    id: 'hba1c-prediabetes',
    name: 'Glycated Hemoglobin (HbA1c)',
    category: 'Endocrinology / Diabetes',
    testName: 'HbA1c (Glycosylated Hemoglobin)',
    resultValue: '6.2',
    unit: '%',
    referenceRange: 'Normal: < 5.7% | Prediabetes: 5.7% - 6.4%',
    description: 'Reflects average blood sugar control over the preceding 2 to 3 months. Essential for diabetes prevention and monitoring.'
  },
  {
    id: 'tsh-thyroid',
    name: 'Thyroid Stimulating Hormone (TSH)',
    category: 'Endocrinology',
    testName: 'TSH (Thyroid Stimulating Hormone)',
    resultValue: '6.8',
    unit: 'µIU/mL',
    referenceRange: '0.4 - 4.5 µIU/mL',
    description: 'Produced by the pituitary gland to regulate thyroid activity. Elevated TSH commonly suggests mild underactive thyroid (hypothyroidism).'
  },
  {
    id: 'blood-glucose-fasting',
    name: 'Fasting Blood Sugar (FBS)',
    category: 'Biochemistry / Metabolic',
    testName: 'Fasting Plasma Glucose',
    resultValue: '136',
    unit: 'mg/dL',
    referenceRange: '70 - 99 mg/dL (Normal Fasting)',
    description: 'Evaluates blood glucose levels after an overnight fast of at least 8 to 10 hours.'
  },
  {
    id: 'serum-creatinine',
    name: 'Serum Creatinine (Kidney Function)',
    category: 'Renal / Nephrology',
    testName: 'Serum Creatinine',
    resultValue: '1.4',
    unit: 'mg/dL',
    referenceRange: '0.7 - 1.2 mg/dL',
    description: 'A waste byproduct of muscle metabolism filtered out by healthy kidneys. Used to estimate glomerular filtration.'
  }
];

export function getSyntheticChatResponse(prompt: string, language: Language = 'en'): string {
  const lower = prompt.toLowerCase();

  if (language === 'hi') {
    if (lower.includes('सिरदर्द') || lower.includes('headache')) {
      return `नमस्ते! सिरदर्द एक बहुत ही आम लक्षण है।\n\n**संभावित कारण:**\n1. तनाव या चिंता (Tension headache)\n2. निर्जलीकरण (Dehydration - पर्याप्त पानी न पीना)\n3. लंबे समय तक स्क्रीन देखना (Digital eye strain)\n4. नींद की कमी या अनियमित दिनचर्या\n\n**सामान्य प्राथमिक देखभाल:**\n- शांत, अंधेरे कमरे में 20-30 मिनट आराम करें।\n- पर्याप्त मात्रा में गुनगुना या सामान्य पानी पिएं।\n- गर्दन और कंधों की हल्की स्ट्रेचिंग करें।\n\n**डॉक्टर से कब मिलें:**\nयदि सिरदर्द अचानक बहुत तेज हो (Thunderclap), देखने में धुंधलापन आए, उल्टी हो या 3 दिन से अधिक रहे, तो तुरंत चिकित्सक से परामर्श लें।\n\n*(यह सलाह केवल शैक्षिक जागरूकता के लिए है, किसी डॉक्टर का विकल्प नहीं है।)*`;
    }
    return `नमस्ते! IMD Care स्वास्थ्य सहायक में आपका स्वागत है।\n\nआपके द्वारा पूछे गए प्रश्न के संबंध में:\n- अपने दैनिक स्वास्थ्य में पर्याप्त जलपान (2-3 लीटर पानी) और 7-8 घंटे की गहरी नींद सुनिश्चित करें।\n- हल्का, सुपाच्य और संतुलित भारतीय भोजन (दाल, हरी सब्जियां, सलाद) लें।\n- नियमित रूप से सुबह 20-30 मिनट का प्राणायाम या तेज चलना स्वास्थ्य के लिए अत्यंत लाभकारी है।\n\nयदि आपके कोई विशिष्ट लक्षण हैं जो परेशान कर रहे हैं, तो कृपया अपने नजदीकी पंजीकृत डॉक्टर (MBBS) से जांच कराएं।`;
  }

  if (language === 'mr') {
    if (lower.includes('डोकेदुखी') || lower.includes('headache')) {
      return `नमस्कार! डोकेदुखी हे अतिशय सामान्य लक्षण आहे.\n\n**संभाव्य कारणे:**\n१. मानसिक ताण किंवा थकवा (Tension headache)\n२. पाण्याचे प्रमाण कमी होणे (Dehydration)\n३. संगणक किंवा मोबाईल स्क्रीनचा अतिवापर\n४. अपुरी झोप\n\n**घरगुती काळजी:**\n- शांत खोलीत विश्रांती घ्या.\n- भरपूर पाणी आणि पातळ पदार्थ (ताक, लिंबू पाणी) घ्या.\n- डोळ्यांवर थंड पाण्याची पट्टी ठेवा.\n\n**डॉक्टरांचा सल्ला कधी घ्यावा:**\nजर डोकेदुखी अचानक अतिशय तीव्र झाली, उलट्या किंवा चक्कर येत असेल, तर त्वरित जवळच्या डॉक्टरांना भेटा.\n\n*(ही माहिती केवळ आरोग्य साक्षरतेसाठी आहे.)*`;
    }
    return `नमस्कार! IMD Care आरोग्य सहाय्यक मध्ये आपले स्वागत आहे.\n\nनिरोगी आरोग्यासाठी महत्त्वाच्या टिप्स:\n- दररोज किमान २.५ ते ३ लिटर पाणी प्या.\n- जेवणात हिरव्या पालेभाज्या, कडधान्ये आणि फळांचा समावेश करा.\n- दररोज किमान ३० मिनिटे चालणे किंवा योगासने करा.\n\nआपली लक्षणे कायम राहिल्यास किंवा वाढल्यास कृपया तज्ज्ञ डॉक्टरांचा सल्ला घ्या.`;
  }

  // English fallback
  if (lower.includes('headache') || lower.includes('migraine')) {
    return `Hello! Mild to moderate headaches are very common and can stem from several everyday factors:\n\n**Common Explanations:**\n- **Tension Headache:** Often related to stress, prolonged posture, neck strain, or screen time.\n- **Dehydration:** Inadequate fluid intake during hot weather or busy workdays.\n- **Sleep Irregularity:** Insufficient rest or sudden disruptions in sleep schedule.\n- **Caffeine Fluctuation:** Missing regular tea/coffee or consuming excessive caffeine.\n\n**General Self-Care Steps:**\n1. Rest in a dim, well-ventilated, quiet room.\n2. Hydrate with water, electrolyte water, or tender coconut water.\n3. Apply a gentle cool or warm compress to forehead and neck muscles.\n4. Take a break from digital screens for at least 1 hour.\n\n**When to Seek Immediate Medical Evaluation:**\n- Sudden, explosive "thunderclap" severity (worst headache of your life).\n- Associated with high fever, stiff neck, vomiting, or altered speech/vision.\n- Following a direct head bump or injury.\n\n*Educational guidance only — please consult a licensed physician for a medical diagnosis.*`;
  }

  if (lower.includes('blood pressure') || lower.includes('hypertension') || lower.includes('bp')) {
    return `Managing blood pressure is essential for long-term cardiovascular health in India.\n\n**Lifestyle & Dietary Measures:**\n- **Salt Reduction:** Aim for less than 5 grams (approx. 1 level teaspoon) of salt per day across all curries and snacks. Avoid packaged papads, pickles, and salty namkeens.\n- **Potassium-Rich Whole Foods:** Include seasonal bananas, spinach (palak), bottle gourd (lauki), coconut water, and lentils (dal).\n- **Physical Activity:** 30–45 minutes of brisk walking 5 days a week helps relax blood vessels.\n- **Stress Management:** Daily 15 minutes of slow yogic breathing (Anulom Vilom / Pranayama) has shown positive impacts on autonomic tone.\n\n**Important:** Never alter or stop prescribed anti-hypertensive medications without consulting your prescribing doctor.`;
  }

  if (lower.includes('cough') || lower.includes('cold') || lower.includes('throat')) {
    return `Dry seasonal cough and mild throat irritation are frequently triggered by viral infections, seasonal weather shifts, or atmospheric particulate matter.\n\n**Comfort Measures:**\n- **Warm Salt Water Gargle:** Dissolve 1/2 teaspoon of salt in warm water; gargle 2–3 times daily.\n- **Steam Inhalation:** Gentle steam for 5–7 minutes can soothe upper respiratory passages.\n- **Warm Herbal Fluids:** Turmeric milk (haldi doodh), ginger-tulsi tea, and warm broths provide soothing warmth.\n- **Avoid irritants:** Keep away from smoke, dust, and chilled foods.\n\n**Red Flags to Watch:**\nConsult a physician promptly if you develop fever > 101°F for over 3 days, difficulty breathing, wheezing, or notice blood in your sputum.`;
  }

  return `Thank you for your question. As an AI health literacy assistant, here is clear, evidence-based context:\n\n**Understanding Your Query:**\nHealth wellness relies on maintaining consistent hydration (2-3 liters daily), balanced nutrition rich in micronutrients and fiber, restorative sleep (7-8 hours), and daily moderate physical movement.\n\n**Safe Next Steps:**\n- Monitor your symptoms closely over the next 24 to 48 hours.\n- Maintain a brief symptom log (when it started, what improves or worsens it).\n- If this concerns a chronic condition or medication change, arrange a consultation with your primary care physician or specialist.\n\n*Notice: IMD Care provides educational health information and is not a substitute for clinical diagnosis or emergency triage.*`;
}

export function getSyntheticSymptomResult(request: SymptomRequest): SymptomResult {
  const { symptom, severity, language } = request;

  if (language === 'hi') {
    return {
      isEmergency: false,
      possibleExplanations: [
        'हल्का वायरल संक्रमण या मौसमी बदलाव के कारण शरीर की प्रतिरक्षा प्रतिक्रिया।',
        'शारीरिक थकान, अनिद्रा या पोषण की अस्थाई कमी।',
        'सामान्य पाचन संबंधी असंतुलन या निर्जलीकरण।'
      ],
      selfCareAdvice: [
        'भरपूर आराम करें और पर्याप्त मात्रा में गुनगुना पानी या ओआरएस (ORS) लें।',
        'सुपाच्य, हल्का और ताजा बना भोजन (खिचड़ी, दाल-चावल) खाएं।',
        'भारी परिश्रम या तनाव से बचें।'
      ],
      whenToConsultDoctor: [
        'यदि लक्षण 3 दिनों से अधिक समय तक लगातार बने रहें या बिगड़ने लगें।',
        'यदि बुखार 101°F से अधिक हो जाए और सामान्य उपायों से न उतरे।',
        'यदि सामान्य दिनचर्या में अत्यधिक रुकावट आने लगे।'
      ],
      warningSigns: [
        'सांस लेने में अचानक अत्यधिक कठिनाई या सीने में भारीपन।',
        'लगातार अत्यधिक उल्टी या शरीर में पानी की अत्यधिक कमी।',
        'अचानक भ्रम, चक्कर या चेतना में कमी।'
      ],
      disclaimer: 'यह मार्गदर्शन केवल स्वास्थ्य साक्षरता के लिए है। किसी भी दवा को शुरू करने से पहले डॉक्टर से सलाह लें।',
      language: 'hi',
      isDemo: true
    };
  }

  if (language === 'mr') {
    return {
      isEmergency: false,
      possibleExplanations: [
        'हवामानातील बदल किंवा सौम्य व्हायरल संसर्ग.',
        'शारीरिक थकवा, कामाचा ताण किंवा अपुरी विश्रांती.',
        'पाण्याचे प्रमाण कमी असणे किंवा अन्नातील बदल.'
      ],
      selfCareAdvice: [
        'भरपूर विश्रांती घ्या आणि हायड्रेटेड राहा (कोमट पाणी, सूप, लिंबू पाणी).',
        'साधा आणि सहज पचणारा आहार घ्या.',
        'थंड किंवा अस्वच्छ अन्नाचे सेवन टाळा.'
      ],
      whenToConsultDoctor: [
        'लक्षणे ३ दिवसांपेक्षा जास्त काळ टिकून राहिल्यास.',
        'ताप १०१°F पेक्षा जास्त झाल्यास किंवा वारंवार चढ-उतार होत असल्यास.',
        'दैनिक कामे करणे कठीण होत असल्यास.'
      ],
      warningSigns: [
        'श्वास घेण्यास त्रास किंवा छातीत दाब जाणवणे.',
        'अचानक चक्कर येणे किंवा बोलण्यात अडखळणे.',
        'वारंवार उलट्या होऊन पाणी टिकत नसल्यास.'
      ],
      disclaimer: 'ही माहिती केवळ प्राथमिक मार्गदर्शनासाठी आहे. अचूक उपचारांसाठी तज्ज्ञ डॉक्टरांशी संपर्क साधा.',
      language: 'mr',
      isDemo: true
    };
  }

  // English
  return {
    isEmergency: false,
    possibleExplanations: [
      `Common non-specific physiological response associated with ${symptom || 'your described symptom'}, such as mild viral irritation, muscular fatigue, or environmental triggers.`,
      'Dehydration, nutritional timing, or temporary lifestyle stress.',
      'Localized inflammation or transient tension that frequently resolves with conservative care.'
    ],
    selfCareAdvice: [
      'Prioritize restorative rest and sleep in an unhurried, comfortable environment.',
      'Maintain adequate hydration (warm water, electrolytes, herbal teas, or broths).',
      'Consume light, easily digestible, nutrient-dense meals.',
      'Avoid sudden strenuous exertion or exposure to harsh environmental irritants.'
    ],
    whenToConsultDoctor: [
      'If symptoms persist beyond 48 to 72 hours without noticeable improvement.',
      `If ${severity === 'severe' ? 'the current severe distress continues' : 'discomfort noticeably escalates in severity'}.`,
      'If you have underlying conditions such as diabetes, hypertension, asthma, or cardiac disease.'
    ],
    warningSigns: [
      'Development of acute chest tightness, severe shortness of breath, or palpitations.',
      'High persistent fever (> 102°F) resistant to routine antipyretics.',
      'Neurological symptoms: sudden numbness, confusion, speech difficulties, or visual changes.',
      'Severe intractable vomiting leading to inability to retain any liquids.'
    ],
    disclaimer: 'This symptom review is generated for educational purposes and is not a clinical triage or definitive medical diagnosis. For personalized evaluation, consult a qualified physician.',
    language: 'en',
    isDemo: true
  };
}

export function getSyntheticReportExplanation(request: ReportExplanationRequest): ReportExplanationResult {
  const { testName, resultValue, unit, referenceRange, language } = request;

  let status: 'below' | 'normal' | 'above' | 'inconclusive' = 'normal';
  const val = parseFloat(resultValue);

  if (testName.toLowerCase().includes('hemoglobin') || testName.toLowerCase().includes('hb')) {
    if (!isNaN(val) && val < 12.0) status = 'below';
    else if (!isNaN(val) && val > 16.0) status = 'above';
  } else if (testName.toLowerCase().includes('cholesterol') || testName.toLowerCase().includes('ldl')) {
    if (!isNaN(val) && val > 100) status = 'above';
  } else if (testName.toLowerCase().includes('hba1c')) {
    if (!isNaN(val) && val >= 5.7) status = 'above';
  } else if (testName.toLowerCase().includes('tsh')) {
    if (!isNaN(val) && val > 4.5) status = 'above';
    else if (!isNaN(val) && val < 0.4) status = 'below';
  }

  if (language === 'hi') {
    return {
      testName,
      resultSummary: `${testName}: ${resultValue} ${unit} (संदर्भ श्रेणी: ${referenceRange})`,
      status,
      plainLanguageExplanation: `यह जांच (${testName}) आपके शरीर के महत्वपूर्ण जैविक मापदंडों का विश्लेषण करती है। दर्ज किया गया परिणाम (${resultValue} ${unit}) संदर्भ सीमा (${referenceRange}) की तुलना में ${status === 'above' ? 'अधिक' : status === 'below' ? 'कम' : 'सामान्य'} प्रतीत होता है। प्रयोगशाला जांच के परिणाम आहार, पानी के स्तर और समय पर भी निर्भर करते हैं।`,
      factorsToConsider: [
        'हालिया खान-पान, उपवास की अवधि या तरल पदार्थों का सेवन।',
        'तनाव का स्तर, नींद की गुणवत्ता और शारीरिक व्यायाम।',
        'वर्तमान में ली जा रही अन्य दवाएं या सप्लीमेंट्स।'
      ],
      questionsForDoctor: [
        `"डॉक्टर साहब, क्या यह ${resultValue} ${unit} परिणाम मेरे संपूर्ण स्वास्थ्य के लिए चिंता का विषय है?"`,
        '"क्या मुझे इस जांच को 4 से 6 सप्ताह बाद दोबारा दोहराने की आवश्यकता है?"',
        '"क्या आहार या जीवनशैली में किसी विशिष्ट सुधार की सिफारिश करेंगे?"'
      ],
      disclaimer: 'यह व्याख्या कृत्रिम शैक्षिक विश्लेषण है। किसी भी निर्णय से पहले प्रयोगशाला की मूल रिपोर्ट अपने चिकित्सक को दिखाएं।',
      language: 'hi',
      isDemo: true
    };
  }

  if (language === 'mr') {
    return {
      testName,
      resultSummary: `${testName}: ${resultValue} ${unit} (संदर्भ श्रेणी: ${referenceRange})`,
      status,
      plainLanguageExplanation: `ही चाचणी (${testName}) आपल्या रक्तातील विशिष्ट घटकांचे मोजमाप करते. आपला निकाल (${resultValue} ${unit}) दिलेल्या संदर्भ श्रेणीच्या (${referenceRange}) तुलनेत ${status === 'above' ? 'जास्त' : status === 'below' ? 'कमी' : 'सामान्य श्रेणीत'} आहे. अचूक वैद्यकीय निष्कर्षासाठी डॉक्टरांचा सल्ला आवश्यक आहे.`,
      factorsToConsider: [
        'चाचणीच्या आधी घेतलेले जेवण किंवा उपवासाचा कालावधी.',
        'दैनंदिन ताणतणाव आणि झोपेचे तास.',
        'सध्या सुरू असलेली औषधे किंवा जीवनसत्त्वे.'
      ],
      questionsForDoctor: [
        `"डॉक्टर, हा निकाल (${resultValue} ${unit}) माझ्यासाठी काय सूचित करतो?"`,
        '"माझ्या आहारात किंवा जीवनशैलीत काही बदल करण्याची गरज आहे का?"',
        '"पुढील फॉलो-अप तपासणी कधी करावी लागेल?"'
      ],
      disclaimer: 'हा अहवाल केवळ माहितीसाठी आहे. कृपया आपल्या डॉक्टरांचा अंतिम सल्ला घ्या.',
      language: 'mr',
      isDemo: true
    };
  }

  // English
  return {
    testName,
    resultSummary: `${testName}: ${resultValue} ${unit} compared to lab reference range (${referenceRange})`,
    status,
    plainLanguageExplanation: `The "${testName}" evaluates a key biomarker in your body. Your entered result is ${resultValue} ${unit}, evaluated against the typical laboratory reference interval of ${referenceRange}. In general clinical testing, values falling ${status === 'above' ? 'above' : status === 'below' ? 'below' : 'within'} this baseline indicate that further discussion with your care provider is appropriate to contextualize what this means for your individual medical history.`,
    factorsToConsider: [
      'Timing of test: whether you were fasting, hydrated, or took your usual morning medications.',
      'Recent dietary habits, alcohol intake, or strenuous exercise prior to blood draw.',
      'Variations across different diagnostic laboratories and testing equipment methodologies.'
    ],
    questionsForDoctor: [
      `"Doctor, what does this ${testName} result of ${resultValue} ${unit} mean in the context of my overall symptoms and health history?"`,
      '"Do you recommend repeating this test after a few weeks, or should we order complementary panels?"',
      '"Are there specific dietary, exercise, or lifestyle modifications I should begin today?"',
      '"Does this value warrant starting, adjusting, or pausing any medications?"'
    ],
    disclaimer: 'This simplified breakdown is synthetic health education and never replaces an official consultation with a licensed clinical pathologist or physician.',
    language: 'en',
    isDemo: true
  };
}

export function getSyntheticImportedReportAnalysis(
  fileName: string,
  extractedText: string = '',
  language: Language = 'en'
): ImportedReportAnalysisResult {
  const lowerFile = fileName.toLowerCase();
  const lowerText = extractedText.toLowerCase();

  // Detection for intentionally unreadable / corrupted files
  if (
    lowerFile.includes('unreadable') ||
    lowerFile.includes('blur') ||
    lowerFile.includes('corrupt') ||
    lowerText.includes('unreadable document')
  ) {
    const unreadableReasons: Record<Language, string> = {
      en: 'The uploaded file could not be parsed clearly. The text or image appears blurry, low-resolution, or obstructed. Please upload a clear digital PDF or well-lit photo of your lab report.',
      hi: 'अपलोड की गई फ़ाइल को स्पष्ट रूप से पढ़ा नहीं जा सका। टेक्स्ट या तस्वीर धुंधली, कम रिज़ॉल्यूशन वाली या अस्पष्ट है। कृपया अपनी लैब रिपोर्ट का स्पष्ट डिजिटल PDF या अच्छी रोशनी में खींची गई फोटो अपलोड करें।',
      mr: 'अपलोड केलेली फाईल वाचता आली नाही. प्रतिमा किंवा मजकूर अस्पष्ट, अंधुक किंवा खराब दिसत आहे. कृपया आपल्या लॅब अहवालाची स्पष्ट डिजिटल PDF किंवा चांगल्या प्रकाशातील फोटो अपलोड करा.'
    };

    return {
      reportTitle: 'Unreadable Laboratory Document',
      fileName,
      tests: [],
      overallSummary: unreadableReasons[language],
      abnormalReassurance: '',
      factorsToConsider: [],
      questionsForDoctor: [],
      disclaimer: 'IMD Care is an automated health literacy tool and requires legible diagnostic documents.',
      language,
      isDemo: true,
      isUnreadable: true,
      unreadableReason: unreadableReasons[language]
    };
  }

  // Parse specific tests if present in the text
  const tests: ImportedTestItem[] = [];

  if (lowerText.includes('hemoglobin') || lowerText.includes('hb')) {
    const hbMatch = extractedText.match(/(?:hemoglobin|hb)[^\d]*(\d+(?:\.\d+)?)/i);
    const val = hbMatch ? hbMatch[1] : '10.8';
    const num = parseFloat(val);
    const status = num < 12.0 ? 'below' : num > 16.0 ? 'above' : 'normal';

    const explanations: Record<Language, string> = {
      en: 'Hemoglobin carries oxygen in red blood cells. A value slightly below range often relates to nutritional iron intake, hydration status, or temporary fatigue.',
      hi: 'हीमोग्लोबिन लाल रक्त कोशिकाओं में ऑक्सीजन का वहन करता है। सीमा से थोड़ा कम मान अक्सर आयरन की कमी या पानी के स्तर से संबंधित होता है।',
      mr: 'हिमोग्लोबिन रक्तात ऑक्सिजन वाहून नेण्याचे काम करते. सामान्य श्रेणीपेक्षा थोडे कमी असणे हे लोहाचे प्रमाण किंवा थकव्याशी संबंधित असू शकते.'
    };

    tests.push({
      testName: 'Hemoglobin (Hb)',
      resultValue: val,
      unit: 'g/dL',
      referenceRange: '12.0 - 15.5 g/dL',
      status,
      simpleExplanation: explanations[language]
    });
  }

  if (lowerText.includes('glucose') || lowerText.includes('sugar') || lowerText.includes('fbs')) {
    const gMatch = extractedText.match(/(?:glucose|sugar|fbs)[^\d]*(\d+(?:\.\d+)?)/i);
    const val = gMatch ? gMatch[1] : '104';
    const num = parseFloat(val);
    const status = num > 99 ? 'above' : num < 70 ? 'below' : 'normal';

    const explanations: Record<Language, string> = {
      en: 'Fasting blood glucose measures circulating energy. Slightly elevated numbers may reflect recent carbohydrates, fasting timing, or minor morning stress (dawn effect).',
      hi: 'खाली पेट ग्लूकोज रक्त में शर्करा का स्तर मापता है। थोड़ा बढ़ा हुआ मान हालिया भोजन के समय या सुबह के हार्मोनल तनाव से प्रभावित हो सकता है।',
      mr: 'उपाशीपोटी रक्तातील साखरेचे मोजमाप. किंचित वाढलेला निकाल हा जेवणाची वेळ किंवा ताणतणावामुळेही असू शकतो.'
    };

    tests.push({
      testName: 'Fasting Blood Glucose',
      resultValue: val,
      unit: 'mg/dL',
      referenceRange: '70 - 99 mg/dL',
      status,
      simpleExplanation: explanations[language]
    });
  }

  if (lowerText.includes('tsh') || lowerText.includes('thyroid')) {
    const tshMatch = extractedText.match(/tsh[^\d]*(\d+(?:\.\d+)?)/i);
    const val = tshMatch ? tshMatch[1] : '2.8';
    const num = parseFloat(val);
    const status = num > 4.5 ? 'above' : num < 0.4 ? 'below' : 'normal';

    const explanations: Record<Language, string> = {
      en: 'TSH coordinates metabolic energy release by stimulating the thyroid. Values in this range reflect stable pituitary-thyroid signaling.',
      hi: 'टीएसएच (TSH) थायरॉइड ग्रंथि को नियंत्रित करता है। यह मान संतुलित थायरॉइड कार्यप्रणाली को दर्शाता है।',
      mr: 'टीएसएच थायरॉईड ग्रंथीचे कार्य नियंत्रित करते. हा निकाल सामान्य कार्य दर्शवतो.'
    };

    tests.push({
      testName: 'Thyroid Stimulating Hormone (TSH)',
      resultValue: val,
      unit: 'µIU/mL',
      referenceRange: '0.4 - 4.5 µIU/mL',
      status,
      simpleExplanation: explanations[language]
    });
  }

  // If no specific tests detected or empty text (e.g. image without text layer), use a standard comprehensive blood profile
  if (tests.length === 0) {
    if (language === 'hi') {
      tests.push(
        {
          testName: 'हीमोग्लोबिन (Hemoglobin Hb)',
          resultValue: '10.8',
          unit: 'g/dL',
          referenceRange: '12.0 - 15.5 g/dL',
          status: 'below',
          simpleExplanation: 'लाल रक्त कोशिकाओं में ऑक्सीजन ले जाने वाला प्रोटीन। संदर्भ सीमा से थोड़ा कम मान पोषण और आयरन की स्थिति को दर्शाता है।'
        },
        {
          testName: 'फास्टिंग ब्लड शुगर (Fasting Glucose)',
          resultValue: '104',
          unit: 'mg/dL',
          referenceRange: '70 - 99 mg/dL',
          status: 'above',
          simpleExplanation: 'रातभर उपवास के बाद रक्त शर्करा का स्तर। थोड़ा बढ़ा हुआ मान भोजन के समय या तनाव से भी आ सकता है।'
        },
        {
          testName: 'सीरम क्रिएटिनिन (Kidney Function)',
          resultValue: '0.9',
          unit: 'mg/dL',
          referenceRange: '0.7 - 1.2 mg/dL',
          status: 'normal',
          simpleExplanation: 'मांसपेशियों के सामान्य उपापचय का अपशिष्ट उत्पाद। यह परिणाम गुर्दों की स्वस्थ कार्यक्षमता का संकेत देता है।'
        },
        {
          testName: 'एलडीएल कोलेस्ट्रॉल (LDL "Bad" Cholesterol)',
          resultValue: '118',
          unit: 'mg/dL',
          referenceRange: 'Less than 100 mg/dL',
          status: 'above',
          simpleExplanation: 'धमनियों में वसा का परिवहन करने वाला लिपोप्रोटीन। थोड़ा अधिक मान जीवनशैली और आहार में संतुलन की आवश्यकता दर्शाता है।'
        }
      );
    } else if (language === 'mr') {
      tests.push(
        {
          testName: 'हिमोग्लोबिन (Hemoglobin Hb)',
          resultValue: '10.8',
          unit: 'g/dL',
          referenceRange: '12.0 - 15.5 g/dL',
          status: 'below',
          simpleExplanation: 'रक्तातील ऑक्सिजन वाहक घटक. सामान्य श्रेणीपेक्षा थोडे कमी असणे हे आहारातील लोहाच्या प्रमाणावर अवलंबून असते.'
        },
        {
          testName: 'उपाशीपोटी साखर (Fasting Blood Sugar)',
          resultValue: '104',
          unit: 'mg/dL',
          referenceRange: '70 - 99 mg/dL',
          status: 'above',
          simpleExplanation: 'उपाशीपोटी रक्तातील ग्लुकोजचे प्रमाण. थोडी वाढ ही आदल्या रात्रीचे जेवण किंवा तणावामुळे असू शकते.'
        },
        {
          testName: 'सीरम क्रिएटिनिन (किडनी कार्यक्षमता)',
          resultValue: '0.9',
          unit: 'mg/dL',
          referenceRange: '0.7 - 1.2 mg/dL',
          status: 'normal',
          simpleExplanation: 'किडनीचे आरोग्य तपासण्यासाठी महत्त्वाचा घटक. हा निकाल सामान्य श्रेणीत आहे.'
        },
        {
          testName: 'एलडीएल कोलेस्ट्रॉल (LDL Cholesterol)',
          resultValue: '118',
          unit: 'mg/dL',
          referenceRange: 'Less than 100 mg/dL',
          status: 'above',
          simpleExplanation: 'रक्तातील चरबीचे प्रमाण. थोडी वाढ ही आहारातील बदल आणि शतपावलीसारख्या व्यायामाने सुधारू शकते.'
        }
      );
    } else {
      tests.push(
        {
          testName: 'Hemoglobin (Hb)',
          resultValue: '10.8',
          unit: 'g/dL',
          referenceRange: '12.0 - 15.5 g/dL',
          status: 'below',
          simpleExplanation: 'Measures the oxygen-carrying protein in red blood cells. Slightly below range suggests monitoring dietary iron and hydration.'
        },
        {
          testName: 'Fasting Blood Glucose',
          resultValue: '104',
          unit: 'mg/dL',
          referenceRange: '70 - 99 mg/dL',
          status: 'above',
          simpleExplanation: 'Reflects blood sugar after an overnight fast. Mild elevation can be influenced by dinner timing, sleep quality, or temporary stress.'
        },
        {
          testName: 'Serum Creatinine',
          resultValue: '0.9',
          unit: 'mg/dL',
          referenceRange: '0.7 - 1.2 mg/dL',
          status: 'normal',
          simpleExplanation: 'Byproduct of muscle metabolism filtered by healthy kidneys. Indicates healthy renal filtration.'
        },
        {
          testName: 'LDL Cholesterol',
          resultValue: '118',
          unit: 'mg/dL',
          referenceRange: 'Less than 100 mg/dL',
          status: 'above',
          simpleExplanation: 'Transports cholesterol through circulation. Mild elevation warrants review of healthy fats and daily walking.'
        }
      );
    }
  }

  const overallSummaries: Record<Language, string> = {
    en: `Successfully parsed ${tests.length} laboratory biomarkers from "${fileName}". The report displays a routine diagnostic screening profile with mostly stable markers alongside minor variations.`,
    hi: `दस्तावेज़ "${fileName}" से ${tests.length} लैब बायोमार्कर्स सफलतापूर्वक निकाले गए। रिपोर्ट में कुछ मान संदर्भ सीमा के भीतर और कुछ मामूली रूप से भिन्न पाए गए हैं।`,
    mr: `"${fileName}" फाईलमधून ${tests.length} लॅब चाचण्यांचे यशस्वी विश्लेषण झाले. अहवालात काही चाचण्या सामान्य तर काही किंचित फरकाने आढळल्या आहेत.`
  };

  const abnormalReassurances: Record<Language, string> = {
    en: 'Important Clinical Reassurance: Abnormal values do not automatically mean you have a disease. Laboratory reference intervals represent a broad statistical bell curve (the middle 95% of healthy individuals). Minor deviations are frequently caused by benign day-to-day variables — such as how much water you drank before the test, your last meal timing, stress levels, recent exercise, sleep quality, or assay calibration differences between diagnostic labs. Only a licensed doctor can evaluate test results in the full context of your physical examination and medical history.',
    hi: 'महत्वपूर्ण चिकित्सीय आश्वासन: किसी जांच का मान असामान्य (कम या अधिक) होने का अर्थ यह बिल्कुल नहीं है कि आपको कोई बीमारी है। लैब संदर्भ सीमाएं स्वस्थ आबादी के 95% औसत पर आधारित होती हैं। मामूली उतार-चढ़ाव पूरी तरह सामान्य हो सकते हैं और यह निर्जलीकरण, उपवास की सटीक अवधि, तनाव, अनिद्रा या प्रयोगशाला मशीनों के अंतर से भी हो सकते हैं। केवल एक पंजीकृत डॉक्टर ही आपके व्यक्तिगत स्वास्थ्य इतिहास के संदर्भ में इसका सही मूल्यांकन कर सकते हैं।',
    mr: 'महत्त्वाचे वैद्यकीय आश्वासन: चाचणीचा निकाल असामान्य असणे म्हणजे आजारच आहे असे मुळीच नाही. प्रयोगशाळेच्या संदर्भ श्रेणी या सामान्य व्यक्तींच्या सांख्यिकीवर आधारित असतात. पाण्याचे प्रमाण, आदल्या दिवशीचा आहार, झोप, कामाचा ताण आणि लॅबच्या पद्धती यांमुळे आकडे बदलू शकतात. म्हणूनच कोणत्याही निष्कर्षावर येण्यापूर्वी आपल्या डॉक्टरांचा प्रत्यक्ष सल्ला घेणे आवश्यक आहे.'
  };

  const factorsToConsider: Record<Language, string[]> = {
    en: [
      'Hydration Status: Being under-hydrated can concentrate blood markers and falsely elevate hemoglobin or creatinine.',
      'Fasting Window: Blood drawn less than 8 hours after food directly influences fasting glucose and triglycerides.',
      'Biological Rhythms: Hormones like TSH naturally fluctuate depending on morning vs. afternoon sample collection.',
      'Laboratory Methodologies: Different diagnostic centers use differing assay equipment and calibration baselines.'
    ],
    hi: [
      'पानी का स्तर (हाइड्रेशन): कम पानी पीने से रक्त के कण अधिक गाढ़े दिख सकते हैं जिससे हीमोग्लोबिन या क्रिएटिनिन अधिक आ सकता है।',
      'उपवास की अवधि: 8-10 घंटे का उपवास न होने से ब्लड ग्लूकोज का परिणाम प्रभावित हो सकता है।',
      'दैनिक जैविक चक्र: सुबह और दोपहर के समय टीएसएच (TSH) जैसे हार्मोन में स्वाभाविक उतार-चढ़ाव होता है।',
      'प्रयोगशाला विधियाँ: अलग-अलग डायग्नोस्टिक लैब विभिन्न मशीनों और मानकों का उपयोग करती हैं।'
    ],
    mr: [
      'पाण्याचे प्रमाण: शरीरात पाण्याचे प्रमाण कमी असल्यास रक्तातील घटकांचे प्रमाण जास्त दिसू शकते.',
      'उपाशीपोटी राहण्याचा वेळ: किमान ८ ते १० तास उपाशीपोटी न राहिल्यास साखरेचा निकाल बदलू शकतो.',
      'नैसर्गिक चक्र: सकाळ आणि दुपारच्या नमुन्यांमध्ये हार्मोन्सचे प्रमाण नैसर्गिकरित्या बदलू शकते.',
      'लॅब पद्धती: विविध प्रयोगशाळांच्या चाचणी पद्धतींमध्ये थोडा फरक असू शकतो.'
    ]
  };

  const questionsForDoctor: Record<Language, string[]> = {
    en: [
      '"Doctor, do these specific biomarker values align with my current symptoms and health history?"',
      '"Could any of the mild variations be related to my hydration, diet, or sleep prior to the test?"',
      '"Do you recommend repeating these tests in 4 to 6 weeks, or ordering additional follow-up panels?"',
      '"Are there simple lifestyle, hydration, or dietary habits I can adopt right now?"'
    ],
    hi: [
      '"डॉक्टर साहब, क्या ये परिणाम मेरे वर्तमान लक्षणों और स्वास्थ्य इतिहास के अनुकूल हैं?"',
      '"क्या कोई हल्का बदलाव जांच से पहले के खान-पान, पानी या नींद से संबंधित हो सकता है?"',
      '"क्या मुझे 4 से 6 सप्ताह बाद इस जांच को दोहराने की आवश्यकता है?"',
      '"क्या मेरे लिए आहार या दैनिक दिनचर्या में किसी सुधार की सिफारिश करेंगे?"'
    ],
    mr: [
      '"डॉक्टर, हे निकाल माझ्या सध्याच्या आरोग्याशी सुसंगत आहेत का?"',
      '"हे किरकोळ बदल आदल्या दिवसाच्या आहाराशी किंवा झोपेशी संबंधित असू शकतात का?"',
      '"काही आठवड्यांनी ही चाचणी पुन्हा करून घेण्याची गरज आहे का?"',
      '"आहार आणि जीवनशैलीत कोणते बदल करणे योग्य ठरेल?"'
    ]
  };

  const disclaimers: Record<Language, string> = {
    en: 'This imported report analysis is an AI-powered health literacy summary and does not constitute a clinical medical diagnosis. Never start, stop, or change medication dosages without consulting a licensed physician.',
    hi: 'यह इम्पोर्टेड रिपोर्ट विश्लेषण एक AI-संचालित स्वास्थ्य साक्षरता सारांश है और चिकित्सीय निदान का विकल्प नहीं है। डॉक्टर की सलाह के बिना कभी भी दवाओं में बदलाव न करें।',
    mr: 'हे विश्लेषण केवळ आरोग्य साक्षरतेसाठी असून प्रत्यक्ष वैद्यकीय निदान नाही. डॉक्टरांच्या सल्ल्याशिवाय औषधांमध्ये कोणताही बदल करू नका.'
  };

  return {
    reportTitle: fileName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
    fileName,
    tests,
    overallSummary: overallSummaries[language],
    abnormalReassurance: abnormalReassurances[language],
    factorsToConsider: factorsToConsider[language],
    questionsForDoctor: questionsForDoctor[language],
    disclaimer: disclaimers[language],
    language,
    isDemo: true
  };
}
