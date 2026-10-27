const fs = require('fs');

async function runSecurityTestSuite() {
  console.log('===============================================================');
  console.log('      IMD CARE — BACKEND SECURITY & ARCHITECTURE TEST SUITE    ');
  console.log('===============================================================\n');

  let passed = 0;
  let total = 0;

  function assert(condition, testName, detail = '') {
    total++;
    if (condition) {
      console.log(`  ✔ [PASS] ${testName}`);
      passed++;
    } else {
      console.error(`  ✖ [FAIL] ${testName} ${detail ? `(${detail})` : ''}`);
    }
  }

  const BASE_URL = 'http://localhost:3000';

  // --- TEST GROUP 1: API Input Validation & Boundary Checks ---
  console.log('▶ Test Group 1: API Input Validation & Boundary Enforcement...');

  // 1.1 Empty message in chat
  try {
    const res = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: '   ', language: 'en' })
    });
    assert(res.status === 400, 'Empty chat message rejected with 400', `Status: ${res.status}`);
  } catch (err) {
    assert(false, 'Empty chat message check', err.message);
  }

  // 1.2 Malformed JSON in chat
  try {
    const res = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{ invalid_json '
    });
    assert(res.status === 400, 'Malformed JSON rejected with 400', `Status: ${res.status}`);
  } catch (err) {
    assert(false, 'Malformed JSON check', err.message);
  }

  // 1.3 Empty symptom input
  try {
    const res = await fetch(`${BASE_URL}/api/symptoms`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ symptom: '', language: 'en' })
    });
    assert(res.status === 400, 'Empty symptom description rejected with 400', `Status: ${res.status}`);
  } catch (err) {
    assert(false, 'Empty symptom check', err.message);
  }

  // --- TEST GROUP 2: Medical File Upload Magic Bytes & Size Limits ---
  console.log('\n▶ Test Group 2: File Magic Bytes & Upload Security...');

  // 2.1 Fake PDF (plain text file disguised as .pdf)
  try {
    const fakePdfBuf = Buffer.from('This is a plain text file, not a real PDF document at all.');
    const blob = new Blob([fakePdfBuf], { type: 'application/pdf' });
    const formData = new FormData();
    formData.append('file', blob, 'spoofed_document.pdf');
    formData.append('action', 'extract');
    formData.append('language', 'en');

    const res = await fetch(`${BASE_URL}/api/reports/import`, {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    assert(
      res.status === 400 && data.error && data.error.includes('signature'),
      'Fake PDF without %PDF magic bytes rejected with 400',
      `Status: ${res.status}, Error: ${data.error}`
    );
  } catch (err) {
    assert(false, 'Fake PDF magic byte check', err.message);
  }

  // 2.2 Oversized file (> 10MB)
  try {
    // 10.5 MB buffer
    const bigBuf = Buffer.alloc(10.5 * 1024 * 1024);
    bigBuf.write('%PDF-1.4', 0); // Fake PDF header on huge file
    const blob = new Blob([bigBuf], { type: 'application/pdf' });
    const formData = new FormData();
    formData.append('file', blob, 'huge_report.pdf');

    const res = await fetch(`${BASE_URL}/api/reports/import`, {
      method: 'POST',
      body: formData
    });
    assert(res.status === 400, 'Oversized file (>10MB) rejected with 400', `Status: ${res.status}`);
  } catch (err) {
    assert(false, 'Oversized file check', err.message);
  }

  // 2.3 Valid PDF file with correct %PDF signature
  try {
    const validPdfBuf = Buffer.from(
      '%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] >>\nendobj\nxref\n0 4\n0000000000 65535 f \n0000000009 00000 n \n0000000058 00000 n \n0000000115 00000 n \ntrailer\n<< /Size 4 /Root 1 0 R >>\nstartxref\n190\n%%EOF'
    );
    const blob = new Blob([validPdfBuf], { type: 'application/pdf' });
    const formData = new FormData();
    formData.append('file', blob, 'valid_lab_report.pdf');
    formData.append('action', 'extract');
    formData.append('language', 'en');

    const res = await fetch(`${BASE_URL}/api/reports/import`, {
      method: 'POST',
      body: formData
    });
    assert(res.status === 200, 'Valid PDF with %PDF magic bytes accepted with 200', `Status: ${res.status}`);
  } catch (err) {
    assert(false, 'Valid PDF check', err.message);
  }

  // --- TEST GROUP 3: Developer Authorization & Monitoring Security ---
  console.log('\n▶ Test Group 3: Developer Authorization & Telemetry Privacy...');

  // 3.1 Unauthorized monitoring access
  try {
    const res = await fetch(`${BASE_URL}/api/monitoring`);
    assert(res.status === 401, 'Unauthorized request to /api/monitoring rejected with 401', `Status: ${res.status}`);
  } catch (err) {
    assert(false, 'Unauthorized monitoring check', err.message);
  }

  // 3.2 Invalid developer key
  try {
    const res = await fetch(`${BASE_URL}/api/monitoring`, {
      headers: { 'x-developer-key': 'wrong-dev-token-999' }
    });
    assert(res.status === 401, 'Invalid developer key rejected with 401', `Status: ${res.status}`);
  } catch (err) {
    assert(false, 'Invalid dev key check', err.message);
  }

  // 3.3 Valid developer key
  try {
    const res = await fetch(`${BASE_URL}/api/monitoring`, {
      headers: { 'x-developer-key': 'imd-dev-hackathon-2026' }
    });
    const data = await res.json();
    const hasPrivacyNotice = data.liveMetrics && typeof data.liveMetrics.privacyNotice === 'string';
    const hasNoRawText = !JSON.stringify(data).includes('spoofed_document');
    assert(
      res.status === 200 && hasPrivacyNotice && hasNoRawText,
      'Authorized developer key yields telemetry without exposing raw patient data',
      `Status: ${res.status}`
    );
  } catch (err) {
    assert(false, 'Valid dev key check', err.message);
  }

  // --- TEST GROUP 4: Cross-User Access Control & Safe Report Deletion ---
  console.log('\n▶ Test Group 4: Tenant Isolation, Cross-User Access & Report Deletion...');

  // 4.1 Save report as User A
  let reportIdA = '';
  try {
    const res = await fetch(`${BASE_URL}/api/reports`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-demo-user-id': 'patient_alice_101'
      },
      body: JSON.stringify({
        action: 'save',
        reportTitle: 'Complete Blood Count (CBC)',
        fileName: 'alice_cbc.pdf',
        tests: [
          {
            id: 'rec_1',
            testName: 'Hemoglobin',
            resultValue: '13.5',
            unit: 'g/dL',
            referenceRange: '12.0 - 15.5',
            status: 'normal',
            verificationStatus: 'verified'
          }
        ]
      })
    });
    const data = await res.json();
    reportIdA = data.report?.id;
    assert(res.status === 200 && reportIdA, 'User Alice successfully saves report', `Report ID: ${reportIdA}`);
  } catch (err) {
    assert(false, 'Save report Alice', err.message);
  }

  // 4.2 Cross-user access attempt: User Bob attempts to read Alice's report
  try {
    const res = await fetch(`${BASE_URL}/api/reports?id=${reportIdA}`, {
      method: 'GET',
      headers: {
        'x-demo-user-id': 'patient_bob_202'
      }
    });
    assert(
      res.status === 403,
      'Cross-user read blocked with 403 Forbidden (Bob cannot view Alice\'s report)',
      `Status: ${res.status}`
    );
  } catch (err) {
    assert(false, 'Cross-user read check', err.message);
  }

  // 4.3 Cross-user delete attempt: User Bob attempts to delete Alice's report
  try {
    const res = await fetch(`${BASE_URL}/api/reports?id=${reportIdA}`, {
      method: 'DELETE',
      headers: {
        'x-demo-user-id': 'patient_bob_202'
      }
    });
    assert(
      res.status === 403,
      'Cross-user deletion blocked with 403 Forbidden (Bob cannot delete Alice\'s report)',
      `Status: ${res.status}`
    );
  } catch (err) {
    assert(false, 'Cross-user delete check', err.message);
  }

  // 4.4 Legitimate deletion: Alice deletes her own report
  try {
    const res = await fetch(`${BASE_URL}/api/reports?id=${reportIdA}`, {
      method: 'DELETE',
      headers: {
        'x-demo-user-id': 'patient_alice_101'
      }
    });
    assert(res.status === 200, 'Owner Alice successfully deletes her own report', `Status: ${res.status}`);
  } catch (err) {
    assert(false, 'Legitimate delete check', err.message);
  }

  // 4.5 Verify report no longer exists
  try {
    const res = await fetch(`${BASE_URL}/api/reports?id=${reportIdA}`, {
      method: 'GET',
      headers: {
        'x-demo-user-id': 'patient_alice_101'
      }
    });
    assert(res.status === 404, 'Deleted report is permanently inaccessible (404 Not Found)', `Status: ${res.status}`);
  } catch (err) {
    assert(false, 'Deleted report verification check', err.message);
  }

  // --- TEST GROUP 5: Dedicated Health Endpoint & MedGemma Diagnostic Behavior ---
  console.log('\n▶ Test Group 5: Backend Health Probe & MedGemma Diagnostic Probe...');

  // 5.1 /api/health returns comprehensive operational health
  try {
    const res = await fetch(`${BASE_URL}/api/health`);
    const data = await res.json();
    assert(
      res.status === 200 &&
      data.status === 'healthy' &&
      data.services.vectorStore.status === 'operational' &&
      data.services.aiProviders.medGemma.connected === false, // not configured, correctly reported as false!
      'System health probe returns 200 with truthful MedGemma status (connected: false)',
      `Status: ${res.status}`
    );
  } catch (err) {
    assert(false, 'Health probe check', err.message);
  }

  // --- TEST GROUP 6: Rate Limiting Enforcement ---
  console.log('\n▶ Test Group 6: In-Memory Sliding Window Rate Limiting...');
  try {
    let hitRateLimit = false;
    let rateLimitStatus = 0;
    // Fast burst of 35 requests to /api/chat from same IP (limit is 30)
    for (let i = 0; i < 35; i++) {
      const res = await fetch(`${BASE_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: `Health question test iteration ${i}`, language: 'en' })
      });
      if (res.status === 429) {
        hitRateLimit = true;
        rateLimitStatus = res.status;
        break;
      }
    }
    assert(
      hitRateLimit && rateLimitStatus === 429,
      'Burst traffic exceeds limit and returns HTTP 429 Too Many Requests',
      `Rate limit status: ${rateLimitStatus}`
    );
  } catch (err) {
    assert(false, 'Rate limit burst check', err.message);
  }

  console.log('\n===============================================================');
  console.log(`  SECURITY SUITE RESULTS: ${passed} / ${total} TESTS PASSED (${Math.round((passed / total) * 100)}%)`);
  console.log('===============================================================');

  if (passed === total) {
    console.log('🎉 ALL BACKEND SECURITY AND ARCHITECTURE TESTS PASSED!\n');
    process.exit(0);
  } else {
    console.error('❌ SOME TESTS FAILED!\n');
    process.exit(1);
  }
}

runSecurityTestSuite();

