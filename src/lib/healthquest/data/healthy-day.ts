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
      en: '30-min Brisk Walk & Morning Sunlight',
      hi: '30 मिनट तेज चाल और सुबह की धूप',
      mr: '३० मिनिटे जलद चालणे आणि सकाळचे कोवळे ऊन'
    },
    description: {
      en: 'Stimulates Vitamin D, calibrates your biological circadian clock, and energizes heart & lungs.',
      hi: 'विटामिन D बनाता है, जैविक घड़ी को संतुलित करता है और फेफड़ों को ऊर्जा देता है।',
      mr: 'व्हिटॅमिन D मिळते, जैविक घड्याळ सुधारते आणि हृदयाचे आरोग्य चांगले राहते.'
    },
    healthScoreDelta: 25,
    isOptimal: true,
    educationalTip: {
      en: 'Morning outdoor sunlight exposure sets retinal melanopsin receptors, ensuring deep restorative sleep 16 hours later.',
      hi: 'सुबह की धूप मेलाटोनिन को नियंत्रित करती है जिससे रात में गहरी नींद आती है।',
      mr: 'सकाळच्या कोवळ्या उन्हामुळे रात्री शांत आणि गाढ झोप लागण्यास मदत होते.'
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
      en: 'Steady glucose release without sudden spikes, maintaining focus and satiety until lunch.',
      hi: 'रक्त में शुगर को स्थिर रखता है और दोपहर तक भूख और एकाग्रता को बनाए रखता है।',
      mr: 'रक्तातील साखर नियंत्रित ठेवते आणि दुपारपर्यंत पोट भरलेले राहून कामात लक्ष लागते.'
    },
    healthScoreDelta: 20,
    isOptimal: true,
    educationalTip: {
      en: 'Combining complex carbs with protein prevents mid-morning energy crashes and reduces sugar cravings.',
      hi: 'जटिल कार्ब्स और प्रोटीन का मेल सुबह की थकान को रोकता है और मीठे की तलब कम करता है।',
      mr: 'कार्बोहायड्रेट्स आणि प्रथिनांचे संतुलन दुपारपूर्वी येणारा थकवा टाळते.'
    }
  },
  {
    id: 'm_hydration_warm_water',
    category: 'hydration',
    timeSlot: 'morning',
    title: {
      en: 'Morning Hydration: 500 ml Room Temperature Water upon Waking',
      hi: 'सुबह का जलपान: सोकर उठते ही 500 मिली सादा या हल्का गुनगुना पानी',
      mr: 'सकाळचे हायड्रेशन: झोपेतून उठल्याबरोबर ५०० मिली साधे किंवा कोमट पाणी'
    },
    description: {
      en: 'Rehydrates tissues after 8 hours of nocturnal fluid loss, jumpstarting kidney filtration and bowel motility.',
      hi: 'रात भर की पानी की कमी को पूरा करता है, किडनी को सक्रिय करता है और पाचन को जगाता है।',
      mr: 'रात्रभरातील पाण्याची कमतरता भरून काढते, मूत्रपिंडाचे कार्य सुरू करते आणि शौचास साफ होते.'
    },
    healthScoreDelta: 15,
    isOptimal: true,
    educationalTip: {
      en: 'Drinking water before your first tea or coffee prevents gastrointestinal acidity and aids bile secretion.',
      hi: 'चाय या कॉफी से पहले पानी पीने से एसिडिटी का खतरा कम होता है।',
      mr: 'सकाळी चहा किंवा कॉफी घेण्यापूर्वी पाणी प्यायल्याने पित्ताचा त्रास टळतो.'
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
      en: 'Triggers acid reflux, gastric mucosal irritation, sudden insulin surges, and morning brain fog.',
      hi: 'एसिडिटी, पेट की अंदरूनी परत में जलन, अचानक ब्लड शुगर बढ़ना और ध्यान केंद्रित करने में परेशानी।',
      mr: 'पित्त (Acidity) वाढवते, पोटाचे अस्तर खराब करते आणि रक्तातील साखरेचे संतुलन बिघडवते.'
    },
    healthScoreDelta: -20,
    isOptimal: false,
    educationalTip: {
      en: 'Tea on an empty stomach stimulates excessive gastric acid without food buffer, eroding mucosal linings.',
      hi: 'खाली पेट चाय पीने से पेट में एसिड की मात्रा बहुत बढ़ जाती है जो गैस्ट्रिक अल्सर का कारण बन सकती है।',
      mr: 'उपाशीपोटी चहा प्यायल्याने पोटातील ॲसिड वाढून पित्ताचा आणि अल्सरचा धोका उद्भवतो.'
    }
  },
  {
    id: 'm_snooze_screen_scroll',
    category: 'sleep',
    timeSlot: 'morning',
    title: {
      en: 'Snooze Alarm 4 Times & 30-Minute Bed Screen Scrolling in Dark',
      hi: '4 बार अलार्म स्नूज़ करना और अंधेरे में बिस्तर पर 30 मिनट फोन देखना',
      mr: '४ वेळा अलार्म स्नूझ करणे आणि अंधारात अंथरुणावर पडून ३० मिनिटे मोबाईल स्क्रोल करणे'
    },
    description: {
      en: 'Fragments sleep architecture with sleep inertia, creates morning anxiety, and strains eye muscles.',
      hi: 'नींद के चक्र को तोड़कर दिनभर सुस्ती लाता है, सुबह का तनाव बढ़ाता है और आंखों पर जोर डालता है।',
      mr: 'झोप विस्कळीत होऊन दिवसभर आळस राहतो, सकाळचा मानसिक ताण वाढतो आणि डोळ्यांवर ताण येतो.'
    },
    healthScoreDelta: -15,
    isOptimal: false,
    educationalTip: {
      en: 'Repeated 9-minute snoozing confuses the brain into entering fragmented light sleep cycles (sleep inertia).',
      hi: 'बार-बार अलार्म स्नूज़ करने से दिमाग भ्रमित रहता है और उठने के बाद 2 घंटे तक भारी थकान रहती है।',
      mr: 'वारंवार अलार्म स्नूझ केल्याने मेंदू गाढ झोपेत जाऊ शकत नाही आणि उठल्यावर प्रचंड जडपणा जाणवतो.'
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
      en: 'Balanced Indian Thali (Dal, Seasonal Sabzi, Roti/Rice, Salad & Buttermilk)',
      hi: 'संतुलित भारतीय थाली (दाल, मौसमी सब्जी, रोटी/चावल, भरपूर सलाद और छाछ)',
      mr: 'संतुलित भारतीय जेवण (वरण/डाळ, भाजी, चपाती/भात, सॅलड आणि ताक)'
    },
    description: {
      en: 'Complete protein blend, high dietary fiber, cellular hydration, and natural digestive probiotics.',
      hi: 'पूर्ण प्रोटीन, पर्याप्त फाइबर, पानी और प्राकृतिक प्रोबायोटिक्स (छाछ) का आदर्श संतुलन।',
      mr: 'उत्तम प्रथिने, भरपूर फायबर आणि ताकामुळे नैसर्गिक प्रोबायोटिक्स मिळून पचन सुधारते.'
    },
    healthScoreDelta: 25,
    isOptimal: true,
    educationalTip: {
      en: 'Eating cucumber, tomato, or carrot salad before carbohydrates blunts post-meal blood sugar spikes by 30%.',
      hi: 'भोजन से पहले कच्चा सलाद खाने से भोजन के बाद अचानक ब्लड शुगर नहीं बढ़ती।',
      mr: 'जेवणापूर्वी काकडी किंवा टोमॅटोचे सॅलड खाल्ल्याने जेवणानंतर रक्तातील साखर वेगाने वाढत नाही.'
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
      en: 'Even 500 slow steps after meals helps muscle GLUT4 transporters clear circulating glucose without insulin spikes.',
      hi: 'भोजन के बाद केवल 500 कदम चलने से मांसपेशियां भोजन की ग्लूकोज का बेहतर उपयोग करती हैं।',
      mr: 'जेवणानंतर थोडे चालल्याने स्नायू रक्तातील ग्लुकोज शोषून घेण्यास मदत करतात.'
    }
  },
  {
    id: 'a_mindful_desk_stretch',
    category: 'mindfulness',
    timeSlot: 'afternoon',
    title: {
      en: '5-Minute Ergonomic Posture Stretches & Deep Diaphragmatic Breathing',
      hi: '5 मिनट का पोस्चर स्ट्रेचिंग और गहरी सांसों का अभ्यास',
      mr: '५ मिनिटांचे आसनांचे स्ट्रेचिंग आणि दीर्घ प्राणायाम'
    },
    description: {
      en: 'Relieves cervical spine and lumbar tension, oxygenates the prefrontal cortex, and lowers afternoon cortisol.',
      hi: 'गर्दन और कमर की जकड़न दूर करता है, दिमाग तक ताजा ऑक्सीजन पहुंचाता है और मानसिक तनाव घटाता है।',
      mr: 'मान आणि कंबरदुखीचा ताण कमी करतो, मेंदूला ऑक्सिजन पुरवतो आणि दुपारचा ताण दूर करतो.'
    },
    healthScoreDelta: 15,
    isOptimal: true,
    educationalTip: {
      en: 'Box breathing (4s inhale, 4s hold, 4s exhale, 4s hold) activates the calming vagal parasympathetic system.',
      hi: 'गहरी सांस लेने से पैरासिम्पेथेटिक नर्वस सिस्टम सक्रिय होता है, जिससे एकाग्रता तुरंत लौटती है।',
      mr: 'दीर्घ श्वसनामुळे मज्जासंस्था शांत होते आणि कामातील एकाग्रता त्वरित वाढते.'
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
      en: 'Loaded with trans-fats and high-fructose syrup, triggering post-lunch lethargy and arterial inflammation.',
      hi: 'हानिकारक ट्रांस-फैट और अत्यधिक चीनी से भरा, जो दोपहर में भारी सुस्ती और पाचन में रुकावट पैदा करता है।',
      mr: 'हानिकारक स्निग्धता आणि अती साखरेमुळे दुपारी प्रचंड आळस, सुस्ती आणि पचनाचे त्रास होतात.'
    },
    healthScoreDelta: -25,
    isOptimal: false,
    educationalTip: {
      en: 'Deep-fried foods take 6-8 hours to digest, shunting blood to the gut and impairing afternoon work focus.',
      hi: 'तले हुए भोजन को पचने में 6-8 घंटे लगते हैं, जिससे दोपहर में भारी थकान और नींद महसूस होती है।',
      mr: 'तळलेले अन्न पचायला ६-८ तास लागतात, ज्यामुळे मेंदूला रक्तपुरवठा कमी होऊन कामात लक्ष लागत नाही.'
    }
  },
  {
    id: 'a_ultra_processed_snack',
    category: 'nutrition',
    timeSlot: 'afternoon',
    title: {
      en: 'Packaged Fried Chips & High-Sugar Energy Drink at 3:30 PM',
      hi: 'दोपहर 3:30 बजे पैकेट वाले चिप्स और अत्यधिक चीनी वाली एनर्जी ड्रिंक',
      mr: 'दुपारी ३:३० वाजता पॅकबंद तळलेले चिप्स आणि अती साखरेचे एनर्जी ड्रिंक'
    },
    description: {
      en: 'Delivers a massive sodium-sugar bomb, causing rapid reactive hypoglycemia and extreme late-afternoon fatigue.',
      hi: 'नमक और चीनी का भारी झटका जो तुरंत बाद तेज सुस्ती ("शुगर क्रैश") पैदा करता है।',
      mr: 'मीठ आणि साखरेचा मोठा मारा, ज्यामुळे काही वेळातच रक्तातील साखर कोसळून प्रचंड थकवा येतो.'
    },
    healthScoreDelta: -20,
    isOptimal: false,
    educationalTip: {
      en: 'Swap 3:30 PM fried snacks with roasted chana, makhana, or a handful of roasted peanuts for sustained energy.',
      hi: 'शाम के स्नैक्स में चिप्स की जगह भुने चने, मखाना या मूंगफली खाने से ऊर्जा स्थिर बनी रहती है।',
      mr: 'दुपारच्या खाऊमध्ये चिप्सऐवजी भाजलेले चणे किंवा मखाणे खाल्ल्याने ऊर्जा टिकून राहते.'
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
      en: '45-min Badminton / Cycling / Gym or Active Outdoor Play',
      hi: '45 मिनट बैडमिंटन / साइकिलिंग / जिम या आउटडोर खेल',
      mr: '४५ मिनिटे बॅडमिंटन / सायकलिंग / जिम किंवा कोणताही मैदानी खेळ'
    },
    description: {
      en: 'Cardiovascular conditioning, bone density maintenance, and psychological workday stress relief.',
      hi: 'हृदय की क्षमता बढ़ाना, हड्डियों को मजबूत करना और दिनभर के तनाव से मुक्ति।',
      mr: 'हृदयाची कार्यक्षमता वाढवणे, हाडे मजबूत करणे आणि दिवसभराचा मानसिक ताण कमी करणे.'
    },
    healthScoreDelta: 25,
    isOptimal: true,
    educationalTip: {
      en: 'Evening exercise helps dissipate cortisol (stress hormone) built up during sedentary desk hours.',
      hi: 'शाम का व्यायाम दिनभर के तनाव हार्मोन (कॉर्टिसोल) को कम करने में मदद करता है।',
      mr: 'संध्याकाळच्या व्यायामामुळे शरीरातील तणावाचे हार्मोन्स (Cortisol) कमी होतात.'
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
  {
    id: 'e_social_family_walk',
    category: 'mindfulness',
    timeSlot: 'evening',
    title: {
      en: 'Family or Community Park Walk & Disconnecting from Work Emails',
      hi: 'परिवार या दोस्तों के साथ पार्क में टहलना और काम के ईमेल से दूरी',
      mr: 'कुटुंबासोबत किंवा मित्रांसोबत बागेत फेरफटका आणि कामाच्या ईमेलपासून मुक्ती'
    },
    description: {
      en: 'Fosters social bonding, releases oxytocin, and establishes a psychological boundary between work and home.',
      hi: 'पारिवारिक जुड़ाव बढ़ाता है, खुशी के हार्मोन पैदा करता है और काम के तनाव से दिमाग को मुक्त करता है।',
      mr: 'नात्यांमधील जवळीक वाढते, मानसिक समाधान मिळते आणि कामाचा ताण घराबाहेर राहतो.'
    },
    healthScoreDelta: 20,
    isOptimal: true,
    educationalTip: {
      en: 'Strong social connections are clinically correlated with reduced cardiovascular mortality and enhanced longevity.',
      hi: 'अपनों के साथ समय बिताने से दिल की बीमारियों का खतरा कम होता है और जीवन प्रत्याशा बढ़ती है।',
      mr: 'आपल्या माणसांसोबत वेळ घालवल्याने हृदयविकाराचा धोका कमी होऊन दीर्घायुष्य लाभते.'
    }
  },
  {
    id: 'e_continuous_chair_sitting',
    category: 'movement',
    timeSlot: 'evening',
    title: {
      en: 'Continuous 4-Hour Screen Sitting without Standing Up Once',
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
    id: 'e_chain_smoking_stress',
    category: 'movement',
    timeSlot: 'evening',
    title: {
      en: 'Smoking Multiple Cigarettes or Heavy Vaping to "Relieve Work Stress"',
      hi: 'तनाव कम करने के बहाने कई सिगरेट या ई-सिगरेट (वेपिंग) पीना',
      mr: 'कामाचा ताण कमी करण्यासाठी अनेक सिगारेट किंवा हुक्का/व्हेप ओढणे'
    },
    description: {
      en: 'Constricts coronary arteries, introduces carbon monoxide and carcinogenic tar, and escalates heart rate.',
      hi: 'धमनियों को सिकोड़ता है, खून में कार्बन मोनोऑक्साइड भरता है और हार्ट अटैक का खतरा बढ़ाता है।',
      mr: 'रक्तवाहिन्या आकुंचन पावतात, रक्तात विषारी वायू मिसळतो आणि हृदयविकाराचा धोका अनेक पटींनी वाढतो.'
    },
    healthScoreDelta: -35,
    isOptimal: false,
    educationalTip: {
      en: 'Nicotine is a powerful vasoconstrictor that temporarily masks withdrawal anxiety while multiplying stroke risks.',
      hi: 'तंबाकू और सिगरेट धमनियों को सख्त बनाते हैं। तनाव दूर करने के लिए टहलना या संगीत सुनना कहीं बेहतर उपाय है।',
      mr: 'धूम्रपानामुळे रक्तदाब अचानक वाढतो. ताण घालवण्यासाठी गाणी ऐकणे किंवा फेरफटका मारणे सुरक्षित ठरते.'
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
      en: 'Light, Early Dinner 2.5 Hours before Sleep (Khichdi / Soup & Veggies)',
      hi: 'सोने से 2.5 घंटे पहले हल्का और समय पर भोजन (मूंग दाल खिचड़ी / सूप व सब्जियां)',
      mr: 'झोपण्यापूर्वी अडीच तास आधी हलके जेवण (मुगाची मऊ खिचडी / सूप आणि भाज्या)'
    },
    description: {
      en: 'Allows stomach to empty before horizontal rest, eliminating nocturnal acid reflux and aiding sleep onset.',
      hi: 'सोने से पहले भोजन पचने का समय मिलता है, जिससे रात में सीने में जलन नहीं होती और गहरी नींद आती है।',
      mr: 'झोपण्यापूर्वी अन्न पचायला वेळ मिळतो, ज्यामुळे छातीत जळजळ (Reflux) होत नाही आणि शांत झोप लागते.'
    },
    healthScoreDelta: 20,
    isOptimal: true,
    educationalTip: {
      en: 'An early light meal prevents elevated nocturnal core body temperature, ensuring deep restorative REM sleep.',
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
      en: 'Protects melatonin secretion from blue light suppression, inducing rapid, peaceful sleep onset.',
      hi: 'मोबाइल की नीली रोशनी से बचाता है, जिससे प्राकृतिक नींद का हार्मोन (मेलाटोनिन) बढ़ता है।',
      mr: 'मोबाईलच्या निळ्या प्रकाशापासून संरक्षण होते, ज्यामुळे नैसर्गिक झोपेचे हार्मोन्स वाढतात.'
    },
    healthScoreDelta: 20,
    isOptimal: true,
    educationalTip: {
      en: 'Blue spectrum light from smartphones tricks the brain into believing it is noon, delaying natural melatonin release.',
      hi: 'फोन की नीली रोशनी दिमाग को भ्रमित करती है कि अभी भी दिन है, जिससे नींद आने में देर होती है।',
      mr: 'मोबाईलचा निळा प्रकाश मेंदूला अजूनही दिवस असल्याचा खोटा संदेश देतो, ज्यामुळे झोप लागत नाही.'
    }
  },
  {
    id: 'n_dark_cool_bedroom',
    category: 'sleep',
    timeSlot: 'night',
    title: {
      en: 'Cool (22–24°C), Dark & Quiet Sleep Sanctuary with Consistent Bedtime',
      hi: 'शांत, अंधेरा और अनुकूल तापमान (22-24°C) वाला शयनकक्ष व निश्चित समय पर सोना',
      mr: 'शांत, अंधारी आणि आल्हाददायक (२२-२४°C) बेडरूम व झोपेची ठराविक वेळ'
    },
    description: {
      en: 'Optimizes thermoregulatory sleep triggers and circadian timing for 7-8 hours of uninterrupted rest.',
      hi: 'शरीर के तापमान को नींद के अनुकूल बनाता है और 7-8 घंटे की निर्बाध नींद सुनिश्चित करता है।',
      mr: 'शरीराचे तापमान झोपेसाठी अनुकूल ठेवून ७ ते ८ तासांची सलग विश्रांती मिळवून देते.'
    },
    healthScoreDelta: 20,
    isOptimal: true,
    educationalTip: {
      en: 'A completely pitch-dark room maximizes pineal gland melatonin production and protects metabolic insulin sensitivity.',
      hi: 'अंधेरे कमरे में सोने से मेलाटोनिन हार्मोन भरपूर बनता है जो मधुमेह से बचाने में मदद करता है।',
      mr: 'अंधाऱ्या खोलीत झोपल्याने मेलाटोनिनचे प्रमाण वाढते आणि चयापचय निरोगी राहते.'
    }
  },
  {
    id: 'n_heavy_spicy_midnight_snack',
    category: 'nutrition',
    timeSlot: 'night',
    title: {
      en: 'Heavy Spicy Midnight Biryani / Greasy Takeout at 11:30 PM',
      hi: 'रात 11:30 बजे भारी मसालेदार बिरयानी या तला-भुना खाना',
      mr: 'रात्री ११:३० वाजता तिखट मसालेदार बिर्याणी किंवा तेलकट जेवण'
    },
    description: {
      en: 'Causes severe nocturnal GERD/heartburn, delays stomach emptying, and causes night awakenings.',
      hi: 'रात में सीने में तेज जलन, खट्टी डकारें, नींद का बार-बार टूटना और सुबह पेट खराब होना।',
      mr: 'रात्री छातीत तीव्र जळजळ, अन्न न पचणे आणि झोप वारंवार चाळवणे.'
    },
    healthScoreDelta: -25,
    isOptimal: false,
    educationalTip: {
      en: 'Lying flat with a full, spicy stomach causes acidic chyme to pool against the lower esophageal sphincter.',
      hi: 'भारी भोजन के तुरंत बाद लेटने से पेट का तेजाब भोजन की नली में ऊपर आता है जिससे सीने में जलन होती है।',
      mr: 'तेलकट जेवणानंतर लगेच झोपल्याने पोटातील ॲसिड अन्ननलिकेत वर येऊन छातीत आग होते.'
    }
  },
  {
    id: 'n_midnight_binge_phone',
    category: 'sleep',
    timeSlot: 'night',
    title: {
      en: 'Late-Night Social Media Video Scrolling in Dark Bed until 2:00 AM',
      hi: 'अंधेरे कमरे में बिस्तर पर लेटकर रात 2:00 बजे तक मोबाइल पर वीडियो देखना',
      mr: 'अंधाऱ्या खोलीत अंथरुणावर झोपून रात्री २:०० वाजेपर्यंत मोबाईलवर व्हिडिओ पाहणे'
    },
    description: {
      en: 'Severe circadian phase delay, eye fatigue, dopamine agitation, and morning chronic grogginess.',
      hi: 'नींद के चक्र का गंभीर नुकसान, आंखों पर अत्यधिक तनाव और सुबह उठने पर भारी सिरदर्द व थकान।',
      mr: 'झोपेच्या चक्राचा पूर्ण विचका, डोळ्यांवर प्रचंड ताण आणि सकाळी उठल्यावर तीव्र थकवा.'
    },
    healthScoreDelta: -30,
    isOptimal: false,
    educationalTip: {
      en: 'Dopamine spikes from endless scrolling keep the sympathetic nervous system in hyper-alert flight mode, preventing deep sleep.',
      hi: 'लगातार वीडियो देखने से दिमाग उत्तेजित रहता है और गहरी नींद के चरण में नहीं जा पाता।',
      mr: 'सतत व्हिडिओ पाहिल्यामुळे मेंदू उत्तेजित राहतो आणि शांत झोपेच्या अवस्थेत जाऊ शकत नाही.'
    }
  }
];
