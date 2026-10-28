import { HealthQuestion, QuestionOption } from '../types';

export const HEALTH_MYTH_OPTIONS: QuestionOption[] = [
  {
    id: 'true',
    text: {
      en: 'True',
      hi: 'सही (True)',
      mr: 'बरोबर (True)'
    }
  },
  {
    id: 'false',
    text: {
      en: 'False',
      hi: 'गलत (False)',
      mr: 'चूक (False)'
    }
  },
  {
    id: 'depends',
    text: {
      en: 'Depends',
      hi: 'परिस्थितियों पर निर्भर (Depends)',
      mr: 'परिस्थितीवर अवलंबून (Depends)'
    }
  }
];

export const MYTH_QUESTIONS: HealthQuestion[] = [
  {
    id: 'myth_water_intake',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Everyone needs to drink exactly 8 glasses (2 litres) of plain water daily, regardless of weather, body size, or physical exertion.',
      hi: 'प्रत्येक व्यक्ति को मौसम, शारीरिक वजन या श्रम की परवाह किए बिना रोजाना ठीक 8 गिलास (2 लीटर) पानी पीना ही चाहिए।',
      mr: 'हवामान, शरीराचे वजन किंवा हालचालींचा विचार न करता प्रत्येकाने दररोज नेमके ८ ग्लास (२ लिटर) पाणी प्यायलाच हवे.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'depends',
    explanation: {
      en: 'Hydration needs depend heavily on ambient temperature, humidity, sweat rate, body mass, metabolic rate, and diet. During Indian summers or intense physical work, fluid requirements can rise significantly, while sedentary individuals in air-conditioned spaces need less.',
      hi: 'पानी की आवश्यकताएं तापमान, आर्द्रता, पसीने की दर, शरीर के वजन और आहार पर निर्भर करती हैं। भारतीय गर्मियों या भारी शारीरिक श्रम में शरीर को अधिक तरल पदार्थों की आवश्यकता होती है, जबकि वातानुकूलित कमरे में बैठे व्यक्ति की जरूरत अलग होती है।',
      mr: 'पाण्याची गरज तापमान, आर्द्रता, घामाचे प्रमाण, शरीराचे वजन आणि आहारावर अवलंबून असते. उन्हाळ्यात किंवा शारीरिक श्रमाच्या वेळी पाण्याची गरज वाढते, तर बैठे काम करणाऱ्यांची गरज वेगळी असते.'
    },
    contextNotes: {
      en: 'Context matters: Fluid also comes from dal, soups, fruits, and buttermilk. Checking urine color (pale straw color indicates healthy hydration) is clinically more reliable than a rigid 8-glass rule.',
      hi: 'संदर्भ महत्वपूर्ण है: दाल, सूप, फल और छाछ से भी तरल मिलता है। मूत्र का हल्का पीला रंग पानी की पर्याप्तता का सबसे विश्वसनीय संकेत है।',
      mr: 'महत्त्वाचे: वरण, सूप, फळे आणि ताकाद्वारेही शरीराला पाणी मिळते. लघवीचा फिकट पिवळा रंग पाण्याचे योग्य प्रमाण दर्शवतो.'
    },
    source: 'ICMR-National Institute of Nutrition (NIN) Dietary Guidelines for Indians, 2024',
    hint: {
      en: 'Think about whether an outdoor construction worker in 42°C heat has the same water requirement as someone sitting in an AC office all day.',
      hi: 'सोचें कि क्या 42°C धूप में काम करने वाले मजदूर और एसी ऑफिस में बैठे व्यक्ति की पानी की जरूरत एक जैसी हो सकती है?',
      mr: 'विचार करा की उन्हात काम करणाऱ्या व्यक्तीची आणि एसी ऑफिसमध्ये बसणाऱ्या व्यक्तीची पाण्याची गरज एकच असू शकते का?'
    }
  },
  {
    id: 'myth_antibiotics_viral',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Antibiotics are effective medicines for curing common viral infections like common cold, influenza, and dengue fever.',
      hi: 'एंटीबायोटिक्स सामान्य सर्दी-जुकाम, इन्फ्लुएंजा और डेंगू जैसे वायरल संक्रमणों को ठीक करने के लिए कारगर दवाएं हैं।',
      mr: 'अँटिबायोटिक्स सामान्य सर्दी, फ्लू आणि डेंग्यूसारख्या विषाणूजन्य (व्हायरल) आजारांवर गुणकारी औषधे आहेत.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Antibiotics kill bacteria, NOT viruses. Taking antibiotics for viral colds or dengue does not hasten recovery, causes unnecessary drug side effects, and fuels dangerous antimicrobial resistance (superbugs).',
      hi: 'एंटीबायोटिक्स केवल बैक्टीरिया को नष्ट करते हैं, वायरस को नहीं। सर्दी-जुकाम या डेंगू में एंटीबायोटिक लेने से कोई फायदा नहीं होता, बल्कि इससे दवा प्रतिरोधकता (Antimicrobial Resistance) का खतरा बढ़ता है।',
      mr: 'अँटिबायोटिक्स केवळ जीवाणूंना (बॅक्टेरिया) मारतात, विषाणूंना (व्हायरस) नाही. सर्दी किंवा डेंग्यूमध्ये अँटिबायोटिक्स घेतल्याने काहीही फायदा होत नाही, उलट शरीरात औषधांचा प्रतिकार वाढतो.'
    },
    source: 'World Health Organization (WHO) & Indian Council of Medical Research (ICMR) AMR Guidelines',
    hint: {
      en: 'Remember the basic biological distinction between bacteria and viruses. What class of microorganisms do antibiotics specifically target?',
      hi: 'बैक्टीरिया और वायरस के बुनियादी अंतर पर ध्यान दें। एंटीबायोटिक्स मुख्य रूप से किस पर असर करते हैं?',
      mr: 'जीवाणू आणि विषाणू यांच्यातील फरकाचा विचार करा. अँटिबायोटिक्स नेमके कोणावर प्रभावी ठरतात?'
    }
  },
  {
    id: 'myth_ghee_elimination',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Traditional Desi Ghee and cold-pressed mustard oil are entirely harmful and must be 100% eliminated from a heart-healthy Indian diet.',
      hi: 'पारंपरिक देसी घी और कच्ची घानी सरसों का तेल पूरी तरह से हानिकारक हैं और इन्हें हृदय-अनुकूल आहार से पूरी तरह हटा देना चाहिए।',
      mr: 'पारंपरिक गावरान तूप आणि मोहरीचे तेल पूर्णपणे हानिकारक असून ते आहारातून १००% वगळलेच पाहिजे.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Eliminating all traditional dietary fats is unnecessary and counterproductive. Fats are essential for absorbing fat-soluble vitamins (A, D, E, K). ICMR guidelines recommend 20-25g of total visible fats daily, using balanced combinations of traditional oils (mustard, groundnut) and modest amounts of ghee, while avoiding trans-fats and repeated re-frying.',
      hi: 'सभी वसा को पूरी तरह बंद करना अनुचित है। विटामिन A, D, E और K के अवशोषण के लिए स्वस्थ वसा आवश्यक है। ICMR दिशानिर्देश प्रतिदिन 20-25 ग्राम तक संतुलित तेल और सीमित मात्रा में घी की अनुमति देते हैं। असली खतरा बार-बार गर्म किए गए तेल और ट्रांस-फैट से है।',
      mr: 'आहारातून सर्व स्निग्ध पदार्थ पूर्णपणे बंद करणे योग्य नाही. जीवनसत्त्वांच्या शोषणासाठी स्निग्धता आवश्यक असते. ICMR नुसार दररोज २०-२५ ग्रॅम मर्यादित तेल आणि थोडे तूप सुरक्षित आहे. वारंवार उकळलेले तेल आणि ट्रान्स फॅट्स टाळणे अधिक महत्त्वाचे आहे.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, Chapter on Dietary Fats and Oils, 2024',
    hint: {
      en: 'Does human physiology require some dietary fat to absorb vital vitamins like Vitamin D and A?',
      hi: 'क्या मानव शरीर को विटामिन D और A जैसे आवश्यक पोषक तत्वों को अवशोषित करने के लिए थोड़ी वसा की आवश्यकता होती है?',
      mr: 'मानवी शरीराला व्हिटॅमिन D आणि A शोषून घेण्यासाठी थोड्या प्रमाणातील स्निग्धतेची गरज असते का?'
    }
  },
  {
    id: 'myth_carbs_evening',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Eating carbohydrates (such as roti or rice) after 7:00 PM automatically converts straight into body fat regardless of your total daily calories.',
      hi: 'शाम 7:00 बजे के बाद कार्बोहाइड्रेट (जैसे रोटी या चावल) खाने से वे आपकी कुल दैनिक कैलोरी की परवाह किए बिना सीधे चर्बी (फैट) में बदल जाते हैं।',
      mr: 'संध्याकाळी ७:०० नंतर कार्बोहायड्रेट्स (जसे पोळी किंवा भात) खाल्ल्यास दिवसभरातील कॅलरीजचा विचार न करता ते थेट चरबीत रूपांतरित होतात.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Weight gain or loss is determined by overall energy balance (total calories consumed versus expended over days and weeks), not the clock hour at which a nutrient is consumed. A lighter, earlier dinner aids sleep quality and digestion, but carbs do not magically change chemistry at 7 PM.',
      hi: 'वजन बढ़ना या घटना पूरे दिन की कुल कैलोरी पर निर्भर करता है, घड़ी के समय पर नहीं। समय पर हल्का भोजन पाचन और अच्छी नींद में मदद करता है, लेकिन शाम 7 बजे के बाद कार्ब्स जादुई रूप से चर्बी में नहीं बदलते।',
      mr: 'वजन वाढणे हे दिवसभरातील एकूण कॅलरीजच्या समतोलावर अवलंबून असते, घड्याळाच्या वेळेवर नाही. रात्रीचे जेवण हलके असणे पचनासाठी आणि झोपेसाठी चांगले असते, परंतु कार्बोहायड्रेट्स अचानक चरबीत बदलत नाहीत.'
    },
    source: 'National Institute of Nutrition (NIN) & Endocrine Society of India Clinical Guidance',
    hint: {
      en: 'Consider whether energy storage in the body is driven by 24-hour calorie balance or a fixed curfew on the clock.',
      hi: 'विचार करें कि क्या शरीर में ऊर्जा का संचय 24 घंटे के कैलोरी संतुलन पर निर्भर करता है या घड़ी की सुइयों पर?',
      mr: 'शरीरातील ऊर्जेचे प्रमाण २४ तासांच्या एकूण कॅलरी समतोलावर ठरते की घड्याळाच्या ठराविक वेळेवर?'
    }
  },
  {
    id: 'myth_knuckle_cracking',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Habitually cracking your finger knuckles causes arthritis and permanent joint deformities in later life.',
      hi: 'उंगलियों के जोड़ चटकाने या फोड़ने की आदत से वृद्धावस्था में गठिया (Arthritis) और जोड़ों में स्थायी विकृति हो जाती है।',
      mr: 'बोटे मोडण्याची सवय भविष्यात सांधेदुखी (संधिवात/Arthritis) आणि सांध्यांचे कायमस्वरूपी नुकसान करते.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'The characteristic popping sound is caused by rapid expansion and collapse of harmless nitrogen gas bubbles within the synovial lubricating fluid of the joint. Multiple long-term clinical studies found zero correlation between knuckle cracking and osteoarthritis.',
      hi: 'जोड़ चटकाने पर आने वाली आवाज जोड़ों के तरल (Synovial Fluid) में नाइट्रोजन गैस के बुलबुले फूटने से होती है। चिकित्सीय शोधों में उंगलियां चटकाने और गठिया (Arthritis) के बीच कोई संबंध नहीं पाया गया है।',
      mr: 'बोटे मोडताना येणारा आवाज हा सांध्यातील द्रवपदार्थामधील (Synovial Fluid) नायट्रोजन वायूचे बुडबुडे फुटल्यामुळे येतो. अनेक अभ्यासांमध्ये बोटे मोडणे आणि सांधेदुखी यांचा कोणताही थेट संबंध आढळलेला नाही.'
    },
    source: 'AIIMS Orthopedic Clinical Literacy Protocols & Harvard Health Publishing',
    hint: {
      en: 'What causes the popping sound inside a joint? Is it bone rubbing against bone or fluid gas bubbles shifting?',
      hi: 'जोड़ों से आने वाली आवाज का असली कारण क्या है? क्या यह हड्डियों का रगड़ना है या तरल में गैस के बुलबुलों का हलचल?',
      mr: 'सांध्यांचा आवाज हा हाडे एकमेकांवर घासल्यामुळे येतो की सांध्यातील द्रवातील हवेच्या बुडबुड्यांमुळे?'
    }
  },
  {
    id: 'myth_sugar_overnight_diabetes',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Eating sweets during a festival will immediately cause Type 2 Diabetes in a healthy person within a few days.',
      hi: 'त्योहार पर मिठाई खाने से किसी स्वस्थ व्यक्ति को कुछ ही दिनों में सीधे टाइप 2 डायबिटीज हो जाती है।',
      mr: 'सणासुदीला गोडधोड खाल्ल्यास निरोगी व्यक्तीला काही दिवसांतच थेट टाईप २ मधुमेह होतो.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Type 2 Diabetes develops over years due to chronic insulin resistance, visceral abdominal fat, genetics, chronic inactivity, and prolonged metabolic stress. An occasional celebratory sweet in an active, healthy person does not cause diabetes overnight, although chronic excess sugar intake contributes to weight gain and metabolic dysfunction.',
      hi: 'टाइप 2 डायबिटीज कई वर्षों में विकसित होती है, जिसके मुख्य कारण इंसुलिन प्रतिरोधकता, आनुवंशिकी, गतिहीन जीवनशैली और पेट की चर्बी हैं। कभी-कभार मिठाई खाने से रातोंरात डायबिटीज नहीं होती, हालांकि लगातार अत्यधिक मीठा खाने से मोटापा और मेटाबॉलिक समस्याएं हो सकती हैं।',
      mr: 'टाईप २ मधुमेह हा एका रात्रीत होत नाही. अनुवांशिकता, व्यायामाचा अभाव, पोटाची चरबी आणि इन्सुलिन प्रतिकार यांमुळे अनेक वर्षांत हा आजार होतो. अधूनमधून सणांना गोड खाल्ल्याने थेट मधुमेह होत नाही, पण नियमित अतिप्रमाणात गोड खाणे आरोग्यासाठी अपायकारक ठरू शकते.'
    },
    source: 'Research Society for the Study of Diabetes in India (RSSDI) Clinical Practice Recommendations',
    hint: {
      en: 'Is Type 2 diabetes an acute infection that develops in days, or a chronic lifestyle and genetic condition that builds up over years?',
      hi: 'क्या टाइप 2 डायबिटीज कुछ दिनों में होने वाली कोई संक्रामक बीमारी है, या वर्षों में विकसित होने वाली जीवनशैली संबंधी स्थिति?',
      mr: 'टाईप २ मधुमेह हा काही दिवसांत होणारा आजार आहे की दीर्घकालीन जीवनशैली व अनुवांशिकतेशी निगडित आहे?'
    }
  },
  {
    id: 'myth_bitter_gourd_cures_diabetes',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Drinking bitter gourd (karela) juice or neem concoctions permanently cures diabetes, allowing patients to stop all prescribed medical treatments.',
      hi: 'करेले का जूस या नीम का काढ़ा पीने से डायबिटीज हमेशा के लिए ठीक हो जाती है और डॉक्टर द्वारा दी गई दवाएं बंद की जा सकती हैं।',
      mr: 'कारल्याचा रस किंवा कडुनिंबाचा काढा नियमित प्यायल्यास मधुमेह कायमचा बरा होतो आणि डॉक्टरांची औषधे पूर्णपणे बंद करता येतात.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Type 2 diabetes has no permanent herbal cure. Bitter gourd contains compounds like charantin that have mild glucose-lowering properties, but it CANNOT replace insulin or oral hypoglycemic medications. Abruptly stopping prescribed medications leads to severe hyperglycemia and diabetic ketoacidosis.',
      hi: 'डायबिटीज का कोई स्थायी जड़ी-बूटी वाला इलाज नहीं है। करेले में कुछ ऐसे तत्व होते हैं जो ब्लड शुगर को थोड़ा कम कर सकते हैं, लेकिन यह डॉक्टर की दवाओं की जगह नहीं ले सकता। दवाएं बंद करने से शुगर खतरनाक स्तर तक बढ़ सकती है।',
      mr: 'मधुमेहावर कोणताही कायमस्वरूपी घरगुती उपाय नाही. कारल्यामुळे रक्तातील साखर किंचित कमी होण्यास मदत होऊ शकते, पण ते डॉक्टरांच्या औषधांना पर्याय ठरू शकत नाही. औषधे अचानक बंद केल्यास साखरेचे प्रमाण धोकादायक पातळीवर जाऊ शकते.'
    },
    source: 'ICMR Guidelines for Management of Type 2 Diabetes & RSSDI Clinical Protocols',
    hint: {
      en: 'Can a vegetable juice replace systemic insulin production and cellular glucose uptake mechanisms?',
      hi: 'क्या कोई सब्जी का जूस अग्न्याशय (पैंक्रियाज) और कोशिकाओं के इंसुलिन तंत्र का पूरा विकल्प बन सकता है?',
      mr: 'भाजीचा रस शरीरातील इन्सुलिन निर्मिती आणि पेशींच्या ग्लुकोज शोषणाची पूर्ण जागा घेऊ शकतो का?'
    }
  },
  {
    id: 'myth_fever_paracetamol_immediate',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'You must immediately take paracetamol for any slight body temperature rise above 98.6°F (such as 99.2°F / 37.3°C) to crush the fever instantly.',
      hi: 'हल्का सा तापमान बढ़ते ही (जैसे 99.2°F) बुखार को तुरंत दबाने के लिए तुरंत पैरासिटामोल ले लेना चाहिए।',
      mr: 'किंचित तापमान वाढल्याबरोबर (जसे की ९९.२°F) ताप तात्काळ दाबण्यासाठी लगेच पॅरासिटामॉल घेणे अनिवार्य आहे.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'depends',
    explanation: {
      en: 'Fever is the immune system\'s natural defense mechanism to inhibit viral and bacterial replication. Mild elevations (below 100.4°F / 38°C) without severe distress usually only require hydration, light clothing, and rest. Antipyretics like paracetamol are indicated when fever causes significant discomfort, exceeds 101°F, or in children prone to febrile seizures.',
      hi: 'बुखार शरीर की प्रतिरक्षा प्रणाली की प्राकृतिक रक्षा प्रतिक्रिया है जो वायरस को पनपने से रोकती है। 100.4°F से कम के हल्के तापमान में सिर्फ आराम और पर्याप्त पानी की जरूरत होती है। पैरासिटामोल तब जरूरी होती है जब बेचैनी हो, शरीर में तेज दर्द हो या तापमान अधिक बढ़ जाए।',
      mr: 'ताप ही शरीराची रोगप्रतिकारक शक्ती विषाणूंशी लढत असल्याचे लक्षण आहे. १००.४°F पेक्षा कमी हलक्या तापात फक्त विश्रांती आणि भरपूर पाण्याची गरज असते. तीव्र कणकण किंवा जास्त ताप असल्यास डॉक्टरांच्या सल्ल्याने औषध घ्यावे.'
    },
    contextNotes: {
      en: 'Context: Treat the patient\'s discomfort, not just the thermometer number. Always seek immediate medical care if fever is accompanied by stiff neck, confusion, breathing difficulty, or persistent vomiting.',
      hi: 'संदर्भ: केवल थर्मामीटर का नंबर नहीं, मरीज की परेशानी देखें। यदि गर्दन में अकड़न या सांस लेने में तकलीफ हो तो तुरंत डॉक्टर को दिखाएं।',
      mr: 'महत्त्वाचे: फक्त तापमापीचा आकडा न बघता रुग्णाची अस्वस्थता तपासा. मान आखडणे किंवा धाप लागणे असल्यास त्वरित वैद्यकीय मदत घ्या.'
    },
    source: 'Indian Academy of Pediatrics (IAP) Guidelines on Fever Management & AIIMS Protocols',
    hint: {
      en: 'Is a mild fever an enemy to be instantly suppressed or an active immunological defense tool of the human body?',
      hi: 'क्या हल्का बुखार एक दुश्मन है जिसे तुरंत दबाना चाहिए, या शरीर की बीमारियों से लड़ने की स्वाभाविक प्रक्रिया?',
      mr: 'कमी ताप हा शरीराचा शत्रू आहे की रोगांशी लढण्यासाठी शरीराने वापरलेले नैसर्गिक हत्यार?'
    }
  },
  {
    id: 'myth_starvation_belly_fat',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Skipping meals and starving yourself for whole days is the healthiest and fastest way to lose stubborn belly fat permanently.',
      hi: 'खाना छोड़ना और पूरे दिन भूखे रहना पेट की चर्बी को स्थायी रूप से घटाने का सबसे स्वस्थ और तेज तरीका है।',
      mr: 'जेवण टाळणे आणि दिवसभर उपाशी राहणे हा पोटावरील चरबी कायमस्वरूपी कमी करण्याचा सर्वात आरोग्यदायी आणि वेगवान मार्ग आहे.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Severe starvation forces the body into energy conservation mode, triggering muscle catabolism, slowing basal metabolic rate (BMR), and causing nutrient deficiencies. Once normal eating resumes, the body rapidly regains weight as visceral fat (yo-yo effect). Sustainable fat loss requires a moderate calorie deficit with adequate protein and strength training.',
      hi: 'कड़ा उपवास शरीर के मेटाबॉलिज्म को धीमा कर देता है और मांसपेशियों को नुकसान पहुंचाता है। जैसे ही व्यक्ति सामान्य भोजन शुरू करता है, वजन फिर से तेजी से बढ़ जाता है। स्वस्थ वजन घटाने के लिए संतुलित आहार और नियमित व्यायाम जरूरी है।',
      mr: 'तीव्र उपासमारीमुळे शरीराचा चयापचय (Metabolism) मंदावतो आणि स्नायूंचे नुकसान होते. पुन्हा नियमित जेवण सुरू केल्यावर वजन पूर्वीपेक्षा वेगाने वाढते. योग्य आहारातील संतुलन आणि व्यायाम हाच वजन घटवण्याचा सुरक्षित मार्ग आहे.'
    },
    source: 'ICMR-NIN Guidelines on Obesity and Weight Management',
    hint: {
      en: 'What happens to human metabolism when the body senses starvation? Does it burn fat rapidly or conserve energy and burn muscle?',
      hi: 'भूखमरी की स्थिति में शरीर क्या करता है? क्या वह तेजी से चर्बी जलाता है या ऊर्जा बचाने के लिए मेटाबॉलिज्म धीमा करता है?',
      mr: 'उपासमारीच्या काळात शरीर ऊर्जा वाचवण्यासाठी चयापचय मंदावते की चरबी जाळते?'
    }
  },
  {
    id: 'myth_raw_milk_unboiled',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Drinking raw, unboiled milk straight from dairy cattle is safer and far more nutritious than pasteurized or boiled milk.',
      hi: 'पशुओं से निकला कच्चा, बिना उबला दूध पीना पाश्चुरीकृत या उबले हुए दूध से अधिक सुरक्षित और पौष्टिक होता है।',
      mr: 'गाई-म्हशींचे न तापवलेले ताजे कच्चे दूध पिणे हे उकळलेल्या किंवा पाश्चराईज्ड दुधापेक्षा अधिक सुरक्षित आणि पौष्टिक असते.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Raw milk can harbor lethal pathogens including Mycobacterium bovis (bovine tuberculosis), Brucella, Salmonella, E. coli, and Listeria. Boiling or commercial pasteurization kills these hazardous bacteria without destroying essential calcium or proteins, making it safe for human consumption.',
      hi: 'कच्चे दूध में टीबी, ब्रूसेलोसिस और ई-कोलाई जैसे खतरनाक बैक्टीरिया हो सकते हैं। दूध को उबालने या पाश्चुरीकृत करने से आवश्यक प्रोटीन या कैल्शियम नष्ट नहीं होते, बल्कि हानिकारक रोगाणु पूरी तरह नष्ट हो जाते हैं।',
      mr: 'कच्च्या दुधात क्षयरोग (TB), ब्रुसेलोसिस आणि ई-कोलायसारखे अत्यंत घातक जीवाणू असू शकतात. दूध उकळल्याने त्यातील प्रथिने किंवा कॅल्शियम नष्ट होत नाही, तर केवळ घातक जंतू नष्ट होऊन ते पिण्यास सुरक्षित बनते.'
    },
    source: 'Food Safety and Standards Authority of India (FSSAI) & WHO Food Safety Guidelines',
    hint: {
      en: 'Why did the scientist Louis Pasteur invent pasteurization? What microscopic threats lurk in unboiled animal secretions?',
      hi: 'दूध को उबालने या पाश्चुरीकृत करने की आवश्यकता क्यों पड़ी? कच्चे दूध में कौन से सूक्ष्म रोगाणु छिपे हो सकते हैं?',
      mr: 'पाश्चरायझेशनचा शोध कशासाठी लागला? न तापवलेल्या प्राण्यांच्या दुधात कोणते सूक्ष्म जीव असू शकतात?'
    }
  },
  {
    id: 'myth_dim_light_permanent_blindness',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Reading a printed book or studying under dim light causes irreversible structural damage and permanent blindness.',
      hi: 'कम रोशनी में किताब पढ़ना या पढ़ाई करने से आंखों की पुतलियों को स्थायी नुकसान होता है और व्यक्ति अंधा हो जाता है।',
      mr: 'मंद प्रकाशात वाचन किंवा अभ्यास केल्याने डोळ्यांचे कायमस्वरूपी नुकसान होऊन अंधत्व येऊ शकते.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Reading in dim light causes temporary eye fatigue, dry eyes, and headache because the ciliary muscles work harder to focus and blink rates drop. However, multiple ophthalmological studies confirm it does NOT cause permanent anatomical eye damage or blindness. Good lighting is recommended purely for visual comfort.',
      hi: 'कम रोशनी में पढ़ने से आंखों में अस्थायी थकान, सूखापन और सिरदर्द हो सकता है क्योंकि आंख की मांसपेशियों पर जोर पड़ता है। लेकिन इससे आंखों की रोशनी स्थायी रूप से नहीं जाती और न ही अंधापन होता है। पर्याप्त रोशनी आराम के लिए जरूरी है।',
      mr: 'मंद प्रकाशात वाचल्याने डोळ्यांवर तात्पुरता ताण येतो, डोळे कोरडे पडतात किंवा डोके दुखू शकते. परंतु यामुळे डोळ्यांना कायमस्वरूपी इजा किंवा अंधत्व येत नाही. डोळ्यांच्या आरामासाठी चांगल्या प्रकाशात वाचन करणे योग्य ठरते.'
    },
    source: 'AIIMS Dr. Rajendra Prasad Centre for Ophthalmic Sciences & American Academy of Ophthalmology',
    hint: {
      en: 'Does muscular fatigue in the eye equate to permanent irreversible physical damage to the optic nerve?',
      hi: 'क्या आंखों की मांसपेशियों की अस्थायी थकान का मतलब ऑप्टिक तंत्रिका का स्थायी नुकसान होता है?',
      mr: 'डोळ्यांच्या स्नायूंचा तात्पुरता थकवा म्हणजे डोळ्यांना कायमस्वरूपी इजा होणे असते का?'
    }
  },
  {
    id: 'myth_multivitamins_for_all',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Every healthy adult requires daily high-dose synthetic multivitamin pills to stay energetic, even if they eat a balanced whole-food diet.',
      hi: 'संतुलित और पौष्टिक भोजन करने वाले प्रत्येक स्वस्थ वयस्क को भी ऊर्जावान रहने के लिए रोजाना मल्टीविटामिन की गोलियां खानी ही चाहिए।',
      mr: 'संतुलित आहार घेणाऱ्या प्रत्येक निरोगी व्यक्तीलाही दिवसभर उत्साही राहण्यासाठी दररोज कृत्रिम मल्टीव्हिटॅमिनच्या गोळ्या घेणे गरजेचे आहे.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Healthy adults eating a varied diet of vegetables, fruits, whole grains, pulses, and dairy meet their micronutrient needs naturally. Routine indiscriminate supplementation provides no proven longevity benefits and excessive doses of fat-soluble vitamins (A, D, E, K) can accumulate and cause hypervitaminosis toxicity. Supplements are only indicated for diagnosed deficiencies.',
      hi: 'विविध प्रकार के फल, सब्जियां, दालें और अनाज खाने वाले स्वस्थ लोगों को अतिरिक्त गोलियों की आवश्यकता नहीं होती। बिना डॉक्टर की सलाह के अधिक विटामिन की गोलियां लेने से शरीर में विषाक्तता (Hypervitaminosis) हो सकती है। सप्लीमेंट्स केवल जांच में कमी पाए जाने पर ही लेने चाहिए।',
      mr: 'फळे, पालेभाज्या, डाळी आणि धान्यांचा समावेश असलेला समतोल आहार सर्व आवश्यक जीवनसत्त्वे नैसर्गिकरीत्या पुरवतो. गरज नसताना गोळ्या खाल्ल्याने शरीरात अतिरिक्त जीवनसत्त्वे साठून दुष्परिणाम होऊ शकतात. तपासणीत कमतरता आढळल्यासच सप्लिमेंट्स घ्याव्यात.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, Micronutrient Recommendations, 2024',
    hint: {
      en: 'Can vitamins A and D accumulate in the body to toxic levels if taken in excess without medical need?',
      hi: 'क्या बिना जरूरत के अत्यधिक विटामिन लेने से शरीर में विषाक्तता (Toxicity) हो सकती है?',
      mr: 'गरज नसताना अती प्रमाणात व्हिटॅमिनच्या गोळ्या घेतल्यास शरीरावर विपरीत परिणाम होऊ शकतो का?'
    }
  },
  {
    id: 'myth_stop_bp_meds_when_normal',
    mode: 'myth_buster',
    difficulty: 'hard',
    points: 35,
    question: {
      en: 'A hypertensive patient whose blood pressure reading normalizes to 120/80 mmHg on medication can immediately stop taking their BP pills.',
      hi: 'दवा खाने से जिस मरीज का ब्लड प्रेशर सामान्य (120/80) हो जाता है, वह अपनी बीपी की दवा तुरंत हमेशा के लिए बंद कर सकता है।',
      mr: 'औषध घेत असताना रक्तदाब १२०/८० असा सामान्य झाल्यावर संबंधित रुग्ण बीपीचे औषध घेणे कायमचे थांबवू शकतो.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'The blood pressure is normal precisely BECAUSE the medication is continuously maintaining vascular tone. Hypertension is a chronic lifelong condition. Abruptly stopping antihypertensive drugs leads to dangerous rebound hypertension, substantially increasing the risk of strokes, heart attacks, and kidney failure. Never stop without doctor supervision.',
      hi: 'ब्लड प्रेशर इसलिए सामान्य है क्योंकि दवा काम कर रही है। दवा बंद करते ही बीपी फिर से बढ़ सकता है जिससे स्ट्रोक (लकवा) या हार्ट अटैक का खतरा बढ़ जाता है। डॉक्टर की सलाह के बिना बीपी की दवा कभी बंद नहीं करनी चाहिए।',
      mr: 'औषध नियमित सुरू असल्यामुळेच रक्तदाब नियंत्रणात आलेला असतो. उच्च रक्तदाब हा दीर्घकालीन आजार आहे. औषध अचानक बंद केल्यास रक्तदाब उसळी मारून वाढतो, ज्यामुळे अर्धांगवायू (Stroke) किंवा हृदयविकाराचा झटका येण्याचा धोका असतो.'
    },
    source: 'Cardiological Society of India (CSI) & WHO Guidelines for Pharmacological Treatment of Hypertension',
    hint: {
      en: 'Why is the blood pressure currently reading 120/80? Is it cured forever or is the daily drug actively managing it?',
      hi: 'सोचें कि बीपी सामान्य क्यों आया है? क्या बीमारी हमेशा के लिए खत्म हो गई है या दवा के असर से नियंत्रित है?',
      mr: 'रक्तदाब सामान्य का आला आहे? आजार मुळापासून बरा झाला आहे की औषधाच्या प्रभावामुळे नियंत्रणात आहे?'
    }
  },
  {
    id: 'myth_hot_water_melts_belly_fat',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Drinking hot boiling water right after greasy meals literally melts and flushes away stored human belly fat and body cholesterol.',
      hi: 'तैलीय भोजन के बाद खौलता हुआ गर्म पानी पीने से पेट की चर्बी और कोलेस्ट्रॉल पिघलकर शरीर से बाहर निकल जाता है।',
      mr: 'तेलकट जेवणानंतर उकळते गरम पाणी प्यायल्यास पोटातील साठलेली चरबी आणि कोलेस्ट्रॉल वितळून शरीराबाहेर वाहून जाते.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Water temperature does not melt subcutaneous or visceral body fat. Digestion and lipid absorption are strictly biochemical processes driven by pancreatic lipase enzymes and bile salts. Water enters the stomach, equilibrates to internal body temperature (37°C), and is absorbed in the intestines without burning stored adipocytes.',
      hi: 'पानी का तापमान शरीर की चर्बी को नहीं पिघला सकता। वसा का पाचन एंजाइमों और पित्त रस द्वारा होता है। पेट में जाकर पानी तुरंत शरीर के तापमान (37°C) के बराबर हो जाता है। चर्बी घटाने के लिए कैलोरी नियंत्रण और शारीरिक श्रम आवश्यक है।',
      mr: 'पाण्याचे तापमान शरीरातील चरबी वितळवू शकत नाही. अन्नपचनाची क्रिया पाचक रस आणि एन्झाईम्सद्वारे चालते. पोटात गेलेले पाणी शरीराच्या तापमानाशी (३७°C) जुळवून घेते. चरबी वितळवण्यासाठी ऊर्जा खर्च करणे आवश्यक असते.'
    },
    source: 'National Institute of Nutrition (NIN) Clinical Physiology FAQs',
    hint: {
      en: 'Does ingested water change your internal core body temperature or biologically dissolve adipose fat tissue?',
      hi: 'क्या पिया हुआ पानी शरीर के आंतरिक तापमान को बदलकर चर्बी के ऊतकों को सीधे पिघला सकता है?',
      mr: 'पिलेले पाणी शरीराचे तापमान बदलून चरबीच्या पेशी थेट वितळवू शकते का?'
    }
  },
  {
    id: 'myth_citrus_curd_causes_cold',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Eating curd, oranges, or guavas during a cold or in winter directly creates viral infections and aggravates throat phlegm.',
      hi: 'सर्दी-जुकाम में या सर्दियों में दही, संतरा या अमरूद खाने से सीधे वायरल संक्रमण पैदा होता है और कफ बढ़ जाता है।',
      mr: 'सर्दी झालेली असताना किंवा हिवाळ्यात दही, संत्री किंवा पेरू खाल्ल्यास थेट कफ वाढतो आणि सर्दी बळावते.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Colds and respiratory infections are caused by airborne viruses (rhinoviruses, influenza), NOT by fruits or curd. Citrus fruits like oranges and amla are loaded with Vitamin C, an antioxidant that supports white blood cell immune function. Curd provides beneficial probiotics. Room-temperature consumption is completely safe.',
      hi: 'सर्दी-जुकाम वायरस के संक्रमण से होता है, फलों या दही से नहीं। संतरा, अमरूद और आंवला में प्रचुर मात्रा में विटामिन सी होता है जो रोगप्रतिकारक क्षमता बढ़ाता है। दही में प्रोबायोटिक्स होते हैं। फ्रिज से निकालकर सामान्य तापमान पर इनका सेवन करना सुरक्षित है।',
      mr: 'सर्दी ही हवेतील विषाणूंमुळे (व्हायरस) होते, फळे किंवा दह्यामुळे नाही. संत्री, आवळा आणि पेरूमध्ये भरपूर व्हिटॅमिन सी असते, जे शरीराची प्रतिकारशक्ती वाढवते. दही पोटासाठी उपयुक्त असते. थंडगार ऐवजी सामान्य तापमानाला खाणे सुरक्षित आहे.'
    },
    source: 'ICMR Guidelines on Nutrition and Immune Function & AIIMS Pediatrics Guidelines',
    hint: {
      en: 'What is the true biological pathogen behind common colds: cold-temperature food or airborne viral particles?',
      hi: 'सर्दी-जुकाम का असली कारण क्या है: भोजन का ठंडा होना या हवा में मौजूद वायरस?',
      mr: 'सर्दीचे खरे कारण काय आहे: अन्नाचा गुणधर्म की हवेतील संसर्गजन्य विषाणू?'
    }
  },
  {
    id: 'myth_burns_toothpaste_butter',
    mode: 'myth_buster',
    difficulty: 'hard',
    points: 35,
    question: {
      en: 'Applying toothpaste, butter, or raw turmeric powder directly over fresh kitchen burn blisters cools the burn and prevents scarring.',
      hi: 'रसोई में हाथ जलने पर ताजे छालों पर टूथपेस्ट, मक्खन या हल्दी का लेप लगाने से जलन शांत होती है और निशान नहीं पड़ते।',
      mr: 'स्वयंपाकघरात हात भाजल्यास आलेल्या फोडांवर टूथपेस्ट, लोणी किंवा हळद लावल्यास जळजळ थांबते आणि डाग पडत नाहीत.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Toothpaste, butter, or powders trap residual heat deep within the dermis, accelerating tissue destruction, and introduce severe bacterial infections. The gold-standard immediate first-aid is holding the burned area under cool, clean running tap water (15-25°C) for 10-20 minutes, then covering with sterile gauze.',
      hi: 'टूथपेस्ट, मक्खन या तेल लगाने से त्वचा के अंदर की गर्मी बाहर नहीं निकल पाती और गंभीर संक्रमण का खतरा बढ़ जाता है। जलने पर एकमात्र सही प्राथमिक उपचार है 10 से 20 मिनट तक नल का सामान्य ठंडा पानी बहने देना और साफ पट्टी से ढकना।',
      mr: 'टूथपेस्ट किंवा लोणी लावल्यास त्वचेतील उष्णता आतच कोंडली जाते, ऊतींचे नुकसान वाढते आणि जंतूसंसर्ग होतो. भाजल्यावर लगेच १० ते २० मिनिटे नळाच्या वाहत्या थंड पाण्याखाली हात धरणे हाच एकमेव शास्त्रीय प्रथमोपचार आहे.'
    },
    source: 'National Burns Centre (NBC) India & WHO Clinical Protocols for Burn Care',
    hint: {
      en: 'Do thick greasy household pastes trap heat inside the skin or facilitate cooling?',
      hi: 'क्या गाढ़े चिकने पदार्थ त्वचा के अंदर गर्मी को कैद कर लेते हैं या बाहर निकलने देते हैं?',
      mr: 'चिकट आणि तेलकट पदार्थ त्वचेतील उष्णता आतच अडकवून ठेवतात की बाहेर पडू देतात?'
    }
  },
  {
    id: 'myth_sweating_equals_fat_loss',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Drenching in heavy sweat during a workout proves that you burned significant amounts of body fat during that session.',
      hi: 'व्यायाम के दौरान अत्यधिक पसीना बहना इस बात का पक्का सबूत है कि आपने उस समय शरीर की बहुत सारी चर्बी जला दी है।',
      mr: 'व्यायाम करताना प्रचंड घाम येणे म्हणजे शरीरातील भरपूर चरबी जळून नष्ट झाली याचा पक्का पुरावा आहे.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Sweating is simply the body\'s thermoregulatory mechanism to prevent overheating through evaporative cooling. Sweat consists almost entirely of water and electrolytes, NOT melted fat. Any immediate weight loss seen on the scale post-workout is fluid loss that returns as soon as you rehydrate.',
      hi: 'पसीना केवल शरीर को ठंडा रखने की एक प्राकृतिक प्रक्रिया है। पसीने में केवल पानी और नमक होता है, चर्बी नहीं। कसरत के तुरंत बाद वजन में दिखने वाली कमी सिर्फ पानी की कमी होती है, जो पानी पीते ही वापस आ जाती है।',
      mr: 'घाम येणे ही शरीराचे तापमान नियंत्रित ठेवण्याची नैसर्गिक पद्धत आहे. घामामध्ये पाणी आणि क्षार असतात, वितळलेली चरबी नसते. व्यायामानंतर काट्यावर कमी दिसणारे वजन हे केवळ शरीरातील पाण्याचे वजन असते.'
    },
    source: 'American College of Sports Medicine (ACSM) & ICMR Physical Activity Guidance',
    hint: {
      en: 'What is the primary chemical composition of sweat? Is it liquefied adipose tissue or water and mineral salts?',
      hi: 'पसीने में रासायनिक रूप से क्या मौजूद होता है? क्या वह पिघली हुई चर्बी है या पानी और खनिज लवण?',
      mr: 'घामामध्ये नेमके काय असते? विरघळलेली चरबी की पाणी आणि क्षार?'
    }
  },
  {
    id: 'myth_four_hours_sleep_nap',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'An adult can function at peak cognitive and physical health with only 4 hours of night sleep if they take a 15-minute afternoon nap.',
      hi: 'यदि कोई वयस्क दोपहर में 15 मिनट की झपकी ले ले, तो रात में केवल 4 घंटे सोकर भी वह पूरी तरह स्वस्थ और ऊर्जावान रह सकता है।',
      mr: 'दुपारी १५ मिनिटांची डुलकी घेतल्यास रात्री केवळ ४ तास झोपूनही प्रौढ व्यक्ती शारीरिक व मानसिकदृष्ट्या पूर्णपणे निरोगी राहू शकते.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Adults need 7 to 8 hours of consolidated sleep to progress through essential slow-wave (Stage 3) and REM sleep cycles. During these phases, the brain clears amyloid beta toxins, repairs cardiac tissues, and consolidates memory. Chronic 4-hour sleep drastically elevates hypertension, insulin resistance, and cognitive decline.',
      hi: 'वयस्कों को मस्तिष्क की मरम्मत और हृदय के स्वास्थ्य के लिए 7 से 8 घंटे की गहरी नींद चाहिए। रात में केवल 4 घंटे सोने से दिमाग में विषाक्त पदार्थ जमा होते हैं और बीपी, डायबिटीज और याददाश्त कमजोर होने का खतरा कई गुना बढ़ जाता है।',
      mr: 'मेंदूच्या पेशींची दुरुस्ती आणि हृदयाच्या आरोग्यासाठी प्रौढ व्यक्तीला दररोज ७ ते ८ तास गाढ झोपेची गरज असते. नियमित केवळ ४ तास झोपल्यास उच्च रक्तदाब, मधुमेह आणि विस्मृतीचा धोका मोठ्या प्रमाणावर वाढतो.'
    },
    source: 'Indian Society for Sleep Research (ISSR) & National Sleep Foundation Clinical Consensus',
    hint: {
      en: 'Can a brief 15-minute nap replace multiple 90-minute REM and deep restorative slow-wave sleep cycles?',
      hi: 'क्या 15 मिनट की झपकी रात के 90-90 मिनट के गहरे नींद के चक्रों की बराबरी कर सकती है?',
      mr: '१५ मिनिटांची डुलकी रात्रीच्या ९० मिनिटांच्या गाढ झोपेच्या चक्रांची भरपाई करू शकते का?'
    }
  },
  {
    id: 'myth_all_carbs_are_toxic',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'All carbohydrates, including millets (ragi, jowar), brown rice, and whole pulses, are inherently toxic and must be totally eliminated.',
      hi: 'मोटा अनाज (रागी, ज्वार), भूरे चावल और साबुत दालों सहित सभी कार्बोहाइड्रेट शरीर के लिए जहरीले हैं और इन्हें पूरी तरह छोड़ देना चाहिए।',
      mr: 'नाचणी, ज्वारी, बाजरी, हातसडीचा भात आणि कडधान्यांसह सर्व कार्बोहायड्रेट्स शरीरासाठी विषारी असून ते पूर्णपणे वर्ज्य केले पाहिजेत.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Complex unrefined carbohydrates provide primary cellular energy, essential B-vitamins, and dietary fiber that feeds healthy gut microbiota. The medical issue lies in ULTRA-PROCESSED refined carbohydrates (maida, liquid high-fructose syrups). Traditional whole grains and millets are healthy staples.',
      hi: 'साबुत अनाज और बाजरा शरीर को आवश्यक ऊर्जा, बी-विटामिन और फाइबर देते हैं जो आंतों के स्वास्थ्य के लिए जरूरी हैं। समस्या केवल अत्यधिक रिफाइंड मैदा और चीनी से है। पारंपरिक अनाज स्वास्थ्य के लिए बेहद लाभकारी हैं।',
      mr: 'तृणधान्ये आणि भरडधान्ये शरीराला आवश्यक ऊर्जा, फायबर आणि जीवनसत्त्वे पुरवतात, ज्यामुळे पचनसंस्था निरोगी राहते. केवळ मैद्यासारखे प्रक्रिया केलेले घटक हानिकारक असतात. पारंपरिक तृणधान्ये आरोग्यासाठी उत्तम असतात.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, 2024 (My Plate for the Day)',
    hint: {
      en: 'Is there a difference between fiber-rich traditional millets and industrially refined white flour (maida)?',
      hi: 'क्या फाइबर से भरपूर रागी-ज्वार और कारखानों में बने सफेद मैदे में कोई अंतर होता है?',
      mr: 'फायबरयुक्त नाचणी-ज्वारी आणि कारखान्यात तयार झालेला मैदा यामध्ये काही फरक असतो का?'
    }
  },
  {
    id: 'myth_mental_health_willpower',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Clinical depression and anxiety disorders are simply personal weaknesses that can be cured instantly if a person chooses to "think positive".',
      hi: 'डिप्रेशन और गंभीर एंग्जायटी केवल व्यक्तिगत कमजोरी है, जिसे इंसान केवल "सकारात्मक सोच" रखकर तुरंत ठीक कर सकता है।',
      mr: 'तीव्र नैराश्य (Depression) आणि चिंता हा केवळ मनाचा कमकुवतपणा असून सकारात्मक विचार करून तो तात्काळ बरा करता येतो.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Depressive and anxiety disorders are recognized medical conditions involving complex interactions of neurotransmitters (serotonin, dopamine), genetic predisposition, neuroinflammation, and psychological stress. They require empathetic clinical support, psychotherapy, and medical interventions when indicated.',
      hi: 'डिप्रेशन और एंग्जायटी न्यूरोट्रांसमीटर, आनुवंशिकी और तनाव से जुड़ी वास्तविक चिकित्सीय स्थितियां हैं। इन्हें सिर्फ "मुस्कुराने" से ठीक नहीं किया जा सकता। इसके लिए पेशेवर परामर्श (Counseling) और सही डॉक्टरी इलाज की आवश्यकता होती है।',
      mr: 'नैराश्य आणि चिंता हे मेंदूतील रसायनांचे असंतुलन, अनुवांशिकता आणि ताणामुळे होणारे वैद्यकीय आजार आहेत. ते केवळ सकारात्मक विचारांनी बरे होत नाहीत, तर त्यासाठी मानसोपचारतज्ज्ञांचे मार्गदर्शन आणि योग्य उपचारांची गरज असते.'
    },
    source: 'National Institute of Mental Health and Neurosciences (NIMHANS) & WHO World Mental Health Report',
    hint: {
      en: 'Would you tell a patient with Type 1 diabetes to cure their insulin deficiency by sheer willpower?',
      hi: 'क्या आप डायबिटीज के मरीज से कहेंगे कि वह अपनी इच्छाशक्ति से इंसुलिन बना ले?',
      mr: 'मधुमेहाच्या रुग्णाला केवळ इच्छाशक्तीच्या बळावर इन्सुलिन तयार करण्याचा सल्ला देणे योग्य ठरेल का?'
    }
  },
  {
    id: 'myth_dengue_lifetime_immunity',
    mode: 'myth_buster',
    difficulty: 'hard',
    points: 35,
    question: {
      en: 'Surviving a dengue virus infection once gives a person 100% lifetime immunity against all future dengue episodes.',
      hi: 'एक बार डेंगू होकर ठीक होने के बाद व्यक्ति को भविष्य में दोबारा कभी डेंगू न होने की 100% आजीवन इम्युनिटी मिल जाती है।',
      mr: 'एका व्यक्तीला एकदा डेंग्यू होऊन बरा झाल्यानंतर तिला भविष्यात पुन्हा कधीही डेंग्यू न होण्याची १००% कायमस्वरूपी प्रतिकारशक्ती मिळते.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Dengue virus has 4 distinct serotypes (DENV-1, DENV-2, DENV-3, DENV-4). Recovery from one serotype provides lifetime immunity ONLY against that specific strain. A secondary infection with a different serotype carries a much higher risk of life-threatening Severe Dengue (Dengue Hemorrhagic Fever) due to Antibody-Dependent Enhancement (ADE).',
      hi: 'डेंगू वायरस के 4 अलग-अलग प्रकार (Serotypes) होते हैं। एक बार डेंगू होने पर केवल उसी एक प्रकार से आजीवन सुरक्षा मिलती है। दूसरी बार किसी अन्य प्रकार का डेंगू होने पर रक्तस्रावी डेंगू (Dengue Hemorrhagic Fever) और प्लेटलेट्स तेजी से गिरने का खतरा बहुत बढ़ जाता है।',
      mr: 'डेंग्यूचे ४ वेगवेगळे प्रकार (DENV-१ ते ४) असतात. एकदा डेंग्यू झाल्यास केवळ त्याच प्रकाराविरुद्ध प्रतिकारशक्ती मिळते. दुसऱ्यांदा दुसऱ्या प्रकारचा डेंग्यू झाल्यास तो अधिक गंभीर आणि प्राणघातक (Dengue Hemorrhagic Fever) ठरण्याचा धोका जास्त असतो.'
    },
    source: 'National Vector Borne Disease Control Programme (NVBDCP) & WHO Guidelines on Dengue',
    hint: {
      en: 'How many different serotypes of the dengue virus circulate in the tropical environment?',
      hi: 'डेंगू वायरस के कितने अलग-अलग स्ट्रेन या सीरोटाइप मौजूद होते हैं?',
      mr: 'डेंग्यू विषाणूचे निसर्गात किती वेगवेगळे प्रकार आढळतात?'
    }
  },
  {
    id: 'myth_hard_brushing_teeth',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Brushing teeth forcefully with hard bristles right after eating acidic foods cleans teeth superiorly and stops tooth decay.',
      hi: 'खट्टा भोजन करने के तुरंत बाद कठोर ब्रिसल्स वाले ब्रश से जोर-जोर से दांत रगड़ने से दांत सबसे ज्यादा साफ होते हैं और सड़न रुकती है।',
      mr: 'आंबट पदार्थ खाल्ल्यानंतर लगेच कडक दातांच्या ब्रशने जोरात दात घासल्यास दात स्वच्छ होतात आणि किडणे थांबते.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Acidic foods temporarily soften tooth enamel. Scrubbing forcefully with hard bristles abrades away the protective outer enamel layer and causes gingival recession, exposing sensitive dentin. Dentists recommend soft-bristle brushes, gentle circular motions, and waiting at least 30 minutes after acidic meals before brushing.',
      hi: 'खट्टा भोजन दांतों की ऊपरी परत (एनेमेल) को अस्थायी रूप से नरम कर देता है। जोर से ब्रश करने से एनेमेल घिस जाता है और मसूड़े पीछे हटने लगते हैं जिससे दांतों में झनझनाहट (Sensitivity) शुरू हो जाती है। हमेशा मुलायम ब्रश का हल्का प्रयोग करें।',
      mr: 'आंबट पदार्थांमुळे दातांचे संरक्षक आवरण (Enamel) तात्पुरते मऊ होते. अशा वेळी कडक ब्रशने जोरात घासल्यास इनॅमलचा थर निघून जातो आणि दात संवेदनशील होतात. नेहमी मऊ ब्रशचा हलक्या हाताने वापर करावा.'
    },
    source: 'Indian Dental Association (IDA) Oral Health Clinical Recommendations',
    hint: {
      en: 'What happens to dental enamel when exposed to citrus acids? Does scrubbing it aggressively preserve or wear down the enamel?',
      hi: 'एसिड के संपर्क में आने पर दांतों की ऊपरी परत पर क्या असर होता है? क्या जोर से रगड़ने पर वह घिस नहीं जाएगी?',
      mr: 'आंबट घटकांमुळे दातांचे आवरण मऊ झाल्यावर ते जोरात घासल्याने झिजेल की सुरक्षित राहील?'
    }
  },
  {
    id: 'myth_detox_teas_cleanse_organs',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Commercial "detox teas" and cleansing juices are scientifically essential to flush out metabolic toxins from the human body.',
      hi: 'बाजार में मिलने वाली "डिटॉक्स टी" और क्लींजिंग जूस शरीर से जहरीले कचरे को बाहर निकालने के लिए चिकित्सकीय रूप से आवश्यक हैं।',
      mr: 'बाजारात मिळणारे "डिटॉक्स टी" आणि क्लिंजिंग ज्यूस शरीरातील विषारी घटक बाहेर टाकण्यासाठी वैद्यकीयदृष्ट्या अत्यंत आवश्यक आहेत.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'The human body has an exquisitely sophisticated 24/7 natural detoxification system comprising the liver, kidneys, lungs, gastrointestinal tract, and skin. Commercial detox products have zero peer-reviewed scientific proof of efficacy, often contain unregulated laxatives or diuretics, and can even strain hepatic and renal function.',
      hi: 'मानव शरीर में लिवर, किडनी और फेफड़े 24 घंटे प्राकृतिक रूप से शरीर को डिटॉक्स करते हैं। बाजार के डिटॉक्स उत्पादों का कोई वैज्ञानिक प्रमाण नहीं है। इनमें अक्सर पेट साफ करने वाली दवाएं (Laxatives) होती हैं जो शरीर में पानी की कमी कर सकती हैं।',
      mr: 'मानवी शरीरात यकृत (Liver), मूत्रपिंड (Kidney) आणि फुफ्फुसे सतत नैसर्गिकरीत्या शरीराची शुद्धी करत असतात. बाजारातील डिटॉक्स उत्पादनांना कोणताही शास्त्रीय आधार नसतो आणि त्यातील घटकांमुळे उलट शरीरातील पाण्याचे प्रमाण कमी होऊ शकते.'
    },
    source: 'AIIMS Department of Gastroenterology & British Dietetic Association (BDA) Detox Review',
    hint: {
      en: 'Which natural internal biological organs work 24/7 in your body to filter blood and neutralize metabolic byproducts?',
      hi: 'आपके शरीर के कौन से अंग खून को साफ करने और विषैले पदार्थों को निकालने के लिए 24 घंटे काम करते हैं?',
      mr: 'रक्त शुद्ध करण्यासाठी आणि विषारी घटक बाहेर काढण्यासाठी शरीरातील कोणते अवयव २४ तास काम करत असतात?'
    }
  },
  {
    id: 'myth_no_symptoms_no_screenings',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'If an adult feels completely energetic and has zero pain or symptoms, there is no need for routine preventive screenings (BP, glucose, lipid profile).',
      hi: 'यदि किसी वयस्क को कोई दर्द या लक्षण महसूस नहीं हो रहा है, तो उसे रूटीन जांच (बीपी, शुगर, कोलेस्ट्रॉल) कराने की बिल्कुल जरूरत नहीं है।',
      mr: 'एखाद्या प्रौढ व्यक्तीला कोणताही त्रास किंवा लक्षणे जाणवत नसतील, तर तिने नियमित आरोग्य तपासणी (BP, शुगर, कोलेस्ट्रॉल) करण्याची काहीही गरज नसते.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Hypertension, early Type 2 diabetes, and high cholesterol are known as "silent killers" because they develop silently over years with zero obvious physical warning signs until a catastrophic heart attack, stroke, or kidney damage occurs. Annual screening after age 30 detects risks early when they are reversible.',
      hi: 'हाई बीपी, शुरुआती डायबिटीज और कोलेस्ट्रॉल को "साइलेंट किलर" कहा जाता है क्योंकि इनके कोई शुरुआती लक्षण नहीं होते। बिना किसी दर्द के भी ये अंदर ही अंदर धमनियों और अंगों को नुकसान पहुंचाते हैं। 30 साल की उम्र के बाद साल में एक बार जांच जरूरी है।',
      mr: 'उच्च रक्तदाब, मधुमेह आणि कोलेस्ट्रॉल यांना "सायलेंट किलर" मानले जाते कारण त्यांची कोणतीही दृश्य लक्षणे नसतात. कोणतीही कळ न लागता ते आतून रक्तवाहिन्यांचे नुकसान करतात. वयाच्या ३० नंतर वर्षातून एकदा नियमित तपासणी करणे जीवनरक्षक ठरू शकते.'
    },
    source: 'Ministry of Health and Family Welfare (MoHFW) National NCD Screening Guidelines',
    hint: {
      en: 'Why do cardiologists call high blood pressure a "silent killer"? Can severe arterial damage occur without any outward pain?',
      hi: 'डॉक्टर हाई ब्लड प्रेशर को "साइलेंट किलर" क्यों कहते हैं? क्या बिना दर्द के भी धमनियों को नुकसान हो सकता है?',
      mr: 'डॉक्टर उच्च रक्तदाबाला "सायलेंट किलर" का म्हणतात? कोणताही त्रास न होताही रक्तवाहिन्यांचे नुकसान होऊ शकते का?'
    }
  },
  {
    id: 'myth_water_with_meals_ruins_digestion',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Taking small sips of water during a meal completely dilutes stomach digestive acid and stops all protein digestion.',
      hi: 'भोजन के दौरान पानी के छोटे-छोटे घूंट लेने से पेट का पाचक एसिड पूरी तरह पतला हो जाता है और भोजन का पचना रुक जाता है।',
      mr: 'जेवताना थोडे थोडे पाणी प्यायल्याने पोटातील पाचक ॲसिड पूर्णपणे पातळ होते आणि अन्नपचनाची क्रिया पूर्ण ठप्प होते.'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'depends',
    explanation: {
      en: 'Small sips of water during meals actually assist in softening dry food, easing chewing, and lubricating the esophageal bolus. The stomach produces gastric acid dynamically in response to meal volume and protein content, maintaining an acidic pH (1.5-3.5). However, guzzling huge volumes (several full glasses) right before eating can cause premature fullness.',
      hi: 'भोजन के साथ पानी के छोटे-छोटे घूंट भोजन को निगलने और पचाने में सहायक होते हैं। पेट का एसिड भोजन के अनुसार स्वाभाविक रूप से बनता रहता है और हल्के पानी से काम करना बंद नहीं करता। हालांकि, एक साथ कई गिलास ठंडा पानी पीने से बचना चाहिए।',
      mr: 'जेवताना पाण्याचे लहान घूट घेतल्याने घास गिळण्यास मदत होते. पोटातील पाचक रस अन्नाच्या प्रमाणानुसार तयार होत राहतात आणि थोडे पाणी प्यायल्याने पचनक्रिया थांबत नाही. मात्र एकदम खूप जास्त पाणी पिणे टाळावे.'
    },
    contextNotes: {
      en: 'Context: Moderate sips are fine and natural; avoid drinking entire bottles of iced beverages with meals if you suffer from severe GERD/acid reflux.',
      hi: 'संदर्भ: भोजन के दौरान थोड़े घूंट पीना सामान्य है। अत्यधिक ठंडा पानी एक साथ पीने से एसिडिटी की समस्या बढ़ सकती है।',
      mr: 'महत्त्वाचे: थोडे पाणी पिणे पूर्णपणे नैसर्गिक आहे. ॲसिडिटीचा त्रास असल्यास एकाच वेळी भरपूर पाणी पिणे टाळावे.'
    },
    source: 'National Institute of Nutrition (NIN) & Mayo Clinic Gastroenterology Guidance',
    hint: {
      en: 'Does drinking a sip of water extinguish internal enzymes, or does the stomach dynamically regulate its own acid secretion?',
      hi: 'क्या एक घूंट पानी से पेट के एंजाइम खत्म हो जाते हैं, या पेट आवश्यकतानुसार पाचक रस बनाता रहता है?',
      mr: 'थोड्या पाण्याने पोटातील पाचक रस नष्ट होतात की पोट गरजेनुसार ॲसिडची निर्मिती सुरू ठेवते?'
    }
  }
];
