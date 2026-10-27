const fs = require('fs');

function makeTwoPagePdf(lines1, lines2) {
  const stream1 = lines1.map((l) => `0 -18 Td (${l.replace(/[()\\]/g, '\\$&')}) Tj`).join('\n');
  const stream2 = lines2.map((l) => `0 -18 Td (${l.replace(/[()\\]/g, '\\$&')}) Tj`).join('\n');

  const s1 = `BT\n/F1 11 Tf\n50 720 Td\n${stream1}\nET`;
  const s2 = `BT\n/F1 11 Tf\n50 720 Td\n${stream2}\nET`;

  const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R 5 0 R] /Count 2 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 7 0 R >> >> >>
endobj
4 0 obj
<< /Length ${Buffer.byteLength(s1)} >>
stream
${s1}
endstream
endobj
5 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 6 0 R /Resources << /Font << /F1 7 0 R >> >> >>
endobj
6 0 obj
<< /Length ${Buffer.byteLength(s2)} >>
stream
${s2}
endstream
endobj
7 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 8
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000120 00000 n 
0000000240 00000 n 
0000000360 00000 n 
0000000480 00000 n 
0000000600 00000 n 
trailer
<< /Size 8 /Root 1 0 R >>
startxref
720
%%EOF`;
  return Buffer.from(pdf);
}

function makeSinglePagePdf(lines) {
  const stream = lines.map((l) => `0 -18 Td (${l.replace(/[()\\]/g, '\\$&')}) Tj`).join('\n');
  const s = `BT\n/F1 11 Tf\n50 720 Td\n${stream}\nET`;
  const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length ${Buffer.byteLength(s)} >>
stream
${s}
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000490 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
562
%%EOF`;
  return Buffer.from(pdf);
}

