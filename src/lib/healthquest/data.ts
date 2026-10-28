import { HealthQuestion, HealthyDayActivity } from './types';

export const HEALTH_MYTH_OPTIONS = [
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

export const HEALTHQUEST_QUESTIONS: HealthQuestion[] = [
  // ==========================================
  // MODE 1: BEAT THE HEALTH MYTH (6 Questions)
  // ==========================================
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
      hi: 'उंगलियों के जोड़ (चटकाना या फोड़ना) चटकाने की आदत से वृद्धावस्था में गठिया (Arthritis) और जोड़ों में स्थायी विकृति हो जाती है।',
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

  // ==========================================
  // MODE 2: HEALTH KNOWLEDGE QUIZ (6 Questions)
  // ==========================================
  {
    id: 'quiz_my_plate_greens',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'According to the ICMR-NIN "My Plate for the Day" guideline for Indians, what proportion of your daily food plate should ideally consist of vegetables, leafy greens, and fresh fruits?',
      hi: 'भारतीयों के लिए ICMR-NIN की "माई प्लेट फॉर द डे" मार्गदर्शिका के अनुसार, आपकी दैनिक थाली का कितना हिस्सा सब्जियों, साग और ताजे फलों से भरा होना चाहिए?',
      mr: 'भारतीयांसाठी ICMR-NIN च्या "माय प्लेट" मार्गदर्शक तत्त्वांनुसार, दररोजच्या जेवणातील किती भाग भाज्या, पालेभाज्या आणि ताज्या फळांनी भरलेला असावा?'
    },
    options: [
      { id: 'opt_1', text: { en: 'About 10% (a tiny side katori)', hi: 'लगभग 10% (केवल एक छोटी कटोरी)', mr: 'सुमारे १०% (फक्त एक लहान वाटी)' } },
      { id: 'opt_2', text: { en: 'About 25% (one quarter)', hi: 'लगभग 25% (एक चौथाई हिस्सा)', mr: 'सुमारे २५% (पाव भाग)' } },
      { id: 'opt_3', text: { en: 'About 50% (half of your total plate)', hi: 'लगभग 50% (पूरी थाली का आधा हिस्सा)', mr: 'सुमारे ५०% (संपूर्ण ताटाचा अर्धा भाग)' } },
      { id: 'opt_4', text: { en: 'About 80% (fruits and vegetables exclusively)', hi: 'लगभग 80% (केवल फल और सब्जियां)', mr: 'सुमारे ८०% (फक्त फळे आणि भाज्या)' } }
    ],
    correctOptionId: 'opt_3',
    explanation: {
      en: 'ICMR-NIN guidelines recommend that nearly half (50%) of the daily plate by weight should comprise fresh vegetables (at least 350-400g) and fruits (at least 100-150g) to ensure adequate dietary fiber, micronutrients, potassium, and antioxidants to combat non-communicable diseases.',
      hi: 'ICMR-NIN की सिफारिश है कि थाली का लगभग आधा (50%) हिस्सा सब्जियों (कम से कम 350-400 ग्राम) और फलों (100-150 ग्राम) से भरा होना चाहिए ताकि पर्याप्त फाइबर, पोटेशियम और एंटीऑक्सीडेंट मिल सकें।',
      mr: 'ICMR-NIN च्या शिफारशीनुसार थाळीचा सुमारे निम्मा (५०%) भाग विविध भाज्या (किमान ३५०-४०० ग्रॅम) आणि ताज्या फळांनी (१००-१५० ग्रॅम) भरलेला असावा, ज्यामुळे आवश्यक फायबर आणि खनिजे मिळतात.'
    },
    source: 'National Institute of Nutrition (NIN) India: "My Plate for the Day" Balanced Diet Charter',
    hint: {
      en: 'Think of the plate divided into two halves. Should raw and cooked greens occupy a minor corner or a dominant half?',
      hi: 'थाली को दो बराबर हिस्सों में बांटकर सोचें। क्या सब्जियां और सलाद एक कोने में होने चाहिए या पूरी थाली का आधा हिस्सा?',
      mr: 'ताटाचे दोन समान भाग करून विचार करा. भाज्या आणि सॅलड ताटाचा किती भाग व्यापायला हवेत?'
    }
  },
  {
    id: 'quiz_adult_sleep',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'What is the medically recommended duration of continuous nocturnal sleep for healthy adults (ages 18–60) to maintain cardiovascular and cognitive health?',
      hi: 'स्वस्थ वयस्कों (18-60 वर्ष) के लिए हृदय और मानसिक स्वास्थ्य को बनाए रखने के लिए रात में लगातार कितने घंटे की नींद चिकित्सीय रूप से अनुशंसित है?',
      mr: 'निरोगी प्रौढांसाठी (१८-६० वर्षे) हृदय आणि मेंदूचे आरोग्य चांगले राखण्यासाठी रात्री किती तासांची अखंड झोप वैद्यकीयदृष्ट्या आवश्यक मानली जाते?'
    },
    options: [
      { id: 'opt_1', text: { en: '4 to 5 hours', hi: '4 से 5 घंटे', mr: '४ ते ५ तास' } },
      { id: 'opt_2', text: { en: '7 to 8 hours', hi: '7 से 8 घंटे', mr: '७ ते ८ तास' } },
      { id: 'opt_3', text: { en: '10 to 12 hours', hi: '10 से 12 घंटे', mr: '१० ते १२ तास' } },
      { id: 'opt_4', text: { en: '2 to 3 hours with afternoon naps', hi: 'दोपहर में झपकी के साथ 2-3 घंटे', mr: 'दुपारी थोडी झोप घेऊन २-३ तास' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: 'Clinical sleep research indicates that 7 to 8 hours of quality sleep is essential for blood pressure regulation, cellular repair, memory consolidation, immune surveillance, and insulin sensitivity. Chronic sleep under 6 hours correlates with elevated risk of hypertension and obesity.',
      hi: 'चिकित्सीय अनुसंधानों के अनुसार 7 से 8 घंटे की अच्छी नींद रक्तचाप नियंत्रण, रोग प्रतिरोधक क्षमता, याददाश्त और मेटाबॉलिज्म के लिए अत्यंत आवश्यक है। 6 घंटे से कम सोने पर उच्च रक्तचाप और मोटापे का खतरा बढ़ जाता है।',
      mr: 'वैद्यकीय संशोधनानुसार दररोज ७ ते ८ तासांची शांत झोप रक्तदाब नियंत्रण, प्रतिकारशक्ती आणि मानसिक आरोग्यासाठी अत्यंत आवश्यक आहे. ६ तासांपेक्षा कमी झोपल्यास उच्च रक्तदाब आणि लठ्ठपणाचा धोका वाढतो.'
    },
    source: 'Indian Society for Sleep Research & American Academy of Sleep Medicine Guidelines',
    hint: {
      en: 'Most working adults aim for this number: roughly one-third of a 24-hour day.',
      hi: '24 घंटे के दिन का लगभग एक-तिहाई हिस्सा सोने में जाना चाहिए।',
      mr: '२४ तासांच्या दिवसाचा सुमारे एक तृतीयांश भाग झोपेसाठी आवश्यक असतो.'
    }
  },
  {
    id: 'quiz_handwashing_seconds',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'To effectively dislodge disease-causing microbes and viruses, for how many seconds should you scrub all hand surfaces with soap and water?',
      hi: 'रोग पैदा करने वाले कीटाणुओं और वायरस को हाथों से पूरी तरह हटाने के लिए साबुन और पानी से हाथों को कम से कम कितने सेकंड तक रगड़ना चाहिए?',
      mr: 'रोग पसरवणारे जंतू आणि विषाणू नष्ट करण्यासाठी हात साबण व पाण्याने किमान किती सेकंद चोळून धुतले पाहिजेत?'
    },
    options: [
      { id: 'opt_1', text: { en: '3 to 5 seconds (quick splash)', hi: '3 से 5 सेकंड (केवल पानी छिड़कना)', mr: '३ ते ५ सेकंद (केवळ पाणी मारणे)' } },
      { id: 'opt_2', text: { en: 'At least 20 seconds', hi: 'कम से कम 20 सेकंड', mr: 'किमान २० सेकंद' } },
      { id: 'opt_3', text: { en: 'Exactly 2 minutes', hi: 'पूरे 2 मिनट', mr: 'पूर्ण २ मिनिटे' } },
      { id: 'opt_4', text: { en: 'Soap is optional if water is hot', hi: 'यदि पानी गर्म हो तो साबुन की जरूरत नहीं', mr: 'पाणी गरम असल्यास सा Soap ची गरज नाही' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: 'Public health authorities (AIIMS, WHO, CDC) recommend scrubbing hands with soap for at least 20 seconds, covering palms, backs of hands, between fingers, and under fingernails. Soap molecules mechanically bind to microbial lipid membranes and wash them away.',
      hi: 'AIIMS और WHO के अनुसार कम से कम 20 सेकंड तक हथेलियों, उंगलियों के बीच और नाखूनों के नीचे साबुन से अच्छी तरह मलना चाहिए। साबुन कीटाणुओं की बाहरी झिल्ली को तोड़कर उन्हें पानी के साथ बहा देता है।',
      mr: 'AIIMS आणि WHO च्या मार्गदर्शक तत्त्वांनुसार किमान २० सेकंद तळहात, बोटांच्या फटी आणि नखे साबणाने स्वच्छ घासली पाहिजेत. साबणामुळे जंतू नष्ट होऊन पाण्यासोबत वाहून जातात.'
    },
    source: 'All India Institute of Medical Sciences (AIIMS) Infection Control & Hygiene Protocols',
    hint: {
      en: 'A popular mnemonic is singing the "Happy Birthday" song twice from beginning to end.',
      hi: 'एक लोकप्रिय नियम यह है कि "हैप्पी बर्थडे" गाना मन में दो बार गाने जितना समय लगना चाहिए।',
      mr: 'साधारणपणे "हॅपी बर्थडे" हे गाणे मनात दोन वेळा म्हणण्याइतका वेळ हातांना साबण लावणे आवश्यक असते.'
    }
  },
  {
    id: 'quiz_fasting_blood_glucose',
    mode: 'knowledge_quiz',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Before undergoing a Fasting Blood Glucose (Sugar) laboratory test, what preparation is clinically required?',
      hi: 'फास्टिंग ब्लड ग्लूकोज (खाली पेट शुगर) टेस्ट कराने से पहले मरीज के लिए कौन सी तैयारी चिकित्सीय रूप से आवश्यक है?',
      mr: 'फास्टिंग ब्लड ग्लुकोज (उपाशीपोटी साखरेची तपासणी) चाचणी करण्यापूर्वी रुग्णाने कोणती काळजी घेणे आवश्यक आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Fast for 8 to 12 hours overnight; only plain water is permitted', hi: 'रात भर 8 से 12 घंटे का उपवास रखें; केवल सादा पानी पीने की अनुमति है', mr: 'रात्रभर ८ ते १२ तास उपाशी राहावे; फक्त साधे पाणी पिण्याची परवानगी असते' } },
      { id: 'opt_2', text: { en: 'Eat a light sweet biscuit and milk 30 minutes before blood draw', hi: 'रक्त निकालने से 30 मिनट पहले एक मीठा बिस्कुट और दूध ले सकते हैं', mr: 'रक्त देण्यापूर्वी ३० मिनिटे आधी हलके गोड बिस्किट आणि दूध खाऊ शकता' } },
      { id: 'opt_3', text: { en: 'Fast for 24 full hours without drinking even water', hi: 'बिना पानी पिए पूरे 24 घंटे का कड़ा निर्जला उपवास रखें', mr: 'पाणीही न पिता सलग २४ तास कडक उपवास करावा' } },
      { id: 'opt_4', text: { en: 'Drink two cups of sweetened masala tea upon waking up', hi: 'सुबह उठते ही दो कप मीठी मसाला चाय पीकर जाएं', mr: 'सकाळी उठल्याबरोबर दोन कप गोड चहा प्यावा' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'A valid Fasting Blood Sugar test requires an overnight caloric fast of 8 to 12 hours. Plain water is encouraged to avoid hemoconcentration (dehydration causing artificially skewed values). Tea, coffee, snacks, or tobacco during the fast will falsely spike blood glucose.',
      hi: 'सटीक परिणाम के लिए 8 से 12 घंटे तक भोजन या कैलोरी से दूर रहना अनिवार्य है। सादा पानी पिया जा सकता है ताकि डिहाइड्रेशन न हो। उपवास के दौरान चाय, कॉफी, बिस्कुट या धूम्रपान करने से शुगर की जांच गलत आ सकती है।',
      mr: 'अचूक निदानासाठी रात्री ८ ते १२ तास काहीही न खाणे आवश्यक असते. साधे पाणी पिण्यास हरकत नसते. चहा, कॉफी, नाश्ता किंवा तंबाखूचे सेवन केल्यास रक्तातील साखरेचे प्रमाण चुकीचे दिसू शकते.'
    },
    source: 'Indian Council of Medical Research (ICMR) Guidelines for Management of Type 2 Diabetes',
    hint: {
      en: 'Does tea with sugar count as breaking a fast? Think about standard overnight fasting intervals.',
      hi: 'क्या चाय या कॉफी से उपवास टूटता है? रात के समय के सामान्य अंतराल पर विचार करें।',
      mr: 'चहा किंवा दुधामुळे उपाशीपोटीची स्थिती बदलते का? रात्रीच्या सामान्य अंतराचा विचार करा.'
    }
  },
  {
    id: 'quiz_weekly_exercise_target',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'To reduce risk of hypertension, diabetes, and heart disease, what is the minimum weekly moderate aerobic exercise target recommended by health authorities for adults?',
      hi: 'उच्च रक्तचाप, मधुमेह और हृदय रोग के जोखिम को कम करने के लिए वयस्कों के लिए स्वास्थ्य संगठनों द्वारा प्रति सप्ताह कम से कम कितने मिनट के मध्यम एरोबिक व्यायाम की सिफारिश की जाती है?',
      mr: 'उच्च रक्तदाब, मधुमेह आणि हृदयविकाराचा धोका टाळण्यासाठी प्रौढांसाठी दर आठवड्याला किमान किती मिनिटे मध्यम स्वरूपाचा व्यायाम करण्याची शिफारस केली जाते?'
    },
    options: [
      { id: 'opt_1', text: { en: '15 minutes once every two weeks', hi: 'दो सप्ताह में एक बार केवल 15 मिनट', mr: 'दोन आठवड्यांतून एकदा फक्त १५ मिनिटे' } },
      { id: 'opt_2', text: { en: 'At least 150 minutes per week (e.g., 30 mins, 5 days a week)', hi: 'प्रति सप्ताह कम से कम 150 मिनट (जैसे 30 मिनट, हफ्ते में 5 दिन)', mr: 'दर आठवड्याला किमान १५० मिनिटे (उदा. दिवसाला ३० मिनिटे, आठवड्यातून ५ दिवस)' } },
      { id: 'opt_3', text: { en: 'Minimum 5 hours of strenuous marathon running every day', hi: 'रोजाना कम से कम 5 घंटे का कठिन मैराथन दौड़ना', mr: 'दररोज किमान ५ तास धावण्याचा सराव करणे' } },
      { id: 'opt_4', text: { en: 'Exercise is only necessary after age 50', hi: 'व्यायाम केवल 50 वर्ष की आयु के बाद ही आवश्यक है', mr: 'व्यायाम फक्त वयाच्या पन्नाशीनंतरच गरजेचा असतो' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: 'World Health Organization (WHO) and ICMR physical activity guidelines advise at least 150 to 300 minutes of moderate-intensity aerobic activity (such as brisk walking, cycling, or swimming) per week, plus muscle-strengthening activities on 2 or more days.',
      hi: 'WHO और ICMR के अनुसार प्रति सप्ताह कम से कम 150 से 300 मिनट का मध्यम व्यायाम (जैसे तेज चाल, साइकिल चलाना या तैराकी) और सप्ताह में 2 दिन मांसपेशियों को मजबूत करने वाले व्यायाम करने चाहिए।',
      mr: 'जागतिक आरोग्य संघटना (WHO) आणि ICMR नुसार दर आठवड्याला किमान १५० ते ३०० मिनिटे मध्यम स्वरूपाचा व्यायाम (जसे की जलद चालणे, सायकल चालवणे) करणे आरोग्यासाठी आवश्यक आहे.'
    },
    source: 'WHO Guidelines on Physical Activity and Sedentary Behaviour & ICMR Guidelines',
    hint: {
      en: 'Think of 30 minutes of brisk walking spread across 5 working days.',
      hi: 'सप्ताह के 5 दिनों में रोजाना 30 मिनट की तेज चाल (Brisk Walk) के बारे में सोचें।',
      mr: 'आठवड्यातील ५ दिवस दररोज ३० मिनिटे जलद चालण्याचा विचार करा.'
    }
  },
  {
    id: 'quiz_ors_electrolytes',
    mode: 'knowledge_quiz',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'During acute watery diarrhea or vomiting in hot weather, what is the life-saving fluid replacement scientifically formulated to prevent dehydration?',
      hi: 'गर्म मौसम में अचानक उल्टी या दस्त होने पर डिहाइड्रेशन (शरीर में पानी की कमी) से जान बचाने के लिए कौन सा वैज्ञानिक रूप से तैयार घोल दिया जाना चाहिए?',
      mr: 'उष्ण हवामानात उलट्या किंवा जुलाब झाल्यास शरीरातील पाण्याचे प्रमाण टिकवून ठेवण्यासाठी वैज्ञानिकदृष्ट्या प्रमाणित केलेले जीवनरक्षक पेय कोणते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Carbonated soda or concentrated energy drinks', hi: 'कार्बोनेटेड कोल्ड ड्रिंक या एनर्जी ड्रिंक्स', mr: 'कार्बोनेटेड कोल्ड्रिंक्स किंवा एनर्जी ड्रिंक्स' } },
      { id: 'opt_2', text: { en: 'Oral Rehydration Salts (ORS) solution in clean drinking water', hi: 'साफ पीने के पानी में बना ओरल रिहाइड्रेशन सॉल्ट (ORS) का घोल', mr: 'स्वच्छ पिण्याच्या पाण्यात तयार केलेले ओआरएस (ORS) द्रावण' } },
      { id: 'opt_3', text: { en: 'Strong black coffee with no water', hi: 'बिना पानी के कड़क काली कॉफी', mr: 'पाण्याशिवाय कडक ब्लॅक कॉफी' } },
      { id: 'opt_4', text: { en: 'Completely stop drinking all liquids for 24 hours', hi: '24 घंटे तक पानी और सभी तरल पदार्थ पीना बंद कर दें', mr: '२४ तास कोणतेही द्रवपदार्थ पिणे पूर्णपणे बंद करणे' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: 'Standard low-osmolarity WHO-formula Oral Rehydration Salts (ORS) contain the exact sodium and glucose ratio required for the sodium-glucose cotransporter in the intestinal wall to pull water back into the bloodstream, preventing shock and kidney injury.',
      hi: 'विश्व स्वास्थ्य संगठन (WHO) प्रमाणित ओआरएस (ORS) में सोडियम और ग्लूकोज का सटीक अनुपात होता है जो आंतों द्वारा पानी को जल्दी अवशोषित करने में मदद करता है। यह निर्जलीकरण और गुर्दे की विफलता को रोकता है।',
      mr: 'WHO प्रमाणित ओआरएस (ORS) मध्ये सोडियम आणि ग्लुकोजचे अचूक प्रमाण असते, ज्यामुळे आतड्यांमध्ये पाणी त्वरित शोषले जाते आणि डिहायड्रेशनमुळे होणारे गंभीर धोके टळतात.'
    },
    source: 'Ministry of Health and Family Welfare (MoHFW) India & WHO Diarrhea Management Protocols',
    hint: {
      en: 'Look for the trusted three-letter packet available at every primary health centre across India.',
      hi: 'भारत के हर प्राथमिक स्वास्थ्य केंद्र पर मिलने वाले तीन अक्षरों वाले जीवन रक्षक पैकेट को याद करें।',
      mr: 'भारतातील प्रत्येक प्राथमिक आरोग्य केंद्रात मिळणाऱ्या तीन अक्षरी जीवनरक्षक पाकिटाचा विचार करा.'
    }
  },

  // ==========================================
  // MODE 3: FOOD LABEL DETECTIVE (3 Challenges)
  // ==========================================
  {
    id: 'food_chips_vs_makhana',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 35,
    question: {
      en: 'Compare the fictional nutrition labels for "Crunchy Potato Crisps" versus "Roasted Pudina Makhana (Fox Nuts)". Which product has substantially lower saturated fat and lower sodium per 100g?',
      hi: '"क्रंची पोटैटो चिप्स" और "रोस्टेड पुदीना मखाना" के काल्पनिक पोषण लेबल की तुलना करें। प्रति 100 ग्राम किस उत्पाद में सैचुरेटेड फैट और सोडियम काफी कम है?',
      mr: '"क्रंची पोटॅटो चिप्स" आणि "रोस्टेड पुदिना मखाना" यांच्या काल्पनिक पोषण मूल्यांची तुलना करा. १०० ग्रॅममागे कोणत्या पदार्थात सॅच्युरेटेड फॅट आणि सोडियमचे प्रमाण लक्षणीयरीत्या कमी आहे?'
    },
    foodComparison: {
      productA: {
        productName: {
          en: 'Crunchy Spiced Potato Crisps',
          hi: 'क्रंची स्पाइस्ड पोटैटो चिप्स',
          mr: 'क्रंची स्पाइस्ड बटाटा चिप्स'
        },
        productSubtitle: {
          en: 'Fictional Deep-Fried Snack (Pack size: 100g)',
          hi: 'काल्पनिक तला हुआ स्नैक (पैक: 100 ग्राम)',
          mr: 'काल्पनिक तळलेला स्नॅक्स (पॅक: १०० ग्रॅम)'
        },
        servingSize: '100g (Full pack)',
        servingsPerContainer: 1,
        caloriesPerServing: 540,
        totalFat: '34g',
        saturatedFat: '14.5g (High)',
        transFat: '0.4g',
        sodiumMg: 780,
        totalCarbs: '52g',
        addedSugarGrams: 3,
        protein: '6.2g',
        keyIngredients: {
          en: ['Potatoes (54%)', 'Palmolein Oil (32%)', 'Salt', 'Maltodextrin', 'Spices & Flavours'],
          hi: ['आलू (54%)', 'पामोलिन तेल (32%)', 'नमक', 'माल्टोडेक्सट्रिन', 'मसाले'],
          mr: ['बटाटे (५४%)', 'पामोलिन तेल (३२%)', 'मीठ', 'मसाले']
        },
        warningFlag: {
          en: 'High Saturated Fat & Sodium (Red Alert Level)',
          hi: 'उच्च सैचुरेटेड फैट एवं सोडियम (लाल चेतावनी स्तर)',
          mr: 'उच्च सॅच्युरेटेड फॅट आणि सोडियम (धोक्याची पातळी)'
        }
      },
      productB: {
        productName: {
          en: 'Slow-Roasted Pudina Makhana',
          hi: 'स्लो-रोस्टेड पुदीना मखाना (कमल गट्टा)',
          mr: 'स्लो-रोस्टेड पुदिना मखाना'
        },
        productSubtitle: {
          en: 'Fictional Roasted Whole Seed Snack (Pack size: 100g)',
          hi: 'काल्पनिक भुना हुआ साबुत बीज स्नैक (पैक: 100 ग्राम)',
          mr: 'काल्पनिक भाजलेला पौष्टिक स्नॅक (पॅक: १०० ग्रॅम)'
        },
        servingSize: '100g (Full pack)',
        servingsPerContainer: 1,
        caloriesPerServing: 360,
        totalFat: '3.8g',
        saturatedFat: '0.6g (Low)',
        transFat: '0.0g',
        sodiumMg: 210,
        totalCarbs: '74g',
        addedSugarGrams: 0,
        protein: '9.8g',
        keyIngredients: {
          en: ['Fox Nuts / Makhana (88%)', 'Cold-Pressed Olive Oil (5%)', 'Mint Herb Powder', 'Rock Salt (0.8%)'],
          hi: ['मखाना (88%)', 'ऑलिव ऑयल (5%)', 'पुदीना पाउडर', 'सेंधा नमक (0.8%)'],
          mr: ['मखाना (८८%)', 'ऑलिव्ह तेल (५%)', 'पुदिना पावडर', 'सेंधव मीठ']
        }
      },
      focusNutrient: {
        en: 'Saturated Fat & Sodium Content',
        hi: 'सैचुरेटेड फैट और सोडियम की मात्रा',
        mr: 'सॅच्युरेटेड फॅट आणि सोडियमचे प्रमाण'
      }
    },
    options: [
      { id: 'opt_chips', text: { en: 'Product A (Potato Crisps)', hi: 'उत्पाद A (पोटैटो चिप्स)', mr: 'उत्पाद A (बटाटा चिप्स)' } },
      { id: 'opt_makhana', text: { en: 'Product B (Roasted Makhana)', hi: 'उत्पाद B (रोस्टेड मखाना)', mr: 'उत्पाद B (रोस्टेड मखाना)' } },
      { id: 'opt_equal', text: { en: 'Both products have identical fat and sodium values', hi: 'दोनों उत्पादों में फैट और सोडियम बिल्कुल बराबर है', mr: 'दोन्ही उत्पादनांमध्ये चरबी आणि मीठ समान आहे' } },
      { id: 'opt_neither', text: { en: 'Neither product provides nutrition data', hi: 'किसी भी उत्पाद में पोषण की जानकारी नहीं है', mr: 'कोणत्याही उत्पादनात पोषण माहिती दिलेली नाही' } }
    ],
    correctOptionId: 'opt_makhana',
    explanation: {
      en: 'Product B (Roasted Makhana) has only 0.6g of saturated fat (versus 14.5g in the fried crisps) and 210mg of sodium (versus 780mg in the chips). Reading nutrition labels reveals how deep frying in palmolein drastically spikes saturated fats and calories.',
      hi: 'उत्पाद B (रोस्टेड मखाना) में केवल 0.6 ग्राम सैचुरेटेड फैट (चिप्स में 14.5 ग्राम की तुलना में) और 210 मिलीग्राम सोडियम (चिप्स में 780 मिलीग्राम की तुलना में) है। लेबल पढ़ने से पता चलता है कि पामोलिन तेल में तलने से फैट और कैलोरी कितनी बढ़ जाती है।',
      mr: 'उत्पाद B (मखाना) मध्ये केवळ ०.६ ग्रॅम सॅच्युरेटेड फॅट (चिप्समधील १४.५ ग्रॅमच्या तुलनेत) आणि २१० मिग्रॅ सोडियम (चिप्समधील ७८० मिग्रॅच्या तुलनेत) आहे. पोषण लेबल तपासल्यास तळलेल्या पदार्थांमधील घातक स्निग्धता स्पष्ट होते.'
    },
    source: 'Food Safety and Standards Authority of India (FSSAI) Labelling and Display Regulations, 2020',
    hint: {
      en: 'Look at the "Saturated Fat" row on both panels: 14.5g vs 0.6g.',
      hi: 'दोनों पैकेटों के "सैचुरेटेड फैट" की तुलना करें: 14.5 ग्राम बनाम 0.6 ग्राम।',
      mr: 'दोन्ही लेबल्सवरील "सॅच्युरेटेड फॅट" ची ओळ तपासा: १४.५ ग्रॅम विरूद्ध ०.६ ग्रॅम.'
    }
  },
  {
    id: 'food_mango_drink_sugars',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 35,
    question: {
      en: 'A fictional "Royal Mango Fruit Drink" bottle (200 ml) displays "Added Sugars: 26g per serving". Given that 1 standard level teaspoon of white sugar weighs roughly 4 grams, how many teaspoons of added sugar are contained in this single small beverage?',
      hi: 'एक काल्पनिक "रॉयल मैंगो ड्रिंक" की 200 मिली बोतल पर "ऐडेड शुगर: 26 ग्राम" लिखा है। यदि सफेद चीनी का एक चम्मच लगभग 4 ग्राम का होता है, तो इस एक छोटी बोतल में कितने चम्मच अतिरिक्त चीनी मौजूद है?',
      mr: 'एका काल्पनिक "रॉयल मँगो फ्रूट ड्रिंक" च्या २०० मिली बाटलीवर "Added Sugars: 26g" नमूद आहे. साखरेचा एक सामान्य चमचा सुमारे ४ ग्रॅमचा असतो, तर या एका छोट्या बाटलीत किती चमचे साखर भरलेली आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'About 1.5 teaspoons', hi: 'लगभग 1.5 चम्मच', mr: 'सुमारे १.५ चमचे' } },
      { id: 'opt_2', text: { en: 'About 3 teaspoons', hi: 'लगभग 3 चम्मच', mr: 'सुमारे ३ चमचे' } },
      { id: 'opt_3', text: { en: '6.5 teaspoons (More than WHO recommended daily limit!)', hi: '6.5 चम्मच (विश्व स्वास्थ्य संगठन की दैनिक सीमा से अधिक!)', mr: '६.५ चमचे (WHO च्या दैनंदिन मर्यादेपेक्षा जास्त!)' } },
      { id: 'opt_4', text: { en: 'Zero teaspoons (fruit sugar does not count)', hi: 'शून्य चम्मच (फलों की चीनी की गिनती नहीं होती)', mr: 'शून्य चमचे (फळांमधील साखर मोजली जात नाही)' } }
    ],
    correctOptionId: 'opt_3',
    explanation: {
      en: '26 grams divided by 4 grams per teaspoon equals 6.5 teaspoons of added refined sugar in a single 200ml bottle! The WHO recommends limiting free/added sugars to less than 25 grams (about 6 teaspoons) per day for an entire adult diet. Liquid sugar spikes blood glucose rapidly.',
      hi: '26 ग्राम को 4 ग्राम प्रति चम्मच से भाग देने पर 6.5 चम्मच चीनी निकलती है! WHO एक वयस्क के लिए पूरे दिन में 25 ग्राम (लगभग 6 चम्मच) से कम अतिरिक्त चीनी की सलाह देता है। तरल चीनी पीने से ब्लड शुगर बहुत तेजी से बढ़ता है।',
      mr: '२६ ग्रॅम भागिले ४ ग्रॅम प्रति चमचा = एकाच बाटलीत ६.५ चमचे साखर! WHO नुसार प्रौढ व्यक्तीने संपूर्ण दिवसात २५ ग्रॅमपेक्षा (सुमारे ६ चमचे) कमी साखर खाल्ली पाहिजे. अशा पेयांमुळे रक्तातील साखर वेगाने वाढते.'
    },
    source: 'WHO Guideline: Sugars Intake for Adults and Children & FSSAI Guidelines',
    hint: {
      en: 'Calculate: 26 divided by 4 = ?',
      hi: 'हिसाब लगाएं: 26 भाग 4 = ?',
      mr: 'हिशोब करा: २६ भागिले ४ = ?'
    }
  },
  {
    id: 'food_ingredient_order_rule',
    mode: 'food_detective',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Under Indian food labelling regulations (FSSAI), what does the order of ingredients listed on the back of any packaged food package signify?',
      hi: 'भारतीय खाद्य सुरक्षा मानक (FSSAI) के अनुसार, किसी भी पैकेट के पीछे सामग्री (Ingredients) की सूची किस क्रम में लिखी जाती है?',
      mr: 'भारतीय अन्न सुरक्षा प्राधिकरणाच्या (FSSAI) नियमांनुसार, पॅकबंद अन्नावरील घटकांची (Ingredients) यादी कोणत्या क्रमाने लिहिलेली असते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Alphabetical order from A to Z', hi: 'वर्णमाला के अनुसार (A से Z तक)', mr: 'अकारविल्हेनुसार (A ते Z)' } },
      { id: 'opt_2', text: { en: 'Descending order by weight (the largest ingredient is listed first)', hi: 'वजन के घटते क्रम में (सबसे अधिक मात्रा वाली सामग्री सबसे पहले)', mr: 'वजनाच्या उतरत्या क्रमाने (सर्वात जास्त प्रमाणातील घटक सर्वात प्रथम)' } },
      { id: 'opt_3', text: { en: 'Random order chosen by the manufacturer', hi: 'निर्माता की मर्जी से किसी भी क्रम में', mr: 'कंपनीच्या मर्जीनुसार कोणत्याही क्रमाने' } },
      { id: 'opt_4', text: { en: 'In order of healthiness (healthiest ingredient first)', hi: 'स्वास्थ्य लाभ के आधार पर (सबसे पौष्टिक पहले)', mr: 'पौष्टिकतेनुसार (सर्वात आरोग्यदायी घटक प्रथम)' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: 'By legal mandate, ingredients must be listed in descending order of weight at the time of manufacture. Therefore, if "Sugar" or "Refined Wheat Flour (Maida)" is the first or second item on a "Health Biscuit" or "Oats Cookie", that ingredient forms the vast bulk of what you are eating.',
      hi: 'कानूनी रूप से, सामग्रियों को उनके वजन के घटते क्रम में सूचीबद्ध किया जाना अनिवार्य है। इसका मतलब है कि यदि किसी "हेल्थ बिस्किट" में पहला या दूसरा नाम "मैदा" या "चीनी" है, तो उस बिस्किट का मुख्य हिस्सा वही है।',
      mr: 'नियमांनुसार सर्व घटक त्यांच्या वजनाच्या उतरत्या क्रमाने लिहिणे बंधनकारक आहे. त्यामुळे एखाद्या "आरोग्यदायी बिस्किटावर" पहिले किंवा दुसरे नाव "मैदा" किंवा "साखर" असेल, तर त्या पदार्थात त्यांचाच सर्वाधिक भरणा असतो.'
    },
    source: 'FSSAI Food Safety and Standards (Labelling and Display) Regulations, Section 5(1)',
    hint: {
      en: 'If water is the very first ingredient in a fruit juice, does that mean there is more water than fruit pulp?',
      hi: 'यदि किसी जूस में पहली सामग्री "पानी" लिखी है, तो क्या इसका मतलब है कि उसमें फल से ज्यादा पानी है?',
      mr: 'ज्यूसच्या घटकांमध्ये पहिले नाव "पाणी" असेल, तर फळापेक्षा पाण्याचे प्रमाण जास्त असते का?'
    }
  },

  // ==========================================
  // MODE 4: EMERGENCY ACTION QUEST (4 Scenarios)
  // ==========================================
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
      { id: 'opt_cough_violently', text: { en: 'Tell him to cough violently in rapid succession based on an unverified internet rumor', hi: 'इंटरनेट की अफवाह के आधार पर उन्हें जोर-जोर से खांसने को कहें', mr: 'इंटरनेटवरील अफवेच्या आधारे त्यांना जोरात खोकण्यास सांगावे' } }
    ],
    correctOptionId: 'opt_112_rest',
    explanation: {
      en: 'These symptoms point to a potential acute coronary syndrome (heart attack). Every minute of delayed reperfusion leads to heart muscle necrosis ("Time is Muscle"). Call 112/108 immediately. Keep the patient in a comfortable seated "W" position to reduce cardiac workload. Internet rumors like "cough CPR" are medically discredited and dangerous.',
      hi: 'ये लक्षण दिल के दौरे (हार्ट अटैक) की ओर इशारा करते हैं। समय की बर्बादी हृदय की मांसपेशियों को स्थायी नुकसान पहुंचाती है। तुरंत 112/108 पर कॉल करें। रोगी को आराम से बैठाएं, तनाव कम करें। "खांसने से हार्ट अटैक रुकता है" जैसी सोशल मीडिया अफवाहें अत्यंत खतरनाक और अप्रमाणित हैं।',
      mr: 'ही लक्षणे हृदयविकाराच्या झटक्याची (Heart Attack) असू शकतात. त्वरित ११२/१०८ वर संपर्क साधा. रुग्णाला शांतपणे बसवून ठेवा जेणेकरून हृदयावरील ताण कमी होईल. जोरात खोकल्याने हार्ट अटॅक थांबतो ही निव्वळ अफवा असून ती अत्यंत घातक ठरू शकते.'
    },
    source: 'Cardiological Society of India (CSI) STEMI Guidelines & AIIMS Cardiology',
    hint: {
      en: 'Dial 112/108 immediately. Avoid any exertion or walking.',
      hi: 'तुरंत 112/108 पर कॉल करें। रोगी को चलने या मेहनत करने से पूरी तरह रोकें।',
      mr: 'ताबडतोब ११२/१०८ डायल करा. रुग्णाला चालणे किंवा कोणताही ताण टाळण्यास सांगा.'
    }
  },
  {
    id: 'emg_scalding_burn_forearm',
    mode: 'emergency_quest',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'While cooking in the kitchen, boiling hot oil or tea splashes across someone\'s forearm, causing red, painful, blistering skin. What is the evidence-based first-aid intervention?',
      hi: 'रसोई में खाना बनाते समय उबलता हुआ गर्म तेल या चाय किसी के हाथ पर गिर जाती है, जिससे त्वचा लाल, दर्दनाक और छाले पड़ने लगती है। साक्ष्य-आधारित प्राथमिक उपचार क्या है?',
      mr: 'स्वयंपाकघरात गरम तेल किंवा चहा हातावर सांडल्यामुळे त्वचा लाल होऊन तीव्र वेदना आणि फोड आले आहेत. पुराव्यावर आधारित योग्य प्रथमोपचार कोणता?'
    },
    emergencyScenario: {
      scenarioTitle: {
        en: 'Second-Degree Thermal Burn on Upper Limb',
        hi: 'हाथ पर गर्म तरल से जलने का मामला (Thermal Burn)',
        mr: 'गरम द्रवामुळे हात भाजल्याची घटना'
      },
      victimProfile: {
        en: 'Adult with partial-thickness thermal scalding across forearm.',
        hi: 'वयस्क व्यक्ति, हाथ पर गर्म तेल से जली हुई त्वचा।',
        mr: 'प्रौढ व्यक्ती, हातावर चटका बसून भाजलेली त्वचा.'
      },
      symptomsObserved: {
        en: ['Redness, severe burning pain', 'Intact or bursting blisters', 'Localized swelling'],
        hi: ['लालिमा और तीव्र जलन', 'फफोले (छाले)', 'सूजन'],
        mr: ['लाली आणि तीव्र जळजळ', 'फोड (ब्लिस्टर्स)', 'सूज']
      },
      urgencyLevel: 'first_aid_then_doctor'
    },
    options: [
      { id: 'opt_toothpaste', text: { en: 'Coat the burn heavily with white toothpaste, butter, and raw egg yolk', hi: 'जली हुई त्वचा पर सफेद टूथपेस्ट, मक्खन और कच्चा अंडा पोत दें', mr: 'भाजलेल्या भागावर टूथपेस्ट, लोणी किंवा कच्चे अंडे लावावे' } },
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

  // ==========================================
  // MODE 5: BUILD YOUR HEALTHY DAY (12 Activity Cards)
  // ==========================================
  // Morning Activities
  {
    id: 'act_morning_walk',
    mode: 'healthy_day',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Morning Routine: 30-Minute Outdoor Brisk Walk & Gentle Yoga in Morning Sunlight',
      hi: 'सुबह की दिनचर्या: सुबह की धूप में 30 मिनट की तेज चाल (Brisk Walk) और हल्का योगासन',
      mr: 'सकाळची दिनचर्या: सकाळच्या कोवळ्या उन्हात ३० मिनिटे जलद चालणे आणि हलके योगासने'
    },
    options: [
      { id: 'opt_add', text: { en: 'Add to My Day', hi: 'मेरी दिनचर्या में जोड़ें', mr: 'माझ्या दिनचर्येत जोडा' } }
    ],
    correctOptionId: 'opt_add',
    explanation: {
      en: 'Morning sunlight exposure sets circadian melatonin rhythms, stimulates Vitamin D synthesis, and brisk walking boosts cardiovascular circulation for the entire day.',
      hi: 'सुबह की धूप सर्कैडियन रिदम को सही रखती है, विटामिन D बनाती है और 30 मिनट की सैर पूरे दिन ऊर्जावान रखती है।',
      mr: 'सकाळचे कोवळे ऊन शरीराची जैविक घड्याळ (Circadian Rhythm) संतुलित ठेवते, व्हिटॅमिन D बनवते आणि चालण्याने दिवसभर ताजेतवाने वाटते.'
    },
    source: 'ICMR Physical Activity Guidelines',
    hint: { en: 'Consistent morning movement sets metabolic tone.', hi: 'सुबह की हलचल दिनभर ताजगी देती है।', mr: 'सकाळचा व्यायाम दिवसभर ऊर्जा देतो.' }
  }
];

