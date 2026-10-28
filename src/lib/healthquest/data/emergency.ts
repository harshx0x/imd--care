import { HealthQuestion } from '../types';

export const EMERGENCY_QUESTIONS: HealthQuestion[] = [
  {
    id: 'emg_heat_stroke_delhi',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'During a 44°C North Indian summer heatwave, a 52-year-old outdoor gardener collapses with hot, dry, flushed skin, cessation of sweating, confusion, and high body temperature (104°F / 40°C). What is your FIRST and most urgent life-saving action?',
      hi: '44°C की भीषण गर्मी में एक 52 वर्षीय माली अचानक गिर पड़ता है। उसकी त्वचा गर्म, लाल और सूखी है (पसीना आना बंद हो चुका है), वह भ्रमित है और शरीर का तापमान 104°F है। आपकी पहली और सबसे जरूरी जीवन रक्षक कार्रवाई क्या होनी चाहिए?',
      mr: '४४°C च्या तीव्र उन्हाळ्यात ५२ वर्षीय व्यक्ती चक्कर येऊन पडते. त्वचा गरम, कोरडी आणि लाल झाली असून घाम येणे बंद झाले आहे, ती व्यक्ती गोंधळलेली आहे आणि ताप १०४°F आहे. तुमचे पहिले आणि तातडीचे पाऊल काय असावे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Suspected Severe Exertional Heat Stroke',
        hi: 'गंभीर हीट स्ट्रोक (लू लगना) का संदिग्ध मामला',
        mr: 'तीव्र उष्माघात (Heat Stroke) चे संशयित लक्षण'
      },
      victimProfile: {
        en: '52-year-old male, working outdoors in direct midday sunlight.',
        hi: '52 वर्षीय पुरुष, दोपहर की तेज धूप में काम कर रहे थे।',
        mr: '५२ वर्षीय पुरुष, भर उन्हात काम करत होते.'
      },
      symptomsObserved: {
        en: ['Body temperature > 104°F (40°C)', 'Altered mental state / delirium', 'Hot, dry skin (anhydrosis)', 'Rapid bounding pulse'],
        hi: ['शरीर का तापमान > 104°F', 'मानसिक भ्रम और बेहोशी की स्थिति', 'गर्म व सूखी त्वचा (पसीना न आना)', 'तेज नब्ज'],
        mr: ['तापमान > १०४°F', 'मानसिक गोंधळ व बेशुद्धी', 'गरम व कोरडी त्वचा (घाम नसणे)', 'जलद नाडी']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_water_mouth', text: { en: 'Force-feed cold water down his throat while he lies flat on his back', hi: 'पीठ के बल लिटाकर जबरदस्ती उसके मुंह में ठंडा पानी उंडेलें', mr: 'पाठीवर झोपवून बळजबरीने तोंडात थंड पाणी ओतावे' } },
      { id: 'opt_triage_cool', text: { en: 'Call 112/108 immediately, move to shade, and rapidly cool body with wet cold sheets and fanning', hi: 'तुरंत 112/108 पर कॉल करें, छाया में लाएं और ठंडे पानी की गीली चादरों व पंखे से शरीर को तेजी से ठंडा करें', mr: 'तातडीने ११२/१०८ ला कॉल करा, सावलीत आणा आणि ओल्या गार कापडाने व पंख्याने शरीर वेगाने थंड करा' } },
      { id: 'opt_blanket', text: { en: 'Wrap tightly in a heavy woolen blanket to make him sweat out the heat', hi: 'पसीना निकालने के लिए भारी ऊनी कंबल में कसकर लपेट दें', mr: 'घाम येण्यासाठी जाड घोंगडीत घट्ट गुंडाळून ठेवावे' } },
      { id: 'opt_wait', text: { en: 'Wait quietly for 1 hour to see if he wakes up naturally', hi: '1 घंटे तक चुपचाप इंतजार करें कि क्या वह खुद होश में आता है', mr: 'तो स्वतः शुद्धीवर येतो का हे पाहण्यासाठी १ तास वाट पाहावी' } }
    ],
    correctOptionId: 'opt_triage_cool',
    explanation: {
      en: 'Heat stroke is a medical emergency with up to 50% mortality if cooling is delayed. The priority is rapid external evaporative and convective cooling (cold wet sheets, ice bags to neck/groin/armpits, active fanning) and immediate emergency ambulance dispatch (112/108). NEVER pour liquids into the mouth of a confused or semiconscious patient, as it causes fatal aspiration into the lungs.',
      hi: 'हीट स्ट्रोक एक जानलेवा आपात स्थिति है। तुरंत 112/108 पर कॉल करें, रोगी को छाया में लाएं और ठंडे पानी की पट्टियों व पंखे से शरीर का तापमान घटाएं। बेहोश या भ्रमित व्यक्ति के मुंह में कभी भी पानी या दवा न डालें, क्योंकि यह फेफड़ों में जाकर दम घोंट सकता है।',
      mr: 'उष्माघात ही अत्यंत गंभीर आणीबाणी आहे. त्वरित ११२/१०८ वर संपर्क साधा, रुग्णाला सावलीत आणून थंड पाण्याच्या पट्ट्यांनी व पंख्याने तापमान खाली आणा. बेशुद्ध व्यक्तीच्या तोंडात पाणी ओतल्यास ते फुप्फुसात जाऊन गुदमरण्याचा धोका असतो.'
    },
    source: 'National Centre for Disease Control (NCDC) Heat Wave Health Protocols & AIIMS Emergency Medicine',
    hint: {
      en: 'Never pour liquids into an unconscious person\'s mouth. Focus on calling 112 and external cooling.',
      hi: 'बेहोश व्यक्ति के मुंह में कभी भी तरल न डालें। 112 पर कॉल करने और शरीर को बाहर से ठंडा करने पर ध्यान दें।',
      mr: 'बेशुद्ध व्यक्तीच्या तोंडात पाणी टाकू नका. ११२ ला फोन करणे आणि शरीर थंड करणे यावर लक्ष द्या.'
    }
  },
  {
    id: 'emg_acute_chest_pain',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'A 58-year-old family member suddenly clutches his chest, describing heavy "elephant sitting on chest" tightness radiating to the left arm, accompanied by profuse cold sweating and breathlessness. What should you do immediately?',
      hi: 'परिवार के एक 58 वर्षीय सदस्य अचानक अपने सीने को पकड़ते हैं और बताते हैं कि सीने पर भारी दबाव महसूस हो रहा है जो बाएं हाथ तक जा रहा है, साथ में ठंडा पसीना और सांस फूल रही है। आपको तुरंत क्या करना चाहिए?',
      mr: 'कुटुंबातील ५८ वर्षीय व्यक्ती अचानक छाती पकडते आणि डाव्या हाताकडे जाणारी छातीत तीव्र कळ, असह्य दाब, गार घाम आणि धाप लागल्याचे सांगते. आपण तातडीने काय केले पाहिजे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Suspected Acute Myocardial Infarction (Heart Attack)',
        hi: 'तीव्र दिल का दौरा (हार्ट अटैक) का संदिग्ध मामला',
        mr: 'हृदयविकाराचा तीव्र झटका (Heart Attack) चा संशय'
      },
      victimProfile: {
        en: '58-year-old adult, resting at home, sudden onset crushing substernal chest discomfort.',
        hi: '58 वर्षीय वयस्क, घर पर आराम कर रहे थे, अचानक सीने में तीव्र जकड़न।',
        mr: '५८ वर्षीय व्यक्ती, घरी विश्रांती घेत असताना अचानक छातीत तीव्र वेदना.'
      },
      symptomsObserved: {
        en: ['Crushing chest pressure radiating to left arm/jaw', 'Profuse diaphoresis (cold sweats)', 'Dyspnea (shortness of breath)', 'Apprehension / pale skin'],
        hi: ['सीने में दबाव जो बाएं हाथ तक फैल रहा है', 'ठंडा पसीना', 'सांस लेने में कठिनाई', 'घबराहट'],
        mr: ['छातीत दाब जो डाव्या हाताकडे जातो', 'गार घाम', 'श्वास घेण्यास अडचण', 'अस्वस्थता']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_drive_himself', text: { en: 'Ask him to drive his own scooter to a diagnostic lab for a routine checkup', hi: 'उन्हें खुद स्कूटर चलाकर जांच कराने के लिए लैब जाने को कहें', mr: 'त्यांना स्वतः दुचाकी चालवून तपासणीसाठी लॅबमध्ये जाण्यास सांगावे' } },
      { id: 'opt_112_rest', text: { en: 'Call 112/108 immediately, keep him resting comfortably in a seated position, loosen clothing, and do not leave him unattended', hi: 'तुरंत 112/108 पर कॉल करें, उन्हें आरामदायक स्थिति में बैठाकर रखें, कपड़े ढीले करें और कभी अकेला न छोड़ें', mr: 'त्वरित ११२/१०८ ला फोन करा, त्यांना शांतपणे बसवून ठेवा, कपडे सैल करा आणि एकटे सोडू नका' } },
      { id: 'opt_hot_tea', text: { en: 'Give him two cups of piping hot tea and encourage him to walk 2 km to burp gas out', hi: 'उन्हें दो कप गर्म चाय पिलाएं और गैस निकालने के लिए 2 किमी टहलने को कहें', mr: 'दोन कप गरम चहा द्या आणि गॅस निघून जाण्यासाठी २ किमी चालायला सांगा' } },
      { id: 'opt_wait_morning', text: { en: 'Give him a digestive soda and wait until the next morning', hi: 'हाजमे का सोडा देकर अगली सुबह तक इंतजार करें', mr: 'सोडा देऊन दुसऱ्या दिवशी सकाळपर्यंत वाट पाहा' } }
    ],
    correctOptionId: 'opt_112_rest',
    explanation: {
      en: 'Crushing chest tightness radiating to the arm/jaw with cold sweats is the classic presentation of acute coronary syndrome (heart attack). Every minute of delayed intervention results in irreversible cardiac muscle death ("Time is Muscle"). Call 112/108 immediately. Keep the patient completely rested in a "W" sitting position (knees bent) to decrease myocardial oxygen demand.',
      hi: 'सीने में भारी जकड़न, बाएं हाथ में दर्द और ठंडा पसीना आना दिल के दौरे (हार्ट अटैक) के स्पष्ट लक्षण हैं। हर एक मिनट की देरी से हृदय की मांसपेशियों को स्थायी नुकसान होता है। तुरंत 112/108 पर कॉल करें और मरीज को बैठाकर रखें, टहलने बिल्कुल न दें।',
      mr: 'छातीत तीव्र दाब, डाव्या हातात जाणारी कळ आणि गार घाम ही हृदयविकाराच्या झटक्याची मुख्य लक्षणे आहेत. प्रत्येक मिनिट महत्त्वाचा असतो. तात्काळ ११२/१०८ वर रुग्णवाहिका बोलवा, रुग्णाला शांतपणे बसवून ठेवा आणि अजिबात चालवू नका.'
    },
    source: 'Cardiological Society of India (CSI) STEMI Clinical Guidelines & AIIMS Cardiology',
    hint: {
      en: 'In acute heart attacks, "Time is Muscle". The utmost priority is immediate 112 dispatch and absolute rest.',
      hi: 'हार्ट अटैक में समय ही जीवन है। पहली प्राथमिकता तुरंत 112 पर कॉल करना और पूर्ण आराम देना है।',
      mr: 'हार्ट अटॅकमध्ये प्रत्येक सेकंद मोलाचा असतो. तातडीने ११२ ला फोन करणे आणि रुग्णाला शांत बसवणे हीच प्राथमिकता आहे.'
    }
  },
  {
    id: 'emg_kitchen_thermal_burn',
    mode: 'emergency_quest',
    difficulty: 'medium',
    points: 35,
    question: {
      en: 'While pouring boiling chai in the kitchen, a pot slips and scalds a teenager\'s forearm. The skin is bright red, blistered, and intensely painful. What is the evidence-based first aid response?',
      hi: 'रसोई में खौलती हुई चाय गिरने से एक किशोर का हाथ जल जाता है। त्वचा लाल हो गई है, छाले पड़ गए हैं और तेज दर्द हो रहा है। इसका सही प्राथमिक उपचार क्या है?',
      mr: 'स्वयंपाकघरात उकळता चहा सांडल्यामुळे हाताची त्वचा भाजून लाल होते, फोड येतात आणि तीव्र आग होते. यावरील शास्त्रीय प्रथमोपचार काय आहे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Second-Degree (Partial Thickness) Thermal Scald',
        hi: 'गर्म तरल से जलना (सेकंड डिग्री थर्मल बर्न)',
        mr: 'उकळत्या द्रवाने भाजणे (सेकंड डिग्री बर्न)'
      },
      victimProfile: {
        en: '16-year-old adolescent, acute scald burn over forearm.',
        hi: '16 वर्षीय किशोर, हाथ पर गर्म चाय गिरने से जलना।',
        mr: '१६ वर्षांची व्यक्ती, हातावर गरम चहा सांडल्यामुळे भाजणे.'
      },
      symptomsObserved: {
        en: ['Blistering and erythema', 'Severe stinging localized pain', 'Intact skin roof over fluid blisters'],
        hi: ['छाले और त्वचा का लाल पड़ना', 'तेज जलन और दर्द', 'छालों में तरल भरा होना'],
        mr: ['फोड आणि लालसरपणा', 'तीव्र जळजळ आणि वेदना', 'पाण्याचे फोड']
      },
      urgencyLevel: 'first_aid_then_doctor'
    },
    options: [
      { id: 'opt_toothpaste_egg', text: { en: 'Coat the burn thickly with white toothpaste, butter, or raw egg yolk', hi: 'जले हुए हिस्से पर टूथपेस्ट, मक्खन या कच्चा अंडा पोत दें', mr: 'भाजलेल्या भागावर टूथपेस्ट, लोणी किंवा कच्चे अंडे लावावे' } },
      { id: 'opt_ice_cube', text: { en: 'Press large blocks of dry ice or freezing cubes directly on the open blister', hi: 'खुले छाले पर सीधे बर्फ की सिल्लियां रगड़ें', mr: 'फोड आलेल्या भागावर थेट बर्फाचा तुकडा घासावा' } },
      { id: 'opt_cool_water', text: { en: 'Hold the burn under cool, clean running tap water for 10 to 20 minutes; cover with clean cloth and see a doctor', hi: 'जले हुए हिस्से पर 10 से 20 मिनट तक नल का साफ, सामान्य ठंडा पानी बहने दें; साफ कपड़े से ढकें और डॉक्टर को दिखाएं', mr: 'भाजलेला भाग नळाच्या वाहत्या थंड पाण्याखाली १० ते २० मिनिटे धरावा; स्वच्छ कापडाने झाकून डॉक्टरांकडे जावे' } },
      { id: 'opt_pop_blisters', text: { en: 'Prick and pop all fluid-filled blisters with an unsterilized sewing needle', hi: 'घर की सुई से सभी छालों को फोड़कर उनका पानी निकाल दें', mr: 'सुईने सर्व फोड फोडून त्यातील पाणी बाहेर काढावे' } }
    ],
    correctOptionId: 'opt_cool_water',
    explanation: {
      en: 'The standard of care for thermal burns is immediate cooling under cool (15–25°C) running tap water for 10 to 20 minutes to halt ongoing thermal tissue destruction. Do NOT use ice (causes frostbite/vasoconstriction), toothpaste, or oils (traps heat and breeds infection). Do NOT pop blisters, as the blister roof is a sterile biological dressing.',
      hi: 'जलने पर सबसे पहला कदम है 10-20 मिनट तक नल का बहता हुआ सामान्य ठंडा पानी डालना ताकि त्वचा के अंदर गर्मी का नुकसान रुके। बर्फ न लगाएं (यह रक्त वाहिकाओं को सिकोड़कर नुकसान बढ़ाती है)। टूथपेस्ट या मक्खन कभी न लगाएं क्योंकि यह संक्रमण फैलाते हैं। छालों को कभी न फोड़ें।',
      mr: 'भाजल्यास त्वरित १० ते २० मिनिटे नळाचे वाहते गार पाणी भाजलेल्या भागावर घालावे, जेणेकरून आतील ऊतींचे नुकसान थांबते. बर्फ लावू नये. टूथपेस्ट किंवा लोणी लावल्यास संसर्ग होतो. फोड कधीही फोडू नयेत, कारण ती नैसर्गिक सुरक्षित पट्टी असते.'
    },
    source: 'National Burns Centre (NBC) India & WHO Guidelines for Burn Management',
    hint: {
      en: 'Cool water halts the heat. Avoid household items like toothpaste or butter which trap bacteria.',
      hi: 'ठंडा बहता पानी गर्मी को रोकता है। टूथपेस्ट या मक्खन जैसी घरेलू चीजें लगाने से बचें जो बैक्टीरिया फैलाती हैं।',
      mr: 'वाहते गार पाणी उष्णता कमी करते. टूथपेस्ट किंवा लोणी लावल्यास बॅक्टेरिया वाढतात.'
    }
  },
  {
    id: 'emg_snakebite_farm',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'In a rural field, a farmer is bitten on the ankle by an unidentified snake. Two puncture marks are visible, and swelling is beginning. Which first-aid response strictly follows the official Indian National Snakebite Protocol?',
      hi: 'खेत में काम करते समय एक किसान के टखने पर किसी अज्ञात सांप ने काट लिया। दो दांतों के निशान दिख रहे हैं और सूजन शुरू हो गई है। कौन सा प्राथमिक उपचार भारत के राष्ट्रीय स्नेकबाइट प्रोटोकॉल का सही पालन करता है?',
      mr: 'शेतात काम करताना एका शेतकऱ्याच्या पायाला अज्ञात सापाने दंश केला. दोन दातांचे व्रण दिसत असून सूज येऊ लागली आहे. कोणता प्रथमोपचार भारताच्या अधिकृत स्नेकबाइट प्रोटोकॉलनुसार योग्य आहे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Suspected Venomous Snake Envenomation',
        hi: 'विषैले सर्पदंश का संदिग्ध मामला',
        mr: 'विषारी सर्पदंशाचा संशय'
      },
      victimProfile: {
        en: 'Farmer in agricultural field, bite located on lower leg.',
        hi: 'खेत में किसान, पैर के निचले हिस्से पर सर्पदंश।',
        mr: 'शेतातील शेतकरी, पायावर सापाचा चावा.'
      },
      symptomsObserved: {
        en: ['Two puncture fang marks', 'Rapid local swelling & severe pain', 'Anxiety & elevated heart rate'],
        hi: ['दो दांतों के निशान', 'तेजी से बढ़ती सूजन व तेज दर्द', 'घबराहट'],
        mr: ['दोन दातांचे व्रण', 'वेगाने वाढणारी सूज व वेदना', 'घबराट']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_cut_and_suck', text: { en: 'Make deep blade cuts across the wound and attempt to suck the venom out with your mouth', hi: 'ब्लेड से घाव पर चीरा लगाएं और मुंह से जहर चूसकर बाहर निकालने की कोशिश करें', mr: 'ब्लेडने जखमेवर काप मारावा आणि तोंडाने विष शोषून बाहेर काढण्याचा प्रयत्न करावा' } },
      { id: 'opt_tight_tourniquet', text: { en: 'Tie a tight metal wire tourniquet above the knee until all blood flow stops completely', hi: 'घुटने के ऊपर तार या रस्सी से इतना कसकर बांधें कि रक्त प्रवाह पूरी तरह रुक जाए', mr: 'गुडघ्याच्या वर दोरी किंवा तारेने रक्तप्रवाह पूर्ण बंद होईपर्यंत घट्ट बांधावे' } },
      { id: 'opt_immobilize_rush', text: { en: 'Keep patient calm and still, immobilize limb with a splint, and immediately transport to nearest hospital with Anti-Snake Venom (ASV)', hi: 'मरीज को शांत व स्थिर रखें, पैर को लकड़ी/तख्ते से स्थिर (Immobilize) करें और तुरंत एंटी-स्नेक वेनम वाले नजदीकी अस्पताल ले जाएं', mr: 'रुग्णाला शांत व हालचाल न करता ठेवा, पाय लाकडी फळीने स्थिर करा आणि अँटी-स्नेक व्हेनम असलेल्या जवळच्या रुग्णालयात तातडीने न्या' } },
      { id: 'opt_herbal_tantric', text: { en: 'Take the patient to a traditional faith healer or tantric ritual while delaying hospital care', hi: 'अस्पताल जाने में देरी करके मरीज को झाड़-फूंक या तांत्रिक के पास ले जाएं', mr: 'रुग्णालयात जाण्यास उशीर करून रुग्णाला मांत्रिकाकडे किंवा झाडफूकीसाठी न्यावे' } }
    ],
    correctOptionId: 'opt_immobilize_rush',
    explanation: {
      en: 'The Indian National Snakebite Protocol ("Do It Right" / C.A.R.R.Y.) strictly warns against cutting, suction, tourniquets, or electric shocks, which cause tissue necrosis and hemorrhage. The only proven medical treatment is polyvalent Anti-Snake Venom (ASV) administered at a medical facility. Immobilizing the limb delays lymphatic venom spread.',
      hi: 'राष्ट्रीय स्नेकबाइट प्रोटोकॉल के अनुसार घाव पर चीरा लगाना, मुंह से चूसना या बहुत कसकर बांधना सख्त वर्जित है, क्योंकि इससे अंग गल सकता है। सर्पदंश का एकमात्र वैज्ञानिक इलाज एंटी-स्नेक वेनम (ASV) है जो अस्पताल में दिया जाता है। मरीज को शांत रखें और पैर को बिना हिलाए तुरंत अस्पताल पहुंचाएं।',
      mr: 'अधिकृत प्रोटोकॉलनुसार जखमेवर काप मारणे, विष चोखणे किंवा घट्ट आवळपट्टी बांधणे अत्यंत धोकादायक आहे, यामुळे अवयव निकामी होऊ शकतो. सर्पदंशावरील एकमेव उपचार म्हणजे रुग्णालयात दिली जाणारी अँटी-स्नेक व्हेनम (ASV). रुग्णाची हालचाल रोखून त्याला त्वरित रुग्णालयात पोहोचवावे.'
    },
    source: 'National Snakebite Management Protocol, Ministry of Health and Family Welfare (MoHFW), Government of India',
    hint: {
      en: 'Do NOT cut or suck the venom. Anti-Snake Venom at a medical facility is the only cure.',
      hi: 'घाव को कभी न काटें और न ही जहर चूसें। अस्पताल में मिलने वाला एंटी-स्नेक वेनम ही एकमात्र इलाज है।',
      mr: 'जखमेवर काप मारू नका किंवा विष चोखू नका. रुग्णालयातील अँटी-स्नेक व्हेनम हाच एकमेव खात्रीशीर उपाय आहे.'
    }
  },
  {
    id: 'emg_adult_choking_heimlich',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'At a dinner party, a guest suddenly stands up, clutching his throat with both hands (universal sign of choking). He cannot speak, breathe, or cough, and his lips are turning blue. What is your immediate life-saving action?',
      hi: 'रात के खाने के दौरान एक व्यक्ति अचानक दोनों हाथों से अपना गला पकड़ लेता है। वह न बोल पा रहा है, न सांस ले पा रहा है और न ही खांस पा रहा है। उसके होंठ नीले पड़ने लगे हैं। आपकी तत्काल जीवन रक्षक कार्रवाई क्या होनी चाहिए?',
      mr: 'जेवताना एका व्यक्तीच्या घशात अन्न अडकते आणि ती दोन्ही हातांनी गळा दाबून धरते. तिला बोलता येत नाही, श्वास घेता येत नाही आणि ओठ निळे पडू लागले आहेत. आपण तातडीने काय केले पाहिजे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Complete Foreign Body Airway Obstruction (Choking)',
        hi: 'श्वासनली में भोजन का फंसना (दम घुटना/चोकिंग)',
        mr: 'श्वासनलिकेत अन्न अडकून जीव गुदमरणे (Choking)'
      },
      victimProfile: {
        en: 'Adult at dining table, sudden complete upper airway blockage.',
        hi: 'वयस्क व्यक्ति, भोजन करते समय श्वासनली में रुकावट।',
        mr: 'प्रौढ व्यक्ती, जेवताना श्वासनलिकेत अन्न अडकल्यामुळे गुदमरणे.'
      },
      symptomsObserved: {
        en: ['Universal choking sign (hands clutching throat)', 'Inability to speak, vocalize, or cough', 'Cyanosis (bluish discoloration of lips)', 'Panic and frantic gestures'],
        hi: ['दोनों हाथों से गला पकड़ना', 'बोलने या खांसने में असमर्थता', 'होंठों का नीला पड़ना', 'घबराहट'],
        mr: ['दोन्ही हातांनी गळा पकडणे', 'बोलता किंवा खोकता न येणे', 'ओठ निळे पडणे', 'तीव्र भीती']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_heimlich', text: { en: 'Stand behind the victim, lean him forward, deliver 5 firm back blows between shoulder blades, then perform inward and upward abdominal thrusts (Heimlich Maneuver)', hi: 'व्यक्ति के पीछे खड़े होकर, थोड़ा आगे झुकाएं, पीठ पर 5 बार थपथपाएं और फिर पेट पर अंदर और ऊपर की ओर दबाव दें (हेमलिच पैंतरा)', mr: 'व्यक्तीच्या मागे उभे राहून तिला थोडे पुढे झुकवा, पाठीवर ५ वेळा थाप मारा आणि पोटावर आत व वरच्या दिशेने जोरकस दाब द्या (Heimlich Maneuver)' } },
      { id: 'opt_water_glass', text: { en: 'Force him to swallow two large glasses of boiling water', hi: 'उसे जबरदस्ती दो गिलास गर्म पानी पिलाएं', mr: 'त्याला बळजबरीने दोन ग्लास गरम पाणी पाजावे' } },
      { id: 'opt_finger_blind', text: { en: 'Shove your fingers blindly deep into his throat to push the food deeper down', hi: 'गले में अपनी उंगलियां डालकर भोजन को और नीचे धकेलें', mr: 'घशात बोटे घालून अन्न आणखी खाली ढकलावे' } },
      { id: 'opt_lay_flat', text: { en: 'Make him lie flat on his back and wait quietly', hi: 'उसे पीठ के बल लिटा दें और इंतजार करें', mr: 'त्याला पाठीवर झोपवून शांत बसावे' } }
    ],
    correctOptionId: 'opt_heimlich',
    explanation: {
      en: 'Complete airway obstruction causes brain death in 4-6 minutes. The international protocol is 5 back blows followed by 5 abdominal thrusts (Heimlich maneuver) just above the navel, pushing inwards and upwards. This forces residual air out of the lungs to pop the foreign object out like a cork. Never perform blind finger sweeps, which push objects deeper.',
      hi: 'सांस की नली बंद होने पर 4 से 6 मिनट में जान जा सकती है। व्यक्ति के पीछे खड़े होकर नाभि के ठीक ऊपर दोनों हाथों से अंदर और ऊपर की ओर झटका (Heimlich Maneuver) दें। इससे फेफड़ों की बची हुई हवा फंसे हुए खाने को बाहर फेंक देती है। मुंह में जबरदस्ती उंगली डालकर खाना अंदर न धकेलें।',
      mr: 'श्वासमार्ग पूर्ण बंद झाल्यास मेंदूला ऑक्सिजन न मिळून काही मिनिटांत मृत्यू होऊ शकतो. व्यक्तीच्या मागे उभे राहून नाभीच्या वर पोटावर आत व वरच्या दिशेने झटका (Heimlich Maneuver) दिल्यास फुप्फुसातील हवेच्या दाबाने अडकलेला घास बाहेर फेकला जातो. घशात अंधाधुंद बोटे घालू नयेत.'
    },
    source: 'American Red Cross & Indian Red Cross Society First Aid Guidelines',
    hint: {
      en: 'Remember the Heimlich maneuver: upward and inward abdominal thrusts to create artificial air pressure.',
      hi: 'हेमलिच पैंतरा (Heimlich Maneuver) याद करें: पेट पर ऊपर और अंदर की ओर दबाव।',
      mr: 'पोटावर आत आणि वरच्या बाजूने दाब देण्याची पद्धत (Heimlich Maneuver) आठवा.'
    }
  },
  {
    id: 'emg_severe_hypoglycemia_conscious',
    mode: 'emergency_quest',
    difficulty: 'medium',
    points: 35,
    question: {
      en: 'A diabetic relative on insulin therapy is sitting on the sofa, trembling, sweating cold sweat, pale, and confused. A quick glucometer test shows 48 mg/dL. He is conscious and able to swallow. What is the immediate first-aid "Rule of 15"?',
      hi: 'इंसुलिन लेने वाले एक मरीज सोफे पर बैठे हैं, कांप रहे हैं, ठंडा पसीना आ रहा है और ग्लूकोमीटर पर शुगर केवल 48 mg/dL आई है। वे होश में हैं और निगल सकते हैं। प्राथमिक उपचार का "15 का नियम" (Rule of 15) क्या है?',
      mr: 'इन्सुलिन घेणाऱ्या एका रुग्णाला अचानक कापरे भरते, गार घाम येतो, तो गोंधळलेला आहे आणि ग्लुकोमीटरवर साखर केवळ ४८ mg/dL दिसते. रुग्ण शुद्धीवर असून गिळू शकतो. प्रथमोपचारातील "१५ चा नियम" (Rule of 15) काय आहे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Acute Symptomatic Hypoglycemia (Low Blood Sugar)',
        hi: 'लो ब्लड शुगर (हाइपोग्लाइसीमिया) की आपात स्थिति',
        mr: 'रक्तातील साखर धोकादायक पातळीवर घसरणे (Hypoglycemia)'
      },
      victimProfile: {
        en: 'Adult with diabetes on insulin/sulfonylureas, acute neuroglycopenia.',
        hi: 'डायबिटीज के मरीज, इंसुलिन के बाद शुगर का गिरना।',
        mr: 'मधुमेहाचा रुग्ण, इन्सुलिननंतर रक्तातील साखर वेगाने घसरणे.'
      },
      symptomsObserved: {
        en: ['Severe tremors & diaphoresis (cold sweats)', 'Confusion / slurred speech', 'Blood glucose < 50 mg/dL', 'Able to swallow safely'],
        hi: ['हाथ-पैर कांपना और ठंडा पसीना', 'मानसिक भ्रम और लड़खड़ाहट', 'ब्लड शुगर < 50 mg/dL', 'निगलने में सक्षम'],
        mr: ['थरथरणे आणि गार घाम', 'गोंधळलेली अवस्था', 'रक्तातील साखर < ५० mg/dL', 'गिळण्यास सक्षम']
      },
      urgencyLevel: 'first_aid_then_doctor'
    },
    options: [
      { id: 'opt_insulin_shot', text: { en: 'Give an extra heavy double dose of insulin to calm his nerves', hi: 'शांत करने के लिए तुरंत इंसुलिन का दोगुना इंजेक्शन लगा दें', mr: 'इन्सुलिनचा दुप्पट डोस द्यावा' } },
      { id: 'opt_rule_15', text: { en: 'Give 15 grams of fast-acting simple sugar (3-4 glucose tablets, 1/2 cup fruit juice, or 3 tsp sugar in water); recheck glucose in 15 minutes', hi: 'तुरंत 15 ग्राम तेज शुगर दें (3 चम्मच चीनी पानी में, आधा कप जूस या ग्लूकोज); 15 मिनट बाद दोबारा शुगर जांचें', mr: 'तातडीने १५ ग्रॅम साखर द्या (३ चमचे साखर पाण्यात, अर्धा कप ज्यूस किंवा ग्लुकोज); १५ मिनिटांनी पुन्हा साखर तपासा' } },
      { id: 'opt_diet_soda', text: { en: 'Give a can of zero-calorie diet soda with artificial sweetener', hi: 'शून्य कैलोरी वाली डाइट ड्रिंक पिलाएं', mr: 'झिरो-कॅलरी डाएट पेय द्यावे' } },
      { id: 'opt_exercise_run', text: { en: 'Make him run up and down the stairs for 20 minutes', hi: 'उन्हें 20 मिनट तक सीढ़ियों पर दौड़ाएं', mr: 'त्यांना २० मिनिटे जिन्यावर धावायला सांगा' } }
    ],
    correctOptionId: 'opt_rule_15',
    explanation: {
      en: 'The clinical standard is the "Rule of 15": Administer 15 grams of fast-acting simple carbohydrates (3 teaspoons of sugar dissolved in water, 1/2 glass of fruit juice, or 4 glucose tablets). Wait 15 minutes and recheck. If blood glucose remains < 70 mg/dL, repeat with another 15g. Never give insulin during hypoglycemia—it causes fatal brain damage.',
      hi: 'हाइपोग्लाइसीमिया (शुगर कम होना) में "15 का नियम" अपनाएं: 15 ग्राम तुरंत असर करने वाली चीनी (3 चम्मच चीनी पानी में या आधा कप जूस) दें। 15 मिनट बाद दोबारा जांचें। अगर शुगर 70 से कम रहे तो दोबारा दें। ऐसे समय कभी भी इंसुलिन न दें, यह जानलेवा हो सकता है।',
      mr: 'साखर कमी झाल्यास "१५ चा नियम" पाळावा: लगेच १५ ग्रॅम साखर (३ चमचे साखर पाण्यात किंवा अर्धा कप ज्यूस) प्यायला द्यावी. १५ मिनिटांनी पुन्हा तपासावे. साखर ७० पेक्षा कमी असल्यास पुन्हा १५ ग्रॅम साखर द्यावी. अशा वेळी चुकूनही इन्सुलिन देऊ नये.'
    },
    source: 'Research Society for the Study of Diabetes in India (RSSDI) & American Diabetes Association Hypoglycemia Protocols',
    hint: {
      en: 'Blood sugar is dangerously low (48 mg/dL). The brain needs fast-acting simple glucose immediately.',
      hi: 'शुगर बहुत कम (48) हो चुकी है। दिमाग को तुरंत 15 ग्राम तेज चीनी की जरूरत है।',
      mr: 'साखर धोकादायकपणे कमी (४८) झाली आहे. मेंदूला लगेच १५ ग्रॅम साध्या साखरेची गरज आहे.'
    }
  },
  {
    id: 'emg_acute_stroke_fast',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'A 65-year-old neighbor suddenly drops his teacup. When you speak to him, the right side of his face is visibly drooping, his right arm is limp, and his speech is slurred and unintelligible. What is the emergency F.A.S.T. priority?',
      hi: '65 वर्षीय पड़ोसी के हाथ से अचानक चाय का कप गिर जाता है। उनका दायां चेहरा लटक गया है, दायां हाथ बेजान है और बोली लड़खड़ा रही है। आपातकालीन F.A.S.T. प्रोटोकॉल के तहत तुरंत क्या करना चाहिए?',
      mr: 'शेजारील ६५ वर्षीय व्यक्तीच्या हातातील कप अचानक पडतो. त्यांचा उजवा चेहरा एका बाजूला वाकडा झाला आहे, उजव्या हातात ताकद नाही आणि बोलणे अडखळत आहे. F.A.S.T. नियमानुसार तातडीने काय केले पाहिजे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Suspected Acute Ischemic Stroke (Brain Attack)',
        hi: 'तीव्र ब्रेन स्ट्रोक (लकवा) का संदिग्ध मामला',
        mr: 'मेंदूचा तीव्र झटका (Brain Stroke) चा संशय'
      },
      victimProfile: {
        en: '65-year-old adult, acute onset focal neurological deficits.',
        hi: '65 वर्षीय वयस्क, अचानक शरीर के एक तरफ कमजोरी।',
        mr: '६५ वर्षीय व्यक्ती, एका बाजूची ताकद अचानक जाणे.'
      },
      symptomsObserved: {
        en: ['Facial droop (right corner of mouth sagging)', 'Arm weakness (unable to raise right arm)', 'Slurred, incomprehensible speech', 'Time of onset clearly noted'],
        hi: ['चेहरा एक तरफ झुकना', 'दाएं हाथ में कमजोरी', 'बोलने में भारी लड़खड़ाहट', 'शुरुआत का समय पता होना'],
        mr: ['तोंड एका बाजूला वाकडे होणे', 'उजवा हात वर न होणे', 'बोलताना जीभ जड होणे', 'वेळ नोंदवणे']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_fast_112', text: { en: 'Call 112/108 immediately, record exact time of symptom onset, keep him resting comfortably, and do NOT give water, food, or aspirin', hi: 'तुरंत 112/108 पर कॉल करें, लक्षण शुरू होने का ठीक समय नोट करें और मरीज को कुछ भी खाने-पीने या एस्पिरिन न दें', mr: 'त्वरित ११२/१०८ ला फोन करा, लक्षणे सुरू झाल्याची नेमकी वेळ नोंदवा आणि रुग्णाला खाणे, पाणी किंवा अॅस्पिरिन देऊ नका' } },
      { id: 'opt_feed_water_aspirin', text: { en: 'Force him to swallow 4 large aspirin tablets with a jug of water', hi: 'जबरदस्ती 4 एस्पिरिन की गोलियां और ढेर सारा पानी पिलाएं', mr: 'बळजबरीने ४ अॅस्पिरिनच्या गोळ्या आणि भरपूर पाणी पाजावे' } },
      { id: 'opt_oil_massage', text: { en: 'Vigorously massage his neck with hot mustard oil for 3 hours', hi: 'उनकी गर्दन पर 3 घंटे तक गर्म सरसों के तेल से मालिश करें', mr: 'मानेला ३ तास गरम मोहरीच्या तेलाने जोरात मालिश करावी' } },
      { id: 'opt_sleep_it_off', text: { en: 'Encourage him to take a 4-hour nap to see if it cures itself', hi: 'उन्हें 4 घंटे सोने के लिए कहें कि शायद खुद ठीक हो जाए', mr: 'त्यांना ४ तास झोपायला सांगावे' } }
    ],
    correctOptionId: 'opt_fast_112',
    explanation: {
      en: 'F.A.S.T. stands for Face drooping, Arm weakness, Speech difficulty, Time to call 112. In acute ischemic stroke, clot-busting intravenous thrombolysis (tPA) is only possible within a strict 4.5-hour "golden window". Never administer aspirin before a hospital CT scan confirms whether the stroke is ischemic (clot) or hemorrhagic (bleed). Never give water due to choking risk.',
      hi: 'F.A.S.T. का अर्थ है: Face (चेहरा लटकना), Arm (हाथ कमजोर होना), Speech (बोली लड़खड़ाना), Time (तुरंत 112 पर कॉल करना)। स्ट्रोक में पहले 4.5 घंटे (Golden Window) सबसे महत्वपूर्ण होते हैं। सीटी स्कैन से पहले मरीज को कभी भी एस्पिरिन या पानी न दें, क्योंकि अगर दिमाग की नस फटी होगी तो एस्पिरिन से रक्तस्राव बढ़ जाएगा।',
      mr: 'F.A.S.T. म्हणजे Face (चेहरा वाकडा), Arm (हात लुळा), Speech (बोली जड), Time (११२ ला तातडीने फोन). स्ट्रोक आल्यावर रुग्णालयात पोहोचण्यासाठी सुरुवातीचे साडेचार तास (Golden Window) अत्यंत मोलाचे असतात. CT स्कॅन केल्याशिवाय ॲस्पिरिन देऊ नये, कारण मेंदूत रक्तस्त्राव असल्यास ते घातक ठरू शकते. गिळताना ठसका लागण्याचा धोका असल्याने पाणीही देऊ नये.'
    },
    source: 'Indian Stroke Association (ISA) Clinical Guidelines & AIIMS Neurology Protocols',
    hint: {
      en: 'F.A.S.T.: Face, Arm, Speech, Time. The golden window for stroke treatment requires immediate 112 transport.',
      hi: 'F.A.S.T. याद रखें: तुरंत 112 पर कॉल करें और लक्षण शुरू होने का समय नोट करें।',
      mr: 'F.A.S.T. नियम: तात्काळ ११२ ला फोन करा आणि नेमकी वेळ नोंदवून रुग्णालयात न्या.'
    }
  },
  {
    id: 'emg_severe_arterial_bleeding',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'A workshop technician accidentally cuts his forearm with a power grinder. Bright red blood is spurting out in rhythmic pulses, rapidly pooling on the floor. What is the immediate life-saving first-aid action?',
      hi: 'कारखाने में काम करते समय एक कारीगर के हाथ पर गहरा कट लग जाता है। चमकीला लाल खून तेजी से फव्वारे की तरह धड़कनों के साथ बह रहा है। आपकी पहली जीवन रक्षक कार्रवाई क्या होनी चाहिए?',
      mr: 'कारखान्यात काम करताना हातावर खोल जखम होऊन लालभडक रक्त कारंज्यासारखे उडत आहे आणि वेगाने वाहत आहे. तुमचे पहिले जीवनरक्षक पाऊल काय असावे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Severe Pulsatile Arterial Hemorrhage',
        hi: 'धमनी से तेज रक्तस्राव (धड़कता हुआ खून)',
        mr: 'धमनीतून वेगाने होणारा गंभीर रक्तस्त्राव (Arterial Bleeding)'
      },
      victimProfile: {
        en: 'Adult with deep forearm laceration penetrating radial or ulnar artery.',
        hi: 'वयस्क व्यक्ति, हाथ की मुख्य धमनी कटने से तेज खून बहना।',
        mr: 'प्रौढ व्यक्ती, हाताची मुख्य रक्तवाहिनी कापली जाऊन अतिरक्तस्त्राव.'
      },
      symptomsObserved: {
        en: ['Pulsatile spurting bright red blood', 'Rapid blood loss pooling on ground', 'Pallor, dizziness, and rapid weak pulse'],
        hi: ['खून का फव्वारे की तरह बहना', 'जमीन पर तेजी से खून जमा होना', 'चक्कर आना और कमजोरी'],
        mr: ['रक्ताच्या चिळकांड्या उडणे', 'वेगाने रक्त वाहणे', 'चक्कर येणे आणि नाडी मंदावणे']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_direct_pressure', text: { en: 'Apply immediate, relentless, firm direct manual pressure onto the bleeding wound using a clean cloth/pad, keep limb elevated, and call 112', hi: 'साफ कपड़े या पैड से घाव पर तुरंत दोनों हाथों से लगातार तेज दबाव डालें, हाथ को ऊपर उठाए रखें और 112 पर कॉल करें', mr: 'स्वच्छ कापडाने जखमेवर तात्काळ दोन्ही हातांनी अखंड आणि जोरदार थेट दाब द्या, हात हृदयाच्या पातळीपेक्षा उंच ठेवा आणि ११२ ला कॉल करा' } },
      { id: 'opt_wash_running', text: { en: 'Hold the open artery under hot water for 30 minutes to wash away the blood', hi: 'घाव को 30 मिनट तक गर्म पानी के नीचे रखकर धोते रहें', mr: 'जखम ३० मिनिटे गरम पाण्याखाली धरून ठेवावी' } },
      { id: 'opt_loose_bandage', text: { en: 'Wrap a loose ribbon lightly without applying any pressure at all', hi: 'बिना कोई दबाव डाले घाव पर हल्का सा धागा या रिबन बांध दें', mr: 'दाब न देता हलकीशी पट्टी बांधावी' } },
      { id: 'opt_haldi_powder', text: { en: 'Pour 200g of dry spice powder directly into the open artery', hi: 'खुली नस के अंदर 200 ग्राम सूखा मसाला भर दें', mr: 'वाहत्या रक्तवाहिनीत सुका मसाला भरून ठेवावा' } }
    ],
    correctOptionId: 'opt_direct_pressure',
    explanation: {
      en: 'Pulsatile bright red blood signifies an arterial rupture, which can cause fatal exsanguination in less than 3-5 minutes. The most effective immediate intervention is uninterrupted, firm direct manual pressure using a thick sterile pad or clean cloth directly over the bleeding vessel. Elevating the limb above heart level uses gravity to reduce arterial pressure.',
      hi: 'धड़कता हुआ खून धमनी (Artery) के कटने का संकेत है, जिससे कुछ ही मिनटों में जान जा सकती है। घाव पर तुरंत साफ कपड़े से पूरी ताकत से सीधा दबाव (Direct Pressure) बनाए रखें और हाथ को छाती से ऊपर उठाएं। दबाव कभी बीच में न हटाएं और तुरंत 112 पर कॉल करें।',
      mr: 'कारंज्यासारखे उडणारे रक्त हे धमनी (Artery) तुटल्याचे लक्षण असून काही मिनिटांत मृत्यू ओढवू शकतो. सर्वात प्रभावी उपाय म्हणजे स्वच्छ जाड कापडाने जखमेवर अखंड थेट जोरदार दाब देणे आणि हात वर उचलून ठेवणे. दाब अजिबात सैल न करता तातडीने ११२ वर रुग्णवाहिका बोलवावी.'
    },
    source: 'WHO Basic Emergency Care Protocols & International Trauma Life Support (ITLS) Guidelines',
    hint: {
      en: 'Direct continuous manual pressure stops arterial bleeding. Never release pressure to peek.',
      hi: 'घाव पर लगातार सीधा और मजबूत दबाव बनाए रखें। दबाव को बार-बार हटाकर न देखें।',
      mr: 'जखमेवर अखंड थेट दाब देऊन रक्तप्रवाह रोखा. दाब पुन्हा पुन्हा सैल करून पाहू नका.'
    }
  },
  {
    id: 'emg_public_epileptic_seizure',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'A passenger on a metro train platform suddenly loses consciousness, stiffens, and begins violent whole-body jerking movements (tonic-clonic seizure) with foaming at the mouth. What is the correct first-aid response?',
      hi: 'मेट्रो स्टेशन पर एक यात्री अचानक गिर पड़ता है, शरीर अकड़ जाता है और तेज झटके (दौरे/मिर्गी/Seizure) आने लगते हैं। मुंह से झाग निकल रहा है। सही प्राथमिक उपचार क्या है?',
      mr: 'रेल्वे स्थानकावर एक व्यक्ती अचानक खाली पडते, शरीर ताठरते आणि संपूर्ण अंगाला तीव्र झटके (मिर्गीचा दौरा/Seizure) येऊ लागतात. तोंडाला फेस येतो. यावेळी कोणता प्रथमोपचार योग्य आहे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Active Generalized Tonic-Clonic Seizure',
        hi: 'मिर्गी का तेज दौरा (कनवल्शन/दौरे पड़ना)',
        mr: 'तीव्र अपस्माराचा झटका (Epileptic Seizure)'
      },
      victimProfile: {
        en: 'Adult passenger experiencing active generalized seizure in crowded public area.',
        hi: 'सार्वजनिक स्थान पर मिर्गी का दौरा पड़ने वाला व्यक्ति।',
        mr: 'सार्वजनिक ठिकाणी अचानक अपस्माराचा झटका आलेली व्यक्ती.'
      },
      symptomsObserved: {
        en: ['Sudden loss of consciousness and fall', 'Rhythmic jerking of arms and legs', 'Foaming at mouth / clenched jaw', 'Inability to respond'],
        hi: ['अचानक गिरना और बेहोशी', 'हाथ-पैरों में तेज झटके आना', 'मुंह से झाग निकलना और दांत भींचना', 'होश न होना'],
        mr: ['अचानक बेशुद्ध होऊन पडणे', 'हात-पाय वेगाने हालणे व झटके येणे', 'तोंडाला फेस येणे', 'प्रतिसाद नसणे']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_seizure_safety', text: { en: 'Protect his head with something soft, clear away nearby hard/sharp objects, do NOT put anything into his mouth, time the seizure, and turn into recovery position once jerking stops', hi: 'सिर के नीचे मुलायम कपड़ा रखें, आसपास की नुकीली चीजें हटाएं, मुंह में कुछ भी (चम्मच, जूता या उंगली) न डालें, समय नोट करें और दौरा रुकने पर करवट दिलाएं', mr: 'डोक्याखाली मऊ कपडा ठेवा, आजूबाजूच्या टोकदार वस्तू दूर करा, तोंडात काहीही (चमचा, बूट किंवा बोटे) घालू नका, वेळ मोजा आणि झटके थांबल्यावर कुशीवर वळवा' } },
      { id: 'opt_shoe_onion', text: { en: 'Shove an old leather shoe or raw onion directly against his nostrils', hi: 'मरीज की नाक के पास सड़ा हुआ जूता या प्याज सुंघाएं', mr: 'नाकाजवळ चप्पल किंवा कांदा धरावा' } },
      { id: 'opt_iron_spoon_mouth', text: { en: 'Pry his clenched teeth apart with an iron spoon and jam keys into his fist', hi: 'लोहे की चम्मच से दांतों को जबरदस्ती खोलें और मुट्ठी में चाबियां थमाएं', mr: 'लोखंडी चमच्याने दात उचकटून तोंडात घालावे आणि हातात चाव्या द्याव्यात' } },
      { id: 'opt_hold_violently', text: { en: 'Four people should violently pin down his thrashing limbs with full body weight', hi: 'चार लोग मिलकर उसके हाथ-पैरों को पूरी ताकत से जमीन पर दबाकर रखें', mr: 'चार लोकांनी अंगावर बसून त्याचे हात-पाय जबरदस्तीने दाबून धरावेत' } },
    ],
    correctOptionId: 'opt_seizure_safety',
    explanation: {
      en: 'During an epileptic seizure, the priorities are safety and airway protection. Cushion the head to prevent cranial trauma, clear surrounding hazards, and loosen tight collar clothing. NEVER force objects, spoons, or fingers into the mouth (it shatters teeth and blocks the trachea). Never shove shoes or onions (causes chemical pneumonitis). Most seizures stop naturally within 2-3 minutes. If a seizure lasts > 5 minutes, call 112 immediately (Status Epilepticus).',
      hi: 'दौरा पड़ने पर सिर के नीचे तकिया या मुड़ा हुआ कपड़ा रखें ताकि चोट न लगे। मुंह में कभी भी चम्मच, उंगली या चाबी न डालें क्योंकि इससे दांत टूटकर सांस की नली में फंस सकते हैं। जूता या प्याज सुंघाना अंधविश्वास है। दौरा समाप्त होने पर मरीज को करवट (Recovery Position) में लिटाएं ताकि लार बाहर निकल सके।',
      mr: 'दौरा आल्यास डोक्याला दुखापत होऊ नये म्हणून डोक्याखाली मऊ कापड ठेवा. तोंडात चमचा किंवा बोटे घालू नका, यामुळे दात तुटून श्वासनलिका बंद होण्याचा धोका असतो. चप्पल किंवा कांदा सुंघवणे हा गैरसमज आहे. झटके थांबल्यावर रुग्णाला एका कुशीवर (Recovery Position) झोपवावे जेणेकरून लाळ बाहेर पडेल.'
    },
    source: 'Indian Epilepsy Association & AIIMS Neurology Clinical Protocols',
    hint: {
      en: 'Protect the head and keep the airway clear. Never force objects into a clenched jaw.',
      hi: 'सिर को चोट से बचाएं और आसपास से नुकीली चीजें हटाएं। मुंह में कभी कुछ न डालें।',
      mr: 'डोक्याला दुखापत होऊ देऊ नका. तोंडात कोणतीही वस्तू घालू नका.'
    }
  },
  {
    id: 'emg_child_accidental_caustic_swallow',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'A 3-year-old child accidentally drinks commercial toilet-cleaning acid stored in an unlabelled soft-drink bottle. The child is crying hysterically with red burning lips and drooling saliva. What is your immediate and critical action?',
      hi: '3 साल का एक बच्चा कोल्ड ड्रिंक की बोतल में रखा टॉयलेट साफ करने वाला एसिड अनजाने में पी लेता है। बच्चे के होंठ जल रहे हैं, लार टपक रही है और वह बुरी तरह रो रहा है। आपकी पहली और सबसे महत्वपूर्ण कार्रवाई क्या होनी चाहिए?',
      mr: '३ वर्षांचे लहान बाळ बाटलीत ठेवलेले टॉयलेट स्वच्छ करण्याचे ॲसिड चुकून पिते. बाळाचे ओठ जळाले आहेत, लाळ गळत आहे आणि बाळ जोराने रडत आहे. तुमची सर्वात महत्त्वाची तातडीची कृती काय असावी?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Accidental Caustic Chemical Ingestion',
        hi: 'तेजाब या जहरीला रसायन पीना (कास्टिक इंजेशन)',
        mr: 'विषारी ॲसिड किंवा रासायनिक विषबाधा'
      },
      victimProfile: {
        en: '3-year-old toddler, ingested strong corrosive acid/alkali.',
        hi: '3 वर्षीय बच्चा, टॉयलेट क्लीनर (एसिड) पीना।',
        mr: '३ वर्षांचे बाळ, बाटलीतील ॲसिड पिणे.'
      },
      symptomsObserved: {
        en: ['Severe oral burns and crying', 'Excessive drooling of saliva', 'Stridor / hoarse voice', 'Burns around lips'],
        hi: ['मुंह और होंठों में जलन', 'लगातार लार टपकना', 'सांस लेने में आवाज आना', 'तीव्र दर्द'],
        mr: ['ओठ आणि तोंड भाजणे', 'लाळ गळणे', 'श्वास घेताना घरघर', 'तीव्र वेदना']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_induce_vomiting', text: { en: 'Stick a finger down the child\'s throat to make him vomit all the acid back up', hi: 'गले में उंगली डालकर तुरंत उल्टी करवाएं ताकि तेजाब बाहर निकल आए', mr: 'उलटी करण्यासाठी बाळाच्या घशात बोट घालावे जेणेकरून ॲसिड बाहेर पडेल' } },
      { id: 'opt_call_112_upright', text: { en: 'Call 112/108 immediately, keep child upright, do NOT induce vomiting, bring the chemical bottle to the hospital, and rush to emergency', hi: 'तुरंत 112/108 पर कॉल करें, बच्चे को सीधा बैठाए रखें, उल्टी बिल्कुल न करवाएं, उस केमिकल की बोतल साथ लेकर तुरंत अस्पताल भागें', mr: 'तातडीने ११२/१०८ ला फोन करा, बाळाला सरळ बसवून ठेवा, उलटी मुळीच करवू नका, ॲसिडची बाटली सोबत घेऊन त्वरित रुग्णालयात पोहोचा' } },
      { id: 'opt_drink_raw_oil', text: { en: 'Force feed 1 liter of raw mustard oil and 5 raw eggs', hi: 'बच्चे को जबरदस्ती 1 लीटर कच्चा तेल और कच्चे अंडे पिलाएं', mr: 'बाळाला १ लिटर तेल आणि कच्ची अंडी पाजावीत' } },
      { id: 'opt_baking_soda_mix', text: { en: 'Feed strong caustic drain cleaner to balance the acidity', hi: 'एसिड को काटने के लिए नाली साफ करने वाला सोडा पिलाएं', mr: 'ॲसिडचा प्रभाव कमी करण्यासाठी ड्रेन क्लिनर पाजावे' } }
    ],
    correctOptionId: 'opt_call_112_upright',
    explanation: {
      en: 'NEVER induce vomiting when corrosive acids or alkalis have been ingested! Forcing vomiting causes the caustic chemical to re-burn the esophagus and pharynx a second time on the way up, drastically increasing the risk of esophageal perforation and fatal aspiration into lungs. Call 112 immediately, keep the child seated upright, and bring the container to help doctors identify the exact chemical.',
      hi: 'तेजाब या फिनाइल पीने पर कभी भी उल्टी कराने की कोशिश न करें! उल्टी कराने से वह तेजाब भोजन की नली (Esophagus) को दोबारा जलाता है और फेफड़ों में जाकर दम घोंट सकता है। बच्चे को सीधा बैठाकर तुरंत 112 पर फोन करें और उस बोतल को साथ लेकर आपातकालीन कक्ष पहुंचें।',
      mr: 'ॲसिड किंवा विषारी रसायन पोटात गेल्यास चुकूनही उलटी करवू नका! उलटी केल्याने ते ॲसिड अन्ननलिकेला पुन्हा जाळते आणि फुप्फुसात जाऊन गुदमरण्याचा धोका वाढतो. बाळाला शांतपणे बसवून ठेवा, ११२ ला कॉल करा आणि ती बाटली सोबत घेऊन तातडीने रुग्णालयात जा.'
    },
    source: 'National Poisons Information Centre (NPIC), AIIMS New Delhi & WHO Guidelines for the Management of Poisoning',
    hint: {
      en: 'Does acid burn twice if you force it to come back up the throat? Keep upright and do not induce vomiting.',
      hi: 'उल्टी कराने पर क्या तेजाब दोबारा गले को जलाएगा? उल्टी कभी न कराएं और तुरंत अस्पताल जाएं।',
      mr: 'उलटी केल्यास ते ॲसिड पुन्हा अन्ननलिकेला जाळेल का? उलटी न करवता तात्काळ दवाखान्यात जा.'
    }
  },
  {
    id: 'emg_unresponsive_cpr_adult',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'A 50-year-old commuter suddenly collapses at a bus terminal. You verify the scene is safe and shake his shoulders, shouting "Are you okay?". He is completely unresponsive, not breathing normally (only occasional gasps), and has no pulse. What should you do right now?',
      hi: 'बस स्टैंड पर 50 वर्षीय व्यक्ति अचानक गिर पड़ता है। वह कोई जवाब नहीं दे रहा है, सामान्य सांस नहीं ले रहा है और कोई नब्ज नहीं है। आपको तुरंत क्या करना चाहिए?',
      mr: 'बस स्थानकावर एक व्यक्ती अचानक खाली कोसळते. ती कोणतीही हालचाल करत नाही, श्वास घेत नाही आणि नाडी लागत नाही. अशा वेळी तुम्ही लगेच काय केले पाहिजे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Out-of-Hospital Sudden Cardiac Arrest',
        hi: 'अचानक दिल की धड़कन रुकना (कार्डियक अरेस्ट)',
        mr: 'हृदयक्रिया अचानक बंद पडणे (Cardiac Arrest)'
      },
      victimProfile: {
        en: 'Adult in public transport area, witnessed sudden collapse.',
        hi: 'सार्वजनिक स्थान पर अचानक बेहोश हुआ व्यक्ति।',
        mr: 'सार्वजनिक ठिकाणी अचानक बेशुद्ध पडलेली व्यक्ती.'
      },
      symptomsObserved: {
        en: ['Unresponsive to verbal and physical stimuli', 'Absent normal breathing (agonal gasps)', 'No carotid pulse felt within 10 seconds'],
        hi: ['आवाज देने या हिलाने पर कोई प्रतिक्रिया नहीं', 'सांस का पूरी तरह बंद होना', 'नब्ज का न चलना'],
        mr: ['हाक मारल्यावर कोणतीही हालचाल नाही', 'श्वास पूर्ण बंद', 'नाडी न लागणे']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_cpr_112', text: { en: 'Instruct someone to call 112/108 and get an AED, then immediately begin high-quality chest compressions (100–120 bpm, 5 cm deep) in the center of the chest', hi: 'किसी को तुरंत 112 पर कॉल करने और AED लाने को कहें, और तुरंत छाती के बीच में 100-120 की गति से तेज और गहरा दबाव (CPR) शुरू करें', mr: 'कोणाला तरी त्वरित ११२ ला कॉल करण्यास आणि AED आणण्यास सांगा, आणि स्वतः तात्काळ छातीच्या मध्यभागी वेगाने (१००-१२० प्रति मिनिट) सीपीआर (CPR) दाब सुरू करा' } },
      { id: 'opt_shake_head', text: { en: 'Vigorously shake his head for 15 minutes while shouting into both ears', hi: '15 मिनट तक उसके सिर को जोर-जोर से हिलाते रहें', mr: '१५ मिनिटे त्याचे डोके जोरजोरात हलवत राहा' } },
      { id: 'opt_pour_water_nose', text: { en: 'Pour cold water directly into his nostrils to shock him awake', hi: 'उसे होश में लाने के लिए उसकी नाक में ठंडा पानी डालें', mr: 'त्याच्या नाकात गार पाणी ओतावे' } },
      { id: 'opt_walk_away_quietly', text: { en: 'Assume he is merely taking a midday nap on the concrete floor', hi: 'सोचें कि वह केवल फर्श पर सो रहा है और चले जाएं', mr: 'तो केवळ झोपला आहे असे समजून निघून जावे' } }
    ],
    correctOptionId: 'opt_cpr_112',
    explanation: {
      en: 'In sudden cardiac arrest, clinical death begins within 3 minutes without cerebral circulation. Immediate bystander CPR doubles or triples survival rates. Place heel of hand on the lower half of the breastbone, interlock fingers, lock elbows, and push hard (5-6 cm) and fast (100-120 compressions per minute) without stopping until EMS arrives or an automated external defibrillator (AED) is attached.',
      hi: 'कार्डियक अरेस्ट में दिमाग को खून न मिलने पर 3 मिनट में मस्तिष्क की कोशिकाएं मरने लगती हैं। तुरंत 112 पर कॉल करवाएं और बिना देर किए छाती के बीच में दोनों हाथों से तेज और गहरा दबाव (CPR) शुरू करें। सीपीआर देने से मरीज के बचने की संभावना तीन गुना बढ़ जाती है।',
      mr: 'हृदयक्रिया बंद पडल्यावर मेंदूला ऑक्सिजन न मिळाल्यास ३ मिनिटांत मेंदू मृत होऊ लागतो. तात्काळ ११२ ला फोन करून छातीच्या मध्यभागी न थांबता सीपीआर (CPR) सुरू केल्यास रुग्णाचे प्राण वाचण्याची शक्यता तिप्पट वाढते.'
    },
    source: 'Indian Resuscitation Council (IRC) Cardiopulmonary Life Support Guidelines & AHA CPR Consensus',
    hint: {
      en: 'Call 112 and start chest compressions immediately: 100 to 120 pushes every minute.',
      hi: 'तुरंत 112 पर कॉल कराएं और छाती पर लगातार तेज दबाव (100-120 प्रति मिनट) शुरू करें।',
      mr: '११२ ला फोन करून छातीवर न थांबता जलद दाब (CPR) देणे सुरू करा.'
    }
  },
  {
    id: 'emg_severe_anaphylaxis_allergy',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'Within 10 minutes of eating a sweet containing crushed peanuts, a college student develops massive lip and eyelid swelling, widespread itchy red hives, high-pitched stridor (throat tightness), and dizziness. What is the emergency treatment of choice?',
      hi: 'मूंगफली वाली मिठाई खाने के 10 मिनट के अंदर एक छात्र के होंठ और आंखें बुरी तरह सूज जाती हैं, पूरे शरीर पर लाल चकत्ते पड़ जाते हैं, गले में घरघराहट होने लगती है और सांस फूलने लगती है। इसका सबसे सटीक जीवन रक्षक इलाज क्या है?',
      mr: 'शेंगदाण्याची मिठाई खाल्ल्यानंतर १० मिनिटांत एका तरुणाचे ओठ आणि डोळे प्रचंड सुजतात, अंगावर लाल चट्टे उठतात, घसा चोकअप होऊन श्वास घेताना शिट्टीसारखा आवाज येतो. यावरील तातडीचा जीवनरक्षक उपाय कोणता आहे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Severe Anaphylactic Shock (Systemic Allergic Emergency)',
        hi: 'तीव्र एनाफिलेक्टिक शॉक (जानलेवा एलर्जी)',
        mr: 'तीव्र ॲलर्जीचा झटका (Anaphylactic Shock)'
      },
      victimProfile: {
        en: 'Young adult with acute severe IgE-mediated food anaphylaxis.',
        hi: 'युवा छात्र, भोजन से जानलेवा एलर्जी।',
        mr: 'तरुण व्यक्ती, अन्नाची तीव्र प्राणघातक ॲलर्जी.'
      },
      symptomsObserved: {
        en: ['Angioedema (swelling of lips, tongue, and uvula)', 'Audible respiratory stridor / throat closure', 'Generalized urticaria (hives)', 'Hypotension and lightheadedness'],
        hi: ['होंठों और जीभ का तेजी से सूजना', 'सांस लेने में भारी तकलीफ और घरघराहट', 'शरीर पर लाल खुजलीदार चकत्ते', 'बीपी का गिरना व चक्कर'],
        mr: ['ओठ आणि जिभेत तीव्र सूज', 'घशातून घरघर आवाज व धाप', 'अंगावर लाल पुरळ', 'रक्तदाब घसरणे']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_epinephrine_autoinjector', text: { en: 'Immediately inject an Epinephrine (Adrenaline) auto-injector into the mid-outer thigh, call 112/108, and keep patient lying flat with legs raised', hi: 'तुरंत जांघ के बाहरी हिस्से में एपिनेफ्रीन (एड्रेनालाईन) का ऑटो-इंजेक्टर लगाएं, 112 पर कॉल करें और मरीज को पैर उठाकर लिटाएं', mr: 'मांडीच्या बाहेरील भागावर तातडीने एपिनेफ्रिन (Adrenaline) चे इंजेक्शन द्या, ११२ ला फोन करा आणि रुग्णाचे पाय थोडे वर करून झोपवा' } },
      { id: 'opt_cough_syrup', text: { en: 'Give 1 spoon of herbal cough syrup and ask him to sing loudly', hi: 'खांसी की एक चम्मच सिरप पिलाकर जोर से गाने को कहें', mr: 'खोकल्याचे औषध पाजून गाणे म्हणायला सांगावे' } },
      { id: 'opt_hot_milk', text: { en: 'Force feed 2 glasses of scalding hot milk with turmeric', hi: 'हल्दी वाला खौलता हुआ दूध जबरदस्ती पिलाएं', mr: 'हळदीचे कडक गरम दूध पाजावे' } },
      { id: 'opt_slap_face', text: { en: 'Slap his cheeks repeatedly to stop the allergic hives', hi: 'चकत्ते रोकने के लिए उसके गालों पर थप्पड़ मारें', mr: 'गालावर चापटी मारून पुरळ थांबवण्याचा प्रयत्न करावा' } }
    ],
    correctOptionId: 'opt_epinephrine_autoinjector',
    explanation: {
      en: 'Anaphylaxis is a rapidly fatal multisystem allergic emergency that causes asphyxiation and cardiovascular collapse within minutes. Intramuscular Epinephrine (0.3mg in adults) injected into the vastus lateralis (mid-outer thigh) is the ONLY first-line drug that reverses upper airway mucosal edema, dilates bronchioles, and restores blood pressure. Call 112 immediately.',
      hi: 'एनाफिलेक्सिस एक जानलेवा एलर्जी है जिससे सांस की नली पूरी तरह बंद हो सकती है। जांघ में एपिनेफ्रीन (एड्रेनालाईन) का इंजेक्शन ही एकमात्र जीवनरक्षक दवा है जो गले की सूजन को तुरंत घटाती है और सांस की नली को खोलती है। तुरंत 112 पर कॉल करें।',
      mr: 'अ‍ॅनाफिलेक्सिस ही अतिशय घातक ॲलर्जी असून काही मिनिटांत श्वासनलिका बंद पडून मृत्यू होऊ शकतो. मांडीवर एपिनेफ्रिन (Adrenaline) चे इंजेक्शन देणे हाच एकमेव खात्रीशीर उपचार आहे, जो घशाची सूज उतरवून श्वास मोकळा करतो. तातडीने ११२ वर रुग्णवाहिका बोलवावी.'
    },
    source: 'World Allergy Organization (WAO) Anaphylaxis Guidelines & AIIMS Emergency Medicine Protocols',
    hint: {
      en: 'Epinephrine (Adrenaline) injected into the thigh is the only drug that reverses life-threatening airway closure.',
      hi: 'जांघ में एपिनेफ्रीन (एड्रेनालाईन) का इंजेक्शन ही जानलेवा एलर्जी को तुरंत रोक सकता है।',
      mr: 'मांडीवर एपिनेफ्रिन (Adrenaline) चे इंजेक्शन देणे हाच बंद झालेला श्वासमार्ग मोकळा करण्याचा एकमेव उपाय आहे.'
    }
  },
  {
    id: 'emg_scooter_neck_trauma',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'A scooter rider collides with a road divider, flies off, and lands on his back on the asphalt. He is conscious, wearing a helmet, but crying out with severe neck pain and reporting tingling/numbness in both legs. What is the paramount first-aid rule?',
      hi: 'सड़क पर एक स्कूटर सवार डिवाइडर से टकराकर गिर जाता है। वह होश में है लेकिन उसकी गर्दन में बहुत तेज दर्द है और उसके दोनों पैरों में सुन्नता व झनझनाहट हो रही है। इस समय सबसे महत्वपूर्ण प्राथमिक चिकित्सा नियम क्या है?',
      mr: 'रस्त्यावर दुचाकी घसरून एक व्यक्ती पाठीवर पडते. ती शुद्धीवर आहे पण तिच्या मानेत प्रचंड वेदना होत असून दोन्ही पायात मुंग्या येत आहेत आणि पाय बधीर झाले आहेत. यावेळचा सर्वात महत्त्वाचा नियम काय आहे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Suspected Acute Cervical Spinal Cord Injury',
        hi: 'रीढ़ की हड्डी और गर्दन में चोट (स्पाइनल इंजरी)',
        mr: 'मणक्याला आणि मानेला गंभीर दुखापत (Spinal Cord Injury)'
      },
      victimProfile: {
        en: 'Motorcyclist post-road traffic collision, high mechanism of spinal injury.',
        hi: 'सड़क दुर्घटना में घायल व्यक्ति, रीढ़ में चोट का गंभीर खतरा।',
        mr: 'अपघातात मणक्याला मार लागलेली जखमी व्यक्ती.'
      },
      symptomsObserved: {
        en: ['Severe cervical spine midline tenderness', 'Bilateral lower extremity paresthesia (numbness)', 'Motor weakness in legs', 'High-speed mechanism of impact'],
        hi: ['गर्दन में तेज दर्द', 'पैरों का सुन्न पड़ना और झनझनाहट', 'पैरों को हिला न पाना', 'तेज टक्कर'],
        mr: ['मानेत असह्य वेदना', 'दोन्ही पाय बधीर होणे', 'पाय हलवता न येणे', 'अपघाताचा तीव्र मार']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_spinal_immobilization', text: { en: 'Keep head, neck, and spine completely immobilized in a neutral inline position, do NOT allow anyone to roughly yank the helmet off or bend his neck, and call 112 immediately', hi: 'सिर, गर्दन और रीढ़ को बिल्कुल सीधा और स्थिर रखें, किसी को भी हेलमेट खींचने या गर्दन मोड़ने न दें और तुरंत 112 पर कॉल करें', mr: 'डोके, मान आणि मणका पूर्णपणे एका सरळ रेषेत स्थिर ठेवा, कोणालाही हेल्मेट ओढू देऊ नका किंवा मान वाकवू देऊ नका आणि तात्काळ ११२ ला कॉल करा' } },
      { id: 'opt_pull_up_walk', text: { en: 'Forcefully haul him onto his feet and make him walk around to shake off the stiffness', hi: 'उसे जबरदस्ती खींचकर खड़ा करें और टहलाएं', mr: 'त्याला बळजबरीने उभे करून चालायला लावावे' } },
      { id: 'opt_twist_neck_crack', text: { en: 'Twist his head sharply to the left and right to pop the cervical vertebrae', hi: 'गर्दन को झटके से दोनों तरफ घुमाकर चटकाएं', mr: 'मान दोन्ही बाजूला जोरात पिरगळावी' } },
      { id: 'opt_pack_in_auto', text: { en: 'Fold his body in half and cram him into the backseat of an auto-rickshaw', hi: 'शरीर को मोड़कर ऑटो रिक्शा की सीट पर ठूंस दें', mr: 'शरीर वाकवून रिक्षाच्या मागच्या सीटवर कोंबावे' } }
    ],
    correctOptionId: 'opt_spinal_immobilization',
    explanation: {
      en: 'A fractured cervical vertebra can sever the spinal cord if the neck is flexed, rotated, or roughly handled, causing permanent quadriplegia (lifetime paralysis from neck down) or fatal respiratory arrest. Stabilize the head manually with both hands in neutral position, keep the spine straight, do not remove the helmet unless the airway is occluded, and wait for professional paramedics with a rigid backboard.',
      hi: 'रीढ़ या गर्दन की हड्डी टूटी होने पर गर्दन हिलाने या जबरदस्ती हेलमेट खींचने से स्पाइनल कॉर्ड कट सकती है, जिससे व्यक्ति जीवनभर के लिए लकवाग्रस्त (पंगु) हो सकता है या उसकी सांस रुक सकती है। सिर और गर्दन को दोनों हाथों से बिल्कुल सीधा पकड़कर स्थिर रखें और 112 पर एम्बुलेंस का इंतजार करें।',
      mr: 'मणक्याचे हाड तुटले असल्यास मान वाकवल्याने किंवा हेल्मेट ओढल्याने मज्जारज्जू (Spinal Cord) तुटून कायमचा अर्धांगवायू होऊ शकतो. मान आणि डोके दोन्ही हातांनी धरून एका रेषेत पूर्णपणे स्थिर ठेवावे आणि स्ट्रेचर असलेली रुग्णवाहिका येईपर्यंत रुग्णाला मुळीच हलवू नये.'
    },
    source: 'Advanced Trauma Life Support (ATLS) Spinal Trauma Guidelines & AIIMS Trauma Centre Protocols',
    hint: {
      en: 'Any bending or twisting of the neck in spinal trauma can cause permanent quadriplegia. Keep totally still.',
      hi: 'गर्दन में चोट लगने पर उसे हिलाना जीवनभर के लकवे का कारण बन सकता है। सिर और गर्दन को पूरी तरह स्थिर रखें।',
      mr: 'मणक्याला मार लागल्यास मान किंचितही हलवल्यास कायमचे अपंगत्व येऊ शकते. मान पूर्णपणे स्थिर ठेवा.'
    }
  },
  {
    id: 'emg_high_voltage_electrical_contact',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'At a construction site during rain, a laborer touches a fallen overhead electrical cable and is frozen in place, convulsing while still in physical contact with the live wire. What must you do FIRST before approaching him?',
      hi: 'बारिश के मौसम में एक मजदूर गलती से जमीन पर गिरे बिजली के चालू तार को छू लेता है और करंट लगने से वहीं कांप रहा है। उसके पास जाने से पहले आपको सबसे पहले क्या करना चाहिए?',
      mr: 'पावसाळ्यात एका मजुराचा तुटलेल्या विजेच्या जिवंत तारेला स्पर्श होतो आणि तो तारेला चिकटून थरथरत आहे. त्याच्या जवळ जाण्यापूर्वी सर्वप्रथम आपण काय केले पाहिजे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Active High-Voltage Electrical Shock',
        hi: 'बिजली का तेज करंट लगना (इलेक्ट्रिक शॉक)',
        mr: 'विजेचा तीव्र धक्का बसणे (Electric Shock)'
      },
      victimProfile: {
        en: 'Worker still in physical contact with live electrical source.',
        hi: 'व्यक्ति अभी भी बिजली के तार के संपर्क में है।',
        mr: 'व्यक्ती अजूनही विजेच्या जिवंत तारेला चिकटलेली असणे.'
      },
      symptomsObserved: {
        en: ['Victim in continuous contact with current ("frozen" by muscular tetany)', 'Sparks and wet surroundings', 'Imminent electrocution danger to bystanders'],
        hi: ['तार से चिपके रहना (मांसपेशियों का जकड़ना)', 'आसपास पानी और चिंगारियां', 'मददगार के लिए भी करंट का खतरा'],
        mr: ['तारेला चिकटून राहणे', 'पाणी आणि विजेचा धोका', 'जवळ जाणाऱ्यालाही धोका']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_isolate_power_first', text: { en: 'Do NOT touch the victim with bare hands; instantly shut off the main power breaker or push the wire away using a dry non-conductive object (dry wooden rod), then call 112', hi: 'मरीज को नंगे हाथों से बिल्कुल न छुएं; तुरंत मेन स्विच बंद करें या सूखे लकड़ी के डंडे से तार को अलग करें, फिर 112 पर कॉल करें', mr: 'रुग्णाला उघड्या हाताने अजिबात स्पर्श करू नका; मुख्य वीज पुरवठा त्वरित बंद करा किंवा कोरड्या लाकडी काठीने तार बाजूला करा आणि ११२ ला फोन करा' } },
      { id: 'opt_grab_wet_hands', text: { en: 'Run forward and grab the victim\'s wet metal belt buckle with both bare hands', hi: 'दौड़कर मरीज की लोहे की बेल्ट को दोनों हाथों से पकड़कर खींचें', mr: 'धावत जाऊन रुग्णाच्या लोखंडी बेल्टला उघड्या हाताने ओढावे' } },
      { id: 'opt_throw_water_bucket', text: { en: 'Throw a metal bucket full of salty water over the electrical wire', hi: 'बिजली के तार पर बाल्टी भरकर पानी फेंकें', mr: 'विजेच्या तारेवर पाण्याची बादली ओतावी' } },
      { id: 'opt_wait_storm_end', text: { en: 'Stand watching quietly for 2 hours until the rain storm passes', hi: '2 घंटे तक बारिश रुकने का इंतजार करें', mr: '२ तास पाऊस थांबण्याची वाट पाहावी' } }
    ],
    correctOptionId: 'opt_isolate_power_first',
    explanation: {
      en: 'The golden rule of emergency triage is scene safety: Never become a secondary casualty. Touching someone in active contact with electric current conducts high-voltage electricity into your own body, causing fatal ventricular fibrillation. First, isolate the circuit by flipping the main power breaker, or use an insulator (dry thick wood, dry PVC pipe). Once separated, assess breathing and pulse, and call 112.',
      hi: 'करंट लगे व्यक्ति को नंगे हाथों से छूने पर करंट बचाने वाले के शरीर में भी आ जाता है जिससे उसकी भी मौत हो सकती है। सबसे पहले मेन पावर स्विच बंद करें या सूखी लकड़ी/बांस से तार को हटाएं। उसके बाद ही मरीज की सांस और नब्ज जांचें और सीपीआर दें।',
      mr: 'करंट लागलेल्या व्यक्तीला थेट हात लावल्यास वाचवणारी व्यक्तीही विजेच्या धक्क्याने जागीच मृत्युमुखी पडू शकते. सर्वात आधी मुख्य वीज पुरवठा (Main Switch) बंद करा किंवा कोरड्या लाकडाने तार दूर करा. वीज प्रवाह खंडित झाल्यावरच रुग्णाला तपासून सीपीआर द्या.'
    },
    source: 'National Disaster Management Authority (NDMA) Electrical Safety Guidelines & AIIMS Emergency Protocols',
    hint: {
      en: 'Never touch a live electric victim with bare hands. You must isolate the power source first.',
      hi: 'करंट लगे व्यक्ति को कभी नंगे हाथों से न छुएं। सबसे पहले मेन स्विच बंद करें।',
      mr: 'विद्युत प्रवाह चालू असताना रुग्णाला थेट स्पर्श करू नका. आधी वीज बंद करा.'
    }
  },
  {
    id: 'emg_compound_leg_fracture',
    mode: 'emergency_quest',
    difficulty: 'medium',
    points: 35,
    question: {
      en: 'A football player suffers an agonizing tackle. His lower leg is visibly deformed at an unnatural angle, and a sharp broken bone fragment has pierced through the skin, bleeding into his sock (open compound fracture). What is the appropriate first aid?',
      hi: 'फुटबॉल मैच के दौरान एक खिलाड़ी का पैर असामान्य कोण पर मुड़ जाता है और टूटी हुई हड्डी त्वचा को फाड़कर बाहर निकल आती है (ओपन फ्रैक्चर)। सही प्राथमिक उपचार क्या है?',
      mr: 'खेळताना एका खेळाडूचा पाय विचित्र कोनात वाकतो आणि मोडलेले हाड त्वचा फाडून बाहेर येते व रक्त वाहू लागते (Open Fracture). यावरील योग्य प्रथमोपचार कोणता आहे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Open (Compound) Lower Leg Fracture',
        hi: 'खुला फ्रैक्चर (हड्डी का त्वचा फाड़कर बाहर आना)',
        mr: 'उघडे फ्रॅक्चर (हाड त्वचा फाडून बाहेर येणे)'
      },
      victimProfile: {
        en: 'Young athlete post high-energy blunt limb trauma.',
        hi: 'खिलाड़ी, पैर की हड्डी का गंभीर रूप से टूटना।',
        mr: 'खेळाडू, पायाचे हाड मोडणे.'
      },
      symptomsObserved: {
        en: ['Gross angular limb deformity', 'Bone fragment protruding through skin wound', 'Severe excruciating pain', 'Active venous bleeding'],
        hi: ['पैर की हड्डी का मुड़ना', 'हड्डी का बाहर निकला होना', 'असह्य दर्द', 'खून बहना'],
        mr: ['पाय वाकडा होणे', 'हाड बाहेर दिसणे', 'असह्य वेदना', 'रक्तस्त्राव']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_splint_cover', text: { en: 'Do NOT push the protruding bone back inside; cover with a sterile clean dressing to control bleeding, immobilize the joints above and below with a rigid splint, and call 112', hi: 'बाहर निकली हड्डी को कभी अंदर धकेलने की कोशिश न करें; साफ पट्टी से ढकें, पैर को लकड़ी के सहारे स्थिर (Splint) करें और 112 पर कॉल करें', mr: 'बाहेर आलेले हाड आत ढकलण्याचा मुळीच प्रयत्न करू नका; स्वच्छ पट्टीने झाका, लाकडी फळीने पाय हलणार नाही असा स्थिर करा आणि ११२ ला कॉल करा' } },
      { id: 'opt_hammer_bone_in', text: { en: 'Use a heavy stone to force the bone back into the leg cavity', hi: 'भारी पत्थर से मारकर हड्डी को अंदर बिठाने की कोशिश करें', mr: 'दगडाने ठोकून हाड आत बसवावे' } },
      { id: 'opt_walk_hop', text: { en: 'Order the athlete to jump on the broken foot to test his bravery', hi: 'खिलाड़ी को टूटे हुए पैर पर कूदने को कहें', mr: 'मोडलेल्या पायावर उड्या मारायला सांगावे' } },
      { id: 'opt_mud_pack', text: { en: 'Rub garden mud into the open wound to clot the bleeding', hi: 'घाव के अंदर खेत की मिट्टी भर दें', mr: 'जखमेत माती भरावी' } }
    ],
    correctOptionId: 'opt_splint_cover',
    explanation: {
      en: 'In an open compound fracture, attempting to forcefully shove the protruding bone back beneath the skin introduces bacteria, dirt, and clothing fibers into deep tissues, causing catastrophic osteomyelitis (bone infection) and permanent neurovascular damage. Cover the wound with a clean sterile dressing, apply gentle pressure around the bone to control hemorrhage, splint the limb in the position found, and transport immediately via ambulance.',
      hi: 'बाहर निकली हड्डी को कभी अंदर नहीं धकेलना चाहिए! ऐसा करने से बाहर की गंदगी और बैक्टीरिया हड्डी के अंदर चले जाते हैं जिससे गंभीर संक्रमण (Osteomyelitis) हो सकता है। घाव को साफ कपड़े से ढकें, पैर को लकड़ी या गत्ते से स्थिर करें ताकि वह हिले नहीं, और तुरंत अस्पताल ले जाएं।',
      mr: 'बाहेर आलेले हाड पुन्हा आत ढकलण्याचा प्रयत्न कधीही करू नये! यामुळे बाहेरील जंतू आत जाऊन हाडाला गंभीर संसर्ग (Osteomyelitis) होतो आणि पाय गमवावा लागू शकतो. जखम स्वच्छ कापडाने झाका, पायाला फळी बांधून स्थिर करा आणि तात्काळ रुग्णालयात न्या.'
    },
    source: 'Indian Orthopaedic Association (IOA) Trauma Guidelines & ATLS Musculoskeletal Protocols',
    hint: {
      en: 'Never try to push protruding bone fragments back into the body. Cover, splint, and call 112.',
      hi: 'बाहर निकली हड्डी को कभी अंदर न धकेलें। साफ कपड़े से ढकें और पैर को स्थिर रखें।',
      mr: 'बाहेर आलेले हाड कधीही आत ढकलू नका. स्वच्छ कापडाने झाकून पाय स्थिर ठेवा.'
    }
  }
];
