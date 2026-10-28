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
      hi: 'हालात पर निर्भर (Depends)',
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
      en: 'Does every person need to drink exactly 8 glasses of water every day, no matter what?',
      hi: 'क्या हर इंसान को मौसम या काम की परवाह किए बिना रोजाना ठीक 8 गिलास पानी पीना ही चाहिए?',
      mr: 'हवामान किंवा काम विचारात न घेता प्रत्येकाने दररोज नेमके ८ ग्लास पाणी प्यायलाच हवे का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'depends',
    explanation: {
      en: 'Your body needs more water when it is hot outside or when you work hard and sweat. You also get fluids from dal, juicy fruits, and buttermilk. Checking that your urine is pale yellow is the best sign that you are drinking enough.',
      hi: 'गर्मियों में या मेहनत करने पर शरीर को ज्यादा पानी चाहिए होता है। दाल, सूप, फल और छाछ से भी पानी मिलता है। पेशाब का हल्का पीला रंग बताता है कि आप सही मात्रा में पानी पी रहे हैं।',
      mr: 'उन्हाळ्यात किंवा कष्टाचे काम करताना जास्त पाण्याची गरज असते. डाळ, सूप, फळे आणि ताकातूनही शरीराला पाणी मिळते. लघवीचा फिकट पिवळा रंग पुरेसे पाणी असल्याचे दर्शवतो.'
    },
    contextNotes: {
      en: 'Tip: You do not need to count rigid cups. In hot Indian summers, drink whenever you feel thirsty and keep your urine pale straw-colored.',
      hi: 'सुझाव: कप गिनने के बजाय प्यास लगने पर पानी पिएं और ध्यान रखें कि पेशाब का रंग साफ रहे।',
      mr: 'टीप: पाण्याचे ग्लास मोजण्यापेक्षा तहान लागेल तेव्हा पाणी प्या आणि लघवीचा रंग फिकट राहील याकडे लक्ष द्या.'
    },
    source: 'ICMR-National Institute of Nutrition (NIN) Dietary Guidelines, 2024',
    hint: {
      en: 'Does someone working outside in the hot summer sun need the same water as someone sitting in an AC office all day?',
      hi: 'क्या धूप में पसीना बहाने वाले मजदूर और एसी कमरे में बैठे व्यक्ति की पानी की जरूरत एक जैसी होगी?',
      mr: 'उन्हात काम करणाऱ्या माणसाला आणि एसीमध्ये बसणाऱ्या माणसाला एकाच प्रमाणात पाणी लागते का?'
    }
  },
  {
    id: 'myth_antibiotics_viral',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Can antibiotics cure everyday viral illnesses like a common cold, runny nose, or flu?',
      hi: 'क्या एंटीबायोटिक दवाएं सामान्य सर्दी-जुकाम, बहती नाक या फ्लू को ठीक कर सकती हैं?',
      mr: 'अँटिबायोटिक औषधे सामान्य सर्दी, पडसे किंवा फ्लू बरा करू शकतात का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Antibiotics only fight bacteria, not viruses! Common colds, coughs, and flu are caused by viruses. Taking antibiotics for a viral cold will not help you recover and can make medicines stop working when you really need them.',
      hi: 'एंटीबायोटिक केवल बैक्टीरिया को मारते हैं, वायरस को नहीं! सर्दी और फ्लू वायरस से होते हैं। बिना जरूरत एंटीबायोटिक खाने से दवाइयों का असर खत्म होने लगता है।',
      mr: 'अँटिबायोटिक्स फक्त जिवाणूंना (बॅक्टेरिया) मारतात, विषाणूंना (व्हायरस) नाही! सर्दी आणि फ्लू विषाणूंमुळे होतात. गरज नसताना ही औषधे घेतल्यास त्यांचा प्रभाव कमी होतो.'
    },
    source: 'World Health Organization (WHO) & ICMR Guidelines on Antimicrobial Resistance',
    hint: {
      en: 'Antibiotics specifically fight bacteria. Are common colds caused by bacteria or viruses?',
      hi: 'एंटीबायोटिक्स बैक्टीरिया पर काम करते हैं। क्या सर्दी बैक्टीरिया से होती है या वायरस से?',
      mr: 'अँटिबायोटिक्स बॅक्टेरियावर काम करतात. मग सर्दी बॅक्टेरियामुळे होते की व्हायरसमुळे?'
    }
  },
  {
    id: 'myth_ghee_elimination',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Should you completely stop eating all traditional desi ghee and mustard oil to protect your heart?',
      hi: 'क्या दिल को स्वस्थ रखने के लिए देसी घी और सरसों का तेल पूरी तरह बंद कर देना चाहिए?',
      mr: 'हृदय निरोगी ठेवण्यासाठी गावरान तूप आणि मोहरीचे तेल खाणे पूर्णपणे बंद केले पाहिजे का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'A small amount of traditional cooking oil and ghee (around 4 to 5 teaspoons a day) provides healthy fats your body needs to absorb vitamins like A and D. What truly harms your heart is deep-fried junk food and repeatedly reheating cooking oil.',
      hi: 'रोजाना 4-5 चम्मच तक सीमित तेल या थोड़ा घी शरीर के लिए अच्छा है। यह विटामिन A और D को सोखने में मदद करता है। असली नुकसान बार-बार गर्म किए गए तेल और तले हुए जंक फूड से होता है।',
      mr: 'दररोज ४-५ चमचे मर्यादित तेल किंवा थोडे तूप शरीरासाठी गरजेचे असते. त्यामुळे व्हिटॅमिन्स शोषले जातात. खरा त्रास वारंवार उकळलेले तेल आणि तळलेले पदार्थ खाल्ल्याने होतो.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, 2024',
    hint: {
      en: 'Does your body need a small amount of healthy fat to absorb important vitamins like Vitamin D?',
      hi: 'क्या शरीर को विटामिन D और A सोखने के लिए थोड़े तेल या घी की जरूरत होती है?',
      mr: 'व्हिटॅमिन D शोषून घेण्यासाठी शरीराला थोड्या स्निग्धतेची गरज असते का?'
    }
  },
  {
    id: 'myth_carbs_evening',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Does eating roti or rice for dinner after 7:00 PM instantly turn straight into body fat?',
      hi: 'क्या रात 7 बजे के बाद रोटी या चावल खाने से वह सीधे पेट की चर्बी में बदल जाता है?',
      mr: 'रात्री ७ नंतर चपाती किंवा भात खाल्ल्यास तो लगेच पोटातील चरबीत बदलतो का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Weight gain depends on how much total food you eat throughout the entire day, not the time on your clock. An earlier, light dinner helps with easy digestion and good sleep, but food does not turn into fat simply because it is night.',
      hi: 'वजन बढ़ना इस बात पर निर्भर करता है कि आपने पूरे दिन में कुल कितना खाना खाया, न कि घड़ी के समय पर। हल्का रात का खाना पचने और अच्छी नींद के लिए अच्छा है, लेकिन 7 बजे के बाद खाना तुरंत चर्बी नहीं बनता।',
      mr: 'वजन वाढणे हे दिवसभरातील एकूण आहारावर अवलंबून असते, घड्याळाच्या वेळेवर नाही. रात्रीचे जेवण हलके असणे पचनासाठी चांगले असते, पण ७ नंतर खाल्ल्याने लगेच चरबी वाढत नाही.'
    },
    source: 'National Institute of Nutrition (NIN) & Endocrine Society of India',
    hint: {
      en: 'Does weight gain depend on your total food over 24 hours, or a fixed time on the clock?',
      hi: 'क्या वजन पूरे दिन के खाने से बढ़ता है या घड़ी के किसी तय समय से?',
      mr: 'वजन वाढणे दिवसभराच्या एकूण आहारावर ठरते की घड्याळाच्या एका वेळेवर?'
    }
  },
  {
    id: 'myth_knuckle_cracking',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Does cracking your knuckles regularly give you arthritis in your finger joints?',
      hi: 'क्या बार-बार उंगलियां चटकाने या फोड़ने से हाथों में गठिया (जोड़ों का दर्द) हो जाता है?',
      mr: 'नेहमी बोटे मोडल्याने हातांमध्ये सांधेदुखी (संधिवात) होतो का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'No! The popping sound is just tiny gas bubbles popping harmlessly inside your joint fluid. Doctors have studied this for years and found that knuckle cracking does not cause arthritis or damage your joints.',
      hi: 'नहीं! चटकने की आवाज जोड़ों के पानी में हवा के छोटे बुलबुले फूटने से आती है। डॉक्टरों के शोध में पाया गया है कि उंगलियां फोड़ने से गठिया नहीं होता और न ही जोड़ों को नुकसान पहुंचता है।',
      mr: 'नाही! बोटे मोडताना येणारा आवाज हा सांध्यातील द्रवातील हवेचे बुडबुडे फुटल्यामुळे येतो. बोटे मोडल्याने संधिवात होत नाही हे अभ्यासातून सिद्ध झाले आहे.'
    },
    source: 'AIIMS Orthopedic Patient Guidelines & Harvard Health Publishing',
    hint: {
      en: 'Is the pop caused by bones grinding together, or harmless air bubbles shifting inside joint fluid?',
      hi: 'क्या यह आवाज हड्डियों के आपस में टकराने से आती है, या जोड़ों के पानी में हवा के बुलबुले फूटने से?',
      mr: 'हा आवाज हाडे घासल्यामुळे येतो की सांध्यातील हवेचे बुडबुडे फुटल्यामुळे?'
    }
  },
  {
    id: 'myth_sugar_overnight_diabetes',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Can enjoying a few sweets during a festival give a healthy person diabetes in just a couple of days?',
      hi: 'क्या त्योहार पर मिठाई खाने से किसी स्वस्थ व्यक्ति को दो-चार दिन में ही डायबिटीज हो सकती है?',
      mr: 'सणासुदीला गोडधोड खाल्ल्यास निरोगी माणसाला दोन-तीन दिवसांतच मधुमेह होऊ शकतो का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Type 2 diabetes develops slowly over years due to genetics, lack of exercise, and chronic weight gain. Eating sweets once in a while during celebrations will not cause diabetes overnight, although eating excess sugar every day is unhealthy.',
      hi: 'टाइप 2 डायबिटीज कई सालों में वजन बढ़ने, कसरत न करने और आनुवंशिकी के कारण होती है। त्योहार पर कभी-कभार मिठाई खाने से रातोंरात डायबिटीज नहीं होती, हालांकि रोज ज्यादा मीठा खाना सेहत के लिए खराब है।',
      mr: 'टाईप २ मधुमेह हा वाढते वजन, व्यायामाचा अभाव आणि अनुवांशिकतेमुळे अनेक वर्षांत हळूहळू होतो. सणांना अधूनमधून गोड खाल्ल्याने लगेच मधुमेह होत नाही, पण रोज जास्त गोड खाणे वाईट असते.'
    },
    source: 'Research Society for the Study of Diabetes in India (RSSDI) Clinical Guidelines',
    hint: {
      en: 'Does diabetes happen in a couple of days like an infection, or does it build up slowly over years?',
      hi: 'क्या डायबिटीज सर्दी-बुखार की तरह तुरंत हो जाती है या कई सालों में धीरे-धीरे बनती है?',
      mr: 'मधुमेह हा लगेच होणारा आजार आहे की अनेक वर्षांत हळूहळू वाढणारा त्रास आहे?'
    }
  },
  {
    id: 'myth_bitter_gourd_cures_diabetes',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Can drinking bitter gourd (karela) juice permanently cure diabetes so you can stop all prescribed medicines?',
      hi: 'क्या करेले का जूस या नीम का पानी पीने से डायबिटीज हमेशा के लिए ठीक हो जाती है और दवाएं बंद की जा सकती हैं?',
      mr: 'कारल्याचा रस किंवा कडुनिंबाचे पाणी प्यायल्याने मधुमेह कायमचा बरा होतो आणि औषधे बंद करता येतात का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'No juice or home drink can permanently cure diabetes. While bitter gourd can mildly help with blood sugar balance, it cannot replace your prescribed medicines. Stopping your doctor-prescribed medicines can cause blood sugar to spike dangerously high.',
      hi: 'सब्जियों का जूस डायबिटीज को हमेशा के लिए खत्म नहीं कर सकता। करेला शुगर संतुलित रखने में थोड़ी मदद जरूर कर सकता है, लेकिन यह दवाओं की जगह नहीं ले सकता। डॉक्टर की दवा कभी अपने आप बंद न करें।',
      mr: 'कोणताही रस मधुमेह कायमचा बरा करू शकत नाही. कारल्यामुळे रक्तातील साखर थोडी नियंत्रित राहू शकते, पण ते औषधांची जागा घेऊ शकत नाही. डॉक्टरांचे औषध स्वतःहून कधीही बंद करू नका.'
    },
    source: 'ICMR Guidelines for Management of Type 2 Diabetes in India',
    hint: {
      en: 'Can vegetable juice fully replace the medicines prescribed by a doctor for your blood sugar?',
      hi: 'क्या करेले का जूस डॉक्टर द्वारा दी गई शुगर की दवाओं की पूरी जगह ले सकता है?',
      mr: 'कारल्याचा रस डॉक्टरांनी दिलेल्या साखरेच्या औषधांची जागा घेऊ शकतो का?'
    }
  },
  {
    id: 'myth_fever_paracetamol_immediate',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Should you immediately take paracetamol for any slight warmth, like 99.0°F (37.2°C), just to crush the fever?',
      hi: 'क्या हल्का सा शरीर गर्म होते ही (जैसे 99°F) बुखार को तुरंत रोकने के लिए फौरन पैरासिटामोल खानी चाहिए?',
      mr: 'अंगात किंचित कणकण किंवा ९९°F ताप भरल्याबरोबर लगेच पॅरासिटामॉल गोळी खाल्ली पाहिजे का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'depends',
    explanation: {
      en: 'A mild fever is actually your body’s natural defense fighting off germs! If you feel comfortable, rest and fluids are best. Paracetamol is mainly helpful when a fever causes body aches, headaches, or crosses 100.4°F (38°C).',
      hi: 'हल्का बुखार असल में आपके शरीर की कीटाणुओं से लड़ने की स्वाभाविक ताकत है! अगर कोई खास परेशानी नहीं है, तो आराम करना और पानी पीना काफी है। पैरासिटामोल तब लें जब बदन दर्द, सिरदर्द हो या बुखार 100.4°F से ज्यादा हो।',
      mr: 'कमी ताप म्हणजे तुमचे शरीर जंतूंशी लढा देत असल्याचे लक्षण आहे! जास्त अस्वस्थता नसेल तर विश्रांती आणि पाणी पिणे पुरेसे असते. अंगदुखी, डोकेदुखी किंवा ताप १००.४°F च्या वर गेल्यासच औषधाची गरज असते.'
    },
    contextNotes: {
      en: 'Safety note: Always see a doctor immediately if fever comes with a stiff neck, confusion, chest pain, or breathing difficulty.',
      hi: 'सुरक्षा नोट: यदि बुखार के साथ गर्दन में अकड़न, सांस लेने में तकलीफ या बहुत तेज सिरदर्द हो तो तुरंत डॉक्टर को दिखाएं।',
      mr: 'काळजी: तापासोबत मान आखडणे किंवा धाप लागणे असा त्रास असल्यास त्वरित डॉक्टरांकडे जा.'
    },
    source: 'Indian Academy of Pediatrics (IAP) & AIIMS Fever Guidelines',
    hint: {
      en: 'Is a mild fever your body fighting off germs, or an emergency that must be crushed instantly?',
      hi: 'क्या हल्का बुखार शरीर की बीमारी से लड़ने की ताकत है, या कोई ऐसी चीज जिसे तुरंत दबाना जरूरी है?',
      mr: 'कमी ताप हा शरीराची लढण्याची ताकद दाखवतो की तो लगेच औषध देऊन दाबला पाहिजे?'
    }
  },
  {
    id: 'myth_starvation_belly_fat',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Is skipping meals and starving yourself all day the healthiest way to lose stubborn belly fat?',
      hi: 'क्या खाना छोड़ना और दिनभर भूखे रहना पेट की चर्बी घटाने का सबसे अच्छा तरीका है?',
      mr: 'जेवण सोडणे आणि दिवसभर उपाशी राहणे हा पोटाची चरबी कमी करण्याचा सर्वोत्तम मार्ग आहे का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Starving slows down your metabolism and burns your muscle instead of fat. When you start eating normally again, your body quickly gains the weight back. Eating balanced home meals and daily brisk walking is the real way to lose fat.',
      hi: 'भूखे रहने से शरीर सुस्त पड़ जाता है और चर्बी की जगह मांसपेशियां कमजोर होती हैं। जैसे ही आप खाना शुरू करेंगे, वजन फिर से तेजी से बढ़ जाएगा। संतुलित भोजन और रोज टहलना ही वजन घटाने का सही तरीका है।',
      mr: 'उपाशी राहिल्याने चयापचय मंदावतो आणि चरबीऐवजी स्नायू कमजोर होतात. पुन्हा जेवण सुरू केल्यावर वजन वेगाने वाढते. समतोल आहार आणि रोज चालणे हाच योग्य मार्ग आहे.'
    },
    source: 'ICMR-NIN Guidelines on Weight Management and Healthy Living',
    hint: {
      en: 'When you starve, does your body burn fat easily, or does it slow down to save energy?',
      hi: 'भूखे रहने पर क्या शरीर तेजी से चर्बी घटाता है, या ऊर्जा बचाने के लिए सुस्त हो जाता है?',
      mr: 'उपाशी राहिल्यावर शरीर चरबी जाळते की ताकद वाचवण्यासाठी सुस्त होते?'
    }
  },
  {
    id: 'myth_raw_milk_unboiled',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Is drinking fresh, unboiled milk straight from the cow or buffalo safer than boiled milk?',
      hi: 'क्या गाय या भैंस का ताजा कच्चा, बिना उबला दूध पीना उबले हुए दूध से ज्यादा सुरक्षित होता है?',
      mr: 'गाई-म्हशींचे ताजे न तापवलेले कच्चे दूध पिणे हे उकळलेल्या दुधापेक्षा जास्त सुरक्षित असते का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Raw milk can carry dangerous bacteria like Salmonella, E. coli, and TB germs that can cause severe infections. Boiling milk kills these harmful germs without losing essential calcium and protein, making it safe for the whole family.',
      hi: 'कच्चे दूध में टीबी और पेट खराब करने वाले खतरनाक कीटाणु हो सकते हैं। दूध को उबालने से ये कीटाणु मर जाते हैं, जबकि दूध का कैल्शियम और प्रोटीन सुरक्षित रहता है।',
      mr: 'कच्च्या दुधात टीबी आणि पोट बिघडवणारे धोकादायक जंतू असू शकतात. दूध उकळल्याने हे जंतू मरतात आणि कॅल्शियम व प्रथिने टिकून राहतात, ज्यामुळे ते पिण्यास सुरक्षित बनते.'
    },
    source: 'Food Safety and Standards Authority of India (FSSAI) Safe Milk Guidelines',
    hint: {
      en: 'Why do Indian families always bring milk to a boil at home? What harmful germs lurk in raw milk?',
      hi: 'घर में हमेशा दूध को क्यों उबाला जाता है? कच्चे दूध में कौन से कीटाणु हो सकते हैं?',
      mr: 'घरी दूध नेहमी का उकळले जाते? कच्च्या दुधात कोणते जंतू असू शकतात?'
    }
  },
  {
    id: 'myth_dim_light_permanent_blindness',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Does reading a book or studying in dim light cause permanent damage to your eyes and lead to blindness?',
      hi: 'क्या कम रोशनी में किताब पढ़ने या पढ़ाई करने से आंखें हमेशा के लिए खराब हो जाती हैं और अंधापन आता है?',
      mr: 'कमी उजेडात पुस्तक वाचल्याने डोळे कायमचे खराब होतात आणि अंधत्व येते का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Reading in dim light can tire your eye muscles and cause a temporary headache or dry eyes, but it does NOT cause permanent eye damage or blindness. Good lighting is recommended simply to keep your eyes comfortable.',
      hi: 'कम रोशनी में पढ़ने से आंखों में थकान या हल्का सिरदर्द हो सकता है, लेकिन इससे आंखों की रोशनी हमेशा के लिए नहीं जाती। अच्छी रोशनी केवल पढ़ने को आरामदायक बनाती है।',
      mr: 'कमी प्रकाशात वाचल्याने डोळ्यांवर ताण येऊन तात्पुरते डोके दुखू शकते, पण डोळ्यांची दृष्टी कायमची जात नाही. चांगला प्रकाश फक्त वाचन सोपे करतो.'
    },
    source: 'AIIMS Dr. Rajendra Prasad Centre for Ophthalmic Sciences',
    hint: {
      en: 'Does reading in dim light cause lasting blindness, or does it just feel tiring for a little while?',
      hi: 'क्या कम रोशनी में पढ़ने से केवल आंखों में थकान होती है या हमेशा के लिए रोशनी चली जाती है?',
      mr: 'कमी प्रकाशात वाचल्याने फक्त डोळे थकतात की कायमचे अंधत्व येते?'
    }
  },
  {
    id: 'myth_multivitamins_for_all',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Does every healthy adult need to take daily multivitamin pills, even if they eat healthy home-cooked meals?',
      hi: 'क्या हर स्वस्थ इंसान को रोजाना मल्टीविटामिन की गोलियां खानी चाहिए, भले ही वे घर का पौष्टिक खाना खाते हों?',
      mr: 'घरचे पौष्टिक जेवण जेवणाऱ्या प्रत्येक निरोगी माणसाने रोज व्हिटॅमिनच्या गोळ्या घेतल्याच पाहिजेत का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'If you eat a balanced diet with vegetables, fruits, dals, and milk or curd, you already get your daily vitamins! Taking extra vitamin pills without a doctor’s recommendation is unnecessary and taking too many can cause side effects.',
      hi: 'अगर आप फल, हरी सब्जियां, दाल और दूध-दही खाते हैं, तो शरीर को सारे विटामिन प्राकृतिक रूप से मिल जाते हैं। बिना डॉक्टर की सलाह के गोलियां खाना जरूरी नहीं है।',
      mr: 'तुम्ही फळे, भाज्या, डाळी आणि दूध-दही खात असाल तर आवश्यक व्हिटॅमिन्स जेवणातूनच मिळतात. डॉक्टरांच्या सल्ल्याशिवाय गोळ्या खाण्याची गरज नसते.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, 2024',
    hint: {
      en: 'Can a colorful plate with fresh vegetables, fruits, and dal provide all the vitamins you need?',
      hi: 'क्या घर का बना दाल, रोटी, सब्जी और फल आपके शरीर को सभी जरूरी पोषक तत्व दे सकते हैं?',
      mr: 'घरातील डाळ, चपाती, भाजी आणि फळांमधून शरीराला लागणारे सर्व पोषण मिळू शकते का?'
    }
  },
  {
    id: 'myth_stop_bp_meds_when_normal',
    mode: 'myth_buster',
    difficulty: 'hard',
    points: 35,
    question: {
      en: 'If a person’s blood pressure reading becomes normal (120/80) with medication, can they stop taking their BP pills?',
      hi: 'अगर दवा खाने से ब्लड प्रेशर की जांच सामान्य (120/80) आ जाए, तो क्या बीपी की दवा तुरंत बंद कर देनी चाहिए?',
      mr: 'औषधामुळे रक्तदाब (BP) सामान्य आला, तर बीपीची गोळी घेणे लगेच थांबवावे का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'No! Your blood pressure is normal only BECAUSE the daily medicine is keeping it in control. If you stop the medicine, your BP will spike back up, raising the risk of a heart attack or stroke. Never stop BP pills without asking your doctor.',
      hi: 'नहीं! बीपी इसलिए सामान्य आया है क्योंकि दवा अपना काम कर रही है। दवा बंद करते ही बीपी फिर से बढ़ जाएगा, जिससे दिल का दौरा या लकवा (स्ट्रोक) हो सकता है। डॉक्टर से पूछे बिना बीपी की दवा कभी बंद न करें।',
      mr: 'नाही! औषध सुरू असल्यामुळेच बीपी नियंत्रणात आला आहे. औषध बंद करताच बीपी पुन्हा वाढेल, ज्यामुळे हृदयविकाराचा झटका किंवा अर्धांगवायू होऊ शकतो. डॉक्टरांना विचारल्याशिवाय गोळी बंद करू नका.'
    },
    source: 'Cardiological Society of India & WHO Guidelines for Hypertension Management',
    hint: {
      en: 'Why is the BP normal right now? Is it cured forever, or is today’s pill keeping it controlled?',
      hi: 'बीपी अभी सामान्य क्यों है? क्या बीमारी हमेशा के लिए ठीक हो गई है, या दवा इसे नियंत्रित रख रही है?',
      mr: 'रक्तदाब आता सामान्य का आहे? आजार कायमचा बरा झाला आहे की गोळीमुळे नियंत्रणात आहे?'
    }
  },
  {
    id: 'myth_hot_water_melts_belly_fat',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Does drinking piping hot water right after oily food melt away your belly fat and flush it out?',
      hi: 'क्या तेल वाला खाना खाने के तुरंत बाद खौलता गर्म पानी पीने से पेट की चर्बी पिघलकर बाहर निकल जाती है?',
      mr: 'तेलकट खाल्ल्यानंतर लगेच कडक गरम पाणी प्यायल्याने पोटाची चरबी वितळून बाहेर पडते का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Hot water cannot melt body fat. Once water enters your stomach, your body cools it to normal body temperature (37°C). To reduce belly fat, you need regular physical activity and a balanced diet with fewer fried snacks and sugars.',
      hi: 'गर्म पानी शरीर की चर्बी को नहीं पिघला सकता। पेट में जाते ही पानी शरीर के सामान्य तापमान पर आ जाता है। चर्बी कम करने के लिए तली हुई चीजें कम खाना और रोज कसरत करना जरूरी है।',
      mr: 'गरम पाण्याने चरबी वितळत नाही. पोटात जाताच पाणी शरीराच्या सामान्य तापमानाएवढे होते. पोटाची चरबी कमी करण्यासाठी तळलेले पदार्थ कमी करणे आणि रोज व्यायाम करणे गरजेचे आहे.'
    },
    source: 'National Institute of Nutrition (NIN) Clinical Physiology Guidance',
    hint: {
      en: 'Does water stay boiling hot inside your stomach, or does your body quickly bring it to body temperature?',
      hi: 'क्या पेट के अंदर जाकर पानी खौलता रहता है, या शरीर उसे अपने सामान्य तापमान पर ले आता है?',
      mr: 'पोटात गेल्यावर पाणी गरम राहते की शरीर त्याला लगेच सामान्य तापमानावर आणते?'
    }
  },
  {
    id: 'myth_citrus_curd_causes_cold',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Does eating curd, oranges, or guavas in the evening or during winter directly cause colds and coughs?',
      hi: 'क्या शाम को या सर्दियों में दही, संतरा या अमरूद खाने से सीधे सर्दी-जुकाम और खांसी हो जाती है?',
      mr: 'संध्याकाळी किंवा हिवाळ्यात दही, संत्री किंवा पेरू खाल्ल्याने थेट सर्दी-खोकला होतो का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Colds and coughs are caused by airborne viruses, not by fruits or curd! Oranges and guavas are loaded with Vitamin C, which strengthens your immune system to fight infections. Just eat them at room temperature rather than straight out of the fridge.',
      hi: 'सर्दी-जुकाम हवा में फैले वायरस से होता है, फलों या दही से नहीं! संतरा और अमरूद में विटामिन C होता है जो बीमारियों से लड़ने की ताकत बढ़ाता है। इन्हें फ्रिज से निकालकर सामान्य तापमान पर खाएं।',
      mr: 'सर्दी-खोकला हा हवेतील विषाणूंमुळे होतो, फळे किंवा दह्यामुळे नाही! संत्री आणि पेरूमध्ये भरपूर व्हिटॅमिन C असते, जे आजारांशी लढण्याची ताकद वाढवते. फक्त हे पदार्थ जास्त थंड खाण्याऐवजी साध्या तापमानाला खावेत.'
    },
    source: 'ICMR Guidelines on Nutrition and Immune Function & AIIMS Pediatrics',
    hint: {
      en: 'What truly causes a cold: viral germs spread through the air, or vitamin-rich fruits?',
      hi: 'सर्दी-जुकाम का असली कारण क्या है: हवा में फैले वायरस या विटामिन से भरपूर फल?',
      mr: 'सर्दी कशामुळे होते: हवेतील विषाणू की व्हिटॅमिनने भरलेली ताजी फळे?'
    }
  },
  {
    id: 'myth_burns_toothpaste_butter',
    mode: 'myth_buster',
    difficulty: 'hard',
    points: 35,
    question: {
      en: 'If you burn your finger on a hot cooking pan, should you put toothpaste, butter, or flour on it?',
      hi: 'रसोई में गर्म बर्तन से हाथ जलने पर क्या जले हुए हिस्से पर टूथपेस्ट, मक्खन या आटा लगाना चाहिए?',
      mr: 'स्वयंपाकघरात गरम भांड्याने हात भाजल्यास त्यावर टूथपेस्ट, लोणी किंवा पीठ लावावे का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Never put toothpaste or butter on a burn! They trap heat inside the skin and cause severe infections. The only correct first aid is to hold the burned area under cool running tap water for 10 to 15 minutes, then cover it with a clean cloth.',
      hi: 'जलने पर टूथपेस्ट या मक्खन कभी न लगाएं! ये त्वचा की गर्मी को अंदर ही रोक लेते हैं और घाव पका सकते हैं। सही तरीका है कि जले हुए हिस्से को 10-15 मिनट तक नल के ठंडे बहते पानी के नीचे रखें।',
      mr: 'भाजल्यावर टूथपेस्ट किंवा लोणी कधीही लावू नका! यामुळे त्वचेतील उष्णता आतच अडकते आणि जखम चिघळू शकते. नळाच्या साध्या वाहत्या पाण्याखाली १०-१५ मिनिटे हात धरणे हाच योग्य उपाय आहे.'
    },
    source: 'National Burns Centre (NBC) India & WHO Burn Care Protocols',
    hint: {
      en: 'Does thick toothpaste trap heat inside the skin or let it escape? What is the best clean fluid to cool a burn?',
      hi: 'क्या टूथपेस्ट त्वचा की जलन को अंदर रोक लेती है? जलने पर सबसे पहले किस साफ चीज से ठंडा करना चाहिए?',
      mr: 'टूथपेस्टमुळे त्वचेतील उष्णता आतच कोंडते का? भाजल्यावर लगेच काय वापरले पाहिजे?'
    }
  },
  {
    id: 'myth_sweating_equals_fat_loss',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Does sweating heavily while exercising or sitting in the heat mean you have melted away a lot of fat?',
      hi: 'क्या कसरत करते समय या गर्मी में बहुत ज्यादा पसीना आने का मतलब है कि शरीर की ढेर सारी चर्बी पिघल गई है?',
      mr: 'व्यायाम करताना किंवा उन्हात खूप घाम आला म्हणजे शरीरातील भरपूर चरबी वितळली असा अर्थ होतो का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Sweating is simply your body’s natural way to cool down. Sweat is made of water and mineral salts, not fat! Any quick weight drop on the scale right after sweating is just lost water, which returns as soon as you rehydrate.',
      hi: 'पसीना सिर्फ शरीर को ठंडा रखने का प्राकृतिक तरीका है। पसीने में सिर्फ पानी और नमक होता है, चर्बी नहीं! पसीने के बाद वजन में जो कमी दिखती है वह पानी की कमी है, जो पानी पीते ही वापस आ जाती है।',
      mr: 'घाम येणे म्हणजे शरीर स्वतःला थंड ठेवण्याचा मार्ग आहे. घामामध्ये फक्त पाणी आणि मीठ असते, चरबी नसते! घामाने कमी झालेले वजन हे केवळ पाण्याचे असते, जे पाणी प्याल्यावर परत येते.'
    },
    source: 'American College of Sports Medicine & ICMR Physical Activity Guidance',
    hint: {
      en: 'Is sweat made of water and minerals, or melted body fat?',
      hi: 'पसीना किस चीज से बना होता है: पानी और नमक से, या पिघली हुई चर्बी से?',
      mr: 'घाम कशाचा बनलेला असतो: पाणी आणि क्षार की वितळलेली चरबी?'
    }
  },
  {
    id: 'myth_four_hours_sleep_nap',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Can an adult stay completely healthy and energized by sleeping only 4 hours at night if they take a 15-minute afternoon nap?',
      hi: 'क्या दोपहर में 15 मिनट की झपकी लेकर, रात में केवल 4 घंटे सोकर भी कोई पूरी तरह स्वस्थ और तरोताजा रह सकता है?',
      mr: 'दुपारी १५ मिनिटे डोळा लागला तरी रात्री फक्त ४ तास झोपून माणूस पूर्णपणे निरोगी आणि तरतरीत राहू शकतो का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Adults need 7 to 8 hours of continuous sleep every night. During deep sleep, your body repairs your heart, balances hormones, and refreshes your brain. A short 15-minute nap cannot replace lost hours of deep night sleep.',
      hi: 'वयस्कों को हर रात 7 से 8 घंटे की अच्छी नींद चाहिए। गहरी नींद में दिमाग तरोताजा होता है और दिल स्वस्थ रहता है। दोपहर की छोटी झपकी रात की अधूरी नींद की भरपाई नहीं कर सकती।',
      mr: 'मोठ्या माणसांना दररोज रात्री ७ ते ८ तास शांत झोपेची गरज असते. गाढ झोपेत शरीर आणि मेंदू ताजेतवाने होतात. दुपारची छोटी डुलकी रात्रीच्या अपुऱ्या झोपेची भरपाई करू शकत नाही.'
    },
    source: 'Indian Society for Sleep Research & National Sleep Foundation Consensus',
    hint: {
      en: 'Can a tiny 15-minute nap replace a full night of 7 to 8 hours of restorative sleep?',
      hi: 'क्या 15 मिनट की हल्की झपकी रात की 7-8 घंटे की गहरी नींद की जगह ले सकती है?',
      mr: '१५ मिनिटांची डुलकी रात्रीच्या ७-८ तासांच्या गाढ झोपेची बरोबरी करू शकते का?'
    }
  },
  {
    id: 'myth_all_carbs_are_toxic',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Are all carbohydrates—including traditional Indian grains like jowar, bajra, ragi, and brown rice—bad for your health?',
      hi: 'क्या ज्वार, बाजरा, रागी और चावल जैसे पारंपरिक अनाज भी सेहत के लिए नुकसानदेह हैं और इन्हें छोड़ देना चाहिए?',
      mr: 'ज्वारी, बाजरी, नाचणी आणि तांदळासारखी पारंपरिक धान्येही आरोग्यासाठी वाईट असून ती बंद केली पाहिजेत का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Traditional whole grains and millets like ragi and jowar provide daily energy, vitamins, and fiber that keep your gut healthy. What you should cut down on is ultra-processed junk food, sugary drinks, and refined white flour (maida).',
      hi: 'ज्वार, बाजरा और रागी जैसे साबुत अनाज हमें ताकत, फाइबर और जरूरी पोषण देते हैं। हमें सिर्फ मैदे से बनी चीजें, कोल्ड ड्रिंक्स और ज्यादा चीनी वाले जंक फूड को कम करना चाहिए।',
      mr: 'ज्वारी, बाजरी आणि नाचणीसारखी धान्ये शरीराला ताकद आणि फायबर देतात, ज्यामुळे पोट साफ राहते. फक्त मैदा, शीतपेये आणि पाकिटबंद जंक फूड कमी करणे गरजेचे आहे.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, 2024 (My Plate for the Day)',
    hint: {
      en: 'Is there a healthy difference between traditional fiber-rich millets and refined white flour (maida)?',
      hi: 'क्या फाइबर से भरपूर ज्वार-बाजरा और कारखानों में बने मैदे में सेहत का बड़ा फर्क होता है?',
      mr: 'फायबरने समृद्ध ज्वारी-बाजरी आणि पांढरा मैदा यात आरोग्याच्या दृष्टीने फरक असतो का?'
    }
  },
  {
    id: 'myth_mental_health_willpower',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Are anxiety and depression just personal weakness that someone can overcome in a minute by just "thinking positive"?',
      hi: 'क्या चिंता और डिप्रेशन केवल मन की कमजोरी है, जिसे कोई भी सिर्फ "पॉजिटिव सोचकर" तुरंत ठीक कर सकता है?',
      mr: 'चिंता आणि डिप्रेशन हा फक्त मनाचा कमकुवतपणा असून फक्त "सकारात्मक विचार" करून तो लगेच बरा होतो का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Depression and anxiety are real medical conditions, just like diabetes or asthma. They involve chemical balances in the brain and life stress. People going through them need kind support, counseling, and medical help, not blame.',
      hi: 'डिप्रेशन और चिंता भी डायबिटीज या अस्थमा की तरह असली बीमारियां हैं। यह दिमाग के रसायनों और तनाव से जुड़ी होती हैं। इसे सिर्फ "मुस्कुराने" से ठीक नहीं किया जा सकता, इसके लिए डॉक्टर और प्यार भरे सहारे की जरूरत होती है।',
      mr: 'डिप्रेशन आणि चिंता हे मधुमेह किंवा दम्यासारखेच खरे वैद्यकीय आजार आहेत. ते केवळ "हसून" बरे होत नाहीत, तर त्यासाठी आपुलकी, समुपदेशन आणि डॉक्टरांच्या योग्य उपचारांची गरज असते.'
    },
    source: 'National Institute of Mental Health and Neurosciences (NIMHANS) & WHO Mental Health Guidance',
    hint: {
      en: 'Would you expect a person with a fractured bone or asthma to heal just through positive thoughts?',
      hi: 'क्या हड्डी टूटने या अस्थमा के मरीज से यह कहा जा सकता है कि वह सिर्फ सकारात्मक सोच से ठीक हो जाए?',
      mr: 'हाड मोडलेल्या माणसाला फक्त सकारात्मक विचार करून बरे होता येईल का?'
    }
  },
  {
    id: 'myth_dengue_lifetime_immunity',
    mode: 'myth_buster',
    difficulty: 'hard',
    points: 35,
    question: {
      en: 'If you recover from dengue fever once, are you completely protected from ever catching dengue again in your life?',
      hi: 'अगर किसी को एक बार डेंगू हो चुका है, तो क्या उसे जिंदगी में दोबारा कभी डेंगू नहीं हो सकता?',
      mr: 'एखाद्याला एकदा डेंग्यू होऊन गेला असेल, तर त्याला आयुष्यात पुन्हा कधीच डेंग्यू होणार नाही का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'There are 4 different types of dengue viruses. Catching dengue once protects you only against that one type. If you catch another type later, the illness can actually be more severe. Always use mosquito protection and prevent standing water around home.',
      hi: 'डेंगू फैलाने वाले 4 अलग-अलग वायरस होते हैं। एक बार ठीक होने पर केवल उसी एक प्रकार से सुरक्षा मिलती है। दूसरी बार किसी दूसरे प्रकार का डेंगू होने पर खतरा और ज्यादा बढ़ सकता है। मच्छरों से बचाव हमेशा जरूरी है।',
      mr: 'डेंग्यूचे ४ वेगवेगळे प्रकार असतात. एका प्रकारचा डेंग्यू बरा झाल्यावर फक्त त्याच प्रकारापासून संरक्षण मिळते. दुसऱ्या प्रकारचा डेंग्यू झाल्यास तो अधिक गंभीर होऊ शकतो. त्यामुळे डासांपासून सावध राहणे नेहमी गरजेचे आहे.'
    },
    source: 'National Vector Borne Disease Control Programme (NVBDCP) & WHO Dengue Guidelines',
    hint: {
      en: 'There are 4 different types of dengue viruses in nature. Does immunity to one cover all four?',
      hi: 'डेंगू के 4 अलग-अलग प्रकार होते हैं। क्या एक बार की इम्युनिटी बाकी तीनों से भी बचा सकती है?',
      mr: 'डेंग्यूचे ४ प्रकार असतात. एका प्रकारची प्रतिकारशक्ती इतर तिन्हींपासून वाचवू शकते का?'
    }
  },
  {
    id: 'myth_hard_brushing_teeth',
    mode: 'myth_buster',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Does scrubbing your teeth very hard with a stiff toothbrush right after meals clean your teeth best?',
      hi: 'क्या खाना खाने के तुरंत बाद कड़क ब्रश से जोर-जोर से दांत रगड़ने से दांत सबसे ज्यादा साफ होते हैं?',
      mr: 'जेवल्याबरोबर लगेच कडक ब्रशने जोरात दात घासल्यास दात सर्वात स्वच्छ होतात का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Brushing too hard wears away the protective enamel shield on your teeth and hurts your gums, causing tooth sensitivity and pain. Dentists recommend using a soft-bristled toothbrush and brushing gently in small circles.',
      hi: 'दांतों को जोर से रगड़ने से उनकी सुरक्षात्मक ऊपरी परत (इनेमल) घिस जाती है और मसूड़े छिल जाते हैं, जिससे दांतों में झनझनाहट होने लगती है। हमेशा मुलायम ब्रश से हल्के हाथों से दांत साफ करें।',
      mr: 'दात जोरात घासल्याने दातांचे बाहेरील संरक्षक आवरण झिजते आणि हिरड्यांना इजा होते, ज्यामुळे दातात कळ मारू लागते. नेहमी मऊ ब्रशने हलक्या हाताने दात घासावेत.'
    },
    source: 'Indian Dental Association (IDA) Oral Health Recommendations',
    hint: {
      en: 'Does scrubbing forcefully protect your teeth or wear down their protective outer coating?',
      hi: 'क्या जोर से रगड़ने पर दांत मजबूत रहते हैं या उनकी सुरक्षा परत घिस जाती है?',
      mr: 'जोरात घासल्याने दात चांगले राहतात की त्यांचे आवरण झिजते?'
    }
  },
  {
    id: 'myth_detox_teas_cleanse_organs',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Do you need to buy expensive "detox teas" or special juices to clean out toxins from your body?',
      hi: 'क्या शरीर की गंदगी और टॉक्सिन्स साफ करने के लिए बाजार की महंगी "डिटॉक्स चाय" या जूस पीना जरूरी है?',
      mr: 'शरीरातील विषारी घटक बाहेर काढण्यासाठी बाजारातील महागडे "डिटॉक्स टी" किंवा ज्यूस पिणे गरजेचे असते का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'Your liver and kidneys work 24 hours a day to naturally filter your blood and clear waste! Packaged detox drinks are unnecessary and can even cause stomach upset or dehydration. Drinking clean water and eating vegetables is all your body needs.',
      hi: 'आपके लिवर और किडनी 24 घंटे खून को साफ करने और कचरा बाहर निकालने का काम करते हैं! बाजार की डिटॉक्स चाय की कोई जरूरत नहीं होती। पर्याप्त साफ पानी पीना और फल-सब्जियां खाना ही काफी है।',
      mr: 'तुमचे यकृत (लिव्हर) आणि मूत्रपिंड (किडनी) २४ तास रक्त स्वच्छ करण्याचे काम करतात! बाजारातील डिटॉक्स पेयांची काहीही गरज नसते. भरपूर स्वच्छ पाणी पिणे आणि भाज्या खाणे पुरेसे असते.'
    },
    source: 'AIIMS Department of Gastroenterology & British Dietetic Association Guidance',
    hint: {
      en: 'Which natural organs in your body already work non-stop to filter and clean your blood?',
      hi: 'आपके शरीर के कौन से अंग खून को प्राकृतिक रूप से साफ करने का काम हमेशा करते रहते हैं?',
      mr: 'शरीरातील कोणते अवयव रक्त स्वच्छ करण्याचे काम सतत करत असतात?'
    }
  },
  {
    id: 'myth_no_symptoms_no_screenings',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'If an adult feels completely fine and has no pain, is it true they never need health checkups like BP or blood sugar tests?',
      hi: 'अगर किसी व्यक्ति को कोई दर्द या बीमारी महसूस नहीं हो रही, तो क्या उसे बीपी या शुगर जैसी जांच कराने की बिल्कुल जरूरत नहीं है?',
      mr: 'एखाद्या माणसाला कोणताही त्रास किंवा दुखणे नसेल, तर त्याला बीपी किंवा रक्ताची तपासणी करण्याची अजिबात गरज नसते का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'false',
    explanation: {
      en: 'High blood pressure and early diabetes are called "silent" conditions because they usually show zero symptoms until they damage the heart or kidneys. A simple annual checkup after age 30 helps catch and fix problems early before any harm happens.',
      hi: 'हाई ब्लड प्रेशर और शुरुआती डायबिटीज के कोई बाहरी लक्षण या दर्द नहीं होते, इसलिए इन्हें "साइलेंट" बीमारियां कहते हैं। 30 साल की उम्र के बाद साल में एक बार साधारण जांच कराने से बीमारियां समय रहते पकड़ में आ जाती हैं।',
      mr: 'उच्च रक्तदाब आणि मधुमेहाची सुरुवातीला कोणतीही लक्षणे दिसत नाहीत, म्हणून त्यांना "सायलेंट" त्रास म्हणतात. वयाच्या ३० नंतर वर्षातून एकदा साधी तपासणी केल्यास त्रास वाढण्यापूर्वीच काळजी घेता येते.'
    },
    source: 'Ministry of Health and Family Welfare (MoHFW) Screening Guidelines',
    hint: {
      en: 'Can high blood pressure silently damage your arteries without causing any pain or fever?',
      hi: 'क्या हाई ब्लड प्रेशर बिना किसी दर्द के भी अंदर ही अंदर नुकसान पहुंचा सकता है?',
      mr: 'कोणतेही दुखणे न होताही उच्च रक्तदाब आतून त्रास देऊ शकतो का?'
    }
  },
  {
    id: 'myth_water_with_meals_ruins_digestion',
    mode: 'myth_buster',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Does drinking a few small sips of water during lunch or dinner completely stop your food from digesting?',
      hi: 'क्या खाना खाते समय पानी के एक-दो छोटे घूंट पीने से भोजन का पचना पूरी तरह रुक जाता है?',
      mr: 'जेवताना पाण्याचे एक-दोन लहान घोट घेतल्यास अन्न पचणे पूर्णपणे थांबते का?'
    },
    options: HEALTH_MYTH_OPTIONS,
    correctOptionId: 'depends',
    explanation: {
      en: 'Small sips of water during meals actually help you chew and swallow dry food comfortably! Your stomach naturally makes the digestive juices it needs. Just avoid gulping down multiple glasses of ice-cold water all at once.',
      hi: 'भोजन के साथ एक-दो घूंट पानी पीने से सूखी रोटी या खाना निगलना आसान हो जाता है! पेट अपने आप पाचक रस बनाता रहता है। बस एक साथ बहुत सारा ठंडा पानी पीने से बचें।',
      mr: 'जेवताना पाण्याचे थोडे घोट घेतल्याने कोरडा घास गिळणे सोपे होते! पोट पचनासाठी आवश्यक पाचक रस तयार करत राहते. फक्त एकाच वेळी भरपूर थंडगार पाणी पिणे टाळावे.'
    },
    contextNotes: {
      en: 'Tip: Small sips of room-temperature water are completely normal. Gulping lots of cold water with greasy meals can cause heaviness or bloating.',
      hi: 'सुझाव: सादे पानी के छोटे घूंट लेना सामान्य है। बहुत सारा ठंडा पानी एक साथ पीने से पेट भारी हो सकता है।',
      mr: 'टीप: पाण्याचे लहान घोट घेणे सामान्य आहे. भरपूर गार पाणी एकाच वेळी प्यायल्याने पोट जड होऊ शकते.'
    },
    source: 'National Institute of Nutrition (NIN) & Mayo Clinic Digestive Health Guidelines',
    hint: {
      en: 'Does taking a sip of water help swallow dry food easily, while drinking large chilled bottles might bloat your stomach?',
      hi: 'क्या थोड़ा सा पानी सूखा खाना निगलने में मदद करता है, जबकि बहुत सारा पानी पीने से पेट फूल सकता है?',
      mr: 'थोडे पाणी घास गिळायला मदत करते का, आणि एकदम भरपूर पाणी प्यायल्याने पोट जड होते का?'
    }
  }
];
