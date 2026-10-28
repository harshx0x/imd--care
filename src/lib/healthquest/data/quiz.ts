import { HealthQuestion } from '../types';

export const QUIZ_QUESTIONS: HealthQuestion[] = [
  {
    id: 'quiz_my_plate_greens',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'According to Indian nutrition guidelines ("My Plate for the Day"), how much of your daily plate should ideally be filled with vegetables and fruits?',
      hi: 'भारत सरकार के पोषण दिशानिर्देश ("माई प्लेट") के अनुसार, आपकी दैनिक थाली का कितना हिस्सा फल और सब्जियों से भरा होना चाहिए?',
      mr: 'पोषण मार्गदर्शक तत्त्वांनुसार ("माय प्लेट"), तुमच्या रोजच्या आहारातील किती भाग पालेभाज्या आणि फळांनी भरलेला असावा?'
    },
    options: [
      { id: 'opt_1', text: { en: 'About 10% (just a tiny side katori)', hi: 'लगभग 10% (केवल एक छोटी कटोरी)', mr: 'सुमारे १०% (फक्त एक लहान वाटी)' } },
      { id: 'opt_2', text: { en: 'About 25% (one quarter)', hi: 'लगभग 25% (एक चौथाई हिस्सा)', mr: 'सुमारे २५% (पाव भाग)' } },
      { id: 'opt_3', text: { en: 'About 50% (half of your total plate)', hi: 'लगभग 50% (पूरी थाली का आधा हिस्सा)', mr: 'सुमारे ५०% (संपूर्ण ताटाचा अर्धा भाग)' } },
      { id: 'opt_4', text: { en: 'About 80% (fruits and vegetables exclusively)', hi: 'लगभग 80% (केवल फल और सब्जियां)', mr: 'सुमारे ८०% (फक्त फळे आणि भाज्या)' } }
    ],
    correctOptionId: 'opt_3',
    explanation: {
      en: 'Health experts advise that about half (50%) of what you eat daily should be colorful vegetables, greens, and whole fruits (around 400g veggies and 100g fruits) to provide fiber, vitamins, and minerals.',
      hi: 'विशेषज्ञों के अनुसार आपकी थाली का आधा हिस्सा (50%) ताजी हरी सब्जियों और फलों से भरा होना चाहिए ताकि शरीर को जरूरी विटामिन, मिनरल और फाइबर मिल सकें।',
      mr: 'तज्ज्ञांनुसार ताटाचा अर्धा भाग (५०%) विविध प्रकारच्या ताज्या भाज्या आणि फळांनी भरलेला असावा, ज्यामुळे शरीराला पुरेशी जीवनसत्त्वे आणि फायबर मिळते.'
    },
    source: 'ICMR-NIN "My Plate for the Day" Guidelines for Indians, 2024',
    hint: {
      en: 'Imagine your lunch plate divided straight down the middle. One entire half is dedicated to vegetables and fruits.',
      hi: 'अपनी थाली को बीच से दो हिस्सों में बांटकर सोचें। एक पूरा आधा हिस्सा फल और सब्जियों के लिए होना चाहिए।',
      mr: 'आपल्या ताटाचे दोन समान भाग करा. त्यातील एक पूर्ण अर्धा भाग भाज्या आणि फळांसाठी असावा.'
    }
  },
  {
    id: 'quiz_adult_sleep',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'How many hours of restful night sleep do healthy adults (ages 18–64) need each night to stay healthy?',
      hi: '18 से 64 वर्ष के स्वस्थ वयस्कों को सेहतमंद रहने के लिए रात में कितने घंटे की अच्छी नींद चाहिए?',
      mr: 'निरोगी प्रौढ व्यक्तीने (१८-६४ वर्षे) रात्री किती तास शांत झोप घेणे आरोग्यासाठी योग्य आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: '4 to 5 hours', hi: '4 से 5 घंटे', mr: '४ ते ५ तास' } },
      { id: 'opt_2', text: { en: '7 to 8 hours', hi: '7 से 8 घंटे', mr: '७ ते ८ तास' } },
      { id: 'opt_3', text: { en: '10 to 12 hours', hi: '10 से 12 घंटे', mr: '१० ते १२ तास' } },
      { id: 'opt_4', text: { en: '2 to 3 hours with afternoon naps', hi: 'दोपहर में झपकी के साथ 2-3 घंटे', mr: 'दुपारी थोडी झोप घेऊन २-३ तास' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: 'Getting 7 to 8 hours of uninterrupted sleep every night gives your heart and brain the rest they need to repair, lowering your risk of high blood pressure, diabetes, and fatigue.',
      hi: '7 से 8 घंटे की नियमित नींद वयस्कों के लिए सबसे अच्छी है। 6 घंटे से कम सोने से हाई बीपी, मोटापा, डायबिटीज और कमजोरी का खतरा बढ़ जाता है।',
      mr: 'प्रौढ व्यक्तीसाठी दररोज ७ ते ८ तासांची शांत झोप आवश्यक असते. नियमित कमी झोपल्यास उच्च रक्तदाब, लठ्ठपणा आणि थकवा जाणवू लागतो.'
    },
    source: 'Indian Society for Sleep Research & National Sleep Foundation Guidelines',
    hint: {
      en: 'Think of roughly one-third of the 24-hour day spent sleeping.',
      hi: '24 घंटे के एक-तिहाई हिस्से के बारे में सोचें जो सोने के लिए जरूरी माना जाता है।',
      mr: '२४ तासांपैकी सुमारे एक तृतीयांश वेळ झोपेसाठी आवश्यक मानला जातो.'
    }
  },
  {
    id: 'quiz_handwashing_seconds',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'For at least how many seconds should you scrub your hands with soap and water to wash away disease germs?',
      hi: 'कीटाणुओं को साफ करने के लिए साबुन और पानी से कम से कम कितने सेकंड तक हाथ रगड़ना जरूरी है?',
      mr: 'हातावरील जंतू धुवून काढण्यासाठी साबण आणि पाण्याने किमान किती सेकंद हात चोळणे आवश्यक आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: '3 to 5 seconds (quick splash)', hi: '3 से 5 सेकंड (केवल पानी छिड़कना)', mr: '३ ते ५ सेकंद (केवळ पाणी मारणे)' } },
      { id: 'opt_2', text: { en: 'At least 20 seconds', hi: 'कम से कम 20 सेकंड', mr: 'किमान २० सेकंद' } },
      { id: 'opt_3', text: { en: 'Exactly 2 minutes', hi: 'पूरे 2 मिनट', mr: 'पूर्ण २ मिनिटे' } },
      { id: 'opt_4', text: { en: 'Soap is optional if water is warm', hi: 'यदि पानी गर्म हो तो साबुन की जरूरत नहीं', mr: 'पाणी कोमट असल्यास साबणाची गरज नाही' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: 'Scrubbing with soap and water for at least 20 seconds (roughly the time it takes to sing "Happy Birthday" twice) breaks down grease and lifts away bacteria and viruses from your palms, fingers, and nails.',
      hi: 'कम से कम 20 सेकंड तक साबुन से हाथ रगड़ने से वायरस और बैक्टीरिया साफ हो जाते हैं। केवल पानी से जल्दी में हाथ धोने से कीटाणु नहीं हटते।',
      mr: 'किमान २० सेकंद साबणाने हात चोळल्याने हातावरील सर्व जंतू निघून जातात. फक्त पाण्याने हात धुतल्यास जंतू नष्ट होत नाहीत.'
    },
    source: 'World Health Organization (WHO) Hand Hygiene Guidelines',
    hint: {
      en: 'It takes about as long as singing the "Happy Birthday" song twice at a normal pace.',
      hi: 'दो बार "हैप्पी बर्थडे" गाने में जितना समय लगता है, उतना समय सोचें।',
      mr: 'दोन वेळा "हॅपी बर्थडे" गाणे म्हणायला जेवढा वेळ लागतो तेवढा वेळ लक्षात ठेवा.'
    }
  },
  {
    id: 'quiz_fasting_blood_glucose',
    mode: 'knowledge_quiz',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Before giving a fasting blood sugar test for diabetes, how many hours should you fast overnight?',
      hi: 'डायबिटीज की जांच के लिए खाली पेट (फास्टिंग) ब्लड शुगर टेस्ट कराने से पहले कितने घंटे का उपवास जरूरी है?',
      mr: 'मधुमेहाच्या निदानासाठी उपाशीपोटी रक्तातील साखर तपासण्यापूर्वी किती तास उपाशी राहणे गरजेचे असते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Fast for 8 to 12 hours overnight (only plain water is permitted)', hi: 'रात भर 8 से 12 घंटे का उपवास रखें (केवल सादा पानी पीने की छूट है)', mr: 'रात्रभर ८ ते १२ तास उपाशी राहावे (फक्त साधे पाणी पिण्यास परवानगी असते)' } },
      { id: 'opt_2', text: { en: 'Eat a sweet biscuit and milk 30 minutes before the blood draw', hi: 'रक्त निकालने से 30 मिनट पहले एक मीठा बिस्कुट और दूध ले सकते हैं', mr: 'रक्त देण्यापूर्वी ३० मिनिटे आधी गोड बिस्किट आणि दूध खाऊ शकता' } },
      { id: 'opt_3', text: { en: 'Fast for 24 full hours without drinking even water', hi: 'बिना पानी पिए पूरे 24 घंटे का कड़ा निर्जला उपवास रखें', mr: 'पाणीही न पिता सलग २४ तास कडक उपवास करावा' } },
      { id: 'opt_4', text: { en: 'Drink two cups of sweetened masala tea upon waking up', hi: 'सुबह उठते ही दो कप मीठी मसाला चाय पीकर जाएं', mr: 'सकाळी उठल्याबरोबर दोन कप गोड चहा प्यावा' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'An 8 to 12-hour overnight fast gives an accurate baseline blood sugar reading. Drinking plain water is fine and keeps you hydrated, but tea, coffee, milk, or biscuits will cause a false high reading.',
      hi: 'फास्टिंग शुगर जांच के लिए रात में 8 से 12 घंटे तक कुछ न खाना जरूरी है। आप सादा पानी पी सकते हैं, लेकिन चाय, कॉफी, दूध या बिस्किट लेने से रिपोर्ट गलत आ सकती है।',
      mr: 'उपाशीपोटी रक्ताच्या तपासणीसाठी ८ ते १२ तास काहीही न खाणे आवश्यक असते. साधे पाणी पिण्यास हरकत नसते, पण चहा, दूध किंवा बिस्किट खाल्ल्यास निकाल चुकीचा येऊ शकतो.'
    },
    source: 'ICMR Guidelines for Management of Type 2 Diabetes in India',
    hint: {
      en: 'Think of finishing dinner by 9 PM and giving your blood sample around 8 AM the next morning.',
      hi: 'रात 9 बजे खाना खाकर अगली सुबह 8 बजे ब्लड सैंपल देने का समय सोचें।',
      mr: 'रात्री ९ वाजता जेवून दुसऱ्या दिवशी सकाळी ८ वाजता रक्त देण्याचा कालावधी विचारात घ्या.'
    }
  },
  {
    id: 'quiz_weekly_exercise_target',
    mode: 'knowledge_quiz',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'How much moderate exercise (like brisk walking or cycling) should an adult aim for each week to keep their heart healthy?',
      hi: 'दिल को स्वस्थ रखने के लिए वयस्कों को प्रति सप्ताह कम से कम कितने समय की मध्यम कसरत (जैसे तेज चाल) करनी चाहिए?',
      mr: 'हृदय निरोगी ठेवण्यासाठी प्रौढ व्यक्तींनी दर आठवड्याला किमान किती वेळ मध्यम स्वरूपाचा व्यायाम (उदा. वेगाने चालणे) केला पाहिजे?'
    },
    options: [
      { id: 'opt_1', text: { en: '15 minutes once every two weeks', hi: 'दो सप्ताह में एक बार केवल 15 मिनट', mr: 'दोन आठवड्यांतून एकदा फक्त १५ मिनिटे' } },
      { id: 'opt_2', text: { en: 'At least 150 minutes per week (e.g., 30 mins, 5 days a week)', hi: 'प्रति सप्ताह कम से कम 150 मिनट (जैसे 30 मिनट, हफ्ते में 5 दिन)', mr: 'दर आठवड्याला किमान १५० मिनिटे (उदा. दिवसाला ३० मिनिटे, आठवड्यातून ५ दिवस)' } },
      { id: 'opt_3', text: { en: '3 hours of intense running every day without rest', hi: 'बिना आराम किए रोजाना 3 घंटे तेज दौड़ना', mr: 'विश्रांती न घेता दररोज ३ तास धावणे' } },
      { id: 'opt_4', text: { en: 'Exercise is unnecessary if you stand while working', hi: 'खड़े होकर काम करने पर कसरत की कोई जरूरत नहीं', mr: 'उभे राहून काम केल्यास व्यायामाची गरज नसते' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: 'Walking briskly for 30 minutes a day, 5 days a week adds up to 150 minutes. This simple weekly habit strengthens your heart, lowers blood pressure, and helps balance blood sugar.',
      hi: 'हृदय को स्वस्थ रखने के लिए हफ्ते में कम से कम 150 मिनट (जैसे रोजाना 30 मिनट तेज चाल, 5 दिन) चलना जरूरी है। इससे बीपी और शुगर दोनों नियंत्रित रहते हैं।',
      mr: 'हृदय निरोगी ठेवण्यासाठी आठवड्यातून किमान १५० मिनिटे (दिवसाला ३० मिनिटे, आठवड्यातून ५ दिवस) वेगाने चालणे उत्तम आहे. यामुळे रक्तदाब आणि साखर नियंत्रणात राहते.'
    },
    source: 'WHO Guidelines on Physical Activity & ICMR Health Guidance',
    hint: {
      en: 'Think of 30 minutes a day for 5 weekdays: 30 × 5 = ?',
      hi: 'हफ्ते में 5 दिन, रोज 30 मिनट: 30 × 5 का हिसाब लगाएं।',
      mr: 'आठवड्यातून ५ दिवस रोज ३० मिनिटे: ३० × ५ चा हिशोब करा.'
    }
  },
  {
    id: 'quiz_deworming_albendazole',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'On National Deworming Day in Indian schools and Anganwadis, which chewable tablet is given to children to treat stomach worms?',
      hi: 'राष्ट्रीय कृमि मुक्ति दिवस पर स्कूलों और आंगनवाड़ियों में बच्चों के पेट के कीड़े मारने के लिए कौन सी मीठी गोली दी जाती है?',
      mr: 'शाळा आणि अंगणवाड्यांमध्ये बालकांना पोटातील जंतांचा नायनाट करण्यासाठी कोणती गोळी दिली जाते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Albendazole (400 mg chewable tablet)', hi: 'अल्बेंडाजोल (400 मिग्रा चबाने वाली गोली)', mr: 'अल्बेंडाझोल (४०० मिग्रॅ चावून खाण्याची गोळी)' } },
      { id: 'opt_2', text: { en: 'Amoxicillin antibiotic capsule', hi: 'एमोक्सिसिलिन एंटीबायोटिक कैप्सूल', mr: 'अमोक्सिसिलिन अँटिबायोटिक कॅप्सूल' } },
      { id: 'opt_3', text: { en: 'Aspirin tablet', hi: 'एस्पिरिन की गोली', mr: 'अॅस्पिरिनची गोळी' } },
      { id: 'opt_4', text: { en: 'Vitamin D3 injection', hi: 'विटामिन डी3 का इंजेक्शन', mr: 'व्हिटॅमिन D३ चे इंजेक्शन' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Albendazole is a safe, single chewable tablet given to children twice a year. It clears intestinal worms, protecting children from anemia, malnutrition, and stomach pain.',
      hi: 'अल्बेंडाजोल (400 मिग्रा) एक सुरक्षित दवा है जो बच्चों के पेट के कीड़े मारकर खून की कमी और कमजोरी से बचाती है। यह स्कूलों में मुफ्त दी जाती है।',
      mr: 'अल्बेंडाझोल ही जंतांवर गुणकारी गोळी आहे, जी मुलांमधील अशक्तपणा आणि कुपोषण रोखण्यासाठी मोफत दिली जाते.'
    },
    source: 'National Deworming Day Operational Guidelines, MoHFW, Government of India',
    hint: {
      en: 'The name of this chewable tablet begins with "A" and ends in "zole".',
      hi: 'इस चबाने वाली गोली का नाम "अ" से शुरू होता है (Albendazole)।',
      mr: 'या गोळीचे नाव "अ" (Albendazole) अक्षरावरून सुरू होते.'
    }
  },
  {
    id: 'quiz_ors_preparation_ratio',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'What is the correct way to mix a standard packet of Oral Rehydration Salts (ORS) at home during diarrhea or dehydration?',
      hi: 'दस्त (डायरिया) या डिहाइड्रेशन में ओआरएस (ORS) के पैकेट का घोल घर पर बनाने का सही तरीका क्या है?',
      mr: 'अतिसार किंवा डिहायड्रेशनच्या वेळी ओआरएस (ORS) चे पाकीट पाण्यात मिसळण्याची अचूक पद्धत कोणती आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Dissolve the entire standard packet into exactly 1 liter of clean drinking water', hi: 'पूरे पैकेट को ठीक 1 लीटर साफ पीने के पानी में पूरी तरह घोलें', mr: 'संपूर्ण पाकीट नेमके १ लिटर स्वच्छ पिण्याच्या पाण्यात विरघळवावे' } },
      { id: 'opt_2', text: { en: 'Mix half a spoon in a tiny cup of concentrated milk', hi: 'आधा चम्मच पाउडर को थोड़े से गाढ़े दूध में मिलाएं', mr: 'अर्धा चमचा पावडर एका कप घट्ट दुधात मिसळावी' } },
      { id: 'opt_3', text: { en: 'Swallow the dry powder directly and wash down with soda', hi: 'सूखा पाउडर सीधे फांक लें और ऊपर से कोल्ड ड्रिंक पिएं', mr: 'कोरडी पावडर थेट तोंडात टाकून वरून कोल्ड्रिंक प्यावे' } },
      { id: 'opt_4', text: { en: 'Boil the powder in 5 liters of sweet syrup', hi: 'पाउडर को 5 लीटर चाशनी में खौलाएं', mr: '५ लिटर साखरेच्या पाकात पावडर उकळावी' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Standard ORS packets are formulated to be mixed in exactly 1 liter (1000 ml) of clean drinking water. Adding too little water makes the solution too concentrated and can worsen diarrhea, while too much water makes it less effective.',
      hi: 'ओआरएस के पूरे पैकेट को ठीक 1 लीटर साफ पानी में ही घोलना चाहिए। कम पानी में मिलाने से घोल बहुत गाढ़ा हो जाता है जो दस्त को और बढ़ा सकता है। इसे कभी दूध या चाय में न मिलाएं।',
      mr: 'ओआरएसचे संपूर्ण पाकीट बरोबर १ लिटर स्वच्छ पाण्यातच विरघळवावे. कमी पाण्यात मिसळल्यास द्रावण घट्ट होऊन अतिसार वाढू शकतो. दुधात किंवा चहामध्ये ओआरएस मिसळू नये.'
    },
    source: 'World Health Organization (WHO) Guidelines on Acute Diarrhea Management',
    hint: {
      en: 'Think of a standard 1-liter reusable water bottle filled to the brim with clean drinking water.',
      hi: 'पानी की सामान्य 1 लीटर वाली बोतल का विचार करें।',
      mr: 'पिण्याच्या पाण्याच्या नेहमीच्या १ लिटरच्या बाटलीचा विचार करा.'
    }
  },
  {
    id: 'quiz_daily_salt_intake_limit',
    mode: 'knowledge_quiz',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'What is the maximum amount of salt a healthy adult should eat in a whole day to prevent high blood pressure?',
      hi: 'हाई ब्लड प्रेशर से बचाव के लिए एक स्वस्थ वयस्क को पूरे दिन में ज्यादा से ज्यादा कितना नमक खाना चाहिए?',
      mr: 'उच्च रक्तदाबापासून संरक्षणासाठी निरोगी प्रौढ व्यक्तीने दिवसभरात जास्तीत जास्त किती मीठ खावे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Less than 5 grams per day (about 1 level teaspoon)', hi: 'प्रतिदिन 5 ग्राम से कम (लगभग 1 छोटा चम्मच)', mr: 'दररोज ५ ग्रॅमपेक्षा कमी (सुमारे १ लहान चमचा)' } },
      { id: 'opt_2', text: { en: 'At least 25 grams per day (4 heaping tablespoons)', hi: 'प्रतिदिन कम से कम 25 ग्राम (4 बड़े चम्मच)', mr: 'दररोज किमान २५ ग्रॅम (४ मोठे चमचे)' } },
      { id: 'opt_3', text: { en: 'Zero salt forever (no sodium at all in human diet)', hi: 'जीवनभर नमक पूरी तरह बंद', mr: 'आयुष्यभर मीठ पूर्ण बंद' } },
      { id: 'opt_4', text: { en: '100 grams for active manual laborers', hi: 'श्रम करने वालों के लिए 100 ग्राम', mr: 'कष्टकरी व्यक्तींसाठी १०० ग्रॅम' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Health experts advise limiting total dietary salt to less than 5 grams a day (about one level teaspoon). Watch out for hidden salt in pickles, papads, namkeens, and packaged snacks, which easily push intake too high.',
      hi: 'रोजाना 5 ग्राम (लगभग एक छोटा चम्मच) से कम नमक खाना चाहिए। अचार, पापड़ और नमकीन में बहुत अधिक नमक छिपा होता है, जिससे बीपी और दिल की बीमारियों का खतरा बढ़ता है।',
      mr: 'दररोज ५ ग्रॅमपेक्षा (सुमारे एक लहान चमचा) कमी मीठ खाणे योग्य आहे. लोणचे, पापड आणि फरसाणमध्ये भरपूर मीठ लपलेले असते, ज्यामुळे रक्तदाब वाढू शकतो.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, 2024 & WHO Salt Reduction Facts',
    hint: {
      en: 'The recommended daily limit fits comfortably on a single standard level teaspoon.',
      hi: 'पूरे दिन का नमक एक छोटे चम्मच में समा जाना चाहिए।',
      mr: 'संपूर्ण दिवसाचे मीठ एका लहान चमच्यात बसेल एवढे असावे.'
    }
  },
  {
    id: 'quiz_normal_resting_blood_pressure',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'What is considered a healthy normal resting blood pressure reading for a seated adult?',
      hi: 'शांत बैठे किसी स्वस्थ वयस्क का सामान्य ब्लड प्रेशर (बीपी) कितना होना चाहिए?',
      mr: 'शांत बसलेल्या निरोगी प्रौढ व्यक्तीचा सर्वसाधारण सामान्य रक्तदाब (BP) किती असणे अपेक्षित आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Less than 120/80 mmHg', hi: '120/80 mmHg से कम', mr: '१२०/८० mmHg पेक्षा कमी' } },
      { id: 'opt_2', text: { en: '180/110 mmHg', hi: '180/110 mmHg', mr: '१८०/११० mmHg' } },
      { id: 'opt_3', text: { en: '60/30 mmHg', hi: '60/30 mmHg', mr: '६०/३० mmHg' } },
      { id: 'opt_4', text: { en: 'Healthy people have zero blood pressure', hi: 'स्वस्थ लोगों में ब्लड प्रेशर होता ही नहीं', mr: 'निरोगी व्यक्तींमध्ये रक्तदाब नसतोच' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'A resting blood pressure below 120/80 mmHg is normal and healthy. Readings that consistently stay at or above 140/90 mmHg are considered hypertension (high blood pressure) and need medical care.',
      hi: 'सामान्य बीपी 120/80 mmHg से कम माना जाता है। यदि बीपी लगातार 140/90 या उससे ऊपर बना रहे, तो इसे हाई ब्लड प्रेशर कहा जाता है और डॉक्टर को दिखाना जरूरी होता है।',
      mr: 'सामान्य रक्तदाब १२०/८० mmHg पेक्षा कमी मानला जातो. रक्तदाब सतत १४०/९० पेक्षा जास्त राहिल्यास त्याला उच्च रक्तदाब म्हणतात आणि डॉक्टरांचा सल्ला घेणे गरजेचे असते.'
    },
    source: 'Indian Hypertension Control Initiative (IHCI) & Cardiological Society of India',
    hint: {
      en: 'Remember the classic standard benchmark numbers: 120 over 80.',
      hi: 'पारंपरिक मानक संख्या 120 और 80 को याद करें।',
      mr: '१२० आणि ८० हे नेहमी ऐकण्यात येणारे मानक आकडे आठवा.'
    }
  },
  {
    id: 'quiz_sunlight_vitamin_synthesis',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Which essential vitamin does your skin naturally make when exposed to gentle morning sunlight?',
      hi: 'सुबह की धूप में त्वचा के संपर्क में आने पर शरीर में किस आवश्यक विटामिन का प्राकृतिक निर्माण होता है?',
      mr: 'सकाळच्या कोवळ्या उन्हात त्वचेवर कोणत्या आवश्यक जीवनसत्त्वाची निर्मिती होते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Vitamin D', hi: 'विटामिन D (Vitamin D)', mr: 'व्हिटॅमिन D (Vitamin D)' } },
      { id: 'opt_2', text: { en: 'Vitamin C', hi: 'विटामिन C (Vitamin C)', mr: 'व्हिटॅमिन C (Vitamin C)' } },
      { id: 'opt_3', text: { en: 'Vitamin B12', hi: 'विटामिन B12 (Vitamin B12)', mr: 'व्हिटॅमिन B12 (Vitamin B12)' } },
      { id: 'opt_4', text: { en: 'Vitamin K', hi: 'विटामिन K (Vitamin K)', mr: 'व्हिटॅमिन K (Vitamin K)' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Sunlight helps your skin make Vitamin D, often called the "sunshine vitamin." Vitamin D is essential for absorbing calcium to keep your bones, teeth, and muscles strong.',
      hi: 'धूप से त्वचा में विटामिन D बनता है। यह हड्डियों में कैल्शियम सोखने, मांसपेशियों की मजबूती और मजबूत रोगप्रतिकारक शक्ति के लिए बहुत जरूरी है।',
      mr: 'उन्हामुळे त्वचेत नैसर्गिकरीत्या व्हिटॅमिन D तयार होते. हाडे मजबूत ठेवण्यासाठी आणि कॅल्शियम शोषण्यासाठी हे जीवनसत्त्व अत्यंत महत्त्वाचे आहे.'
    },
    source: 'ICMR Nutrient Requirements for Indians, 2024',
    hint: {
      en: 'Often called the "Sunshine Vitamin", vital for strong bones and calcium absorption.',
      hi: 'हड्डियों को मजबूत बनाने वाला "धूप का विटामिन" (Sunshine Vitamin)।',
      mr: 'हाडे मजबूत ठेवणारे आणि "उन्हाचे जीवनसत्त्व" (Sunshine Vitamin) म्हणून ओळखले जाणारे व्हिटॅमिन.'
    }
  },
  {
    id: 'quiz_dietary_fiber_benefits',
    mode: 'knowledge_quiz',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'What is the main health benefit of eating dietary fiber found in whole pulses, raw salads, and vegetables?',
      hi: 'दालों, कच्चे सलाद और सब्जियों में पाए जाने वाले फाइबर का मुख्य स्वास्थ्य लाभ क्या है?',
      mr: 'कडधान्ये, सॅलड आणि भाज्यांमध्ये आढळणाऱ्या फायबरचा शरीराला कोणता मुख्य फायदा होतो?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Improves digestion, prevents constipation, and stops rapid blood sugar spikes after meals', hi: 'पाचन सुधारता है, कब्ज रोकता है और भोजन के बाद ब्लड शुगर को अचानक बढ़ने से रोकता है', mr: 'पचन सुधारते, बद्धकोष्ठता रोखते आणि जेवणानंतर रक्तातील साखर वेगाने वाढू देत नाही' } },
      { id: 'opt_2', text: { en: 'Immediately dissolves tooth enamel', hi: 'दांतों की परत को तुरंत घुला देता है', mr: 'दातांचे आवरण लगेच वितळवून टाकते' } },
      { id: 'opt_3', text: { en: 'Replaces the need for drinking water entirely', hi: 'पानी पीने की जरूरत को पूरी तरह समाप्त कर देता है', mr: 'पाणी पिण्याची गरज पूर्णपणे संपवून टाकते' } },
      { id: 'opt_4', text: { en: 'Provides zero nutritional value', hi: 'इसका शरीर के लिए कोई उपयोग नहीं है', mr: 'याचा शरीराला काहीही उपयोग नसतो' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Fiber keeps your digestion smooth and regular, relieves constipation, and slows down how quickly sugar enters your bloodstream, keeping your energy steady.',
      hi: 'फाइबर पाचन को दुरुस्त रखता है, कब्ज से राहत देता है और भोजन के बाद ब्लड शुगर को तेजी से बढ़ने नहीं देता। यह पेट को देर तक भरा रखने में मदद करता है।',
      mr: 'फायबरमुळे अन्न हळूहळू पचते, साखर नियंत्रणात राहते आणि बद्धकोष्ठतेचा त्रास होत नाही. यामुळे पोट दीर्घकाळ भरलेले राहते.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, 2024',
    hint: {
      en: 'Think about how raw cucumber and salads help with easy digestion and keeping you full.',
      hi: 'सोचें कि कच्चा खीरा और सलाद खाने से पेट भरा क्यों रहता है और पेट साफ कैसे रहता है।',
      mr: 'काकडी किंवा सॅलड खाल्ल्याने पोट भरलेले का वाटते आणि पचनाला कशी मदत होते याचा विचार करा.'
    }
  },
  {
    id: 'quiz_cpr_cab_sequence',
    mode: 'knowledge_quiz',
    difficulty: 'hard',
    points: 35,
    question: {
      en: 'If an adult suddenly collapses and is not breathing, what is the most critical first action in CPR (Basic Life Support)?',
      hi: 'यदि कोई व्यक्ति अचानक बेहोश होकर गिर पड़े और सांस न ले रहा हो, तो सीपीआर (CPR) में सबसे पहला और जरूरी कदम क्या है?',
      mr: 'एखादी व्यक्ती अचानक बेशुद्ध पडल्यास आणि श्वास घेत नसल्यास, CPR मधील सर्वात पहिली आणि महत्त्वाची कृती कोणती?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Chest Compressions (pushing hard and fast in the center of the chest)', hi: 'छाती के बीच में दोनों हाथों से तेज और गहरा दबाव देना (कम्प्रेशन)', mr: 'छातीच्या मध्यभागी दोन्ही हातांनी जलद आणि जोरात दाब देणे' } },
      { id: 'opt_2', text: { en: 'Splashing cold water on the forehead', hi: 'माथे पर ठंडा पानी छिड़कना', mr: 'कपाळावर गार पाणी मारणे' } },
      { id: 'opt_3', text: { en: 'Pouring hot tea into their mouth', hi: 'मुंह में गर्म चाय डालना', mr: 'तोंडात गरम चहा घालणे' } },
      { id: 'opt_4', text: { en: 'Waiting quietly for them to wake up', hi: 'चुपचाप बैठकर ठीक होने का इंतजार करना', mr: 'शांत बसून वाट पाहणे' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Pushing hard and fast (100 to 120 times a minute) right in the center of the chest acts like an artificial pump, keeping oxygen-rich blood flowing to the brain until emergency medical help arrives.',
      hi: 'सीपीआर में सबसे पहले छाती के बीच में दोनों हाथों से तेज और गहरा दबाव (100-120 बार प्रति मिनट) देना सबसे जरूरी है। इससे दिल से दिमाग तक खून पहुंचता रहता है और जान बच सकती है।',
      mr: 'CPR मध्ये सर्वप्रथम छातीच्या मध्यभागी जलद आणि जोरकस दाब (१०० ते १२० दाब प्रति मिनिट) देणे जीवनरक्षक ठरते, ज्यामुळे मेंदूपर्यंत रक्तपुरवठा सुरू राहतो.'
    },
    source: 'Indian Resuscitation Council (IRC) Cardiopulmonary Life Support Guidelines',
    hint: {
      en: 'What manual action acts as an artificial pump to keep blood circulating to the brain?',
      hi: 'हाथों से छाती पर दबाव देकर दिल को पंप करने की क्रिया को क्या कहते हैं?',
      mr: 'मेंदूपर्यंत रक्त पोहोचवण्यासाठी हाताने छातीवर दाब देण्याच्या कृतीला काय म्हणतात?'
    }
  },
  {
    id: 'quiz_uip_birth_vaccine_tb',
    mode: 'knowledge_quiz',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Under India’s vaccination schedule, which vaccine is given to newborn babies at birth to protect against severe tuberculosis (TB)?',
      hi: 'भारत के सरकारी टीकाकरण कार्यक्रम के तहत नवजात शिशु को जन्म के समय टीबी (क्षयरोग) से बचाने के लिए कौन सा टीका लगाया जाता है?',
      mr: 'भारताच्या लसीकरण कार्यक्रमानुसार नवजात बालकाला जन्माच्या वेळी क्षयरोगापासून (TB) संरक्षणासाठी कोणती लस दिली जाते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'BCG vaccine', hi: 'बीसीजी टीका (BCG vaccine)', mr: 'बीसीजी लस (BCG vaccine)' } },
      { id: 'opt_2', text: { en: 'Rabies vaccine', hi: 'रेबीज का टीका', mr: 'रेबीजची लस' } },
      { id: 'opt_3', text: { en: 'Typhoid vaccine', hi: 'टाइफाइड का टीका', mr: 'टायफॉईडची लस' } },
      { id: 'opt_4', text: { en: 'Tetanus booster', hi: 'टिटनेस का टीका', mr: 'धनुर्वाताचे इंजेक्शन' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'The BCG vaccine is given right after birth on the baby’s left upper arm. It provides vital protection against severe, life-threatening forms of tuberculosis in young children.',
      hi: 'बीसीजी (BCG) का टीका नवजात शिशुओं को जन्म के तुरंत बाद बाएं बाजू पर लगाया जाता है। यह बच्चों को दिमागी टीबी और गंभीर क्षयरोग से सुरक्षा देता है।',
      mr: 'बीसीजी (BCG) ही लस बालकाला जन्मतः डाव्या दंडावर दिली जाते. ही लस लहान मुलांमधील मेंदूचा टीबी आणि गंभीर क्षयरोगापासून संरक्षण करते.'
    },
    source: 'Universal Immunization Programme (UIP) Schedule, MoHFW, Government of India',
    hint: {
      en: 'A three-letter vaccine (B-C-G) that leaves a small mark on the upper left arm.',
      hi: 'तीन अक्षरों का टीका (B-C-G) जिसका छोटा सा निशान अक्सर बाएं बाजू पर रह जाता है।',
      mr: 'तीन अक्षरी लस (BCG) जिचा एक लहान व्रण डाव्या हातावर कायम राहतो.'
    }
  },
  {
    id: 'quiz_anemia_definition',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'What is Anemia, a common health condition that causes weakness and tiredness in many women and children?',
      hi: 'एनीमिया (खून की कमी) क्या है, जो अक्सर महिलाओं और बच्चों में कमजोरी और थकान का कारण बनती है?',
      mr: 'ॲनिमिया (रक्तक्षय) म्हणजे काय, ज्याच्यामुळे महिला आणि बालकांमध्ये थकवा जाणवतो?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Having lower red blood cells or hemoglobin, meaning the body gets less oxygen', hi: 'खून में हीमोग्लोबिन या लाल रक्त कोशिकाओं की कमी, जिससे शरीर को ऑक्सीजन कम मिलती है', mr: 'रक्तातील हिमोग्लोबिन किंवा लाल रक्तपेशींची कमतरता, ज्यामुळे शरीराला ऑक्सिजन कमी पडतो' } },
      { id: 'opt_2', text: { en: 'Having too much blood stored in the liver', hi: 'लिवर में बहुत अधिक खून जमा हो जाना', mr: 'यकृतामध्ये अती प्रमाणात रक्त साठणे' } },
      { id: 'opt_3', text: { en: 'An allergy to drinking plain water', hi: 'सादा पानी पीने से होने वाली एलर्जी', mr: 'पाणी पिण्याची ॲलर्जी असणे' } },
      { id: 'opt_4', text: { en: 'A fractured leg bone', hi: 'पैर की हड्डी टूटना', mr: 'पायाचे हाड मोडणे' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Hemoglobin in red blood cells carries oxygen to all parts of your body. When hemoglobin levels drop too low, you feel easily tired, dizzy, pale, and short of breath.',
      hi: 'एनीमिया हीमोग्लोबिन की कमी को कहते हैं। इससे शरीर के अंगों तक ऑक्सीजन ठीक से नहीं पहुंच पाती, जिससे लगातार थकान, चक्कर आना, कमजोरी और सांस फूलना महसूस होता है।',
      mr: 'ॲनिमिया म्हणजे रक्तातील हिमोग्लोबिनची कमतरता. यामुळे अवयवांपर्यंत पुरेसा ऑक्सिजन पोहोचत नाही, परिणामी तीव्र थकवा, धाप लागणे आणि चक्कर येणे असा त्रास होतो.'
    },
    source: 'Anemia Mukt Bharat Guidelines, Ministry of Health and Family Welfare',
    hint: {
      en: 'Think about hemoglobin in red blood cells and its job of carrying oxygen across the body.',
      hi: 'लाल रक्त कोशिकाओं में मौजूद हीमोग्लोबिन और ऑक्सीजन ले जाने के उसके काम के बारे में सोचें।',
      mr: 'लाल रक्तपेशींमधील हिमोग्लोबिन आणि त्याचे ऑक्सिजन वहनाचे कार्य आठवा.'
    }
  },
  {
    id: 'quiz_iron_deficiency_foods',
    mode: 'knowledge_quiz',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'To help your body better absorb iron from green vegetables (like palak) and lentils, what should you add to your meal?',
      hi: 'पालक और दालों में मौजूद आयरन (लोहा) को शरीर में अच्छी तरह सोखने के लिए भोजन में क्या शामिल करना चाहिए?',
      mr: 'पालक आणि डाळींमधील लोह (Iron) शरीराने उत्तम शोषून घेण्यासाठी जेवणात काय घालणे फायदेशीर ठरते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Vitamin C (such as fresh lemon juice, amla, or tomatoes)', hi: 'विटामिन सी (जैसे ताजा नींबू का रस, आंवला या टमाटर)', mr: 'व्हिटॅमिन C (जसे की ताजे लिंबू, आवळा किंवा टोमॅटो)' } },
      { id: 'opt_2', text: { en: 'Strong black tea with high tannins', hi: 'कड़क काली चाय', mr: 'कडक काळा चहा' } },
      { id: 'opt_3', text: { en: 'Pure refined white table sugar', hi: 'केवल सफेद चीनी', mr: 'केवळ पांढरी साखर' } },
      { id: 'opt_4', text: { en: 'No food helps with iron absorption', hi: 'कोई भी चीज आयरन सोखने में मदद नहीं करती', mr: 'कोणताही पदार्थ मदत करत नाही' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Vitamin C helps your gut absorb iron from vegetables and dals. Squeezing fresh lemon juice over your dal or having amla with meals boosts iron uptake and fights anemia. Avoid drinking tea immediately after meals.',
      hi: 'विटामिन सी (नींबू, आंवला, संतरा) दाल और हरी सब्जियों के आयरन को सोखने में मदद करता है। दाल में नींबू निचोड़कर खाने से खून तेजी से बनता है। खाने के तुरंत बाद चाय न पिएं।',
      mr: 'व्हिटॅमिन सी (लिंबू, आवळा) भाज्यांमधील लोह शरीरात शोषण्यास मदत करते. डाळ किंवा भाज्यांवर लिंबू पिळल्यास शरीराला भरपूर लोह मिळते. जेवणानंतर लगेच चहा पिणे टाळावे.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, 2024 & Anemia Mukt Bharat',
    hint: {
      en: 'Think of the traditional Indian habit of squeezing fresh nimbu (lemon) juice over hot dal.',
      hi: 'दाल या सलाद पर ताजा नींबू निचोड़ने की अच्छी आदत को याद करें।',
      mr: 'वरण-भातावर किंवा सॅलडवर ताजे लिंबू पिळण्याच्या पद्धतीचा विचार करा.'
    }
  },
  {
    id: 'quiz_pulse_oximeter_reading',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'What is the normal blood oxygen reading (SpO2) for a healthy person breathing regular room air on a finger pulse oximeter?',
      hi: 'पल्स ऑक्सीमीटर से जांचने पर कमरे की सामान्य हवा में किसी स्वस्थ व्यक्ति का ऑक्सीजन स्तर (SpO2) कितना होना चाहिए?',
      mr: 'पल्स ऑक्सिमीटरने बोटावर तपासल्यास सामान्य हवेत निरोगी माणसाचे ऑक्सिजनचे प्रमाण (SpO2) किती असणे अपेक्षित आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: '95% to 100%', hi: '95% से 100%', mr: '९५% ते १००%' } },
      { id: 'opt_2', text: { en: '50% to 60%', hi: '50% से 60%', mr: '५०% ते ६०%' } },
      { id: 'opt_3', text: { en: 'Always exactly 0%', hi: 'हमेशा 0%', mr: 'नेहमी ०%' } },
      { id: 'opt_4', text: { en: 'Above 150%', hi: '150% से ऊपर', mr: '१५०% पेक्षा जास्त' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'A normal oxygen saturation reading for a healthy adult is between 95% and 100%. If your oxygen level drops below 94%, see a doctor, and anything under 90% is a medical emergency needing oxygen support.',
      hi: 'स्वस्थ व्यक्ति का ऑक्सीजन स्तर 95% से 100% के बीच होता है। 94% से कम ऑक्सीजन होना चिंता की बात है और 90% से नीचे जाने पर तुरंत अस्पताल जाना चाहिए।',
      mr: 'निरोगी माणसाच्या रक्तातील ऑक्सिजनचे प्रमाण ९५% ते १००% च्या दरम्यान असते. हे प्रमाण ९४% पेक्षा कमी झाल्यास डॉक्टरांचा सल्ला घ्यावा आणि ९०% पेक्षा कमी झाल्यास तात्काळ उपचारांची गरज असते.'
    },
    source: 'AIIMS Clinical Guidelines on Pulse Oximetry & WHO Health Protocols',
    hint: {
      en: 'Doctors recommend that healthy oxygen readings should stay well in the upper 90s.',
      hi: 'डॉक्टरों द्वारा 95 से ऊपर के सुरक्षित ऑक्सीजन स्तर की सलाह को याद करें।',
      mr: 'डॉक्टरांनी सांगितलेली ९५ च्या वरची सुरक्षित ऑक्सिजनची पातळी आठवा.'
    }
  },
  {
    id: 'quiz_annual_screening_age',
    mode: 'knowledge_quiz',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Under Indian health guidelines, at what age should every adult start getting regular yearly screenings for high BP and diabetes?',
      hi: 'सरकारी स्वास्थ्य दिशानिर्देशों के अनुसार, किस उम्र से हर व्यक्ति को हाई बीपी और डायबिटीज की सालाना नियमित जांच शुरू कर देनी चाहिए?',
      mr: 'आरोग्य नियमांनुसार, प्रत्येकाने कोणत्या वयापासून उच्च रक्तदाब आणि मधुमेहाची वार्षिक नियमित तपासणी सुरू केली पाहिजे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Starting at age 30', hi: '30 वर्ष की उम्र से', mr: 'वयाच्या ३० व्या वर्षापासून' } },
      { id: 'opt_2', text: { en: 'Only after turning 75', hi: 'केवल 75 वर्ष की उम्र के बाद', mr: 'केवळ वयाच्या ७५ वर्षानंतर' } },
      { id: 'opt_3', text: { en: 'Never unless admitted to an ICU', hi: 'अस्पताल में भर्ती होने से पहले कभी नहीं', mr: 'रुग्णालयात दाखल होईपर्यंत कधीही नाही' } },
      { id: 'opt_4', text: { en: 'At age 5 for young toddlers', hi: '5 वर्ष के छोटे बच्चों के लिए', mr: '५ वर्षांच्या लहान मुलांसाठी' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'The Ministry of Health recommends that every adult aged 30 and older get checked once a year for blood pressure and blood sugar. Catching these early prevents serious damage to your heart, kidneys, and eyes.',
      hi: 'स्वास्थ्य मंत्रालय 30 वर्ष या उससे अधिक उम्र के सभी लोगों को बीपी और शुगर की साल में एक बार जांच कराने की सलाह देता है ताकि बीमारी को शुरू में ही काबू किया जा सके।',
      mr: 'वयाच्या ३० व्या वर्षापासून प्रत्येकाने दरवर्षी रक्तदाब आणि साखरेची नियमित तपासणी केली पाहिजे, जेणेकरून आजार वाढण्यापूर्वीच त्यावर नियंत्रण ठेवता येते.'
    },
    source: 'National Programme for Non-Communicable Diseases, MoHFW, Government of India',
    hint: {
      en: 'Think of the milestone age that marks the start of full adulthood: thirty.',
      hi: 'वयस्कता के 30वें पड़ाव के बारे में सोचें।',
      mr: '३० वर्षे हे वय लक्षात ठेवा.'
    }
  },
  {
    id: 'quiz_hba1c_target_concept',
    mode: 'knowledge_quiz',
    difficulty: 'hard',
    points: 35,
    question: {
      en: 'What does the Glycated Hemoglobin (HbA1c) blood test measure in a person with diabetes?',
      hi: 'डायबिटीज के मरीजों में होने वाले एचबीए1सी (HbA1c) टेस्ट से क्या पता चलता है?',
      mr: 'मधुमेहाच्या रुग्णांमध्ये HbA1c ही रक्ताची चाचणी नेमके काय तपासते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'The average blood sugar level over the past 2 to 3 months', hi: 'पिछले 2 से 3 महीनों का औसत ब्लड शुगर स्तर', mr: 'मागील २ ते ३ महिन्यांमधील रक्तातील साखरेची सरासरी पातळी' } },
      { id: 'opt_2', text: { en: 'The blood sugar level at the exact second the needle touches the skin', hi: 'सुई चुभते समय उस एक सेकंड का शुगर स्तर', mr: 'सुई टोचताना त्या एका सेकंदातील साखरेची पातळी' } },
      { id: 'opt_3', text: { en: 'The level of calcium stored in the teeth', hi: 'दांतों में जमा कैल्शियम', mr: 'दातांमधील कॅल्शियमचे प्रमाण' } },
      { id: 'opt_4', text: { en: 'The amount of water drunk in the past 10 minutes', hi: 'पिछले 10 मिनट में पिया गया पानी', mr: 'गेल्या १० मिनिटांत पिलेले पाणी' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Sugar sticks to red blood cells for their entire 3-month lifespan. The HbA1c test gives a reliable 2 to 3 month average of your blood sugar, showing how well your diabetes is controlled over time rather than just on one single day.',
      hi: 'HbA1c टेस्ट पिछले 2 से 3 महीनों का औसत शुगर बताता है। यह रोज के खाने-पीने से अचानक नहीं बदलता, जिससे यह पता चलता है कि डायबिटीज कितने अच्छे से नियंत्रित है।',
      mr: 'HbA1c चाचणी मागील २ ते ३ महिन्यांमधील रक्तातील साखरेची सरासरी पातळी दाखवते. ही चाचणी एका दिवसाच्या खाण्यापिण्यावर अवलंबून नसते, त्यामुळे ती अधिक खात्रीशीर असते.'
    },
    source: 'Research Society for the Study of Diabetes in India (RSSDI) Clinical Guidelines',
    hint: {
      en: 'Red blood cells live for about 3 months. How long an average do they reflect?',
      hi: 'लाल रक्त कोशिकाओं का जीवनकाल लगभग 3 महीने होता है। यह टेस्ट उसी समय का औसत बताता है।',
      mr: 'लाल रक्तपेशींचे आयुष्य सुमारे ३ महिने असते. ही चाचणी तेवढ्याच कालावधीची सरासरी मोजते.'
    }
  },
  {
    id: 'quiz_hydration_dehydration_signs',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'What is the most reliable daily sign to check if your body is getting enough water?',
      hi: 'आप पर्याप्त पानी पी रहे हैं या नहीं, यह जानने का सबसे आसान और पक्का दैनिक संकेत कौन सा है?',
      mr: 'तुम्ही पुरेसे पाणी पीत आहात की नाही हे ओळखण्याची सर्वात सोपी आणि अचूक दैनंदिन खूण कोणती?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Urine color: pale light yellow means well hydrated, while dark amber means you need water', hi: 'पेशाब का रंग: हल्का पीला रंग सही पानी दर्शाता है, जबकि गहरा पीला रंग पानी की कमी दर्शाता है', mr: 'लघवीचा रंग: फिकट पिवळा रंग पुरेसे पाणी दर्शवतो, तर गडद पिवळा रंग पाण्याची कमतरता दर्शवतो' } },
      { id: 'opt_2', text: { en: 'Whether your fingernails are painted blue', hi: 'नाखूनों का रंग नीला होना', mr: 'नखे निळी असणे' } },
      { id: 'opt_3', text: { en: 'Sneezing exactly twice every morning', hi: 'रोज सुबह दो बार छींक आना', mr: 'रोज सकाळी दोनदा शिंक येणे' } },
      { id: 'opt_4', text: { en: 'The amount of sweat on your shoelaces', hi: 'जूतों पर पसीना आना', mr: 'बुटांवर घाम येणे' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Urine color is the best practical self-check for hydration. Pale, clear light yellow indicates good hydration. Dark yellow or amber urine means your kidneys are conserving water, and you should drink a glass of water promptly.',
      hi: 'पेशाब का रंग शरीर में पानी की मात्रा का सबसे पक्का संकेत है। हल्का पारदर्शी पीला रंग बताता है कि पानी पर्याप्त है। गहरा पीला रंग आने पर तुरंत पानी पीना चाहिए।',
      mr: 'लघवीचा रंग पाण्याचे प्रमाण ओळखण्याचा सर्वोत्तम मार्ग आहे. फिकट पिवळा रंग योग्य हायड्रेशन दर्शवतो, तर गडद पिवळा रंग दिसल्यास त्वरित पाणी पिणे गरजेचे असते.'
    },
    source: 'National Institute of Nutrition (NIN) Hydration Guidelines',
    hint: {
      en: 'Think of lemonade vs dark apple juice: pale yellow vs dark amber.',
      hi: 'नींबू पानी जैसा हल्का रंग बनाम सेब के जूस जैसा गहरा रंग याद करें।',
      mr: 'लिंबू सरबतासारखा फिकट रंग आणि सफरचंदाच्या रसासारखा गडद रंग विचारात घ्या.'
    }
  },
  {
    id: 'quiz_twenty_twenty_rule',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'What is the "20-20-20 Rule" recommended by eye doctors to protect your eyes from digital screen strain?',
      hi: 'मोबाइल और कंप्यूटर स्क्रीन देखने से आंखों की थकान और सूखेपन से बचने के लिए डॉक्टरों का "20-20-20 नियम" क्या है?',
      mr: 'मोबाईल आणि कॉम्प्युटर स्क्रीनमुळे डोळ्यांवर येणारा ताण टाळण्यासाठी नेत्रतज्ज्ञांचा "२०-२०-२० नियम" कोणता आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Every 20 minutes, look at an object 20 feet away for at least 20 seconds', hi: 'हर 20 मिनट बाद, 20 फीट दूर किसी वस्तु को 20 सेकंड तक देखें', mr: 'दर २० मिनिटांनी, २० फूट अंतरावरील वस्तूवर किमान २० सेकंद लक्ष केंद्रित करावे' } },
      { id: 'opt_2', text: { en: 'Stare at a smartphone screen continuously for 20 hours without blinking', hi: 'बिना पलक झपकाए लगातार 20 घंटे स्क्रीन देखें', mr: 'सलग २० तास स्क्रीनकडे पाहावे' } },
      { id: 'opt_3', text: { en: 'Wash your eyes with hot soapy water 20 times an hour', hi: 'हर घंटे 20 बार गर्म साबुन के पानी से आंखें धोएं', mr: 'दर तासाला २० वेळा डोळे धुवावेत' } },
      { id: 'opt_4', text: { en: 'Drink 20 cups of tea every 20 minutes', hi: 'हर 20 मिनट में 20 कप चाय पिएं', mr: 'दर २० मिनिटांनी २० कप चहा प्यावा' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Staring at close screens keeps your eye muscles tensed and cuts your blinking rate in half. Taking a 20-second break every 20 minutes to look into the distance relaxes your eye muscles and keeps your eyes moist.',
      hi: 'स्क्रीन देखते समय आंखों की मांसपेशियों पर लगातार खिंचाव रहता है और हम पलकें कम झपकाते हैं। हर 20 मिनट में 20 सेकंड के लिए 20 फीट दूर देखने से आंखों को आराम मिलता है।',
      mr: 'स्क्रीनवर काम करताना डोळ्यांची उघडझाप कमी होते आणि स्नायूंवर ताण येतो. दर २० मिनिटांनी २० सेकंदांसाठी २० फूट दूर पाहिल्याने डोळ्यांना आराम मिळतो.'
    },
    source: 'All India Ophthalmological Society (AIOS) Guidance',
    hint: {
      en: 'Three 20s: 20 minutes interval, 20 feet distance, 20 seconds rest.',
      hi: 'तीन 20: 20 मिनट का समय, 20 फीट की दूरी, 20 सेकंड का आराम।',
      mr: 'तीन २० चा मेळ: २० मिनिटे वेळ, २० फूट अंतर, २० सेकंद विश्रांती.'
    }
  },
  {
    id: 'quiz_iodine_deficiency_goiter',
    mode: 'knowledge_quiz',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Which essential mineral is added to packaged edible salt in India to protect thyroid health and prevent goiter (neck swelling)?',
      hi: 'घेंघा (गले की सूजन) और बच्चों में मानसिक कमजोरी को रोकने के लिए खाने के नमक में कौन सा पोषक तत्व मिलाना अनिवार्य है?',
      mr: 'गलगंड (घशाची सूज) आणि मुलांमधील मतिमंदत्व रोखण्यासाठी खाण्याच्या मीठामध्ये कोणते खनिज मिसळणे बंधनकारक आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Iodine', hi: 'आयोडीन (Iodine)', mr: 'आयोडीन (Iodine)' } },
      { id: 'opt_2', text: { en: 'Lead chromate', hi: 'लेड (सीसा)', mr: 'लेड क्रोमेट' } },
      { id: 'opt_3', text: { en: 'Chalk powder', hi: 'चाक पाउडर', mr: 'खडूची पावडर' } },
      { id: 'opt_4', text: { en: 'Pure sulfur crystals', hi: 'सल्फर (गंधक)', mr: 'गंधक' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Your thyroid gland needs iodine to make vital hormones that control energy and growth. Iodized salt is a simple, effective public health step that protects people across India from goiter and developmental delays.',
      hi: 'थायरॉयड ग्रंथि को हार्मोन्स बनाने के लिए आयोडीन की जरूरत होती है। इसकी कमी से गले में घेंघा रोग हो सकता है। इसलिए नमक में आयोडीन मिलाया जाता है।',
      mr: 'थायरॉईड ग्रंथीच्या सुरळीत कार्यासाठी शरीराला आयोडीनची गरज असते. आयोडीनच्या कमतरतेमुळे गलगंड आजार होऊ नये म्हणून मीठामध्ये आयोडीन असणे आवश्यक आहे.'
    },
    source: 'National Iodine Deficiency Disorders Control Programme, MoHFW',
    hint: {
      en: 'Look at almost every commercial salt packet in India: it prominently reads "Iodized Salt".',
      hi: 'नमक के पैकेट पर लिखे शब्द "आयोडीन युक्त नमक" को याद करें।',
      mr: 'मिठाच्या पाकिटावर ठळकपणे लिहिलेले "आयोडीनयुक्त मीठ" आठवा.'
    }
  },
  {
    id: 'quiz_vector_borne_aedes_dengue',
    mode: 'knowledge_quiz',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Which type of mosquito spreads Dengue and Chikungunya by biting mainly during the daytime?',
      hi: 'भारत में दिन के समय काटकर डेंगू और चिकनगुनिया फैलाने वाला मुख्य मच्छर कौन सा है?',
      mr: 'भारतात प्रामुख्याने दिवसा चावून डेंग्यू आणि चिकुनगुनियाचा प्रसार करणारा डास कोणता?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Aedes mosquito (tiger mosquito with black and white striped legs that bites during daylight)', hi: 'एडीज मच्छर (काले-सफेद धारीदार पैरों वाला टाइगर मच्छर जो दिन में काटता है)', mr: 'एडिस डास (पायांवर पांढरे पट्टे असलेला डास, जो दिवसा चावतो)' } },
      { id: 'opt_2', text: { en: 'Anopheles mosquito (active strictly at late night)', hi: 'मादा एनोफिलीज मच्छर (मलेरिया फैलाने वाली)', mr: 'अ‍ॅनोफिलीस डास (मलेरिया पसरवणारा डास)' } },
      { id: 'opt_3', text: { en: 'Common housefly', hi: 'सामान्य घरेलू मक्खी', mr: 'घरातील माशी' } },
      { id: 'opt_4', text: { en: 'Honeybee', hi: 'मधुमक्खी', mr: 'मधमाशी' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'The Aedes mosquito breeds in clean standing water (like in coolers, flower vases, and discarded tires) and bites mainly during daytime hours. Keeping your surroundings free of stagnant water is the best protection.',
      hi: 'एडीज मच्छर साफ जमे हुए पानी (कूलर, गमले, पुराने टायर) में अंडे देता है और दिन के समय काटता है। घर और आसपास पानी जमा न होने देना ही इसका सबसे बड़ा बचाव है।',
      mr: 'एडिस डास घराभोवती साचलेल्या स्वच्छ पाण्यात (कूलर, फुलदाण्या, टायर) वाढतो आणि दिवसा चावतो. पाणी साचू न देणे हाच सर्वोत्तम प्रतिबंधक उपाय आहे.'
    },
    source: 'National Vector Borne Disease Control Programme (NVBDCP) Guidelines',
    hint: {
      en: 'Recognizable by its distinctive black-and-white striped legs, earning it the nickname "tiger mosquito".',
      hi: 'काले और सफेद धारीदार पैरों वाला "टाइगर मच्छर"।',
      mr: 'अंगावर आणि पायांवर पांढरे पट्टे असलेला "टायगर डास".'
    }
  },
  {
    id: 'quiz_amr_superbug_cause',
    mode: 'knowledge_quiz',
    difficulty: 'hard',
    points: 35,
    question: {
      en: 'What is the main reason why antibiotics are stopping to work against common bacterial infections (creating dangerous superbugs)?',
      hi: 'एंटीबायोटिक दवाओं के बेअसर होने (दवा प्रतिरोधकता) और सुपरबग्स के पैदा होने का सबसे बड़ा कारण क्या है?',
      mr: 'अँटिबायोटिक्स औषधे निष्प्रभ होण्याचे आणि घातक सुपरबग्स निर्माण होण्याचे मुख्य कारण काय आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Taking antibiotics for simple viral colds, buying them without a prescription, and stopping the course halfway', hi: 'बिना डॉक्टर की सलाह के एंटीबायोटिक लेना, साधारण जुकाम में खाना और दवा का कोर्स अधूरा छोड़ना', mr: 'डॉक्टरांच्या सल्ल्याशिवाय अँटिबायोटिक्स घेणे, साध्या सर्दीत गोळ्या खाणे आणि कोर्स अर्धवट सोडणे' } },
      { id: 'opt_2', text: { en: 'Drinking boiled filtered water every morning', hi: 'रोज सुबह उबला हुआ पानी पीना', mr: 'रोज सकाळी उकळलेले पाणी पिणे' } },
      { id: 'opt_3', text: { en: 'Exercising in open garden spaces', hi: 'खुले पार्क में टहलना', mr: 'बागेमध्ये व्यायाम करणे' } },
      { id: 'opt_4', text: { en: 'Sleeping 8 hours at night', hi: 'रात में 8 घंटे शांति से सोना', mr: 'रात्री ८ तास शांत झोप घेणे' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Taking antibiotics when you do not need them (like for a viral cold) or stopping your medicine after 2 days allows surviving bacteria to mutate and become resistant. Always complete the full course as prescribed by your doctor.',
      hi: 'सर्दी-जुकाम में अनावश्यक एंटीबायोटिक लेने और थोड़ा ठीक लगते ही 2 दिन में दवा बंद कर देने से बैक्टीरिया दवा के प्रति ढीठ (रेजिस्टेंट) बन जाते हैं। इससे भविष्य में साधारण बीमारियां भी गंभीर हो सकती हैं।',
      mr: 'साध्या सर्दीत अँटिबायोटिक्स घेतल्याने आणि थोडे बरे वाटताच गोळ्या बंद केल्यामुळे जंतू त्या औषधांना सरावतात. त्यामुळे भविष्यात औषधे निष्प्रभ ठरतात. नेहमी डॉक्टरांच्या सल्ल्याने पूर्ण कोर्स घ्यावा.'
    },
    source: 'National Action Plan on Antimicrobial Resistance, MoHFW & WHO Framework',
    hint: {
      en: 'Think of taking antibiotics for a 1-day runny nose or stopping pills as soon as you feel a little better.',
      hi: 'एक दिन की सर्दी में मेडिकल स्टोर से गोली खरीदकर खाने और जल्दी बंद करने की गलत आदत के बारे में सोचें।',
      mr: 'किंचित सर्दी झाली तरी परस्पर अँटिबायोटिक गोळ्या घेऊन खाण्याच्या चुकीच्या सवयीचा विचार करा.'
    }
  },
  {
    id: 'quiz_who_hand_rub_technique',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'When washing your hands with soap, which spots are most frequently missed where germs hide?',
      hi: 'हाथ धोते समय अक्सर छूट जाने वाले वे कौन से हिस्से हैं जहां सबसे ज्यादा कीटाणु छिपे रहते हैं?',
      mr: 'हात धुताना सहसा दुर्लक्षिला जाणारा असा कोणता भाग आहे, जिथे सर्वाधिक जंतू लपलेले असतात?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Fingernails, thumbs, and the spaces between fingers', hi: 'नाखूनों के नीचे, दोनों अंगूठे और उंगलियों के बीच की जगह', mr: 'नखांखालील भाग, दोन्ही अंगठे आणि बोटांमधील फटी' } },
      { id: 'opt_2', text: { en: 'The outer elbow sleeve', hi: 'कोहनी का कपड़ा', mr: 'कोपराचा भाग' } },
      { id: 'opt_3', text: { en: 'The top of the shoulders', hi: 'कंधे', mr: 'खांदे' } },
      { id: 'opt_4', text: { en: 'Only the front tips of the earlobes', hi: 'केवल कान के निचले हिस्से', mr: 'केवळ कानाची पाळी' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Most people only rub their palms together! Studies show that over 80% of germs hide on the thumbs, under fingernails, and in between fingers. Be sure to scrub these areas every time you wash.',
      hi: 'लोग अक्सर सिर्फ हथेलियों को रगड़ते हैं, जबकि 80% से ज्यादा कीटाणु अंगूठों, नाखूनों के नीचे और उंगलियों के बीच छिपे रहते हैं। हाथ धोते समय इन जगहों को खास तौर पर साफ करना चाहिए।',
      mr: 'बहुतांश लोक फक्त तळहात चोळतात. मात्र ८०% हून अधिक जंतू नखांखाली, अंगठ्यावर आणि बोटांच्या फटीत लपलेले असतात. त्यामुळे हे भाग घासून स्वच्छ करणे गरजेचे असते.'
    },
    source: 'WHO Guidelines on Hand Hygiene in Health Care',
    hint: {
      en: 'Think of the spaces between your fingers and the areas underneath your nails.',
      hi: 'उंगलियों के बीच की दरारें और नाखूनों के नीचे की जगह का विचार करें।',
      mr: 'आपल्या बोटांमधील फटी आणि नखांखालील भागाचा विचार करा.'
    }
  },
  {
    id: 'quiz_industrial_trans_fat_harm',
    mode: 'knowledge_quiz',
    difficulty: 'hard',
    points: 35,
    question: {
      en: 'Why do food safety authorities strictly limit industrial trans fats (found in vanaspati and reused frying oil) in packaged foods?',
      hi: 'खाद्य सुरक्षा नियमों में वनस्पति घी और बार-बार गर्म किए गए तेल में ट्रांस-फैट को सीमित रखने का कड़ा नियम क्यों है?',
      mr: 'अन्न सुरक्षा नियमांमध्ये वनस्पती तूप आणि वारंवार उकळलेल्या तेलातील ट्रान्स-फॅट्सवर कडक मर्यादा का घातली आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Trans fats increase "bad" LDL cholesterol and decrease "good" HDL cholesterol, clogging heart arteries', hi: 'ट्रांस-फैट "खराब" कोलेस्ट्रॉल बढ़ाते हैं और "अच्छे" कोलेस्ट्रॉल को घटाते हैं, जिससे हार्ट अटैक का खतरा बढ़ता है', mr: 'ट्रान्स-फॅट्स वाईट कोलेस्ट्रॉल वाढवतात आणि चांगले कोलेस्ट्रॉल कमी करतात, ज्यामुळे हृदयविकाराचा धोका वाढतो' } },
      { id: 'opt_2', text: { en: 'Trans fats turn food bright purple in color', hi: 'ट्रांस-फैट भोजन का रंग चमकीला बैंगनी कर देते हैं', mr: 'ट्रान्स-फॅट्समुळे अन्नाचा रंग जांभळा होतो' } },
      { id: 'opt_3', text: { en: 'Trans fats turn liquids into rock in summer', hi: 'ट्रांस-फैट गर्मियों में भोजन को पत्थर जैसा जमा देते हैं', mr: 'ट्रान्स-फॅट्समुळे उन्हाळ्यात अन्न दगडासारखे घट्ट होते' } },
      { id: 'opt_4', text: { en: 'Trans fats increase running speed in marathons', hi: 'ट्रांस-फैट दौड़ने की गति को तेज कर देते हैं', mr: 'ट्रान्स-फॅट्समुळे धावण्याचा वेग वाढतो' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Industrial trans fats (found in dalda, bakery shortenings, and oil that is fried and refried) are the most harmful dietary fats. They clog arteries by raising bad cholesterol and lowering good cholesterol, greatly increasing heart attack risk.',
      hi: 'ट्रांस-फैट (डालडा, वनस्पति घी, बार-बार खौलाया गया तेल) सबसे नुकसानदेह वसा है। यह धमनियों में रुकावट पैदा करता है, जिससे दिल का दौरा पड़ने का खतरा कई गुना बढ़ जाता है।',
      mr: 'डालडा आणि वारंवार उकळलेले तेल यांमध्ये घातक ट्रान्स-फॅट्स असतात. हे शरीरातील वाईट कोलेस्ट्रॉल वाढवून रक्तवाहिन्यांमध्ये अडथळे निर्माण करतात आणि हृदयविकाराचा धोका वाढवतात.'
    },
    source: 'Food Safety and Standards Authority of India (FSSAI) & WHO REPLACE Guidelines',
    hint: {
      en: 'What unique double-hazard do trans fats cause to your bad (LDL) and good (HDL) cholesterol levels?',
      hi: 'सोचें कि ट्रांस-फैट खराब कोलेस्ट्रॉल को बढ़ाने के साथ-साथ अच्छे कोलेस्ट्रॉल पर क्या बुरा असर डालते हैं।',
      mr: 'ट्रान्स-फॅट्स वाईट कोलेस्ट्रॉल वाढवण्यासोबतच चांगल्या कोलेस्ट्रॉलचे काय नुकसान करतात याचा विचार करा.'
    }
  }
];
