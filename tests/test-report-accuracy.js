const fs = require('fs');

// We'll generate realistic PDF and test documents with exact known values:
// Case 1: Decimal precision (0.5, 1.8, 10.05) & clinical units
// Case 2: Qualitative tests (Positive, Negative, Trace) & flags
// Case 3: Missing reference ranges (must NOT invent one)
// Case 4: Multiple tables and multi-column formats

function createSyntheticPdf(textLines) {
  // Construct a valid PDF buffer with text stream
  const textStream = textLines
    .map((line, idx) => `0 -18 Td (${line.replace(/[()\\]/g, '\\$&')}) Tj`)
    .join('\n');

  const streamContent = `BT\n/F1 11 Tf\n50 720 Td\n${textStream}\nET`;
  const streamLength = Buffer.byteLength(streamContent);

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
<< /Length ${streamLength} >>
stream
${streamContent}
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
0000000350 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
450
%%EOF`;

  return Buffer.from(pdf);
}

// Test Suite 1: Comprehensive Lab Report with exact expected values
const testReportLines = [
  'PATIENT DIAGNOSTIC LAB REPORT',
  'Patient: Rajesh K. Patel   Age: 46 Y   Sex: M',
  'Sample Collected: 27-Oct-2026   Status: Verified Final',
  '==============================================================',
  'TEST NAME                 RESULT    UNIT      REFERENCE RANGE   FLAG',
  'Total Bilirubin           1.8       mg/dL     0.2 - 1.2         High',
  'Serum Creatinine          0.5       mg/dL     0.7 - 1.2         Low',
  'TSH 3rd Generation        10.05     uIU/mL    0.40 - 4.50       High',
  'Hemoglobin (Hb)           13.2      g/dL      13.0 - 17.0       Normal',
  'Serum Sodium              140       mmol/L    135 - 145         Normal',
  'Alkaline Phosphatase      88        IU/L      30 - 120          Normal',
  'Urine Protein             Trace               Nil               Abnormal',
  'HBsAg Rapid Screen        Negative            Negative          Normal',
  'Serum Ferritin            45        ng/mL',
  '=============================================================='
];

const knownGroundTruth = [
  { testName: 'Total Bilirubin', result: '1.8', unit: 'mg/dL', range: '0.2 - 1.2', status: 'above', flag: 'High' },
  { testName: 'Serum Creatinine', result: '0.5', unit: 'mg/dL', range: '0.7 - 1.2', status: 'below', flag: 'Low' },
  { testName: 'TSH 3rd Generation', result: '10.05', unit: 'uIU/mL', range: '0.40 - 4.50', status: 'above', flag: 'High' },
  { testName: 'Hemoglobin (Hb)', result: '13.2', unit: 'g/dL', range: '13.0 - 17.0', status: 'normal', flag: 'Normal' },
  { testName: 'Serum Sodium', result: '140', unit: 'mmol/L', range: '135 - 145', status: 'normal', flag: 'Normal' },
  { testName: 'Alkaline Phosphatase', result: '88', unit: 'IU/L', range: '30 - 120', status: 'normal', flag: 'Normal' },
  { testName: 'Urine Protein', result: 'Trace', unit: '', range: 'Nil', status: 'above', flag: 'Abnormal' },
  { testName: 'HBsAg Rapid Screen', result: 'Negative', unit: '', range: 'Negative', status: 'normal', flag: 'Normal' },
  { testName: 'Serum Ferritin', result: '45', unit: 'ng/mL', range: 'Not specified on report', status: 'inconclusive' }
];

const pdfBuf = createSyntheticPdf(testReportLines);
fs.writeFileSync('/tmp/comprehensive_test.pdf', pdfBuf);
console.log('Saved /tmp/comprehensive_test.pdf successfully');
