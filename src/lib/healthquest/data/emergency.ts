import { HealthQuestion } from '../types';

export const EMERGENCY_QUESTIONS: HealthQuestion[] = [
  {
    id: 'emg_heat_stroke_delhi',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'During a hot 44°C summer afternoon, an outdoor worker collapses with hot, dry skin, stops sweating, is confused, and has a high fever (104°F / 40°C). What is your FIRST and most urgent life-saving action?',
      hi: '44°C की भीषण गर्मी में बाहर काम कर रहा एक व्यक्ति अचानक गिर पड़ता है। उसकी त्वचा बहुत गर्म और सूखी है (पसीना आना बंद हो चुका है), वह भ्रम में है और तेज बुखार है। आपकी सबसे पहली और जरूरी कार्रवाई क्या होनी चाहिए?',
      mr: '४४°C च्या तीव्र उन्हाळ्यात काम करणारा माणूस अचानक चक्कर येऊन पडतो. त्वचा खूप गरम व कोरडी आहे, घाम बंद झाला आहे आणि तो गोंधळलेला आहे. तुमचे सर्वात पहिले पाऊल काय असावे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Severe Heat Stroke (Loo Lagna)',
        hi: 'गंभीर हीट स्ट्रोक (लू लगना)',
        mr: 'तीव्र उष्माघात (Heat Stroke)'
      },
      victimProfile: {
        en: '52-year-old adult working outdoors in direct afternoon sun.',
        hi: '52 वर्षीय व्यक्ति, दोपहर की तेज धूप में काम कर रहे थे।',
        mr: '५२ वर्षीय व्यक्ती, दुपारच्या कडक उन्हात काम करत होते.'
      },
      symptomsObserved: {
        en: ['High body fever > 104°F (40°C)', 'Confusion and drowsiness', 'Hot, dry skin with no sweat', 'Fast pulse'],
        hi: ['शरीर का तेज तापमान > 104°F', 'मानसिक भ्रम और बेहोशी', 'गर्म और सूखी त्वचा (पसीना न आना)', 'तेज नब्ज'],
        mr: ['तापमान > १०४°F', 'मानसिक गोंधळ व बेशुद्धी', 'गरम व कोरडी त्वचा (घाम नसणे)', 'जलद नाडी']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_water_mouth', text: { en: 'Force-pour a glass of ice water down his throat while he lies flat on his back', hi: 'पीठ के बल लिटाकर जबरदस्ती मुंह में ठंडा पानी उंडेलें', mr: 'पाठीवर झोपवून बळजबरीने तोंडात गार पाणी ओतावे' } },
      { id: 'opt_triage_cool', text: { en: 'Call 112/108 immediately, move him into shade, and rapidly cool his body with wet cold cloths and fanning', hi: 'तुरंत 112/108 पर कॉल करें, छाया में लाएं और ठंडे पानी की गीली चादरों व पंखे से शरीर को तेजी से ठंडा करें', mr: 'तातडीने ११२/१०८ ला फोन करा, सावलीत आणा आणि ओल्या गार कापडाने व पंख्याने शरीर वेगाने थंड करा' } },
      { id: 'opt_blanket', text: { en: 'Wrap him tightly in a heavy woolen blanket to make him sweat out the heat', hi: 'पसीना निकालने के लिए भारी कंबल में कसकर लपेट दें', mr: 'घाम येण्यासाठी जाड घोंगडीत घट्ट गुंडाळून ठेवावे' } },
      { id: 'opt_wait', text: { en: 'Wait quietly for 1 hour to see if he wakes up on his own', hi: '1 घंटे तक चुपचाप इंतजार करें कि क्या वह खुद होश में आता है', mr: 'तो स्वतः शुद्धीवर येतो का हे पाहण्यासाठी १ तास वाट पाहावी' } }
    ],
    correctOptionId: 'opt_triage_cool',
    explanation: {
      en: 'Heat stroke is a medical emergency. The priority is calling 112/108 and rapidly cooling the person down (moving to shade, applying cold wet cloths to neck and armpits, and active fanning). NEVER pour water into the mouth of a confused or unconscious person, as liquid can enter their lungs and choke them.',
      hi: 'हीट स्ट्रोक एक जानलेवा स्थिति है। तुरंत 112/108 पर कॉल करें, मरीज को छाया में लाएं और ठंडे पानी की पट्टियों व पंखे से शरीर को ठंडा करें। बेहोश या भ्रमित व्यक्ति के मुंह में कभी पानी न डालें, क्योंकि वह फेफड़ों में जाकर सांस रोक सकता है।',
      mr: 'उष्माघात ही अत्यंत गंभीर आणीबाणी आहे. त्वरित ११२/१०८ वर फोन करा, रुग्णाला सावलीत आणून थंड पाण्याच्या पट्ट्यांनी व पंख्याने शरीर थंड करा. बेशुद्ध व्यक्तीच्या तोंडात पाणी ओतू नका, कारण ते फुप्फुसात जाऊन गुदमरण्याचा धोका असतो.'
    },
    source: 'National Centre for Disease Control (NCDC) Heat Wave Protocols & AIIMS Emergency Care',
    hint: {
      en: 'Never pour liquids into an unconscious person’s mouth. Move to shade, cool the body, and call 112.',
      hi: 'बेहोश व्यक्ति के मुंह में कभी पानी न डालें। छाया में लाएं, शरीर ठंडा करें और 112 पर कॉल करें।',
      mr: 'बेशुद्ध माणसाच्या तोंडात पाणी ओतू नका. सावलीत आणा, शरीर थंड करा आणि ११२ ला कॉल करा.'
    }
  },
  {
    id: 'emg_acute_chest_pain',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'A family member suddenly clutches his chest, describing heavy tightness spreading to his left arm, accompanied by cold sweating and shortness of breath. What should you do right away?',
      hi: 'परिवार के एक सदस्य अचानक अपने सीने को पकड़ते हैं और बताते हैं कि सीने पर भारी दबाव महसूस हो रहा है जो बाएं हाथ तक जा रहा है, साथ में ठंडा पसीना आ रहा है। आपको तुरंत क्या करना चाहिए?',
      mr: 'कुटुंबातील एका व्यक्तीच्या छातीत अचानक तीव्र कळ येते, डाव्या हाताकडे जाणारा जड दाब जाणवतो, गार घाम येतो आणि धाप लागते. आपण तातडीने काय केले पाहिजे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Suspected Heart Attack (Chest Pain Emergency)',
        hi: 'दिल का दौरा (हार्ट अटैक) का संदिग्ध मामला',
        mr: 'हृदयविकाराचा तीव्र झटका (Heart Attack) चा संशय'
      },
      victimProfile: {
        en: '58-year-old adult resting at home, sudden onset crushing chest tightness.',
        hi: '58 वर्षीय व्यक्ति, घर पर आराम कर रहे थे, अचानक सीने में तेज दर्द।',
        mr: '५८ वर्षीय व्यक्ती, अचानक छातीत तीव्र वेदना.'
      },
      symptomsObserved: {
        en: ['Crushing chest pressure spreading to left arm or jaw', 'Cold sweating (diaphoresis)', 'Shortness of breath', 'Pale skin and anxiety'],
        hi: ['सीने में भारी जकड़न जो बाएं हाथ या जबड़े तक फैले', 'ठंडा पसीना', 'सांस फूलना', 'घबराहट'],
        mr: ['छातीत दाब जो डाव्या हाताकडे जातो', 'गार घाम', 'श्वास घेण्यास अडचण', 'अस्वस्थता']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_drive_himself', text: { en: 'Ask him to drive his own scooter to a clinic for a routine checkup', hi: 'उन्हें खुद गाड़ी चलाकर डॉक्टर के पास जाने को कहें', mr: 'त्यांना स्वतः गाडी चालवून दवाखान्यात जाण्यास सांगावे' } },
      { id: 'opt_112_rest', text: { en: 'Call 112/108 immediately, keep him resting comfortably in a seated position, loosen tight clothing, and do not leave him alone', hi: 'तुरंत 112/108 पर कॉल करें, उन्हें आराम से बैठाकर रखें, कपड़े ढीले करें और कभी अकेला न छोड़ें', mr: 'त्वरित ११२/१०८ ला फोन करा, त्यांना शांतपणे बसवून ठेवा, कपडे सैल करा आणि एकटे सोडू नका' } },
      { id: 'opt_hot_tea', text: { en: 'Give him two cups of piping hot tea and encourage him to walk 2 km to burp gas out', hi: 'उन्हें गर्म चाय पिलाएं और गैस निकालने के लिए 2 किमी टहलने को कहें', mr: 'दोन कप गरम चहा द्या आणि गॅस जाण्यासाठी चालायला सांगा' } },
      { id: 'opt_wait_morning', text: { en: 'Give him soda and wait until the next morning', hi: 'सोडा देकर अगली सुबह तक इंतजार करें', mr: 'सोडा देऊन दुसऱ्या दिवशी सकाळपर्यंत वाट पाहा' } }
    ],
    correctOptionId: 'opt_112_rest',
    explanation: {
      en: 'Heavy chest tightness radiating to the arm with cold sweats is the classic sign of a heart attack. Every minute matters to save the heart muscle. Call 112/108 immediately. Keep the person resting in a comfortable seated position with knees slightly bent. Never let them walk or drive.',
      hi: 'सीने में भारी जकड़न, बाएं हाथ में दर्द और ठंडा पसीना आना हार्ट अटैक के स्पष्ट लक्षण हैं। हर एक मिनट कीमती होता है। तुरंत 112/108 पर कॉल करें और मरीज को शांत बैठाकर रखें, चलने बिल्कुल न दें।',
      mr: 'छातीत जड दाब, डाव्या हातात जाणारी कळ आणि गार घाम ही हार्ट अटॅकची मुख्य लक्षणे आहेत. प्रत्येक मिनिट मोलाचा असतो. तात्काळ ११२/१०८ वर फोन करा, रुग्णाला शांत बसवून ठेवा आणि अजिबात चालवू नका.'
    },
    source: 'Cardiological Society of India (CSI) Heart Attack Guidelines & AIIMS Cardiology',
    hint: {
      en: 'In a heart attack, every minute counts. Keep the patient completely rested and call 112 right away.',
      hi: 'हार्ट अटैक में समय ही जीवन है। तुरंत 112 पर कॉल करें और मरीज को शांत बैठाएं।',
      mr: 'हार्ट अटॅकमध्ये वेळ मोलाचा असतो. तातडीने ११२ ला फोन करा आणि रुग्णाला शांत बसवा.'
    }
  },
  {
    id: 'emg_kitchen_thermal_burn',
    mode: 'emergency_quest',
    difficulty: 'medium',
    points: 35,
    question: {
      en: 'While cooking in the kitchen, boiling hot chai spills over someone’s forearm. The skin is bright red, blistered, and stinging with pain. What is the correct first-aid response?',
      hi: 'रसोई में गर्म चाय गिरने से हाथ जल गया है। त्वचा लाल है, छाले पड़ गए हैं और तेज जलन हो रही है। इसका सही प्राथमिक उपचार क्या है?',
      mr: 'स्वयंपाकघरात गरम चहा सांडल्यामुळे हात भाजून लाल झाला आहे, फोड आले आहेत आणि आग होत आहे. योग्य प्रथमोपचार काय आहे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Kitchen Hot Liquid Burn (Second-Degree Scald)',
        hi: 'गर्म तरल से जलना (बर्न की स्थिति)',
        mr: 'गरम द्रवाने भाजणे (Scald Burn)'
      },
      victimProfile: {
        en: 'Teenager with sudden hot liquid burn on forearm.',
        hi: 'हाथ पर गर्म चाय गिरने से जलना।',
        mr: 'हातावर गरम चहा सांडल्यामुळे भाजणे.'
      },
      symptomsObserved: {
        en: ['Redness and blisters', 'Severe stinging localized pain', 'Intact fluid-filled blisters'],
        hi: ['त्वचा का लाल होना और छाले', 'तेज जलन और दर्द', 'पानी भरे छाले'],
        mr: ['त्वचा लाल होणे आणि फोड येणे', 'तीव्र जळजळ आणि वेदना', 'पाण्याचे फोड']
      },
      urgencyLevel: 'first_aid_then_doctor'
    },
    options: [
      { id: 'opt_toothpaste_egg', text: { en: 'Smear white toothpaste, butter, or raw egg yolk over the burned skin', hi: 'जले हुए हिस्से पर टूथपेस्ट, मक्खन या कच्चा अंडा पोत दें', mr: 'भाजलेल्या भागावर टूथपेस्ट, लोणी किंवा कच्चे अंडे लावावे' } },
      { id: 'opt_ice_cube', text: { en: 'Press large blocks of freezing ice cubes directly onto the open blisters', hi: 'खुले छाले पर सीधे बर्फ की सिल्लियां रगड़ें', mr: 'फोड आलेल्या भागावर थेट बर्फाचा तुकडा घासावा' } },
      { id: 'opt_cool_water', text: { en: 'Hold the burn under cool, clean running tap water for 10 to 15 minutes, cover with a clean cloth, and visit a doctor', hi: 'जले हुए हिस्से पर 10 से 15 मिनट तक नल का साफ, सामान्य ठंडा पानी बहने दें, साफ कपड़े से ढकें और डॉक्टर को दिखाएं', mr: 'भाजलेला भाग नळाच्या वाहत्या साध्या थंड पाण्याखाली १० ते १५ मिनिटे धरावा, स्वच्छ कापडाने झाकून डॉक्टरांकडे जावे' } },
      { id: 'opt_pop_blisters', text: { en: 'Prick and pop all fluid-filled blisters with a sewing needle', hi: 'सुई से सभी छालों को फोड़कर उनका पानी निकाल दें', mr: 'सुईने सर्व फोड फोडून पाणी काढावे' } }
    ],
    correctOptionId: 'opt_cool_water',
    explanation: {
      en: 'The standard first aid for burns is holding the burned area under cool running tap water for 10 to 15 minutes to stop heat damage deep in the skin. Never use ice (which damages tissue) or toothpaste/butter (which causes infections). Never pop blisters, as the skin bubble protects the wound from germs.',
      hi: 'जलने पर सबसे पहला काम है 10-15 मिनट तक नल का बहता सामान्य ठंडा पानी डालना। बर्फ न लगाएं (यह त्वचा को नुकसान पहुंचाता है)। टूथपेस्ट या मक्खन कभी न लगाएं क्योंकि इनसे घाव में इन्फेक्शन हो जाता है। छालों को कभी न फोड़ें।',
      mr: 'भाजल्यास १० ते १५ मिनिटे नळाचे वाहते साधे गार पाणी घालावे, जेणेकरून आतील त्वचा थंड होते. बर्फ लावू नका. टूथपेस्ट किंवा लोणी लावल्यास जंतूसंसर्ग होतो. फोड कधीही फोडू नका, कारण ते नैसर्गिक मलमपट्टीसारखे काम करतात.'
    },
    source: 'National Burns Centre (NBC) India & WHO Burn Management Protocols',
    hint: {
      en: 'Cool running water stops the heat damage. Avoid toothpaste or butter which trap bacteria.',
      hi: 'ठंडा बहता पानी गर्मी को रोकता है। टूथपेस्ट या मक्खन जैसी चीजें न लगाएं।',
      mr: 'वाहते गार पाणी उष्णता कमी करते. टूथपेस्ट किंवा लोणी लावू नका.'
    }
  },
  {
    id: 'emg_snakebite_farm',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'In a farm field, a person is bitten on the ankle by a snake. Two fang marks are visible, and swelling is beginning. Which first-aid step follows the official Indian National Snakebite Protocol?',
      hi: 'खेत में काम करते समय एक व्यक्ति के पैर पर सांप ने काट लिया। दो दांतों के निशान दिख रहे हैं और सूजन शुरू हो गई है। कौन सा प्राथमिक उपचार भारत के सरकारी प्रोटोकॉल के अनुसार सही है?',
      mr: 'शेतात काम करताना एका माणसाच्या पायाला सापाने चावा घेतला. दोन दातांचे व्रण दिसत असून सूज येऊ लागली आहे. कोणता प्रथमोपचार अधिकृत प्रोटोकॉलनुसार योग्य आहे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Suspected Venomous Snake Bite',
        hi: 'विषैले सांप के काटने की आपात स्थिति',
        mr: 'विषारी सर्पदंशाची आणीबाणी'
      },
      victimProfile: {
        en: 'Adult bitten by snake on lower leg while working outdoors.',
        hi: 'खेत में काम करते समय पैर पर सांप का काटना।',
        mr: 'शेतात काम करताना पायावर सापाचा चावा.'
      },
      symptomsObserved: {
        en: ['Two puncture fang marks', 'Rapid swelling and pain around bite', 'Anxiety and rapid heart rate'],
        hi: ['दो दांतों के निशान', 'काटने की जगह पर सूजन और तेज दर्द', 'घबराहट'],
        mr: ['दोन दातांचे व्रण', 'वेगाने वाढणारी सूज व वेदना', 'घबराट']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_cut_and_suck', text: { en: 'Cut the wound with a blade and try to suck the venom out with your mouth', hi: 'ब्लेड से घाव पर चीरा लगाएं और मुंह से जहर चूसने की कोशिश करें', mr: 'ब्लेडने जखमेवर काप मारावा आणि तोंडाने विष शोषून बाहेर काढण्याचा प्रयत्न करावा' } },
      { id: 'opt_tight_tourniquet', text: { en: 'Tie a tight wire or rope above the knee until blood flow stops completely', hi: 'घुटने के ऊपर रस्सी से इतना कसकर बांधें कि खून पूरी तरह रुक जाए', mr: 'गुडघ्याच्या वर दोरीने रक्तप्रवाह पूर्ण बंद होईपर्यंत घट्ट बांधावे' } },
      { id: 'opt_immobilize_rush', text: { en: 'Keep the person calm and still, support the leg with a splint so it does not move, and rush immediately to a hospital with Anti-Snake Venom (ASV)', hi: 'मरीज को शांत रखें, पैर को लकड़ी के सहारे स्थिर करें (हिलाएं नहीं) और तुरंत एंटी-स्नेक वेनम वाले अस्पताल ले जाएं', mr: 'रुग्णाला शांत ठेवा, पाय लाकडी फळीने हालचाल न करता स्थिर करा आणि अँटी-स्नेक व्हेनम असलेल्या जवळच्या रुग्णालयात तातडीने न्या' } },
      { id: 'opt_herbal_tantric', text: { en: 'Take the patient to a faith healer for rituals instead of going to a hospital', hi: 'अस्पताल जाने के बजाय झाड़-फूंक या तांत्रिक के पास ले जाएं', mr: 'रुग्णालयात जाण्याऐवजी मांत्रिकाकडे किंवा झाडफूकीसाठी न्यावे' } }
    ],
    correctOptionId: 'opt_immobilize_rush',
    explanation: {
      en: 'India’s National Snakebite Protocol strictly warns against cutting, sucking venom, or tying tight tourniquets, which can destroy the limb. The only real cure is Anti-Snake Venom (ASV) given at a hospital. Keep the patient calm, keep the bitten leg still like a fractured bone, and get to a hospital quickly.',
      hi: 'सरकारी नियमों के अनुसार घाव को काटना, मुंह से चूसना या बहुत कसकर बांधना सख्त मना है, क्योंकि इससे पैर खराब हो सकता है। सर्पदंश का एकमात्र असली इलाज एंटी-स्नेक वेनम (ASV) है जो अस्पताल में मिलता है। पैर को बिना हिलाए तुरंत अस्पताल पहुंचाएं।',
      mr: 'अधिकृत नियमांनुसार जखमेवर काप मारणे, विष चोखणे किंवा घट्ट आवळपट्टी बांधणे धोक्याचे आहे. सर्पदंशावरील एकमेव खरा उपचार म्हणजे रुग्णालयात दिली जाणारी अँटी-स्नेक व्हेनम (ASV). पाय न हलवता रुग्णाला त्वरित रुग्णालयात पोहोचवावे.'
    },
    source: 'National Snakebite Management Protocol, MoHFW, Government of India',
    hint: {
      en: 'Do NOT cut or suck the bite. Anti-Snake Venom at a hospital is the only cure.',
      hi: 'घाव को कभी न काटें और न ही जहर चूसें। अस्पताल का एंटी-स्नेक वेनम ही असली इलाज है।',
      mr: 'काप मारू नका किंवा विष चोखू नका. रुग्णालयातील अँटी-स्नेक व्हेनम हाच खरा उपाय आहे.'
    }
  },
  {
    id: 'emg_adult_choking_heimlich',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'While eating dinner, a person suddenly clutches his throat with both hands (the universal sign of choking). He cannot speak, breathe, or cough. What is your immediate life-saving action?',
      hi: 'खाना खाते समय एक व्यक्ति अचानक दोनों हाथों से अपना गला पकड़ लेता है। वह न बोल पा रहा है, न सांस ले पा रहा है और न ही खांस पा रहा है। आपकी तुरंत जीवन रक्षक कार्रवाई क्या होनी चाहिए?',
      mr: 'जेवताना एका माणसाच्या घशात घास अडकतो आणि तो दोन्ही हातांनी गळा पकडतो. त्याला बोलता किंवा श्वास घेता येत नाही. आपण तातडीने काय केले पाहिजे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Severe Airway Choking (Food Stuck in Throat)',
        hi: 'श्वासनली में खाना फंसना (दम घुटना/चोकिंग)',
        mr: 'श्वासनलिकेत अन्न अडकून जीव गुदमरणे (Choking)'
      },
      victimProfile: {
        en: 'Adult choking on food during a meal, unable to breathe.',
        hi: 'खाना खाते समय गले में खाना फंसने से सांस रुकना।',
        mr: 'जेवताना घशात घास अडकल्यामुळे श्वास रोखणे.'
      },
      symptomsObserved: {
        en: ['Hands clutching the throat (universal choking sign)', 'Cannot speak, breathe, or cough', 'Lips turning blue', 'Panic and distress'],
        hi: ['दोनों हाथों से गला पकड़ना', 'बोलने या खांसने में असमर्थ', 'होंठ नीले पड़ना', 'घबराहट'],
        mr: ['दोन्ही हातांनी गळा पकडणे', 'बोलता किंवा खोकता न येणे', 'ओठ निळे पडणे', 'तीव्र भीती']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_heimlich', text: { en: 'Stand behind him, lean him slightly forward, deliver 5 firm back blows, then give upward abdominal thrusts (Heimlich Maneuver) just above the navel', hi: 'व्यक्ति के पीछे खड़े हों, थोड़ा आगे झुकाएं, पीठ पर 5 बार थपथपाएं और नाभि के ऊपर अंदर व ऊपर की ओर दबाव दें (हेमलिच तरीका)', mr: 'व्यक्तीच्या मागे उभे राहून तिला थोडे पुढे झुकवा, पाठीवर ५ वेळा थाप मारा आणि नाभीच्या वर पोटावर आत व वरच्या दिशेने दाब द्या (Heimlich Maneuver)' } },
      { id: 'opt_water_glass', text: { en: 'Force him to swallow two large glasses of boiling water', hi: 'उसे जबरदस्ती दो गिलास गर्म पानी पिलाएं', mr: 'त्याला बळजबरीने दोन ग्लास गरम पाणी पाजावे' } },
      { id: 'opt_finger_blind', text: { en: 'Shove your fingers blindly down his throat to push the food down', hi: 'गले में अपनी उंगलियां डालकर खाने को और नीचे धकेलें', mr: 'घशात बोटे घालून अन्न आणखी खाली ढकलावे' } },
      { id: 'opt_lay_flat', text: { en: 'Make him lie flat on his back and wait', hi: 'उसे पीठ के बल लिटा दें और इंतजार करें', mr: 'त्याला पाठीवर झोपवून शांत बसावे' } }
    ],
    correctOptionId: 'opt_heimlich',
    explanation: {
      en: 'When someone cannot breathe due to choking, give 5 firm back blows between the shoulder blades, followed by quick upward abdominal thrusts (Heimlich maneuver) just above the belly button. This pushes trapped air out of the lungs to pop the stuck food out. Never stick your fingers into their throat blindly.',
      hi: 'गले में खाना फंसने पर व्यक्ति के पीछे खड़े होकर नाभि के ठीक ऊपर दोनों हाथों से अंदर और ऊपर की ओर झटका दें (Heimlich Maneuver)। इससे फेफड़ों की हवा फंसे हुए खाने को बाहर फेंक देती है। मुंह में जबरदस्ती उंगली न डालें।',
      mr: 'श्वासमार्ग अडकल्यास पाठीवर थाप मारा आणि नाभीच्या वर पोटावर आत व वरच्या दिशेने झटका द्या (Heimlich Maneuver). फुप्फुसातील हवेच्या दाबाने अडकलेला घास बाहेर फेकला जातो. घशात बोटे घालून अन्न ढकलू नका.'
    },
    source: 'Indian Red Cross Society & American Heart Association First Aid Guidelines',
    hint: {
      en: 'The Heimlich maneuver: upward and inward abdominal thrusts pop the stuck food out.',
      hi: 'हेमलिच तरीका याद करें: पेट पर नाभि के ऊपर अंदर और ऊपर की ओर दबाव।',
      mr: 'नाभीच्या वर पोटावर आत आणि वरच्या बाजूने दाब देण्याची पद्धत (Heimlich Maneuver) आठवा.'
    }
  },
  {
    id: 'emg_severe_hypoglycemia_conscious',
    mode: 'emergency_quest',
    difficulty: 'medium',
    points: 35,
    question: {
      en: 'A diabetic family member taking insulin is trembling, sweating cold sweat, pale, and confused. A quick test shows very low blood sugar (48 mg/dL). He is awake and able to swallow. What is the immediate first-aid "Rule of 15"?',
      hi: 'इंसुलिन लेने वाले एक मरीज कांप रहे हैं, ठंडा पसीना आ रहा है और शुगर केवल 48 mg/dL आई है। वे होश में हैं और निगल सकते हैं। प्राथमिक उपचार का "15 का नियम" (Rule of 15) क्या है?',
      mr: 'इन्सुलिन घेणाऱ्या एका रुग्णाला कापरे भरते, गार घाम येतो, तो गोंधळलेला आहे आणि रक्तातील साखर केवळ ४८ mg/dL दिसते. तो शुद्धीवर असून गिळू शकतो. प्रथमोपचारातील "१५ चा नियम" काय आहे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Dangerous Low Blood Sugar (Hypoglycemia)',
        hi: 'लो ब्लड शुगर (शुगर का अचानक गिरना)',
        mr: 'रक्तातील साखर धोकादायकपणे घसरणे'
      },
      victimProfile: {
        en: 'Adult with diabetes on insulin, acute low blood sugar episode.',
        hi: 'डायबिटीज के मरीज, इंसुलिन के बाद शुगर का बहुत कम होना।',
        mr: 'मधुमेहाचा रुग्ण, इन्सुलिननंतर रक्तातील साखर घसरणे.'
      },
      symptomsObserved: {
        en: ['Severe trembling and cold sweats', 'Confusion and slurred speech', 'Blood sugar < 50 mg/dL', 'Able to swallow safely'],
        hi: ['हाथ-पैर कांपना और ठंडा पसीना', 'मानसिक भ्रम', 'ब्लड शुगर < 50 mg/dL', 'निगलने में सक्षम'],
        mr: ['थरथरणे आणि गार घाम', 'गोंधळलेली अवस्था', 'रक्तातील साखर < ५० mg/dL', 'गिळण्यास सक्षम']
      },
      urgencyLevel: 'first_aid_then_doctor'
    },
    options: [
      { id: 'opt_insulin_shot', text: { en: 'Give an extra injection of insulin to calm his nerves', hi: 'शांत करने के लिए तुरंत इंसुलिन का एक और इंजेक्शन लगा दें', mr: 'इन्सुलिनचे आणखी एक इंजेक्शन द्यावे' } },
      { id: 'opt_rule_15', text: { en: 'Give 15 grams of fast-acting sugar (3 tsp sugar in water, half cup fruit juice, or glucose); recheck in 15 minutes', hi: 'तुरंत 15 ग्राम तेज असर वाली चीनी दें (3 चम्मच चीनी पानी में या आधा कप जूस); 15 मिनट बाद दोबारा शुगर जांचें', mr: 'तातडीने १५ ग्रॅम साखर द्या (३ चमचे साखर पाण्यात किंवा अर्धा कप ज्यूस); १५ मिनिटांनी पुन्हा साखर तपासा' } },
      { id: 'opt_diet_soda', text: { en: 'Give a can of zero-calorie diet soda with artificial sweetener', hi: 'शून्य कैलोरी वाली डाइट ड्रिंक पिलाएं', mr: 'झिरो-कॅलरी डाएट पेय द्यावे' } },
      { id: 'opt_exercise_run', text: { en: 'Make him run up and down the stairs for 20 minutes', hi: 'उन्हें 20 मिनट तक सीढ़ियों पर दौड़ाएं', mr: 'त्यांना २० मिनिटे जिन्यावर पळायला सांगा' } }
    ],
    correctOptionId: 'opt_rule_15',
    explanation: {
      en: 'The standard treatment for low blood sugar is the "Rule of 15": Give 15 grams of quick-acting sugar (3 teaspoons of sugar in water, half a glass of fruit juice, or 4 glucose tablets). Wait 15 minutes and test again. NEVER give insulin during low blood sugar, which is dangerous.',
      hi: 'शुगर कम होने पर "15 का नियम" अपनाएं: 15 ग्राम चीनी (3 चम्मच चीनी पानी में या आधा कप जूस) दें। 15 मिनट बाद दोबारा जांचें। अगर शुगर 70 से कम रहे तो दोबारा दें। ऐसे समय कभी इंसुलिन न दें।',
      mr: 'साखर कमी झाल्यास "१५ चा नियम" वापरा: लगेच १५ ग्रॅम साखर (३ चमचे साखर पाण्यात किंवा अर्धा कप ज्यूस) द्या. १५ मिनिटांनी पुन्हा तपासा. अशा वेळी चुकूनही इन्सुलिन देऊ नका.'
    },
    source: 'Research Society for the Study of Diabetes in India (RSSDI) & ADA Guidelines',
    hint: {
      en: 'Blood sugar is dangerously low (48 mg/dL). The brain needs 15 grams of simple sugar right away.',
      hi: 'शुगर बहुत कम हो चुकी है। शरीर को तुरंत 15 ग्राम चीनी की जरूरत है।',
      mr: 'साखर धोकादायकपणे कमी झाली आहे. मेंदूला लगेच १५ ग्रॅम साध्या साखरेची गरज आहे.'
    }
  },
  {
    id: 'emg_acute_stroke_fast',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'An older person suddenly drops his teacup. When you speak to him, one side of his face is drooping, his arm is weak, and his speech is slurred and hard to understand. Using the emergency F.A.S.T. test, what should you do immediately?',
      hi: 'एक बुजुर्ग व्यक्ति के हाथ से चाय का कप गिर जाता है। उनका आधा चेहरा लटक गया है, एक हाथ कमजोर हो गया है और बोली लड़खड़ा रही है। आपातकालीन F.A.S.T. नियम के अनुसार तुरंत क्या करना चाहिए?',
      mr: 'एका व्यक्तीच्या हातातील कप अचानक पडतो. तिचा अर्धा चेहरा वाकडा झाला आहे, एका हातात ताकद नाही आणि बोलणे अडखळत आहे. F.A.S.T. नियमानुसार तातडीने काय केले पाहिजे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Suspected Brain Stroke (Brain Attack)',
        hi: 'ब्रेन स्ट्रोक (लकवा का दौरा)',
        mr: 'मेंदूचा तीव्र झटका (Brain Stroke)'
      },
      victimProfile: {
        en: '65-year-old adult, sudden weakness on one side of the body.',
        hi: '65 वर्षीय व्यक्ति, अचानक शरीर के एक तरफ कमजोरी।',
        mr: '६५ वर्षीय व्यक्ती, एका बाजूची ताकद अचानक जाणे.'
      },
      symptomsObserved: {
        en: ['Face drooping on one side', 'Arm weakness (cannot lift arm)', 'Slurred speech', 'Clear time of onset'],
        hi: ['चेहरा एक तरफ झुकना', 'एक हाथ में कमजोरी', 'बोलने में भारी लड़खड़ाहट', 'शुरुआत का समय'],
        mr: ['तोंड एका बाजूला वाकडे होणे', 'हात वर न होणे', 'बोलताना जीभ जड होणे', 'वेळ नोंदवणे']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_fast_112', text: { en: 'Call 112/108 immediately, note the exact time symptoms started, keep him resting comfortably, and do NOT give food, water, or aspirin', hi: 'तुरंत 112/108 पर कॉल करें, लक्षण शुरू होने का ठीक समय नोट करें, आराम से बैठाएं और कुछ भी खाने-पीने या दवा न दें', mr: 'त्वरित ११२/१०८ ला फोन करा, लक्षणे सुरू झाल्याची वेळ नोंदवा आणि रुग्णाला खाणे, पाणी किंवा औषध देऊ नका' } },
      { id: 'opt_feed_water_aspirin', text: { en: 'Force him to swallow 4 large aspirin tablets with a jug of water', hi: 'जबरदस्ती 4 एस्पिरिन की गोलियां और पानी पिलाएं', mr: 'बळजबरीने ४ अॅस्पिरिनच्या गोळ्या आणि पाणी पाजावे' } },
      { id: 'opt_oil_massage', text: { en: 'Vigorously massage his neck with hot mustard oil for 3 hours', hi: 'गर्दन पर 3 घंटे तक गर्म तेल से मालिश करें', mr: 'मानेला ३ तास गरम तेलाने जोरात मालिश करावी' } },
      { id: 'opt_sleep_it_off', text: { en: 'Encourage him to take a 4-hour nap to see if it cures itself', hi: '4 घंटे सोने के लिए कहें कि शायद खुद ठीक हो जाए', mr: 'त्यांना ४ तास झोपायला सांगावे' } }
    ],
    correctOptionId: 'opt_fast_112',
    explanation: {
      en: 'F.A.S.T. stands for Face drooping, Arm weakness, Speech difficulty, Time to call 112! In a stroke, hospital clot-dissolving treatment only works within the first 4.5 hours. Note the exact time it started and rush to the hospital. Do NOT give water or aspirin before a hospital CT scan.',
      hi: 'F.A.S.T. का मतलब है: Face (चेहरा लटकना), Arm (हाथ कमजोर होना), Speech (बोली लड़खड़ाना), Time (तुरंत 112 पर कॉल करना)। स्ट्रोक में पहले 4.5 घंटे सबसे महत्वपूर्ण होते हैं। सीटी स्कैन से पहले मरीज को कभी एस्पिरिन या पानी न दें।',
      mr: 'F.A.S.T. म्हणजे Face (चेहरा वाकडा), Arm (हात लुळा), Speech (बोली जड), Time (११२ ला फोन). स्ट्रोक आल्यावर रुग्णालयात पोहोचण्यासाठी सुरुवातीचे साडेचार तास अत्यंत महत्त्वाचे असतात. डॉक्टरांच्या तपासणीपूर्वी ॲस्पिरिन किंवा पाणी देऊ नका.'
    },
    source: 'Indian Stroke Association & AIIMS Neurology Protocols',
    hint: {
      en: 'F.A.S.T.: Face, Arm, Speech, Time. Call 112 immediately and record the exact time symptoms began.',
      hi: 'F.A.S.T. याद रखें: तुरंत 112 पर कॉल करें और समय नोट करें।',
      mr: 'F.A.S.T. नियम: तात्काळ ११२ ला फोन करा आणि नेमकी वेळ नोंदवून रुग्णालयात न्या.'
    }
  },
  {
    id: 'emg_severe_arterial_bleeding',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'A worker cuts his arm on broken glass. Bright red blood is spurting out in pulses and pooling quickly on the floor. What is the immediate life-saving first-aid action?',
      hi: 'कांच टूटने से एक व्यक्ति के हाथ पर गहरा कट लग जाता है। चमकीला लाल खून तेजी से फव्वारे की तरह बह रहा है। सबसे पहली जीवन रक्षक कार्रवाई क्या होनी चाहिए?',
      mr: 'काच लागून हातावर खोल जखम होते आणि लालभडक रक्त कारंज्यासारखे वेगाने उडत आहे. तुमचे पहिले जीवनरक्षक पाऊल काय असावे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Severe Spurting Bleeding (Artery Cut)',
        hi: 'तेज रक्तस्राव (धमनी से खून बहना)',
        mr: 'वेगाने होणारा तीव्र रक्तस्त्राव'
      },
      victimProfile: {
        en: 'Adult with deep cut on arm and spurting blood.',
        hi: 'हाथ में गहरा घाव और तेजी से खून बहना।',
        mr: 'हाताला खोल जखम आणि अतिरक्तस्त्राव.'
      },
      symptomsObserved: {
        en: ['Pulsing, spurting bright red blood', 'Rapid heavy blood loss', 'Dizziness and weakness'],
        hi: ['खून का फव्वारे की तरह बहना', 'तेजी से खून का नुकसान', 'चक्कर आना'],
        mr: ['रक्ताच्या चिळकांड्या उडणे', 'वेगाने रक्त वाहणे', 'चक्कर येणे']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_direct_pressure', text: { en: 'Apply firm, continuous direct pressure onto the wound using a clean thick cloth or pad, keep the arm raised, and call 112', hi: 'साफ कपड़े या पैड से घाव पर लगातार तेज और सीधा दबाव डालें, हाथ को ऊपर उठाए रखें और 112 पर कॉल करें', mr: 'स्वच्छ कापडाने जखमेवर तात्काळ अखंड आणि जोरदार थेट दाब द्या, हात वर ठेवा आणि ११२ ला कॉल करा' } },
      { id: 'opt_wash_running', text: { en: 'Hold the bleeding cut under warm water for 30 minutes to wash the blood away', hi: 'घाव को 30 मिनट तक गर्म पानी के नीचे रखकर धोते रहें', mr: 'जखम ३० मिनिटे गरम पाण्याखाली धरून ठेवावी' } },
      { id: 'opt_loose_bandage', text: { en: 'Wrap a loose ribbon lightly without applying any pressure at all', hi: 'बिना कोई दबाव डाले घाव पर हल्का सा धागा बांध दें', mr: 'दाब न देता हलकीशी पट्टी बांधावी' } },
      { id: 'opt_haldi_powder', text: { en: 'Pour dry spice powder directly into the open cut', hi: 'घाव के अंदर सूखा मसाला भर दें', mr: 'जखमेत सुका मसाला भरून ठेवावा' } }
    ],
    correctOptionId: 'opt_direct_pressure',
    explanation: {
      en: 'Bright red spurting blood means an artery is cut, which can be life-threatening in minutes. Use a clean cloth or thick pad to press down firmly directly over the wound with both hands, without letting go. Raise the arm above the heart to slow bleeding, and call 112 immediately.',
      hi: 'फव्वारे की तरह बहता खून धमनी के कटने का संकेत है। तुरंत साफ कपड़े से घाव पर पूरी ताकत से सीधा दबाव (Direct Pressure) बनाए रखें और हाथ को ऊपर उठाएं। दबाव को बीच में न हटाएं और तुरंत 112 पर कॉल करें।',
      mr: 'कारंज्यासारखे उडणारे रक्त हे धमनी कापल्याचे लक्षण आहे. स्वच्छ कापडाने जखमेवर दोन्ही हातांनी जोरदार थेट दाब द्या आणि हात छातीपेक्षा उंच ठेवा. दाब अजिबात सैल न करता तातडीने ११२ वर रुग्णवाहिका बोलवा.'
    },
    source: 'WHO Basic Emergency Care Protocols & International Trauma Life Support',
    hint: {
      en: 'Direct continuous pressure on the wound stops bleeding. Keep pressing firmly and call 112.',
      hi: 'घाव पर लगातार सीधा और मजबूत दबाव बनाए रखें। दबाव कभी न हटाएं।',
      mr: 'जखमेवर अखंड थेट दाब देऊन रक्त रोखा. दाब सैल करू नका.'
    }
  },
  {
    id: 'emg_public_epileptic_seizure',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'A person on a railway platform suddenly collapses, his body stiffens, and he starts jerking violently (an epileptic seizure/fit) with foaming at the mouth. What is the correct first-aid response?',
      hi: 'रेलवे स्टेशन पर एक व्यक्ति अचानक गिर पड़ता है, शरीर अकड़ जाता है और झटके (दौरा/मिर्गी/Seizure) आने लगते हैं। सही प्राथमिक उपचार क्या है?',
      mr: 'रेल्वे स्थानकावर एक व्यक्ती अचानक खाली पडते, शरीर ताठरते आणि संपूर्ण अंगाला तीव्र झटके (मिर्गीचा दौरा/Seizure) येऊ लागतात. यावेळी कोणता प्रथमोपचार योग्य आहे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Active Seizure / Convulsion (Mirgi)',
        hi: 'मिर्गी का दौरा (कनवल्शन/दौरे पड़ना)',
        mr: 'अपस्माराचा झटका (Epileptic Seizure)'
      },
      victimProfile: {
        en: 'Person having an active seizure in a public place.',
        hi: 'सार्वजनिक स्थान पर मिर्गी का दौरा पड़ना।',
        mr: 'सार्वजनिक ठिकाणी अपस्माराचा झटका आलेली व्यक्ती.'
      },
      symptomsObserved: {
        en: ['Sudden fall and loss of consciousness', 'Rhythmic jerking of arms and legs', 'Foaming at mouth and clenched jaw', 'Unresponsive'],
        hi: ['अचानक गिरना और बेहोशी', 'हाथ-पैरों में झटके आना', 'मुंह से झाग और दांत भींचना', 'होश न होना'],
        mr: ['अचानक बेशुद्ध होऊन पडणे', 'हात-पाय थरथरणे व झटके येणे', 'तोंडाला फेस येणे', 'प्रतिसाद नसणे']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_seizure_safety', text: { en: 'Cushion his head with something soft, move away nearby hard objects, do NOT put anything into his mouth, and turn him on his side once jerking stops', hi: 'सिर के नीचे मुलायम कपड़ा रखें, आसपास की सख्त चीजें हटाएं, मुंह में कुछ भी (चम्मच या उंगली) न डालें और दौरा रुकने पर करवट दिलाएं', mr: 'डोक्याखाली मऊ कपडा ठेवा, आजूबाजूच्या कडक वस्तू दूर करा, तोंडात काहीही घालू नका आणि झटके थांबल्यावर कुशीवर वळवा' } },
      { id: 'opt_shoe_onion', text: { en: 'Hold an old leather shoe or raw onion directly against his nose', hi: 'नाक के पास जूता या प्याज सुंघाएं', mr: 'नाकाजवळ चप्पल किंवा कांदा धरावा' } },
      { id: 'opt_iron_spoon_mouth', text: { en: 'Pry his clenched teeth open with an iron spoon and jam keys into his hand', hi: 'लोहे की चम्मच से दांतों को जबरदस्ती खोलें और मुट्ठी में चाबियां थमाएं', mr: 'लोखंडी चमच्याने दात उचकटून तोंडात घालावे आणि हातात चाव्या द्याव्यात' } },
      { id: 'opt_hold_violently', text: { en: 'Four people should violently pin down his shaking arms and legs', hi: 'चार लोग मिलकर उसके हाथ-पैरों को पूरी ताकत से जमीन पर दबाकर रखें', mr: 'चार लोकांनी त्याचे हात-पाय जबरदस्तीने दाबून धरावेत' } }
    ],
    correctOptionId: 'opt_seizure_safety',
    explanation: {
      en: 'During a seizure, protect the person from injury: place a soft folded jacket or bag under their head and clear hard objects away. NEVER force spoons, keys, fingers, or shoes into their mouth (this breaks teeth and blocks breathing). Most seizures stop on their own in 2 to 3 minutes. Turn them onto their side (recovery position) once jerking stops.',
      hi: 'दौरा पड़ने पर सिर के नीचे मुड़ा हुआ कपड़ा रखें ताकि चोट न लगे। मुंह में कभी चम्मच, उंगली या चाबी न डालें, इससे दांत टूटकर सांस की नली में फंस सकते हैं। जूता या प्याज सुंघाना अंधविश्वास है। दौरा रुकने पर मरीज को करवट में लिटाएं ताकि लार बाहर निकल सके।',
      mr: 'दौरा आल्यास डोक्याला दुखापत होऊ नये म्हणून डोक्याखाली मऊ कापड ठेवा. तोंडात चमचा किंवा बोटे घालू नका, यामुळे दात तुटून श्वासनलिका बंद होऊ शकते. चप्पल किंवा कांदा सुंघवणे गैरसमज आहे. झटके थांबल्यावर रुग्णाला एका कुशीवर झोपवावे.'
    },
    source: 'Indian Epilepsy Association & AIIMS Neurology Guidelines',
    hint: {
      en: 'Protect the head and keep the airway safe. Never force spoons or fingers into a clenched jaw.',
      hi: 'सिर को चोट से बचाएं और आसपास की चीजें हटाएं। मुंह में कभी कुछ न डालें।',
      mr: 'डोक्याला दुखापत होऊ देऊ नका. तोंडात कोणतीही वस्तू घालू नका.'
    }
  },
  {
    id: 'emg_child_accidental_caustic_swallow',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'A 3-year-old toddler accidentally drinks toilet-cleaning acid kept in a plastic bottle. The child is crying with red burning lips and drooling saliva. What is your most critical immediate action?',
      hi: '3 साल का एक बच्चा अनजाने में टॉयलेट साफ करने वाला एसिड पी लेता है। बच्चे के होंठ जल गए हैं, मुंह से लार टपक रही है और वह रो रहा है। आपकी सबसे जरूरी कार्रवाई क्या है?',
      mr: '३ वर्षांचे लहान मूल चुकून टॉयलेट साफ करण्याचे ॲसिड पिते. त्याचे ओठ भाजले आहेत आणि लाळ गळत आहे. तुमची सर्वात महत्त्वाची तातडीची कृती काय असावी?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Accidental Poisoning / Chemical Ingestion',
        hi: 'तेजाब या जहरीला रसायन पीना',
        mr: 'विषारी ॲसिड पोटात जाणे'
      },
      victimProfile: {
        en: '3-year-old child who accidentally drank caustic cleaner.',
        hi: '3 वर्षीय बच्चा, टॉयलेट क्लीनर पीना।',
        mr: '३ वर्षांचे मूल, ॲसिड पिणे.'
      },
      symptomsObserved: {
        en: ['Severe mouth burning and crying', 'Excessive drooling of saliva', 'Burns around lips', 'Difficulty swallowing'],
        hi: ['मुंह में तेज जलन और रोना', 'लगातार लार टपकना', 'होंठों पर जलन', 'निगलने में तकलीफ'],
        mr: ['तोंडात जळजळ आणि रडणे', 'लाळ गळणे', 'ओठ भाजणे', 'गिळण्यास त्रास']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_induce_vomiting', text: { en: 'Stick a finger down the child’s throat to make him vomit all the acid back up', hi: 'गले में उंगली डालकर तुरंत उल्टी करवाएं ताकि एसिड बाहर निकल आए', mr: 'उलटी करण्यासाठी घशात बोट घालावे जेणेकरून ॲसिड बाहेर पडेल' } },
      { id: 'opt_call_112_upright', text: { en: 'Call 112/108 immediately, keep the child sitting upright, do NOT induce vomiting, bring the chemical bottle to the hospital, and rush to emergency', hi: 'तुरंत 112/108 पर कॉल करें, बच्चे को सीधा बैठाए रखें, उल्टी बिल्कुल न करवाएं, उस बोतल को साथ लेकर तुरंत अस्पताल भागें', mr: 'तातडीने ११२/१०८ ला फोन करा, बाळाला सरळ बसवून ठेवा, उलटी मुळीच करवू नका, बाटली सोबत घेऊन त्वरित रुग्णालयात पोहोचा' } },
      { id: 'opt_drink_raw_oil', text: { en: 'Force feed 1 liter of raw cooking oil and raw eggs', hi: 'बच्चे को जबरदस्ती 1 लीटर कच्चा तेल और अंडे पिलाएं', mr: 'बाळाला १ लिटर तेल पाजावे' } },
      { id: 'opt_baking_soda_mix', text: { en: 'Feed strong drain cleaner to cancel out the acid', hi: 'एसिड को काटने के लिए नाली साफ करने वाला पाउडर पिलाएं', mr: 'ॲसिडचा प्रभाव कमी करण्यासाठी ड्रेन क्लिनर पाजावे' } }
    ],
    correctOptionId: 'opt_call_112_upright',
    explanation: {
      en: 'NEVER make a person vomit after swallowing cleaning acids or chemicals! Forcing vomiting brings the corrosive acid back up the throat, burning the food pipe and airway a second time. Keep the child sitting upright, call 112, and take the chemical container with you to the hospital so doctors know what it is.',
      hi: 'एसिड या फिनाइल पीने पर कभी भी उल्टी कराने की कोशिश न करें! उल्टी कराने से वह एसिड भोजन की नली को दोबारा जलाता है और फेफड़ों में जा सकता है। बच्चे को सीधा बैठाकर तुरंत 112 पर फोन करें और उस बोतल को साथ लेकर अस्पताल पहुंचें।',
      mr: 'ॲसिड किंवा विषारी रसायन पोटात गेल्यास कधीही उलटी करवू नका! उलटी केल्याने ते ॲसिड अन्ननलिकेला पुन्हा जाळते. मुलाला सरळ बसवून ठेवा, ११२ ला कॉल करा आणि ती बाटली सोबत घेऊन तातडीने रुग्णालयात जा.'
    },
    source: 'National Poisons Information Centre (NPIC), AIIMS New Delhi & WHO Poisoning Protocols',
    hint: {
      en: 'Making someone vomit burns the throat a second time. Keep upright, do not induce vomiting, and rush to hospital.',
      hi: 'उल्टी कराने पर एसिड दोबारा गले को जलाता है। उल्टी न कराएं और तुरंत अस्पताल जाएं।',
      mr: 'उलटी केल्यास ते ॲसिड पुन्हा अन्ननलिकेला जाळते. उलटी न करवता तातडीने दवाखान्यात जा.'
    }
  },
  {
    id: 'emg_unresponsive_cpr_adult',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'A person suddenly collapses at a bus stand. You check and call out to him, but he is completely unresponsive, not breathing, and has no pulse. What should you do right now?',
      hi: 'बस स्टैंड पर एक व्यक्ति अचानक गिर पड़ता है। वह कोई जवाब नहीं दे रहा है, सांस नहीं ले रहा है और कोई नब्ज नहीं है। आपको तुरंत क्या करना चाहिए?',
      mr: 'बस स्थानकावर एक माणूस अचानक खाली कोसळतो. तो कोणतीही हालचाल करत नाही, श्वास घेत नाही आणि नाडी लागत नाही. अशा वेळी तुम्ही लगेच काय केले पाहिजे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Sudden Cardiac Arrest (Heart Stopped)',
        hi: 'दिल की धड़कन अचानक रुकना (कार्डियक अरेस्ट)',
        mr: 'हृदयक्रिया अचानक बंद पडणे (Cardiac Arrest)'
      },
      victimProfile: {
        en: 'Adult collapsed in public, unresponsive and not breathing.',
        hi: 'सार्वजनिक स्थान पर अचानक बेहोश हुआ व्यक्ति।',
        mr: 'सार्वजनिक ठिकाणी अचानक बेशुद्ध पडलेली व्यक्ती.'
      },
      symptomsObserved: {
        en: ['No response when shaken or called', 'No normal breathing', 'No pulse found'],
        hi: ['हिलाने या बुलाने पर कोई जवाब नहीं', 'सांस का पूरी तरह बंद होना', 'नब्ज न चलना'],
        mr: ['हाक मारल्यावर कोणतीही हालचाल नाही', 'श्वास पूर्ण बंद', 'नाडी न लागणे']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_cpr_112', text: { en: 'Tell someone to call 112/108, then immediately start pushing hard and fast in the center of the chest (CPR, 100-120 compressions per minute)', hi: 'किसी को तुरंत 112 पर कॉल करने को कहें, और फौरन छाती के बीच में 100-120 की गति से तेज और गहरा दबाव (CPR) शुरू करें', mr: 'कोणाला तरी त्वरित ११२ ला फोन करण्यास सांगा, आणि स्वतः तात्काळ छातीच्या मध्यभागी वेगाने (१००-१२० प्रति मिनिट) सीपीआर (CPR) दाब देणे सुरू करा' } },
      { id: 'opt_shake_head', text: { en: 'Vigorously shake his head for 15 minutes while shouting into his ears', hi: '15 मिनट तक उसके सिर को हिलाते रहें', mr: '१५ मिनिटे त्याचे डोके हलवत राहा' } },
      { id: 'opt_pour_water_nose', text: { en: 'Pour cold water into his nose to wake him up', hi: 'होश में लाने के लिए उसकी नाक में पानी डालें', mr: 'त्याच्या नाकात पाणी ओतावे' } },
      { id: 'opt_walk_away_quietly', text: { en: 'Assume he is just sleeping on the pavement and walk away', hi: 'सोचें कि वह केवल सो रहा है और चले जाएं', mr: 'तो केवळ झोपला आहे असे समजून निघून जावे' } }
    ],
    correctOptionId: 'opt_cpr_112',
    explanation: {
      en: 'When someone’s heart stops, brain cells begin to die within minutes without blood flow. Immediate CPR keeps oxygen-rich blood moving to the brain. Place your hands in the center of the chest and push hard and fast (100 to 120 beats a minute) without stopping until the ambulance arrives.',
      hi: 'कार्डियक अरेस्ट में दिमाग को खून न मिलने पर कुछ ही मिनटों में जान जा सकती है। तुरंत 112 पर कॉल करवाएं और बिना देर किए छाती के बीच में दोनों हाथों से तेज और गहरा दबाव (CPR) शुरू करें। सीपीआर देने से जान बचने की उम्मीद बढ़ जाती है।',
      mr: 'हृदयक्रिया बंद पडल्यावर मेंदूला ऑक्सिजन न मिळाल्यास काही मिनिटांत मृत्यू ओढवू शकतो. तात्काळ ११२ ला फोन करून छातीच्या मध्यभागी न थांबता सीपीआर (CPR) सुरू केल्यास रुग्णाचे प्राण वाचू शकतात.'
    },
    source: 'Indian Resuscitation Council (IRC) Life Support Guidelines & AHA CPR Protocols',
    hint: {
      en: 'Call 112 and start chest compressions right away: push hard and fast in the center of the chest.',
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
      en: 'Shortly after eating a snack with peanuts, a young person’s lips and eyes swell up, itchy hives cover his body, and his throat tightens making it hard to breathe. What is the emergency treatment of choice?',
      hi: 'मूंगफली वाला खाना खाने के कुछ ही देर बाद एक व्यक्ति के होंठ और आंखें सूज जाती हैं, शरीर पर लाल चकत्ते पड़ जाते हैं और सांस फूलने लगती है। इसका सबसे जरूरी जीवन रक्षक इलाज क्या है?',
      mr: 'शेंगदाण्याचा पदार्थ खाल्ल्यानंतर काही वेळात एका माणसाचे ओठ आणि डोळे सुजतात, अंगावर लाल चट्टे उठतात आणि घसा चोकअप होऊन श्वास घेता येत नाही. यावरील तातडीचा जीवनरक्षक उपाय कोणता आहे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Severe Life-Threatening Allergic Reaction (Anaphylaxis)',
        hi: 'गंभीर जानलेवा एलर्जी (एनाफिलेक्सिस)',
        mr: 'तीव्र ॲलर्जीचा झटका (Anaphylaxis)'
      },
      victimProfile: {
        en: 'Person having sudden severe food allergy reaction with breathing difficulty.',
        hi: 'खाने की चीज से अचानक गंभीर और जानलेवा एलर्जी होना।',
        mr: 'अन्नाची अचानक झालेली तीव्र व घातक ॲलर्जी.'
      },
      symptomsObserved: {
        en: ['Swelling of lips, face, and tongue', 'Throat tightness and wheezing', 'Itchy red hives all over body', 'Dizziness and drop in blood pressure'],
        hi: ['होंठों और चेहरे पर तेज सूजन', 'गले में रुकावट और सांस लेने में तकलीफ', 'शरीर पर लाल खुजलीदार चकत्ते', 'चक्कर आना'],
        mr: ['ओठ आणि चेहऱ्यावर सूज', 'घसा आवळणे व धाप लागणे', 'अंगावर लाल पुरळ', 'चक्कर येणे']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_epinephrine_autoinjector', text: { en: 'Immediately inject an Epinephrine (Adrenaline) auto-injector into the outer thigh, call 112/108, and have him lie down with legs raised', hi: 'तुरंत जांघ के बाहरी हिस्से में एपिनेफ्रीन (एड्रेनालाईन) का इंजेक्शन लगाएं, 112 पर कॉल करें और मरीज को पैर उठाकर लिटाएं', mr: 'मांडीच्या बाहेरील भागावर तातडीने एपिनेफ्रिन (Adrenaline) चे इंजेक्शन द्या, ११२ ला फोन करा आणि रुग्णाचे पाय वर करून झोपवा' } },
      { id: 'opt_cough_syrup', text: { en: 'Give 1 spoon of cough syrup and ask him to sing loudly', hi: 'खांसी की एक चम्मच सिरप पिलाएं', mr: 'खोकल्याचे औषध पाजावे' } },
      { id: 'opt_hot_milk', text: { en: 'Force feed 2 glasses of boiling hot milk with turmeric', hi: 'हल्दी वाला खौलता हुआ दूध पिलाएं', mr: 'हळदीचे कडक गरम दूध पाजावे' } },
      { id: 'opt_slap_face', text: { en: 'Slap his cheeks repeatedly to stop the hives', hi: 'चकत्ते रोकने के लिए उसके गालों पर थप्पड़ मारें', mr: 'गालावर चापटी मारून पुरळ थांबवण्याचा प्रयत्न करावा' } }
    ],
    correctOptionId: 'opt_epinephrine_autoinjector',
    explanation: {
      en: 'Severe allergic reactions (anaphylaxis) can close the throat within minutes. An Epinephrine (Adrenaline) auto-injector into the outer thigh is the only medicine that quickly opens the airway, reduces throat swelling, and restores blood pressure. Call 112 immediately.',
      hi: 'गंभीर एलर्जी से सांस की नली कुछ ही मिनटों में बंद हो सकती है। जांघ में एपिनेफ्रीन (एड्रेनालाईन) का इंजेक्शन ही एकमात्र जीवनरक्षक दवा है जो गले की सूजन घटाती है और सांस खोलती है। तुरंत 112 पर कॉल करें।',
      mr: 'अ‍ॅनाफिलेक्सिस ही अतिशय घातक ॲलर्जी असून काही मिनिटांत श्वास बंद पडू शकतो. मांडीवर एपिनेफ्रिन (Adrenaline) चे इंजेक्शन देणे हाच एकमेव खात्रीशीर उपचार आहे, जो घशाची सूज उतरवून श्वास मोकळा करतो. तातडीने ११२ ला फोन करा.'
    },
    source: 'World Allergy Organization Guidelines & AIIMS Emergency Medicine Protocols',
    hint: {
      en: 'Epinephrine (Adrenaline) injected into the thigh is the only medicine that opens a swollen closed airway in severe allergy.',
      hi: 'जांघ में एपिनेफ्रीन (एड्रेनालाईन) का इंजेक्शन ही जानलेवा एलर्जी को तुरंत रोक सकता है।',
      mr: 'मांडीवर एपिनेफ्रिन (Adrenaline) चे इंजेक्शन देणे हाच बंद झालेला श्वास मोकळा करण्याचा उपाय आहे.'
    }
  },
  {
    id: 'emg_scooter_neck_trauma',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'A scooter rider falls off on the road. He is conscious, wearing a helmet, but crying out with severe neck pain and saying his legs feel numb and tingling. What is the most important first-aid rule?',
      hi: 'सड़क पर एक दुपहिया सवार गिर जाता है। वह होश में है लेकिन उसकी गर्दन में बहुत तेज दर्द है और उसके दोनों पैरों में सुन्नता महसूस हो रही है। इस समय सबसे जरूरी नियम क्या है?',
      mr: 'रस्त्यावर दुचाकीवरून पडलेल्या व्यक्तीच्या मानेत प्रचंड वेदना होत आहेत आणि दोन्ही पाय बधीर झाले आहेत. यावेळचा सर्वात महत्त्वाचा प्रथमोपचार नियम काय आहे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Suspected Neck / Spinal Cord Injury',
        hi: 'गर्दन और रीढ़ की हड्डी में गंभीर चोट',
        mr: 'मान आणि मणक्याला गंभीर दुखापत'
      },
      victimProfile: {
        en: 'Rider involved in road accident with neck pain and tingling legs.',
        hi: 'सड़क दुर्घटना में घायल व्यक्ति, गर्दन में दर्द और पैरों में सुन्नता।',
        mr: 'अपघातात मानेला मार लागलेली व्यक्ती.'
      },
      symptomsObserved: {
        en: ['Severe neck pain and tenderness', 'Tingling and numbness in legs', 'Cannot move legs easily', 'Accident impact'],
        hi: ['गर्दन में तेज दर्द', 'पैरों का सुन्न होना और झनझनाहट', 'पैर हिलाने में असमर्थ', 'दुर्घटना का झटका'],
        mr: ['मानेत असह्य वेदना', 'दोन्ही पाय बधीर होणे', 'पाय हलवता न येणे', 'अपघाताचा मार']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_spinal_immobilization', text: { en: 'Keep his head, neck, and back completely still in a straight line, do NOT pull his helmet off or twist his neck, and call 112 right away', hi: 'सिर, गर्दन और रीढ़ को बिल्कुल सीधा और स्थिर रखें, किसी को भी हेलमेट खींचने या गर्दन मोड़ने न दें और तुरंत 112 पर कॉल करें', mr: 'डोके, मान आणि मणका पूर्णपणे सरळ रेषेत स्थिर ठेवा, हेल्मेट ओढू नका किंवा मान वाकवू नका आणि तात्काळ ११२ ला कॉल करा' } },
      { id: 'opt_pull_up_walk', text: { en: 'Pull him up by his arms and make him walk around to shake off stiffness', hi: 'उसे खींचकर खड़ा करें और जबरदस्ती चलाएं', mr: 'त्याला उभे करून चालायला लावावे' } },
      { id: 'opt_twist_neck_crack', text: { en: 'Twist his head sharply to both sides to crack his neck back in place', hi: 'गर्दन को दोनों तरफ घुमाकर चटकाएं', mr: 'मान दोन्ही बाजूला जोरात पिरगळावी' } },
      { id: 'opt_pack_in_auto', text: { en: 'Bend his body in half and squeeze him into the back of a small auto-rickshaw', hi: 'शरीर को मोड़कर ऑटो रिक्शा में ठूंस दें', mr: 'शरीर वाकवून रिक्षात कोंबावे' } }
    ],
    correctOptionId: 'opt_spinal_immobilization',
    explanation: {
      en: 'If a neck bone is fractured, twisting the head or roughly pulling off a helmet can cut the spinal cord, causing permanent lifelong paralysis or death. Hold his head still with both hands in a neutral position, keep his spine straight, and wait for paramedics with a flat stretcher.',
      hi: 'गर्दन की हड्डी टूटी होने पर गर्दन हिलाने या जबरदस्ती हेलमेट खींचने से रीढ़ की नस कट सकती है, जिससे व्यक्ति जीवनभर के लिए लकवाग्रस्त हो सकता है। सिर और गर्दन को दोनों हाथों से बिल्कुल सीधा पकड़कर स्थिर रखें और एम्बुलेंस का इंतजार करें।',
      mr: 'मणक्याचे हाड तुटले असल्यास मान वाकवल्याने किंवा हेल्मेट ओढल्याने मज्जारज्जू तुटून कायमचा अर्धांगवायू होऊ शकतो. मान आणि डोके दोन्ही हातांनी धरून पूर्णपणे स्थिर ठेवावे आणि रुग्णवाहिका येईपर्यंत अजिबात हलवू नये.'
    },
    source: 'Advanced Trauma Life Support (ATLS) Protocols & AIIMS Trauma Centre Guidelines',
    hint: {
      en: 'Never twist or bend the neck after an accident. Keep the head and spine completely still.',
      hi: 'दुर्घटना के बाद गर्दन को कभी न मोड़ें। सिर और गर्दन को पूरी तरह स्थिर रखें।',
      mr: 'अपघातानंतर मान अजिबात हलवू नका. डोके आणि मान पूर्णपणे स्थिर ठेवा.'
    }
  },
  {
    id: 'emg_high_voltage_electrical_contact',
    mode: 'emergency_quest',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'During rainy weather, a person accidentally touches a fallen electric wire and is stuck in place, shaking with electric shock. What must you do FIRST before approaching him?',
      hi: 'बारिश के मौसम में एक व्यक्ति गलती से गिरे हुए बिजली के चालू तार को छू लेता है और वहीं कांप रहा है। उसके पास जाने से पहले आपको सबसे पहले क्या करना चाहिए?',
      mr: 'पावसाळ्यात एका माणसाचा विजेच्या चालू तारेला स्पर्श होतो आणि तो तारेला चिकटून थरथरत आहे. त्याच्या जवळ जाण्यापूर्वी सर्वप्रथम आपण काय केले पाहिजे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Active Electric Shock Emergency',
        hi: 'बिजली का करंट लगना (इलेक्ट्रिक शॉक)',
        mr: 'विजेचा तीव्र धक्का बसणे (Electric Shock)'
      },
      victimProfile: {
        en: 'Person still in contact with a live electrical wire.',
        hi: 'व्यक्ति अभी भी बिजली के तार से चिपका हुआ है।',
        mr: 'व्यक्ती अजूनही विजेच्या तारेला चिकटलेली असणे.'
      },
      symptomsObserved: {
        en: ['Victim stuck to electric wire', 'Sparks and wet ground', 'Extreme electrocution danger to anyone nearby'],
        hi: ['तार से चिपके रहना', 'आसपास पानी और करंट का खतरा', 'मददगार के लिए भी जानलेवा स्थिति'],
        mr: ['तारेला चिकटून राहणे', 'पाणी आणि विजेचा धोका', 'जवळ जाणाऱ्यालाही धोका']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_isolate_power_first', text: { en: 'Do NOT touch him with bare hands; instantly shut off the main power switch or push the wire away using a dry wooden stick, then call 112', hi: 'मरीज को नंगे हाथों से बिल्कुल न छुएं; तुरंत मेन स्विच बंद करें या सूखी लकड़ी के डंडे से तार अलग करें, फिर 112 पर कॉल करें', mr: 'रुग्णाला उघड्या हाताने अजिबात स्पर्श करू नका; मुख्य वीज पुरवठा त्वरित बंद करा किंवा कोरड्या लाकडी काठीने तार बाजूला करा आणि ११२ ला फोन करा' } },
      { id: 'opt_grab_wet_hands', text: { en: 'Run and grab his wet metal belt buckle with your bare hands', hi: 'दौड़कर मरीज की धातु की बेल्ट को हाथों से पकड़कर खींचें', mr: 'धावत जाऊन रुग्णाच्या लोखंडी बेल्टला उघड्या हाताने ओढावे' } },
      { id: 'opt_throw_water_bucket', text: { en: 'Throw a metal bucket full of water over the electric wire', hi: 'बिजली के तार पर पानी की बाल्टी फेंकें', mr: 'विजेच्या तारेवर पाण्याची बादली ओतावी' } },
      { id: 'opt_wait_storm_end', text: { en: 'Wait quietly for 2 hours until the rain stops', hi: '2 घंटे तक बारिश रुकने का इंतजार करें', mr: '२ तास पाऊस थांबण्याची वाट पाहावी' } }
    ],
    correctOptionId: 'opt_isolate_power_first',
    explanation: {
      en: 'Never touch someone who is still in contact with an electric current, or the electricity will flow straight through your body too. First, turn off the main power switch, or use a dry wooden stick or plastic pipe to push the wire away. Once safe, check breathing and call 112.',
      hi: 'करंट लगे व्यक्ति को नंगे हाथों से छूने पर करंट बचाने वाले के शरीर में भी आ जाता है। सबसे पहले मेन पावर स्विच बंद करें या सूखी लकड़ी से तार को हटाएं। उसके बाद ही मरीज की सांस जांचें और 112 पर कॉल करें।',
      mr: 'करंट लागलेल्या व्यक्तीला थेट हात लावल्यास वाचवणारी व्यक्तीही विजेच्या धक्क्याने मृत्युमुखी पडू शकते. सर्वात आधी मुख्य वीज पुरवठा (Main Switch) बंद करा किंवा कोरड्या लाकडाने तार दूर करा. त्यानंतरच मदत करा.'
    },
    source: 'National Disaster Management Authority (NDMA) Electrical Safety Guidelines',
    hint: {
      en: 'Never touch a live electric shock victim with bare hands. You must turn off the power first.',
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
      en: 'During a sports game, a player falls hard. His lower leg is bent at an unnatural angle, and a broken bone has pierced through the skin and is bleeding. What is the correct first aid?',
      hi: 'खेलते समय एक खिलाड़ी का पैर मुड़ जाता है और टूटी हुई हड्डी त्वचा फाड़कर बाहर निकल आती है। सही प्राथमिक उपचार क्या है?',
      mr: 'खेळताना एका खेळाडूचा पाय वाकतो आणि मोडलेले हाड त्वचा फाडून बाहेर येते व रक्त वाहू लागते. यावरील योग्य प्रथमोपचार कोणता आहे?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Open Bone Fracture (Broken Bone Through Skin)',
        hi: 'खुला फ्रैक्चर (हड्डी का बाहर आना)',
        mr: 'उघडे फ्रॅक्चर (हाड बाहेर येणे)'
      },
      victimProfile: {
        en: 'Athlete with severe leg injury and visible broken bone.',
        hi: 'पैर की हड्डी का त्वचा से बाहर निकलना।',
        mr: 'पायाचे हाड त्वचा फाडून बाहेर येणे.'
      },
      symptomsObserved: {
        en: ['Leg bent unnaturally', 'Broken bone sticking out through skin', 'Severe pain and bleeding'],
        hi: ['पैर का असामान्य मुड़ना', 'हड्डी का बाहर निकला होना', 'असह्य दर्द और खून'],
        mr: ['पाय वाकडा होणे', 'हाड बाहेर दिसणे', 'असह्य वेदना आणि रक्त']
      },
      urgencyLevel: 'immediate_112'
    },
    options: [
      { id: 'opt_splint_cover', text: { en: 'Do NOT push the sticking bone back inside; cover it with a clean cloth to control bleeding, support the leg with a splint so it does not move, and call 112', hi: 'बाहर निकली हड्डी को कभी अंदर धकेलने की कोशिश न करें; साफ कपड़े से ढकें, पैर को लकड़ी के सहारे स्थिर करें और 112 पर कॉल करें', mr: 'बाहेर आलेले हाड आत ढकलण्याचा प्रयत्न करू नका; स्वच्छ कापडाने झाका, लाकडी फळीने पाय न हलता स्थिर करा आणि ११२ ला कॉल करा' } },
      { id: 'opt_hammer_bone_in', text: { en: 'Use a stone to hammer the bone back into the leg', hi: 'पत्थर से मारकर हड्डी को अंदर बिठाने की कोशिश करें', mr: 'दगडाने ठोकून हाड आत बसवावे' } },
      { id: 'opt_walk_hop', text: { en: 'Tell the player to jump on the broken foot to test his strength', hi: 'खिलाड़ी को टूटे पैर पर कूदने को कहें', mr: 'मोडलेल्या पायावर उड्या मारायला सांगावे' } },
      { id: 'opt_mud_pack', text: { en: 'Rub garden dirt into the wound to stop the bleeding', hi: 'घाव के अंदर मिट्टी भर दें', mr: 'जखमेत माती भरावी' } }
    ],
    correctOptionId: 'opt_splint_cover',
    explanation: {
      en: 'Never try to push a protruding broken bone back inside the skin! Pushing it pushes outside dirt and germs deep into the bone, causing severe infections. Gently cover the wound with a clean cloth, keep the leg supported and completely still with a splint or cardboard, and get to the hospital immediately.',
      hi: 'बाहर निकली हड्डी को कभी अंदर नहीं धकेलना चाहिए! ऐसा करने से बाहर की गंदगी हड्डी के अंदर चली जाती है जिससे गंभीर इन्फेक्शन हो सकता है। घाव को साफ कपड़े से ढकें, पैर को लकड़ी के सहारे स्थिर करें ताकि वह हिले नहीं, और तुरंत अस्पताल ले जाएं।',
      mr: 'बाहेर आलेले हाड कधीही आत ढकलण्याचा प्रयत्न करू नये! यामुळे बाहेरील जंतू आत जाऊन हाडाला गंभीर संसर्ग होतो. जखम स्वच्छ कापडाने झाका, पायाला फळी बांधून स्थिर करा आणि तातडीने रुग्णालयात न्या.'
    },
    source: 'Indian Orthopaedic Association & International Trauma Life Support Protocols',
    hint: {
      en: 'Never push protruding bone fragments back inside. Cover with a clean cloth, keep the leg still, and call 112.',
      hi: 'बाहर निकली हड्डी को कभी अंदर न धकेलें। साफ कपड़े से ढकें और पैर को स्थिर रखें।',
      mr: 'बाहेर आलेले हाड कधीही आत ढकलू नका. स्वच्छ कापडाने झाकून पाय स्थिर ठेवा.'
    }
  }
];
