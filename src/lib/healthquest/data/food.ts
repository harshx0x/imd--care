import { HealthQuestion } from '../types';

export const FOOD_QUESTIONS: HealthQuestion[] = [
  {
    id: 'food_makhana_vs_chips',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 35,
    question: {
      en: 'Inspect these two snack labels: Product A (Fried Potato Chips) vs Product B (Roasted Makhana). Which snack is much healthier for your heart and blood pressure, and why?',
      hi: 'दो स्नैक्स लेबलों की तुलना करें: उत्पाद A (तले हुए आलू चिप्स) बनाम उत्पाद B (रोस्टेड मखाना)। दिल की सेहत और बीपी के लिए कौन सा स्नैक ज्यादा सुरक्षित और बेहतर है?',
      mr: 'दोन खाऊच्या लेबल्सची तुलना करा: उत्पादन A (तळलेले बटाटा चिप्स) विरूद्ध उत्पादन B (भाजलेले मखाणे). हृदय आणि रक्तदाबासाठी कोणता खाऊ अधिक चांगला आहे आणि का?'
    },
    foodComparison: {
      focusNutrient: {
        en: 'Saturated Fat & Salt (Sodium) Content',
        hi: 'सैचुरेटेड फैट (खराब वसा) और नमक (सोडियम) की मात्रा',
        mr: 'सॅच्युरेटेड फॅट आणि मिठाचे (सोडियम) प्रमाण'
      },
      productA: {
        productName: {
          en: 'Crispy Masala Potato Chips',
          hi: 'क्रिस्पी मसाला आलू चिप्स',
          mr: 'क्रिस्पी मसाला बटाटा चिप्स'
        },
        productSubtitle: {
          en: 'Deep-fried in Palmolein Oil (50g Pack)',
          hi: 'पामोलिन तेल में तले हुए (50 ग्राम पैकेट)',
          mr: 'पामोलिन तेलात तळलेले (५० ग्रॅम पाकीट)'
        },
        servingSize: '50g',
        servingsPerContainer: 1,
        caloriesPerServing: 285,
        totalFat: '18.2g',
        saturatedFat: '14.5g',
        transFat: '0.1g',
        sodiumMg: 780,
        totalCarbs: '27.4g',
        addedSugarGrams: 1.5,
        protein: '3.1g',
        keyIngredients: {
          en: ['Potatoes', 'Refined Palmolein Oil', 'Iodized Salt', 'Spices & Condiments', 'Flavor Enhancers'],
          hi: ['आलू', 'रिफाइंड पामोलिन तेल', 'नमक', 'मसाले', 'फ्लेवर एन्हांसर'],
          mr: ['बटाटे', 'पामोलिन तेल', 'मीठ', 'मसाले', 'फ्लेवर घटक']
        },
        warningFlag: {
          en: 'High in Saturated Fat & Salt (>35% of daily salt limit in one small packet)',
          hi: 'अत्यधिक सैचुरेटेड फैट और ज्यादा नमक (दैनिक सीमा का 35% से अधिक)',
          mr: 'अती सॅच्युरेटेड फॅट आणि जास्त मीठ (दैनंदिन मर्यादेच्या ३५% पेक्षा जास्त)'
        }
      },
      productB: {
        productName: {
          en: 'Slow-Roasted Makhana (Fox Nuts)',
          hi: 'रोस्टेड मखाना',
          mr: 'भाजलेले मखाणे'
        },
        productSubtitle: {
          en: 'Roasted Water Lily Seeds with Light Salt (50g Pack)',
          hi: 'कमलगट्टे के बीज, हल्का नमक व सरसों तेल (50 ग्राम)',
          mr: 'मखाणे, थोडे तेल आणि मीठ (५० ग्रॅम)'
        },
        servingSize: '50g',
        servingsPerContainer: 1,
        caloriesPerServing: 175,
        totalFat: '1.8g',
        saturatedFat: '0.6g',
        transFat: '0.0g',
        sodiumMg: 210,
        totalCarbs: '34.2g',
        addedSugarGrams: 0.0,
        protein: '5.2g',
        keyIngredients: {
          en: ['Popped Makhana', 'Mustard Oil (2%)', 'Rock Salt (Sendha Namak)', 'Black Pepper'],
          hi: ['मखाना', 'सरसों का तेल (2%)', 'सेंधा नमक', 'काली मिर्च'],
          mr: ['मखाणे', 'मोहरीचे तेल (२%)', 'सेंधव मीठ', 'काळी मिरी']
        }
      }
    },
    options: [
      { id: 'opt_1', text: { en: 'Product A (Chips), because potatoes contain more potassium', hi: 'उत्पाद A (चिप्स), क्योंकि आलू में पोटेशियम अधिक होता है', mr: 'उत्पादन A (चिप्स), कारण बटाट्यामध्ये जास्त पोटॅशियम असते' } },
      { id: 'opt_2', text: { en: 'Product B (Makhana), because it has ~95% less saturated fat (0.6g vs 14.5g) and far lower sodium', hi: 'उत्पाद B (मखाना), क्योंकि इसमें 95% कम सैचुरेटेड फैट (0.6 ग्राम बनाम 14.5 ग्राम) और कम नमक है', mr: 'उत्पादन B (मखाणे), कारण त्यात ९५% कमी सॅच्युरेटेड फॅट (०.६ ग्रॅम विरूद्ध १४.५ ग्रॅम) आणि कमी मीठ आहे' } },
      { id: 'opt_3', text: { en: 'Both products are identical because they both have carbs', hi: 'दोनों उत्पाद एक जैसे हैं क्योंकि दोनों में कार्बोहाइड्रेट हैं', mr: 'दोन्ही पदार्थ सारखेच आहेत कारण दोघांमध्ये कार्बोहायड्रेट्स आहेत' } },
      { id: 'opt_4', text: { en: 'Product A is healthier because artificial flavor enhancers boost immunity', hi: 'उत्पाद A बेहतर है क्योंकि फ्लेवर एन्हांसर इम्युनिटी बढ़ाते हैं', mr: 'उत्पादन A चांगले आहे कारण फ्लेवर घटक प्रतिकारशक्ती वाढवतात' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: 'Product B (Roasted Makhana) has only 0.6g of saturated fat compared to 14.5g in the deep-fried potato chips. The chips also pack 780mg of sodium (nearly 40% of an adult’s entire daily salt allowance) in one tiny bag, which raises blood pressure.',
      hi: 'उत्पाद B (मखाना) में केवल 0.6 ग्राम सैचुरेटेड फैट है, जबकि तले हुए चिप्स में 14.5 ग्राम फैट और 780 मिलीग्राम नमक भरा है। इतना नमक और तेल खाने से बीपी और कोलेस्ट्रॉल बढ़ता है।',
      mr: 'उत्पाद B (मखाना) मध्ये केवळ ०.६ ग्रॅम सॅच्युरेटेड फॅट आहे, तर चिप्समध्ये १४.५ ग्रॅम फॅट आणि ७८० मिग्रॅ मीठ आहे. पोषण लेबल तपासल्यास तळलेल्या पदार्थांमधील जास्त तेल आणि मीठ स्पष्ट होते.'
    },
    source: 'Food Safety and Standards Authority of India (FSSAI) Labelling Regulations',
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
      en: 'A 200 ml bottle of packaged mango drink states "Added Sugars: 26g". Since 1 teaspoon of sugar is about 4 grams, how much sugar are you drinking in this single small bottle?',
      hi: 'पैकेट वाले मैंगो ड्रिंक की 200 मिली बोतल पर "ऐडेड शुगर: 26 ग्राम" लिखा है। यदि 1 चम्मच चीनी में 4 ग्राम होते हैं, तो इस छोटी बोतल में कितने चम्मच चीनी भरी है?',
      mr: 'एका २०० मिली मँगो ज्यूसच्या बाटलीवर "Added Sugars: 26g" नमूद आहे. १ चमचा साखर सुमारे ४ ग्रॅमची असल्यास, या एका बाटलीत किती चमचे साखर भरलेली आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'About 1.5 teaspoons', hi: 'लगभग 1.5 चम्मच', mr: 'सुमारे १.५ चमचे' } },
      { id: 'opt_2', text: { en: 'About 3 teaspoons', hi: 'लगभग 3 चम्मच', mr: 'सुमारे ३ चमचे' } },
      { id: 'opt_3', text: { en: '6.5 teaspoons (More than the recommended daily limit for an adult!)', hi: '6.5 चम्मच (पूरे दिन की सुरक्षित सीमा से भी ज्यादा!)', mr: '६.५ चमचे (संपूर्ण दिवसाच्या सुरक्षित मर्यादेपेक्षाही जास्त!)' } },
      { id: 'opt_4', text: { en: 'Zero teaspoons (fruit sugar does not count)', hi: 'शून्य चम्मच (फलों की चीनी की गिनती नहीं होती)', mr: 'शून्य चमचे (फळांमधील साखर मोजली जात नाही)' } }
    ],
    correctOptionId: 'opt_3',
    explanation: {
      en: '26 grams divided by 4 grams equals 6.5 teaspoons of white sugar in a single small bottle! Health guidelines recommend keeping added sugar under 6 teaspoons for the entire day. Liquid sugar drinks spike your blood sugar rapidly and lead to weight gain.',
      hi: '26 ग्राम को 4 से भाग देने पर 6.5 चम्मच चीनी निकलती है! पूरे दिन में कुल 6 चम्मच से कम चीनी की सलाह दी जाती है। इस एक ही बोतल से आपके पूरे दिन के कोटे से ज्यादा चीनी पेट में चली जाती है।',
      mr: '२६ भागिले ४ म्हणजे तब्बल ६.५ चमचे साखर! संपूर्ण दिवसासाठी ६ चमच्यांपेक्षा कमी साखरेची शिफारस केली जाते. अशा गोड पेयांमुळे रक्तातील साखर वेगाने वाढते आणि वजन वाढते.'
    },
    source: 'WHO Guideline on Sugars Intake & FSSAI Labelling Norms',
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
      en: 'On packaged foods in India, what does the order of ingredients listed on the back of the packet mean?',
      hi: 'भारत में पैकेटबंद खाद्य पदार्थों के पीछे सामग्री (Ingredients) की सूची किस क्रम में लिखी जाती है?',
      mr: 'पॅकबंद अन्नावरील घटकांची (Ingredients) यादी कोणत्या क्रमाने लिहिलेली असणे बंधनकारक आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Alphabetical order from A to Z', hi: 'वर्णमाला के अनुसार (A से Z)', mr: 'अकारविल्हेनुसार (A ते Z)' } },
      { id: 'opt_2', text: { en: 'Descending order by weight (the largest ingredient is listed first)', hi: 'वजन के घटते क्रम में (सबसे ज्यादा मात्रा वाली चीज सबसे पहले)', mr: 'वजनाच्या उतरत्या क्रमाने (सर्वात जास्त प्रमाणातील घटक सर्वात प्रथम)' } },
      { id: 'opt_3', text: { en: 'Random order chosen by the company', hi: 'कंपनी की मर्जी से किसी भी क्रम में', mr: 'कंपनीच्या मर्जीनुसार कोणत्याही क्रमाने' } },
      { id: 'opt_4', text: { en: 'Healthiest ingredient listed first', hi: 'सबसे पौष्टिक चीज पहले', mr: 'सर्वात पौष्टिक घटक प्रथम' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: 'By law, ingredients must be listed from largest to smallest by weight. If "Sugar" or "Refined Wheat Flour (Maida)" is the first or second item on an "Oats Cookie" or "Health Bar", that ingredient makes up most of what you are eating.',
      hi: 'कानून के अनुसार, जिस चीज की मात्रा सबसे ज्यादा होती है, उसका नाम सबसे पहले लिखा जाता है। यदि किसी "हेल्थ बिस्किट" में पहला नाम "मैदा" या "चीनी" है, तो समझें कि उसमें सबसे ज्यादा वही भरा है।',
      mr: 'नियमांनुसार ज्या घटकाचे प्रमाण सर्वाधिक असते, त्याचे नाव सर्वात प्रथम लिहिले जाते. "हेल्थ बिस्किटावर" पहिले नाव "मैदा" किंवा "साखर" असेल, तर त्यात त्यांचाच भरणा जास्त असतो.'
    },
    source: 'FSSAI Food Safety and Standards (Labelling and Display) Regulations',
    hint: {
      en: 'If water is the very first ingredient in a fruit drink, does that mean there is more water than fruit pulp?',
      hi: 'यदि किसी जूस में पहली सामग्री "पानी" लिखी है, तो क्या उसमें फल से ज्यादा पानी है?',
      mr: 'ज्यूसच्या घटकांमध्ये पहिले नाव "पाणी" असेल, तर फळापेक्षा पाण्याचे प्रमाण जास्त असते का?'
    }
  },
  {
    id: 'food_atta_bread_vs_brown_bread',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 35,
    question: {
      en: 'Compare the ingredients of Brand A ("Atta Bread") vs Brand B ("Brown Bread"). Brand A lists: "Whole wheat atta 88%, Yeast, Salt". Brand B lists: "Refined maida 72%, Whole wheat 12%, Caramel color, Sugar 6%". Which bread is genuinely healthy whole wheat?',
      hi: 'ब्रांड A ("आटा ब्रेड") और ब्रांड B ("ब्राउन ब्रेड") की सामग्री देखें। ब्रांड B में 72% मैदा और भूरे रंग के लिए कारमेल कलर मिलाया गया है। कौन सी ब्रेड वास्तव में सेहतमंद है?',
      mr: 'ब्रँड A आणि ब्रँड B च्या घटकांची तुलना करा. ब्रँड B मध्ये ७२% मैदा असून ब्राऊन रंगासाठी कृत्रिम रंग वापरला आहे. कोणती ब्रेड खरी गव्हाची व आरोग्यदायी आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Brand A, because 88% is real whole wheat atta without artificial brown food coloring', hi: 'ब्रांड A, क्योंकि इसमें 88% असली साबुत आटा है और कोई नकली भूरा रंग नहीं मिलाया गया है', mr: 'ब्रँड A, कारण त्यात ८८% गव्हाचा खरा आटा असून कोणताही कृत्रिम तपकिरी रंग वापरलेला नाही' } },
      { id: 'opt_2', text: { en: 'Brand B, because caramel color makes bread digest faster', hi: 'ब्रांड B, क्योंकि कारमेल कलर ब्रेड को जल्दी पचाता है', mr: 'ब्रँड B, कारण रंग ब्रेड लवकर पचवतो' } },
      { id: 'opt_3', text: { en: 'Both breads are identical in health value', hi: 'दोनों ब्रेड पोषण में बिल्कुल एक जैसी हैं', mr: 'दोन्ही ब्रेड्स एकसारख्याच आहेत' } },
      { id: 'opt_4', text: { en: 'Brand B is healthier because maida is lighter for the stomach', hi: 'ब्रांड B बेहतर है क्योंकि मैदा पेट के लिए हल्का होता है', mr: 'ब्रँड B उत्तम आहे कारण मैदा पोटासाठी हलका असतो' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Many commercial "Brown Breads" in India are simply white maida bread dyed brown using caramel food color. Checking the ingredients list shows that Brand A is 88% real whole wheat atta, while Brand B is mostly 72% refined maida.',
      hi: 'बाजार में मिलने वाली कई "ब्राउन ब्रेड" वास्तव में सफेद मैदा ही होती हैं, जिन्हें रंग डालकर भूरा किया जाता है। हमेशा सामग्री की सूची देखें: असली आटा ब्रेड में पहला नाम साबुत गेहूं (Whole Wheat Atta) होना चाहिए।',
      mr: 'बाजारातील अनेक "ब्राऊन ब्रेड" या मैद्यामध्ये तपकिरी रंग मिसळून तयार केलेल्या असतात. ब्रँड A मध्ये ८८% संपूर्ण गव्हाचा आटा आहे, तर ब्रँड B मध्ये ७२% मैदा आहे. केवळ रंगावर न जाता घटकांची यादी तपासावी.'
    },
    source: 'FSSAI Guidance Note on Bread Standards & ICMR Dietary Guidelines',
    hint: {
      en: 'Look at the first ingredient in Brand B: Refined wheat flour (Maida) 72%. Is it really whole wheat?',
      hi: 'ब्रांड B की पहली सामग्री देखें: 72% मैदा। क्या यह वास्तव में स्वास्थ्यवर्धक आटा ब्रेड है?',
      mr: 'ब्रँड B मधील पहिला घटक तपासा: ७२% मैदा. ही खरी गव्हाची ब्रेड असू शकते का?'
    }
  },
  {
    id: 'food_instant_noodles_sodium',
    mode: 'food_detective',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'A 70g packet of instant noodles contains 1,220 mg of sodium. If the healthy daily limit for an adult is 2,000 mg, how much of your day’s total salt allowance is in that single snack?',
      hi: '70 ग्राम के इंस्टेंट नूडल्स के पैकेट में 1,220 मिलीग्राम सोडियम (नमक) है। यदि पूरे दिन की सुरक्षित सीमा 2,000 मिलीग्राम है, तो इस अकेले नाश्ते में आपके पूरे दिन के कोटे का कितना हिस्सा मौजूद है?',
      mr: '७० ग्रॅमच्या इन्स्टंट नूडल्सच्या पाकिटात १,२२० मिग्रॅ सोडियम आहे. संपूर्ण दिवसाची सुरक्षित मर्यादा २,००० मिग्रॅ असल्यास, या एकाच पाकिटात दिवसाच्या मर्यादेपैकी किती टक्के मीठ सामावलेले आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'About 10% (very minimal salt)', hi: 'लगभग 10% (बहुत कम नमक)', mr: 'सुमारे १०% (अतिशय कमी मीठ)' } },
      { id: 'opt_2', text: { en: 'Over 60% of your entire day’s sodium limit (1,220 ÷ 2,000 = 61%)', hi: 'पूरे दिन की सीमा का 61% से अधिक (1,220 ÷ 2,000 = 61%)', mr: 'संपूर्ण दिवसाच्या मर्यादेच्या ६१% हून अधिक (१,२२० ÷ २,००० = ६१%)' } },
      { id: 'opt_3', text: { en: 'Exactly 2% of the daily allowance', hi: 'दैनिक कोटे का केवल 2%', mr: 'केवळ २%' } },
      { id: 'opt_4', text: { en: 'Noodle sodium is harmless and does not count', hi: 'नूडल्स का नमक नुकसान नहीं करता', mr: 'नूडल्समधील मीठ हानीकारक नसते' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: '1,220 mg sodium is 61% of an adult’s entire daily recommended salt limit! Eating this one single packet leaves almost no salt budget for your regular meals (dal, sabzi, roti), pushing your blood pressure higher.',
      hi: '1,220 मिलीग्राम सोडियम आपके पूरे दिन के नमक के कोटे का 61% हिस्सा अकेले पूरा कर देता है! इसके बाद दिनभर दाल, सब्जी और रोटी खाने से शरीर में नमक की मात्रा बहुत ज्यादा बढ़ जाती है, जिससे बीपी बढ़ता है।',
      mr: '१,२२० मिग्रॅ सोडियम म्हणजे दिवसभराच्या एकूण मर्यादेपैकी ६१% मीठ या एकाच पाकिटात संपते! त्यानंतरच्या जेवणामुळे शरीरात मिठाचे प्रमाण सुरक्षित मर्यादेपेक्षा जास्त वाढून रक्तदाब वाढतो.'
    },
    source: 'WHO Sodium Reduction Guidelines & ICMR-NIN Indian Dietary Guidelines 2024',
    hint: {
      en: 'Calculate: 1,220 divided by 2,000 = 61%.',
      hi: 'हिसाब लगाएं: 1,220 भाग 2,000 = 61%',
      mr: 'हिशोब करा: १,२२० भागिले २,००० = ६१%.'
    }
  },
  {
    id: 'food_zero_sugar_cola_sweetener',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Between a 300 ml can of "Diet Zero-Sugar Soda" (0 calories, with artificial chemicals and acids) and 300 ml of Fresh Tender Coconut Water (natural potassium and electrolytes), which drink gives real healthy hydration?',
      hi: '"डाइट जीरो-शुगर सोडा" (0 कैलोरी, कृत्रिम मिठास और एसिड) बनाम ताजा नारियल पानी (प्राकृतिक पोटेशियम और मिनरल्स)। कौन सा पेय शरीर को असली और स्वस्थ हाइड्रेशन देता है?',
      mr: '"डायट झिरो-शुगर सोडा" (० कॅलरी, कृत्रिम रसायने) विरूद्ध ताजे शहाळ्याचे पाणी (नैसर्गिक खनिजे). कोणते पेय शरीराला खऱ्या अर्थाने आरोग्यदायी हायड्रेशन पुरवते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Fresh Coconut Water, because natural potassium and electrolytes hydrate your body without synthetic chemicals or acids', hi: 'ताजा नारियल पानी, क्योंकि प्राकृतिक पोटेशियम और इलेक्ट्रोलाइट्स बिना किसी केमिकल के शरीर को स्वस्थ रखते हैं', mr: 'ताजे शहाळ्याचे पाणी, कारण नैसर्गिक पोटॅशियम आणि खनिजे शरीराला पोषक हायड्रेशन देतात' } },
      { id: 'opt_2', text: { en: 'Diet Soda, because zero calories is always healthier than natural fruit water', hi: 'डाइट सोडा, क्योंकि शून्य कैलोरी किसी भी फल से बेहतर है', mr: 'डायट सोडा, कारण शून्य कॅलरी हे कोणत्याही फळापेक्षा श्रेष्ठ असते' } },
      { id: 'opt_3', text: { en: 'Both drinks have the exact same effect on your body', hi: 'दोनों पेय शरीर के लिए बिल्कुल एक जैसे हैं', mr: 'दोन्ही पेये शरीरासाठी एकसारखीच आहेत' } },
      { id: 'opt_4', text: { en: 'Diet Soda strengthens teeth because acid cleans enamel', hi: 'डाइट सोडा दांतों को साफ करता है', mr: 'डायट सोडा दात स्वच्छ करतो' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'While diet sodas have zero sugar, they contain artificial sweeteners and acids that can erode tooth enamel and upset digestion. Fresh tender coconut water provides natural potassium and hydration that nourish your body.',
      hi: 'डाइट सोडा में चीनी नहीं होती लेकिन इसमें मौजूद कृत्रिम मिठास और एसिड दांतों और आंतों के लिए अच्छे नहीं होते। ताजा नारियल पानी प्राकृतिक पोटेशियम और मिनरल्स देता है जो दिल और शरीर को स्वस्थ रखते हैं।',
      mr: 'डायट सोड्यामध्ये कॅलरीज नसतील तरी त्यातील रसायने आणि ॲसिड दातांचे व पोटाचे नुकसान करू शकतात. शहाळ्याचे पाणी नैसर्गिक पोटॅशियमने समृद्ध असून शरीराला खरी ताकद देते.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians & WHO Guidance on Non-Sugar Sweeteners',
    hint: {
      en: 'Does 0 calories automatically mean healthy? Compare artificial chemical acids with natural fresh coconut water.',
      hi: 'क्या शून्य कैलोरी का मतलब हमेशा स्वस्थ होता है? रासायनिक एसिड और प्राकृतिक नारियल पानी की तुलना करें।',
      mr: 'शून्य कॅलरी म्हणजे नेहमी आरोग्यदायी असते का? रासायनिक पेये आणि नैसर्गिक शहाळ्याच्या पाण्याची तुलना करा.'
    }
  },
  {
    id: 'food_instant_oatmeal_sugar',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 35,
    question: {
      en: 'A 40g packet of flavored "Strawberry Instant Oats" lists 14g of added sugar. What percentage of that entire packet is pure added sugar?',
      hi: '"स्ट्रॉबेरी इंस्टेंट ओट्स" के 40 ग्राम के पैकेट में 14 ग्राम चीनी मिलाई गई है। इस पैकेट के कुल वजन का कितना प्रतिशत हिस्सा केवल चीनी है?',
      mr: '४० ग्रॅमच्या "इन्स्टंट स्ट्रॉबेरी ओट्स" च्या पाकिटात १४ ग्रॅम साखर भरलेली आहे. या पाकिटाच्या एकूण वजनापैकी किती टक्के भाग केवळ साखरेचा आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: '35% of the entire packet is pure added sugar (14g ÷ 40g = 35%)', hi: 'पूरे पैकेट का 35% हिस्सा केवल चीनी है (14g ÷ 40g = 35%)', mr: 'संपूर्ण पाकिटाच्या ३५% वजन केवळ साखरेचे आहे (१४ ग्रॅम ÷ ४० ग्रॅम = ३५%)' } },
      { id: 'opt_2', text: { en: 'Less than 1%', hi: '1% से कम', mr: '१% पेक्षा कमी' } },
      { id: 'opt_3', text: { en: '100% of the packet is oats', hi: 'पूरा पैकेट केवल ओट्स है', mr: 'संपूर्ण पाकीट केवळ ओट्सचे आहे' } },
      { id: 'opt_4', text: { en: 'Sugar in oats does not raise blood sugar', hi: 'ओट्स की चीनी ब्लड शुगर नहीं बढ़ाती', mr: 'ओट्समधील साखर रक्तातील साखर वाढवत नाही' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: '14 grams of sugar inside a 40g packet means 35% of what is in your bowl is refined sugar (about 3.5 whole teaspoons of sugar!). Plain unflavored oats topped with fresh fruit have zero added sugar and give you real heart-healthy fiber.',
      hi: '40 ग्राम के पैकेट में 14 ग्राम चीनी का मतलब है कि पैकेट का 35% हिस्सा (लगभग 3.5 चम्मच) सिर्फ चीनी है! सादे ओट्स में ताजे फल काटकर खाना सबसे सेहतमंद तरीका है।',
      mr: '४० ग्रॅमच्या पाकिटात १४ ग्रॅम साखर म्हणजे ३५% भाग (साडेतीन चमचे) फक्त पांढरी साखर आहे! साध्या ओट्समध्ये ताजी फळे घालून खाणे हाच सर्वात आरोग्यदायी पर्याय आहे.'
    },
    source: 'FSSAI Food Labelling Requirements & National Institute of Nutrition',
    hint: {
      en: 'Calculate: 14 divided by 40 = 0.35 (35%).',
      hi: 'हिसाब लगाएं: 14 भाग 40 = 35%',
      mr: 'हिशोब करा: १४ भागिले ४० = ३५%.'
    }
  },
  {
    id: 'food_cereal_serving_trick',
    mode: 'food_detective',
    difficulty: 'hard',
    points: 40,
    question: {
      en: 'A box of breakfast flakes advertises "Only 6g of sugar per serving!", but the fine print lists a tiny serving size of 30g. If you eat a normal breakfast bowl of 90g, how much sugar are you actually eating?',
      hi: 'नाश्ते के कॉर्नफ्लेक्स के डिब्बे पर लिखा है "प्रति सर्विंग केवल 6 ग्राम चीनी", लेकिन बारीक अक्षरों में सर्विंग साइज सिर्फ 30 ग्राम लिखा है। यदि आप सामान्य कटोरी में 90 ग्राम खाते हैं, तो वास्तव में कितनी चीनी खा रहे हैं?',
      mr: 'नाश्त्याच्या धान्याच्या पाकिटावर "प्रति सर्व्हिंग फक्त ६ ग्रॅम साखर" असा दावा आहे. मात्र बारीक अक्षरात १ सर्व्हिंग = ३० ग्रॅम लिहिले आहे. सामान्य वाटीत ९० ग्रॅम खाल्ल्यास प्रत्यक्षात किती साखर पोटात जाईल?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Still only 6 grams because serving size does not matter', hi: 'अभी भी केवल 6 ग्राम', mr: 'अजूनही फक्त ६ ग्रॅम' } },
      { id: 'opt_2', text: { en: '18 grams of sugar (equal to 4.5 full teaspoons of white sugar!)', hi: '18 ग्राम चीनी (लगभग 4.5 चम्मच चीनी के बराबर!)', mr: '१८ ग्रॅम साखर (साडेचार पूर्ण चमचे साखरेइतकी!)' } },
      { id: 'opt_3', text: { en: 'Zero grams because milk dissolves the sugar away', hi: 'शून्य ग्राम क्योंकि दूध चीनी को खत्म कर देता है', mr: 'शून्य ग्रॅम कारण दूध साखरेला संपवते' } },
      { id: 'opt_4', text: { en: '60 grams of sugar', hi: '60 ग्राम चीनी', mr: '६० ग्रॅम साखर' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: 'Companies often list an unrealistically tiny serving size (30g) so the sugar count looks small. A normal bowl of 90g is 3 servings: 6g × 3 = 18 grams of added sugar (4.5 teaspoons!) before you even leave home in the morning.',
      hi: 'कंपनियां सर्विंग साइज को जानबूझकर बहुत छोटा (30 ग्राम) दिखाती हैं ताकि चीनी कम दिखे। 90 ग्राम खाने का मतलब है 3 गुना खाना (6 × 3 = 18 ग्राम चीनी)। यानी एक ही कटोरी में लगभग 4.5 चम्मच चीनी शरीर में चली जाती है।',
      mr: 'कंपन्या सर्व्हिंग साईझ मुद्दाम लहान (३० ग्रॅम) दाखवतात जेणेकरून साखरेचा आकडा कमी दिसावा. ९० ग्रॅम खाल्ल्यास ३ पट साखर (६ × ३ = १८ ग्रॅम) पोटात जाते, म्हणजेच साडेचार चमचे साखर!'
    },
    source: 'FSSAI Advertising and Claims Regulations & WHO Sugar Guidelines',
    hint: {
      en: '90g is 3 times the 30g serving size. Multiply 6g × 3.',
      hi: '90 ग्राम 30 ग्राम का तीन गुना है। 6 को 3 से गुणा करें।',
      mr: '९० ग्रॅम हे ३० ग्रॅमच्या तिप्पट आहे. ६ ला ३ ने गुणा.'
    }
  },
  {
    id: 'food_curd_vs_flavored_yogurt',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'Compare 100g of fresh homemade curd (dahi) with 0g added sugar vs 100g of packaged flavored mango yogurt with 18g added sugar (4.5 teaspoons). Which is truly better for your gut and overall health?',
      hi: '100 ग्राम घर के सादे दही (0 ग्राम चीनी) और 100 ग्राम बाजार के मैंगो योगर्ट (18 ग्राम यानी 4.5 चम्मच चीनी) की तुलना करें। पेट और सेहत के लिए कौन सा विकल्प बेहतर है?',
      mr: '१०० ग्रॅम घरचे साधे दही (० ग्रॅम साखर) विरूद्ध बाजारातील फ्लेवर्ड योगर्ट (१८ ग्रॅम म्हणजे साडेचार चमचे साखर). पोटासाठी आणि आरोग्यासाठी कोणता पर्याय अधिक चांगला आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Homemade Curd (Dahi), because it provides natural live probiotics without heaps of sugar that spike your blood glucose', hi: 'घर का सादा दही, क्योंकि यह बिना चीनी के प्राकृतिक प्रोबायोटिक्स देता है जो पेट को स्वस्थ रखते हैं', mr: 'घरचे साधे दही, कारण ते साखरेशिवाय नैसर्गिक प्रोबायोटिक्स देते जे पचनसंस्था निरोगी ठेवतात' } },
      { id: 'opt_2', text: { en: 'Flavored Yogurt, because added sugar makes gut bacteria multiply faster', hi: 'फ्लेवर्ड योगर्ट, क्योंकि चीनी से बैक्टीरिया तेजी से बढ़ते हैं', mr: 'फ्लेवर्ड योगर्ट, कारण साखरेमुळे जीवाणू लवकर वाढतात' } },
      { id: 'opt_3', text: { en: 'Both are identical dairy snacks', hi: 'दोनों एक जैसे उत्पाद हैं', mr: 'दोन्ही दुग्धजन्य पदार्थ एकसारखेच आहेत' } },
      { id: 'opt_4', text: { en: 'Neither curd nor yogurt should ever be eaten', hi: 'दही कभी नहीं खाना चाहिए', mr: 'दही कधीही खाऊ नये' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Flavored packaged yogurts are often sweet desserts in disguise, containing 18-20g of added sugar per cup. That much sugar spikes your blood insulin. Traditional homemade dahi provides beneficial natural probiotics (good bacteria) with zero added sugar.',
      hi: 'बाजार के फ्लेवर्ड योगर्ट में 18-20 ग्राम तक चीनी होती है, जो मिठाई जितनी है। यह ब्लड शुगर बढ़ाती है। घर का सादा दही बिना चीनी के पेट के लिए सबसे अच्छा प्राकृतिक प्रोबायोटिक आहार है।',
      mr: 'बाजारातील फ्लेवर्ड योगर्टमध्ये १८ ते २० ग्रॅम साखर असते, जी मिठाईसारखीच हानिकारक आहे. याउलट घरचे ताजे दही कोणतीही साखर नसलेले पचनासाठी सर्वोत्तम नैसर्गिक प्रोबायोटिक आहे.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, 2024',
    hint: {
      en: 'Does 4.5 teaspoons of white sugar in a tiny cup sound like health food or a sweet dessert?',
      hi: '100 ग्राम की छोटी कटोरी में 4.5 चम्मच चीनी क्या स्वास्थ्यवर्धक हो सकती है?',
      mr: 'एका लहान वाटीत साडेचार चमचे साखर असणे हे आरोग्यासाठी चांगले ठरेल का?'
    }
  },
  {
    id: 'food_tomato_ketchup_sugar',
    mode: 'food_detective',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'A popular bottle of tomato ketchup lists 24% sugar in its ingredients. In a single standard tablespoon (15g) of ketchup, approximately how much sugar are you eating?',
      hi: 'टोमैटो केचप की सामग्री में 24% चीनी लिखी होती है। इसके केवल एक बड़े चम्मच (15 ग्राम) केचप में लगभग कितनी चीनी होती है?',
      mr: 'टोमॅटो केचपच्या घटकांमध्ये २४% साखर असते. या केचपच्या केवळ एका चमच्यामध्ये (१५ ग्रॅम) साधारण किती साखर असते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Approximately 3.6 to 4 grams (nearly one full level teaspoon of sugar in every single tablespoon!)', hi: 'लगभग 4 ग्राम (केचप के हर एक चम्मच में लगभग एक पूरा चम्मच चीनी!)', mr: 'सुमारे ४ ग्रॅम (केचपच्या प्रत्येक एका चमच्यामागे जवळपास एक पूर्ण चमचा साखर!)' } },
      { id: 'opt_2', text: { en: 'Zero sugar because tomatoes are vegetables', hi: 'शून्य चीनी क्योंकि टमाटर सब्जी है', mr: 'शून्य साखर कारण टोमॅटो भाजी आहे' } },
      { id: 'opt_3', text: { en: '15 grams of pure calcium', hi: '15 ग्राम कैल्शियम', mr: '१५ ग्रॅम कॅल्शियम' } },
      { id: 'opt_4', text: { en: 'Sugar in ketchup does not digest', hi: 'केचप की चीनी पचती नहीं', mr: 'केचपमधील साखर पचत नाही' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'At 24% sugar, every 15g tablespoon of ketchup contains nearly 4 grams of sugar—equivalent to an entire level teaspoon of white sugar! Dipping samosas or snacks into multiple dollops easily adds 3 to 4 teaspoons of hidden sugar to your day.',
      hi: 'केचप में 24% तक चीनी होती है। इसका मतलब है कि केचप के हर एक चम्मच में लगभग एक पूरा चम्मच चीनी छिपी होती है। पकौड़ों या समोसे के साथ 3-4 चम्मच केचप खाने से आप अनजाने में कई चम्मच चीनी खा लेते हैं।',
      mr: 'केचपमध्ये २४% साखर असते. म्हणजेच केचपचा एक चमचा खाताना आपण जवळपास एक पूर्ण चमचा पांढरी साखर खात असतो. समोसा किंवा भजीसोबत केचप खाताना नकळत भरपूर साखर पोटात जाते.'
    },
    source: 'FSSAI Food Product Standards Regulations',
    hint: {
      en: '24% of 15 grams is roughly 3.6 grams (approx 1 teaspoon of sugar).',
      hi: '15 ग्राम का 24% लगभग 3.6 से 4 ग्राम (1 चम्मच) होता है।',
      mr: '१५ ग्रॅमचे २४% म्हणजे सुमारे ३.६ ते ४ ग्रॅम (१ चमचा) साखर होते.'
    }
  },
  {
    id: 'food_digestive_biscuit_reality',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'A packet of "Digestive Biscuits" claims to be healthy, but the nutrition label shows: In 100g, there is 21g of palm fat, 26g of sugar, and only 4g of fiber. Is this biscuit a healthy snack for weight loss or diabetes?',
      hi: '"डाइजेस्टिव बिस्किट" के पैकेट पर लेबल बताता है: 100 ग्राम में 21 ग्राम तेल, 26 ग्राम चीनी और केवल 4 ग्राम फाइबर। क्या यह वजन घटाने या डायबिटीज के लिए एक स्वस्थ स्नैक है?',
      mr: '"डायजेस्टिव्ह बिस्किट" च्या लेबलनुसार: १०० ग्रॅममध्ये २१ ग्रॅम तेल, २६ ग्रॅम साखर आणि केवळ ४ ग्रॅम फायबर आहे. हे बिस्किट वजन कमी करण्यासाठी किंवा मधुमेहासाठी योग्य आहे का?'
    },
    options: [
      { id: 'opt_1', text: { en: 'No, it is a bakery biscuit packed with palm oil and sugar; the word "Digestive" is just a marketing name, not a health medicine', hi: 'नहीं, यह पाम तेल और चीनी से भरा एक बेकरी बिस्किट है; "डाइजेस्टिव" शब्द केवल एक प्रचार का नाम है, कोई दवा नहीं', mr: 'नाही, हे तेल आणि साखरेने भरलेले बेकरी बिस्किट आहे; "डायजेस्टिव्ह" हे केवळ जाहिरातीचे नाव आहे' } },
      { id: 'opt_2', text: { en: 'Yes, because the word "Digestive" proves it cures all stomach problems', hi: 'हां, क्योंकि "डाइजेस्टिव" नाम पेट की बीमारी ठीक करता है', mr: 'होय, कारण "डायजेस्टिव्ह" शब्द पोटाचे आजार बरे करतो' } },
      { id: 'opt_3', text: { en: 'Yes, eating 20 biscuits daily burns body fat', hi: 'हां, रोज 20 बिस्किट खाने से चर्बी जलती है', mr: 'होय, रोज २० बिस्किटे खाल्ल्याने चरबी जळते' } },
      { id: 'opt_4', text: { en: 'Biscuits have zero calories and zero fat', hi: 'बिस्किट में शून्य कैलोरी होती है', mr: 'बिस्किटात शून्य कॅलरीज असतात' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'The word "Digestive" is a historical brand name, not a medical claim. In reality, these biscuits contain over 25% sugar and heavy palm oil. 4g of fiber does not make up for 26g of sugar and 21g of fat. Real fiber comes from fresh fruits, vegetables, and whole dal.',
      hi: '"डाइजेस्टिव" केवल एक पुराना नाम है। सच्चाई यह है कि इसमें 26% चीनी और 21% पाम ऑयल होता है। केवल 4 ग्राम फाइबर के लिए इतनी चीनी और तेल खाना सेहत बिगाड़ सकता है। असली फाइबर फल और हरी सब्जियों से मिलता है।',
      mr: '"डायजेस्टिव्ह" हे केवळ एक व्यापारी नाव आहे. यात २६% साखर आणि २१% पाम तेल असते. केवळ ४ ग्रॅम फायबरसाठी एवढी साखर खाणे मधुमेहासाठी हानीकारक आहे. खरा फायबर ताजी फळे आणि भाज्यांतून मिळतो.'
    },
    source: 'Advertising Standards Council of India & ICMR Dietary Guidance',
    hint: {
      en: 'Does having 26 grams of sugar and 21 grams of oil make a food healthy for weight loss?',
      hi: 'क्या 26 ग्राम चीनी और 21 ग्राम तेल से बना बिस्किट वजन कम करने में मदद कर सकता है?',
      mr: '२६ ग्रॅम साखर आणि २१ ग्रॅम तेल असलेला पदार्थ वजन कमी करण्यासाठी चांगला ठरेल का?'
    }
  },
  {
    id: 'food_energy_drink_caffeine_sugar',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'A 250 ml can of an energy drink contains 75 mg of caffeine and 32 grams of sugar (equal to 8 teaspoons of sugar!). What happens to your body after drinking it for quick energy?',
      hi: '250 मिली "एनर्जी ड्रिंक" के कैन में 75 मिलीग्राम कैफीन और 32 ग्राम चीनी (8 चम्मच चीनी!) है। तुरंत ताकत के लिए इसे पीने पर शरीर पर क्या असर होता है?',
      mr: '२५० मिली "एनर्जी ड्रिंक" च्या कॅनमध्ये ७५ मिग्रॅ कॅफिन आणि ३२ ग्रॅम साखर (८ चमचे साखर!) आहे. तातडीने ऊर्जा मिळवण्यासाठी हे पेय पिल्यावर शरीरावर काय परिणाम होतो?'
    },
    options: [
      { id: 'opt_1', text: { en: 'A rapid blood sugar rush followed by a sudden "sugar crash", fatigue, and dehydration', hi: 'ब्लड शुगर का तेजी से बढ़ना, जिसके तुरंत बाद भारी थकान ("शुगर क्रैश") और पानी की कमी होती है', mr: 'रक्तातील साखर वेगाने वाढते आणि त्यानंतर अचानक तीव्र थकवा ("शुगर क्रॅश") आणि पाण्याची कमतरता जाणवते' } },
      { id: 'opt_2', text: { en: 'Permanent hydration that lasts for 30 consecutive days', hi: '30 दिनों तक चलने वाला हाइड्रेशन', mr: '३० दिवस टिकणारे हायड्रेशन' } },
      { id: 'opt_3', text: { en: 'It permanently cures all heart conditions', hi: 'दिल की बीमारियों को हमेशा के लिए ठीक करता है', mr: 'हृदयाचे आजार कायमचे बरे होतात' } },
      { id: 'opt_4', text: { en: 'Builds 5 kilograms of muscle instantly', hi: 'तुरंत 5 किलो मांसपेशियां बनाता है', mr: 'लगेच ५ किलो स्नायू तयार होतात' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Gulping down 8 teaspoons of liquid sugar spikes your blood sugar quickly, causing your body to release a flood of insulin. Within an hour, your sugar crashes down below normal, leaving you more tired, hungry, and sluggish than before.',
      hi: 'एक साथ 8 चम्मच चीनी पीने से खून में शुगर अचानक बहुत बढ़ जाती है। शरीर का इंसुलिन इसे कम करने की कोशिश करता है, जिससे 1 घंटे के अंदर शुगर नीचे गिर जाती है और आपको पहले से ज्यादा थकान महसूस होने लगती है।',
      mr: '८ चमचे साखर प्यायल्याने रक्तातील साखर आधी वेगाने वाढते आणि नंतर इन्सुलिनमुळे अचानक खाली घसरते. त्यामुळे एका तासात तीव्र थकवा आणि अस्वस्थता जाणवू लागते.'
    },
    source: 'FSSAI Caffeinated Beverages Guidelines & Pediatrics Guidance',
    hint: {
      en: 'What happens when a sudden rush of 8 teaspoons of sugar is followed by a big release of insulin?',
      hi: 'अचानक 8 चम्मच चीनी पीने के बाद जब इंसुलिन बढ़ता है तो शुगर पर क्या असर होता है?',
      mr: '८ चमचे साखर प्यायल्यानंतर जेव्हा इन्सुलिन वाढते तेव्हा रक्तातील साखरेचे काय होते?'
    }
  },
  {
    id: 'food_juice_box_vs_whole_orange',
    mode: 'food_detective',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Why do doctors recommend eating a whole fresh orange rather than drinking a carton of packaged orange juice?',
      hi: 'डॉक्टर पैकेट वाले संतरे के जूस के बजाय साबुत ताजा संतरा खाने की सलाह क्यों देते हैं?',
      mr: 'डॉक्टर पॅकबंद ज्यूसऐवजी अख्खे ताजे संत्रे खाण्याचा सल्ला का देतात?'
    },
    options: [
      { id: 'opt_1', text: { en: 'The whole orange retains natural fiber that slows sugar absorption and keeps you full, while juice is mostly liquid sugar', hi: 'साबुत संतरे में मौजूद फाइबर चीनी को धीरे-धीरे सोखने देता है और पेट भरता है, जबकि जूस में केवल चीनी बचती है', mr: 'अख्ख्या फळातील फायबरमुळे साखर हळूहळू रक्तात मिसळते आणि पोट भरलेले राहते, तर ज्यूसमध्ये केवळ साखर असते' } },
      { id: 'opt_2', text: { en: 'Packaged juice is better because chewing fruit weakens teeth', hi: 'पैक्ड जूस बेहतर है क्योंकि फल चबाने से दांत कमजोर होते हैं', mr: 'पॅकबंद ज्यूस चांगला कारण फळ चावल्याने दात दुखतात' } },
      { id: 'opt_3', text: { en: 'Packaged juice contains zero calories', hi: 'पैक्ड जूस में शून्य कैलोरी होती है', mr: 'पॅकबंद ज्यूसमध्ये शून्य कॅलरीज असतात' } },
      { id: 'opt_4', text: { en: 'Both choices have the exact same effect on insulin and body fat', hi: 'दोनों का लिवर पर एक जैसा असर होता है', mr: 'दोघांचाही शरीरावर एकच परिणाम होतो' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'When fruit is processed into juice, all the beneficial pulp and fiber are stripped away, leaving pure liquid fruit sugar that enters your bloodstream rapidly. Eating the whole fruit provides fiber, keeps your blood sugar steady, and helps you feel full.',
      hi: 'जूस बनाते समय फल का सारा फाइबर निकल जाता है, जिससे केवल मीठा पानी बचता है जो तेजी से ब्लड शुगर बढ़ाता है। साबुत फल खाने से फाइबर मिलता है जो पाचन को धीमा रखता है और पेट को भरा रखता है।',
      mr: 'ज्यूस काढताना फळातील सर्व फायबर फेकून दिले जाते, ज्यामुळे उरलेली साखर वेगाने रक्तात मिसळते. अख्खे संत्रे खाल्ल्याने फायबरमुळे साखर संथ गतीने शोषली जाते आणि पोट भरलेले राहते.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, 2024 & WHO Sugar Guidance',
    hint: {
      en: 'What happens to the healthy fiber when an orange is squeezed and filtered into a carton?',
      hi: 'जब संतरे को निचोड़कर छाना जाता है तो उसके फाइबर का क्या होता है?',
      mr: 'संत्र्याचा रस गाळताना त्यातील चोथ्याचे (फायबरचे) काय होते याचा विचार करा.'
    }
  },
  {
    id: 'food_namkeen_bhujia_fats',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 35,
    question: {
      en: 'A 100g pouch of fried besan bhujia namkeen contains 42g of fat. Since health guidelines recommend only 20 to 25g of cooking oil for an entire day, how does this single snack compare?',
      hi: '100 ग्राम भुजिया नमकीन के पैकेट में 42 ग्राम तेल (फैट) है। पूरे दिन के लिए केवल 20-25 ग्राम तेल की सलाह दी जाती है। इस एक पैकेट में पूरे दिन की तुलना में कितना तेल है?',
      mr: '१०० ग्रॅम भुजिया फरसाणच्या पाकिटात ४२ ग्रॅम तेल आहे. दिवसासाठी केवळ २०-२५ ग्रॅम तेलाची मर्यादा असल्यास, या एकाच खाऊमध्ये किती तेल भरलेले आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'This single small snack contains nearly DOUBLE the entire daily fat limit recommended for a healthy adult (42g vs 20-25g limit)', hi: 'यह अकेला स्नैक पूरे दिन के तेल के कोटे से लगभग दोगुना तेल (42 ग्राम बनाम 20-25 ग्राम) देता है', mr: 'हा एकच खाऊ संपूर्ण दिवसाच्या तेलाच्या मर्यादेपेक्षा जवळपास दुप्पट तेल (४२ ग्रॅम विरूद्ध २०-२५ ग्रॅम) देतो' } },
      { id: 'opt_2', text: { en: 'It has zero fat because gram flour (besan) absorbs all oil away', hi: 'इसमें शून्य फैट है क्योंकि बेसन सारा तेल सोख लेता है', mr: 'यात शून्य फॅट आहे कारण बेसन सर्व तेल शोषून घेते' } },
      { id: 'opt_3', text: { en: 'It is a low-salt fitness diet food', hi: 'यह कम नमक वाला डाइट फूड है', mr: 'हे कमी मिठाचे डाएट फूड आहे' } },
      { id: 'opt_4', text: { en: 'Fried bhujia fat cleans heart arteries', hi: 'तली हुई भुजिया धमनियों को साफ करती है', mr: 'तळलेले फरसाण रक्तवाहिन्या स्वच्छ करते' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Health guidelines recommend only 20 to 25 grams of visible cooking oils (around 4 to 5 teaspoons) for an entire day. Munching a 100g packet of fried namkeen delivers 42 grams of oil (nearly 10 teaspoons of fat!), doubling your daily fat limit in minutes.',
      hi: 'दिशानिर्देशों के अनुसार पूरे दिन में केवल 20-25 ग्राम (लगभग 4-5 छोटे चम्मच) तेल खाना चाहिए। 100 ग्राम भुजिया में 42 ग्राम तेल (लगभग 10 चम्मच तेल!) होता है, जो पूरे दिन के कोटे से दोगुना है।',
      mr: 'संपूर्ण दिवसात २० ते २५ ग्रॅम (सुमारे ४ ते ५ चमचे) तेल खाणे पुरेसे असते. १०० ग्रॅम भुजिया फरसाणमध्ये तब्बल ४२ ग्रॅम तेल (१० चमचे तेल!) असते, जे दिवसभराच्या मर्यादेपेक्षा दुप्पट आहे.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, 2024 (Fats & Oils Chapter)',
    hint: {
      en: 'Compare 42 grams of fat in this packet with the 20-25g daily target.',
      hi: '42 ग्राम की तुलना पूरे दिन के 20-25 ग्राम के कोटे से करें।',
      mr: '४२ ग्रॅमची तुलना दिवसाच्या २०-२५ ग्रॅमच्या मर्यादेशी करा.'
    }
  },
  {
    id: 'food_claim_no_added_sugar',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'A packaged date-and-fig energy bar advertises "NO ADDED SUGAR" on the front. Does this mean it has zero sugar and someone with diabetes can eat as many as they want?',
      hi: 'खजूर और अंजीर की एक एनर्जी बार पर लिखा है "NO ADDED SUGAR" (कोई अतिरिक्त चीनी नहीं)। क्या इसका मतलब है कि इसमें बिल्कुल चीनी नहीं है और डायबिटीज के मरीज इसे जितना चाहें खा सकते हैं?',
      mr: 'खजूर आणि अंजिराच्या एका बारवर "NO ADDED SUGAR" (अतिरिक्त साखर नाही) असे लिहिले आहे. याचा अर्थ यात अजिबात साखर नाही आणि मधुमेहाचे रुग्ण ते हवे तितके खाऊ शकतात असा होतो का?'
    },
    options: [
      { id: 'opt_1', text: { en: 'No, "No Added Sugar" only means white cane sugar was not added; dried dates and figs are naturally packed with concentrated sugars that can still raise blood glucose', hi: 'नहीं, इसका मतलब केवल यह है कि ऊपर से सफेद चीनी नहीं डाली गई; खजूर और अंजीर में प्राकृतिक रूप से बहुत मीठापन होता है जो शुगर बढ़ा सकता है', mr: 'नाही, याचा अर्थ केवळ वरून पांढरी साखर घातलेली नाही इतकाच होतो; खजूर आणि अंजिरात नैसर्गिकरीत्या भरपूर साखर असते ज्यामुळे रक्तातील साखर वाढू शकते' } },
      { id: 'opt_2', text: { en: 'Yes, "No Added Sugar" foods have zero carbohydrates and lower blood sugar immediately', hi: 'हां, इसमें शून्य कार्ब्स होते हैं और यह शुगर घटाती है', mr: 'होय, यात शून्य साखर असते आणि ती साखर कमी करते' } },
      { id: 'opt_3', text: { en: 'Yes, diabetic patients can eat 20 bars safely at every meal', hi: 'हां, डायबिटीज के मरीज इसे जितना चाहें खा सकते हैं', mr: 'होय, मधुमेही रुग्ण हवे तितके खाऊ शकतात' } },
      { id: 'opt_4', text: { en: 'Dried dates have zero sugar of any kind', hi: 'खजूर में किसी प्रकार की चीनी नहीं होती', mr: 'खजुरामध्ये कोणत्याही प्रकारची साखर नसते' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: '"No Added Sugar" only means the manufacturer did not pour extra white table sugar into the product. Dried fruits like dates and figs naturally contain 60% to 70% natural fruit sugars, which can still raise blood sugar in people with diabetes.',
      hi: '"No Added Sugar" का अर्थ केवल यह है कि ऊपर से सफेद चीनी नहीं मिलाई गई। लेकिन खजूर और सूखे मेवों में स्वाभाविक रूप से बहुत ज्यादा मिठास होती है। डायबिटीज के मरीजों को हमेशा पैकेट के पीछे "कुल कार्बोहाइड्रेट" देखना चाहिए।',
      mr: '"No Added Sugar" चा अर्थ केवळ वरून पांढरी साखर घातलेली नाही इतकाच असतो. सुक्या खजुरामध्ये नैसर्गिकरीत्या ६०-७०% साखर असते. मधुमेहाच्या रुग्णांनी पाठीमागील "एकूण कार्बोहायड्रेट्स" तपासणे गरजेचे आहे.'
    },
    source: 'FSSAI Food Safety and Standards (Advertising and Claims) Regulations',
    hint: {
      en: 'Are dried dates naturally sweet? Does drying fruit concentrate its natural sugars?',
      hi: 'क्या सूखे खजूर में प्राकृतिक रूप से बहुत मीठापन होता है? फल को सुखाने पर उसकी मिठास बढ़ जाती है।',
      mr: 'सुक्या खजुरामध्ये नैसर्गिक गोडवा भरपूर असतो का याचा विचार करा.'
    }
  }
];