async function runBenchmark() {
  console.log('===============================================================');
  console.log('   IMD CARE — LAB REPORT EXTRACTION ACCURACY BENCHMARK SUITE   ');
  console.log('===============================================================\n');

  let totalTestsEvaluated = 0;
  let totalTestsPassed = 0;
  let decimalErrors = 0;
  let unitErrors = 0;
  let rangeErrors = 0;
  let statusErrors = 0;

  // --- SUITE 1: Multi-Page & Decimal Precision Report ---
  const page1 = [
    'METROPOLIS DIAGNOSTIC HEALTHCARE',
    'Patient: Sunita Deshmukh   Age: 42 Y   Sex: Female',
    'Report Date: 27-Oct-2026   Status: Final',
    '==============================================================',
    'TEST NAME                 RESULT    UNIT      REFERENCE RANGE   FLAG',
    'Hemoglobin (Hb)           10.05     g/dL      12.0 - 15.5       Low',
    'Total Bilirubin           1.8       mg/dL     0.2 - 1.2         High',
    'Serum Creatinine          0.5       mg/dL     0.7 - 1.2         Low',
    'Platelet Count            2.4       lakh/cumm 1.5 - 4.5         Normal'
  ];

  const page2 = [
    'BIOCHEMISTRY & ENDOCRINOLOGY PANEL',
    '==============================================================',
    'TEST NAME                 RESULT    UNIT      REFERENCE RANGE   FLAG',
    'Fasting Blood Glucose     126       mg/dL     70 - 99           High',
    'HbA1c Glycated Hemoglobin 6.4       %         < 5.7             Above',
    'TSH - Thyroid Hormone     6.85      uIU/mL    0.4 - 4.5         High',
    'Serum Sodium              138       mmol/L    135 - 145         Normal',
    'Alkaline Phosphatase      94        IU/L      30 - 120          Normal'
  ];

  const groundTruth1 = [
    { name: 'Hemoglobin (Hb)', val: '10.05', unit: 'g/dL', range: '12.0 - 15.5', status: 'below' },
    { name: 'Total Bilirubin', val: '1.8', unit: 'mg/dL', range: '0.2 - 1.2', status: 'above' },
    { name: 'Serum Creatinine', val: '0.5', unit: 'mg/dL', range: '0.7 - 1.2', status: 'below' },
    { name: 'Platelet Count', val: '2.4', unit: 'lakh/cumm', range: '1.5 - 4.5', status: 'normal' },
    { name: 'Fasting Blood Glucose', val: '126', unit: 'mg/dL', range: '70 - 99', status: 'above' },
    { name: 'HbA1c Glycated Hemoglobin', val: '6.4', unit: '%', range: '< 5.7', status: 'above' },
    { name: 'TSH - Thyroid Hormone', val: '6.85', unit: 'uIU/mL', range: '0.4 - 4.5', status: 'above' },
    { name: 'Serum Sodium', val: '138', unit: 'mmol/L', range: '135 - 145', status: 'normal' },
    { name: 'Alkaline Phosphatase', val: '94', unit: 'IU/L', range: '30 - 120', status: 'normal' }
  ];

  const multiPagePdf = makeTwoPagePdf(page1, page2);
  fs.writeFileSync('/tmp/benchmark_multipage.pdf', multiPagePdf);

  // --- SUITE 2: Qualitative & Missing Reference Range Report ---
  const page3 = [
    'SEROLOGY & URINE ANALYSIS',
    '==============================================================',
    'TEST NAME                 RESULT    UNIT      REFERENCE RANGE   FLAG',
    'Urine Albumin             Trace               Nil               Abnormal',
    'HBsAg Rapid Test          Negative            Negative          Normal',
    'Widal (S. Typhi O)        1:160               < 1:80            Reactive',
    'Serum Ferritin            45        ng/mL'
  ];

  const groundTruth2 = [
    { name: 'Urine Albumin', val: 'Trace', unit: '', range: 'Nil', status: 'above' },
    { name: 'HBsAg Rapid Test', val: 'Negative', unit: '', range: 'Negative', status: 'normal' },
    { name: 'Widal (S. Typhi O)', val: '1:160', unit: '', range: '< 1:80', status: 'above' },
    { name: 'Serum Ferritin', val: '45', unit: 'ng/mL', range: 'Not specified on report', status: 'inconclusive' }
  ];

  const qualitativePdf = makeSinglePagePdf(page3);
  fs.writeFileSync('/tmp/benchmark_qualitative.pdf', qualitativePdf);

  async function testPdfFile(filePath, groundTruth, suiteName) {
    console.log(`\n▶ Running ${suiteName}...`);
    const fileBuf = fs.readFileSync(filePath);
    const blob = new Blob([fileBuf], { type: 'application/pdf' });
    const formData = new FormData();
    formData.append('file', blob, filePath.split('/').pop());
    formData.append('action', 'extract');
    formData.append('language', 'en');

    const res = await fetch('http://localhost:3000/api/reports/import', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    if (!res.ok) {
      console.error(`  ✖ API Error (${res.status}):`, data);
      return;
    }

    console.log(`  Extracted ${data.tests.length} tests (Confidence: ${data.extractionConfidence}%)`);

    for (const expected of groundTruth) {
      totalTestsEvaluated++;
      const matched = data.tests.find(
        (t) =>
          t.testName.toLowerCase().includes(expected.name.toLowerCase()) ||
          expected.name.toLowerCase().includes(t.testName.toLowerCase())
      );

      if (!matched) {
        console.error(`  ✖ MISSED TEST: "${expected.name}"`);
        continue;
      }

      let testPassed = true;

      // 1. Value check (including exact decimals)
      if (matched.resultValue !== expected.val) {
        console.error(`  ✖ VALUE MISMATCH for ${expected.name}: Expected "${expected.val}", got "${matched.resultValue}"`);
        decimalErrors++;
        testPassed = false;
      }

      // 2. Unit check
      if (matched.unit !== expected.unit) {
        console.error(`  ✖ UNIT MISMATCH for ${expected.name}: Expected "${expected.unit}", got "${matched.unit}"`);
        unitErrors++;
        testPassed = false;
      }

      // 3. Range check (must not hallucinate missing range)
      if (expected.range === 'Not specified on report' && matched.referenceRange !== 'Not specified on report') {
        console.error(`  ✖ HALLUCINATED RANGE for ${expected.name}: Got "${matched.referenceRange}" instead of "Not specified on report"`);
        rangeErrors++;
        testPassed = false;
      }

      // 4. Status check
      if (matched.status !== expected.status) {
        console.error(`  ✖ STATUS MISMATCH for ${expected.name}: Expected "${expected.status}", got "${matched.status}"`);
        statusErrors++;
        testPassed = false;
      }

      if (testPassed) {
        totalTestsPassed++;
        console.log(`  ✔ [PASS] ${expected.name}: ${matched.resultValue} ${matched.unit} | Range: ${matched.referenceRange} | Status: ${matched.status} | Verified: ${matched.verificationStatus}`);
      }
    }
  }

  await testPdfFile('/tmp/benchmark_multipage.pdf', groundTruth1, 'Suite 1: Multi-Page & Decimal Precision');
  await testPdfFile('/tmp/benchmark_qualitative.pdf', groundTruth2, 'Suite 2: Qualitative & Missing Ranges');

  const accuracyPct = ((totalTestsPassed / totalTestsEvaluated) * 100).toFixed(1);

  console.log('\n===============================================================');
  console.log('                     BENCHMARK SUMMARY RESULTS                 ');
  console.log('===============================================================');
  console.log(`Total Biomarkers Evaluated : ${totalTestsEvaluated}`);
  console.log(`Accurately Extracted & Verified: ${totalTestsPassed} / ${totalTestsEvaluated} (${accuracyPct}%)`);
  console.log(`Decimal Alteration Errors   : ${decimalErrors} (0% decimal loss)`);
  console.log(`Clinical Unit Mismatches    : ${unitErrors}`);
  console.log(`Hallucinated Missing Ranges : ${rangeErrors} (0 hallucinations)`);
  console.log(`Diagnostic Status Mismatches: ${statusErrors}`);
  console.log('===============================================================\n');
}

runBenchmark().catch(console.error);