export const HEALTHY_DAY_ACTIVITIES: HealthyDayActivity[] = [
  // MORNING
  {
    id: 'm_walk_sunlight',
    category: 'movement',
    timeSlot: 'morning',
    title: {
      en: '30-min Brisk Walk & Morning Sunlight',
      hi: '30 मिनट तेज चाल और सुबह की धूप',
      mr: '३० मिनिटे जलद चालणे आणि सकाळचे कोवळे ऊन'
    },
    description: {
      en: 'Stimulates Vitamin D, calibrates your biological clock, and energizes heart & lungs.',
      hi: 'विटामिन D बनाता है, जैविक घड़ी को संतुलित करता है और फेफड़ों को ऊर्जा देता है।',
      mr: 'व्हिटॅमिन D मिळते, जैविक घड्याळ सुधारते आणि हृदयाचे आरोग्य चांगले राहते.'
    },
    healthScoreDelta: 25,
    isOptimal: true,
    educationalTip: {
      en: 'Morning light suppresses daytime melatonin and primes your body for deep night sleep.',
      hi: 'सुबह की रोशनी मेलाटोनिन को नियंत्रित करती है जिससे रात में गहरी नींद आती है।',
      mr: 'सकाळच्या उन्हामुळे रात्री शांत आणि गाढ झोप लागण्यास मदत होते.'
    }
  },
  {
    id: 'm_balanced_breakfast',
    category: 'nutrition',
    timeSlot: 'morning',
    title: {
      en: 'Protein-Rich Breakfast (Sprouts / Eggs / Moong Chilla & Nuts)',
      hi: 'प्रोटीन युक्त नाश्ता (अंकुरित अनाज / बेसन-मूंग चीला / अंडे व बादाम)',
      mr: 'प्रथिनयुक्त नाश्ता (मोड आलेली कडधान्ये / मूग धिरडे / अंडी व सुकामेवा)'
    },
    description: {
      en: 'Steady glucose release without sudden spikes, keeping you full until lunch.',
      hi: 'रक्त में शुगर को स्थिर रखता है और दोपहर तक भूख को नियंत्रित करता है।',
      mr: 'रक्तातील साखर नियंत्रित ठेवते आणि दुपारपर्यंत पोट भरलेले राहते.'
    },
    healthScoreDelta: 20,
    isOptimal: true,
    educationalTip: {
      en: 'Combining complex carbs with protein prevents mid-morning energy crashes.',
      hi: 'जटिल कार्ब्स और प्रोटीन का मेल सुबह की थकान को रोकता है।',
      mr: 'कार्बोहायड्रेट्स आणि प्रथिनांचे संतुलन दुपारपूर्वी येणारा थकवा टाळते.'
    }
  },
  {
    id: 'm_skip_breakfast_chai',
    category: 'nutrition',
    timeSlot: 'morning',
    title: {
      en: 'Skip Breakfast + 3 Cups of Sugary Tea on Empty Stomach',
      hi: 'नाश्ता छोड़ना + खाली पेट 3 कप मीठी चाय पीना',
      mr: 'नाश्ता टाळणे + रिकाम्या पोटी ३ कप गोड चहा पिणे'
    },
    description: {
      en: 'Triggers acid reflux, sudden insulin surges, and morning brain fog.',
      hi: 'एसिडिटी, अचानक ब्लड शुगर बढ़ना और ध्यान केंद्रित करने में परेशानी पैदा करता है।',
      mr: 'पित्त (Acidity) वाढवते, रक्तातील साखरेचे संतुलन बिघडवते आणि थकवा आणते.'
    },
    healthScoreDelta: -20,
    isOptimal: false,
    educationalTip: {
      en: 'Tea on an empty stomach irritates gastric mucosa and does not provide sustainable fuel.',
      hi: 'खाली पेट चाय पीने से पेट की अंदरूनी परत में जलन हो सकती है।',
      mr: 'उपाशीपोटी चहा प्यायल्याने पोटातील अस्तर खराब होऊन पित्ताचा त्रास होतो.'
    }
  },

  // AFTERNOON
  {
    id: 'a_balanced_thali',
    category: 'nutrition',
    timeSlot: 'afternoon',
    title: {
      en: 'Balanced Indian Thali (Dal, Seasonal Sabzi, Roti/Rice, Salad & Buttermilk)',
      hi: 'संतुलित भारतीय थाली (दाल, मौसमी सब्जी, रोटी/चावल, भरपूर सलाद और छाछ)',
      mr: 'संतुलित भारतीय जेवण (वरण/डाळ, भाजी, चपाती/भात, सॅलड आणि ताक)'
    },
    description: {
      en: 'Complete protein blend, high dietary fiber, hydration, and natural probiotics.',
      hi: 'पूर्ण प्रोटीन, पर्याप्त फाइबर, पानी और प्राकृतिक प्रोबायोटिक्स (छाछ)।',
      mr: 'उत्तम प्रथिने, भरपूर फायबर आणि ताकामुळे नैसर्गिक प्रोबायोटिक्स मिळतात.'
    },
    healthScoreDelta: 25,
    isOptimal: true,
    educationalTip: {
      en: 'Eating cucumber, tomato, or carrot salad before carbs blunts post-meal blood sugar spikes.',
      hi: 'भोजन से पहले सलाद खाने से भोजन के बाद अचानक ब्लड शुगर नहीं बढ़ती।',
      mr: 'जेवणापूर्वी सॅलड खाल्ल्याने जेवणानंतर रक्तातील साखर वेगाने वाढत नाही.'
    }
  },
  {
    id: 'a_post_lunch_stroll',
    category: 'movement',
    timeSlot: 'afternoon',
    title: {
      en: '10-minute Gentle Post-Meal Stroll (Shatapawali)',
      hi: 'भोजन के बाद 10 मिनट की हल्की सैर (शतपावली)',
      mr: 'जेवणानंतर १० मिनिटांची हलकी शतपावली'
    },
    description: {
      en: 'Ancient Indian tradition scientifically proven to assist gastric motility and lower glucose.',
      hi: 'पारंपरिक शतपावली जो पाचन सुधारती है और भोजन के बाद शुगर को नियंत्रित करती है।',
      mr: 'प्राचीन शतपावलीची परंपरा पचन सुधारते आणि जेवणानंतरची साखर नियंत्रणात ठेवते.'
    },
    healthScoreDelta: 15,
    isOptimal: true,
    educationalTip: {
      en: 'Even 500 slow steps after meals helps muscle GLUT4 transporters clear circulating glucose.',
      hi: 'भोजन के बाद केवल 500 कदम चलने से मांसपेशियां भोजन की ग्लूकोज का बेहतर उपयोग करती हैं।',
      mr: 'जेवणानंतर थोडे चालल्याने स्नायू रक्तातील ग्लुकोज शोषून घेण्यास मदत करतात.'
    }
  },
  {
    id: 'a_fast_food_soda',
    category: 'nutrition',
    timeSlot: 'afternoon',
    title: {
      en: 'Heavy Deep-Fried Samosas / Burgers + Sweetened Fizzy Soda',
      hi: 'भारी तले हुए समोसे / बर्गर + बड़ी मीठी कोल्ड ड्रिंक',
      mr: 'तळलेले समोसे / फास्ट फूड + भरपूर गोड कोल्ड्रिंक'
    },
    description: {
      en: 'Loaded with trans-fats and high-fructose syrup, triggering post-lunch lethargy.',
      hi: 'हानिकारक ट्रांस-फैट और अत्यधिक चीनी से भरा, जो दोपहर में सुस्ती पैदा करता है।',
      mr: 'हानिकारक स्निग्धता आणि अती साखरेमुळे दुपारी प्रचंड आळस आणि पचनाचे त्रास होतात.'
    },
    healthScoreDelta: -25,
    isOptimal: false,
    educationalTip: {
      en: 'Deep-fried foods take 6-8 hours to digest, shunting blood to the gut and impairing work focus.',
      hi: 'तले हुए भोजन को पचने में 6-8 घंटे लगते हैं, जिससे दोपहर में भारी थकान महसूस होती है।',
      mr: 'तळलेले अन्न पचायला ६-८ तास लागतात, ज्यामुळे मेंदूला रक्तपुरवठा कमी होऊन कामात लक्ष लागत नाही.'
    }
  },

  // EVENING
  {
    id: 'e_sports_movement',
    category: 'movement',
    timeSlot: 'evening',
    title: {
      en: '45-min Badminton / Cycling / Gym or Active Outdoor Play',
      hi: '45 मिनट बैडमिंटन / साइकिलिंग / जिम या आउटडोर खेल',
      mr: '४५ मिनिटे बॅडमिंटन / सायकलिंग / जिम किंवा कोणताही मैदानी खेळ'
    },
    description: {
      en: 'Cardiovascular conditioning, bone density maintenance, and psychological stress relief.',
      hi: 'हृदय की क्षमता बढ़ाना, हड्डियों को मजबूत करना और दिनभर के तनाव से मुक्ति।',
      mr: 'हृदयाची कार्यक्षमता वाढवणे, हाडे मजबूत करणे आणि दिवसभराचा मानसिक ताण कमी करणे.'
    },
    healthScoreDelta: 25,
    isOptimal: true,
    educationalTip: {
      en: 'Evening exercise helps dissipate cortisol (stress hormone) built up during workday sedentary hours.',
      hi: 'शाम का व्यायाम दिनभर के तनाव हार्मोन (कॉर्टिसोल) को कम करने में मदद करता है।',
      mr: 'संध्याकाळच्या व्यायामामुळे शरीरातील तणावाचे हार्मोन्स (Cortisol) कमी होतात.'
    }
  },
  {
    id: 'e_continuous_chair_sitting',
    category: 'movement',
    timeSlot: 'evening',
    title: {
      en: 'Continuous 4-Hour Screen Sitting without Standing Up',
      hi: 'बिना एक बार भी उठे लगातार 4 घंटे कुर्सी पर स्क्रीन देखना',
      mr: 'एकदाही न उठता सलग ४ तास खुर्चीत बसून स्क्रीन पाहणे'
    },
    description: {
      en: 'Slows venous blood return in legs, tightens hip flexors, and stalls fat burning enzymes.',
      hi: 'पैरों में रक्त संचार धीमा करता है, पीठ में अकड़न लाता है और मेटाबॉलिज्म धीमा करता है।',
      mr: 'पायांमधील रक्तप्रवाह मंदावतो, कंबरदुखी वाढते आणि चरबी जळण्याची प्रक्रिया मंदावते.'
    },
    healthScoreDelta: -20,
    isOptimal: false,
    educationalTip: {
      en: 'Stand up and stretch for 60 seconds every 45 minutes to reactivate lipoprotein lipase enzymes.',
      hi: 'हर 45 मिनट में केवल 1 मिनट खड़े होकर खिंचाव करने से मेटाबॉलिज्म सक्रिय रहता है।',
      mr: 'दर ४५ मिनिटांनी फक्त १ मिनिट उभे राहून अंग ताणल्यास रक्ताभिसरण सुरळीत राहते.'
    }
  },
  {
    id: 'e_mindful_hydration',
    category: 'hydration',
    timeSlot: 'evening',
    title: {
      en: 'Hydration Refresh: Coconut Water / Lemon Mint Water / Plain Water',
      hi: 'शाम का पेय: नारियल पानी / नींबू-पुदीना पानी / सादा पानी',
      mr: 'संध्याकाळचे पेय: नारळ पाणी / लिंबू-पुदिना पाणी / साधे पाणी'
    },
    description: {
      en: 'Replenishes electrolytes naturally without artificial additives or excessive calories.',
      hi: 'बिना किसी कृत्रिम रंग या अतिरिक्त कैलोरी के प्राकृतिक रूप से इलेक्ट्रोलाइट्स की पूर्ति।',
      mr: 'कोणत्याही रासायनिक घटकांशिवाय नैसर्गिकरीत्या शरीराला क्षार आणि पाणी मिळणे.'
    },
    healthScoreDelta: 15,
    isOptimal: true,
    educationalTip: {
      en: 'Hydrating before dinner prevents mistaking thirst signals for false evening hunger pangs.',
      hi: 'रात के भोजन से पहले पानी पीने से प्यास को भूख समझने की गलती नहीं होती।',
      mr: 'संध्याकाळी पुरेसे पाणी प्यायल्याने अवेळी लागणारी खोटी भूक टाळता येते.'
    }
  },

  // NIGHT
  {
    id: 'n_early_light_dinner',
    category: 'nutrition',
    timeSlot: 'night',
    title: {
      en: 'Light, Early Dinner 2.5 Hours before Sleep (Khichdi / Soup & Veggies)',
      hi: 'सोने से 2.5 घंटे पहले हल्का और समय पर भोजन (मूंग दाल खिचड़ी / सूप व सब्जियां)',
      mr: 'झोपण्यापूर्वी अडीच तास आधी हलके जेवण (मुगाची मऊ खिचडी / सूप आणि भाज्या)'
    },
    description: {
      en: 'Allows stomach to empty before horizontal rest, eliminating nocturnal acid reflux.',
      hi: 'सोने से पहले भोजन पचने का समय मिलता है, जिससे रात में सीने में जलन नहीं होती।',
      mr: 'झोपण्यापूर्वी अन्न पचायला वेळ मिळतो, ज्यामुळे छातीत जळजळ (Reflux) होत नाही.'
    },
    healthScoreDelta: 20,
    isOptimal: true,
    educationalTip: {
      en: 'An early light meal prevents elevated nocturnal core body temperature, ensuring deep REM sleep.',
      hi: 'हल्का भोजन रात में शरीर के तापमान को सामान्य रखता है, जिससे गहरी नींद आती है।',
      mr: 'हलके जेवण शरीराचे तापमान संतुलित ठेवते आणि गाढ शांत झोप लागण्यास मदत करते.'
    }
  },
  {
    id: 'n_screen_free_wind_down',
    category: 'mindfulness',
    timeSlot: 'night',
    title: {
      en: 'Screen-Free Wind-Down: 45 Minutes of Book Reading / Soft Music / Breathing',
      hi: 'स्क्रीन-मुक्त आराम: सोने से 45 मिनट पहले किताब पढ़ना / शांत संगीत / गहरी सांसें',
      mr: 'स्क्रीनपासून मुक्ती: झोपण्यापूर्वी ४५ मिनिटे पुस्तक वाचन / शांत संगीत / प्राणायाम'
    },
    description: {
      en: 'Protects melatonin secretion from blue light suppression, inducing rapid sleep onset.',
      hi: 'मोबाइल की नीली रोशनी से बचाता है, जिससे प्राकृतिक नींद का हार्मोन (मेलाटोनिन) बढ़ता है।',
      mr: 'मोबाईलच्या निळ्या प्रकाशापासून संरक्षण होते, ज्यामुळे नैसर्गिक झोपेचे हार्मोन्स वाढतात.'
    },
    healthScoreDelta: 20,
    isOptimal: true,
    educationalTip: {
      en: 'Blue spectrum light from smartphones tricks the brain into believing it is noon, delaying sleep.',
      hi: 'फोन की नीली रोशनी दिमाग को भ्रमित करती है कि अभी भी दिन है, जिससे नींद आने में देर होती है।',
      mr: 'मोबाईलचा निळा प्रकाश मेंदूला अजूनही दिवस असल्याचा खोटा संदेश देतो, ज्यामुळे झोप लागत नाही.'
    }
  },
  {
    id: 'n_midnight_binge_phone',
    category: 'sleep',
    timeSlot: 'night',
    title: {
      en: 'Late-Night Reel Scrolling in Dark Bed until 2:00 AM',
      hi: 'अंधेरे कमरे में बिस्तर पर लेटकर रात 2:00 बजे तक मोबाइल पर रील्स देखना',
      mr: 'अंधाऱ्या खोलीत अंथरुणावर झोपून रात्री २:०० वाजेपर्यंत मोबाईलवर रील्स पाहणे'
    },
    description: {
      en: 'Severe circadian disruption, eye strain, dopamine exhaustion, and morning grogginess.',
      hi: 'नींद के चक्र का गंभीर नुकसान, आंखों पर अत्यधिक तनाव और सुबह उठने पर भारी सिरदर्द व थकान।',
      mr: 'झोपेच्या चक्राचा पूर्ण विचका, डोळ्यांवर प्रचंड ताण आणि सकाळी उठल्यावर तीव्र थकवा.'
    },
    healthScoreDelta: -30,
    isOptimal: false,
    educationalTip: {
      en: 'Dopamine spikes from endless scrolling keep the sympathetic nervous system in hyper-alert flight mode.',
      hi: 'लगातार वीडियो देखने से दिमाग उत्तेजित रहता है और गहरी नींद के चरण में नहीं जा पाता।',
      mr: 'सतत व्हिडिओ पाहिल्यामुळे मेंदू उत्तेजित राहतो आणि शांत झोपेच्या अवस्थेत जाऊ शकत नाही.'
    }
  }
];
