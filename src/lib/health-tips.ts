import { Language } from './types';

export interface HealthTip {
  id: string;
  categoryKey:
    | 'hydration'
    | 'nutrition'
    | 'activity'
    | 'sleep'
    | 'hygiene'
    | 'oral_health'
    | 'screen_breaks'
    | 'mental_wellness'
    | 'sun_protection'
    | 'eating_habits'
    | 'medication_safety'
    | 'preventive_checkups'
    | 'posture'
    | 'food_safety'
    | 'tobacco_avoidance'
    | 'respiratory_health';
  category: Record<Language, string>;
  icon: string;
  title: Record<Language, string>;
  explanation: Record<Language, string>;
  action: Record<Language, string>;
}

export const HEALTH_TIPS_CATEGORIES: { key: string; label: Record<Language, string> }[] = [
  {
    key: 'all',
    label: {
      en: 'All Categories',
      hi: 'सभी श्रेणियां',
      mr: 'सर्व वर्ग'
    }
  },
  {
    key: 'hydration',
    label: {
      en: 'Hydration',
      hi: 'जलयोजन (हाइड्रेशन)',
      mr: 'हायड्रेशन (पाणी)'
    }
  },
  {
    key: 'nutrition',
    label: {
      en: 'Nutrition & Diet',
      hi: 'पोषण और आहार',
      mr: 'पोषण आणि आहार'
    }
  },
  {
    key: 'activity',
    label: {
      en: 'Physical Activity',
      hi: 'शारीरिक गतिविधि',
      mr: 'शारीरिक व्यायाम'
    }
  },
  {
    key: 'sleep',
    label: {
      en: 'Sleep & Rest',
      hi: 'नींद और विश्राम',
      mr: 'झोप आणि विश्रांती'
    }
  },
  {
    key: 'mental_wellness',
    label: {
      en: 'Mental Wellness',
      hi: 'मानसिक स्वास्थ्य',
      mr: 'मानसिक आरोग्य'
    }
  },
  {
    key: 'preventive_checkups',
    label: {
      en: 'Preventive Care',
      hi: 'निवारक देखभाल',
      mr: 'प्रतिबंधात्मक काळजी'
    }
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: 'tip-1-hydration',
    categoryKey: 'hydration',
    category: {
      en: 'Hydration & Metabolism',
      hi: 'जलयोजन और चयापचय',
      mr: 'पाणी आणि चयापचय'
    },
    icon: 'droplets',
    title: {
      en: 'Morning Hydration Jumpstart',
      hi: 'सुबह गुनगुने पानी से दिन की शुरुआत',
      mr: 'सकाळी कोमट पाण्याने दिवसाची सुरुवात'
    },
    explanation: {
      en: 'Drinking 1 to 2 glasses of lukewarm water upon waking rehydrates your body after 7-8 hours of sleep, stimulates healthy kidney filtration, and awakens gastrointestinal motility naturally.',
      hi: 'सुबह उठते ही 1 से 2 गिलास गुनगुना पानी पीने से रात भर के विश्राम के बाद शरीर पुनः हाइड्रेट होता है, गुर्दे सुचारू रूप से कार्य करते हैं और पाचन तंत्र सक्रिय होता है।',
      mr: 'सकाळी उठल्यावर १ ते २ ग्लास कोमट पाणी प्यायल्याने रात्रीच्या विश्रांतीनंतर शरीर हायड्रेट होते, मूत्रपिंडांचे कार्य सुरळीत चालते आणि पचनक्रिया सक्रिय होते.'
    },
    action: {
      en: 'Keep a clean water bottle or copper vessel near your bedside to drink before your morning tea or coffee.',
      hi: 'सुबह की चाय या कॉफी से पहले पीने के लिए अपने बिस्तर के पास तांबे या स्टील के बर्तन में शुद्ध पानी रखें।',
      mr: 'सकाळचा चहा किंवा कॉफी घेण्यापूर्वी पिण्यासाठी पलंगाजवळ तांब्याच्या किंवा स्टीलच्या पात्रात पाणी ठेवा.'
    }
  },
  {
    id: 'tip-2-balanced-diet',
    categoryKey: 'nutrition',
    category: {
      en: 'Balanced Diet & Immunity',
      hi: 'संतुलित आहार और रोग प्रतिरोधक क्षमता',
      mr: 'संतुलित आहार आणि रोगप्रतिकारशक्ती'
    },
    icon: 'salad',
    title: {
      en: 'Incorporate a "Rainbow" on Your Plate',
      hi: 'अपनी थाली में सतरंगी फल और सब्जियां शामिल करें',
      mr: 'आपल्या ताटात विविध रंगांच्या भाज्या आणि फळांचा समावेश करा'
    },
    explanation: {
      en: 'Different colored vegetables and fruits represent distinct phytonutrients, flavonoids, and antioxidants that protect cell walls, reduce chronic inflammation, and strengthen daily immune defenses.',
      hi: 'विभिन्न रंगों की सब्जियां और फल विशिष्ट फाइटोन्यूट्रिएंट्स और एंटीऑक्सिडेंट प्रदान करते हैं, जो पुरानी सूजन को कम करते हैं और रोग प्रतिरोधक क्षमता को सुदृढ़ करते हैं।',
      mr: 'विविध रंगांच्या भाज्या आणि फळांमधून शरीराला आवश्यक अँटिऑक्सिडंट्स आणि पोषक घटक मिळतात, ज्यामुळे अंतर्गत जळजळ कमी होते आणि प्रतिकारशक्ती वाढते.'
    },
    action: {
      en: 'Aim to include at least three natural colors (e.g. leafy spinach, orange carrots, red tomatoes) in your lunch or dinner.',
      hi: 'अपने दोपहर या रात के भोजन में कम से कम तीन अलग-अलग प्राकृतिक रंगों (जैसे पालक, गाजर, टमाटर) को शामिल करने का लक्ष्य बनाएं।',
      mr: 'दुपारच्या किंवा रात्रीच्या जेवणात किमान तीन वेगवेगळ्या नैसर्गिक रंगांच्या घटकांचा (उदा. पालक, गाजर, टोमॅटो) समावेश करा.'
    }
  },
  {
    id: 'tip-3-physical-activity',
    categoryKey: 'activity',
    category: {
      en: 'Physical Activity & Longevity',
      hi: 'शारीरिक गतिविधि और दीर्घायु',
      mr: 'शारीरिक व्यायाम आणि दीर्घायुष्य'
    },
    icon: 'activity',
    title: {
      en: 'The 100-Step Gentle Walk ("Shatapawali")',
      hi: 'भोजन के बाद 100 कदम की सैर (शतपावली)',
      mr: 'जेवणानंतर १०० पावलांची शतपावली'
    },
    explanation: {
      en: 'A light 10 to 15 minute stroll (or traditional 100-step walk) after meals blunts post-prandial blood glucose spikes, promotes gastric emptying, and prevents uncomfortable acid reflux.',
      hi: 'भोजन के बाद 10 से 15 मिनट की धीमी सैर भोजन के तुरंत बाद ब्लड शुगर में होने वाली तीव्र वृद्धि को रोकती है, पाचन को सुगम बनाती है और एसिडिटी से बचाती है।',
      mr: 'जेवणानंतर १० ते १५ मिनिटांची शांत शतपावली रक्तातील साखरेची अचानक होणारी वाढ रोखते, पचन सुलभ करते आणि ऍसिडिटीपासून बचाव करते.'
    },
    action: {
      en: 'Avoid lying down or sitting immediately after eating dinner; take a relaxed 10-minute stroll around your home or terrace.',
      hi: 'रात के भोजन के तुरंत बाद लेटने या बैठने से बचें; अपने घर या बालकनी में 10 मिनट की शांत सैर करें।',
      mr: 'रात्रीच्या जेवणानंतर लगेच झोपणे टाळा; घरातील अंगणात किंवा गच्चीवर १० मिनिटे शांत शतपावली करा.'
    }
  },
  {
    id: 'tip-4-sleep-hygiene',
    categoryKey: 'sleep',
    category: {
      en: 'Sleep Quality & Recovery',
      hi: 'नींद की गुणवत्ता और विश्राम',
      mr: 'गाढ झोप आणि पुनरुज्जीवन'
    },
    icon: 'moon',
    title: {
      en: 'Digital Wind-Down 45 Minutes Before Sleep',
      hi: 'सोने से 45 मिनट पहले स्क्रीन से दूरी बनाएं',
      mr: 'झोपण्यापूर्वी ४५ मिनिटे डिजिटल स्क्रीनपासून दूर राहा'
    },
    explanation: {
      en: 'Blue spectrum light emitted by smartphones and screens suppresses natural melatonin synthesis in the brain, delaying deep REM sleep cycles and causing morning fatigue.',
      hi: 'स्मार्टफोन और टीवी स्क्रीन से निकलने वाला नीला प्रकाश मस्तिष्क में मेलाटोनिन हार्मोन के स्राव को बाधित करता है, जिससे गहरी नींद में बाधा आती है।',
      mr: 'मोबाईल आणि टीव्हीच्या स्क्रीनमधील निळा प्रकाश मेंदूतील मेलाटोनिन निर्मिती रोखतो, ज्यामुळे गाढ झोप लागत नाही आणि सकाळी थकवा जाणवतो.'
    },
    action: {
      en: 'Set your phone to "Do Not Disturb" and swap screen time for relaxing reading, quiet reflection, or light stretching.',
      hi: 'सोने से 45 मिनट पहले फोन को अलग रखें और शांत पुस्तक पढ़ने या विश्रामदायक श्वास का अभ्यास करें।',
      mr: 'झोपण्यापूर्वी फोन दूर ठेवा आणि हलके वाचन किंवा शांत श्वासोच्छ्वासावर लक्ष केंद्रित करा.'
    }
  },
  {
    id: 'tip-5-hand-hygiene',
    categoryKey: 'hygiene',
    category: {
      en: 'Infection Prevention & Hygiene',
      hi: 'संक्रमण रोकथाम और स्वच्छता',
      mr: 'संसर्ग प्रतिबंध आणि स्वच्छता'
    },
    icon: 'shield',
    title: {
      en: 'The 20-Second Thorough Handwash',
      hi: '20 सेकंड तक साबुन से हाथ धोने का नियम',
      mr: '२० सेकंद साबणाने हात स्वच्छ धुण्याचा नियम'
    },
    explanation: {
      en: 'Washing your hands with soap and running water for at least 20 seconds mechanically disrupts bacterial membranes and virus lipid envelopes, cutting diarrheal and respiratory infections by up to 40%.',
      hi: 'साबुन और पानी से 20 सेकंड तक हाथ धोने से कीटाणुओं और वायरस की बाहरी परत नष्ट हो जाती है, जिससे मौसमी सर्दी, खांसी और पेट के संक्रमण का खतरा 40% तक कम होता है।',
      mr: 'साबण आणि पाण्याने २० सेकंद हात चोळून धुतल्याने जंतू आणि विषाणूंचा बाह्य थर नष्ट होतो, ज्यामुळे श्वसन व पोटाच्या संसर्गाचा धोका ४०% पर्यंत कमी होतो.'
    },
    action: {
      en: 'Clean palms, backs of hands, between fingers, and under fingernails before cooking, eating, or after arriving home.',
      hi: 'भोजन करने से पहले और बाहर से आने के बाद हथेलियों, उंगलियों के बीच और नाखूनों के नीचे साबुन से अच्छी तरह धोएं।',
      mr: 'जेवणापूर्वी आणि घराबाहेरून आल्यानंतर हाताचे तळवे, बोटांच्या फटी आणि नखे साबणाने स्वच्छ धुवा.'
    }
  },
  {
    id: 'tip-6-oral-health',
    categoryKey: 'oral_health',
    category: {
      en: 'Oral Health & Systemic Wellness',
      hi: 'मौखिक स्वच्छता और हृदय स्वास्थ्य',
      mr: 'मुख आरोग्य आणि हृदय स्वास्थ्य'
    },
    icon: 'sparkles',
    title: {
      en: 'Nighttime Brushing & Tongue Cleaning',
      hi: 'रात को सोने से पहले ब्रश और जीभ की सफाई',
      mr: 'रात्री झोपण्यापूर्वी दात घासणे व जिभेची स्वच्छता'
    },
    explanation: {
      en: 'Salivary flow plummets during sleep, allowing trapped carbohydrates and bacteria to produce enamel-eroding acids. Gum inflammation (periodontitis) is also medically correlated with heightened cardiovascular risks.',
      hi: 'सोते समय मुंह में लार का उत्पादन कम हो जाता है, जिससे बैक्टीरिया दांतों पर एसिड बनाते हैं। मसूड़ों की सूजन का सीधा संबंध हृदय संबंधी जोखिमों से भी होता है।',
      mr: 'झोपेत लाळेचे प्रमाण कमी झाल्याने जंतू दातांना हानी पोहोचवणारे आम्ल तयार करतात. हिरड्यांच्या जळजळीचा थेट संबंध हृदयाच्या आरोग्याशी असतो.'
    },
    action: {
      en: 'Brush thoroughly for 2 minutes before bed and use a gentle stainless steel or copper tongue cleaner to remove oral biofilm.',
      hi: 'सोने से पहले 2 मिनट तक ब्रश करें और जीभ की कोमलता से सफाई करें ताकि रात भर मुंह बैक्टीरिया से सुरक्षित रहे।',
      mr: 'झोपण्यापूर्वी २ मिनिटे दात स्वच्छ घासा आणि जिभलीने जीभ स्वच्छ करा जेणेकरून रात्रभर तोंड स्वच्छ राहील.'
    }
  },
  {
    id: 'tip-7-screen-breaks',
    categoryKey: 'screen_breaks',
    category: {
      en: 'Vision Care & Ergonomics',
      hi: 'नेत्र सुरक्षा और दृष्टि स्वास्थ्य',
      mr: 'डोळ्यांची काळजी आणि दृष्टी संवर्धन'
    },
    icon: 'eye',
    title: {
      en: 'The 20-20-20 Rule for Digital Eye Strain',
      hi: 'डिजिटल आंखों के तनाव के लिए 20-20-20 का नियम',
      mr: 'डोळ्यांच्या आरोग्यासाठी २०-२०-२० चा सुवर्ण नियम'
    },
    explanation: {
      en: 'Staring at computer screens reduces natural blinking rates by 60%, causing tear film evaporation, dry eyes, and ocular fatigue. Looking far away relaxes the ciliary eye muscles completely.',
      hi: 'कंप्यूटर या मोबाइल स्क्रीन पर लगातार देखने से पलकें झपकने की गति 60% घट जाती है। दूर देखने से आंखों की सिलियरी मांसपेशियां विश्राम पाती हैं।',
      mr: 'स्क्रीनकडे सतत पाहिल्याने डोळ्यांची उघडझाप ६०% कमी होते, ज्यामुळे डोळे कोरडे पडतात. दूर पाहिल्याने डोळ्यांच्या स्नायूंना आराम मिळतो.'
    },
    action: {
      en: 'Every 20 minutes, take a 20-second break and focus your gaze on an object at least 20 feet away (out of a window).',
      hi: 'हर 20 मिनट के काम के बाद, 20 सेकंड के लिए ब्रेक लें और कम से कम 20 फीट दूर किसी वस्तु या खिड़की से बाहर देखें।',
      mr: 'दर २० मिनिटांनंतर, २० सेकंदांचा ब्रेक घ्या आणि किमान २० फूट दूर असलेल्या एखाद्या वस्तूवर किंवा खिडकीबाहेर नजर केंद्रित करा.'
    }
  },
  {
    id: 'tip-8-mental-wellness',
    categoryKey: 'mental_wellness',
    category: {
      en: 'Stress Reduction & Mental Balance',
      hi: 'तनाव मुक्ति और मानसिक संतुलन',
      mr: 'तणावमुक्ती आणि मनःशांती'
    },
    icon: 'heart',
    title: {
      en: '5 Minutes of Diaphragmatic Breathwork ("Pranayama")',
      hi: '5 मिनट का प्राणायाम और गहरी सांस का अभ्यास',
      mr: '५ मिनिटांचे प्राणायाम आणि दीर्घ श्वसन'
    },
    explanation: {
      en: 'Slow, deep diaphragmatic breathing with prolonged exhalations activates the parasympathetic vagus nerve, rapidly lowering elevated cortisol, reducing resting pulse rate, and calming anxiety.',
      hi: 'धीमी और गहरी सांस लेने तथा लंबी सांस छोड़ने से वैगस तंत्रिका सक्रिय होती है, जिससे तनाव पैदा करने वाले कोर्टिसोल हार्मोन का स्तर तुरंत घटता है।',
      mr: 'दीर्घ आणि संथ श्वास घेतल्याने शरीरातील पॅरासिम्पेथेटिक नर्वस सिस्टीम सक्रिय होते, ज्यामुळे कोर्टिसोलची पातळी आणि हृदयाचे ठोके लगेच नियंत्रणात येतात.'
    },
    action: {
      en: 'Inhale smoothly for 4 seconds through your nose, hold gently for 2 seconds, and exhale steadily through slightly parted lips for 6 seconds.',
      hi: 'नाक से 4 सेकंड तक गहरी सांस अंदर लें, 2 सेकंड रोकें और 6 सेकंड में धीरे-धीरे पूरी सांस बाहर छोड़ें।',
      mr: 'नाकाने ४ सेकंद दीर्घ श्वास घ्या, २ सेकंद रोखून धरा आणि तोंडाने ६ सेकंदात हळूहळू पूर्ण श्वास बाहेर सोडा.'
    }
  },
  {
    id: 'tip-9-sun-protection',
    categoryKey: 'sun_protection',
    category: {
      en: 'Bone Health & Vitamin D',
      hi: 'अस्थि स्वास्थ्य और विटामिन डी',
      mr: 'हाडांचे आरोग्य आणि व्हिटॅमिन डी'
    },
    icon: 'sun',
    title: {
      en: 'Morning Sunlight for Natural Vitamin D',
      hi: 'प्रातःकाल की धूप और प्राकृतिक विटामिन डी',
      mr: 'सकाळचे कोवळे ऊन आणि नैसर्गिक व्हिटॅमिन डी'
    },
    explanation: {
      en: 'Exposing arms and face to mild morning sun (between 8:00 AM and 10:30 AM) for 15-20 minutes triggers skin synthesis of cholecalciferol (Vitamin D3), essential for calcium uptake and immune regulation.',
      hi: 'सुबह 8 से 10:30 बजे के बीच 15-20 मिनट की हल्की धूप लेने से त्वचा में प्राकृतिक विटामिन डी3 का निर्माण होता है, जो मजबूत हड्डियों और इम्यूनिटी के लिए अनिवार्य है।',
      mr: 'सकाळी ८ ते १०:३० च्या दरम्यान १५-२० मिनिटे कोवळ्या उन्हात बसल्याने शरीरात व्हिटॅमिन डी३ तयार होते, जे हाडांच्या बळकटीसाठी आणि प्रतिकारशक्तीसाठी अत्यंत महत्त्वाचे आहे.'
    },
    action: {
      en: 'Enjoy your morning herbal tea or read a newspaper outdoors in mild morning sunlight 3 to 4 days per week.',
      hi: 'सप्ताह में 3 से 4 दिन सुबह की हल्की धूप में टहलें या बालकनी में बैठकर प्रातःकालीन प्रकाश ग्रहण करें।',
      mr: 'आठवड्यातून ३ ते ४ दिवस सकाळी कोवळ्या उन्हात चाला किंवा बाल्कनीत बसून सकाळचा सूर्यप्रकाश अंगावर घ्या.'
    }
  },
  {
    id: 'tip-10-eating-habits',
    categoryKey: 'eating_habits',
    category: {
      en: 'Mindful Eating & Gut Health',
      hi: 'सचेत भोजन और आंतों का स्वास्थ्य',
      mr: 'शांतपणे जेवणे आणि पचनसंस्था'
    },
    icon: 'utensils',
    title: {
      en: 'Chew Slowly and Avoid Eating When Rushed',
      hi: 'भोजन को चबा-चबा कर खाएं और जल्दबाजी से बचें',
      mr: 'अन्न सावकाश चावून खा आणि घाईगडबड टाळा'
    },
    explanation: {
      en: 'Mechanical chewing mixes salivary amylase with food boluses and gives your stomach 15-20 minutes to send satiety signals (leptin) to the hypothalamus, curbing overeating and indigestion.',
      hi: 'भोजन को धीरे-धीरे चबाने से लार में मौजूद एंजाइम पाचन को आसान बनाते हैं और मस्तिष्क को तृप्ति का संकेत 15-20 मिनट में मिलता है, जिससे अधिक खाने से बचा जा सकता है।',
      mr: 'अन्न नीट चावून खाल्ल्याने लाळेतील पाचक रस अन्नात मिसळतात आणि मेंदूला तृप्तीचा संदेश मिळण्यास १५-२० मिनिटे मिळतात, ज्यामुळे अतिखाणे टळते.'
    },
    action: {
      en: 'Put down your phone while dining, sit comfortably, and aim to chew each mouthful at least 15 to 20 times.',
      hi: 'भोजन करते समय फोन या टीवी से दूर रहें, आराम से बैठें और प्रत्येक कौर को कम से कम 15 से 20 बार चबाएं।',
      mr: 'जेवताना मोबाईल किंवा टीव्ही पाहणे टाळा, शांत बसा आणि प्रत्येक घास किमान १५ ते २० वेळा चावून खा.'
    }
  },
  {
    id: 'tip-11-medication-safety',
    categoryKey: 'medication_safety',
    category: {
      en: 'Medication Safety & Adherence',
      hi: 'दवा सुरक्षा और समयबद्ध सेवन',
      mr: 'औषध सुरक्षा आणि वेळेवर सेवन'
    },
    icon: 'pill',
    title: {
      en: 'Take Chronic Prescriptions at Scheduled Hours',
      hi: 'नियमित दवाओं का सेवन हमेशा निश्चित समय पर करें',
      mr: 'नियमित औषधे नेहमी ठरलेल्या वेळेवरच घ्या'
    },
    explanation: {
      en: 'Maintaining consistent plasma concentrations of antihypertensive or diabetic medications prevents dangerous blood pressure spikes and hypoglycemic episodes. Never stop antibiotics early even if you feel completely recovered.',
      hi: 'रक्तचाप और मधुमेह की दवाओं को सही समय पर लेने से रक्त में दवा का स्तर स्थिर रहता है। लक्षण ठीक होने पर भी एंटीबायोटिक्स का कोर्स डॉक्टर की सलाह के बिना बीच में न छोड़ें।',
      mr: 'रक्तदाब आणि मधुमेहाची औषधे नियमित वेळेवर घेतल्यास रक्तातील प्रमाण संतुलित राहते. बरे वाटू लागले तरी डॉक्टरांच्या सल्ल्याशिवाय अँटीबायोटिक्सचा डोस अर्धवट सोडू नका.'
    },
    action: {
      en: 'Set an alarm on your phone or link taking your pills to an everyday routine like having breakfast or brushing your teeth.',
      hi: 'अपने फोन में दवा का अलार्म सेट करें या दवा लेने को अपनी दैनिक आदत जैसे नाश्ता करने के साथ जोड़ लें।',
      mr: 'मोबाईलमध्ये औषधांचा अलार्म लावा किंवा नाश्ता करण्यासारख्या दैनंदिन सवयीशी औषध घेण्याची वेळ जोडा.'
    }
  },
  {
    id: 'tip-12-preventive-checkups',
    categoryKey: 'preventive_checkups',
    category: {
      en: 'Preventive Screening & Longevity',
      hi: 'वार्षिक स्वास्थ्य जांच और पूर्व बचाव',
      mr: 'वार्षिक आरोग्य तपासणी आणि पूर्वकाळजी'
    },
    icon: 'calendar',
    title: {
      en: 'Schedule Your Annual Preventive Health Panel',
      hi: 'वर्ष में एक बार अपनी नियमित स्वास्थ्य जांच अवश्य कराएं',
      mr: 'वर्षातून एकदा तरी नियमित आरोग्य तपासणी अवश्य करा'
    },
    explanation: {
      en: 'Hypertension, pre-diabetes, and high cholesterol are famously asymptomatic ("silent killers"). Annual screening catches physiological anomalies early when simple dietary adjustments can reverse them.',
      hi: 'उच्च रक्तचाप, डायबिटीज और कोलेस्ट्रॉल प्रारंभिक चरणों में बिना किसी स्पष्ट लक्षण के होते हैं। वार्षिक जांच से इनका समय रहते पता चलता है और सामान्य जीवनशैली से इन्हें सुधारा जा सकता है।',
      mr: 'उच्च रक्तदाब, मधुमेह आणि कोलेस्टेरॉल यांची सुरुवातीला कोणतीही लक्षणे दिसत नाहीत. वार्षिक तपासणीमुळे आजारांचे वेळेत निदान होते आणि ते योग्य आहारात बदल करून टाळता येतात.'
    },
    action: {
      en: 'Book an annual basic metabolic panel (CBC, Lipid profile, Fasting Glucose, HbA1c, and Blood Pressure) around your birthday month.',
      hi: 'हर वर्ष अपने जन्मदिन के महीने में बुनियादी स्वास्थ्य जांच (सीबीसी, लिपिड प्रोफाइल, ब्लड शुगर और बीपी) कराने का नियम बनाएं।',
      mr: 'दरवर्षी आपल्या वाढदिवसाच्या महिन्यात नियमित रक्त तपासणी (सीबीसी, लिपिड, रक्तातील साखर आणि रक्तदाब) करून घ्या.'
    }
  },
  {
    id: 'tip-13-posture-movement',
    categoryKey: 'posture',
    category: {
      en: 'Spine Health & Ergonomics',
      hi: 'रीढ़ की हड्डी और सही शारीरिक मुद्रा',
      mr: 'मणक्याचे आरोग्य आणि योग्य शरीरमुद्रा'
    },
    icon: 'user-check',
    title: {
      en: 'The 45-Minute Posture Reset and Spinal Stretch',
      hi: 'प्रत्येक 45 मिनट में सीधे बैठें और रीढ़ को स्ट्रेच करें',
      mr: 'दर ४५ मिनिटांनी ताठ बसा आणि पाठीचा कणा ताणा'
    },
    explanation: {
      en: 'Slouching exerts up to 27 kg of excessive force on cervical vertebrae, restricting diaphragmatic breathing capacity and precipitating chronic lower back disc strain.',
      hi: 'झुककर बैठने से गर्दन और रीढ़ पर 27 किलोग्राम तक अतिरिक्त दबाव पड़ता है, जिससे सांस लेने की क्षमता घटती है और कमर दर्द की समस्या होती है।',
      mr: 'पुढे वाकून बसल्याने मानेवर आणि पाठीच्या मणक्यावर प्रचंड ताण येतो, ज्यामुळे फुफ्फुसांची क्षमता कमी होते आणि पाठदुखी सुरू होते.'
    },
    action: {
      en: 'Every 45 minutes of desk work, stand up, roll shoulders back 5 times, and gently stretch your arms toward the ceiling.',
      hi: 'हर 45 मिनट के बाद कुर्सी से उठें, कंधों को पीछे घुमाएं और दोनों हाथों को ऊपर की ओर तानकर 30 सेकंड का खिंचाव लें।',
      mr: 'दर ४५ मिनिटांनंतर जागेवरून उठा, खांदे मागे फिरवा आणि दोन्ही हात वर ताणून पाठीचा हलका व्यायाम करा.'
    }
  },
  {
    id: 'tip-14-food-safety',
    categoryKey: 'food_safety',
    category: {
      en: 'Food Safety & Hygiene',
      hi: 'खाद्य सुरक्षा और स्वच्छ रसोई',
      mr: 'अन्न सुरक्षा आणि स्वयंपाकघरातील स्वच्छता'
    },
    icon: 'apple',
    title: {
      en: 'Thoroughly Wash Raw Produce & Reheat Safely',
      hi: 'कच्ची सब्जियों को अच्छी तरह धोएं और भोजन सुरक्षित रखें',
      mr: 'कच्च्या भाज्या नीट धुवा आणि अन्नाची सुरक्षित साठवण करा'
    },
    explanation: {
      en: 'Rinsing raw fruits and vegetables with clean running water removes surface pesticides, soil parasites, and enteric pathogens. Never consume cooked rice or pulses left at room temperature for over 4 hours.',
      hi: 'कच्चे फल और सब्जियों को साफ पानी से धोने से कीटनाशक और मिट्टी के परजीवी दूर होते हैं। पके हुए भोजन को 4 घंटे से अधिक सामान्य तापमान पर खुला न छोड़ें।',
      mr: 'फळे आणि भाज्या वाहत्या स्वच्छ पाण्याने धुतल्यास कीटकनाशके आणि मातीचे जंतू निघून जातात. शिजवलेले अन्न ४ तासांपेक्षा जास्त वेळ उघड्यावर ठेवू नका.'
    },
    action: {
      en: 'Soak green vegetables in mild saltwater for 5 minutes before cooking, and refrigerate leftovers promptly within 2 hours.',
      hi: 'सब्जियों को पकाने से पहले 5 मिनट के लिए हल्के नमकीन पानी में भिगोएं और बचे हुए भोजन को 2 घंटे के भीतर फ्रिज में रखें।',
      mr: 'भाज्या शिजवण्यापूर्वी ५ मिनिटे मिठाच्या पाण्यात भिजवून धुवा आणि उरलेले अन्न २ तासांच्या आत फ्रीजमध्ये ठेवा.'
    }
  },
  {
    id: 'tip-15-tobacco-avoidance',
    categoryKey: 'tobacco_avoidance',
    category: {
      en: 'Cardiopulmonary Protection',
      hi: 'हृदय और फेफड़ों की सुरक्षा',
      mr: 'हृदय आणि फुफ्फुसांचे रक्षण'
    },
    icon: 'smoke',
    title: {
      en: 'Protect Your Lungs: Avoid All Forms of Tobacco',
      hi: 'तंबाकू, धूम्रपान और गुटखा से पूरी तरह दूर रहें',
      mr: 'तंबाखू, विडी, सिगारेट आणि गुटख्यापासून पूर्ण दूर राहा'
    },
    explanation: {
      en: 'Smoking, beedis, and smokeless tobacco damage arterial linings within minutes, tripling coronary thrombosis risks and causing oral and pulmonary malignancies. Quitting starts repairing lung cilia within 48 hours.',
      hi: 'धूम्रपान, बीड़ी और तंबाकू का सेवन धमनियों को तुरंत नुकसान पहुंचाता है और हृदयघात तथा कैंसर के खतरे को तिगुना कर देता है। छोड़ने के 48 घंटों में शरीर ठीक होने लगता है।',
      mr: 'धूम्रपान आणि तंबाखूमुळे रक्तवाहिन्यांचे त्वरित नुकसान होते, ज्यामुळे हृदयविकाराचा धोका तिप्पट वाढतो. व्यसन सोडल्यास अवघ्या ४८ तासांत शरीर सुधारायला लागते.'
    },
    action: {
      en: 'If you or a loved one use tobacco, reach out to the National Tobacco Quitline (Toll-Free 1800-11-2356) for free counseling.',
      hi: 'यदि आप या कोई परिजन तंबाकू छोड़ना चाहते हैं, तो राष्ट्रीय तंबाकू उन्मूलन हेल्पलाइन (1800-11-2356) पर मुफ्त परामर्श लें।',
      mr: 'तंबाखू सोडण्यासाठी राष्ट्रीय तंबाखूमुक्ती हेल्पलाईनवर (टोल-फ्री १८००-११-२३५६) मोफत समुपदेशनाचा लाभ घ्या.'
    }
  },
  {
    id: 'tip-16-respiratory-health',
    categoryKey: 'respiratory_health',
    category: {
      en: 'Respiratory Health & Airway Care',
      hi: 'श्वसन स्वास्थ्य और शुद्ध वायु',
      mr: 'श्वसन आरोग्य आणि शुद्ध हवा'
    },
    icon: 'wind',
    title: {
      en: 'Fresh Indoor Air Circulation & Gentle Steam',
      hi: 'घर में ताजी हवा का प्रवाह और भाप की देखभाल',
      mr: 'घरातील खेळती हवा आणि वाफेची काळजी'
    },
    explanation: {
      en: 'Indoor air can harbor accumulated particulate matter and allergens. Opening opposing windows for 20 minutes daily reduces volatile irritants, while gentle plain water steam soothes congested mucosal linings.',
      hi: 'कमरे में बंद हवा में धूल और एलर्जी पैदा करने वाले कण जमा हो जाते हैं। प्रतिदिन 20 मिनट खिड़कियां खोलने से ताजी हवा आती है और हल्की भाप लेने से श्वसन मार्ग साफ रहता है।',
      mr: 'घरातील बंद हवेत धूळ आणि ऍलर्जीचे घटक साचतात. दिवसातून २० मिनिटे खिडक्या उघडून खेळती हवा घेतल्यास आणि साध्या पाण्याची वाफ घेतल्यास श्वसनमार्ग मोकळा राहतो.'
    },
    action: {
      en: 'Cross-ventilate your living room every morning, and inhale plain warm steam for 5 minutes if you experience seasonal nasal congestion.',
      hi: 'हर सुबह अपने घर की खिड़कियां खोलकर ताजी हवा आने दें, और मौसमी जुकाम में 5 मिनट के लिए साधारण गर्म पानी की भाप लें।',
      mr: 'दररोज सकाळी घराच्या खिडक्या उघडून ताजी हवा येऊ द्या, आणि सर्दी जाणवल्यास ५ मिनिटे साध्या पाण्याची वाफ घ्या.'
    }
  }
];

