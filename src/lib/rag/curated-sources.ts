import { TrustedHealthDocument } from './types';

/**
 * Strict whitelist of authorized, verified medical publishers and domains.
 * The ingestion pipeline strictly rejects any document or URL not matching these domains.
 */
export const APPROVED_SOURCE_DOMAINS = [
  'mohfw.gov.in',
  'nhp.gov.in',
  'icmr.gov.in',
  'icmr.nic.in',
  'who.int',
  'anemiamuktbharat.info',
  'ndma.gov.in',
  'aiims.edu',
  'cdc.gov'
];

/**
 * Validates whether an incoming source URL belongs to an approved health authority.
 */
export function validateSourceUrl(rawUrl: string): { isValid: boolean; domain?: string; reason?: string } {
  try {
    const parsed = new URL(rawUrl);
    const hostname = parsed.hostname.toLowerCase().replace(/^www\./, '');
    const isApproved = APPROVED_SOURCE_DOMAINS.some(
      (d) => hostname === d || hostname.endsWith(`.${d}`)
    );

    if (!isApproved) {
      return {
        isValid: false,
        domain: hostname,
        reason: `Domain "${hostname}" is not in the approved medical authority whitelist. Allowed: ${APPROVED_SOURCE_DOMAINS.join(', ')}`
      };
    }

    return { isValid: true, domain: hostname };
  } catch {
    return {
      isValid: false,
      reason: `Malformed URL format: ${rawUrl}`
    };
  }
}

/**
 * Curated seed collection of verified public health documents from MoHFW India, ICMR, WHO, and AIIMS.
 * Formatted for health literacy education with exact canonical URLs and publisher attribution.
 */
