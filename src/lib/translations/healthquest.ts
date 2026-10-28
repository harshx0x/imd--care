import { Language } from '../types';

export interface HealthQuestTranslations {
  title: string;
  tagline: string;
  subtitle: string;
  startPlaying: string;
  playAgain: string;
  chooseCategory: string;
  backToHub: string;
  continueBtn: string;
  finishBtn: string;
  xpPoints: string;
  streakDays: string;
  streakNotice: string;
  levelLabel: string;
  levels: {
    apprentice: string;
    explorer: string;
    champion: string;
    master: string;
  };
  dailyChallenge: {
    badge: string;
    title: string;
    description: string;
    takeBtn: string;
    completedBadge: string;
  };
  categories: {
    myth_buster: {
      title: string;
      subtitle: string;
      desc: string;
      badge: string;
    };
    knowledge_quiz: {
      title: string;
      subtitle: string;
      desc: string;
      badge: string;
    };
    food_detective: {
      title: string;
      subtitle: string;
      desc: string;
      badge: string;
    };
    emergency_quest: {
      title: string;
      subtitle: string;
      desc: string;
      badge: string;
    };
    healthy_day: {
      title: string;
      subtitle: string;
      desc: string;
      badge: string;
    };
  };
  inGame: {
    questionCount: string;
    yourChoice: string;
    correctBadge: string;
    incorrectBadge: string;
    clinicalExplanation: string;
    clinicalReference: string;
    hintAvailable: string;
    hintRevealed: string;
    showHintBtn: string;
    productComparisonTitle: string;
    fictionalLabelNote: string;
    emergencyBriefingTitle: string;
    emergencyDial112Notice: string;
    selectOneAction: string;
    contextSubtlety: string;
  };
  dayBuilder: {
    title: string;
    subtitle: string;
    balanceScore: string;
    slots: {
      morning: string;
      afternoon: string;
      evening: string;
      night: string;
    };
    coachingFeedback: {
      optimal: string;
      good: string;
      unbalanced: string;
    };
    resetDayBtn: string;
    evaluateBtn: string;
  };
  results: {
    congratulations: string;
    challengeFinished: string;
    scoreSummary: string;
    xpEarnedThisRun: string;
    streakMaintained: string;
    badgesUnlocked: string;
    topicsToReview: string;
    tryAnotherCategory: string;
  };
  badgesModal: {
    title: string;
    subtitle: string;
    unlockedBadge: string;
    lockedBadge: string;
  };
  medicalDisclaimer: string;
}

