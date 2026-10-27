import { NextRequest, NextResponse } from 'next/server';
import { getOpenAIClient, getOpenAIModel, isOpenAIConfigured } from '@/lib/openai';
import { checkEmergencySymptoms, getIndianEmergencyNumbers } from '@/lib/emergency';
import { getSyntheticSymptomResult } from '@/lib/synthetic-data';
import { SymptomRequest, SymptomResult } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const body: SymptomRequest = await req.json();
    const symptom = typeof body.symptom === 'string' ? body.symptom.trim().slice(0, 1000) : '';
    const duration = typeof body.duration === 'string' ? body.duration.trim() : '1-3 days';
    const severity = ['mild', 'moderate', 'severe'].includes(body.severity) ? body.severity : 'mild';
    const ageGroup = typeof body.ageGroup === 'string' ? body.ageGroup.trim() : 'Adult (18-59)';
    const existingConditions = typeof body.existingConditions === 'string' ? body.existingConditions.trim().slice(0, 300) : '';
    const language = ['en', 'hi', 'mr'].includes(body.language) ? body.language : 'en';

    if (!symptom) {
      return NextResponse.json(
        { error: 'Please describe the symptoms you are experiencing.' },
        { status: 400 }
      );
    }

    // Conservative Emergency Red Flag Check
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
              'चेहरे का टेढ़ा होना, बांह में कमजोरी, बोली में लड़खड़ाहट (FAST)',
              'बेहोशी, दौरे पड़ना या अत्यधिक भ्रम की स्थिति'
            ]
          : language === 'mr'
          ? [
              'छातीत दुखणे किंवा दाब जाणवणे जो हात, मान किंवा पाठीकडे पसरतो',
              'श्वास घेण्यास तीव्र अडचण किंवा पूर्ण वाक्य बोलता न येणे',
              'चेहरा एका बाजूला वाकडा होणे, हातातील ताकद जाणे, बोलताना अडखळणे (FAST)',
              'अचानक चक्कर येऊन बेशुद्ध पडणे किंवा गोंधळ उडणे'
            ]
          : [
              'Chest pain or pressure radiating to arm, neck, or back',
              'Inability to catch breath or speak in full sentences',
              'Facial drooping, arm weakness, slurred speech (FAST)',
              'Loss of consciousness, seizures, or confusion'
            ],
        disclaimer: language === 'hi'
          ? 'चेतावनी: आपातकालीन स्थितियों में डिजिटल टूल का उपयोग न करें। तुरंत 112 या 108 पर कॉल करें।'
          : language === 'mr'
          ? 'सूचना: तातडीच्या परिस्थितीत डिजिटल टूल्सवर अवलंबून राहू नका. ताबडतोब ११२ किंवा १०८ वर संपर्क करा.'
          : 'CRITICAL ALERT: Automated checks are never a substitute for professional emergency triage. Call 112 or 108 immediately.',
        language,
        isDemo: false
      };

      return NextResponse.json(emergencyResult);
    }

    const openai = getOpenAIClient();

    if (!openai || !isOpenAIConfigured()) {
      const synthetic = getSyntheticSymptomResult({
        symptom,
        duration,
        severity,
        ageGroup,
        existingConditions,
        language
      });
      return NextResponse.json(synthetic);
    }

    const promptText = `
You are an expert AI clinical health educator for the IMD Care platform in India.
Analyze the following symptom report and output a STRICT JSON object.

User Details:
- Symptom: "${symptom}"
- Duration: "${duration}"
- Severity: "${severity}"
- Age Group: "${ageGroup}"
- Existing Conditions: "${existingConditions || 'None reported'}"
- Desired Language: "${language}" ('en' for English, 'hi' for Hindi in Devanagari, 'mr' for Marathi in Devanagari)

SAFETY REQUIREMENTS:
1. DO NOT state a definitive medical diagnosis. Provide 3-4 plausible, educational possibilities.
2. DO NOT prescribe prescription medications or antibiotics. Provide non-pharmacological comfort and self-care steps.
3. List practical criteria for when to schedule a clinical consultation with a doctor.
4. List 3-4 critical red-flag warning signs that would require emergency care (mentioning India 112/108 if relevant).
5. All text inside JSON must be in the requested language (${language}).

OUTPUT FORMAT - ONLY VALID JSON, NO OTHER TEXT:
{
  "isEmergency": false,
  "possibleExplanations": ["explanation 1", "explanation 2", "explanation 3"],
  "selfCareAdvice": ["self care step 1", "self care step 2", "self care step 3"],
  "whenToConsultDoctor": ["criteria 1", "criteria 2", "criteria 3"],
  "warningSigns": ["warning sign 1", "warning sign 2", "warning sign 3"],
  "disclaimer": "Clear medical safety disclaimer in the target language"
}
`;

    const model = getOpenAIModel();

    try {
      const completion = await openai.chat.completions.create({
        model: model,
        messages: [
          { role: 'system', content: 'You are an AI medical health educator that outputs strict JSON for symptom guidance. You never diagnose or prescribe.' },
          { role: 'user', content: promptText }
        ],
        temperature: 0.4,
        response_format: { type: 'json_object' }
      });

      const rawJson = completion.choices[0]?.message?.content || '{}';
      const parsed = JSON.parse(rawJson);

      const result: SymptomResult = {
        isEmergency: Boolean(parsed.isEmergency),
        possibleExplanations: Array.isArray(parsed.possibleExplanations) ? parsed.possibleExplanations : ['Common benign physiological reaction.'],
        selfCareAdvice: Array.isArray(parsed.selfCareAdvice) ? parsed.selfCareAdvice : ['Maintain hydration and rest.'],
        whenToConsultDoctor: Array.isArray(parsed.whenToConsultDoctor) ? parsed.whenToConsultDoctor : ['If symptoms persist beyond 48-72 hours.'],
        warningSigns: Array.isArray(parsed.warningSigns) ? parsed.warningSigns : ['Severe shortness of breath or high fever.'],
        disclaimer: parsed.disclaimer || 'Guidance is strictly educational and not a medical diagnosis.',
        language,
        isDemo: false
      };

      return NextResponse.json(result);
    } catch (apiErr: unknown) {
      console.error('OpenAI symptom analysis error, falling back to synthetic guidance:', apiErr);
      const synthetic = getSyntheticSymptomResult({
        symptom,
        duration,
        severity,
        ageGroup,
        existingConditions,
        language
      });
      return NextResponse.json(synthetic);
    }
  } catch (err: unknown) {
    console.error('Symptom route error:', err);
    return NextResponse.json(
      { error: 'An error occurred while evaluating your symptom profile.' },
      { status: 500 }
    );
  }
}
