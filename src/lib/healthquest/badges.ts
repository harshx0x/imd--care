import { HealthBadge } from './types';

export const HEALTH_BADGES: HealthBadge[] = [
  {
    id: 'myth_buster',
    title: {
      en: 'Myth Buster',
      hi: 'मिथक भंजक (Myth Buster)',
      mr: 'गैरसमज निवारक (Myth Buster)'
    },
    description: {
      en: 'Correctly debunked popular health misconceptions using clinical evidence.',
      hi: 'चिकित्सीय प्रमाणों के साथ आम स्वास्थ्य मिथकों का सही समाधान किया।',
      mr: 'वैद्यकीय पुराव्यांच्या आधारे आरोग्याविषयीच्या गैरसमजांचे योग्य निरसन केले.'
    },
    icon: 'ShieldAlert',
    requirement: {
      en: 'Answer 3 Beat the Health Myth challenges correctly',
      hi: 'मिथक चुनौती में 3 प्रश्नों के सही उत्तर दें',
      mr: 'गैरसमज चाचणीतील ३ प्रश्नांची योग्य उत्तरे द्या'
    }
  },
  {
    id: 'food_detective',
    title: {
      en: 'Food Detective',
      hi: 'खाद्य जासूस (Food Detective)',
      mr: 'आहार गुप्तहेर (Food Detective)'
    },
    description: {
      en: 'Deciphered packaged food labels, hidden sugars, and sodium levels like a pro.',
      hi: 'पैकेज्ड फूड लेबल, छिपी हुई शर्करा और सोडियम की मात्रा को सही पहचाना।',
      mr: 'पॅकबंद अन्नपदार्थांचे लेबल्स, लपलेली साखर आणि सोडियमचे प्रमाण अचूक ओळखले.'
    },
    icon: 'Search',
    requirement: {
      en: 'Complete a Food Label Detective comparison with 100% accuracy',
      hi: 'फूड लेबल तुलना को शत-प्रतिशत सटीकता से पूरा करें',
      mr: 'अन्न लेबल तुलना १००% अचूकतेने पूर्ण करा'
    }
  },
  {
    id: 'emergency_guardian',
    title: {
      en: 'Emergency Guardian',
      hi: 'आपातकालीन रक्षक (Emergency Guardian)',
      mr: 'आपत्कालीन रक्षक (Emergency Guardian)'
    },
    description: {
      en: 'Demonstrated rapid, safe first-aid judgment and 112 emergency prioritization.',
      hi: 'त्वरित, सुरक्षित प्राथमिक चिकित्सा और 112 आपातकालीन प्राथमिकता का प्रदर्शन किया।',
      mr: 'जलद, सुरक्षित प्रथमोपचार आणि ११२ आपत्कालीन मदतीला प्राधान्य दिले.'
    },
    icon: 'Siren',
    requirement: {
      en: 'Correctly identify the life-saving action in Emergency Action Quest',
      hi: 'आपातकालीन एक्शन क्वेस्ट में जीवन रक्षक कदम की पहचान करें',
      mr: 'आपत्कालीन कृती मोहिमेत जीवनरक्षक पाऊल अचूक ओळखा'
    }
  },
  {
    id: 'hygiene_hero',
    title: {
      en: 'Hygiene Hero',
      hi: 'स्वच्छता नायक (Hygiene Hero)',
      mr: 'स्वच्छता दूत (Hygiene Hero)'
    },
    description: {
      en: 'Mastered preventive hygiene and everyday infection prevention.',
      hi: 'निवारक स्वच्छता और दैनिक संक्रमण रोकथाम में महारत हासिल की।',
      mr: 'प्रतिबंधात्मक स्वच्छता आणि संसर्ग रोखण्याच्या पद्धतींमध्ये प्रावीण्य मिळवले.'
    },
    icon: 'Sparkles',
    requirement: {
      en: 'Score 100+ XP in Health Knowledge Quiz',
      hi: 'स्वास्थ्य सामान्य ज्ञान में 100+ XP अर्जित करें',
      mr: 'आरोग्य सामान्य ज्ञानात १००+ XP मिळवा'
    }
  },
  {
    id: 'day_architect',
    title: {
      en: 'Day Architect',
      hi: 'दिनचर्या वास्तुकार (Day Architect)',
      mr: 'दिनचर्या वास्तुकार (Day Architect)'
    },
    description: {
      en: 'Engineered a balanced 24-hour cycle of sleep, movement, hydration, and nutrition.',
      hi: 'नींद, व्यायाम, पानी और पोषण का एक संतुलित 24 घंटे का चक्र तैयार किया।',
      mr: 'झोप, व्यायाम, पाणी आणि आहाराचे संतुलित २४ तासांचे वेळापत्रक तयार केले.'
    },
    icon: 'Clock',
    requirement: {
      en: 'Achieve a healthy day balance score above 85 in Build Your Healthy Day',
      hi: 'बिल्ड योर हेल्दी डे में 85 से अधिक संतुलन स्कोर प्राप्त करें',
      mr: 'आपला निरोगी दिवस तयार करा मध्ये ८५ पेक्षा जास्त गुण मिळवा'
    }
  },
  {
    id: 'streak_champion',
    title: {
      en: 'Streak Champion',
      hi: 'निरंतरता चैंपियन (Streak Champion)',
      mr: 'सातत्य विजेता (Streak Champion)'
    },
    description: {
      en: 'Achieved a streak of 3 or more consecutive correct answers.',
      hi: 'लगातार 3 या अधिक सही उत्तर देकर स्ट्रीक बोनस हासिल किया।',
      mr: 'सलग ३ किंवा त्याहून अधिक अचूक उत्तरे देऊन सातत्य बोनस मिळवला.'
    },
    icon: 'Flame',
    requirement: {
      en: 'Answer 3 consecutive questions correctly without mistakes',
      hi: 'बिना किसी गलती के लगातार 3 प्रश्नों के सही उत्तर दें',
      mr: 'कोणत्याही चुकीशिवाय सलग ३ प्रश्नांची अचूक उत्तरे द्या'
    }
  }
];