export const HEALTH_TIPS_UI = {
  headerBadge: {
    en: 'Your Daily Health Tip',
    hi: 'आपका दैनिक स्वास्थ्य सुझाव',
    mr: 'तुमचा दैनिक आरोग्य सल्ला'
  },
  subheading: {
    en: 'Medically vetted micro-habits for a healthier life',
    hi: 'स्वस्थ और सक्रिय जीवन के लिए चिकित्सकीय दृष्टि से प्रमाणित सुझाव',
    mr: 'निरोगी आणि दीर्घायुष्यासाठी वैद्यकीयदृष्ट्या तपासलेल्या सवयी'
  },
  actionStepLabel: {
    en: 'Practical Action Step',
    hi: 'व्यावहारिक कदम',
    mr: 'कृतीसाठी पाऊल'
  },
  nextTipBtn: {
    en: 'Next Tip',
    hi: 'अगला सुझाव',
    mr: 'पुढील सल्ला'
  },
  tipCounter: {
    en: (current: number, total: number) => `Tip ${current} of ${total}`,
    hi: (current: number, total: number) => `सुझाव ${current} / ${total}`,
    mr: (current: number, total: number) => `सल्ला ${current} / ${total}`
  },
  disclaimer: {
    en: 'Verified lifestyle advice for informational awareness. Always consult a qualified physician for individual diagnosis and clinical treatment.',
    hi: 'सामान्य स्वास्थ्य जागरूकता हेतु प्रमाणित सलाह। व्यक्तिगत जांच और उपचार के लिए हमेशा योग्य डॉक्टर से परामर्श करें।',
    mr: 'सामान्य आरोग्याच्या माहितीसाठी प्रमाणित सल्ला. वैयक्तिक तपासणी व उपचारासाठी नेहमी डॉक्टरांचा सल्ला घ्या.'
  },
  exploreMore: {
    en: 'Explore Preventive Care Library',
    hi: 'निवारक देखभाल केंद्र देखें',
    mr: 'प्रतिबंधात्मक आरोग्य विभाग पहा'
  }
};