export const HEALTHQUEST_TRANSLATIONS: Record<Language, HealthQuestTranslations> = {
  en: {
    title: 'HealthQuest India Edition',
    tagline: 'Play. Learn. Discover a Healthier You.',
    subtitle: 'An interactive healthcare game designed to test everyday health literacy, bust regional myths, decode food labels, and practice emergency action.',
    startPlaying: 'Start Playing Now',
    playAgain: 'Play Again',
    chooseCategory: 'Choose a Health Quest Mode',
    backToHub: 'Back to HealthQuest Hub',
    continueBtn: 'Continue to Next Question',
    finishBtn: 'Complete Quest',
    xpPoints: 'XP Points',
    streakDays: 'Day Streak',
    streakNotice: 'Streak Bonus Active! (+5 to +25 XP per consecutive correct answer)',
    levelLabel: 'Level',
    levels: {
      apprentice: 'Health Apprentice',
      explorer: 'Wellness Explorer',
      champion: 'Prevention Champion',
      master: 'Health Master'
    },
    dailyChallenge: {
      badge: "Today's Mission",
      title: 'Daily Health Challenge',
      description: 'Complete today’s curated challenge to keep your learning streak alive and earn +50 bonus XP.',
      takeBtn: 'Play Daily Challenge',
      completedBadge: 'Completed for Today! (+50 XP Earned)'
    },
    categories: {
      myth_buster: {
        title: 'Beat the Health Myth',
        subtitle: 'True, False, or Depends?',
        desc: 'Debunk widespread health misconceptions regarding hydration, ghee, antibiotics, carbs, and joint health using clinical evidence.',
        badge: 'Interactive Myth Buster'
      },
      knowledge_quiz: {
        title: 'Health Knowledge Quiz',
        subtitle: 'Everyday Preventive Wellness',
        desc: 'Challenge your understanding of balanced nutrition, sleep cycles, hygiene standards, and ICMR-recommended activity targets.',
        badge: 'Core Health Literacy'
      },
      food_detective: {
        title: 'Food Label Detective',
        subtitle: 'Read Past the Marketing',
        desc: 'Inspect fictional Indian packaged food nutrition panels, calculate hidden added sugars, and spot high-sodium traps.',
        badge: 'Nutritional Literacy'
      },
      emergency_quest: {
        title: 'Emergency Action Quest',
        subtitle: 'First-Aid & 112 Triage',
        desc: 'Navigate realistic first-aid scenarios: heat stroke in peak summer, suspected cardiac pain, oil burns, and snakebites.',
        badge: 'Life-Saving Preparedness'
      },
      healthy_day: {
        title: 'Build Your Healthy Day',
        subtitle: '24-Hour Routine Architect',
        desc: 'Construct a balanced daily schedule across morning, afternoon, evening, and night to achieve your optimal wellness score.',
        badge: 'Lifestyle Design'
      }
    },
    inGame: {
      questionCount: 'Question',
      yourChoice: 'Your Selection',
      correctBadge: 'Spot On! Correct Answer',
      incorrectBadge: 'Clinical Insight (Good Attempt!)',
      clinicalExplanation: 'Why This Matters (Clinical Explanation)',
      clinicalReference: 'Verified Reference',
      hintAvailable: 'Stuck? Take a Hint',
      hintRevealed: 'Educational Clue',
      showHintBtn: 'Show Helpful Hint',
      productComparisonTitle: 'Fictional Nutrition Facts Comparison',
      fictionalLabelNote: 'Fictional educational labels based on FSSAI guidelines. Designed for consumer literacy.',
      emergencyBriefingTitle: 'Emergency Scenario Briefing',
      emergencyDial112Notice: 'Facing an acute emergency in India? Always dial 112 or 108 immediately.',
      selectOneAction: 'Select the clinically appropriate first action:',
      contextSubtlety: 'Clinical Nuance (Why "Depends" is Vital)'
    },
    dayBuilder: {
      title: 'Construct Your Optimal 24-Hour Routine',
      subtitle: 'Select activities for each phase of the day. Balance rest, nutrition, movement, and mental recovery.',
      balanceScore: 'Day Balance Score',
      slots: {
        morning: 'Morning (6:00 AM – 11:00 AM)',
        afternoon: 'Afternoon (12:00 PM – 4:00 PM)',
        evening: 'Evening (5:00 PM – 8:00 PM)',
        night: 'Night (9:00 PM – 6:00 AM)'
      },
      coachingFeedback: {
        optimal: 'Masterclass Routine! Your choices ensure steady circadian rhythm, balanced glucose, and adequate recovery.',
        good: 'Solid Foundation! Minor adjustments in screen time or post-meal walking will elevate your energy further.',
        unbalanced: 'Circadian Strain Detected: Watch out for skipped meals, late-night screens, or excessive sedentary hours.'
      },
      resetDayBtn: 'Reset Selections',
      evaluateBtn: 'Calculate Routine Balance'
    },
    results: {
      congratulations: 'Quest Completed!',
      challengeFinished: 'Great job investing in your health literacy today.',
      scoreSummary: 'Your Quest Score',
      xpEarnedThisRun: 'XP Points Earned',
      streakMaintained: 'Consecutive Streak',
      badgesUnlocked: 'Newly Unlocked Badges',
      topicsToReview: 'Key Takeaways from This Quest',
      tryAnotherCategory: 'Explore Another Quest Mode'
    },
    badgesModal: {
      title: 'HealthQuest Trophy Case',
      subtitle: 'Earn badges by testing your literacy, uncovering deceptive food labels, and mastering emergency first-aid.',
      unlockedBadge: 'Unlocked',
      lockedBadge: 'Locked'
    },
    medicalDisclaimer: 'Medical Disclaimer: HealthQuest India Edition is an educational gamified platform designed to improve health literacy and awareness. It does not provide medical diagnoses, treatment plans, or clinical prescriptions. Always consult a qualified physician for individual medical concerns. In an acute emergency, dial 112 or 108.'
  },

  hi: {
    title: 'हेल्थक्वेस्ट इंडिया एडिशन',
    tagline: 'खेलें। सीखें। स्वस्थ जीवन की ओर बढ़ें।',
    subtitle: 'एक इंटरैक्टिव स्वास्थ्य शिक्षा गेम जो आम भ्रांतियों को दूर करने, फूड लेबल समझने और आपातकालीन प्राथमिक चिकित्सा सीखने में मदद करता है।',
    startPlaying: 'अभी खेलना शुरू करें',
    playAgain: 'फिर से खेलें',
    chooseCategory: 'गेम मोड चुनें',
    backToHub: 'हेल्थक्वेस्ट हब पर लौटें',
    continueBtn: 'अगले प्रश्न पर जाएं',
    finishBtn: 'क्वेस्ट पूरा करें',
    xpPoints: 'XP अंक',
    streakDays: 'दिनों की स्ट्रीक',
    streakNotice: 'स्ट्रीक बोनस सक्रिय! (लगातार सही उत्तरों पर +5 से +25 अतिरिक्त XP)',
    levelLabel: 'स्तर (Level)',
    levels: {
      apprentice: 'स्वास्थ्य शिक्षार्थी (Apprentice)',
      explorer: 'आरोग्य खोजी (Explorer)',
      champion: 'निवारण चैंपियन (Champion)',
      master: 'स्वास्थ्य विशेषज्ञ (Master)'
    },
    dailyChallenge: {
      badge: 'आज का विशेष मिशन',
      title: 'दैनिक स्वास्थ्य चुनौती',
      description: 'अपनी स्ट्रीक बनाए रखने और +50 बोनस XP पाने के लिए आज की विशेष चुनौती पूरी करें।',
      takeBtn: 'आज की चुनौती खेलें',
      completedBadge: 'आज की चुनौती पूरी हुई! (+50 XP अर्जित)'
    },
    categories: {
      myth_buster: {
        title: 'स्वास्थ्य मिथक तोड़ें',
        subtitle: 'सही, गलत, या परिस्थितियों पर निर्भर?',
        desc: 'पानी की मात्रा, देसी घी, एंटीबायोटिक्स और रात के खाने से जुड़े आम भारतीय मिथकों की सच्चाई जानें।',
        badge: 'इंटरैक्टिव मिथक भंजक'
      },
      knowledge_quiz: {
        title: 'स्वास्थ्य सामान्य ज्ञान क्विज',
        subtitle: 'दैनिक निवारक देखभाल',
        desc: 'संतुलित थाली, नींद के चक्र, हाथ धोने के नियम और व्यायाम के लक्ष्यों पर अपनी समझ को परखें।',
        badge: 'स्वास्थ्य साक्षरता'
      },
      food_detective: {
        title: 'फूड लेबल जासूस',
        subtitle: 'विज्ञापनों के पीछे का सच',
        desc: 'पैकेज्ड फूड के न्यूट्रिशन लेबल पढ़ें, छिपी हुई चीनी को पहचानें और सोडियम की मात्रा की तुलना करें।',
        badge: 'पोषण साक्षरता'
      },
      emergency_quest: {
        title: 'आपातकालीन एक्शन क्वेस्ट',
        subtitle: 'प्राथमिक उपचार एवं 112 प्राथमिकता',
        desc: 'गर्मी में लू लगना, सीने में दर्द, जलना और सर्पदंश जैसी आपात स्थितियों में जीवन रक्षक कदम चुनें।',
        badge: 'जीवन रक्षक तैयारी'
      },
      healthy_day: {
        title: 'अपनी स्वस्थ दिनचर्या बनाएं',
        subtitle: '24 घंटे का जीवनशैली प्लानर',
        desc: 'सुबह से लेकर रात तक की संतुलित दिनचर्या तैयार करें और अपना स्वास्थ्य स्कोर जानें।',
        badge: 'जीवनशैली निर्माण'
      }
    },
    inGame: {
      questionCount: 'प्रश्न',
      yourChoice: 'आपका चयन',
      correctBadge: 'सटीक! बिल्कुल सही उत्तर',
      incorrectBadge: 'चिकित्सीय सीख (सराहनीय प्रयास!)',
      clinicalExplanation: 'यह क्यों जरूरी है (विस्तृत व्याख्या)',
      clinicalReference: 'सत्यापित स्रोत',
      hintAvailable: 'मदद चाहिए? संकेत देखें',
      hintRevealed: 'शैक्षणिक संकेत',
      showHintBtn: 'संकेत देखें',
      productComparisonTitle: 'काल्पनिक पोषण लेबल तुलना',
      fictionalLabelNote: 'FSSAI दिशानिर्देशों पर आधारित काल्पनिक शैक्षिक लेबल।',
      emergencyBriefingTitle: 'आपातकालीन स्थिति का विवरण',
      emergencyDial112Notice: 'भारत में किसी भी आपात स्थिति में हमेशा 112 या 108 डायल करें।',
      selectOneAction: 'चिकित्सीय रूप से सही पहला कदम चुनें:',
      contextSubtlety: 'बारीकी (परिस्थितियों पर निर्भर होना क्यों जरूरी है)'
    },
    dayBuilder: {
      title: 'अपनी सर्वोत्तम 24 घंटे की दिनचर्या बनाएं',
      subtitle: 'दिन के हर पहर के लिए गतिविधियां चुनें। आराम, पोषण, व्यायाम और तनाव मुक्ति का संतुलन बनाएं।',
      balanceScore: 'दिनचर्या संतुलन स्कोर',
      slots: {
        morning: 'सुबह (6:00 AM – 11:00 AM)',
        afternoon: 'दोपहर (12:00 PM – 4:00 PM)',
        evening: 'शाम (5:00 PM – 8:00 PM)',
        night: 'रात (9:00 PM – 6:00 AM)'
      },
      coachingFeedback: {
        optimal: 'शानदार दिनचर्या! आपके चुनाव शरीर की जैविक घड़ी को दुरुस्त रखते हैं और गहरी नींद सुनिश्चित करते हैं।',
        good: 'अच्छा संतुलन! स्क्रीन टाइम कम करने और भोजन के बाद थोड़ा टहलने से ऊर्जा और बढ़ेगी।',
        unbalanced: 'दिनचर्या में सुधार की आवश्यकता: भोजन छोड़ने और देर रात तक मोबाइल देखने से बचें।'
      },
      resetDayBtn: 'चयन रीसेट करें',
      evaluateBtn: 'दिनचर्या का संतुलन मापें'
    },
    results: {
      congratulations: 'क्वेस्ट सफलतापूर्वक पूरा हुआ!',
      challengeFinished: 'आज अपने स्वास्थ्य ज्ञान को बढ़ाने के लिए बहुत बढ़िया प्रयास।',
      scoreSummary: 'आपका कुल स्कोर',
      xpEarnedThisRun: 'इस राउंड में अर्जित XP',
      streakMaintained: 'लगातार स्ट्रीक',
      badgesUnlocked: 'नए खुले हुए बैज',
      topicsToReview: 'इस क्विज की मुख्य सीख',
      tryAnotherCategory: 'अन्य गेम मोड खेलें'
    },
    badgesModal: {
      title: 'हेल्थक्वेस्ट ट्रॉफी केस',
      subtitle: 'क्विज हल करके, फूड लेबल डिकोड करके और आपातकालीन सहायता सीखकर बैज अर्जित करें।',
      unlockedBadge: 'अनलॉक हुआ',
      lockedBadge: 'लॉक है'
    },
    medicalDisclaimer: 'चिकित्सीय अस्वीकरण: हेल्थक्वेस्ट इंडिया एडिशन स्वास्थ्य साक्षरता बढ़ाने के लिए तैयार किया गया एक शैक्षिक गेम है। यह किसी रोग का निदान, इलाज या दवा की पर्ची प्रदान नहीं करता। व्यक्तिगत स्वास्थ्य चिंताओं के लिए योग्य चिकित्सक से परामर्श लें। आपात स्थिति में 112 या 108 पर संपर्क करें।'
  },

  mr: {
    title: 'हेल्थक्वेस्ट इंडिया एडिशन',
    tagline: 'खेळा. शिका. निरोगी जीवन जगा.',
    subtitle: 'दैनंदिन आरोग्य साक्षरता वाढवण्यासाठी, गैरसमज दूर करण्यासाठी, फूड लेबल्स समजून घेण्यासाठी आणि प्रथमोपचार शिकण्यासाठी एक शैक्षणिक खेळ.',
    startPlaying: 'आत्ताच खेळायला सुरुवात करा',
    playAgain: 'पुन्हा खेळा',
    chooseCategory: 'गेम मोड निवडा',
    backToHub: 'हेल्थक्वेस्ट मुखपृष्ठावर जा',
    continueBtn: 'पुढील प्रश्नाकडे चला',
    finishBtn: 'मोहीम पूर्ण करा',
    xpPoints: 'XP गुण',
    streakDays: 'सातत्य (दिवस)',
    streakNotice: 'सातत्य बोनस सक्रिय! (सलग अचूक उत्तरांवर +५ ते +२५ वाढीव XP)',
    levelLabel: 'पातळी (Level)',
    levels: {
      apprentice: 'आरोग्य शिकाऊ (Apprentice)',
      explorer: 'आरोग्य संशोधक (Explorer)',
      champion: 'प्रतिबंध विजेता (Champion)',
      master: 'आरोग्य तज्ज्ञ (Master)'
    },
    dailyChallenge: {
      badge: 'आजचे विशेष आव्हान',
      title: 'दैनिक आरोग्य आव्हान',
      description: 'आपले सातत्य टिकवण्यासाठी आणि +५० बोनस XP मिळवण्यासाठी आजचे आव्हान पूर्ण करा.',
      takeBtn: 'आजचे आव्हान खेळा',
      completedBadge: 'आजचे आव्हान पूर्ण झाले! (+५० XP मिळाले)'
    },
    categories: {
      myth_buster: {
        title: 'आरोग्य गैरसमज दूर करा',
        subtitle: 'बरोबर, चूक की परिस्थितीवर अवलंबून?',
        desc: 'पाणी पिण्याचे प्रमाण, तूप, अँटिबायोटिक्स आणि रात्रीच्या आहाराबद्दलचे गैरसमज पुराव्यांच्या आधारे दूर करा.',
        badge: 'गैरसमज निवारक'
      },
      knowledge_quiz: {
        title: 'आरोग्य सामान्य ज्ञान चाचणी',
        subtitle: 'दैनंदिन प्रतिबंधात्मक काळजी',
        desc: 'संतुलित आहार, झोपेचे महत्त्व, हात धुण्याची पद्धत आणि व्यायामाच्या उद्दिष्टांबद्दलचे ज्ञान तपासा.',
        badge: 'आरोग्य साक्षरता'
      },
      food_detective: {
        title: 'अन्न लेबल गुप्तहेर',
        subtitle: 'विज्ञापनांमागील सत्य',
        desc: 'पॅकबंद अन्नावरील न्यूट्रिशन लेबल्स तपासा, लपलेली साखर शोधा आणि जास्त मीठ असणारे पदार्थ ओळखा.',
        badge: 'आहार साक्षरता'
      },
      emergency_quest: {
        title: 'आपत्कालीन कृती मोहीम',
        subtitle: 'प्रथमोपचार आणि ११२ मदत',
        desc: 'उष्माघात, छातीत तीव्र कळ, भाजणे आणि सर्पदंश यांसारख्या गंभीर प्रसंगात योग्य जीवनरक्षक निर्णय घ्या.',
        badge: 'जीवनरक्षक सज्जता'
      },
      healthy_day: {
        title: 'आपला निरोगी दिवस तयार करा',
        subtitle: '२४ तासांचे जीवनशैली नियोजन',
        desc: 'सकाळपासून रात्रीपर्यंतचे संतुलित वेळापत्रक तयार करा आणि आपला आरोग्य समतोल गुण तपासा.',
        badge: 'जीवनशैली रचना'
      }
    },
    inGame: {
      questionCount: 'प्रश्न',
      yourChoice: 'तुमची निवड',
      correctBadge: 'अचूक! अगदी बरोबर उत्तर',
      incorrectBadge: 'वैद्यकीय माहिती (छान प्रयत्न!)',
      clinicalExplanation: 'हे का महत्त्वाचे आहे (सविस्तर स्पष्टीकरण)',
      clinicalReference: 'प्रमाणित संदर्भ',
      hintAvailable: 'मदत हवी आहे? संकेत पहा',
      hintRevealed: 'शैक्षणिक संकेत',
      showHintBtn: 'संकेत पहा',
      productComparisonTitle: 'काल्पनिक पोषण लेबल तुलना',
      fictionalLabelNote: 'FSSAI नियमांवर आधारित काल्पनिक शैक्षणिक लेबल्स.',
      emergencyBriefingTitle: 'आपत्कालीन प्रसंगाची माहिती',
      emergencyDial112Notice: 'भारतात कोणत्याही वैद्यकीय आणीबाणीत त्वरित ११२ किंवा १०८ डायल करा.',
      selectOneAction: 'वैद्यकीयदृष्ट्या योग्य पहिले पाऊल निवडा:',
      contextSubtlety: 'महत्त्वाचे (परिस्थितीवर अवलंबून असणे का आवश्यक आहे)'
    },
    dayBuilder: {
      title: 'आपले आदर्श २४ तासांचे वेळापत्रक तयार करा',
      subtitle: 'दिवसाच्या प्रत्येक वेळेसाठी योग्य सवय निवडा. विश्रांती, आहार, व्यायाम आणि मानसिक शांततेचा समतोल साधा.',
      balanceScore: 'दिनचर्या समतोल गुण',
      slots: {
        morning: 'सकाळ (६:०० AM – ११:०० AM)',
        afternoon: 'दुपार (१२:०० PM – ४:०० PM)',
        evening: 'संध्याकाळ (५:०० PM – ८:०० PM)',
        night: 'रात्र (९:०० PM – ६:०० AM)'
      },
      coachingFeedback: {
        optimal: 'उत्कृष्ट वेळापत्रक! आपल्या निवडीमुळे शरीराचे संतुलन टिकून राहते आणि गाढ झोप लागते.',
        good: 'छान समतोल! मोबाईलचा वापर कमी केल्यास आणि जेवणानंतर चालल्यास दिवसभर ताजेतवाने वाटेल.',
        unbalanced: 'दिनचर्येत बदलाची गरज: जेवण टाळणे आणि रात्री उशिरापर्यंत मोबाईल पाहणे आरोग्यासाठी घातक ठरू शकते.'
      },
      resetDayBtn: 'पुन्हा निवडा',
      evaluateBtn: 'वेळापत्रकाचा समतोल तपासा'
    },
    results: {
      congratulations: 'मोहीम यशस्वीरीत्या पूर्ण झाली!',
      challengeFinished: 'आज आरोग्यविषयक ज्ञान वाढवण्यासाठी आपण उत्तम प्रयत्न केलात.',
      scoreSummary: 'आपले एकूण गुण',
      xpEarnedThisRun: 'या फेरीत मिळालेले XP',
      streakMaintained: 'सलग सातत्य',
      badgesUnlocked: 'नवीन मिळालेले बॅजेस',
      topicsToReview: 'या चाचणीतून मिळालेली महत्त्वाची शिकवण',
      tryAnotherCategory: 'दुसरा गेम मोड खेळा'
    },
    badgesModal: {
      title: 'हेल्थक्वेस्ट गौरव दालन',
      subtitle: 'प्रश्नांची अचूक उत्तरे देऊन, अन्न लेबल्स तपासून आणि प्रथमोपचार शिकून बॅजेस मिळवा.',
      unlockedBadge: 'मिळाला आहे',
      lockedBadge: 'अजून बंद आहे'
    },
    medicalDisclaimer: 'वैद्यकीय अस्वीकरण: हेल्थक्वेस्ट इंडिया एडिशन हा आरोग्य साक्षरता वाढवण्यासाठी तयार केलेला एक शैक्षणिक खेळ आहे. हा कोणत्याही आजाराचे अंतिम निदान किंवा उपचारांची शिफारस करत नाही. वैयक्तिक वैद्यकीय सल्ल्यासाठी नेहमी तज्ज्ञ डॉक्टरांशी संपर्क साधा. आणीबाणीच्या प्रसंगी ११२ किंवा १०८ वर तात्काळ कॉल करा.'
  }
};

