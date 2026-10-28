import { HealthyDayActivity } from '../types';

export const HEALTHY_DAY_ACTIVITIES: HealthyDayActivity[] = [
  // ==========================================
  // MORNING (6:00 AM – 11:00 AM) - 5 ACTIVITIES
  // ==========================================
  {
    id: 'm_walk_sunlight',
    category: 'movement',
    timeSlot: 'morning',
    title: {
      en: '30-Minute Morning Walk in the Sun',
      hi: 'सुबह 30 मिनट की सैर और धूप',
      mr: 'सकाळी ३० मिनिटे चालणे आणि कोवळे ऊन'
    },
    description: {
      en: 'Helps your body make Vitamin D, wakes up your mind, and keeps your heart healthy.',
      hi: 'शरीर को विटामिन D देता है, दिमाग को तरोताजा करता है और दिल को स्वस्थ रखता है।',
      mr: 'शरीराला व्हिटॅमिन D मिळते, मन ताजेतवाने होते आणि हृदय निरोगी राहते.'
    },
    healthScoreDelta: 25,
    isOptimal: true,
    educationalTip: {
      en: 'Morning sunlight sets your body clock so you feel energetic during the day and sleep deeply at night.',
      hi: 'सुबह की धूप शरीर की प्राकृतिक घड़ी को सही रखती है, जिससे रात में अच्छी नींद आती है।',
      mr: 'सकाळच्या उन्हामुळे शरीराची घड्याळ व्यवस्थित राहते आणि रात्री गाढ झोप लागते.'
    }
  },
  {
    id: 'm_balanced_breakfast',
    category: 'nutrition',
    timeSlot: 'morning',
    title: {
      en: 'Healthy Breakfast (Sprouts, Eggs, or Moong Chilla)',
      hi: 'पौष्टिक नाश्ता (अंकुरित मूंग, अंडा या बेसन-मूंग चीला)',
      mr: 'पौष्टिक नाश्ता (मोड आलेली कडधान्ये, अंडे किंवा धिरडे)'
    },
    description: {
      en: 'Gives steady energy throughout the morning without sudden sugar spikes or tiredness.',
      hi: 'दिनभर स्थिर ऊर्जा देता है, जिससे अचानक थकान या कमजोरी महसूस नहीं होती।',
      mr: 'दिवसभर चांगली ताकद देतो, ज्यामुळे थकवा किंवा चक्कर येत नाही.'
    },
    healthScoreDelta: 20,
    isOptimal: true,
    educationalTip: {
      en: 'A high-protein breakfast keeps you full for hours and stops you from craving junk food before lunch.',
      hi: 'प्रोटीन से भरपूर नाश्ता पेट को भरा रखता है और दोपहर तक फालतू खाने से बचाता है।',
      mr: 'प्रथिनांनी भरलेला नाश्ता पोट तृप्त ठेवतो आणि दुपारपर्यंत जंक फूड खाण्याची इच्छा होत नाही.'
    }
  },
  {
    id: 'm_hydration_warm_water',
    category: 'hydration',
    timeSlot: 'morning',
    title: {
      en: 'Drink 1–2 Glasses of Water upon Waking Up',
      hi: 'उठते ही 1-2 गिलास सादा या गुनगुना पानी पीना',
      mr: 'सकाळी उठल्यावर १-२ ग्लास साधे किंवा कोमट पाणी पिणे'
    },
    description: {
      en: 'Restores fluid after a night of sleep, helps your kidneys clean waste, and clears your stomach.',
      hi: 'रातभर की पानी की कमी पूरी करता है, किडनी को साफ रखता है और पेट साफ करने में मदद करता है।',
      mr: 'रात्रभरातील पाण्याची कमतरता भरून काढतो, पोट साफ ठेवतो आणि शरीर ताजेतवाने करतो.'
    },
    healthScoreDelta: 15,
    isOptimal: true,
    educationalTip: {
      en: 'Drinking water before your morning chai prevents acidity and starts digestion smoothly.',
      hi: 'सुबह की चाय से पहले पानी पीने से गैस और एसिडिटी की समस्या नहीं होती।',
      mr: 'सकाळच्या चहापूर्वी पाणी प्यायल्याने ॲसिडिटी आणि जळजळ होत नाही.'
    }
  },
  {
    id: 'm_skip_breakfast_chai',
    category: 'nutrition',
    timeSlot: 'morning',
    title: {
      en: 'Skip Breakfast and Drink Only Sweet Tea',
      hi: 'नाश्ता छोड़ देना और खाली पेट सिर्फ मीठी चाय पीना',
      mr: 'नाश्ता न करणे आणि रिकाम्या पोटी गोड चहा पिणे'
    },
    description: {
      en: 'Can cause burning acidity in the stomach, sudden tiredness, and poor morning concentration.',
      hi: 'पेट में जलन, एसिडिटी, कमजोरी और काम में ध्यान न लगने का कारण बनता है।',
      mr: 'पोटात जळजळ, पित्त, थकवा आणि कामात लक्ष न लागणे असा त्रास होतो.'
    },
    healthScoreDelta: -20,
    isOptimal: false,
    educationalTip: {
      en: 'Chai on an empty stomach irritates the stomach lining. Always have a light snack or water first.',
      hi: 'खाली पेट चाय पीने से पेट में एसिड बढ़ जाता है। पहले हमेशा थोड़ा पानी या हल्का नाश्ता लें।',
      mr: 'रिकाम्या पोटी चहा प्यायल्याने पोटाला त्रास होतो. चहाआधी नेहमी पाणी किंवा हलका खाऊ घ्यावा.'
    }
  },
  {
    id: 'm_snooze_screen_scroll',
    category: 'sleep',
    timeSlot: 'morning',
    title: {
      en: 'Snooze Alarm Repeatedly & Scroll Phone in Bed',
      hi: 'बार-बार अलार्म बंद करना और बिस्तर पर फोन देखना',
      mr: 'वारंवार अलार्म स्नूझ करणे आणि अंथरुणावर फोन पाहणे'
    },
    description: {
      en: 'Leaves you feeling groggy, strains your eyes in the dark, and causes rushed morning stress.',
      hi: 'सिर भारी रहता है, आंखों पर जोर पड़ता है और सुबह की भागदौड़ में तनाव बढ़ जाता है।',
      mr: 'उठल्यावर डोके जड होते, डोळ्यांवर ताण येतो आणि सकाळची घाई-गडबड व ताण वाढतो.'
    },
    healthScoreDelta: -15,
    isOptimal: false,
    educationalTip: {
      en: 'Hitting snooze restarts shallow sleep that makes you feel more tired. Getting up at once gives more energy.',
      hi: 'बार-बार स्नूज़ दबाने से नींद पूरी नहीं होती बल्कि उठने के बाद और ज्यादा आलस महसूस होता है।',
      mr: 'वारंवार अलार्म पुढे ढकलल्याने झोप पूर्ण होत नाही आणि उठल्यावर जास्त आळस येतो.'
    }
  },

  // ==========================================
  // AFTERNOON (11:00 AM – 4:00 PM) - 5 ACTIVITIES
  // ==========================================
  {
    id: 'a_balanced_thali',
    category: 'nutrition',
    timeSlot: 'afternoon',
    title: {
      en: 'Simple Homemade Thali (Roti, Dal, Sabzi & Salad)',
      hi: 'सादी घर की थाली (रोटी, दाल, मौसमी सब्जी और सलाद)',
      mr: 'घरचे साधे जेवण (पोळी, डाळ, ताजी भाजी आणि कोशिंबीर)'
    },
    description: {
      en: 'Provides balanced vitamins, fiber for smooth digestion, and steady energy for work.',
      hi: 'शरीर को जरूरी पोषण देता है, पाचन ठीक रखता है और दोपहर के काम के लिए ऊर्जा बनाए रखता है।',
      mr: 'शरीराला पोषण मिळते, पचन सुधारते आणि दुपारच्या कामासाठी उत्तम ऊर्जा मिळते.'
    },
    healthScoreDelta: 25,
    isOptimal: true,
    educationalTip: {
      en: 'Eating raw salad like cucumber or tomato before your meal keeps blood sugar steady.',
      hi: 'भोजन से पहले खीरा या ककड़ी का सलाद खाने से रक्त में शुगर अचानक नहीं बढ़ती।',
      mr: 'जेवणापूर्वी काकडी किंवा टोमॅटो खाल्ल्याने रक्तातील साखर वेगाने वाढत नाही.'
    }
  },
  {
    id: 'a_post_lunch_stroll',
    category: 'movement',
    timeSlot: 'afternoon',
    title: {
      en: '10-Minute Gentle Walk after Lunch (Shatapawali)',
      hi: 'दोपहर के भोजन के बाद 10 मिनट टहलना (शतपावली)',
      mr: 'दुपारच्या जेवणानंतर १० मिनिटे शतपावली करणे'
    },
    description: {
      en: 'Prevents heavy post-lunch sleepiness, relieves bloating, and aids digestion naturally.',
      hi: 'खाने के बाद की भारी सुस्ती दूर करता है, गैस रोकता है और भोजन को आसानी से पचाता है।',
      mr: 'जेवणानंतर येणारा आळस घालवतो, गॅस टाळतो आणि पचनास मदत करतो.'
    },
    healthScoreDelta: 15,
    isOptimal: true,
    educationalTip: {
      en: 'Walking just 500 to 1,000 steps after eating helps your muscles absorb food energy gently.',
      hi: 'खाने के बाद केवल 500 कदम टहलने से शरीर खाने से मिली ऊर्जा का सही इस्तेमाल कर पाता है।',
      mr: 'जेवणानंतर थोडे पावले चालल्याने अन्नातील ऊर्जा शरीरासाठी उत्तम प्रकारे वापरली जाते.'
    }
  },
  {
    id: 'a_mindful_desk_stretch',
    category: 'mindfulness',
    timeSlot: 'afternoon',
    title: {
      en: '5-Minute Neck & Back Stretches with Deep Breaths',
      hi: '5 मिनट गर्दन और पीठ की कसरत व गहरी सांसें',
      mr: '५ मिनिटे मान व पाठीचे व्यायाम आणि दीर्घ श्वास'
    },
    description: {
      en: 'Relieves stiffness from sitting, rests tired eyes, and refreshes your mind.',
      hi: 'कुर्सी पर बैठने से आई अकड़न दूर करता है, थकी आंखों को आराम देता है और मन शांत करता है।',
      mr: 'बसून येणारी कंबरदुखी कमी करतो, डोळ्यांना विश्रांती देतो आणि मन ताजेतवाने करतो.'
    },
    healthScoreDelta: 15,
    isOptimal: true,
    educationalTip: {
      en: 'Taking deep, slow breaths calms your nervous system and helps you refocus on your tasks.',
      hi: 'लंबी गहरी सांस लेने से मन शांत होता है और काम में एकाग्रता तुरंत लौट आती है।',
      mr: 'दीर्घ श्वास घेतल्याने मन शांत होते आणि कामात पुन्हा लक्ष लागते.'
    }
  },
  {
    id: 'a_fast_food_soda',
    category: 'nutrition',
    timeSlot: 'afternoon',
    title: {
      en: 'Heavy Fried Samosas or Fast Food with Cold Drink',
      hi: 'भारी तले समोसे या फास्ट फूड और कोल्ड ड्रिंक',
      mr: 'तळलेले समोसे किंवा फास्ट फूड आणि थंड पेय'
    },
    description: {
      en: 'Packed with extra grease and sugar, causing heavy afternoon drowsiness and stomach discomfort.',
      hi: 'अत्यधिक तेल और चीनी से भरा, जो भारी आलस, गैस और पेट में भारीपन पैदा करता है।',
      mr: 'जास्त तेल आणि साखरेमुळे दुपारी प्रचंड आळस येतो आणि पोट जड होते.'
    },
    healthScoreDelta: -25,
    isOptimal: false,
    educationalTip: {
      en: 'Oily food takes hours to digest, drawing blood to your stomach and making you feel sleepy.',
      hi: 'तले हुए खाने को पचने में बहुत समय लगता है, जिससे शरीर सुस्त और नींद में रहता है।',
      mr: 'तळलेले अन्न पचायला वेळ लागतो, ज्यामुळे मेंदू शिथिल होतो आणि आळस येतो.'
    }
  },
  {
    id: 'a_ultra_processed_snack',
    category: 'nutrition',
    timeSlot: 'afternoon',
    title: {
      en: 'Packaged Salty Chips & Sugary Energy Drink',
      hi: 'पैकेट वाले चिप्स और मीठी एनर्जी ड्रिंक',
      mr: 'पॅकबंद चिप्स आणि गोड एनर्जी ड्रिंक'
    },
    description: {
      en: 'Gives a quick sugar rush followed by a sudden crash, making you feel irritable and exhausted.',
      hi: 'थोड़ी देर के लिए फुर्ती देता है और फिर अचानक भारी सुस्ती और थकान पैदा कर देता है।',
      mr: 'थोड्या वेळात ताकद देतो पण लगेच तीव्र थकवा आणि चिडचिड निर्माण करतो.'
    },
    healthScoreDelta: -20,
    isOptimal: false,
    educationalTip: {
      en: 'Replace chips with roasted chana, peanuts, or makhana for long-lasting, healthy energy.',
      hi: 'चिप्स की जगह भुने चने, मूंगफली या मखाने खाने से शरीर को लगातार अच्छी ताकत मिलती है।',
      mr: 'चिप्सऐवजी भाजलेले चणे किंवा मखाणे खाल्ल्यास दिवसभर चांगली ऊर्जा टिकून राहते.'
    }
  },

  // ==========================================
  // EVENING (4:00 PM – 8:00 PM) - 5 ACTIVITIES
  // ==========================================
  {
    id: 'e_sports_movement',
    category: 'movement',
    timeSlot: 'evening',
    title: {
      en: '45 Minutes of Sports, Cycling, or Brisk Walking',
      hi: '45 मिनट खेलकूद, साइकिल चलाना या तेज टहलना',
      mr: '४५ मिनिटे खेळ, सायकल चालवणे किंवा वेगाने चालणे'
    },
    description: {
      en: 'Strengthens your heart and muscles, burns extra calories, and melts away day-to-day stress.',
      hi: 'दिल और मांसपेशियों को मजबूत करता है, वजन नियंत्रित रखता है और दिनभर का तनाव दूर करता है।',
      mr: 'हृदय आणि स्नायू मजबूत करतो, वजन नियंत्रणात ठेवतो आणि ताणतणाव दूर करतो.'
    },
    healthScoreDelta: 25,
    isOptimal: true,
    educationalTip: {
      en: 'Daily exercise is one of the best ways to keep blood pressure and sugar levels in a safe range.',
      hi: 'रोजाना कसरत करने से ब्लड प्रेशर और शुगर दोनों सुरक्षित दायरे में बने रहते हैं।',
      mr: 'नियमित व्यायामामुळे रक्तदाब आणि साखर दोन्ही नियंत्रणात राहतात.'
    }
  },
  {
    id: 'e_mindful_hydration',
    category: 'hydration',
    timeSlot: 'evening',
    title: {
      en: 'Evening Drink: Fresh Coconut Water or Nimbu Paani',
      hi: 'शाम का पेय: नारियल पानी या ताजा नींबू पानी',
      mr: 'संध्याकाळचे पेय: नारळ पाणी किंवा ताजे लिंबू पाणी'
    },
    description: {
      en: 'Refreshes you with natural minerals and water without unwanted syrups or chemicals.',
      hi: 'बिना किसी रसायन या फालतू चीनी के शरीर को प्राकृतिक खनिज और ताजगी देता है।',
      mr: 'कोणत्याही रसायनांशिवाय शरीराला नैसर्गिक खनिजे आणि ताजेतवानेपणा मिळतो.'
    },
    healthScoreDelta: 15,
    isOptimal: true,
    educationalTip: {
      en: 'Drinking water in the evening prevents confusing simple thirst with late-night food cravings.',
      hi: 'शाम को पानी पीने से शरीर की प्यास बुझती है और बिना बात के कुछ खाने की इच्छा नहीं होती।',
      mr: 'संध्याकाळी पुरेसे पाणी प्यायल्याने उगाच भूक लागण्याची खोटी भावना होत नाही.'
    }
  },
  {
    id: 'e_social_family_walk',
    category: 'mindfulness',
    timeSlot: 'evening',
    title: {
      en: 'Park Walk with Family or Chatting with Friends',
      hi: 'परिवार के साथ पार्क में टहलना या दोस्तों से बातचीत',
      mr: 'कुटुंबासोबत बागेत फिरणे किंवा मित्रांशी गप्पा मारणे'
    },
    description: {
      en: 'Lifts your mood, strengthens relationships, and helps your mind switch off from work.',
      hi: 'मन को प्रसन्न करता है, रिश्तों को मजबूत बनाता है और काम की चिंता को दिमाग से निकालता है।',
      mr: 'मन आनंदी करते, नातेसंबंध घट्ट करते आणि कामाची काळजी दूर करते.'
    },
    healthScoreDelta: 20,
    isOptimal: true,
    educationalTip: {
      en: 'Spending quality time talking with loved ones is scientifically proven to lower heart stress.',
      hi: 'अपनों के साथ हंसने-बोलने से मानसिक शांति मिलती है और दिल पर तनाव कम होता है।',
      mr: 'आपल्या माणसांसोबत वेळ घालवल्याने मानसिक ताण कमी होतो आणि आरोग्य सुधारते.'
    }
  },
  {
    id: 'e_continuous_chair_sitting',
    category: 'movement',
    timeSlot: 'evening',
    title: {
      en: 'Sit for 4 Hours Straight without Standing Up',
      hi: 'बिना उठे लगातार 4 घंटे एक ही जगह बैठे रहना',
      mr: 'एकदाही न उठता सलग ४ तास एकाच जागी बसून राहणे'
    },
    description: {
      en: 'Stiffens your lower back, slows blood flow in your legs, and makes you feel lazy.',
      hi: 'कमर में दर्द पैदा करता है, पैरों में खून का बहाव धीमा करता है और सुस्ती बढ़ाता है।',
      mr: 'कंबरदुखी वाढवते, पायांमधील रक्तप्रवाह मंदावतो आणि शरीराला आळस येतो.'
    },
    healthScoreDelta: -20,
    isOptimal: false,
    educationalTip: {
      en: 'Stand up and stretch for just 1 minute every hour to keep your blood flowing well.',
      hi: 'हर घंटे सिर्फ 1 मिनट खड़े होकर थोड़ा अंगड़ाई लेने से शरीर में चुस्ती बनी रहती है।',
      mr: 'दर एका तासाने फक्त १ मिनिट उभे राहून हातपाय ताणल्यास रक्ताभिसरण सुरळीत राहते.'
    }
  },
  {
    id: 'e_chain_smoking_stress',
    category: 'movement',
    timeSlot: 'evening',
    title: {
      en: 'Smoking Cigarettes or Vaping to Deal with Stress',
      hi: 'तनाव दूर करने के लिए सिगरेट या बीड़ी पीना',
      mr: 'ताण घालवण्यासाठी सिगारेट किंवा विडी ओढणे'
    },
    description: {
      en: 'Narrows blood vessels, damages lung airways, and spikes blood pressure and heart risks.',
      hi: 'खून की नलियों को सिकोड़ता है, फेफड़ों को नुकसान पहुंचाता है और हार्ट अटैक का खतरा बढ़ाता है।',
      mr: 'रक्तवाहिन्या आकुंचन पावतात, फुप्फुसांचे नुकसान होते आणि हृदयविकाराचा धोका वाढतो.'
    },
    healthScoreDelta: -35,
    isOptimal: false,
    educationalTip: {
      en: 'Smoking only gives brief false relief while harming arteries. A walk or deep breathing calms stress safely.',
      hi: 'धूम्रपान तनाव दूर नहीं करता बल्कि शरीर को नुकसान पहुंचाता है। टहलना या गहरी सांस लेना सुरक्षित उपाय है।',
      mr: 'धूम्रपानामुळे ताण कमी होत नाही उलट शरीर बिघडते. फिरणे किंवा प्राणायाम हा उत्तम उपाय आहे.'
    }
  },

  // ==========================================
  // NIGHT (8:00 PM – 6:00 AM) - 5 ACTIVITIES
  // ==========================================
  {
    id: 'n_early_light_dinner',
    category: 'nutrition',
    timeSlot: 'night',
    title: {
      en: 'Light Dinner 2 Hours before Bed (Khichdi or Soup)',
      hi: 'सोने से 2 घंटे पहले हल्का भोजन (खिचड़ी या सूप-सब्जी)',
      mr: 'झोपण्याच्या २ तास आधी हलके जेवण (खिचडी किंवा सूप)'
    },
    description: {
      en: 'Gives your stomach time to digest food, preventing heartburn and helping you sleep soundly.',
      hi: 'भोजन को पचने का पूरा समय मिलता है, सीने में जलन नहीं होती और अच्छी नींद आती है।',
      mr: 'अन्न पचायला वेळ मिळतो, छातीत जळजळ होत नाही आणि शांत झोप लागते.'
    },
    healthScoreDelta: 20,
    isOptimal: true,
    educationalTip: {
      en: 'Eating light at night keeps your body calm so it can focus on healing while you sleep.',
      hi: 'रात में हल्का खाने से शरीर आराम से सो पाता है और सुबह तरोताजा महसूस होता है।',
      mr: 'रात्री हलके जेवल्याने शरीराला उत्तम विश्रांती मिळते आणि सकाळी ताजेतवाने वाटते.'
    }
  },
  {
    id: 'n_screen_free_wind_down',
    category: 'mindfulness',
    timeSlot: 'night',
    title: {
      en: 'Keep Phone Away 45 Minutes before Sleeping',
      hi: 'सोने से 45 मिनट पहले मोबाइल फोन दूर रख देना',
      mr: 'झोपण्यापूर्वी ४५ मिनिटे मोबाईल फोन दूर ठेवणे'
    },
    description: {
      en: 'Protects your eyes from harsh screen light and prepares your brain for quick, restful sleep.',
      hi: 'स्क्रीन की तेज रोशनी से आंखों को बचाता है और दिमाग को जल्दी सोने के लिए तैयार करता है।',
      mr: 'स्क्रीनच्या प्रखर प्रकाशापासून डोळ्यांचे रक्षण करतो आणि मेंदूला झोपेसाठी तयार करतो.'
    },
    healthScoreDelta: 20,
    isOptimal: true,
    educationalTip: {
      en: 'Screen light tricks your brain into thinking it is daytime. Reading a book helps you fall asleep faster.',
      hi: 'फोन की रोशनी दिमाग को जगाए रखती है। सोने से पहले किताब पढ़ना या शांत संगीत सुनना फायदेमंद है।',
      mr: 'मोबाईलच्या प्रकाशाने मेंदू जागा राहतो. त्याऐवजी पुस्तक वाचल्यास झोप लवकर येते.'
    }
  },
  {
    id: 'n_dark_cool_bedroom',
    category: 'sleep',
    timeSlot: 'night',
    title: {
      en: 'Quiet, Dark, and Comfortable Bedroom for 7–8 Hours of Sleep',
      hi: 'शांत, अंधेरा कमरा और 7-8 घंटे की नियमित नींद',
      mr: 'शांत, अंधारी खोली आणि ७-८ तासांची गाढ झोप'
    },
    description: {
      en: 'Helps your body repair tissues, supports memory, and keeps your immune system strong.',
      hi: 'शरीर की थकान मिटाता है, याददाश्त दुरुस्त रखता है और बीमारियों से लड़ने की ताकत बढ़ाता है।',
      mr: 'शरीराचा शीण घालवतो, स्मरणशक्ती सुधारतो आणि रोगप्रतिकारक शक्ती मजबूत ठेवतो.'
    },
    healthScoreDelta: 20,
    isOptimal: true,
    educationalTip: {
      en: 'Sleeping in complete darkness allows your brain to release natural sleep hormones that keep you healthy.',
      hi: 'अंधेरे कमरे में सोने से शरीर में प्राकृतिक नींद के तत्व सही बनते हैं जो सेहतमंद रखते हैं।',
      mr: 'अंधाऱ्या खोलीत झोपल्याने शरीरात नैसर्गिक झोपेचे हार्मोन्स योग्य प्रमाणात तयार होतात.'
    }
  },
  {
    id: 'n_heavy_spicy_midnight_snack',
    category: 'nutrition',
    timeSlot: 'night',
    title: {
      en: 'Heavy Spicy Biryani or Greasy Fast Food at 11:30 PM',
      hi: 'रात 11:30 बजे भारी मसालेदार बिरयानी या तला खाना खाना',
      mr: 'रात्री उशिरा तिखट बिर्याणी किंवा तेलकट फास्ट फूड खाणे'
    },
    description: {
      en: 'Causes sour burps, burning chest pain, broken sleep, and an upset stomach the next morning.',
      hi: 'खट्टी डकारें, सीने में जलन, बार-बार नींद टूटना और सुबह पेट खराब होने की समस्या पैदा करता है।',
      mr: 'आंबट ढेकर, छातीत जळजळ, अपूर्ण झोप आणि सकाळी पोट बिघडण्याची समस्या निर्माण करतो.'
    },
    healthScoreDelta: -25,
    isOptimal: false,
    educationalTip: {
      en: 'Lying down right after oily food makes stomach acid push upward into your food pipe, causing acidity.',
      hi: 'भारी भोजन के तुरंत बाद सोने से पेट का तेजाब ऊपर गले की ओर आता है जिससे जलन होती है।',
      mr: 'तेलकट जेवणानंतर लगेच झोपल्याने पोटातील ॲसिड वर येते आणि छातीत आग होते.'
    }
  },
  {
    id: 'n_midnight_binge_phone',
    category: 'sleep',
    timeSlot: 'night',
    title: {
      en: 'Watching Videos on Phone in Bed until 2:00 AM',
      hi: 'बिस्तर पर लेटकर रात 2 बजे तक फोन पर वीडियो देखना',
      mr: 'अंथरुणावर झोपून रात्री २ वाजेपर्यंत मोबाईलवर व्हिडिओ पाहणे'
    },
    description: {
      en: 'Cuts your sleep short, causes tired and dry eyes, and leaves you exhausted the next morning.',
      hi: 'नींद पूरी नहीं होने देता, आंखों में जलन पैदा करता है और अगली सुबह बहुत थकान महसूस होती है।',
      mr: 'झोप अपुरी राहते, डोळे दुखतात आणि दुसऱ्या दिवशी सकाळी प्रचंड थकवा जाणवतो.'
    },
    healthScoreDelta: -30,
    isOptimal: false,
    educationalTip: {
      en: 'Endless video scrolling excites your brain and stops you from slipping into deep, healing sleep.',
      hi: 'देर रात तक वीडियो देखने से दिमाग जागता रहता है और गहरी आरामदायक नींद नहीं आ पाती।',
      mr: 'रात्री उशिरापर्यंत मोबाईल पाहिल्याने मेंदू शांत होत नाही आणि गाढ विश्रांती मिळत नाही.'
    }
  }
];
