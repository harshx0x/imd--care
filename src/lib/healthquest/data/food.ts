import { HealthQuestion } from '../types';

export const FOOD_QUESTIONS: HealthQuestion[] = [
  {
    id: 'food_makhana_vs_chips',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 35,
    question: {
      en: 'Inspect these two fictional snack labels. Compare Product A (Crispy Masala Potato Chips) vs Product B (Light Roasted Makhana / Fox Nuts). Which snack is significantly healthier for heart health and blood pressure, and why?',
      hi: 'इन दो काल्पनिक स्नैक्स लेबलों की तुलना करें: उत्पाद A (मसाला आलू चिप्स) बनाम उत्पाद B (रोस्टेड मखाना)। दिल की सेहत और ब्लड प्रेशर के लिए कौन सा स्नैक ज्यादा सुरक्षित और पौष्टिक है?',
      mr: 'या दोन अन्न लेबल्सची तुलना करा: उत्पादन A (मसाला बटाटा चिप्स) विरूद्ध उत्पादन B (भाजलेले मखाणे). हृदय आणि रक्तदाबासाठी कोणता खाऊ अधिक आरोग्यदायी आहे आणि का?'
    },
    foodComparison: {
      focusNutrient: {
        en: 'Saturated Fat & Sodium Content',
        hi: 'सैचुरेटेड फैट (हानिकारक वसा) और सोडियम (नमक) की मात्रा',
        mr: 'सॅच्युरेटेड फॅट आणि सोडियमचे प्रमाण'
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
          en: ['Potatoes', 'Refined Palmolein Oil', 'Iodized Salt', 'Spices & Condiments', 'Flavor Enhancers (INS 627, INS 631)'],
          hi: ['आलू', 'रिफाइंड पामोलिन तेल', 'नमक', 'मसाले', 'फ्लेवर एन्हांसर'],
          mr: ['बटाटे', 'पामोलिन तेल', 'मीठ', 'मसाले', 'फ्लेवर घटक']
        },
        warningFlag: {
          en: 'High in Saturated Fat & Excessive Sodium (>35% of daily sodium limit in one small snack)',
          hi: 'अत्यधिक सैचुरेटेड फैट और ज्यादा नमक (दैनिक सीमा का 35% से अधिक)',
          mr: 'अती सॅच्युरेटेड फॅट आणि जास्त सोडियम (दैनंदिन मर्यादेच्या ३५% पेक्षा जास्त)'
        }
      },
      productB: {
        productName: {
          en: 'Slow-Roasted Himalayan Salt Makhana',
          hi: 'स्लो-रोस्टेड हिमालयन सॉल्ट मखाना',
          mr: 'मंद भाजलेले मखाणे'
        },
        productSubtitle: {
          en: 'Puffed Water Lily Seeds with Cold-Pressed Olive/Mustard Mist (50g Pack)',
          hi: 'कमलगट्टे के बीज, जैतून/सरसों तेल की हल्की फुहार (50 ग्राम)',
          mr: 'मखाणे, थोडे ऑलिव्ह/मोहरी तेल (५० ग्रॅम)'
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
          en: ['Popped Gorgon Nut (Makhana)', 'Cold-Pressed Mustard Oil (2%)', 'Rock Salt (Sendha Namak)', 'Black Pepper'],
          hi: ['मखाना', 'कच्ची घानी सरसों का तेल (2%)', 'सेंधा नमक', 'काली मिर्च'],
          mr: ['मखाणे', 'मोहरीचे तेल (२%)', 'सेंधव मीठ', 'काळी मिरी']
        }
      }
    },
    options: [
      { id: 'opt_1', text: { en: 'Product A (Chips), because potatoes contain more potassium', hi: 'उत्पाद A (चिप्स), क्योंकि आलू में पोटेशियम अधिक होता है', mr: 'उत्पादन A (चिप्स), कारण बटाट्यामध्ये जास्त पोटॅशियम असते' } },
      { id: 'opt_2', text: { en: 'Product B (Makhana), because it has ~95% less saturated fat (0.6g vs 14.5g) and far lower sodium', hi: 'उत्पाद B (मखाना), क्योंकि इसमें 95% कम सैचुरेटेड फैट (0.6 ग्राम बनाम 14.5 ग्राम) और कम नमक है', mr: 'उत्पादन B (मखाणे), कारण त्यात ९५% कमी सॅच्युरेटेड फॅट (०.६ ग्रॅम विरूद्ध १४.५ ग्रॅम) आणि कमी मीठ आहे' } },
      { id: 'opt_3', text: { en: 'Both products are biologically identical because they have similar carbohydrate counts', hi: 'दोनों उत्पाद एक जैसे हैं क्योंकि दोनों में कार्बोहाइड्रेट हैं', mr: 'दोन्ही पदार्थ सारखेच आहेत कारण दोघांमध्ये कार्बोहायड्रेट्स आहेत' } },
      { id: 'opt_4', text: { en: 'Product A is healthier because INS flavor enhancers strengthen immunity', hi: 'उत्पाद A बेहतर है क्योंकि फ्लेवर एन्हांसर इम्युनिटी बढ़ाते हैं', mr: 'उत्पादन A चांगले आहे कारण फ्लेवर घटक प्रतिकारशक्ती वाढवतात' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: 'Product B (Roasted Makhana) contains only 0.6g of saturated fat compared to a staggering 14.5g in Product A (fried in cheap palmolein oil). Additionally, the chips pack 780mg of sodium (nearly 40% of the entire WHO daily limit of 2,000mg) in a single tiny 50g bag, directly spiking arterial blood pressure.',
      hi: 'उत्पाद B (रोस्टेड मखाना) में केवल 0.6 ग्राम सैचुरेटेड फैट (चिप्स में 14.5 ग्राम की तुलना में) और 210 मिलीग्राम सोडियम (चिप्स में 780 मिलीग्राम की तुलना में) है। लेबल पढ़ने से पता चलता है कि पामोलिन तेल में तलने से फैट और कैलोरी कितनी बढ़ जाती है।',
      mr: 'उत्पाद B (मखाना) मध्ये केवळ ०.६ ग्रॅम सॅच्युरेटेड फॅट (चिप्समधील १४.५ ग्रॅमच्या तुलनेत) आणि २१० मिग्रॅ सोडियम (चिप्समधील ७८० मिग्रॅच्या तुलनेत) आहे. पोषण लेबल तपासल्यास तळलेल्या पदार्थांमधील घातक स्निग्धता स्पष्ट होते.'
    },
    source: 'Food Safety and Standards Authority of India (FSSAI) Labelling and Display Regulations, 2020',
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
      en: 'A fictional "Royal Mango Fruit Drink" bottle (200 ml) displays "Added Sugars: 26g per serving". Given that 1 standard level teaspoon of white sugar weighs roughly 4 grams, how many teaspoons of added sugar are contained in this single small beverage?',
      hi: 'एक काल्पनिक "रॉयल मैंगो ड्रिंक" की 200 मिली बोतल पर "ऐडेड शुगर: 26 ग्राम" लिखा है। यदि सफेद चीनी का एक चम्मच लगभग 4 ग्राम का होता है, तो इस एक छोटी बोतल में कितने चम्मच अतिरिक्त चीनी मौजूद है?',
      mr: 'एका काल्पनिक "रॉयल मँगो फ्रूट ड्रिंक" च्या २०० मिली बाटलीवर "Added Sugars: 26g" नमूद आहे. साखरेचा एक सामान्य चमचा सुमारे ४ ग्रॅमचा असतो, तर या एका छोट्या बाटलीत किती चमचे साखर भरलेली आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'About 1.5 teaspoons', hi: 'लगभग 1.5 चम्मच', mr: 'सुमारे १.५ चमचे' } },
      { id: 'opt_2', text: { en: 'About 3 teaspoons', hi: 'लगभग 3 चम्मच', mr: 'सुमारे ३ चमचे' } },
      { id: 'opt_3', text: { en: '6.5 teaspoons (More than WHO recommended daily limit!)', hi: '6.5 चम्मच (विश्व स्वास्थ्य संगठन की दैनिक सीमा से अधिक!)', mr: '६.५ चमचे (WHO च्या दैनंदिन मर्यादेपेक्षा जास्त!)' } },
      { id: 'opt_4', text: { en: 'Zero teaspoons (fruit sugar does not count)', hi: 'शून्य चम्मच (फलों की चीनी की गिनती नहीं होती)', mr: 'शून्य चमचे (फळांमधील साखर मोजली जात नाही)' } }
    ],
    correctOptionId: 'opt_3',
    explanation: {
      en: '26 grams divided by 4 grams per teaspoon equals 6.5 teaspoons of added refined sugar in a single 200ml bottle! The WHO recommends limiting free/added sugars to less than 25 grams (about 6 teaspoons) per day for an entire adult diet. Liquid sugar spikes blood glucose rapidly.',
      hi: '26 ग्राम को 4 ग्राम प्रति चम्मच से भाग देने पर 6.5 चम्मच चीनी निकलती है! WHO एक वयस्क के लिए पूरे दिन में 25 ग्राम (लगभग 6 चम्मच) से कम अतिरिक्त चीनी की सलाह देता है। तरल चीनी पीने से ब्लड शुगर बहुत तेजी से बढ़ता है।',
      mr: '२६ ग्रॅम भागिले ४ ग्रॅम प्रति चमचा = एकाच बाटलीत ६.५ चमचे साखर! WHO नुसार प्रौढ व्यक्तीने संपूर्ण दिवसात २५ ग्रॅमपेक्षा (सुमारे ६ चमचे) कमी साखर खाल्ली पाहिजे. अशा पेयांमुळे रक्तातील साखर वेगाने वाढते.'
    },
    source: 'WHO Guideline: Sugars Intake for Adults and Children & FSSAI Guidelines',
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
      en: 'Under Indian food labelling regulations (FSSAI), what does the order of ingredients listed on the back of any packaged food package signify?',
      hi: 'भारतीय खाद्य सुरक्षा मानक (FSSAI) के अनुसार, किसी भी पैकेट के पीछे सामग्री (Ingredients) की सूची किस क्रम में लिखी जाती है?',
      mr: 'भारतीय अन्न सुरक्षा प्राधिकरणाच्या (FSSAI) नियमांनुसार, पॅकबंद अन्नावरील घटकांची (Ingredients) यादी कोणत्या क्रमाने लिहिलेली असते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Alphabetical order from A to Z', hi: 'वर्णमाला के अनुसार (A से Z तक)', mr: 'अकारविल्हेनुसार (A ते Z)' } },
      { id: 'opt_2', text: { en: 'Descending order by weight (the largest ingredient is listed first)', hi: 'वजन के घटते क्रम में (सबसे अधिक मात्रा वाली सामग्री सबसे पहले)', mr: 'वजनाच्या उतरत्या क्रमाने (सर्वात जास्त प्रमाणातील घटक सर्वात प्रथम)' } },
      { id: 'opt_3', text: { en: 'Random order chosen by the manufacturer', hi: 'निर्माता की मर्जी से किसी भी क्रम में', mr: 'कंपनीच्या मर्जीनुसार कोणत्याही क्रमाने' } },
      { id: 'opt_4', text: { en: 'In order of healthiness (healthiest ingredient first)', hi: 'स्वास्थ्य लाभ के आधार पर (सबसे पौष्टिक पहले)', mr: 'पौष्टिकतेनुसार (सर्वात आरोग्यदायी घटक प्रथम)' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: 'By legal mandate, ingredients must be listed in descending order of weight at the time of manufacture. Therefore, if "Sugar" or "Refined Wheat Flour (Maida)" is the first or second item on a "Health Biscuit" or "Oats Cookie", that ingredient forms the vast bulk of what you are eating.',
      hi: 'कानूनी रूप से, सामग्रियों को उनके वजन के घटते क्रम में सूचीबद्ध किया जाना अनिवार्य है। इसका मतलब है कि यदि किसी "हेल्थ बिस्किट" में पहला या दूसरा नाम "मैदा" या "चीनी" है, तो उस बिस्किट का मुख्य हिस्सा वही है।',
      mr: 'नियमांनुसार सर्व घटक त्यांच्या वजनाच्या उतरत्या क्रमाने लिहिणे बंधनकारक आहे. त्यामुळे एखाद्या "आरोग्यदायी बिस्किटावर" पहिले किंवा दुसरे नाव "मैदा" किंवा "साखर" असेल, तर त्या पदार्थात त्यांचाच सर्वाधिक भरणा असतो.'
    },
    source: 'FSSAI Food Safety and Standards (Labelling and Display) Regulations, Section 5(1)',
    hint: {
      en: 'If water is the very first ingredient in a fruit juice, does that mean there is more water than fruit pulp?',
      hi: 'यदि किसी जूस में पहली सामग्री "पानी" लिखी है, तो क्या इसका मतलब है कि उसमें फल से ज्यादा पानी है?',
      mr: 'ज्यूसच्या घटकांमध्ये पहिले नाव "पाणी" असेल, तर फळापेक्षा पाण्याचे प्रमाण जास्त असते का?'
    }
  },
  {
    id: 'food_atta_bread_vs_brown_bread',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 35,
    question: {
      en: 'Compare the ingredients of Brand A ("100% Whole Wheat Bread") and Brand B ("Premium Brown Bread"). Brand A lists: "Whole wheat flour (Atta) 88%, Yeast, Salt". Brand B lists: "Refined wheat flour (Maida) 72%, Whole wheat flour 12%, Caramel Colour (INS 150a), Sugar 6%". Which bread is genuinely high in complex fiber?',
      hi: 'ब्रांड A ("100% आटा ब्रेड") और ब्रांड B ("ब्राउन ब्रेड") की सामग्रियों की तुलना करें। ब्रांड B में 72% मैदा और भूरे रंग के लिए कारमेल कलर मिलाया गया है। कौन सी ब्रेड वास्तव में फाइबर से भरपूर और स्वस्थ है?',
      mr: 'ब्रँड A आणि ब्रँड B च्या घटकांची तुलना करा. ब्रँड B च्या घटकांमध्ये ७२% मैदा असून ब्राऊन रंगासाठी कृत्रिम रंग वापरला आहे. कोणती ब्रेड खऱ्या अर्थाने आरोग्यदायी आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Brand A, because 88% is whole wheat atta without artificial caramel coloring masquerading as health bread', hi: 'ब्रांड A, क्योंकि इसमें 88% साबुत आटा है और इसमें कोई कृत्रिम भूरा रंग नहीं मिलाया गया है', mr: 'ब्रँड A, कारण त्यात ८८% गव्हाचा कोंड्यासहित आटा असून कोणताही कृत्रिम रंग वापरलेला नाही' } },
      { id: 'opt_2', text: { en: 'Brand B, because caramel color makes bread digest faster', hi: 'ब्रांड B, क्योंकि कारमेल कलर ब्रेड को जल्दी पचाता है', mr: 'ब्रँड B, कारण कॅरॅमल रंग ब्रेड लवकर पचवतो' } },
      { id: 'opt_3', text: { en: 'Both breads are identical in nutritional value', hi: 'दोनों ब्रेड पोषण में बिल्कुल एक जैसी हैं', mr: 'दोन्ही ब्रेड्स पौष्टिकतेमध्ये एकसारख्याच आहेत' } },
      { id: 'opt_4', text: { en: 'Brand B is healthier because maida is gentler on intestines', hi: 'ब्रांड B बेहतर है क्योंकि मैदा आंतों के लिए हल्का होता है', mr: 'ब्रँड B उत्तम आहे कारण मैदा पोटासाठी चांगला असतो' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Many commercial "Brown Breads" in India are simply white maida bread dyed brown using Class IV Caramel color (INS 150) and sugar syrup. By checking the ingredient list, Brand A proves it is genuine whole wheat atta (88%), retaining the nutrient-dense germ and bran, whereas Brand B is 72% refined maida.',
      hi: 'बाजार में मिलने वाली कई "ब्राउन ब्रेड" वास्तव में मैदा ब्रेड ही होती हैं, जिन्हें कारमेल रंग से भूरा किया जाता है। ब्रांड A की सामग्री पढ़ने पर पता चलता है कि इसमें 88% साबुत आटा है, जबकि ब्रांड B में 72% मैदा है। हमेशा लेबल पर पहली सामग्री चेक करें।',
      mr: 'बाजारातील अनेक "ब्राऊन ब्रेड" या मैद्यामध्ये ब्राऊन रंग मिसळून तयार केलेल्या असतात. ब्रँड A च्या घटकांमध्ये ८८% संपूर्ण गव्हाचा आटा असल्याचे स्पष्ट दिसते, तर ब्रँड B मध्ये ७२% मैदा आहे. केवळ तपकिरी रंगावर विश्वास न ठेवता घटकांची यादी तपासणे गरजेचे आहे.'
    },
    source: 'FSSAI Guidance Note on Bread Standards & ICMR Dietary Fiber Guidance',
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
      en: 'A standard 70g packet of instant masala noodles shows "Sodium: 1,220 mg per pack" on its nutrition panel. Given that the WHO recommended safe daily limit of sodium is 2,000 mg for an adult, what proportion of your entire daily salt allowance is consumed in this single snack?',
      hi: '70 ग्राम के इंस्टेंट नूडल्स के पैकेट पर "सोडियम: 1,220 मिलीग्राम" लिखा है। यदि पूरे दिन की सुरक्षित सीमा 2,000 मिलीग्राम है, तो इस एक छोटे नाश्ते में आपके पूरे दिन के कोटे का कितना प्रतिशत नमक मौजूद है?',
      mr: '७० ग्रॅमच्या इन्स्टंट नूडल्सच्या पाकिटावर "सोडियम: १,२२० मिग्रॅ" नमूद आहे. WHO नुसार संपूर्ण दिवसाची सुरक्षित मर्यादा २,००० मिग्रॅ असल्यास, या एकाच खाऊमध्ये दिवसाच्या मर्यादेपैकी किती टक्के मीठ सामावलेले आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'About 10% (minimal salt)', hi: 'लगभग 10% (बहुत कम नमक)', mr: 'सुमारे १०% (अतिशय कमी मीठ)' } },
      { id: 'opt_2', text: { en: 'Over 60% of your total daily sodium limit (1,220 ÷ 2,000 = 61%)', hi: 'पूरे दिन की सीमा का 61% से अधिक (1,220 ÷ 2,000 = 61%)', mr: 'संपूर्ण दिवसाच्या मर्यादेच्या ६१% हून अधिक (१,२२० ÷ २,००० = ६१%)' } },
      { id: 'opt_3', text: { en: 'Exactly 2% of the daily allowance', hi: 'दैनिक कोटे का केवल 2%', mr: 'केवळ २%' } },
      { id: 'opt_4', text: { en: 'Sodium in noodles is completely harmless and does not count', hi: 'नूडल्स का सोडियम नुकसान नहीं करता', mr: 'नूडल्समधील सोडियम हानीकारक नसते' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: '1,220 mg sodium represents 61% of an adult\'s entire daily recommended ceiling (2,000 mg sodium ≈ 5g salt). Eating this single packet leaves almost no sodium budget for regular meals (dal, sabzi, roti), heavily overloading the kidneys and raising vascular blood pressure.',
      hi: '1,220 मिलीग्राम सोडियम पूरे दिन के नमक के कोटे का 61% हिस्सा अकेले पूरा कर देता है! इसके बाद दिनभर दाल, सब्जी और रोटी खाने से शरीर में नमक की मात्रा खतरनाक स्तर तक पहुंच जाती है, जिससे बीपी बढ़ता है।',
      mr: '१,२२० मिग्रॅ सोडियम म्हणजे दिवसभराच्या एकूण मर्यादेपैकी तब्बल ६१% मीठ या एकाच पाकिटात संपते! त्यानंतर इतर जेवणामुळे शरीरात मिठाचे प्रमाण सुरक्षित मर्यादेपेक्षा खूप जास्त वाढून रक्तदाब वाढतो.'
    },
    source: 'WHO Sodium Reduction Fact Sheet & ICMR-NIN Indian Dietary Guidelines 2024',
    hint: {
      en: 'Calculate: 1,220 divided by 2,000 = 0.61 (61%).',
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
      en: 'Comparing a 300 ml can of "Diet Zero-Sugar Cola" (0 kcal, contains Phosphoric Acid & Artificial Sweetener Sucralose) vs 300 ml of Fresh Tender Coconut Water (60 kcal, 650 mg Potassium, zero artificial chemicals). Which beverage provides real cellular hydration and cardiovascular benefits?',
      hi: '300 मिली "डाइट जीरो-शुगर कोला" (0 कैलोरी, फास्फोरिक एसिड और कृत्रिम मिठास) बनाम 300 मिली ताजा नारियल पानी (60 कैलोरी, 650 मिलीग्राम पोटेशियम)। कौन सा पेय शरीर को प्राकृतिक पोषण और इलेक्ट्रोलाइट्स देता है?',
      mr: '३०० मिली "डायट झिरो-शुगर कोला" विरूद्ध ३०० मिली ताजे शहाळ्याचे पाणी. कोणते पेय शरीराला खऱ्या अर्थाने हायड्रेशन आणि नैसर्गिक पोषण पुरवते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Fresh Coconut Water, because natural potassium and electrolytes support cellular hydration without synthetic acids that leach bone calcium', hi: 'ताजा नारियल पानी, क्योंकि प्राकृतिक पोटेशियम और इलेक्ट्रोलाइट्स बिना किसी रासायनिक एसिड के शरीर को स्वस्थ रखते हैं', mr: 'ताजे शहाळ्याचे पाणी, कारण नैसर्गिक पोटॅशियम आणि इलेक्ट्रोलाइट्स शरीराचे पोषण करतात आणि त्यात कोणतेही रसायने नसतात' } },
      { id: 'opt_2', text: { en: 'Diet Cola, because zero calories is always superior to all natural nutrients', hi: 'डाइट कोला, क्योंकि शून्य कैलोरी किसी भी फल से बेहतर है', mr: 'डायट कोला, कारण शून्य कॅलरी हे कोणत्याही फळापेक्षा श्रेष्ठ असते' } },
      { id: 'opt_3', text: { en: 'Both beverages are completely identical in biological hydration', hi: 'दोनों पेय शरीर के लिए बिल्कुल एक जैसे हैं', mr: 'दोन्ही पेये शरीरासाठी एकसारखीच आहेत' } },
      { id: 'opt_4', text: { en: 'Diet Cola strengthens teeth because phosphoric acid cleans enamel', hi: 'डाइट कोला दांतों को साफ करता है', mr: 'डायट कोला दात स्वच्छ करतो' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'While zero-sugar colas avoid sucrose, they contain phosphoric acid (which can weaken bone mineral density) and artificial intense sweeteners that disrupt gut microbiota and maintain sugar cravings. Fresh tender coconut water provides bioavailable potassium, magnesium, and natural electrolytes essential for cardiovascular balance.',
      hi: 'डाइट कोला में कैलोरी नहीं होती लेकिन इसमें मौजूद फास्फोरिक एसिड हड्डियों और दांतों के इनेमल को नुकसान पहुंचाता है। ताजा नारियल पानी प्राकृतिक पोटेशियम, मैग्नीशियम और इलेक्ट्रोलाइट्स से भरपूर होता है जो हृदय और कोशिकाओं को हाइड्रेट रखते हैं।',
      mr: 'डायट कोलामध्ये कॅलरीज नसल्या तरी त्यातील फॉस्फोरिक ॲसिड हाडांमधील कॅल्शियम कमी करू शकते आणि कृत्रिम साखरेमुळे पचनसंस्था बिघडू शकते. शहाळ्याचे पाणी नैसर्गिक पोटॅशियम आणि खनिजांनी समृद्ध असून आरोग्यासाठी सर्वोत्तम ठरते.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, Chapter on Beverages & WHO Guidance on Non-Sugar Sweeteners',
    hint: {
      en: 'Does 0 calories mean healthy? What does phosphoric acid do to tooth enamel and bone density over time?',
      hi: 'क्या शून्य कैलोरी का मतलब हमेशा स्वस्थ होता है? रासायनिक एसिड और प्राकृतिक पोटेशियम की तुलना करें।',
      mr: 'शून्य कॅलरी म्हणजे नेहमी आरोग्यदायी असते का? रासायनिक आम्ल आणि नैसर्गिक शहाळ्याच्या पाण्याची तुलना करा.'
    }
  },
  {
    id: 'food_instant_oatmeal_sugar',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 35,
    question: {
      en: 'A 40g sachet of "Instant Strawberry Oats" states: "Total Carbohydrates: 28g, of which Added Sugars: 14g". What percentage of this "healthy breakfast" sachet is pure added sugar by weight?',
      hi: '"इंस्टेंट स्ट्रॉबेरी ओट्स" के 40 ग्राम के पैकेट पर लिखा है: "कुल कार्बोहाइड्रेट: 28 ग्राम, जिसमें अतिरिक्त चीनी: 14 ग्राम"। इस पैकेट के कुल वजन का कितना प्रतिशत हिस्सा केवल चीनी है?',
      mr: '४० ग्रॅमच्या "इन्स्टंट स्ट्रॉबेरी ओट्स" च्या पाकिटावर "Added Sugars: 14g" असे नमूद आहे. या पाकिटाच्या एकूण वजनापैकी किती टक्के भाग केवळ साखरेने व्यापलेला आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: '35% of the entire packet is refined sugar (14g ÷ 40g = 35%)', hi: 'पूरे पैकेट का 35% हिस्सा केवल चीनी है (14g ÷ 40g = 35%)', mr: 'संपूर्ण पाकिटाच्या ३५% वजन केवळ साखरेचे आहे (१४ ग्रॅम ÷ ४० ग्रॅम = ३५%)' } },
      { id: 'opt_2', text: { en: 'Less than 1%', hi: '1% से कम', mr: '१% पेक्षा कमी' } },
      { id: 'opt_3', text: { en: '100% of the packet is oats', hi: 'पूरा 100% केवल जई (ओट्स) है', mr: '१००% केवळ ओट्स आहेत' } },
      { id: 'opt_4', text: { en: 'Sugar in oats does not cause blood sugar to rise', hi: 'ओट्स की चीनी ब्लड शुगर नहीं बढ़ाती', mr: 'ओट्समधील साखर रक्तातील साखर वाढवत नाही' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: '14 grams of sugar inside a 40-gram packet means 35% of what you are pouring into your bowl is refined table sugar (equal to 3.5 whole teaspoons of sugar!). Plain unflavored rolled oats with fresh sliced fruits have 0g added sugar and retain their low-glycemic, heart-healthy beta-glucan properties.',
      hi: '40 ग्राम के पैकेट में 14 ग्राम चीनी का मतलब है कि पैकेट का 35% हिस्सा (लगभग 3.5 चम्मच) सिर्फ चीनी है! सादे रोल्ड ओट्स में शून्य अतिरिक्त चीनी होती है। स्वाद वाले पैकेट स्वास्थ्यवर्धक होने का केवल भ्रम देते हैं।',
      mr: '४० ग्रॅमच्या पाकिटात १४ ग्रॅम साखर म्हणजे पाकिटातील ३५% भाग (साडेतीन चमचे) फक्त पांढरी साखर आहे! साध्या ओट्समध्ये स्वतःची फळे कापून खाणे हाच सर्वोत्तम पर्याय आहे.'
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
      en: 'A box of "Honey Almond Crunchy Flakes" claims "Only 6g of sugar per serving!". However, the fine print specifies serving size as "30 grams". If an adult fills a normal breakfast bowl containing 90 grams of cereal, how many grams of sugar are they actually eating?',
      hi: '"हनी बादाम फ्लेक्स" के डिब्बे पर लिखा है "प्रति सर्विंग केवल 6 ग्राम चीनी"। लेकिन बारीक अक्षरों में सर्विंग साइज केवल "30 ग्राम" लिखा है। यदि कोई व्यक्ति एक सामान्य कटोरी में 90 ग्राम फ्लेक्स खाता है, तो वह वास्तव में कितनी चीनी खा रहा है?',
      mr: 'एका तृणधान्य (Cereal) च्या खोक्यावर "प्रति सर्व्हिंग फक्त ६ ग्रॅम साखर" असा दावा आहे. मात्र बारीक अक्षरात १ सर्व्हिंग = ३० ग्रॅम लिहिले आहे. सामान्य वाटीत ९० ग्रॅम तृणधान्य खाल्ल्यास प्रत्यक्षात किती ग्रॅम साखर पोटात जाईल?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Still only 6 grams because serving claims never multiply', hi: 'अभी भी केवल 6 ग्राम', mr: 'अजूनही फक्त ६ ग्रॅम' } },
      { id: 'opt_2', text: { en: '18 grams of sugar (equal to 4.5 full teaspoons of refined sugar)', hi: '18 ग्राम चीनी (लगभग 4.5 चम्मच चीनी के बराबर)', mr: '१८ ग्रॅम साखर (साडेचार पूर्ण चमचे साखरेइतकी)' } },
      { id: 'opt_3', text: { en: 'Zero grams because milk dissolves the sugar away', hi: 'शून्य ग्राम क्योंकि दूध चीनी को खत्म कर देता है', mr: 'शून्य ग्रॅम कारण दूध साखरेला विरघळवते' } },
      { id: 'opt_4', text: { en: '60 grams of sugar', hi: '60 ग्राम चीनी', mr: '६० ग्रॅम साखर' } }
    ],
    correctOptionId: 'opt_2',
    explanation: {
      en: 'Manipulating serving sizes is a common marketing trick: companies define an unrealistically tiny serving (30g) to make sugar numbers look low. 90 grams is 3 servings (90 ÷ 30 = 3). Therefore, 6g × 3 = 18 grams of added sugar in a single morning breakfast bowl, consuming 72% of the daily recommended limit before leaving home!',
      hi: 'कंपनियां सर्विंग साइज को जानबूझकर बहुत छोटा (30 ग्राम) दिखाती हैं ताकि चीनी कम दिखे। 90 ग्राम खाने का मतलब है 3 गुना खाना (6 × 3 = 18 ग्राम चीनी)। यानी एक ही कटोरी में लगभग 4.5 चम्मच चीनी शरीर में चली जाती है।',
      mr: 'कंपन्या सर्व्हिंग साईझ मुद्दाम अगदी लहान (३० ग्रॅम) दाखवतात जेणेकरून साखरेचा आकडा कमी दिसावा. ९० ग्रॅम खाल्ल्यास ३ पट साखर (६ × ३ = १८ ग्रॅम) पोटात जाते, जी दिवसाच्या साखरेच्या सुरक्षित मर्यादेच्या ७२% आहे!'
    },
    source: 'FSSAI Food Safety and Standards (Advertising and Claims) Regulations & WHO Sugar Intake Guidelines',
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
      en: 'Compare 100g of Traditional Plain Set Curd (Dahi) vs 100g of Commercial "Real Mango Greek Yogurt". Dahi has 0g added sugar and live active cultures. The flavored yogurt lists "Added Sugars: 18g (4.5 tsp sugar per 100g cup)". Which food optimizes gut microbiome without causing insulin resistance?',
      hi: '100 ग्राम सादे घर के दही और 100 ग्राम बाजार के मैंगो योगर्ट की तुलना करें। दही में 0 ग्राम अतिरिक्त चीनी है। योगर्ट में 18 ग्राम (4.5 चम्मच) चीनी मिलाई गई है। कौन सा विकल्प आंतों के लिए सबसे अच्छा है?',
      mr: '१०० ग्रॅम साधे घरचे दही विरूद्ध १०० ग्रॅम बाजारातील फ्लेवर्ड मॅंगो योगर्ट. दह्यात ० ग्रॅम साखर आहे, तर योगर्टमध्ये १८ ग्रॅम (साडेचार चमचे) साखर आहे. पचनसंस्थेसाठी कोणता पर्याय सर्वात योग्य आहे?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Plain Curd (Dahi), because high sugar in flavored yogurt feeds harmful dysbiotic bacteria and negates probiotic health benefits', hi: 'सादा दही, क्योंकि योगर्ट की अत्यधिक चीनी आंतों के नुकसानदेह बैक्टीरिया को बढ़ाती है और प्रोबायोटिक्स के लाभ को खत्म करती है', mr: 'साधे घरचे दही, कारण योगर्टमधील अती साखर पोटातील चांगल्या जिवाणूंचे नुकसान करते आणि मधुमेहाचा धोका वाढवते' } },
      { id: 'opt_2', text: { en: 'Flavored Yogurt, because added sugar makes bacteria multiply faster', hi: 'फ्लेवर्ड योगर्ट, क्योंकि चीनी से बैक्टीरिया तेजी से बढ़ते हैं', mr: 'फ्लेवर्ड योगर्ट, कारण साखरेमुळे जीवाणू लवकर वाढतात' } },
      { id: 'opt_3', text: { en: 'Both are identical dairy products', hi: 'दोनों एक जैसे डेयरी उत्पाद हैं', mr: 'दोन्ही दुग्धजन्य पदार्थ एकसारखेच आहेत' } },
      { id: 'opt_4', text: { en: 'Neither curd nor yogurt should ever be consumed by humans', hi: 'दही कभी नहीं खाना चाहिए', mr: 'दही कधीही खाऊ नये' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Flavored commercial yogurts are often little more than desserts masquerading as health foods, packing 18-20g of added refined sugar per cup. High sugar intake alters the gut microbiome and spikes blood insulin. Traditional plain dahi provides natural probiotics (Lactobacillus) with zero added sugar.',
      hi: 'बाजार के फ्लेवर्ड योगर्ट अक्सर मिठाई जैसे होते हैं जिनमें 18-20 ग्राम चीनी होती है। यह आंतों के अच्छे बैक्टीरिया को नुकसान पहुंचाती है और मोटापा बढ़ाती है। घर का सादा दही बिना चीनी के सर्वोत्तम प्रोबायोटिक आहार है।',
      mr: 'बाजारातील फ्लेवर्ड योगर्टमध्ये साखरेचे प्रमाण प्रचंड (१८ ते २० ग्रॅम) असते, ज्यामुळे रक्तातील साखर वेगाने वाढते. याउलट घरचे ताजे दही कोणतेही रासायनिक घटक किंवा साखर नसलेले नैसर्गिक प्रोबायोटिक आहे.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, 2024 & Gut Microbiome Clinical Review',
    hint: {
      en: 'Does 4.5 teaspoons of white sugar in a small 100g cup sound like a health food or a dessert?',
      hi: '100 ग्राम की छोटी कटोरी में 4.5 चम्मच चीनी क्या स्वास्थ्यवर्धक हो सकती है?',
      mr: '१०० ग्रॅमच्या वाटीत साडेचार चमचे साखर असणे हे आरोग्यासाठी चांगले ठरेल का?'
    }
  },
  {
    id: 'food_tomato_ketchup_sugar',
    mode: 'food_detective',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'A popular brand of Tomato Ketchup lists its ingredients: "Water, Tomato Paste (26%), Sugar (24%), Salt, Acetic Acid". In a single standard tablespoon (15g), approximately how much pure sugar are you consuming with your snack?',
      hi: 'एक लोकप्रिय टोमैटो केचप की सामग्री में लिखा है: "टमाटर का पेस्ट (26%), चीनी (24%)"। इसके एक बड़े चम्मच (15 ग्राम) केचप में लगभग कितनी चीनी होती है?',
      mr: 'एका टोमॅटो केचपच्या बाटलीवरील घटकांची यादी: "टोमॅटो पेस्ट (२६%), साखर (२४%)". या केचपच्या केवळ एका चमच्यामध्ये (१५ ग्रॅम) साधारण किती साखर असते?'
    },
    options: [
      { id: 'opt_1', text: { en: 'Approximately 3.6 to 4 grams (nearly one full level teaspoon of sugar in every single tablespoon!)', hi: 'लगभग 4 ग्राम (प्रत्येक एक चम्मच केचप में लगभग एक पूरा चम्मच चीनी!)', mr: 'सुमारे ४ ग्रॅम (केचपच्या प्रत्येक एका चमच्यामागे जवळपास एक पूर्ण चमचा साखर!)' } },
      { id: 'opt_2', text: { en: 'Zero sugar because tomatoes are vegetables', hi: 'शून्य चीनी क्योंकि टमाटर एक सब्जी है', mr: 'शून्य साखर कारण टोमॅटो भाजी आहे' } },
      { id: 'opt_3', text: { en: '15 grams of pure calcium', hi: '15 ग्राम कैल्शियम', mr: '१५ ग्रॅम कॅल्शियम' } },
      { id: 'opt_4', text: { en: 'Sugar in ketchup does not digest in the body', hi: 'केचप की चीनी शरीर में नहीं पचती', mr: 'केचपमधील साखर पचत नाही' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'At 24% sugar content, a standard 15g tablespoon of commercial ketchup contains nearly 4 grams of refined sugar—equivalent to an entire level teaspoon of white sugar! Children and adults dipping samosas or sandwiches into multiple dollops easily consume 3 to 4 teaspoons of hidden sugar without realizing it.',
      hi: 'केचप में 24% तक चीनी होती है। इसका मतलब है कि केचप के हर एक चम्मच में लगभग एक पूरा चम्मच चीनी छिपी होती है। समोसे या पकोड़े के साथ 3-4 चम्मच केचप खाने से आप अनजाने में ही 4 चम्मच चीनी खा लेते हैं।',
      mr: 'केचपमध्ये तब्बल २४% साखर असते. म्हणजेच केचपचा एक चमचा खाताना आपण जवळपास एक पूर्ण चमचा पांढरी साखर खात असतो. समोसा किंवा सँडविचसोबत केचप खाताना नकळत प्रचंड साखर पोटात जाते.'
    },
    source: 'FSSAI Food Safety and Standards (Food Products Standards and Food Additives) Regulations',
    hint: {
      en: '24% of 15 grams is roughly 3.6 grams (approx 1 teaspoon).',
      hi: '15 ग्राम का 24% लगभग 3.6 से 4 ग्राम होता है।',
      mr: '१५ ग्रॅमचे २४% म्हणजे सुमारे ३.६ ते ४ ग्रॅम साखर होते.'
    }
  },
  {
    id: 'food_digestive_biscuit_reality',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'A packet of "Digestive High-Fiber Biscuits" claims "Good for digestion". The nutrition label reveals: Per 100g: Palmolein / Saturated Fat 21g, Refined Sugar 26g, Wheat Bran / Fiber only 4g. Is this biscuit a healthy snack for weight loss and diabetes management?',
      hi: '"डाइजेस्टिव हाई-फाइबर बिस्किट" के पैकेट पर लिखा है "पाचन के लिए उत्तम"। लेकिन लेबल बताता है: 100 ग्राम में 21 ग्राम सैचुरेटेड फैट, 26 ग्राम चीनी और केवल 4 ग्राम फाइबर। क्या यह वजन घटाने और डायबिटीज के लिए एक स्वस्थ स्नैक है?',
      mr: '"डायजेस्टिव्ह हाय-फायबर बिस्किट" च्या पाकिटावर "पचनासाठी उत्तम" असा दावा आहे. मात्र लेबलनुसार: १०० ग्रॅममध्ये २१ ग्रॅम फॅट, २६ ग्रॅम साखर आणि केवळ ४ ग्रॅम फायबर आहे. हे बिस्किट वजन कमी करण्यासाठी आणि मधुमेहासाठी योग्य आहे का?'
    },
    options: [
      { id: 'opt_1', text: { en: 'No, it is an ultra-processed confectionery loaded with palm oil and sugar; the word "Digestive" is a historical marketing moniker, not a clinical health remedy', hi: 'नहीं, यह पाम तेल और चीनी से भरा एक बेकरी उत्पाद है; "डाइजेस्टिव" शब्द केवल एक मार्केटिंग नाम है, कोई दवा नहीं', mr: 'नाही, हे पाम तेल आणि साखरेने भरलेले बेकरी उत्पादन आहे; "डायजेस्टिव्ह" हा केवळ जाहिरातीचा शब्द असून ते औषध नाही' } },
      { id: 'opt_2', text: { en: 'Yes, because the word "Digestive" guarantees it cures all stomach ailments', hi: 'हां, क्योंकि "डाइजेस्टिव" शब्द पेट की बीमारियों को ठीक करता है', mr: 'होय, कारण "डायजेस्टिव्ह" शब्द पोटाचे सर्व विकार बरे करतो' } },
      { id: 'opt_3', text: { en: 'Yes, eating 20 digestive biscuits daily burns body fat', hi: 'हां, रोजाना 20 बिस्किट खाने से चर्बी जलती है', mr: 'होय, रोज २० बिस्किटे खाल्ल्याने चरबी जळते' } },
      { id: 'opt_4', text: { en: 'Biscuits have zero calories and zero fat', hi: 'बिस्किट में शून्य कैलोरी होती है', mr: 'बिस्किटात शून्य कॅलरीज असतात' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: '"Digestive" biscuits were originally created in 19th-century Scotland under the mistaken belief that sodium bicarbonate aided digestion. Today, they are commercially baked biscuits with over 20-25% sugar and heavy saturated palm fats. 4g of fiber does not offset 26g of sugar and 21g of fat. True fiber comes from whole fruits, vegetables, and chana.',
      hi: '"डाइजेस्टिव" नाम केवल एक पुराना व्यापारिक नाम है। सच्चाई यह है कि इसमें 26% चीनी और 21% पाम ऑयल होता है। केवल 4 ग्राम फाइबर के लिए इतनी चीनी और तेल खाना सेहत के लिए हानिकारक है। असली फाइबर फल, हरी सब्जियों और अंकुरित दालों से मिलता है।',
      mr: '"डायजेस्टिव्ह" हे केवळ जुने व्यापारी नाव आहे. वस्तुस्थिती अशी आहे की यात २६% साखर आणि २१% पाम तेल असते. केवळ ४ ग्रॅम फायबरसाठी इतकी साखर आणि तेल खाणे मधुमेहासाठी अतिशय घातक आहे. खरा फायबर फळे आणि पालेभाज्यांतून मिळतो.'
    },
    source: 'Advertising Standards Council of India (ASCI) Guidelines on Food Advertising & ICMR Dietary Guidance',
    hint: {
      en: 'Does having 26 grams of refined sugar and 21 grams of saturated fat make a food healthy for weight loss?',
      hi: 'क्या 26 ग्राम चीनी और 21 ग्राम तेल से बना बिस्किट वजन कम करने में मदद कर सकता है?',
      mr: '२६ ग्रॅम साखर आणि २१ ग्रॅम तेल असलेला पदार्थ वजन कमी करण्यासाठी उपयुक्त ठरू शकेल का?'
    }
  },
  {
    id: 'food_energy_drink_caffeine_sugar',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'A 250 ml can of commercial "Turbo Energy Drink" contains 75 mg caffeine and 32 grams of added sugar (8 teaspoons of sugar). What is the physiological consequence of drinking this for quick energy?',
      hi: '250 मिली "टर्बो एनर्जी ड्रिंक" के कैन में 75 मिलीग्राम कैफीन और 32 ग्राम चीनी (8 चम्मच चीनी) है। तुरंत ऊर्जा पाने के लिए इसे पीने का शरीर पर क्या असर होता है?',
      mr: '२५० मिली "एनर्जी ड्रिंक" च्या कॅनमध्ये ७५ मिग्रॅ कॅफिन आणि ३२ ग्रॅम साखर (८ चमचे साखर) आहे. तातडीने ऊर्जा मिळवण्यासाठी हे पेय पिल्यावर शरीरावर काय परिणाम होतो?'
    },
    options: [
      { id: 'opt_1', text: { en: 'A rapid surge in blood glucose and heart rate followed by a severe reactive "sugar crash", fatigue, and dehydration', hi: 'ब्लड शुगर और दिल की धड़कन का तेजी से बढ़ना, जिसके तुरंत बाद भारी थकान ("शुगर क्रैश") और डिहाइड्रेशन होता है', mr: 'रक्तातील साखर आणि हृदयाचे ठोके वेगाने वाढतात, त्यानंतर तीव्र थकवा ("शुगर क्रॅश") आणि पाण्याची कमतरता जाणवते' } },
      { id: 'opt_2', text: { en: 'Permanent hydration that lasts for 30 consecutive days', hi: '30 दिनों तक चलने वाला स्थायी हाइड्रेशन', mr: '३० दिवस टिकणारे हायड्रेशन' } },
      { id: 'opt_3', text: { en: 'Cures all cardiac rhythm abnormalities', hi: 'दिल की बीमारियों को हमेशा के लिए ठीक करता है', mr: 'हृदयाचे सर्व आजार कायमचे बरे होतात' } },
      { id: 'opt_4', text: { en: 'Builds 5 kilograms of lean muscle instantly', hi: 'तुरंत 5 किलो मांसपेशियां बनाता है', mr: 'लगेच ५ किलो स्नायू तयार होतात' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Consuming 32 grams of liquid sugar triggers an intense spike in blood glucose, prompting a massive insulin surge. Within 60-90 minutes, blood sugar plunges below baseline ("reactive hypoglycemia" or sugar crash), leaving the person more tired and irritable than before. The caffeine and diuretic sugar load also exacerbate dehydration.',
      hi: '32 ग्राम तरल चीनी खून में अचानक शुगर बढ़ाती है, जिससे इंसुलिन बहुत तेजी से निकलता है। 1 घंटे के अंदर शुगर अचानक बहुत नीचे गिर जाती है जिससे व्यक्ति और ज्यादा थका हुआ और सुस्त महसूस करने लगता है। कैफीन से दिल की धड़कन भी तेज हो जाती है।',
      mr: '३२ ग्रॅम विरघळलेली साखर रक्तातील साखर वेगाने वाढवते, ज्यामुळे इन्सुलिनचे प्रमाण अचानक वाढते. एका तासात साखर अचानक खाली घसरल्याने ("शुगर क्रॅश") तीव्र थकवा आणि अस्वस्थता जाणवते. यामुळे शरीरातील पाणीही कमी होते.'
    },
    source: 'FSSAI Caffeinated Beverages Regulations & American Academy of Pediatrics Guidance',
    hint: {
      en: 'What happens when a sudden rush of 8 teaspoons of sugar is followed by a massive surge of insulin?',
      hi: 'अचानक 8 चम्मच चीनी पीने के बाद शरीर में क्या होता है जब इंसुलिन तेजी से बढ़ता है?',
      mr: '८ चमचे साखर प्यायल्यानंतर जेव्हा इन्सुलिन वेगाने वाढते तेव्हा रक्तातील साखरेचे काय होते?'
    }
  },
  {
    id: 'food_juice_box_vs_whole_orange',
    mode: 'food_detective',
    difficulty: 'easy',
    points: 25,
    question: {
      en: 'Compare a 200 ml carton of "100% Real Orange Juice" (0.2g fiber, 22g free sugars) vs One Whole Fresh Orange (3.2g fiber, 12g intrinsic sugars). Why does endocrinology recommend the whole fruit over the packaged juice?',
      hi: '200 मिली पैक्ड संतरे के जूस (0.2 ग्राम फाइबर, 22 ग्राम चीनी) बनाम एक साबुत ताजे संतरे (3.2 ग्राम फाइबर) की तुलना करें। डॉक्टर पैक्ड जूस की जगह साबुत फल खाने की सलाह क्यों देते हैं?',
      mr: '२०० मिली पॅकबंद संत्र्याचा ज्यूस (०.२ ग्रॅम फायबर, २२ ग्रॅम साखर) विरूद्ध एक अख्खे ताजे संत्रे (३.२ ग्रॅम फायबर). डॉक्टर ज्यूसऐवजी अख्खे फळ खाण्याचा सल्ला का देतात?'
    },
    options: [
      { id: 'opt_1', text: { en: 'The whole orange retains intact cellular fiber that slows sugar absorption, promotes satiety, and provides bioflavonoids without spiking blood glucose', hi: 'साबुत संतरे में मौजूद फाइबर चीनी को धीरे-धीरे सोखने देता है, पेट भरता है और ब्लड शुगर को अचानक नहीं बढ़ने देता', mr: 'अख्ख्या फळातील फायबरमुळे साखर हळूहळू रक्तात मिसळते, पोट भरलेले राहते आणि रक्तातील साखर वेगाने वाढत नाही' } },
      { id: 'opt_2', text: { en: 'Packaged juice is better because chewing fruit damages the jaw', hi: 'पैक्ड जूस बेहतर है क्योंकि फल चबाने से जबड़ा कमजोर होता है', mr: 'पॅकबंद ज्यूस चांगला कारण फळ चावल्याने जबडा दुखतो' } },
      { id: 'opt_3', text: { en: 'Packaged juice contains zero calories', hi: 'पैक्ड जूस में शून्य कैलोरी होती है', mr: 'पॅकबंद ज्यूसमध्ये शून्य कॅलरीज असतात' } },
      { id: 'opt_4', text: { en: 'Both choices have the exact same effect on insulin and liver fat', hi: 'दोनों का लिवर और इंसुलिन पर एक जैसा असर होता है', mr: 'दोघांचाही इन्सुलिनवर एकच परिणाम होतो' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'Juicing strips away the plant cell wall fiber (cellulose and pectin), leaving liquid free fructose that passes directly to the liver, driving de novo lipogenesis (fatty liver) and insulin spikes. Eating the whole orange requires mastication, stimulates digestive satiety hormones (GLP-1), and releases natural sugars gradually.',
      hi: 'जूस बनाते समय फल का सारा फाइबर निकल जाता है, जिससे केवल तरल फ्रुक्टोज बचता है जो सीधे लिवर में जाकर फैट जमा करता है। साबुत संतरा खाने से फाइबर मिलता है जो पाचन को धीमा रखता है और फैटी लिवर के खतरे से बचाता है।',
      mr: 'ज्यूस काढताना फळातील सर्व चोथा (फायबर) फेकून दिला जातो, ज्यामुळे उरलेली साखर वेगाने रक्तात आणि यकृतात जाते, ज्यामुळे फॅटी लिव्हरचा धोका वाढतो. अख्खे संत्रे खाल्ल्याने फायबरमुळे साखर संथ गतीने शोषली जाते.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, 2024 & WHO Sugar Guidelines',
    hint: {
      en: 'What happens to the cellular fiber when an orange is mechanically squeezed and filtered into a factory carton?',
      hi: 'जब संतरे को निचोड़कर छाना जाता है तो उसके रेशों (फाइबर) का क्या होता है?',
      mr: 'संत्र्याचा रस गाळताना त्यातील चोथ्याचे (फायबरचे) काय होते याचा विचार करा.'
    }
  },
  {
    id: 'food_namkeen_bhujia_fats',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 35,
    question: {
      en: 'A 100g pouch of crispy Besan Bhujia Namkeen states: "Total Fat: 42g, Saturated Fat: 19g (Palmolein Oil), Sodium: 890 mg". If an adult eats this while watching TV, how does this single packet compare to the ICMR recommended daily visible fat limit (20-25g)?',
      hi: '100 ग्राम भुजिया नमकीन के पैकेट पर लिखा है: "कुल फैट: 42 ग्राम, सैचुरेटेड फैट: 19 ग्राम, सोडियम: 890 मिलीग्राम"। यदि कोई व्यक्ति टीवी देखते हुए यह पूरा पैकेट खा लेता है, तो ICMR की पूरे दिन की वसा सीमा (20-25 ग्राम) से इसकी तुलना कैसे होगी?',
      mr: '१०० ग्रॅम बेसन भुजिया फरसाणच्या पाकिटावर: "एकूण फॅट: ४२ ग्रॅम, सॅच्युरेटेड फॅट: १९ ग्रॅम, सोडियम: ८९० मिग्रॅ" असे नमूद आहे. टीव्ही पाहताना हे संपूर्ण पाकीट खाल्ल्यास, ICMR च्या दिवसाच्या एकूण तेलाच्या मर्यादेशी (२०-२५ ग्रॅम) याची कशी तुलना होईल?'
    },
    options: [
      { id: 'opt_1', text: { en: 'This single small snack contains nearly DOUBLE the entire daily fat limit recommended for a healthy adult (42g vs 20-25g limit)', hi: 'यह अकेला स्नैक एक वयस्क के पूरे दिन के तेल के कोटे से लगभग दोगुना फैट (42 ग्राम बनाम 20-25 ग्राम) प्रदान करता है', mr: 'हा एकच खाऊ प्रौढ व्यक्तीच्या संपूर्ण दिवसाच्या तेलाच्या मर्यादेपेक्षा जवळपास दुप्पट स्निग्धता (४२ ग्रॅम विरूद्ध २०-२५ ग्रॅम) पुरवतो' } },
      { id: 'opt_2', text: { en: 'It has zero fat because gram flour (besan) absorbs all oil', hi: 'इसमें शून्य फैट है क्योंकि बेसन सारा तेल सोख लेता है', mr: 'यात शून्य फॅट आहे कारण बेसन सर्व तेल शोषून घेते' } },
      { id: 'opt_3', text: { en: 'It is a low-sodium fitness diet food', hi: 'यह कम नमक वाला फिटनेस फूड है', mr: 'हे कमी मिठाचे डाएट फूड आहे' } },
      { id: 'opt_4', text: { en: 'Fried bhujia fat dissolves arterial plaque', hi: 'तली हुई भुजिया धमनियों को साफ करती है', mr: 'तळलेले फरसाण रक्तवाहिन्या स्वच्छ करते' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'ICMR recommends 20 to 25 grams of total visible cooking oils/fats for an entire adult day. Munching a single 100g pack of deep-fried bhujia delivers 42 grams of oil (almost 10 teaspoons of fat!) and nearly 1 gram of sodium. Deep-frying in commercial palmolein oil dramatically escalates cardiovascular risk.',
      hi: 'ICMR के अनुसार पूरे दिन में केवल 20-25 ग्राम (लगभग 4-5 छोटे चम्मच) तेल का सेवन होना चाहिए। 100 ग्राम भुजिया में 42 ग्राम तेल (लगभग 10 चम्मच तेल!) होता है, जो पूरे दिन के कोटे से दोगुना है। इसके अलावा इसमें बहुत ज्यादा नमक भी होता है।',
      mr: 'ICMR नुसार संपूर्ण दिवसात २० ते २५ ग्रॅम (सुमारे ४ ते ५ चमचे) तेल खाणे पुरेसे असते. १०० ग्रॅम भुजिया फरसाणमध्ये तब्बल ४२ ग्रॅम तेल (१० चमचे तेल!) असते, जे दिवसभराच्या मर्यादेपेक्षा दुप्पट आहे. यामुळे कोलेस्ट्रॉल आणि वजन वेगाने वाढते.'
    },
    source: 'ICMR-NIN Dietary Guidelines for Indians, 2024 (Fats & Oils) & FSSAI',
    hint: {
      en: 'Compare 42 grams in this 100g bag with the ICMR 20-25g daily target.',
      hi: '42 ग्राम की तुलना पूरे दिन के 20-25 ग्राम के लक्ष्य से करें।',
      mr: '४२ ग्रॅमची तुलना दिवसाच्या २०-२५ ग्रॅमच्या उद्दिष्टाशी करा.'
    }
  },
  {
    id: 'food_claim_no_added_sugar',
    mode: 'food_detective',
    difficulty: 'medium',
    points: 30,
    question: {
      en: 'A packaged date-and-fig fruit energy bar prominently advertises "NO ADDED SUGAR" on its front wrapper. Does this regulatory claim mean the food is low in carbohydrates and safe for diabetic patients to consume in unlimited quantities?',
      hi: 'खजूर और अंजीर से बनी एक एनर्जी बार पर सामने बड़े अक्षरों में लिखा है "NO ADDED SUGAR" (कोई अतिरिक्त चीनी नहीं)। क्या इसका मतलब है कि इसमें कार्बोहाइड्रेट बहुत कम हैं और डायबिटीज के मरीज इसे जितनी चाहें उतनी खा सकते हैं?',
      mr: 'खजूर आणि अंजिराच्या एका बारवर "NO ADDED SUGAR" (अतिरिक्त साखर नाही) अशी मोठी जाहिरात आहे. याचा अर्थ यात साखर किंवा कार्बोहायड्रेट्स अगदी नगण्य आहेत आणि मधुमेही रुग्ण ते अमर्याद खाऊ शकतात असा होतो का?'
    },
    options: [
      { id: 'opt_1', text: { en: 'No, "No Added Sugar" only means refined cane sugar was not added; dates and figs are naturally packed with concentrated intrinsic sugars (fructose/glucose) that can still elevate blood glucose', hi: 'नहीं, इसका मतलब केवल यह है कि ऊपर से सफेद चीनी नहीं डाली गई; खजूर और अंजीर में स्वाभाविक रूप से बहुत अधिक प्राकृतिक शर्करा होती है जो ब्लड शुगर बढ़ा सकती है', mr: 'नाही, याचा अर्थ केवळ वरून पांढरी साखर घातलेली नाही एवढाच होतो; खजूर आणि अंजिरामध्ये नैसर्गिकरीत्या भरपूर साखर असते, ज्यामुळे रक्तातील साखर वेगाने वाढू शकते' } },
      { id: 'opt_2', text: { en: 'Yes, "No Added Sugar" foods have zero carbohydrates and lower blood sugar immediately', hi: 'हां, इसमें शून्य कार्बोहाइड्रेट होते हैं और यह शुगर घटाती है', mr: 'होय, यात शून्य कार्बोहायड्रेट्स असतात आणि ती साखर कमी करते' } },
      { id: 'opt_3', text: { en: 'Yes, diabetic patients can eat 20 bars at every meal', hi: 'हां, डायबिटीज के मरीज हर भोजन में 20 बार खा सकते हैं', mr: 'होय, मधुमेही रुग्ण प्रत्येक जेवणात २० बार खाऊ शकतात' } },
      { id: 'opt_4', text: { en: 'Dried dates do not contain any sugars of any type', hi: 'खजूर में किसी प्रकार की चीनी नहीं होती', mr: 'खजुरामध्ये कोणत्याही प्रकारची साखर नसते' } }
    ],
    correctOptionId: 'opt_1',
    explanation: {
      en: 'FSSAI allows "No Added Sugar" claims if no sucrose, jaggery, or honey was added during processing. However, dried fruits (dates, raisins, figs) have intrinsic sugars concentrated by dehydration (often 60-70% total sugar by weight). Diabetic individuals must check the "Total Carbohydrates" and "Total Sugars" row on the back panel.',
      hi: 'FSSAI के नियमानुसार "No Added Sugar" का अर्थ केवल यह है कि निर्माण के दौरान ऊपर से चीनी नहीं मिलाई गई। लेकिन खजूर और सूखे मेवों में 60-70% तक प्राकृतिक शुगर होती है। डायबिटीज के मरीजों को हमेशा पीछे लिखे "कुल कार्बोहाइड्रेट" को देखना चाहिए।',
      mr: 'FSSAI नुसार "No Added Sugar" चा अर्थ केवळ वरून पांढरी साखर घातलेली नाही इतकाच असतो. परंतु सुक्या खजुरामध्ये नैसर्गिकरीत्या ६०-७०% साखर असते. मधुमेहाच्या रुग्णांनी केवळ दर्शनी जाहिरातीवर विश्वास न ठेवता पाठीमागील "एकूण कार्बोहायड्रेट्स" तपासणे गरजेचे आहे.'
    },
    source: 'FSSAI Food Safety and Standards (Advertising and Claims) Regulations, 2018',
    hint: {
      en: 'Are dried dates sweet on their own? What happens when water is dried out of a sweet fruit?',
      hi: 'क्या सूखे खजूर में प्राकृतिक रूप से बहुत मीठापन होता है? सुखाने पर फल की मिठास और गाढ़ी हो जाती है।',
      mr: 'सुक्या खजुरामध्ये नैसर्गिक गोडवा असतो का? फळातील पाणी सुकल्यावर त्यातील साखरेचे प्रमाण अधिक दाट होते.'
    }
  }
];
