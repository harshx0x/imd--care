'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  RefreshCw,
  Heart,
  Droplets,
  Activity,
  Wind,
  Moon,
  Salad,
  ShieldCheck,
  CheckCircle2,
  Info
} from 'lucide-react';
import { Language } from '@/lib/types';

interface WellnessInspirationProps {
  language: Language;
}

interface WellnessTip {
  category: string;
  icon: typeof Sparkles;
  title: string;
  body: string;
  practicalAction: string;
}

export function WellnessInspiration({ language }: WellnessInspirationProps) {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const tipsByLanguage: Record<Language, {
    sectionBadge: string;
    sectionTitle: string;
    btnText: string;
    tipCounter: (curr: number, total: number) => string;
    disclaimer: string;
    tips: WellnessTip[];
  }> = {
    en: {
      sectionBadge: 'Daily Health Inspiration',
      sectionTitle: 'A Little Wellness Inspiration',
      btnText: 'Show Another Tip',
      tipCounter: (c, t) => `Tip ${c} of ${t}`,
      disclaimer: 'General wellness insight for informational purposes; not individualized medical advice. Consult your doctor for personal clinical questions.',
      tips: [
        {
          category: 'Hydration & Digestion',
          icon: Droplets,
          title: 'Start Your Morning with Lukewarm Water',
          body: 'Drinking 1 to 2 glasses of lukewarm water right after waking up helps jumpstart gut motility, hydrates kidneys after overnight rest, and supports natural detoxification.',
          practicalAction: 'Keep a clean stainless steel or copper water vessel by your bedside to drink immediately upon waking.'
        },
        {
          category: 'Post-Meal Movement',
          icon: Activity,
          title: 'The Indian Tradition of "Shatapawali" (100 Steps)',
          body: 'Taking a slow, relaxed 10-to-15-minute stroll after lunch or dinner improves insulin sensitivity, reduces post-meal blood sugar spikes, and prevents acid reflux.',
          practicalAction: 'Take a relaxed 100-step walk around your living room or veranda instead of immediately lying down.'
        },
        {
          category: 'Breathing & Calm',
          icon: Wind,
          title: 'Mindful Anulom Vilom for Stress Resilience',
          body: 'Ten minutes of alternate nostril breathing (Anulom Vilom) helps down-regulate the sympathetic fight-or-flight response, gently lowers heart rate, and steadies blood pressure.',
          practicalAction: 'Practice 5 minutes in the morning and 5 minutes before bed in a quiet, well-ventilated room.'
        },
        {
          category: 'Balanced Nutrition',
          icon: Salad,
          title: 'Balance Your Thali with the "Half-Plate Veggie" Rule',
          body: 'Traditional Indian meals can be carbohydrate-heavy. Filling half your plate with colorful vegetables (bhindi, lauki, palak) and fresh cucumber salad increases fiber and moderates glucose absorption.',
          practicalAction: 'Enjoy your favorite dal and roti or rice, but ensure vegetables make up at least 50% of the plate volume.'
        },
        {
          category: 'Restorative Sleep',
          icon: Moon,
          title: 'Protect Your Circadian Sleep Window',
          body: 'Aim for 7 to 8 hours of uninterrupted rest. Turning off television and smartphone screens 45 minutes before bed encourages natural melatonin release for restorative deep sleep.',
          practicalAction: 'Replace late-night phone browsing with a warm foot wash, relaxing music, or reading a book.'
        },
        {
          category: 'Preventive Screenings',
          icon: Heart,
          title: 'Annual Blood Pressure & Sugar Check After 30',
          body: 'Hypertension and prediabetes often develop quietly with zero early symptoms. A simple annual routine check helps identify risk markers years before clinical complications arise.',
          practicalAction: 'Schedule an annual routine fasting blood glucose, lipid panel, and blood pressure check with your local doctor.'
        }
      ]
    },
    hi: {
      sectionBadge: 'दैनिक स्वास्थ्य प्रेरणा',
      sectionTitle: 'स्वास्थ्य और कल्याण प्रेरणा',
      btnText: 'अगला सुझाव देखें',
      tipCounter: (c, t) => `सुझाव ${c} / ${t}`,
      disclaimer: 'यह सुझाव केवल सामान्य स्वास्थ्य जागरूकता के लिए है, व्यक्तिगत चिकित्सीय परामर्श नहीं। किसी भी रोग के लिए चिकित्सक से संपर्क करें।',
      tips: [
        {
          category: 'पाचन और हाइड्रेशन',
          icon: Droplets,
          title: 'सुबह गुनगुने पानी से दिन की शुरुआत करें',
          body: 'सुबह उठते ही 1-2 गिलास गुनगुना पानी पीने से पाचन क्रिया सुचारू होती है, शरीर से टॉक्सिन्स बाहर निकलते हैं और दिनभर ऊर्जा बनी रहती है।',
          practicalAction: 'रात को तांबे या कांच के बर्तन में पानी रखें और सुबह खाली पेट घूंट-घूंट करके पिएं।'
        },
        {
          category: 'भोजन के बाद गतिशीलता',
          icon: Activity,
          title: 'भोजन के बाद 100 कदम (शतपावली) की आदत',
          body: 'दोपहर या रात के भोजन के तुरंत बाद लेटने के बजाय 10-15 मिनट की धीमी चहलकदमी ब्लड शुगर को नियंत्रित रखती है और गैस-एसिडिटी से बचाती है।',
          practicalAction: 'भोजन के बाद घर की छत या बालकनी में 100 कदम धीरे-धीरे टहलने का नियम बनाएं।'
        },
        {
          category: 'तनाव मुक्ति व प्राणायाम',
          icon: Wind,
          title: 'प्रतिदिन 10 मिनट अनुलोम-विलोम का अभ्यास',
          body: 'नियमित अनुलोम-विलोम प्राणायाम फेफड़ों की कार्यक्षमता बढ़ाता है, मानसिक तनाव कम करता है और ब्लड प्रेशर को संतुलित रखने में मदद करता है।',
          practicalAction: 'सुबह खुली हवा में शांत बैठकर 5 से 10 मिनट धीरे-धीरे श्वास का अभ्यास करें।'
        },
        {
          category: 'संतुलित भारतीय थाली',
          icon: Salad,
          title: 'थाली में आधी जगह हरी सब्जियों और सलाद को दें',
          body: 'रोटी या चावल के साथ भरपूर मात्रा में मौसमी हरी सब्जियां (लौकी, तोरी, पालक) और कच्चा सलाद खाने से शरीर को पर्याप्त फाइबर मिलता है।',
          practicalAction: 'भोजन की शुरुआत खीरा, टमाटर या ककड़ी से करें ताकि भोजन का ग्लाइसेमिक इंडेक्स कम रहे।'
        },
        {
          category: 'गहरी और आरामदायक नींद',
          icon: Moon,
          title: 'सोने से 45 मिनट पहले स्क्रीन से दूरी बनाएं',
          body: '7 से 8 घंटे की नियमित नींद शरीर के अंगों की मरम्मत के लिए जरूरी है। सोने से पहले मोबाइल स्क्रीन बंद करने से मेलाटोनिन हार्मोन सही समय पर बनता है।',
          practicalAction: 'रात को मोबाइल दूर रखें और सोने से पहले गुनगुने पानी से हाथ-पैर धोएं।'
        },
        {
          category: 'निवारक जांच',
          icon: Heart,
          title: '30 की उम्र के बाद साल में एक बार बीपी और शुगर जांच',
          body: 'हाई ब्लड प्रेशर और डायबिटीज के शुरुआती दिनों में कोई खास लक्षण नहीं दिखते। नियमित वार्षिक जांच से इन्हें समय रहते रोका जा सकता है।',
          practicalAction: 'वर्ष में एक बार अपने नजदीकी स्वास्थ्य केंद्र या पारिवारिक डॉक्टर से बेसिक जांच जरूर कराएं।'
        }
      ]
    },
    mr: {
      sectionBadge: 'दैनिक आरोग्य प्रेरणा',
      sectionTitle: 'आरोग्यदायी जीवनशैली प्रेरणा',
      btnText: 'पुढील टीप पहा',
      tipCounter: (c, t) => `टीप ${c} / ${t}`,
      disclaimer: 'ही माहिती केवळ सामान्य आरोग्य साक्षरतेसाठी आहे, वैयक्तिक वैद्यकीय सल्ल्याचा पर्याय नाही. आजारपणासाठी डॉक्टरांचा सल्ला घ्या.',
      tips: [
        {
          category: 'पचन व पाणी',
          icon: Droplets,
          title: 'सकाळी कोमट पाण्याने दिवसाची सुरुवात करा',
          body: 'सकाळी उठल्यावर १ ते २ ग्लास कोमट पाणी पिल्याने पचनसंस्था सक्रिय होते आणि शरीरातील विषारी घटक बाहेर पडण्यास मदत होते.',
          practicalAction: 'सकाळी उठल्यावर घाई न करता शांत बसून घोट-घोट कोमट पाणी प्यावे.'
        },
        {
          category: 'जेवणानंतरची काळजी',
          icon: Activity,
          title: 'जेवणानंतर शतपावली करण्याची पारंपरिक सवय',
          body: 'दुपारच्या किंवा रात्रीच्या जेवणानंतर लगेच न झोपता १० ते १५ मिनिटे शतपावली केल्यास रक्तातील साखर नियंत्रणात राहते आणि ॲसिडिटी टळते.',
          practicalAction: 'जेवणानंतर घरात किंवा बाल्कनीत १०० पावले हळूवार चालावे.'
        },
        {
          category: 'प्राणायाम व मनःशांती',
          icon: Wind,
          title: '१० मिनिटे अनुलोम-विलोम प्राणायाम',
          body: 'दररोज अनुलोम-विलोम केल्याने मानसिक ताणतणाव कमी होतो, रक्ताभिसरण सुधारते आणि रक्तदाब संतुलित राहण्यास मदत होते.',
          practicalAction: 'सकाळी किंवा संध्याकाळी मोकळ्या हवेत ५ ते १० मिनिटे प्राणायाम करा.'
        },
        {
          category: 'पौष्टिक भारतीय जेवण',
          icon: Salad,
          title: 'ताटात ५०% भाज्या आणि कोशिंबिरीचा समावेश करा',
          body: 'पोळी किंवा भातासोबत भरपूर प्रमाणात पालेभाज्या, डाळी आणि ताजी कोशिंबीर घेतल्यास शरीराला भरपूर फायबर मिळून ऊर्जा टिकून राहते.',
          practicalAction: 'जेवणात काकडी, गाजर किंवा बीटची कोशिंबीर नियमितपणे ठेवावी.'
        },
        {
          category: 'शांत झोप',
          icon: Moon,
          title: 'झोपण्यापूर्वी ४५ मिनिटे मोबाइल स्क्रीन बंद ठेवा',
          body: 'दररोज ७ ते ८ तासांची गाढ झोप शरीराला टवटवीत ठेवते. रात्री उशिरापर्यंत मोबाइल पाहणे टाळल्याने शांत व गाढ झोप लागते.',
          practicalAction: 'झोपण्यापूर्वी हलके संगीत ऐका किंवा थोडे वाचन करा.'
        },
        {
          category: 'प्रतिबंधक तपासणी',
          icon: Heart,
          title: 'वयाच्या ३० नंतर वर्षातून एकदा बीपी व साखरेची तपासणी',
          body: 'रक्तदाब आणि मधुमेहाची लक्षणे सुरुवातीला जाणवत नाहीत. वर्षातून एकदा नियमित तपासणी केल्याने भविष्यातील धोके सहज टाळता येतात.',
          practicalAction: 'दरवर्षी डॉक्टरांकडून मूलभूत आरोग्य तपासणी नक्की करून घ्या.'
        }
      ]
    }
  };

  const currentData = tipsByLanguage[language] || tipsByLanguage.en;
  const currentTip = currentData.tips[currentTipIndex % currentData.tips.length];
  const IconComponent = currentTip.icon;

  const handleNextTip = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTipIndex((prev) => (prev + 1) % currentData.tips.length);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <section className="py-10 bg-[#E8F7F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-[#CDE8E2] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D9F3EC]/60 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none" />

          {/* Top Bar: Badge, Counter & Refresh Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-[#CDE8E2]/70">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center shadow-xs">
                <Sparkles className="w-4 h-4 text-[#0F766E]" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#0F766E] block">
                  {currentData.sectionBadge}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#102A43]">
                  {currentData.sectionTitle}
                </h3>
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
              <span className="text-xs font-semibold text-[#64748B] bg-[#E8F7F5] px-2.5 py-1 rounded-lg border border-[#CDE8E2]">
                {currentData.tipCounter(currentTipIndex + 1, currentData.tips.length)}
              </span>
              <button
                onClick={handleNextTip}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] text-white text-xs font-bold shadow-xs hover:shadow-sm transition cursor-pointer"
                aria-label="Show next wellness tip"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isAnimating ? 'animate-spin' : ''}`} />
                <span>{currentData.btnText}</span>
              </button>
            </div>
          </div>

          {/* Tip Content Card with Smooth Fade */}
          <div
            className={`pt-5 space-y-4 transition-all duration-150 ${
              isAnimating ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center shrink-0 shadow-xs border border-[#35B8A6]/20">
                <IconComponent className="w-6 h-6 text-[#0F766E]" />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F766E] bg-[#D9F3EC]/70 px-2 py-0.5 rounded-md border border-[#CDE8E2]">
                  {currentTip.category}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#102A43] pt-0.5">
                  {currentTip.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#243447] leading-relaxed pt-1">
                  {currentTip.body}
                </p>
              </div>
            </div>

            {/* Practical Daily Takeaway Pill */}
            <div className="p-3.5 rounded-2xl bg-[#E8F7F5]/80 border border-[#CDE8E2] flex items-start gap-2.5 text-xs text-[#243447]">
              <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#102A43] font-semibold">Practical Everyday Step: </strong>
                <span className="text-[#64748B] font-medium">{currentTip.practicalAction}</span>
              </div>
            </div>
          </div>

          {/* Micro Disclaimer */}
          <div className="mt-5 pt-3 border-t border-[#CDE8E2]/60 flex items-center gap-2 text-[10.5px] text-[#64748B]">
            <Info className="w-3.5 h-3.5 text-[#64748B] shrink-0" />
            <p className="leading-tight">{currentData.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