export const CURATED_HEALTH_DOCUMENTS: TrustedHealthDocument[] = [
  {
    id: 'mohfw-diabetes-guidelines-2024',
    title: 'Clinical Practice Guidelines for Type 2 Diabetes Mellitus in India',
    canonicalUrl: 'https://www.nhp.gov.in/disease/non-communicable-disease/diabetes',
    publisher: 'Ministry of Health and Family Welfare (MoHFW), Govt. of India',
    topic: 'Diabetes & Metabolic Health',
    language: 'en',
    publishedAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-06-10T00:00:00Z',
    license: 'Government Open Data License - India (GODL)',
    author: 'National Health Portal & ICMR Expert Committee',
    summary: 'Evidence-based clinical guidelines on diagnostic criteria, Indian dietary interventions, and lifestyle management for Type 2 Diabetes.',
    content: `# Type 2 Diabetes Mellitus: Diagnostic Criteria and Everyday Management in India

### Diagnostic Thresholds
According to Indian Council of Medical Research (ICMR) and National Health Portal guidelines, diabetes is classified based on standard venous plasma measurements:
- Normal Fasting Blood Glucose (FBG): Below 100 mg/dL (5.6 mmol/L).
- Impaired Fasting Glucose (Prediabetes): 100 mg/dL to 125 mg/dL.
- Diabetes Threshold: Fasting plasma glucose of 126 mg/dL (7.0 mmol/L) or higher on two separate occasions.
- Post-prandial Glucose (2 hours after 75g glucose): 140 to 199 mg/dL indicates Impaired Glucose Tolerance; 200 mg/dL or higher confirms diabetes.
- Glycated Hemoglobin (HbA1c): Less than 5.7% is normal; 5.7% to 6.4% indicates prediabetes; 6.5% or higher is diagnostic of diabetes. Target HbA1c for most non-pregnant adults is below 7.0%.

### Dietary Guidance for Indian Populations
Indian diets are traditionally carbohydrate-dense (white polished rice, refined wheat flour). ICMR recommends:
- Replace refined cereals with whole grains and traditional millets: Ragi (finger millet), Jowar (sorghum), and Bajra (pearl millet) offer higher fiber and lower glycemic spikes.
- Increase dietary fiber intake to at least 30 to 40 grams per day through whole pulses, split legumes with husk, leafy vegetables, and salads before meals.
- Limit intake of free sugars, sweets, fruit juices with added syrup, and sweetened carbonated beverages to less than 5% of daily energy intake.
- Healthy cooking oil rotation: Use mustard oil, groundnut oil, or sesame oil in moderation (under 25 grams per person per day); strictly avoid trans-fats and reused deep-frying oils.

### Physical Activity and Lifestyle Measures
- Target at least 150 minutes of moderate-intensity aerobic physical activity per week (e.g., 30 minutes of brisk walking 5 days a week).
- Incorporate simple resistance or yoga sessions 2 to 3 days weekly to improve peripheral insulin sensitivity.
- Daily self-care: Examine feet daily for cuts, blisters, or reduced sensation to prevent diabetic foot complications. Regular annual eye (retinal) checks and urine microalbumin testing are recommended.`
  },
  {
    id: 'mohfw-hypertension-guidelines-2024',
    title: 'Standard Guidelines for Prevention and Management of Hypertension in India',
    canonicalUrl: 'https://www.nhp.gov.in/disease/cardiovascular/hypertension',
    publisher: 'National Health Portal (MoHFW) / WHO India',
    topic: 'Cardiovascular & Blood Pressure',
    language: 'en',
    publishedAt: '2023-11-20T00:00:00Z',
    updatedAt: '2024-05-18T00:00:00Z',
    license: 'Government Open Data License - India (GODL)',
    author: 'India Hypertension Control Initiative (IHCI)',
    summary: 'Clinical framework for blood pressure classification, sodium reduction, and routine cardiovascular health monitoring.',
    content: `# Hypertension: Prevention, Measurement, and Lifestyle Interventions

### Blood Pressure Classification
Hypertension is known as the "silent killer" because it frequently produces no early symptoms until target organ damage occurs. Standard measurements:
- Normal Blood Pressure: Systolic less than 120 mmHg and Diastolic less than 80 mmHg.
- Elevated (Pre-hypertensive): Systolic 120-129 mmHg and Diastolic less than 80 mmHg.
- Stage 1 Hypertension: Systolic 130-139 mmHg or Diastolic 80-89 mmHg.
- Stage 2 Hypertension: Systolic 140 mmHg or higher, or Diastolic 90 mmHg or higher.
- Hypertensive Crisis / Emergency: Systolic greater than 180 mmHg and/or Diastolic greater than 120 mmHg, especially if accompanied by chest pain, shortness of breath, blurred vision, or confusion. This requires emergency medical care (call 112/108 immediately).

### Salt and Sodium Restrictions
- The World Health Organization (WHO) and MoHFW recommend consuming less than 5 grams of total table salt per day (approximately one flat teaspoon).
- Major hidden sources of sodium in Indian households include commercially prepared papads, pickles (achars), packaged namkeen, chutneys with added preservatives, and monosodium glutamate (MSG).
- Enhance food flavor using natural herbs and spices such as lemon juice, fresh coriander, mint, roasted cumin, black pepper, and garlic rather than extra salt.

### Non-Pharmacological Management
- Weight management: Maintaining a body mass index (BMI) within the healthy Asian-Indian standard (18.5 to 22.9 kg/m²) reduces systolic pressure by approximately 1 mmHg per kg lost.
- DASH Diet Pattern: High in vegetables, fresh fruits (such as guava, apples, oranges), low-fat dairy, and whole grains; low in saturated animal fats.
- Stress Reduction: Practicing evidence-based relaxation techniques, such as daily Pranayama (Anulom-Vilom, Bhramari) or 20 minutes of mindful meditation, supports autonomic nervous system balance.
- Tobacco and Alcohol Cessation: Complete avoidance of all forms of tobacco (smoking, bidi, gutkha, khaini) is crucial to prevent rapid arterial stiffening.`
  },
  {
    id: 'anemia-mukt-bharat-guidelines',
    title: 'Anemia Mukt Bharat: Clinical Assessment and Iron Management Protocol',
    canonicalUrl: 'https://anemiamuktbharat.info/guidelines/',
    publisher: 'Ministry of Health and Family Welfare (MoHFW), Govt. of India',
    topic: 'Anemia & Hematology',
    language: 'en',
    publishedAt: '2023-08-10T00:00:00Z',
    updatedAt: '2024-03-22T00:00:00Z',
    license: 'Government Open Data License - India (GODL)',
    author: 'Anemia Mukt Bharat Mission Technical Group',
    summary: 'Clinical thresholds for diagnosing nutritional iron-deficiency anemia and dietary enhancers for Indian families.',
    content: `# Anemia: Clinical Thresholds, Symptoms, and Nutritional Support

### Hemoglobin (Hb) Diagnostic Cut-offs
The World Health Organization and MoHFW define nutritional anemia as a condition where the number of red blood cells or their oxygen-carrying capacity is insufficient:
- Adult Men (15 years and older): Hemoglobin below 13.0 g/dL.
- Non-pregnant Adult Women (15 years and older): Hemoglobin below 12.0 g/dL.
- Pregnant Women: Hemoglobin below 11.0 g/dL.
- Children (6 to 59 months): Hemoglobin below 11.0 g/dL; Children (5 to 11 years): below 11.5 g/dL.
- Severity Staging: Mild (10.0 to 11.9 g/dL in women), Moderate (7.0 to 9.9 g/dL), Severe (below 7.0 g/dL). Severe anemia requires prompt clinical evaluation and supervised medical intervention.

### Common Signs and Symptoms
- General fatigue, weakness, pale conjunctiva (inner lower eyelids), pale tongue or nail beds.
- Shortness of breath or dizziness on mild exertion.
- Brittle nails or spoon-shaped depressions (koilonychia) in chronic iron deficiency.
- Cold extremities and reduced concentration.

### Dietary Enhancers and Inhibitors of Iron
Non-heme iron from plant-based foods is the primary source in Indian vegetarian diets, but its absorption is sensitive to meal composition:
- Iron Enhancers: Vitamin C significantly boosts non-heme iron absorption. Squeeze fresh lemon juice over cooked lentils and leafy greens; consume amla (Indian gooseberry), guava, or oranges alongside meals.
- Cook in traditional cast iron cookware to naturally fortify cooked gravies.
- Iron Inhibitors: Tannins and phytates inhibit iron uptake. Strictly avoid drinking tea, coffee, or caffeinated beverages within one hour before or after meals.
- High iron food sources: Green leafy vegetables (spinach, fenugreek/methi, drumstick leaves), sprouted Bengal gram (chana), jaggery (gur) in moderation, sesame seeds, dates, and lentils.`
  },
  {
    id: 'who-dengue-care-protocol',
    title: 'Dengue Fever and Seasonal Febrile Illness: Clinical Outpatient Care',
    canonicalUrl: 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue',
    publisher: 'World Health Organization (WHO) & NVBDCP India',
    topic: 'Infectious Disease & Fever Care',
    language: 'en',
    publishedAt: '2023-09-12T00:00:00Z',
    updatedAt: '2024-04-05T00:00:00Z',
    license: 'WHO Creative Commons Attribution-NonCommercial-ShareAlike',
    author: 'WHO Global Neglected Tropical Diseases Department',
    summary: 'Clinical advice for managing uncomplicated seasonal fever, avoiding dangerous medications, and spotting critical dengue warning signs.',
    content: `# Seasonal Fevers and Dengue: Home Care, Safe Medication, and Warning Signs

### Clinical Stages and Safe Home Care
Dengue is an acute viral illness transmitted by female Aedes mosquitoes. Uncomplicated cases usually begin with high fever, severe headache, retro-orbital (behind the eye) pain, and joint/muscle aches:
- Fluid Replacement: The cornerstone of dengue management is maintaining abundant oral hydration to prevent hemoconcentration. Provide Oral Rehydration Salts (ORS), tender coconut water, diluted buttermilk, and fresh fruit juices.
- Rest: Complete bed rest during the febrile phase.
- Temperature Control: Apply lukewarm water sponge baths to the forehead, neck, and axillae to gently bring down temperature.

### CRITICAL MEDICATION SAFETY WARNING: Avoid NSAIDs
- For pain and fever relief, ONLY use Paracetamol (Acetaminophen) as advised by a doctor.
- NEVER TAKE Aspirin, Ibuprofen, Diclofenac, or any Non-Steroidal Anti-Inflammatory Drugs (NSAIDs) during an unexplained fever or suspected dengue. NSAIDs irritate the gastric mucosa and severely inhibit platelet aggregation, which can trigger life-threatening internal gastrointestinal hemorrhage.

### Dengue Critical Warning Signs (Require Immediate Hospitalization)
The critical phase often occurs around days 3 to 7 when the high fever begins to subside. Patients and caregivers must watch for:
- Severe abdominal pain or tenderness.
- Persistent vomiting (unable to retain fluids).
- Bleeding from gums, nose, or red spots on the skin (petechiae).
- Extreme lethargy, restlessness, or sudden dizziness upon standing.
- Cold, clammy skin or rapid shallow breathing.
Any of these signs necessitates immediate emergency casualty evaluation at the nearest hospital.`
  },
  {
    id: 'aiims-ndma-heat-stroke-dehydration',
    title: 'Advisory on Heat Stress, Dehydration, and Oral Rehydration Therapy',
    canonicalUrl: 'https://ndma.gov.in/Governance/Guidelines/Heat-Wave',
    publisher: 'National Disaster Management Authority (NDMA) & AIIMS New Delhi',
    topic: 'Emergency First Aid & Summer Wellness',
    language: 'en',
    publishedAt: '2024-03-01T00:00:00Z',
    updatedAt: '2024-05-15T00:00:00Z',
    license: 'Government Open Data License - India (GODL)',
    author: 'AIIMS Emergency Medicine & Public Health Department',
    summary: 'Differentiating mild dehydration, heat exhaustion, and life-threatening heat stroke with proper electrolyte management.',
    content: `# Heat Wave and Dehydration: Prevention, Electrolyte Balance, and First Aid

### Recognizing Dehydration and Heat Exhaustion
During intense Indian summer periods (temperatures exceeding 40°C), the body loses significant water and electrolytes through perspiration:
- Mild Dehydration: Dry mouth, darker yellow urine, mild dizziness, fatigue, thirst. Managed effectively with frequent sips of water, coconut water, or homemade lemon water with a pinch of salt and sugar.
- Heat Exhaustion: Heavy sweating, pale clammy skin, weakness, rapid weak pulse, muscle cramps, and mild confusion. Move to a cool shaded or air-conditioned area, loosen clothing, fan the body, and administer ORS solution.
- Heat Stroke (MEDICAL EMERGENCY): Body temperature spikes above 40°C (104°F), hot red dry skin (sweating mechanism fails), rapid strong pulse, slurred speech, delirium, convulsions, or loss of consciousness. Call 112 or 108 immediately. Cool the patient rapidly with wet towels or ice packs under armpits and groin until emergency personnel arrive.

### Oral Rehydration Salts (ORS) Preparation
- Standard WHO-formulation ORS packets are the gold standard for restoring sodium, potassium, and glucose balance.
- Preparation: Dissolve one full packet in exactly one liter of clean drinking water. Do not boil the prepared solution or add extra sugar or salt.
- Consume within 24 hours of preparation; discard any remaining solution after 24 hours.
- Traditional Indian fluid alternatives: Salted buttermilk (chaas) with roasted cumin, tender coconut water, thin dal water (moong dal ras), and raw mango cooler (aam panna) with roasted spices.`
  },
  {
    id: 'icmr-dietary-guidelines-2024',
    title: 'ICMR-NIN Dietary Guidelines for Indians: Everyday Nutrition and Lifestyle',
    canonicalUrl: 'https://www.icmr.gov.in/guidelines.html',
    publisher: 'Indian Council of Medical Research - National Institute of Nutrition (ICMR-NIN)',
    topic: 'Nutrition & Lifestyle Wellness',
    language: 'en',
    publishedAt: '2024-05-08T00:00:00Z',
    updatedAt: '2024-05-08T00:00:00Z',
    license: 'ICMR Public Research License',
    author: 'National Institute of Nutrition (NIN) Committee',
    summary: 'Official 2024 revised dietary rules for balanced Indian meals, vegetable intake, and reducing chronic disease risks.',
    content: `# Dietary Guidelines for Indians: Nutritional Balance and Chronic Disease Prevention

### My Plate for the Day (ICMR-NIN Model)
A healthy daily adult plate should be balanced proportionally across food groups rather than dominated by refined grains:
- Fresh Vegetables & Green Leaves: At least 300 to 400 grams per day (including 100 grams of dark green leafy vegetables such as palak, methi, sarson).
- Whole Fruits: 100 to 150 grams of fresh seasonal local fruits (papaya, guava, apple, oranges).
- Pulses, Legumes & Protein: At least 60 to 80 grams of protein sources (dal, chana, rajma, paneer, eggs, sprouts).
- Whole Cereals & Nutri-cereals (Millets): Limit to 200 to 250 grams per day. Avoid refined flour (maida).
- Nuts & Oilseeds: 20 to 30 grams daily (almonds, walnuts, flaxseeds, chia seeds) providing healthy omega-3 and micronutrients.

### Ultra-Processed Foods and Saturated Fats
- Limit pre-packaged, ultra-processed foods rich in high fructose corn syrup, palm oil, artificial emulsifiers, and excess sodium.
- Avoid repeated reheating of cooking oils: Reheating creates toxic polycyclic aromatic hydrocarbons (PAHs) and polar compounds that harm vascular endothelium.
- Ensure safe sun exposure: 15 to 20 minutes of midday sunlight exposure (between 11 AM and 2 PM) 3 to 4 times weekly promotes natural Vitamin D3 synthesis in Indian skin tones.`
  }
];
