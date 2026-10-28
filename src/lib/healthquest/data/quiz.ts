import { HealthQuestion } from '../types';

export const QUIZ_QUESTIONS: HealthQuestion[] = [
  {
    id: 'quiz_my_plate_greens',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'According to the ICMR-NIN "My Plate for the Day" guideline, what proportion of your total daily food intake should ideally consist of vegetables and fruits?',
      hi: 'ICMR-NIN के "माई प्लेट फॉर द डे" दिशानिर्देश के अनुसार, आपकी दैनिक थाली का कितना हिस्सा फल और सब्जियों से भरा होना चाहिए?',
      mr: 'ICMR-NIN च्या "माय प्लेट" मार्गदर्शक तत्त्वांनुसार, तुमच्या रोजच्या आहारातील किती भाग पालेभाज्या आणि फळांनी व्यापलेला असावा?'
    },
    options: [
      { id: 'opt_1', text: { en: 'About 10% (a tiny side katori)', hi: 'लगभग 10% (केवल एक छोटी कटोरी)', mr: 'सुमारे १०% (फक्त एक लहान वाटी)' } },
      { id: 'opt_2', text: { en: 'About 25% (one quarter)', hi: 'लगभग 25% (एक चौथाई हिस्सा)', mr: 'सुमारे २५% (पाव भाग)' } },
      { id: 'opt_3', text: { en: 'About 50% (half of your total plate)', hi: 'लगभग 50% (पूरी थाली का आधा हिस्सा)', mr: 'सुमारे ५०% (संपूर्ण ताटाचा अर्धा भाग)' } },
      { id: 'opt_4', text: { en: 'About 80% (fruits and vegetables exclusively)', hi: 'लगभग 80% (केवल फल और सब्जियां)', mr: 'सुमारे ८०% (फक्त फळे आणि भाज्या)' } }
    ],
    correctOptionId: 'opt_3',
    explanation: {
      en: 'ICMR-NIN recommends that at least 50% (half) of your daily food consumption should come from a colorful variety of fresh vegetables, leafy greens, and whole fruits (roughly 400g vegetables and 100g fruits) to provide essential micronutrients, polyphenols, and dietary fiber.',
      hi: 'ICMR-NIN के अनुसार आपकी थाली का 50% हिस्सा (लगभग 400 ग्राम सब्जियां और 100 ग्राम फल) ताजी हरी सब्जियों और फलों से भरा होना चाहिए ताकि शरीर को जरूरी विटामिन, मिनरल और फाइबर मिल सकें।',
      mr: 'ICMR-NIN नुसार ताटाचा ५०% भाग (सुमारे ४०० ग्रॅम भाज्या आणि १०० ग्रॅम फळे) विविध प्रकारच्या ताज्या भाज्या आणि फळांनी भरलेला असावा, ज्यामुळे शरीराला पुरेशी खनिजे आणि फायबर मिळते.'
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
      en: 'What is the scientifically recommended duration of night sleep for healthy adults (ages 18–64) to support cardiovascular and cognitive health?',
      hi: 'हृदय और मस्तिष्क के स्वास्थ्य के लिए 18-64 वर्ष के स्वस्थ वयस्कों को रात में कितने घंटे सोने की वैज्ञानिक सलाह दी जाती है?',
      mr: 'हृदय आणि मेंदूच्या आरोग्यासाठी निरोगी प्रौढ व्यक्तीने (१८-६४ वर्षे) रात्री किती तास झोप घेणे वैद्यकीयदृष्ट्या योग्य आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: '4 to 5 hours', hi: '4 से 5 घंटे', mr: '४ ते ५ तास' } },
      { id: 'opt_2', text: { en: '7 to 8 hours', hi: '7 से 8 घंटे', mr: '७ ते ८ तास' } },
      { id: 'opt_3', text: { en: '10 to 12 hours', hi: '10 से 12 घंटे', mr: '१० ते १२ तास' } },
      { id: 'opt_4', text: { en: '2 to 3 hours with afternoon naps', hi: 'दोपहर में झपकी के साथ 2-3 घंटे', mr: 'दुपारी थोडी झोप घेऊन २-३ तास' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: 'Extensive consensus from the National Sleep Foundation and the Indian Society for Sleep Research confirms that 7 to 8 hours of regular, uninterrupted sleep is optimal for adults. Chronic sleep under 6 hours is strongly linked to hypertension, obesity, insulin resistance, and weakened immunity.',
      hi: 'स्वास्थ्य विशेषज्ञों के अनुसार 7 से 8 घंटे की नियमित नींद वयस्कों के लिए सबसे उपयुक्त है। 6 घंटे से कम सोने से हाई बीपी, मोटापा, डायबिटीज और कमजोर रोगप्रतिकारक क्षमता का खतरा बढ़ जाता है।',
      mr: 'तज्ज्ञांनुसार प्रौढ व्यक्तीसाठी ७ ते ८ तासांची शांत झोप आवश्यक असते. नियमित ६ तासांपेक्षा कमी झोपल्यास उच्च रक्तदाब, लठ्ठपणा आणि प्रतिकारशक्ती कमी होण्याचा धोका असतो.'
    },
    source: 'National Sleep Foundation & Indian Society for Sleep Research Guidelines',
    hint: {
      en: 'Most working adults aim for roughly a third of the 24-hour day to be spent sleeping.',
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
      en: 'According to WHO hand hygiene protocols, what is the minimum duration you should scrub your hands with soap and water to dislodge pathogenic microbes?',
      hi: 'WHO के अनुसार, कीटाणुओं को नष्ट करने के लिए साबुन और पानी से कम से कम कितने समय तक हाथ रगड़ना जरूरी है?',
      mr: 'WHO च्या नियमांनुसार, हातावरील जंतू नष्ट करण्यासाठी साबण आणि पाण्याने किमान किती वेळ हात चोळणे आवश्यक आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: '3 to 5 seconds (quick splash)', hi: '3 से 5 सेकंड (केवल पानी छिड़कना)', mr: '३ ते ५ सेकंद (केवळ पाणी मारणे)' } },
      { id: 'opt_2', text: { en: 'At least 20 seconds', hi: 'कम से कम 20 सेकंड', mr: 'किमान २० सेकंद' } },
      { id: 'opt_3', text: { en: 'Exactly 2 minutes', hi: 'पूरे 2 मिनट', mr: 'पूर्ण २ मिनिटे' } },
      { id: 'opt_4', text: { en: 'Soap is optional if water is hot', hi: 'यदि पानी गर्म हो तो साबुन की जरूरत नहीं', mr: 'पाणी गरम असल्यास साबणाची गरज नाही' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: 'Washing hands with soap and water for at least 20 seconds (roughly the time it takes to sing "Happy Birthday" twice) mechanically lifts pathogens, breaks lipid viral envelopes, and rinses away bacteria from palms, web spaces, fingernails, and thumbs.',
      hi: 'कम से कम 20 सेकंड तक साबुन से हाथ धोने से वायरस और बैक्टीरिया की बाहरी परत टूट जाती है और वे पूरी तरह साफ हो जाते हैं। केवल पानी से धोने पर कीटाणु नहीं हटते।',
      mr: 'किमान २० सेकंद साबणाने हात चोळल्याने जंतूंचे आवरण नष्ट होते आणि हात निर्जंतुक होतात. फक्त पाण्याने हात धुतल्यास जंतू नष्ट होत नाहीत.'
    },
    source: 'World Health Organization (WHO) Hand Hygiene Technical Reference Manual',
    hint: {
      en: 'It takes approximately as long as singing the "Happy Birthday" song twice at a normal pace.',
      hi: 'सामान्य गति से दो बार "हैप्पी बर्थडे" गाने में जितना समय लगता है, उतना समय सोचें।',
      mr: 'दोन वेळा "हॅपी बर्थडे" गाणे म्हणायला जेवढा वेळ लागतो तेवढा वेळ लक्षात ठेवा.'
    }
  },
  {
    id: 'quiz_fasting_blood_glucose',
    mode: 'knowledge_quiz',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'To obtain an accurate Fasting Blood Glucose (FBG) lab measurement for diabetes screening, how many hours of overnight fasting are clinically required?',
      hi: 'डायबिटीज की जांच के लिए फास्टिंग ब्लड शुगर (खाली पेट) टेस्ट कराने से पहले कितने घंटे का उपवास जरूरी है?',
      mr: 'मधुमेहाच्या निदानासाठी उपाशीपोटी रक्तातील साखर (Fasting Blood Sugar) तपासण्यापूर्वी किती तास उपाशी राहणे गरजेचे असते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Fast for 8 to 12 hours overnight; only plain water is permitted', hi: 'रात भर 8 से 12 घंटे का उपवास रखें; केवल सादा पानी पीने की अनुमति है', mr: 'रात्रभर ८ ते १२ तास उपाशी राहावे; फक्त साधे पाणी पिण्याची परवानगी असते' } },
      { id: 'opt_2', text: { en: 'Eat a light sweet biscuit and milk 30 minutes before blood draw', hi: 'रक्त निकालने से 30 मिनट पहले एक मीठा बिस्कुट और दूध ले सकते हैं', mr: 'रक्त देण्यापूर्वी ३० मिनिटे आधी हलके गोड बिस्किट आणि दूध खाऊ शकता' } },
      { id: 'opt_3', text: { en: 'Fast for 24 full hours without drinking even water', hi: 'बिना पानी पिए पूरे 24 घंटे का कड़ा निर्जला उपवास रखें', mr: 'पाणीही न पिता सलग २४ तास कडक उपवास करावा' } },
      { id: 'opt_4', text: { en: 'Drink two cups of sweetened masala tea upon waking up', hi: 'सुबह उठते ही दो कप मीठी मसाला चाय पीकर जाएं', mr: 'सकाळी उठल्याबरोबर दोन कप गोड चहा प्यावा' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Standard diagnostic protocol for Fasting Blood Sugar mandates an 8 to 12-hour overnight fast. Drinking plain water is encouraged to stay hydrated, but tea, coffee, milk, or biscuits stimulate insulin and falsely elevate blood glucose values.',
      hi: 'फास्टिंग शुगर जांच के लिए रात में 8 से 12 घंटे तक कुछ न खाना अनिवार्य है। आप सादा पानी पी सकते हैं, लेकिन चाय, कॉफी, दूध या बिस्किट लेने से रिपोर्ट गलत आ सकती है।',
      mr: 'उपाशीपोटी रक्ताच्या तपासणीसाठी ८ ते १२ तास काहीही न खाणे आवश्यक असते. साधे पाणी पिण्यास हरकत नसते, पण चहा, दूध किंवा बिस्किट खाल्ल्यास रक्तातील साखर वाढून चुकीचा निकाल येऊ शकतो.'
    },
    source: 'ICMR Guidelines for Management of Type 2 Diabetes in India & ADA Standards of Care',
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
      en: 'What is the minimum weekly physical activity target recommended by WHO and ICMR for adults to lower the risk of cardiovascular disease?',
      hi: 'हृदयरोग के खतरे को कम करने के लिए WHO और ICMR के अनुसार वयस्कों को प्रति सप्ताह कम से कम कितने समय का मध्यम व्यायाम करना चाहिए?',
      mr: 'हृदयविकाराचा धोका कमी करण्यासाठी प्रौढ व्यक्तींनी दर आठवड्याला किमान किती वेळ मध्यम स्वरूपाचा व्यायाम केला पाहिजे?'
    },
    options: [
      { id: 'opt_1', text: { en: '15 minutes once every two weeks', hi: 'दो सप्ताह में एक बार केवल 15 मिनट', mr: 'दोन आठवड्यांतून एकदा फक्त १५ मिनिटे' } },
      { id: 'opt_2', text: { en: 'At least 150 minutes per week (e.g., 30 mins, 5 days a week)', hi: 'प्रति सप्ताह कम से कम 150 मिनट (जैसे 30 मिनट, हफ्ते में 5 दिन)', mr: 'दर आठवड्याला किमान १५० मिनिटे (उदा. दिवसाला ३० मिनिटे, आठवड्यातून ५ दिवस)' } },
      { id: 'opt_3', text: { en: '3 hours of intense marathon sprinting every day without rest', hi: 'बिना आराम किए रोजाना 3 घंटे तेज दौड़ना', mr: 'विश्रांती न घेता दररोज ३ तास धावणे' } },
      { id: 'opt_4', text: { en: 'Exercise is unnecessary if you stand while working', hi: 'खड़े होकर काम करने पर व्यायाम की कोई जरूरत नहीं', mr: 'उभे राहून काम केल्यास व्यायामाची गरज नसते' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: 'Clinical consensus mandates at least 150 minutes of moderate-intensity aerobic physical activity (such as brisk walking, cycling, or swimming) per week, or 75 minutes of vigorous activity, coupled with muscle-strengthening exercises on 2 or more days.',
      hi: 'हृदय को स्वस्थ रखने के लिए हफ्ते में कम से कम 150 मिनट (जैसे रोजाना 30 मिनट तेज चाल, 5 दिन) का व्यायाम जरूरी है। इसके साथ ही हफ्ते में 2 दिन मांसपेशियों को मजबूत करने वाले व्यायाम भी करने चाहिए।',
      mr: 'हृदय निरोगी ठेवण्यासाठी आठवड्यातून किमान १५० मिनिटे (दिवसाला ३० मिनिटे, ५ दिवस) वेगाने चालणे किंवा हलका व्यायाम करणे आवश्यक आहे. यामुळे रक्तदाब आणि कोलेस्ट्रॉल नियंत्रणात राहते.'
    },
    source: 'WHO Guidelines on Physical Activity and Sedentary Behaviour & ICMR Guidance',
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
      en: 'Under the National Deworming Day initiative by the Ministry of Health and Family Welfare (MoHFW), which medication is routinely administered to children?',
      hi: 'स्वास्थ्य मंत्रालय के राष्ट्रीय कृमि मुक्ति दिवस (National Deworming Day) के तहत बच्चों को पेट के कीड़े मारने के लिए कौन सी दवा दी जाती है?',
      mr: 'आरोग्य मंत्रालयाच्या राष्ट्रीय जंतनाशक मोहिमेअंतर्गत बालकांना पोटातील जंतांचा नायनाट करण्यासाठी कोणते औषध दिले जाते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Albendazole (400 mg chewable tablet)', hi: 'अल्बेंडाजोल (400 मिग्रा चबाने वाली गोली)', mr: 'अल्बेंडाझोल (४०० मिग्रॅ चावून खाण्याची गोळी)' } },
      { id: 'opt_2', text: { en: 'Amoxicillin antibiotic capsule', hi: 'एमोक्सिसिलिन एंटीबायोटिक कैप्सूल', mr: 'अमोक्सिसिलिन अँटिबायोटिक कॅप्सूल' } },
      { id: 'opt_3', text: { en: 'High-dose Aspirin tablet', hi: 'एस्पिरिन की तेज गोली', mr: 'अॅस्पिरिनची गोळी' } },
      { id: 'opt_4', text: { en: 'Vitamin D3 injection', hi: 'विटामिन डी3 का इंजेक्शन', mr: 'व्हिटॅमिन D३ चे इंजेक्शन' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Albendazole (400 mg) is the safe, single-dose anthelmintic medication distributed biannually across schools and Anganwadi centers in India to treat soil-transmitted helminths (intestinal worms), which cause malnutrition, stunting, and anemia in children.',
      hi: 'अल्बेंडाजोल (400 मिग्रा) एक सुरक्षित दवा है जो बच्चों के पेट के कीड़े (कृमि) मारकर कुपोषण और एनीमिया (खून की कमी) से बचाती है। यह स्कूलों और आंगनवाड़ियों में नि:शुल्क दी जाती है।',
      mr: 'अल्बेंडाझोल (४०० मिग्रॅ) ही जंतांवर अत्यंत गुणकारी गोळी आहे, जी बालकांमधील कुपोषण आणि अशक्तपणा रोखण्यासाठी शाळा आणि अंगणवाड्यांमध्ये मोफत दिली जाते.'
    },
    source: 'National Deworming Day Operational Guidelines, MoHFW, Government of India',
    hint: {
      en: 'The name of this safe anthelmintic chewable tablet begins with the letter "A" and ends in "zole".',
      hi: 'इस चबाने वाली मीठी गोली का नाम "अ" से शुरू होता है (Albendazole)।',
      mr: 'या गोळीचे नाव "अ" (Albendazole) अक्षरावरून सुरू होते.'
    }
  },
  {
    id: 'quiz_ors_preparation_ratio',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'What is the correct way to prepare standard WHO-formulated Oral Rehydration Salts (ORS) packet at home during acute diarrhea or dehydration?',
      hi: 'दस्त (डायरिया) या डिहाइड्रेशन में WHO प्रमाणित ओआरएस (ORS) के पैकेट का घोल घर पर बनाने का सही तरीका क्या है?',
      mr: 'अतिसार (Diarrhea) किंवा डिहायड्रेशनच्या वेळी WHO प्रमाणित ओआरएस (ORS) चे पाकीट पाण्यात मिसळण्याची अचूक पद्धत कोणती आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Dissolve the entire standard packet into exactly 1 liter of clean drinking water', hi: 'पूरे पैकेट को ठीक 1 लीटर साफ पीने के पानी में पूरी तरह घोलें', mr: 'संपूर्ण पाकीट नेमके १ लिटर स्वच्छ पिण्याच्या पाण्यात विरघळवावे' } },
      { id: 'opt_2', text: { en: 'Mix half spoon in a tiny cup of concentrated milk', hi: 'आधा चम्मच पाउडर को थोड़े से गाढ़े दूध में मिलाएं', mr: 'अर्धा चमचा पावडर एका कप घट्ट दुधात मिसळावी' } },
      { id: 'opt_3', text: { en: 'Swallow the dry powder directly and wash down with soda', hi: 'सूखा पाउडर सीधे फांक लें और ऊपर से कोल्ड ड्रिंक पिएं', mr: 'कोरडी पावडर थेट तोंडात टाकून वरून कोल्ड्रिंक प्यावे' } },
      { id: 'opt_4', text: { en: 'Boil the powder in 5 liters of boiling syrup', hi: 'पाउडर को 5 लीटर चाशनी में खौलाएं', mr: '५ लिटर साखरेच्या पाकात पावडर उकळावी' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Standard WHO-ORS is formulated to create an exact osmolarity (245 mOsm/L). The entire packet must be mixed in exactly 1 liter (1000 ml) of clean drinking water. Making the solution too concentrated with too little water creates hyperosmolar diarrhea, drawing more water out of the body, while over-diluting makes it ineffective.',
      hi: 'ओआरएस के पूरे पैकेट को ठीक 1 लीटर साफ पानी में ही घोलना चाहिए। कम पानी में मिलाने से घोल बहुत गाढ़ा हो जाता है जो दस्त को और बढ़ा सकता है। कभी भी दूध, जूस या चाय में ओआरएस न मिलाएं।',
      mr: 'ओआरएसचे संपूर्ण पाकीट बरोबर १ लिटर स्वच्छ पाण्यातच विरघळवणे शास्त्रीयदृष्ट्या आवश्यक असते. कमी पाण्यात मिसळल्यास द्रावण घट्ट होऊन अतिसार वाढू शकतो. दुधात किंवा ज्यूसमध्ये ओआरएस मिसळू नये.'
    },
    source: 'World Health Organization (WHO) Clinical Management of Acute Diarrhea & AIIMS Protocols',
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
      en: 'What is the maximum daily dietary salt intake recommended by WHO and ICMR for a healthy adult to prevent high blood pressure?',
      hi: 'हाई ब्लड प्रेशर से बचाव के लिए WHO और ICMR के अनुसार एक स्वस्थ वयस्क को प्रतिदिन अधिकतम कितना नमक खाना चाहिए?',
      mr: 'उच्च रक्तदाबापासून संरक्षणासाठी WHO आणि ICMR नुसार निरोगी प्रौढ व्यक्तीने दररोज जास्तीत जास्त किती मीठ खावे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Less than 5 grams per day (about 1 level teaspoon, or ~2000 mg sodium)', hi: 'प्रतिदिन 5 ग्राम से कम (लगभग 1 छोटा चम्मच, या ~2000 मिग्रा सोडियम)', mr: 'दररोज ५ ग्रॅमपेक्षा कमी (सुमारे १ लहान चमचा, किंवा ~२००० मिग्रॅ सोडियम)' } },
      { id: 'opt_2', text: { en: 'At least 25 grams per day (4 heaping tablespoons)', hi: 'प्रतिदिन कम से कम 25 ग्राम (4 बड़े चम्मच)', mr: 'दररोज किमान २५ ग्रॅम (४ मोठे चमचे)' } },
      { id: 'opt_3', text: { en: 'Zero salt forever (no sodium at all in human diet)', hi: 'जीवनभर नमक पूरी तरह बंद (शून्य सोडियम)', mr: 'आयुष्यभर मीठ पूर्ण बंद (शून्य सोडियम)' } },
      { id: 'opt_4', text: { en: '100 grams for active manual laborers', hi: 'श्रम करने वालों के लिए 100 ग्राम', mr: 'कष्टकरी व्यक्तींसाठी १०० ग्रॅम' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'WHO and ICMR strongly recommend limiting dietary salt to less than 5 grams per day (about one flat teaspoon, corresponding to 2 grams of sodium). The average Indian adult consumes nearly 8 to 11 grams of salt daily, heavily driven by pickles, papads, namkeens, and processed chutneys, elevating stroke risk.',
      hi: 'WHO और ICMR के अनुसार रोजाना 5 ग्राम (लगभग एक छोटा चम्मच) से कम नमक खाना चाहिए। भारतीय भोजन में अचार, पापड़ और नमकीन के कारण लोग औसतन 8-11 ग्राम नमक खा लेते हैं, जिससे बीपी और लकवे का खतरा बढ़ता है।',
      mr: 'दररोज ५ ग्रॅमपेक्षा (सुमारे एक लहान चमचा) कमी मीठ खाण्याचा सल्ला दिला जातो. लोणचे, पापड आणि फरसाणमुळे भारतीय आहारात नकळत ८ ते ११ ग्रॅम मीठ पोटात जाते, ज्यामुळे पक्षाघात आणि हृदयविकाराचा धोका वाढतो.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, 2024 & WHO Salt Reduction Facts',
    hint: {
      en: 'The recommended limit fits comfortably on a single standard level teaspoon for the entire day.',
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
      en: 'What is the clinically defined normal resting blood pressure range for an adult seated quietly at rest?',
      hi: 'शांत अवस्था में बैठे किसी स्वस्थ वयस्क का सामान्य ब्लड प्रेशर (रक्तचाप) कितना होना चाहिए?',
      mr: 'शांत बसलेल्या निरोगी प्रौढ व्यक्तीचा सर्वसाधारण सामान्य रक्तदाब (Blood Pressure) किती असणे अपेक्षित आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Systolic less than 120 mmHg and Diastolic less than 80 mmHg (120/80)', hi: 'सिस्टोलिक 120 से कम और डायस्टोलिक 80 से कम (120/80 mmHg)', mr: 'सिस्टॉलिक १२० पेक्षा कमी आणि डायस्टॉलिक ८० पेक्षा कमी (१२०/८० mmHg)' } },
      { id: 'opt_2', text: { en: 'Systolic 180 mmHg and Diastolic 110 mmHg', hi: 'सिस्टोलिक 180 और डायस्टोलिक 110 mmHg', mr: 'सिस्टॉलिक १८० आणि डायस्टॉलिक ११० mmHg' } },
      { id: 'opt_3', text: { en: 'Systolic 60 mmHg and Diastolic 30 mmHg', hi: 'सिस्टोलिक 60 और डायस्टोलिक 30 mmHg', mr: 'सिस्टॉलिक ६० आणि डायस्टॉलिक ३० mmHg' } },
      { id: 'opt_4', text: { en: 'Blood pressure does not exist in healthy people', hi: 'स्वस्थ लोगों में ब्लड प्रेशर होता ही नहीं', mr: 'निरोगी व्यक्तींमध्ये रक्तदाब नसतोच' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Normal resting adult blood pressure is defined as Systolic < 120 mmHg (pressure when heart contracts) and Diastolic < 80 mmHg (pressure when heart rests between beats). Readings persistently at or above 140/90 mmHg are clinically classified as Hypertension.',
      hi: 'सामान्य बीपी 120/80 mmHg से कम माना जाता है। 120 हृदय के धड़कने पर और 80 धड़कनों के बीच आराम करने पर धमनियों का दबाव दर्शाता है। 140/90 या उससे अधिक का बीपी उच्च रक्तचाप (Hypertension) कहलाता है।',
      mr: 'सामान्य रक्तदाब १२०/८० mmHg पेक्षा कमी मानला जातो. वरचा आकडा (१२०) हृदय आकुंचन पावत असतानाचा आणि खालचा आकडा (८०) विश्रांती वेळेचा असतो. १४०/९० पेक्षा जास्त असल्यास तो उच्च रक्तदाब मानला जातो.'
    },
    source: 'Indian Hypertension Control Initiative (IHCI) & Cardiological Society of India Guidelines',
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
      en: 'Which essential vitamin is synthesized in human skin when exposed to mid-morning ultraviolet B (UVB) sunlight?',
      hi: 'सुबह की धूप में त्वचा के संपर्क में आने पर शरीर में किस आवश्यक विटामिन का प्राकृतिक निर्माण होता है?',
      mr: 'सकाळच्या कोवळ्या उन्हाच्या संपर्कात आल्यावर मानवी त्वचेमध्ये कोणत्या आवश्यक जीवनसत्त्वाची निर्मिती होते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Vitamin D', hi: 'विटामिन D (Vitamin D)', mr: 'व्हिटॅमिन D (Vitamin D)' } },
      { id: 'opt_2', text: { en: 'Vitamin C', hi: 'विटामिन C (Vitamin C)', mr: 'व्हिटॅमिन C (Vitamin C)' } },
      { id: 'opt_3', text: { en: 'Vitamin B12', hi: 'विटामिन B12 (Vitamin B12)', mr: 'व्हिटॅमिन B12 (Vitamin B12)' } },
      { id: 'opt_4', text: { en: 'Vitamin K', hi: 'विटामिन K (Vitamin K)', mr: 'व्हिटॅमिन K (Vitamin K)' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: '7-Dehydrocholesterol in human skin absorbs solar UVB radiation (wavelength 290-315 nm) to form cholecalciferol (Vitamin D3), which is subsequently hydroxylated in the liver and kidneys into active calcitriol. Vitamin D is indispensable for bone calcium absorption, immune modulation, and muscle strength.',
      hi: 'धूप की अल्ट्रावायलेट बी (UVB) किरणें त्वचा में विटामिन D बनाती हैं। यह हड्डियों में कैल्शियम सोखने, मांसपेशियों की मजबूती और मजबूत रोगप्रतिकारक प्रणाली के लिए बेहद जरूरी है।',
      mr: 'उन्हातील अतिनील किरणांमुळे त्वचेत नैसर्गिकरीत्या व्हिटॅमिन D तयार होते. हाडांच्या बळकटीसाठी, कॅल्शियम शोषण्यासाठी आणि प्रतिकारशक्तीसाठी हे जीवनसत्त्व अत्यंत महत्त्वाचे आहे.'
    },
    source: 'ICMR Nutrient Requirements for Indians, 2024 & Endocrine Society of India Clinical Position',
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
      en: 'What is the primary physiological benefit of eating dietary fiber found in whole pulses, raw salads, and vegetables?',
      hi: 'दालों, कच्चे सलाद और सब्जियों में पाए जाने वाले फाइबर (रफेज) का मुख्य स्वास्थ्य लाभ क्या है?',
      mr: 'कडधान्ये, सॅलड आणि पालेभाज्यांमध्ये आढळणाऱ्या चोथायुक्त फायबरचा (Dietary Fiber) शरीराला कोणता मुख्य फायदा होतो?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Normalizes bowel movements, feeds gut microbiome, and blunts rapid post-meal blood sugar spikes', hi: 'पाचन सुधारता है, आंतों के मित्र बैक्टीरिया को पोषण देता है और भोजन के बाद ब्लड शुगर को अचानक बढ़ने से रोकता है', mr: 'पचन सुधारते, पोटातील उपयुक्त जीवाणूंचे पोषण करते आणि जेवणानंतर रक्तातील साखर वेगाने वाढू देत नाही' } },
      { id: 'opt_2', text: { en: 'Immediately dissolves all tooth enamel', hi: 'दांतों के इनेमल को तुरंत घुला देता है', mr: 'दातांचे आवरण लगेच वितळवून टाकते' } },
      { id: 'opt_3', text: { en: 'Replaces the need for drinking water entirely', hi: 'पानी पीने की आवश्यकता को पूरी तरह समाप्त कर देता है', mr: 'पाणी पिण्याची गरज पूर्णपणे संपवून टाकते' } },
      { id: 'opt_4', text: { en: 'Provides zero nutritional or physiological value', hi: 'इसका शरीर के लिए कोई उपयोग नहीं है', mr: 'याचा शरीराला काहीही उपयोग नसतो' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Soluble and insoluble dietary fibers add bulk to stool, preventing constipation, and form a viscous gel that slows carbohydrate digestion, smoothing out postprandial glucose curves. Furthermore, gut microbes ferment fiber into short-chain fatty acids (SCFAs like butyrate) that protect colon health and reduce systemic inflammation.',
      hi: 'फाइबर भोजन के पाचन को धीमा करके अचानक शुगर स्पाइक को रोकता है, कब्ज से राहत दिलाता है और आंतों के अच्छे बैक्टीरिया को स्वस्थ रखता है। ICMR प्रतिदिन 30 ग्राम फाइबर खाने की सलाह देता है।',
      mr: 'फायबरमुळे अन्नातील ग्लुकोज हळूहळू रक्तात मिसळते, त्यामुळे साखर नियंत्रणात राहते. बद्धकोष्ठता होत नाही आणि आतड्यांचे आरोग्य उत्तम राहून प्रतिकारशक्ती वाढते.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, 2024 (Dietary Fiber Chapter)',
    hint: {
      en: 'Think about how raw cucumber and salads help with digestion, feeling full, and smoothing blood sugar.',
      hi: 'सोचें कि कच्चा खीरा और सलाद खाने से पेट भरा क्यों रहता है और पाचन कैसे सुधरता है।',
      mr: 'काकडी किंवा सॅलड खाल्ल्याने पोट भरलेले का वाटते आणि पचनाला कशी मदत होते याचा विचार करा.'
    }
  },
  {
    id: 'quiz_cpr_cab_sequence',
    mode: 'knowledge_quiz',
    difficulty: 'hard',
    points: 35,
    question: {
      en: 'In modern Basic Life Support (BLS) resuscitation algorithms for an unresponsive, non-breathing cardiac arrest victim, what does the letter "C" in C-A-B stand for?',
      hi: 'अचानक बेहोश हुए और सांस न लेने वाले व्यक्ति के प्राथमिक उपचार (CPR/BLS) के C-A-B क्रम में "C" का क्या अर्थ है?',
      mr: 'अचानक बेशुद्ध पडलेल्या आणि श्वास न घेणाऱ्या व्यक्तीच्या प्रथमोपचारातील (CPR) C-A-B क्रमामधील "C" चा अर्थ काय आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Chest Compressions (pushing hard and fast in the center of the chest)', hi: 'चेस्ट कम्प्रेशन (छाती के बीच में तेज और गहरा दबाव देना)', mr: 'चेस्ट कॉम्प्रेशन्स (छातीच्या मध्यभागी जोरात आणि जलद दाब देणे)' } },
      { id: 'opt_2', text: { en: 'Cold water splash on forehead', hi: 'माथे पर ठंडा पानी छिड़कना', mr: 'कपाळावर गार पाणी मारणे' } },
      { id: 'opt_3', text: { en: 'Coffee spoon feed', hi: 'मुंह में गर्म कॉफी की चम्मच डालना', mr: 'तोंडात गरम कॉफीचा चमचा घालणे' } },
      { id: 'opt_4', text: { en: 'Chanting mantras quietly while waiting', hi: 'चुपचाप बैठकर ठीक होने का इंतजार करना', mr: 'शांत बसून वाट पाहणे' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'American Heart Association (AHA) and Indian Resuscitation Council (IRC) protocols prioritize Chest Compressions first (C-A-B: Compressions, Airway, Breathing). Compressions maintain coronary and cerebral perfusion until emergency medical services arrive. Push hard (5 cm deep) and fast (100-120 bpm) in the center of the chest.',
      hi: 'सीपीआर में सबसे पहले छाती के बीच में दोनों हाथों से तेज और गहरा दबाव (100-120 प्रति मिनट) देना सबसे जरूरी है। इससे दिल से दिमाग और जरूरी अंगों तक खून पहुंचता रहता है।',
      mr: 'हृदयक्रिया बंद पडल्यास CPR मध्ये सर्वप्रथम छातीच्या मध्यभागी जलद आणि जोरकस दाब (१०० ते १२० दाब प्रति मिनिट) देणे अत्यंत जीवनरक्षक ठरते, ज्यामुळे मेंदूला रक्तपुरवठा चालू राहतो.'
    },
    source: 'Indian Resuscitation Council (IRC) Comprehensive Cardiopulmonary Life Support Guidelines',
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
      en: 'Under India\'s Universal Immunization Programme (UIP), which vaccine is administered at birth to protect newborns against severe childhood tuberculosis?',
      hi: 'भारत के सार्वभौमिक टीकाकरण कार्यक्रम के तहत नवजात शिशु को जन्म के समय टीबी (क्षयरोग) से बचाने के लिए कौन सा टीका लगाया जाता है?',
      mr: 'भारताच्या राष्ट्रीय लसीकरण कार्यक्रमानुसार नवजात बालकाला जन्माच्या वेळी क्षयरोगापासून (TB) संरक्षणासाठी कोणती लस दिली जाते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'BCG vaccine (Bacillus Calmette-Guérin)', hi: 'बीसीजी टीका (BCG vaccine)', mr: 'बीसीजी लस (BCG vaccine)' } },
      { id: 'opt_2', text: { en: 'Rabies vaccine', hi: 'रेबीज का टीका', mr: 'रेबीजची लस' } },
      { id: 'opt_3', text: { en: 'Typhoid conjugate vaccine', hi: 'टाइफाइड का टीका', mr: 'टायफॉईडची लस' } },
      { id: 'opt_4', text: { en: 'Tetanus toxoid adult booster', hi: 'टिटनेस का वयस्क बूस्टर', mr: 'धनुर्वाताचे प्रौढ बूस्टर' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'BCG (Bacillus Calmette-Guérin) is administered intradermally at birth (along with Oral Polio Vaccine zero dose and Hepatitis B birth dose). It provides vital protection against severe, disseminated pediatric forms of tuberculosis, including TB meningitis and miliary tuberculosis.',
      hi: 'बीसीजी (BCG) का टीका नवजात शिशुओं को जन्म के तुरंत बाद लगाया जाता है। यह बच्चों को टीबी मेनिनजाइटिस (दिमागी टीबी) और गंभीर क्षयरोग से सुरक्षा प्रदान करता है।',
      mr: 'बीसीजी (BCG) ही लस बालकाला जन्मतः डाव्या दंडावर दिली जाते. ही लस लहान मुलांमधील घातक मेंदूचा टीबी आणि गंभीर क्षयरोगापासून संरक्षण करते.'
    },
    source: 'Universal Immunization Programme (UIP) Schedule, Ministry of Health and Family Welfare, Government of India',
    hint: {
      en: 'A three-letter acronym vaccine known for leaving a small characteristic scar on the upper left arm.',
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
      en: 'What is the clinical definition of Anemia, a widespread nutritional health challenge affecting millions of Indian women and children?',
      hi: 'एनीमिया (खून की कमी) की सही चिकित्सीय परिभाषा क्या है, जो भारत में कई महिलाओं और बच्चों को प्रभावित करती है?',
      mr: 'भारतात मोठ्या प्रमाणावर आढळणाऱ्या ॲनिमिया (रक्तक्षय/अशक्तपणा) या आजाराची अचूक वैद्यकीय व्याख्या काय आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'A condition with lower than normal red blood cells or hemoglobin, impairing cellular oxygen transport', hi: 'खून में लाल रक्त कोशिकाओं या हीमोग्लोबिन की कमी, जिससे शरीर के अंगों तक ऑक्सीजन कम पहुंचती है', mr: 'रक्तातील लाल रक्तपेशी किंवा हिमोग्लोबिनचे प्रमाण कमी होणे, ज्यामुळे अवयवांना ऑक्सिजन कमी पडतो' } },
      { id: 'opt_2', text: { en: 'Having too many red blood cells in the liver', hi: 'लिवर में बहुत अधिक खून जमा हो जाना', mr: 'यकृतामध्ये अती प्रमाणात रक्त साठणे' } },
      { id: 'opt_3', text: { en: 'An allergy to consuming plain water', hi: 'सादा पानी पीने से होने वाली एलर्जी', mr: 'पाणी पिण्याची ॲलर्जी असणे' } },
      { id: 'opt_4', text: { en: 'A permanent bone fracture in the legs', hi: 'पैरों की हड्डी का स्थायी रूप से टूटना', mr: 'पायाचे हाड मोडणे' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Anemia occurs when the concentration of hemoglobin (the iron-rich protein in red blood cells that binds oxygen) drops below physiological thresholds (< 12 g/dL in non-pregnant adult women, < 13 g/dL in men). Symptoms include chronic fatigue, pale conjunctiva, breathlessness, and poor work productivity.',
      hi: 'एनीमिया हीमोग्लोबिन या लाल रक्त कोशिकाओं की कमी को कहते हैं। इससे शरीर की कोशिकाओं तक ऑक्सीजन ठीक से नहीं पहुंच पाती, जिससे लगातार थकान, चक्कर आना, सांस फूलना और कमजोरी महसूस होती है।',
      mr: 'ॲनिमिया म्हणजे रक्तातील हिमोग्लोबिन किंवा लाल रक्तपेशींची कमतरता. यामुळे पेशींपर्यंत पुरेसा ऑक्सिजन पोहोचत नाही, परिणामी तीव्र थकवा, धाप लागणे आणि चक्कर येणे असा त्रास होतो.'
    },
    source: 'Anemia Mukt Bharat Operational Guidelines & WHO Hemoglobin Concentrations Guidelines',
    hint: {
      en: 'Think about hemoglobin inside red blood cells and its primary job of carrying oxygen across the body.',
      hi: 'लाल रक्त कोशिकाओं में मौजूद हीमोग्लोबिन और ऑक्सीजन ले जाने के उसके कार्य के बारे में सोचें।',
      mr: 'लाल रक्तपेशींमधील हिमोग्लोबिन आणि त्याचे ऑक्सिजन वहनाचे कार्य आठवा.'
    }
  },
  {
    id: 'quiz_iron_deficiency_foods',
    mode: 'knowledge_quiz',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'To optimize the absorption of plant-based non-heme iron from green leafy vegetables and lentils, which vitamin should be consumed in the same meal?',
      hi: 'पालक, मेथी और दालों में मौजूद आयरन (लोहा) को शरीर में बेहतर तरीके से सोखने के लिए भोजन में किस विटामिन का साथ होना जरूरी है?',
      mr: 'पालक, मेथी आणि डाळींमधील लोह (Iron) शरीराने उत्तमरीत्या शोषून घेण्यासाठी जेवणात कोणत्या जीवनसत्त्वाचा समावेश असणे फायदेशीर ठरते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Vitamin C (such as lemon juice, amla, or tomatoes)', hi: 'विटामिन सी (जैसे नींबू का रस, आंवला या टमाटर)', mr: 'व्हिटॅमिन C (जसे की लिंबाचा रस, आवळा किंवा टोमॅटो)' } },
      { id: 'opt_2', text: { en: 'Strong black tea with high tannin content', hi: 'कड़क काली चाय जिसमें टैनिन अधिक हो', mr: 'कडक काळा चहा ज्यामध्ये टॅनिन जास्त असते' } },
      { id: 'opt_3', text: { en: 'No vitamin helps iron absorption', hi: 'कोई भी विटामिन आयरन सोखने में मदद नहीं करता', mr: 'कोणतेही जीवनसत्त्व लोह शोषण्यास मदत करत नाही' } },
      { id: 'opt_4', text: { en: 'Pure refined white table sugar', hi: 'केवल सफेद रिफाइंड चीनी', mr: 'केवळ पांढरी साखर' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Vitamin C (ascorbic acid) chemically reduces ferric iron (Fe3+) to highly absorbable ferrous iron (Fe2+), significantly boosting plant non-heme iron absorption. Squeezing fresh lemon juice over dal or eating amla with meals combats nutritional anemia. Conversely, tannins in tea and coffee inhibit iron absorption if consumed with meals.',
      hi: 'विटामिन सी (नींबू, आंवला, संतरा) दाल और हरी सब्जियों के आयरन को सोखने में मदद करता है। दाल में नींबू निचोड़कर खाने से खून तेजी से बनता है। भोजन के तुरंत बाद चाय या कॉफी पीने से आयरन सोखना रुक जाता है।',
      mr: 'व्हिटॅमिन सी (लिंबू, आवळा) भाज्यांमधील लोह शरीरात शोषण्यास मदत करते. डाळ किंवा भाज्यांवर लिंबू पिळल्यास शरीराला भरपूर लोह मिळते. जेवणानंतर लगेच चहा किंवा कॉफी पिल्यास लोह शोषण्यास अडथळा येतो.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, 2024 & Anemia Mukt Bharat',
    hint: {
      en: 'Think of traditional Indian practices like squeezing fresh nimbu (lemon) juice right over hot dal.',
      hi: 'दाल या सलाद पर ताजा नींबू निचोड़ने की पारंपरिक आदत को याद करें।',
      mr: 'वरण-भातावर किंवा सॅलडवर ताजे लिंबू पिळण्याच्या पद्धतीचा विचार करा.'
    }
  },
  {
    id: 'quiz_pulse_oximeter_reading',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'What is the expected normal peripheral capillary blood oxygen saturation (SpO2) reading on room air for a healthy individual using a finger pulse oximeter?',
      hi: 'फिंगर पल्स ऑक्सीमीटर से जांचने पर कमरे की सामान्य हवा में किसी स्वस्थ व्यक्ति का ऑक्सीजन स्तर (SpO2) कितना होना चाहिए?',
      mr: 'पल्स ऑक्सिमीटरने बोटावर तपासल्यास सामान्य हवेत निरोगी व्यक्तीचे ऑक्सिजनचे प्रमाण (SpO2) किती असणे अपेक्षित आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: '95% to 100%', hi: '95% से 100%', mr: '९५% ते १००%' } },
      { id: 'opt_2', text: { en: '50% to 60%', hi: '50% से 60%', mr: '५०% ते ६०%' } },
      { id: 'opt_3', text: { en: 'Always exactly 0%', hi: 'हमेशा 0%', mr: 'नेहमी ०%' } },
      { id: 'opt_4', text: { en: 'Above 150%', hi: '150% से ऊपर', mr: '१५०% पेक्षा जास्त' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Normal SpO2 readings for healthy adults breathing room air range from 95% to 100%. An SpO2 persistently below 94% indicates hypoxemia and requires immediate clinical evaluation, while readings below 90% represent a medical emergency requiring supplemental oxygen.',
      hi: 'स्वस्थ व्यक्ति का ऑक्सीजन स्तर 95% से 100% के बीच होता है। 94% से कम ऑक्सीजन होना चिंता का विषय है और 90% से नीचे जाने पर तुरंत अस्पताल जाकर ऑक्सीजन लगवाने की आवश्यकता होती है।',
      mr: 'निरोगी व्यक्तीच्या रक्तातील ऑक्सिजनचे प्रमाण ९५% ते १००% च्या दरम्यान असते. हे प्रमाण ९४% पेक्षा कमी झाल्यास त्वरित डॉक्टरांचा सल्ला घ्यावा आणि ९०% पेक्षा कमी झाल्यास तात्काळ ऑक्सिजनची गरज असते.'
    },
    source: 'AIIMS Clinical Guidelines on Pulse Oximetry & WHO COVID-19 Clinical Management Protocols',
    hint: {
      en: 'During the pandemic, doctors emphasized that healthy oxygen readings should stay well in the upper 90s.',
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
      en: 'Under the National Health Mission (NHM) guidelines, at what age should every Indian adult begin regular annual screenings for hypertension and diabetes?',
      hi: 'राष्ट्रीय स्वास्थ्य मिशन (NHM) के अनुसार, प्रत्येक भारतीय नागरिक को किस उम्र से हाई बीपी और डायबिटीज की सालाना नियमित जांच शुरू कर देनी चाहिए?',
      mr: 'राष्ट्रीय आरोग्य अभियानाच्या नियमांनुसार, प्रत्येक भारतीयाने कोणत्या वयापासून उच्च रक्तदाब आणि मधुमेहाची वार्षिक नियमित तपासणी सुरू केली पाहिजे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Starting at age 30', hi: '30 वर्ष की उम्र से', mr: 'वयाच्या ३० व्या वर्षापासून' } },
      { id: 'opt_2', text: { en: 'Only after celebrating your 75th birthday', hi: 'केवल 75 वर्ष की उम्र के बाद', mr: 'केवळ वयाच्या ७५ वर्षानंतर' } },
      { id: 'opt_3', text: { en: 'Never unless carried into an ICU', hi: 'अस्पताल में भर्ती होने से पहले कभी नहीं', mr: 'रुग्णालयात दाखल होईपर्यंत कधीही नाही' } },
      { id: 'opt_4', text: { en: 'At age 5 for all toddlers', hi: '5 वर्ष के सभी बच्चों के लिए', mr: '५ वर्षांच्या लहान मुलांसाठी' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'The Ministry of Health and Family Welfare mandates universal population-based screening for common Non-Communicable Diseases (hypertension, diabetes, oral, breast, and cervical cancers) for all individuals aged 30 and older across primary health centres and Ayushman Bharat Arogya Mandirs.',
      hi: 'स्वास्थ्य मंत्रालय 30 वर्ष या उससे अधिक आयु के सभी व्यक्तियों के लिए बीपी, शुगर और कैंसर की नियमित वार्षिक जांच की सलाह देता है ताकि बीमारियों को शुरुआती दौर में ही पहचान कर नियंत्रित किया जा सके।',
      mr: 'आरोग्य मंत्रालयानुसार वयाच्या ३० व्या वर्षापासून प्रत्येकाने दरवर्षी रक्तदाब आणि साखरेची नियमित तपासणी केली पाहिजे, जेणेकरून आजार बळावण्यापूर्वीच त्यावर नियंत्रण मिळवता येते.'
    },
    source: 'National Programme for Prevention and Control of Non-Communicable Diseases (NP-NCD), MoHFW',
    hint: {
      en: 'Think of the milestone decade that marks entry into mature adulthood: the age of thirty.',
      hi: 'परिपक्व वयस्कता में प्रवेश की उम्र (30 वर्ष) के बारे में सोचें।',
      mr: 'प्रौढ वयात पदार्पण करण्याचे वय (३० वर्षे) लक्षात ठेवा.'
    }
  },
  {
    id: 'quiz_hba1c_target_concept',
    mode: 'knowledge_quiz',
    difficulty: 'hard',
    points: 35,
    question: {
      en: 'What clinical metric does the Glycated Hemoglobin (HbA1c) blood test measure in diabetic patients?',
      hi: 'डायबिटीज के मरीजों में ग्लाइकेटेड हीमोग्लोबिन (HbA1c) टेस्ट से क्या पता चलता है?',
      mr: 'मधुमेहाच्या रुग्णांमध्ये HbA1c (Glycated Hemoglobin) ही रक्ताची चाचणी नेमके काय मोजते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'The average blood glucose level over the preceding 2 to 3 months', hi: 'पिछले 2 से 3 महीनों का औसत ब्लड शुगर स्तर', mr: 'मागील २ ते ३ महिन्यांमधील रक्तातील साखरेची सरासरी पातळी' } },
      { id: 'opt_2', text: { en: 'The blood sugar level at the exact second the needle touches your skin', hi: 'सुई चुभते समय उस एक सेकंड का शुगर स्तर', mr: 'सुई टोचताना त्या एका सेकंदातील साखरेची पातळी' } },
      { id: 'opt_3', text: { en: 'The level of calcium stored in tooth roots', hi: 'दांतों की जड़ों में जमा कैल्शियम', mr: 'दातांमधील कॅल्शियमचे प्रमाण' } },
      { id: 'opt_4', text: { en: 'The amount of water drunk in the past 10 minutes', hi: 'पिछले 10 मिनट में पिया गया पानी', mr: 'गेल्या १० मिनिटांत पिलेले पाणी' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Glucose binds irreversibly to hemoglobin inside red blood cells throughout their roughly 120-day lifespan. Measuring HbA1c reflects overall glycemic control over the preceding 8 to 12 weeks, unaffected by day-to-day dietary fluctuations. An HbA1c below 5.7% is normal; 6.5% or above indicates diabetes.',
      hi: 'HbA1c टेस्ट पिछले 2 से 3 महीनों का औसत शुगर बताता है क्योंकि यह लाल रक्त कोशिकाओं के जीवनकाल से जुड़ा होता है। रोज के खान-पान से यह अचानक नहीं बदलता, जिससे यह डायबिटीज की सबसे सटीक जांच मानी जाती है।',
      mr: 'HbA1c चाचणी मागील २ ते ३ महिन्यांमधील रक्तातील साखरेचे सरासरी प्रमाण अचूक दर्शवते. ही चाचणी एका दिवसाच्या खाण्यापिण्यावर अवलंबून नसते, त्यामुळे मधुमेहाच्या नियंत्रणासाठी ती सर्वात खात्रीशीर मानली जाते.'
    },
    source: 'Research Society for the Study of Diabetes in India (RSSDI) & American Diabetes Association Standards',
    hint: {
      en: 'Red blood cells live for about 90 to 120 days. How long an average do they reflect?',
      hi: 'लाल रक्त कोशिकाओं का जीवनकाल लगभग 3 महीने होता है। यह टेस्ट उसी अवधि का औसत बताता है।',
      mr: 'लाल रक्तपेशींचे आयुष्य सुमारे ३ महिने असते. ही चाचणी तेवढ्याच कालावधीची सरासरी मोजते.'
    }
  },
  {
    id: 'quiz_hydration_dehydration_signs',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Which of the following physical signs is the most reliable, practical daily indicator of whether you are adequately hydrated?',
      hi: 'आप पर्याप्त पानी पी रहे हैं या नहीं, यह जानने का सबसे आसान और सटीक दैनिक संकेत कौन सा है?',
      mr: 'तुम्ही पुरेसे पाणी पीत आहात की नाही हे ओळखण्याची सर्वात सोपी आणि अचूक दैनंदिन खूण कोणती आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Urine color: pale, straw-colored yellow indicates good hydration, while dark amber indicates dehydration', hi: 'पेशाब का रंग: हल्का पीला रंग पर्याप्त पानी दर्शाता है, जबकि गहरा पीला रंग पानी की कमी दर्शाता है', mr: 'लघवीचा रंग: फिकट पिवळा रंग पुरेसे पाणी दर्शवतो, तर गडद पिवळा रंग पाण्याचे प्रमाण कमी असल्याचे दर्शवतो' } },
      { id: 'opt_2', text: { en: 'Whether your fingernails are exactly painted blue', hi: 'नाखूनों का रंग नीला होना', mr: 'नखे निळी असणे' } },
      { id: 'opt_3', text: { en: 'Sneezing exactly twice every morning', hi: 'रोज सुबह दो बार छींक आना', mr: 'रोज सकाळी दोनदा शिंक येणे' } },
      { id: 'opt_4', text: { en: 'The volume of sweat on your shoelaces', hi: 'जूतों के फीतों पर आने वाला पसीना', mr: 'बुटांच्या लेसवर येणारा घाम' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Urine color is the gold-standard practical self-monitoring tool for hydration. Pale, transparent straw yellow signifies optimal hydration. Dark amber or honey-colored urine indicates concentrated waste products due to inadequate fluid intake and prompts immediate rehydration.',
      hi: 'पेशाब का रंग शरीर में पानी के स्तर का सबसे विश्वसनीय संकेत है। हल्का पारदर्शी पीला रंग सही हाइड्रेशन दिखाता है। गहरा पीला रंग बताता है कि किडनी पानी बचा रही है और आपको तुरंत पानी पीना चाहिए।',
      mr: 'लघवीचा रंग हा शरीरातील पाण्याच्या प्रमाणाचा सर्वात सोपा आणि खात्रीशीर निदर्शक आहे. फिकट पिवळा रंग योग्य हायड्रेशन दर्शवतो, तर गडद पिवळा रंग शरीराला तातडीने पाण्याची गरज असल्याचे दर्शवतो.'
    },
    source: 'National Institute of Nutrition (NIN) Hydration Guidelines & British Association of Urological Surgeons',
    hint: {
      en: 'Doctors look at the color chart of urine: pale lemonade vs dark apple juice.',
      hi: 'नींबू पानी जैसा हल्का रंग बनाम सेब के जूस जैसा गहरा रंग याद करें।',
      mr: 'लिंबू सरबतासारखा फिकट रंग विरुद्ध सफरचंदाच्या रसासारखा गडद रंग विचारात घ्या.'
    }
  },
  {
    id: 'quiz_twenty_twenty_rule',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'What is the scientifically validated "20-20-20 Rule" recommended by eye specialists to prevent digital eye strain and dry eyes?',
      hi: 'मोबाइल और कंप्यूटर स्क्रीन से आंखों की थकान और सूखेपन से बचने के लिए नेत्र विशेषज्ञों द्वारा सुझाया गया "20-20-20 नियम" क्या है?',
      mr: 'मोबाईल आणि कॉम्प्युटर स्क्रीनमुळे डोळ्यांवर येणारा ताण आणि कोरडेपणा टाळण्यासाठी नेत्रतज्ज्ञांनी सुचवलेला "२०-२०-२० नियम" कोणता आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Every 20 minutes, look at an object 20 feet away for at least 20 seconds', hi: 'हर 20 मिनट बाद, 20 फीट दूर किसी वस्तु को कम से कम 20 सेकंड तक देखें', mr: 'दर २० मिनिटांनी, २० फूट अंतरावरील वस्तूवर किमान २० सेकंद लक्ष केंद्रित करावे' } },
      { id: 'opt_2', text: { en: 'Stare at a smartphone screen continuously for 20 hours without blinking', hi: 'बिना पलक झपकाए लगातार 20 घंटे स्क्रीन देखें', mr: 'न थांबता सलग २० तास स्क्रीनकडे टक लावून पाहावे' } },
      { id: 'opt_3', text: { en: 'Wash your eyes with hot soapy water 20 times every hour', hi: 'हर घंटे 20 बार गर्म साबुन के पानी से आंखें धोएं', mr: 'दर तासाला २० वेळा गरम साबणाच्या पाण्याने डोळे धुवावेत' } },
      { id: 'opt_4', text: { en: 'Drink 20 cups of tea every 20 minutes', hi: 'हर 20 मिनट में 20 कप चाय पिएं', mr: 'दर २० मिनिटांनी २० कप चहा प्यावा' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'When focusing continuously on nearby screens, the eye\'s ciliary muscles remain clamped in contraction, and blink rates plummet by 50%. The 20-20-20 rule relaxes ciliary accommodation muscles, allows tear film replenishment, and eliminates digital asthenopia (eye strain).',
      hi: 'स्क्रीन देखते समय आंखों की मांसपेशियां लगातार तनाव में रहती हैं और पलकें कम झपकती हैं। हर 20 मिनट में 20 सेकंड के लिए 20 फीट दूर देखने से आंखों की मांसपेशियों को आराम मिलता है और सूखापन दूर होता है।',
      mr: 'स्क्रीनवर काम करताना डोळ्यांची उघडझाप ५०% नी कमी होते आणि स्नायूंवर ताण येतो. दर २० मिनिटांनी २० सेकंदांसाठी २० फूट दूर पाहिल्याने डोळ्यांना विश्रांती मिळते आणि डोळ्यांचा कोरडेपणा टळतो.'
    },
    source: 'All India Ophthalmological Society (AIOS) & American Academy of Ophthalmology Guidance',
    hint: {
      en: 'Three 20s: 20 minutes interval, 20 feet focal distance, 20 seconds duration.',
      hi: 'तीन 20: 20 मिनट का समय, 20 फीट की दूरी, 20 सेकंड का आराम।',
      mr: 'तीन २० चा ताळमेळ: २० मिनिटे वेळ, २० फूट अंतर, २० सेकंद विश्रांती.'
    }
  },
  {
    id: 'quiz_iodine_deficiency_goiter',
    mode: 'knowledge_quiz',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Which essential micro-mineral is mandated by the Indian government to be added to edible table salt to prevent goiter and intellectual disability in newborns?',
      hi: 'घेंघा (गॉयटर) रोग और बच्चों में मानसिक मंदता को रोकने के लिए भारत सरकार द्वारा खाने के नमक में कौन सा खनिज मिलाना अनिवार्य किया गया है?',
      mr: 'गलगंड (Goiter) आजार आणि मुलांमधील मतिमंदत्व रोखण्यासाठी भारत सरकारने खाण्याच्या मीठामध्ये कोणते खनिज मिसळणे बंधनकारक केले आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Iodine (Potassium iodate)', hi: 'आयोडीन (Iodine)', mr: 'आयोडीन (Iodine)' } },
      { id: 'opt_2', text: { en: 'Lead chromate', hi: 'लेड क्रोमेट (सीसा)', mr: 'लेड क्रोमेट' } },
      { id: 'opt_3', text: { en: 'Chalk powder', hi: 'चाक पाउडर', mr: 'खडूची पावडर' } },
      { id: 'opt_4', text: { en: 'Pure sulfur crystals', hi: 'सल्फर', mr: 'गंधक' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Iodine is indispensable for the thyroid gland to synthesize thyroxine (T4) and triiodothyronine (T3) hormones. Iodine deficiency causes thyroid enlargement (goiter), hypothyroidism, and irreversible neurological cretinism in unborn babies. Salt iodization is one of India\'s most successful public health nutritional interventions.',
      hi: 'आयोडीन थायरॉयड ग्रंथि के लिए हार्मोन बनाने के लिए जरूरी है। इसकी कमी से गले में घेंघा रोग और बच्चों में दिमागी विकास रुक सकता है। इसलिए नमक में आयोडीन मिलाना अनिवार्य किया गया है।',
      mr: 'आयोडीन हे थायरॉईड ग्रंथीच्या कार्यासाठी आणि संप्रेरके तयार करण्यासाठी आवश्यक असते. याच्या कमतरतेमुळे गलगंड हा आजार होतो आणि मुलांचा मेंदूचा विकास खुंटतो. म्हणून मीठामध्ये आयोडीन असणे अत्यंत गरजेचे आहे.'
    },
    source: 'National Iodine Deficiency Disorders Control Programme (NIDDCP), MoHFW',
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
      en: 'Which mosquito species is the primary daytime vector transmitting Dengue, Chikungunya, and Zika viruses in urban and rural Indian environments?',
      hi: 'भारत में दिन के समय काटकर डेंगू, चिकनगुनिया और जीका वायरस फैलाने वाला मुख्य मच्छर कौन सा है?',
      mr: 'भारतात दिवसा चावून डेंग्यू, चिकुनगुनिया आणि झिका विषाणूचा प्रसार करणारा मुख्य डास कोणता आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Aedes aegypti (tiger mosquito with striped legs that bites during daylight)', hi: 'एडीज एजिप्टी (सफेद धारीदार पैरों वाला मच्छर जो दिन में काटता है)', mr: 'एडिस इजिप्ती (पायांवर पांढरे पट्टे असलेला डास, जो दिवसा चावतो)' } },
      { id: 'opt_2', text: { en: 'Female Anopheles mosquito (active strictly at late night)', hi: 'मादा एनोफिलीज मच्छर (जो मलेरिया फैलाती है)', mr: 'मादी अ‍ॅनोफिलीस डास (मलेरिया पसरवणारा डास)' } },
      { id: 'opt_3', text: { en: 'Housefly (Musca domestica)', hi: 'सामान्य घरेलू मक्खी', mr: 'घरातील माशी' } },
      { id: 'opt_4', text: { en: 'Honeybee', hi: 'मधुमक्खी', mr: 'मधमाशी' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Aedes aegypti breeds in clean stagnant water collected in flower pots, discarded tires, coolers, and overhead tanks. Unlike malaria-transmitting Anopheles (which bite late at night), Aedes mosquitoes are diurnal biters with peak activity during early morning and late afternoon hours before dusk.',
      hi: 'एडीज मच्छर साफ जमे हुए पानी (कूलर, गमले, टायर) में पनपता है और मुख्य रूप से दिन के समय काटता है। यह डेंगू और चिकनगुनिया फैलाता है। घर के आसपास पानी जमा न होने देना ही इसका सबसे बड़ा बचाव है।',
      mr: 'एडिस डास घराभोवती साचलेल्या स्वच्छ पाण्यात (कूलर, फुलदाण्या, टायर) अंडी घालतो आणि प्रामुख्याने दिवसा चावतो. यामुळे डेंग्यू आणि चिकुनगुनिया होतो. पाणी साचू न देणे हाच सर्वोत्तम प्रतिबंधक उपाय आहे.'
    },
    source: 'National Vector Borne Disease Control Programme (NVBDCP) Guidelines on Dengue Vector Control',
    hint: {
      en: 'Recognizable by its distinctive black-and-white striped legs, earning it the nickname "tiger mosquito".',
      hi: 'काले और सफेद धारीदार पैरों वाला "टाइगर मच्छर"।',
      mr: 'अंगावर आणि पायांवर काळे-पांढरे पट्टे असलेला "टायगर मॉस्किटो".'
    }
  },
  {
    id: 'quiz_amr_superbug_cause',
    mode: 'knowledge_quiz',
    difficulty: 'hard',
    points: 35,
    question: {
      en: 'What is the primary clinical cause of the alarming rise in Antimicrobial Resistance (AMR) and dangerous "superbugs" in India?',
      hi: 'भारत में एंटीबायोटिक दवाओं के बेअसर होने (Antimicrobial Resistance) और सुपरबग्स के पैदा होने का सबसे बड़ा कारण क्या है?',
      mr: 'भारतात अँटिबायोटिक्स औषधे निष्प्रभ होण्याचे (AMR) आणि घातक सुपरबग्स वाढण्याचे मुख्य कारण काय आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Over-the-counter self-medication, using antibiotics for viral colds, and stopping courses prematurely', hi: 'बिना डॉक्टर की पर्ची के एंटीबायोटिक खाना, सर्दी-खांसी में लेना और पूरा कोर्स खत्म न करना', mr: 'डॉक्टरांच्या सल्ल्याशिवाय स्वतःच अँटिबायोटिक्स घेणे, साध्या सर्दीत गोळ्या खाणे आणि औषधांचा कोर्स अर्धवट सोडणे' } },
      { id: 'opt_2', text: { en: 'Drinking boiled filtered water every morning', hi: 'रोज सुबह उबला हुआ पानी पीना', mr: 'रोज सकाळी उकळलेले पाणी पिणे' } },
      { id: 'opt_3', text: { en: 'Exercising in open garden spaces', hi: 'खुले पार्क में व्यायाम करना', mr: 'बागेमध्ये व्यायाम करणे' } },
      { id: 'opt_4', text: { en: 'Sleeping 8 hours at night', hi: 'रात में 8 घंटे शांति से सोना', mr: 'रात्री ८ तास शांत झोप घेणे' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Inappropriate antibiotic use—taking antibiotics for viral infections, demanding them over-the-counter without a medical prescription, and stopping the course after 2 days when symptoms improve—allows surviving resistant bacteria to mutate, reproduce, and share resistance genes, rendering life-saving drugs ineffective.',
      hi: 'सर्दी-जुकाम में अनावश्यक एंटीबायोटिक लेने और तबीयत ठीक लगते ही 2 दिन में दवा का कोर्स अधूरा छोड़ देने से बैक्टीरिया दवा के प्रति प्रतिरोधी (Resistant) बन जाते हैं। इससे भविष्य में साधारण संक्रमण भी जानलेवा बन सकते हैं।',
      mr: 'साध्या सर्दीत अनावश्यक अँटिबायोटिक्स घेणे आणि थोडे बरे वाटताच औषधांचा कोर्स अर्धवट सोडल्यामुळे जीवाणू त्या औषधांना सरावतात. त्यामुळे भविष्यात मोठी औषधेही निरुपयोगी ठरतात, ज्याला सुपरबग्स म्हणतात.'
    },
    source: 'National Action Plan on Antimicrobial Resistance (NAP-AMR), MoHFW & WHO AMR Action Framework',
    hint: {
      en: 'Think about people walking into pharmacies without a prescription and demanding antibiotics for a 1-day runny nose.',
      hi: 'एक दिन की सर्दी होने पर मेडिकल स्टोर से सीधे एंटीबायोटिक खरीदकर खाने की गलत आदत के बारे में सोचें।',
      mr: 'किंचित सर्दी झाली तरी मेडिकलमधून परस्पर अँटिबायोटिक गोळ्या घेऊन खाण्याच्या चुकीच्या सवयीचा विचार करा.'
    }
  },
  {
    id: 'quiz_who_hand_rub_technique',
    mode: 'knowledge_quiz',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'When washing hands thoroughly with soap, which frequently missed area harbors the highest density of bacteria and requires deliberate cleaning?',
      hi: 'हाथ धोते समय अक्सर छूट जाने वाला वह कौन सा हिस्सा है जहां सबसे ज्यादा बैक्टीरिया छिपे रहते हैं?',
      mr: 'हात धुताना सहसा दुर्लक्षिला जाणारा असा कोणता भाग आहे, जिथे सर्वाधिक जंतू साचलेले असतात?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Fingernails, thumbs, and web spaces between fingers', hi: 'नाखूनों के नीचे, दोनों अंगूठे और उंगलियों के बीच की जगह', mr: 'नखांखालील भाग, दोन्ही अंगठे आणि बोटांमधील फटी' } },
      { id: 'opt_2', text: { en: 'The outer elbow sleeve', hi: 'कोहनी का कपड़ा', mr: 'कोपराचा भाग' } },
      { id: 'opt_3', text: { en: 'The top of the shoulders', hi: 'कंधे', mr: 'खांदे' } },
      { id: 'opt_4', text: { en: 'Only the front tips of earlobes', hi: 'केवल कान के निचले हिस्से', mr: 'केवळ कानाची पाळी' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Observational handwashing studies show that individuals frequently rub only their palms together, missing the thumbs, interdigital finger webs, and subungual spaces under fingernails, where over 80% of transient hand bacteria reside. Deliberate rotational rubbing of thumbs and fingernails is essential.',
      hi: 'अध्ययनों से पता चलता है कि लोग अक्सर सिर्फ हथेलियों को रगड़ते हैं, जबकि 80% से ज्यादा कीटाणु अंगूठों, नाखूनों के नीचे और उंगलियों के बीच छिपे रहते हैं। हाथ धोते समय इन जगहों को खास तौर पर रगड़ना जरूरी है।',
      mr: 'अभ्यासातून असे दिसून आले आहे की बहुतांश लोक फक्त तळहात चोळतात. मात्र ८०% हून अधिक जंतू नखांखाली, अंगठ्यावर आणि बोटांच्या फटीत लपलेले असतात. त्यामुळे हे भाग घासून स्वच्छ करणे अत्यावश्यक आहे.'
    },
    source: 'WHO Guidelines on Hand Hygiene in Health Care & CDC Handwashing Protocols',
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
      en: 'Why has FSSAI strictly capped industrially produced Trans-Fatty Acids (TFAs) in Indian oils and vanaspati to under 2%?',
      hi: 'भारतीय खाद्य सुरक्षा प्राधिकरण (FSSAI) ने तेल और वनस्पति घी में इंडस्ट्रियल ट्रांस-फैट को 2% से कम रखने का कड़ा नियम क्यों बनाया है?',
      mr: 'भारतीय अन्न सुरक्षा प्राधिकरणाने (FSSAI) खाद्यतेल आणि वनस्पती तुपामधील ट्रान्स-फॅट्सचे प्रमाण २% पेक्षा कमी ठेवण्याचा कडक नियम का केला आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Trans-fats simultaneously increase "bad" LDL cholesterol AND decrease "good" HDL cholesterol, accelerating coronary blockages', hi: 'ट्रांस-फैट एक साथ "खराब" एलडीएल कोलेस्ट्रॉल बढ़ाते हैं और "अच्छे" एचडीएल को घटाते हैं, जिससे हार्ट अटैक का खतरा बहुत बढ़ जाता है', mr: 'ट्रान्स-फॅट्स एकाच वेळी घातक LDL कोलेस्ट्रॉल वाढवतात आणि चांगले HDL कोलेस्ट्रॉल कमी करतात, ज्यामुळे हृदयविकाराचा धोका प्रचंड वाढतो' } },
      { id: 'opt_2', text: { en: 'Trans-fats turn food purple in colour', hi: 'ट्रांस-फैट भोजन का रंग बैंगनी कर देते हैं', mr: 'ट्रान्स-फॅट्समुळे अन्नाचा रंग जांभळा होतो' } },
      { id: 'opt_3', text: { en: 'Trans-fats make foods freeze into solid stone at summer temperatures', hi: 'ट्रांस-फैट गर्मियों में भोजन को पत्थर जैसा जमा देते हैं', mr: 'ट्रान्स-फॅट्समुळे उन्हाळ्यात अन्न दगडासारखे घट्ट होते' } },
      { id: 'opt_4', text: { en: 'Trans-fats improve marathon running speed', hi: 'ट्रांस-फैट दौड़ने की गति को बहुत तेज कर देते हैं', mr: 'ट्रान्स-फॅट्समुळे धावण्याचा वेग प्रचंड वाढतो' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Partially hydrogenated oils (vanaspati, commercial bakery shortenings, repeatedly reheated frying oil) contain industrial trans-fats. Trans-fat is the single most deleterious dietary lipid: it drives systemic endothelial inflammation, raises atherogenic LDL cholesterol, and suppresses protective HDL cholesterol, multiplying coronary artery disease risk.',
      hi: 'ट्रांस-फैट (डालडा, वनस्पति घी, बार-बार खौलाया गया तेल) सबसे खतरनाक वसा है। यह धमनियों में खराब कोलेस्ट्रॉल (LDL) जमा करता है और अच्छे कोलेस्ट्रॉल (HDL) को कम करता है, जिससे दिल का दौरा पड़ने का खतरा कई गुना बढ़ जाता है।',
      mr: 'वनस्पती तूप, डालडा आणि वारंवार उकळलेले तेल यांमध्ये घातक ट्रान्स-फॅट्स असतात. हे शरीरातील वाईट कोलेस्ट्रॉल वाढवून चांगल्या कोलेस्ट्रॉलला नष्ट करतात आणि रक्तवाहिन्यांमध्ये अडथळे (Blockages) निर्माण करतात.'
    },
    source: 'FSSAI Food Safety and Standards (Prohibition and Restrictions on Sales) Regulations & WHO REPLACE Initiative',
    hint: {
      en: 'What unique double-hazard do trans-fats cause to your LDL (bad) and HDL (good) cholesterol profiles?',
      hi: 'सोचें कि ट्रांस-फैट खराब कोलेस्ट्रॉल को बढ़ाने के साथ-साथ अच्छे कोलेस्ट्रॉल पर क्या बुरा असर डालते हैं।',
      mr: 'ट्रान्स-फॅट्स वाईट कोलेस्ट्रॉल वाढवण्यासोबतच चांगल्या कोलेस्ट्रॉलचे काय नुकसान करतात याचा विचार करा.'
    }
  }
];
