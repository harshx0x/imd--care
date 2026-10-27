import { NextRequest, NextResponse } from 'next/server';
import { getOpenAIClient, getOpenAIModel, isOpenAIConfigured } from '@/lib/openai';
import { checkEmergencySymptoms } from '@/lib/emergency';
import { getSyntheticSymptomResult } from '@/lib/synthetic-data';
import { SymptomRequest, SymptomResult } from '@/lib/types';
import { checkRateLimit } from '@/lib/security/rate-limiter';
import { sanitizeTextInput, validateLanguage } from '@/lib/security/input-validator';
import { metricsTracker } from '@/lib/monitoring/metrics-tracker';

export async function POST(req: NextRequest) {
  const start = Date.now();

  // 1. Rate Limiting
  const rateCheck = checkRateLimit(req, 'symptoms');
  if (!rateCheck.allowed) {
    metricsTracker.recordRequest('/api/symptoms', 'POST', 429, Date.now() - start);
    return NextResponse.json(
      {
        error: 'Too many symptom assessment requests. Please wait a moment.',
        retryAfter: rateCheck.resetInSeconds
      },
      { status: 429, headers: { 'Retry-After': String(rateCheck.resetInSeconds) } }
    );
  }

  try {
    let body: Partial<SymptomRequest> = {};
    try {
      body = await req.json();
    } catch {
      metricsTracker.recordRequest('/api/symptoms', 'POST', 400, Date.now() - start);
      return NextResponse.json({ error: 'Invalid JSON request payload.' }, { status: 400 });
    }

    // 2. Input Validation
    const symptomValidation = sanitizeTextInput(body.symptom, 1000, 'Symptom description');
    if (!symptomValidation.valid || !symptomValidation.value) {
      metricsTracker.recordRequest('/api/symptoms', 'POST', 400, Date.now() - start);
      return NextResponse.json(
        { error: symptomValidation.error || 'Please describe the symptoms you are experiencing.' },
        { status: 400 }
      );
    }

    const symptom = symptomValidation.value;
    const duration = typeof body.duration === 'string' ? body.duration.trim().slice(0, 100) : '1-3 days';
    const severity = ['mild', 'moderate', 'severe'].includes(String(body.severity)) ? body.severity! : 'mild';
    const ageGroup = typeof body.ageGroup === 'string' ? body.ageGroup.trim().slice(0, 100) : 'Adult (18-59)';
    const existingConditions = typeof body.existingConditions === 'string' ? body.existingConditions.trim().slice(0, 300) : '';
    const language = validateLanguage(body.language);

    // 3. Conservative Emergency Red Flag Check
    const emergencyEval = checkEmergencySymptoms(`${symptom} ${existingConditions}`);
    if (emergencyEval.isEmergency || (severity === 'severe' && /(chest|breath|head injury|unconscious|bleed)/i.test(symptom))) {
      const emergencyReason = emergencyEval.reason || 'Severe acute symptoms requiring immediate clinical evaluation.';
      const emergencyResult: SymptomResult = {
        isEmergency: true,
        emergencyReason,
        possibleExplanations: [
          language === 'hi'
            ? 'संभावित तीव्र चिकित्सीय आपात स्थिति जिसके लिए तत्काल अस्पताल मूल्यांकन की आवश्यकता है।'
            : language === 'mr'
            ? 'तातडीची गंभीर वैद्यकीय स्थिती ज्यासाठी त्वरित रुग्णालयात जाणे आवश्यक आहे.'
            : 'Potential acute condition requiring immediate clinical triage and monitoring in an emergency department.'
        ],
        selfCareAdvice: [
          language === 'hi'
            ? 'स्वयं गाड़ी न चलाएं। किसी परिजन या एम्बुलेंस को तुरंत बुलाएं।'
            : language === 'mr'
            ? 'स्वतः गाडी चालवू नका. त्वरित रुग्णवाहिका किंवा कुटुंबातील व्यक्तीची मदत घ्या.'
            : 'Do not drive yourself. Have someone drive you or call an ambulance to the nearest hospital casualty immediately.',
          language === 'hi'
            ? 'आराम से बैठें या लेटें और ढीले कपड़े पहनें।'
            : language === 'mr'
            ? 'शांत बसा किंवा झोपा, सैल कपडे घाला.'
            : 'Sit or rest in a comfortable position, loosen constrictive clothing, and remain calm.'
        ],
        whenToConsultDoctor: [
          language === 'hi'
            ? 'तत्काल — 1 मिनट भी प्रतीक्षा न करें।'
            : language === 'mr'
            ? 'त्वरित — विलंब करू नका.'
            : 'IMMEDIATELY — without waiting.'
        ],
        warningSigns: language === 'hi'
          ? [
              'सीने में दर्द या भारीपन जो बांह, गर्दन या पीठ तक फैले',
              'सांस लेने में अत्यधिक कठिनाई या पूरे वाक्य न बोल पाना',
              'अचानक एक तरफ कमजोरी, चेहरे का झुकना या बोलने में कठिनाई',
              'लगातार उल्टी होना या तरल पदार्थ न पचना'
            ]
          : language === 'mr'
          ? [
              'छातीत तीव्र वेदना किंवा अस्वस्थता जी डाव्या हाताकडे किंवा जबड्याकडे जाते',
              'श्वास घेण्यास गंभीर अडचण किंवा धाप लागणे',
              'अचानक तोल जाणे, बोलण्यात अडखळणे किंवा शरीराचा एक भाग लुळा पडणे',
              'तीव्र आणि असह्य उलट्या'
            ]
          : [
              'Crushing chest pressure or tightness radiating to arm or jaw',
              'Severe shortness of breath or inability to speak full sentences',
              'Sudden unilateral weakness, facial droop, or speech slurring',
              'Severe persistent vomiting or inability to retain fluids'
            ],
        disclaimer:
          language === 'hi'
            ? 'चिकित्सा अस्वीकरण: यह मार्गदर्शन केवल आपातकालीन सूचना के लिए है और निश्चित निदान नहीं है। आपात स्थिति में तुरंत 112 या 108 डायल करें।'
            : language === 'mr'
            ? 'वैद्यकीय अस्वीकरण: ही माहिती केवळ आपत्कालीन मार्गदर्शनासाठी आहे. आणीबाणीच्या प्रसंगी तात्काळ ११२ किंवा १०८ वर संपर्क साधा.'
            : 'Medical Disclaimer: This guidance is for immediate safety triage and does not constitute a confirmed diagnosis. Dial 112 or 108 in an acute emergency.',
        language,
        isDemo: false
      };

      const durationMs = Date.now() - start;
      metricsTracker.recordRequest('/api/symptoms', 'POST', 200, durationMs);
      return NextResponse.json(emergencyResult);
    }

    // 4. Offline / Synthetic Fallback if OpenAI is unconfigured
    if (!isOpenAIConfigured()) {
      metricsTracker.recordAICall('offline');
      const synthetic = getSyntheticSymptomResult({
        symptom,
        duration,
        severity,
        ageGroup,
        existingConditions,
        language
      });
      const durationMs = Date.now() - start;
      metricsTracker.recordRequest('/api/symptoms', 'POST', 200, durationMs);
      return NextResponse.json(synthetic);
    }

    // 5. OpenAI Clinical Symptom Guidance
    const openai = getOpenAIClient();
    if (!openai) {
      metricsTracker.recordAICall('offline');
      const synthetic = getSyntheticSymptomResult({
        symptom,
        duration,
        severity,
        ageGroup,
        existingConditions,
        language
      });
      const durationMs = Date.now() - start;
      metricsTracker.recordRequest('/api/symptoms', 'POST', 200, durationMs);
      return NextResponse.json(synthetic);
    }

    const systemPrompt = `You are an AI Clinical Symptom Guidance Communicator for IMD Care, an Indian health literacy startup.
CRITICAL SAFETY & MEDICAL RULES:
1. NEVER provide a definitive clinical diagnosis. Frame all conditions as "Possible explanations to explore with your doctor".
2. Emphasize home supportive self-care suitable for the Indian context (hydration, ORS, resting, light khichdi/soup).
3. Provide 4 actionable "When to consult a doctor" milestones.
4. Provide 4 "Emergency red flags" that necessitate dialing 112 or visiting emergency casualty immediately.
5. All output must be strict JSON matching the schema below in the requested language: ${language.toUpperCase()}.`;

    const userPrompt = `Patient Details:
- Symptoms: "${symptom}"
- Duration: "${duration}"
- Severity: "${severity}"
- Age Group: "${ageGroup}"
- Existing Conditions: "${existingConditions || 'None reported'}"
- Language: "${language}"

Output STRICT JSON only:
{
  "possibleExplanations": ["explanation 1", "explanation 2", "explanation 3"],
  "selfCareAdvice": ["advice 1", "advice 2", "advice 3", "advice 4"],
  "whenToConsultDoctor": ["milestone 1", "milestone 2", "milestone 3", "milestone 4"],
  "warningSigns": ["flag 1", "flag 2", "flag 3", "flag 4"]
}`;

    const model = getOpenAIModel();
    const completion = await openai.chat.completions.create({
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.2,
      response_format: { type: 'json_object' }
    });

    metricsTracker.recordAICall('openai');

    const rawJson = completion.choices[0]?.message?.content || '{}';
    const parsed = JSON.parse(rawJson);

    const result: SymptomResult = {
      isEmergency: false,
      possibleExplanations: Array.isArray(parsed.possibleExplanations) && parsed.possibleExplanations.length > 0
        ? parsed.possibleExplanations
        : ['Common physiological or muscular response to fatigue or mild viral illness.'],
      selfCareAdvice: Array.isArray(parsed.selfCareAdvice) && parsed.selfCareAdvice.length > 0
        ? parsed.selfCareAdvice
        : ['Stay well hydrated with clean water, coconut water, or warm soups.', 'Ensure 7-8 hours of restful sleep.'],
      whenToConsultDoctor: Array.isArray(parsed.whenToConsultDoctor) && parsed.whenToConsultDoctor.length > 0
        ? parsed.whenToConsultDoctor
        : ['If symptoms worsen or do not show improvement within 3 days.'],
      warningSigns: Array.isArray(parsed.warningSigns) && parsed.warningSigns.length > 0
        ? parsed.warningSigns
        : ['Sudden high persistent fever or difficulty breathing.'],
      disclaimer: parsed.disclaimer || (
        language === 'hi'
          ? 'चिकित्सा अस्वीकरण: यह मार्गदर्शन केवल स्वास्थ्य साक्षरता के लिए है और निश्चित निदान नहीं है। हमेशा एक योग्य डॉक्टर से परामर्श लें।'
          : language === 'mr'
          ? 'वैद्यकीय अस्वीकरण: हे केवळ शैक्षणिक मार्गदर्शन असून अंतिम निदान नाही. नेहमी तज्ज्ञ डॉक्टरांचा सल्ला घ्या.'
          : 'Medical Disclaimer: This information is for health literacy only and is not a medical diagnosis. Always consult a qualified physician.'
      ),
      language,
      isDemo: false
    };

    const durationMs = Date.now() - start;
    metricsTracker.recordRequest('/api/symptoms', 'POST', 200, durationMs);
    return NextResponse.json(result);
  } catch (err: unknown) {
    console.error('Symptom route error:', err);
    const durationMs = Date.now() - start;
    metricsTracker.recordRequest('/api/symptoms', 'POST', 500, durationMs);
    return NextResponse.json(
      { error: 'An error occurred while evaluating symptoms. Please try again.' },
      { status: 500 }
    );
  }
}