/**
 * Hydration-Safe Rotation Queue
 * Ensures:
 * 1. SSR returns index 0 reliably without hydration mismatch.
 * 2. On client mount, checks localStorage for the rotation queue.
 * 3. Shows different tips across refreshes without immediate repetition.
 */
const STORAGE_QUEUE_KEY = 'imd_health_tips_queue';
const STORAGE_LAST_INDEX_KEY = 'imd_health_tips_last_index';

export function getInitialClientTipIndex(totalTips: number): number {
  if (typeof window === 'undefined') return 0;
  try {
    const rawQueue = localStorage.getItem(STORAGE_QUEUE_KEY);
    let queue: number[] = rawQueue ? JSON.parse(rawQueue) : [];

    // If queue is empty or corrupted, create a new shuffled deck of indices
    if (!Array.isArray(queue) || queue.length === 0) {
      queue = Array.from({ length: totalTips }, (_, i) => i);
      // Fisher-Yates shuffle
      for (let i = queue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [queue[i], queue[j]] = [queue[j], queue[i]];
      }
    }

    const nextIdx = queue.shift() ?? 0;
    localStorage.setItem(STORAGE_QUEUE_KEY, JSON.stringify(queue));
    localStorage.setItem(STORAGE_LAST_INDEX_KEY, String(nextIdx));
    return nextIdx;
  } catch {
    return 0;
  }
}

export function advanceToNextTipIndex(
  currentTipIndex: number,
  totalTips: number
): number {
  if (typeof window === 'undefined') {
    return (currentTipIndex + 1) % totalTips;
  }
  try {
    const rawQueue = localStorage.getItem(STORAGE_QUEUE_KEY);
    let queue: number[] = rawQueue ? JSON.parse(rawQueue) : [];

    if (!Array.isArray(queue) || queue.length === 0) {
      // Regenerate queue omitting current index to prevent immediate repeat
      const candidates = Array.from({ length: totalTips }, (_, i) => i).filter(
        (i) => i !== currentTipIndex
      );
      for (let i = candidates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
      }
      queue = candidates;
    }

    const nextIdx = queue.shift() ?? ((currentTipIndex + 1) % totalTips);
    localStorage.setItem(STORAGE_QUEUE_KEY, JSON.stringify(queue));
    localStorage.setItem(STORAGE_LAST_INDEX_KEY, String(nextIdx));
    return nextIdx;
  } catch {
    return (currentTipIndex + 1) % totalTips;
  }
}
