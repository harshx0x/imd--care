import { Language } from '../types';

export interface AppTranslations {
  common: {
    appName: string;
    aiBadge: string;
    submit: string;
    loading: string;
    cancel: string;
    save: string;
    retry: string;
    reset: string;
    back: string;
    optional: string;
    required: string;
    demoMode: string;
    openAIActive: string;
    openAI: string;
    emergency112: string;
    syntheticBadge: string;
    remindersBadge: string;
  };
  nav: {
    brandSubtitle: string;
    menuHeading: string;
    home: string;
    assistant: string;
    symptoms: string;
    reports: string;
    preventive: string;
    signInRegister: string;
    signOut: string;
    emergencyHelplines: string;
    emergencyTriageDesc: string;
    emergencyGuidanceBtn: string;
    medicalDisclaimerLink: string;
    version: string;
    openMenuAria: string;
    mobilePlatformTag: string;
    mobileCall112: string;
    mobileDisclaimer: string;
    pageTitles: {
      home: { title: string; subtitle: string };
      assistant: { title: string; subtitle: string };
      symptoms: { title: string; subtitle: string };
      reports: { title: string; subtitle: string };
      preventive: { title: string; subtitle: string };
      default: { title: string; subtitle: string };
    };
  };
  hero: {
    greeting: string;
    hindiSubgreeting: string;
    headlinePrefix: string;
    headlineHighlight: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
    badges: string[];
    emergencyTicker: string;
  };
  homeSections: {
    preventiveBadge: string;
    preventiveTitle: string;
    preventiveDesc: string;
    preventivePill1: string;
    preventivePill2: string;
    preventiveCta: string;
    disclaimerNotice: string;
    reviewSafetyTerms: string;
  };
  assistant: {
    sectionBadge: string;
    title: string;
    description: string;
    botHeaderTitle: string;
    activeStatus: string;
    resetChatTitle: string;
    resetChatConfirm: string;
    userLabel: string;
    criticalAlert: string;
    call112Btn: string;
    formulatingGuidance: string;
    errorMessage: string;
    suggestedLabel: string;
    inputPlaceholder: string;
    sendAria: string;
    safetyNote: string;
    emptyResponse: string;
  };
  symptoms: {
    sectionBadge: string;
    title: string;
    description: string;
    emergencyWarningTitle: string;
    emergencyNumbersText: string;
    openEmergencyBtn: string;
    formTitle: string;
    symptomLabel: string;
    symptomPlaceholder: string;
    scenarioLabel: string;
    durationLabel: string;
    durations: {
      less24h: string;
      days1to3: string;
      days4to7: string;
      weekPlus: string;
      chronic: string;
    };
    severityLabel: string;
    severities: {
      mild: string;
      moderate: string;
      severe: string;
    };
    ageGroupLabel: string;
    ageGroups: {
      child: string;
      adolescent: string;
      youngAdult: string;
      adult: string;
      senior: string;
    };
    conditionsLabel: string;
    conditionsPlaceholder: string;
    submitCta: string;
    loadingCta: string;
    awaitingTitle: string;
    awaitingDesc: string;
    awaitingSafety: string;
    summaryHeader: string;
    demoBadge: string;
    evaluateNewBtn: string;
    card1Title: string;
    card2Title: string;
    card3Title: string; // "When to Consult a Doctor"
    card4Title: string; // "Warning Signs"
    safetyNoticeTitle: string;
    safetyNoticeSuffix: string;
    errorMessage: string;
  };
  reports: {
    sectionBadge: string;
    title: string;
    description: string;
    sampleStripLabel: string;
    sampleStripBadge: string;
    formTitle: string;
    testNameLabel: string;
    testNamePlaceholder: string;
    resultValueLabel: string;
    resultValuePlaceholder: string;
    unitLabel: string;
    unitPlaceholder: string;
    rangeLabel: string;
    rangePlaceholder: string;
    contextLabel: string;
    contextPlaceholder: string;
    submitCta: string;
    loadingCta: string;
    statusBadges: {
      below: string;
      normal: string;
      above: string;
      inconclusive: string;
    };
    awaitingTitle: string;
    awaitingDesc: string;
    reportSummaryBadge: string;
    enteredLabel: string;
    rangeLabelText: string;
    defaultRangeFallback: string;
    plainLanguageHeader: string;
    factorsHeader: string;
    questionsHeader: string;
    disclaimerPrefix: string;
    disclaimerSuffix: string;
    errorMessage: string;
    tabManual: string;
    tabImport: string;
    importBadge: string;
    importTitle: string;
    importSubtitle: string;
    dropzoneTitle: string;
    dropzoneSubtitle: string;
    browseFiles: string;
    supportedFormats: string;
    privacyPledge: string;
    selectedFileTitle: string;
    removeFile: string;
    importAnother: string;
    analyzeBtn: string;
    analyzingBtn: string;
    analyzingHint: string;
    extractedTestsTitle: string;
    testsCountLabel: (count: number) => string;
    measuredResultLabel: string;
    referenceRangeLabel: string;
    notSpecified: string;
    reassuranceTitle: string;
    unreadableTitle: string;
    unreadableTryAgain: string;
    errorOversized: string;
    errorUnsupportedType: string;
    reviewTitle: string;
    reviewSubtitle: string;
    confidenceLabel: string;
    tableHeaderTestName: string;
    tableHeaderResult: string;
    tableHeaderUnit: string;
    tableHeaderRange: string;
    tableHeaderStatus: string;
    tableHeaderVerification: string;
    statusVerified: string;
    statusNeedsVerification: string;
    confirmAndExplainBtn: string;
    backToReviewBtn: string;
    addTestBtn: string;
    viewRawText: string;
    hideRawText: string;
    deleteTestRow: string;
    sourceDocument: string;
    sourcePreview: string;
  };
  preventive: {
    sectionBadge: string;
    title: string;
    description: string;
    privacyTitle: string;
    privacyBody: string;
    privacyNotice: string;
    remindersHeader: string;
    activeItemsText: (count: number) => string;
    addReminderBtn: string;
    cancelBtn: string;
    newReminderTitle: string;
    titlePlaceholder: string;
    categoryLabel: string;
    categories: {
      medication: string;
      appointment: string;
      lab_test: string;
      lifestyle: string;
    };
    timeLabel: string;
    timePlaceholder: string;
    frequencyLabel: string;
    frequencyPlaceholder: string;
    notesPlaceholder: string;
    saveReminderBtn: string;
    noRemindersText: string;
    deleteReminderAria: string;
    trackerHeader: string;
    trackerSubtitle: string;
    todayScoreText: string;
    pillars: {
      hydrationTitle: string;
      hydrationSub: string;
      physicalTitle: string;
      physicalSub: string;
      sleepTitle: string;
      sleepSub: string;
      pranayamaTitle: string;
      pranayamaSub: string;
      nutritionTitle: string;
      nutritionSub: string;
    };
  };
  modals: {
    emergency: {
      title: string;
      subtitle: string;
      whyAlertAppeared: string;
      immediateHelplinesHeading: string;
      protocolHeading: string;
      rules: string[];
      disclaimer: string;
      closeBtn: string;
    };
    disclaimer: {
      title: string;
      subtitle: string;
      alertTitle: string;
      alertBody: string;
      principlesHeading: string;
      principles: {
        noRelationship: string;
        syntheticReports: string;
        emergencyProtocol: string;
      };
      privacyHeading: string;
      privacyBody: string;
      acknowledgeBtn: string;
    };
  };
  footer: {
    erssTitle: string;
    erssDesc: string;
    erssBtn: string;
    brandTagline: string;
    safetyBadge: string;
    corePlatformHeading: string;
    assistantLink: string;
    symptomsLink: string;
    reportsLink: string;
    preventiveLink: string;
    helplinesHeading: string;
    nationalEmergency: string;
    ambulance: string;
    mohfw: string;
    teleManas: string;
    trustHeading: string;
    medicalDisclaimer: string;
    zeroRetention: string;
    hackathonNote: string;
    copyright: string;
    privacyPolicy: string;
    triageSafety: string;
  };
}

export const APP_TRANSLATIONS: Record<Language, AppTranslations> = {
  en: {
    common: {
      appName: 'IMD Care',
      aiBadge: 'AI',
      submit: 'Submit',
      loading: 'Loading...',
      cancel: 'Cancel',
      save: 'Save',
      retry: 'Retry',
      reset: 'Reset',
      back: 'Back',
      optional: 'Optional',
      required: 'Required',
      demoMode: 'Demo Mode',
      openAIActive: 'OpenAI Active',
      openAI: 'OpenAI',
      emergency112: '112 Safety',
      syntheticBadge: 'Synthetic',
      remindersBadge: 'Reminders'
    },
    nav: {
      brandSubtitle: 'Better Health Guidance',
      menuHeading: 'Navigation Menu',
      home: 'Home',
      assistant: 'AI Health Assistant',
      symptoms: 'Smart Symptom Guidance',
      reports: 'Medical Report Simplifier',
      preventive: 'Preventive Care',
      signInRegister: 'Sign In / Register',
      signOut: 'Sign Out',
      emergencyHelplines: 'Emergency Helplines',
      emergencyTriageDesc: 'Immediate Indian medical triage for chest pain or stroke signs.',
      emergencyGuidanceBtn: 'Emergency Guidance',
      medicalDisclaimerLink: 'Medical Disclaimer',
      version: 'v2.1',
      openMenuAria: 'Open navigation menu',
      mobilePlatformTag: 'Healthcare AI Platform',
      mobileCall112: 'Call 112 / Emergency Guidance',
      mobileDisclaimer: 'Medical Safety & Privacy Disclaimer',
      pageTitles: {
        home: { title: 'Health Overview', subtitle: 'Better Health Understanding Starts Here' },
        assistant: { title: 'AI Health Assistant', subtitle: 'Conversational Guidance in EN, HI & MR' },
        symptoms: { title: 'Smart Symptom Guidance', subtitle: 'Conservative 112 Triage & Review' },
        reports: { title: 'Medical Report Simplifier', subtitle: 'Translating Diagnostic Lab Biomarkers' },
        preventive: { title: 'Preventive Care', subtitle: 'Medication Reminders & Daily Wellness' },
        default: { title: 'IMD Care', subtitle: 'Intelligent Medical Guidance' }
      }
    },
    hero: {
      greeting: 'Namaste 🙏, Welcome to IMD Care.',
      hindiSubgreeting: 'स्वस्थ रहें, जागरूक रहें। (Stay healthy, stay informed.)',
      headlinePrefix: 'Your Health. Your Questions.',
      headlineHighlight: 'A Healthier You.',
      subtext:
        'Understand health information, explore everyday wellness, and discover informed next steps with your AI health companion.',
      primaryCta: "Let's Get Started",
      secondaryCta: 'Meet Your Health Companion',
      badges: [
        'Multilingual: EN, HI, MR',
        'Conservative 112 Safety',
        'Zero Sensitive Logging'
      ],
      emergencyTicker: 'Immediate Medical Emergency in India? Dial 112 or 108 without waiting.'
    },
    homeSections: {
      preventiveBadge: 'Habit & Reminder Tracking',
      preventiveTitle: 'Daily Indian Wellness & Medication Reminders',
      preventiveDesc:
        'Stay on top of prescriptions, clinical follow-ups, hydration goals, and pranayama routines. Data stays private in your browser.',
      preventivePill1: 'Local Storage Privacy',
      preventivePill2: 'Hydration & Sleep Tracker',
      preventiveCta: 'Open Preventive Care',
      disclaimerNotice:
        'Medical Notice: IMD Care is an AI-powered health literacy platform built for educational guidance. Never ignore emergency symptoms or modify prescription dosages without consulting a licensed physician.',
      reviewSafetyTerms: 'Review Safety Terms'
    },
    assistant: {
      sectionBadge: 'Interactive Health Consultation',
      title: 'AI Health Assistant',
      description:
        'Ask questions about common health topics, nutrition, and home comfort measures in English, Hindi, or Marathi.',
      botHeaderTitle: 'IMD Care Assistant',
      activeStatus: 'Active in English',
      resetChatTitle: 'Reset conversation',
      resetChatConfirm: 'Reset this conversation?',
      userLabel: 'You',
      criticalAlert: 'CRITICAL ALERT',
      call112Btn: 'Call 112 / View Protocol',
      formulatingGuidance: 'Loading...',
      errorMessage: 'Unable to reach the health assistant. Please try again or check your connection.',
      suggestedLabel: 'Suggested:',
      inputPlaceholder: 'Type your health question here... (Press Enter to send)',
      sendAria: 'Send message',
      safetyNote:
        'Conversations are strictly confidential and never permanently logged. For severe chest pain, stroke signs, or difficulty breathing, call 112 immediately.',
      emptyResponse: 'No response returned from the health assistant.'
    },
    symptoms: {
      sectionBadge: 'Structured Health Triage',
      title: 'Smart Symptom Guidance',
      description:
        'Educational review of non-emergency symptoms. Not a clinical diagnosis or treatment prescription.',
      emergencyWarningTitle: 'IMMEDIATE EMERGENCY WARNING DETECTED',
      emergencyNumbersText: 'National Emergency: 112 | Medical Ambulance: 108',
      openEmergencyBtn: 'Open Emergency Instructions',
      formTitle: 'Symptom Intake Form',
      symptomLabel: 'Describe what you are experiencing *',
      symptomPlaceholder: 'e.g., Dull headache on forehead with sensitivity to computer lights, feeling tired...',
      scenarioLabel: 'Or select a demonstration scenario:',
      durationLabel: 'Duration',
      durations: {
        less24h: '< 24 Hours',
        days1to3: '1 to 3 Days',
        days4to7: '4 to 7 Days',
        weekPlus: '> 1 Week',
        chronic: 'Chronic (> 1 Month)'
      },
      severityLabel: 'Severity',
      severities: {
        mild: 'Mild',
        moderate: 'Moderate',
        severe: 'Severe'
      },
      ageGroupLabel: 'Age Group',
      ageGroups: {
        child: 'Child (0–12 yrs)',
        adolescent: 'Adolescent (13–17 yrs)',
        youngAdult: 'Young Adult (18–39 yrs)',
        adult: 'Adult (40–59 yrs)',
        senior: 'Senior (60+ yrs)'
      },
      conditionsLabel: 'Existing Conditions (Optional)',
      conditionsPlaceholder: 'e.g. Diabetes, Hypertension',
      submitCta: 'Submit',
      loadingCta: 'Loading...',
      awaitingTitle: 'Awaiting Symptom Details',
      awaitingDesc:
        'Enter your symptoms or pick a pre-set demonstration scenario on the left. The system will categorize your inquiry into four clear, educational review sections.',
      awaitingSafety: 'Conservative Indian 112 emergency verification active',
      summaryHeader: 'Guidance Summary',
      demoBadge: 'Demo Mode Guidance',
      evaluateNewBtn: 'Evaluate New Symptoms',
      card1Title: '1. Possible Explanations',
      card2Title: '2. General Self-Care',
      card3Title: 'When to Consult a Doctor',
      card4Title: 'Warning Signs',
      safetyNoticeTitle: 'Medical Safety Notice:',
      safetyNoticeSuffix:
        'Always consult a licensed clinical medical officer for prescription management or definitive triage.',
      errorMessage: 'Unable to complete symptom evaluation. Please try again.'
    },
    reports: {
      sectionBadge: 'Biomarker Translation Engine',
      title: 'Medical Report Simplifier',
      description:
        'Demystify diagnostic lab numbers. Get clear layman explanations and empowered questions for your next doctor appointment.',
      sampleStripLabel: 'Choose a Ready-to-Use Synthetic Sample Report:',
      sampleStripBadge: '100% Synthetic & Confidential',
      formTitle: 'Lab Test Input Details',
      testNameLabel: 'Test Name *',
      testNamePlaceholder: 'e.g. Hemoglobin, LDL Cholesterol, TSH',
      resultValueLabel: 'Result Value *',
      resultValuePlaceholder: 'e.g. 10.2, 148',
      unitLabel: 'Unit *',
      unitPlaceholder: 'e.g. g/dL, mg/dL, %',
      rangeLabel: 'Laboratory Reference Range',
      rangePlaceholder: 'e.g. 12.0 - 15.5 g/dL (Adult Female)',
      contextLabel: 'Clinical Context / Notes (Optional)',
      contextPlaceholder: 'e.g. Fasting test, routine wellness review',
      submitCta: 'Submit',
      loadingCta: 'Loading...',
      statusBadges: {
        below: 'Below Standard Reference Range',
        normal: 'Within Standard Reference Range',
        above: 'Above Standard Reference Range',
        inconclusive: 'Reference Range Comparison Pending'
      },
      awaitingTitle: 'Ready to Simplify Your Lab Report',
      awaitingDesc:
        'Select one of the synthetic samples above or type in your test values. Click "Submit" to generate an accessible summary and doctor-visit questions.',
      reportSummaryBadge: 'Report Explanation',
      enteredLabel: 'Entered:',
      rangeLabelText: 'Reference Range:',
      defaultRangeFallback: 'Standard Lab Range',
      plainLanguageHeader: 'What this test means in plain language:',
      factorsHeader: 'Everyday factors that can influence this result:',
      questionsHeader: 'Recommended Questions to Ask Your Doctor:',
      disclaimerPrefix: 'Synthetic Educational Interpretation:',
      disclaimerSuffix:
        'Always present your original diagnostic report to a registered medical practitioner.',
      errorMessage: 'Unable to simplify lab report. Please check your connection and try again.',
      tabManual: 'Enter Values Manually',
      tabImport: 'Import Lab Report',
      importBadge: 'Document Vision & PDF Parsing',
      importTitle: 'Import Diagnostic Lab Report',
      importSubtitle:
        'Upload your lab report PDF or photo to extract biomarkers and receive plain-language guidance.',
      dropzoneTitle: 'Upload your lab report to understand your results.',
      dropzoneSubtitle: 'Drag & drop your document here or select from your computer',
      browseFiles: 'Browse Files',
      supportedFormats: 'Supports PDF, JPG, JPEG, and PNG files up to 10 MB',
      privacyPledge: '100% In-Memory Processing • Zero Permanent Storage',
      selectedFileTitle: 'Report Document Ready',
      removeFile: 'Remove File',
      importAnother: 'Import Another',
      analyzeBtn: 'Analyze Report',
      analyzingBtn: 'Analyzing Report...',
      analyzingHint: 'Extracting biomarkers and compiling layman explanations...',
      extractedTestsTitle: 'Extracted Lab Biomarkers',
      testsCountLabel: (count: number) => `${count} Test${count === 1 ? '' : 's'} Identified`,
      measuredResultLabel: 'Measured Result:',
      referenceRangeLabel: 'Reference Range:',
      notSpecified: 'Not specified on report',
      reassuranceTitle: 'Important Note on Test Values',
      unreadableTitle: 'Document Could Not Be Read Clearly',
      unreadableTryAgain: 'Please upload a clearer, well-lit photo or digital PDF report.',
      errorOversized: 'The uploaded file exceeds the 10 MB limit. Please select a smaller file.',
      errorUnsupportedType: 'Unsupported file format. Please upload a PDF, JPG, or PNG report.',
      reviewTitle: 'Review & Verify Extracted Biomarkers',
      reviewSubtitle:
        'Compare the extracted figures against your original report. You can edit any value or reference range before generating the plain-language explanation.',
      confidenceLabel: 'Extraction Confidence',
      tableHeaderTestName: 'Test Name',
      tableHeaderResult: 'Extracted Result',
      tableHeaderUnit: 'Unit',
      tableHeaderRange: 'Lab Reference Range',
      tableHeaderStatus: 'Status',
      tableHeaderVerification: 'Verification',
      statusVerified: 'Verified',
      statusNeedsVerification: 'Needs verification',
      confirmAndExplainBtn: 'Confirm Results & Explain',
      backToReviewBtn: 'Edit Values & Re-analyze',
      addTestBtn: '+ Add Another Test',
      viewRawText: 'View Extracted Raw Text',
      hideRawText: 'Hide Raw Text',
      deleteTestRow: 'Remove row',
      sourceDocument: 'Source Document',
      sourcePreview: 'Original Document Preview'
    },
    preventive: {
      sectionBadge: 'Preventive Wellness Routine',
      title: 'Preventive Care',
      description: 'Track essential daily habits, medications, and doctor appointments locally on your device.',
      privacyTitle: 'Privacy Assurance:',
      privacyBody:
        'Reminders and wellness counts are stored strictly in your local browser storage. No sensitive clinical scheduling data is uploaded or tracked on external servers.',
      privacyNotice:
        'Notice: Browser-local demo reminders do not send background push notifications or SMS. Please keep clinical reminders in your primary calendar or alarm.',
      remindersHeader: 'Health Reminders',
      activeItemsText: (count: number) => `${count} active items`,
      addReminderBtn: 'Add Reminder',
      cancelBtn: 'Cancel',
      newReminderTitle: 'New Reminder Entry',
      titlePlaceholder: 'e.g. Amlodipine 5mg, Thyroid Follow-up',
      categoryLabel: 'Category',
      categories: {
        medication: 'Medication',
        appointment: 'Doctor Visit',
        lab_test: 'Lab Test',
        lifestyle: 'Lifestyle / Exercise'
      },
      timeLabel: 'Time',
      timePlaceholder: 'e.g. 08:30 AM',
      frequencyLabel: 'Frequency',
      frequencyPlaceholder: 'e.g. Daily, Weekly',
      notesPlaceholder: 'Optional notes (e.g. Take with warm water)',
      saveReminderBtn: 'Save Reminder',
      noRemindersText: 'No reminders added yet. Click "Add Reminder" to create one.',
      deleteReminderAria: 'Delete reminder',
      trackerHeader: 'Daily Wellness Tracker',
      trackerSubtitle: 'Essential lifestyle pillars',
      todayScoreText: "Today's Score",
      pillars: {
        hydrationTitle: 'Hydration Target',
        hydrationSub: 'Aim for 8 glasses / 2.5 Liters',
        physicalTitle: 'Physical Activity',
        physicalSub: '30 mins brisk walking, jogging or yoga',
        sleepTitle: 'Restorative Sleep',
        sleepSub: '7 to 8 hours uninterrupted rest',
        pranayamaTitle: 'Pranayama / Breathing',
        pranayamaSub: '10 mins Anulom Vilom or meditation',
        nutritionTitle: 'Nutrient-Rich Diet',
        nutritionSub: 'Fiber, lentils (dal), raw salad & low salt'
      }
    },
    modals: {
      emergency: {
        title: 'CRITICAL EMERGENCY GUIDANCE',
        subtitle: 'India National Medical Triage Alert',
        whyAlertAppeared: 'Why this alert appeared:',
        immediateHelplinesHeading: 'Immediate Emergency Contact (India)',
        protocolHeading: 'Immediate Life-Safety Protocol',
        rules: [
          'Do not drive yourself: Ask a family member, neighbor, or call an ambulance immediately.',
          'Rest in a position of comfort: If experiencing chest pressure or breathlessness, sit upright in a comfortable chair. Loosen any tight clothing around the neck and chest.',
          'FAST Stroke Check: If someone shows Facial drooping, Arm weakness, or Slurred speech, Time is critical — seek emergency hospital care within minutes.',
          'Keep medical records ready: Have recent prescriptions, government ID (Aadhaar / Ayushman Bharat card), and any regular heart or diabetic medication details ready for emergency room doctors.'
        ],
        disclaimer:
          'IMD Care is an automated health literacy tool and does not provide clinical diagnosis or emergency triage. For genuine emergencies, immediately contact emergency medical services.',
        closeBtn: 'Close & Return'
      },
      disclaimer: {
        title: 'Medical Disclaimer & Privacy Notice',
        subtitle: 'IMD Care — Responsible AI Health Literacy',
        alertTitle: 'Not Medical Advice:',
        alertBody:
          'IMD Care is an AI-powered health literacy prototype built for educational demonstration. Content generated by this application does not constitute professional medical diagnosis, treatment, or clinical consultation.',
        principlesHeading: 'Core Principles & Safety Rules',
        principles: {
          noRelationship:
            'No Doctor-Patient Relationship: Using this application does not create a physician-patient relationship. Always consult a registered medical practitioner (MBBS/MD) for any medical questions or prescriptions.',
          syntheticReports:
            'Synthetic Sample Reports: All pre-loaded medical lab reports are synthetic and for demonstration only. We do not require or ask for real patient names, IDs, or confidential clinical records.',
          emergencyProtocol:
            'Emergency Protocol: For critical symptoms (such as acute chest pain, sudden numbness, or severe difficulty breathing), immediately dial 112 or 108 in India, or proceed to the nearest emergency room.'
        },
        privacyHeading: 'Zero Sensitive Data Retention',
        privacyBody:
          'We respect your health privacy. Health assistant inquiries and symptom evaluations are processed securely in memory and are never permanently recorded or sold to third parties. Preventive reminders and wellness checklist counts are stored only in your private browser local storage.',
        acknowledgeBtn: 'I Acknowledge & Agree'
      }
    },
    footer: {
      erssTitle: 'India National Emergency Response Support System (ERSS)',
      erssDesc:
        'Immediate clinical assistance across all States & Union Territories: Dial 112 (All-in-One) or 108 (Ambulance).',
      erssBtn: 'Emergency Guidance (112)',
      brandTagline:
        'Better Health Understanding Starts Here. Bridging the medical literacy divide across India with culturally nuanced, multi-lingual AI assistance.',
      safetyBadge: 'Ethical AI & Clinical Safety First',
      corePlatformHeading: 'Core Platform',
      assistantLink: 'AI Health Assistant (EN, HI, MR)',
      symptomsLink: 'Smart Symptom Guidance',
      reportsLink: 'Medical Report Simplifier',
      preventiveLink: 'Preventive Care & Reminders',
      helplinesHeading: 'Government Helplines',
      nationalEmergency: 'National Emergency:',
      ambulance: 'Medical Ambulance:',
      mohfw: 'MoHFW Health Helpline:',
      teleManas: 'Tele-MANAS Mental Health:',
      trustHeading: 'Trust & Ethics',
      medicalDisclaimer: 'Medical Disclaimer',
      zeroRetention: 'Zero Data Retention Privacy',
      hackathonNote:
        'Built for the Healthcare AI Hackathon. Real OpenAI integration with robust offline synthetic demo fallback.',
      copyright: '© 2025–2026 IMD Care. All synthetic healthcare examples reserved for hackathon evaluation.',
      privacyPolicy: 'Privacy Policy',
      triageSafety: 'Medical Triage Safety'
    }
  },

  hi: {
    common: {
      appName: 'IMD Care',
      aiBadge: 'AI',
      submit: 'सबमिट करें',
      loading: 'लोड हो रहा है...',
      cancel: 'रद्द करें',
      save: 'सहेजें',
      retry: 'पुनः प्रयास करें',
      reset: 'रीसेट करें',
      back: 'वापस जाएं',
      optional: 'वैकल्पिक',
      required: 'आवश्यक',
      demoMode: 'डेमो मोड',
      openAIActive: 'ओपनएआई सक्रिय',
      openAI: 'ओपनएआई',
      emergency112: '112 सुरक्षा',
      syntheticBadge: 'सिंथेटिक',
      remindersBadge: 'अनुस्मारक'
    },
    nav: {
      brandSubtitle: 'बेहतर स्वास्थ्य मार्गदर्शन',
      menuHeading: 'नेविगेशन मेनू',
      home: 'होम',
      assistant: 'एआई स्वास्थ्य सहायक',
      symptoms: 'लक्षण संबंधी मार्गदर्शन',
      reports: 'मेडिकल रिपोर्ट को सरल भाषा में समझें',
      preventive: 'निवारक स्वास्थ्य देखभाल',
      signInRegister: 'साइन इन / रजिस्टर',
      signOut: 'साइन आउट',
      emergencyHelplines: 'आपातकालीन हेल्पलाइन',
      emergencyTriageDesc: 'सीने में दर्द या स्ट्रोक के संकेतों के लिए त्वरित भारतीय मेडिकल ट्राइएज।',
      emergencyGuidanceBtn: 'आपातकालीन मार्गदर्शन',
      medicalDisclaimerLink: 'चिकित्सीय अस्वीकरण',
      version: 'v2.1',
      openMenuAria: 'नेविगेशन मेनू खोलें',
      mobilePlatformTag: 'हेल्थकेयर एआई प्लेटफॉर्म',
      mobileCall112: '112 कॉल करें / आपातकालीन सहायता',
      mobileDisclaimer: 'चिकित्सीय सुरक्षा व गोपनीयता अस्वीकरण',
      pageTitles: {
        home: { title: 'स्वास्थ्य अवलोकन', subtitle: 'बेहतर स्वास्थ्य समझ की शुरुआत यहीं से होती है' },
        assistant: { title: 'एआई स्वास्थ्य सहायक', subtitle: 'हिंदी, अंग्रेजी और मराठी में सीधा संवाद' },
        symptoms: { title: 'लक्षण संबंधी मार्गदर्शन', subtitle: 'सुरक्षित 112 आपातकालीन ट्राइएज और समीक्षा' },
        reports: { title: 'मेडिकल रिपोर्ट को सरल भाषा में समझें', subtitle: 'डायग्नोस्टिक लैब बायोमार्कर्स का सरलीकरण' },
        preventive: { title: 'निवारक स्वास्थ्य देखभाल', subtitle: 'दवाइयों के अनुस्मारक और दैनिक वेलनेस' },
        default: { title: 'IMD Care', subtitle: 'बुद्धिमान स्वास्थ्य मार्गदर्शन' }
      }
    },
    hero: {
      greeting: 'नमस्ते 🙏, IMD Care में आपका स्वागत है।',
      hindiSubgreeting: 'स्वस्थ रहें, जागरूक रहें।',
      headlinePrefix: 'आपका स्वास्थ्य। आपके सवाल।',
      headlineHighlight: 'एक स्वस्थ आप।',
      subtext:
        'स्वास्थ्य संबंधी जानकारी को समझें, दैनिक कल्याण का अन्वेषण करें, और अपने AI स्वास्थ्य साथी के साथ सोच-समझकर कदम उठाएं।',
      primaryCta: 'चलिए शुरू करें',
      secondaryCta: 'स्वास्थ्य साथी से मिलें',
      badges: [
        'हिंदी, अंग्रेजी व मराठी में उपलब्ध',
        '112 आपातकालीन सुरक्षा ट्राइएज',
        'शून्य संवेदनशील डेटा लॉगिंग'
      ],
      emergencyTicker: 'भारत में कोई भी चिकित्सीय आपात स्थिति? तुरंत 112 या 108 डायल करें।'
    },
    homeSections: {
      preventiveBadge: 'आदत और अनुस्मारक ट्रैकिंग',
      preventiveTitle: 'दैनिक भारतीय स्वास्थ्य और दवा अनुस्मारक',
      preventiveDesc:
        'दवाइयों के पर्चे, क्लिनिकल फॉलो-अप, पानी के लक्ष्य और प्राणायाम की दिनचर्या पर नजर रखें। डेटा आपके ब्राउज़र में पूरी तरह सुरक्षित रहता है।',
      preventivePill1: 'लोकल स्टोरेज गोपनीयता',
      preventivePill2: 'पानी और नींद का ट्रैकर',
      preventiveCta: 'निवारक स्वास्थ्य देखभाल खोलें',
      disclaimerNotice:
        'चिकित्सीय सूचना: IMD Care शैक्षिक मार्गदर्शन के लिए एक AI-संचालित स्वास्थ्य साक्षरता मंच है। किसी लाइसेंस प्राप्त चिकित्सक से परामर्श किए बिना आपातकालीन लक्षणों को नजरअंदाज न करें और न ही दवा की खुराक बदलें।',
      reviewSafetyTerms: 'सुरक्षा शर्तें देखें'
    },
    assistant: {
      sectionBadge: 'इंटरएक्टिव स्वास्थ्य परामर्श',
      title: 'एआई स्वास्थ्य सहायक',
      description:
        'अंग्रेजी, हिंदी या मराठी में सामान्य स्वास्थ्य विषयों, पोषण और घरेलू प्राथमिक उपायों के बारे में प्रश्न पूछें।',
      botHeaderTitle: 'IMD Care सहायक',
      activeStatus: 'हिंदी में सक्रिय',
      resetChatTitle: 'बातचीत रीसेट करें',
      resetChatConfirm: 'क्या आप इस बातचीत को रीसेट करना चाहते हैं?',
      userLabel: 'आप',
      criticalAlert: 'गंभीर चेतावनी',
      call112Btn: '112 कॉल करें / प्रोटोकॉल देखें',
      formulatingGuidance: 'लोड हो रहा है...',
      errorMessage: 'स्वास्थ्य सहायक से संपर्क करने में असमर्थ। कृपया पुनः प्रयास करें या कनेक्शन जांचें।',
      suggestedLabel: 'सुझाव:',
      inputPlaceholder: 'अपना स्वास्थ्य संबंधी प्रश्न यहां लिखें... (Enter दबाएं)',
      sendAria: 'संदेश भेजें',
      safetyNote:
        'बातचीत पूरी तरह गोपनीय है और कभी स्थायी रूप से लॉग नहीं की जाती। सीने में तेज दर्द, स्ट्रोक के लक्षण या सांस लेने में तकलीफ के लिए तुरंत 112 पर कॉल करें।',
      emptyResponse: 'स्वास्थ्य सहायक की ओर से कोई उत्तर प्राप्त नहीं हुआ।'
    },
    symptoms: {
      sectionBadge: 'संरचित स्वास्थ्य ट्राइएज',
      title: 'लक्षण संबंधी मार्गदर्शन',
      description:
        'गैर-आपातकालीन लक्षणों की शैक्षिक समीक्षा। यह चिकित्सीय निदान या नुस्खा नहीं है।',
      emergencyWarningTitle: 'तत्काल आपातकालीन चेतावनी पहचानी गई',
      emergencyNumbersText: 'राष्ट्रीय आपातकालीन: 112 | एम्बुलेंस: 108',
      openEmergencyBtn: 'आपातकालीन निर्देश खोलें',
      formTitle: 'लक्षण विवरण फॉर्म',
      symptomLabel: 'आप जो महसूस कर रहे हैं उसका वर्णन करें *',
      symptomPlaceholder: 'उदा. माथे पर हल्का सिरदर्द, स्क्रीन से आंखों में जलन, थकान महसूस होना...',
      scenarioLabel: 'या एक डेमो परिदृश्य चुनें:',
      durationLabel: 'अवधि',
      durations: {
        less24h: '24 घंटे से कम',
        days1to3: '1 से 3 दिन',
        days4to7: '4 से 7 दिन',
        weekPlus: '1 सप्ताह से अधिक',
        chronic: 'दीर्घकालिक (> 1 महीना)'
      },
      severityLabel: 'गंभीरता',
      severities: {
        mild: 'हल्की',
        moderate: 'मध्यम',
        severe: 'गंभीर'
      },
      ageGroupLabel: 'आयु वर्ग',
      ageGroups: {
        child: 'बच्चे (0–12 वर्ष)',
        adolescent: 'किशोर (13–17 वर्ष)',
        youngAdult: 'युवा वयस्क (18–39 वर्ष)',
        adult: 'वयस्क (40–59 वर्ष)',
        senior: 'वरिष्ठ (60+ वर्ष)'
      },
      conditionsLabel: 'पहले से मौजूद बीमारियां (वैकल्पिक)',
      conditionsPlaceholder: 'उदा. डायबिटीज, हाई ब्लड प्रेशर',
      submitCta: 'सबमिट करें',
      loadingCta: 'लोड हो रहा है...',
      awaitingTitle: 'लक्षण विवरण की प्रतीक्षा है',
      awaitingDesc:
        'बाईं ओर अपने लक्षण दर्ज करें या पहले से निर्धारित डेमो उदाहरण चुनें। सिस्टम आपकी जांच को चार स्पष्ट, शैक्षिक समीक्षा वर्गों में विभाजित करेगा।',
      awaitingSafety: 'सुरक्षित भारतीय 112 आपातकालीन सत्यापन सक्रिय',
      summaryHeader: 'मार्गदर्शन सारांश',
      demoBadge: 'डेमो मोड मार्गदर्शन',
      evaluateNewBtn: 'नए लक्षणों का मूल्यांकन करें',
      card1Title: '1. संभावित कारण',
      card2Title: '2. सामान्य स्व-देखभाल',
      card3Title: 'डॉक्टर से कब परामर्श लें',
      card4Title: 'चेतावनी के संकेत',
      safetyNoticeTitle: 'चिकित्सीय सुरक्षा सूचना:',
      safetyNoticeSuffix:
        'दवा के प्रबंधन या निश्चित निदान के लिए हमेशा लाइसेंस प्राप्त चिकित्सक से परामर्श लें।',
      errorMessage: 'लक्षण मूल्यांकन पूरा करने में असमर्थ। कृपया पुनः प्रयास करें।'
    },
    reports: {
      sectionBadge: 'बायोमार्कर्स विश्लेषण इंजन',
      title: 'मेडिकल रिपोर्ट को सरल भाषा में समझें',
      description:
        'लैब रिपोर्ट के आंकड़ों को आसान भाषा में समझें। डॉक्टर की अगली विजिट के लिए स्पष्ट व्याख्या और उपयोगी प्रश्न प्राप्त करें।',
      sampleStripLabel: 'तैयार सिंथेटिक डेमो रिपोर्ट चुनें:',
      sampleStripBadge: '100% सिंथेटिक व गोपनीय',
      formTitle: 'लैब टेस्ट इनपुट विवरण',
      testNameLabel: 'जांच का नाम (Test Name) *',
      testNamePlaceholder: 'उदा. हीमोग्लोबिन, एलडीएल कोलेस्ट्रॉल, टीएसएच',
      resultValueLabel: 'परिणाम मान (Result Value) *',
      resultValuePlaceholder: 'उदा. 10.2, 148',
      unitLabel: 'इकाई (Unit) *',
      unitPlaceholder: 'उदा. g/dL, mg/dL, %',
      rangeLabel: 'प्रयोगशाला संदर्भ सीमा (Reference Range)',
      rangePlaceholder: 'उदा. 12.0 - 15.5 g/dL (वयस्क महिला)',
      contextLabel: 'नैदानिक संदर्भ / अतिरिक्त विवरण (वैकल्पिक)',
      contextPlaceholder: 'उदा. खाली पेट की जांच, सामान्य स्वास्थ्य परीक्षण',
      submitCta: 'सबमिट करें',
      loadingCta: 'लोड हो रहा है...',
      statusBadges: {
        below: 'सामान्य संदर्भ सीमा से कम',
        normal: 'सामान्य संदर्भ सीमा के भीतर',
        above: 'सामान्य संदर्भ सीमा से अधिक',
        inconclusive: 'तुलना लंबित'
      },
      awaitingTitle: 'आपकी लैब रिपोर्ट सरल करने के लिए तैयार',
      awaitingDesc:
        'ऊपर दिए गए सिंथेटिक नमूनों में से एक चुनें या अपने टेस्ट का मान दर्ज करें। सरल व्याख्या और डॉक्टर से पूछने के सवाल पाने के लिए "सबमिट करें" पर क्लिक करें।',
      reportSummaryBadge: 'रिपोर्ट विश्लेषण',
      enteredLabel: 'दर्ज किया गया:',
      rangeLabelText: 'संदर्भ सीमा:',
      defaultRangeFallback: 'मानक लैब सीमा',
      plainLanguageHeader: 'सरल भाषा में इस जांच का क्या अर्थ है:',
      factorsHeader: 'दैनिक कारक जो इस परिणाम को प्रभावित कर सकते हैं:',
      questionsHeader: 'अपने डॉक्टर से पूछने के लिए अनुशंसित सवाल:',
      disclaimerPrefix: 'सिंथेटिक शैक्षिक विश्लेषण:',
      disclaimerSuffix:
        'किसी भी निर्णय से पहले अपनी मूल लैब रिपोर्ट पंजीकृत चिकित्सक को दिखाएं।',
      errorMessage: 'लैब रिपोर्ट सरल करने में असमर्थ। कृपया कनेक्शन जांचें और पुनः प्रयास करें।',
      tabManual: 'आंकड़े स्वयं दर्ज करें',
      tabImport: 'लैब रिपोर्ट आयात करें (Import)',
      importBadge: 'दस्तावेज़ विज़न और PDF विश्लेषण',
      importTitle: 'डायग्नोस्टिक लैब रिपोर्ट आयात करें',
      importSubtitle:
        'बायोमार्कर्स निकालने और सरल भाषा में मार्गदर्शन पाने के लिए अपनी रिपोर्ट (PDF या फोटो) अपलोड करें।',
      dropzoneTitle: 'अपने परिणामों को समझने के लिए अपनी लैब रिपोर्ट अपलोड करें।',
      dropzoneSubtitle: 'फ़ाइल को यहाँ खींचकर छोड़ें या अपने डिवाइस से चुनें',
      browseFiles: 'फ़ाइलें चुनें (Browse Files)',
      supportedFormats: 'PDF, JPG, JPEG और PNG फ़ाइलें समर्थित हैं (अधिकतम 10 MB)',
      privacyPledge: '100% इन-मेमोरी प्रोसेसिंग • सर्वर पर कोई फ़ाइल सहेजी नहीं जाती',
      selectedFileTitle: 'रिपोर्ट दस्तावेज़ तैयार है',
      removeFile: 'फ़ाइल हटाएं (Remove)',
      importAnother: 'दूसरी फ़ाइल चुनें (Import Another)',
      analyzeBtn: 'रिपोर्ट का विश्लेषण करें (Analyze Report)',
      analyzingBtn: 'रिपोर्ट का विश्लेषण हो रहा है...',
      analyzingHint: 'बायोमार्कर्स निकाले जा रहे हैं और सरल व्याख्या तैयार की जा रही है...',
      extractedTestsTitle: 'पहचाने गए लैब बायोमार्कर्स',
      testsCountLabel: (count: number) => `${count} जांच विवरण प्राप्त हुए`,
      measuredResultLabel: 'मापा गया परिणाम:',
      referenceRangeLabel: 'संदर्भ सीमा (Reference Range):',
      notSpecified: 'रिपोर्ट में निर्दिष्ट नहीं',
      reassuranceTitle: 'टेस्ट परिणामों पर महत्वपूर्ण जानकारी',
      unreadableTitle: 'दस्तावेज़ को स्पष्ट रूप से पढ़ा नहीं जा सका',
      unreadableTryAgain: 'कृपया एक स्पष्ट, अच्छी रोशनी वाली तस्वीर या डिजिटल PDF रिपोर्ट अपलोड करें।',
      errorOversized: 'अपलोड की गई फ़ाइल 10 MB से बड़ी है। कृपया छोटी फ़ाइल चुनें।',
      errorUnsupportedType: 'असमर्थित फ़ाइल प्रारूप। कृपया केवल PDF, JPG या PNG रिपोर्ट अपलोड करें।',
      reviewTitle: 'निकाले गए बायोमार्कर्स की समीक्षा व पुष्टि करें',
      reviewSubtitle:
        'अपनी मूल रिपोर्ट से इन आंकड़ों की तुलना करें। सरल भाषा में व्याख्या पाने से पहले आप किसी भी मान या संदर्भ सीमा को बदल सकते हैं।',
      confidenceLabel: 'विश्लेषण सटीकता (Confidence)',
      tableHeaderTestName: 'जांच का नाम (Test Name)',
      tableHeaderResult: 'निकाला गया परिणाम (Result)',
      tableHeaderUnit: 'इकाई (Unit)',
      tableHeaderRange: 'लैब संदर्भ सीमा (Reference Range)',
      tableHeaderStatus: 'स्थिति (Status)',
      tableHeaderVerification: 'सत्यापन (Verification)',
      statusVerified: 'सत्यापित (Verified)',
      statusNeedsVerification: 'जांच की आवश्यकता (Needs verification)',
      confirmAndExplainBtn: 'परिणामों की पुष्टि करें और समझें',
      backToReviewBtn: 'मान बदलें और पुनः समझें',
      addTestBtn: '+ अन्य जांच जोड़ें',
      viewRawText: 'मूल टेक्स्ट देखें',
      hideRawText: 'मूल टेक्स्ट छिपाएं',
      deleteTestRow: 'पंक्ति हटाएं',
      sourceDocument: 'मूल दस्तावेज़',
      sourcePreview: 'मूल रिपोर्ट का पूर्वावलोकन'
    },
    preventive: {
      sectionBadge: 'निवारक स्वास्थ्य दिनचर्या',
      title: 'निवारक स्वास्थ्य देखभाल',
      description: 'आवश्यक दैनिक आदतों, दवाओं और डॉक्टर के अपॉइंटमेंट को अपने डिवाइस पर ट्रैक करें।',
      privacyTitle: 'गोपनीयता आश्वासन:',
      privacyBody:
        'अनुस्मारक और वेलनेस रिकॉर्ड पूरी तरह से आपके स्थानीय ब्राउज़र स्टोरेज में सुरक्षित रहते हैं। कोई भी संवेदनशील डेटा बाहरी सर्वर पर अपलोड या ट्रैक नहीं किया जाता।',
      privacyNotice:
        'सूचना: ब्राउज़र-स्थानीय डेमो अनुस्मारक बैकग्राउंड पुश नोटिफिकेशन या एसएमएस नहीं भेजते। कृपया महत्वपूर्ण चिकित्सीय अनुस्मारक अपने मुख्य कैलेंडर या अलार्म में भी रखें।',
      remindersHeader: 'स्वास्थ्य अनुस्मारक',
      activeItemsText: (count: number) => `${count} सक्रिय अनुस्मारक`,
      addReminderBtn: 'अनुस्मारक जोड़ें',
      cancelBtn: 'रद्द करें',
      newReminderTitle: 'नया अनुस्मारक दर्ज करें',
      titlePlaceholder: 'उदा. बीपी की दवा, थायरॉइड फॉलो-अप',
      categoryLabel: 'श्रेणी',
      categories: {
        medication: 'दवा',
        appointment: 'डॉक्टर विजिट',
        lab_test: 'लैब टेस्ट',
        lifestyle: 'जीवनशैली / व्यायाम'
      },
      timeLabel: 'समय',
      timePlaceholder: 'उदा. सुबह 08:30',
      frequencyLabel: 'आवृत्ति (Frequency)',
      frequencyPlaceholder: 'उदा. रोजाना, साप्ताहिक',
      notesPlaceholder: 'अतिरिक्त निर्देश (उदा. गुनगुने पानी के साथ लें)',
      saveReminderBtn: 'अनुस्मारक सहेजें',
      noRemindersText: 'अभी तक कोई अनुस्मारक नहीं जोड़ा गया है। नया बनाने के लिए "अनुस्मारक जोड़ें" पर क्लिक करें।',
      deleteReminderAria: 'अनुस्मारक हटाएं',
      trackerHeader: 'दैनिक वेलनेस ट्रैकर',
      trackerSubtitle: 'स्वस्थ जीवनशैली के मुख्य आधार',
      todayScoreText: 'आज का स्कोर',
      pillars: {
        hydrationTitle: 'पानी का लक्ष्य (हाइड्रेशन)',
        hydrationSub: 'लक्ष्य: 8 गिलास / 2.5 लीटर',
        physicalTitle: 'शारीरिक गतिविधि',
        physicalSub: '30 मिनट तेज चलना, सैर या योग',
        sleepTitle: 'गहरी व आरामदायक नींद',
        sleepSub: '7 से 8 घंटे की निर्बाध नींद',
        pranayamaTitle: 'प्राणायाम और श्वास अभ्यास',
        pranayamaSub: '10 मिनट अनुलोम-विलोम या ध्यान',
        nutritionTitle: 'संतुलित व पौष्टिक भोजन',
        nutritionSub: 'फाइबर, दालें, ताजी सलाद और कम नमक'
      }
    },
    modals: {
      emergency: {
        title: 'गंभीर आपातकालीन मार्गदर्शन',
        subtitle: 'भारत राष्ट्रीय चिकित्सीय ट्राइएज अलर्ट',
        whyAlertAppeared: 'यह अलर्ट क्यों दिखाया गया:',
        immediateHelplinesHeading: 'तत्काल आपातकालीन संपर्क (भारत)',
        protocolHeading: 'जीवन सुरक्षा के तत्काल नियम',
        rules: [
          'स्वयं वाहन न चलाएं: तुरंत किसी परिजन, पड़ोसी या एम्बुलेंस को बुलाएं।',
          'आरामदायक स्थिति में बैठें: यदि सीने में दबाव या सांस फूल रही हो, तो कुर्सी पर सीधे बैठें। गर्दन और सीने के कपड़े ढीले करें।',
          'FAST स्ट्रोक जांच: यदि चेहरे का लटकना, बांह में कमजोरी या बोली में लड़खड़ाहट दिखे, तो तुरंत अस्पताल पहुंचें।',
          'चिकित्सीय रिकॉर्ड तैयार रखें: हाल के पर्चे, सरकारी पहचान पत्र (आधार / आयुष्मान कार्ड) और नियमित दवाओं की सूची डॉक्टरों के लिए तैयार रखें।'
        ],
        disclaimer:
          'IMD Care एक स्वचालित स्वास्थ्य साक्षरता टूल है और नैदानिक जांच या आपातकालीन ट्राइएज प्रदान नहीं करता। वास्तविक आपात स्थिति में तुरंत आपातकालीन चिकित्सा सेवाओं से संपर्क करें।',
        closeBtn: 'बंद करें और वापस जाएं'
      },
      disclaimer: {
        title: 'चिकित्सीय अस्वीकरण और गोपनीयता सूचना',
        subtitle: 'IMD Care — उत्तरदायी AI स्वास्थ्य साक्षरता',
        alertTitle: 'चिकित्सीय परामर्श नहीं:',
        alertBody:
          'IMD Care एक AI-संचालित स्वास्थ्य साक्षरता प्रोटोटाइप है जिसे शैक्षिक प्रदर्शन के लिए बनाया गया है। इस एप्लिकेशन द्वारा उत्पन्न सामग्री पेशेवर चिकित्सीय निदान, उपचार या क्लिनिकल परामर्श का विकल्प नहीं है।',
        principlesHeading: 'मुख्य सिद्धांत और सुरक्षा नियम',
        principles: {
          noRelationship:
            'कोई डॉक्टर-मरीज संबंध नहीं: इस ऐप का उपयोग डॉक्टर-मरीज का संबंध स्थापित नहीं करता। चिकित्सीय प्रश्नों या नुस्खे के लिए हमेशा पंजीकृत चिकित्सक (MBBS/MD) से परामर्श लें।',
          syntheticReports:
            'सिंथेटिक नमूना रिपोर्ट: सभी पहले से लोड की गई लैब रिपोर्ट सिंथेटिक हैं और केवल प्रदर्शन के लिए हैं। हम वास्तविक मरीज के नाम या गोपनीय रिकॉर्ड नहीं मांगते।',
          emergencyProtocol:
            'आपातकालीन प्रोटोकॉल: गंभीर लक्षणों (जैसे सीने में तेज दर्द, अचानक सुन्नपन, सांस लेने में अत्यधिक कठिनाई) के लिए भारत में तुरंत 112 या 108 डायल करें।'
        },
        privacyHeading: 'शून्य संवेदनशील डेटा संग्रह',
        privacyBody:
          'हम आपकी स्वास्थ्य गोपनीयता का सम्मान करते हैं। बातचीत और लक्षण मूल्यांकन केवल मेमोरी में सुरक्षित रूप से संसाधित होते हैं और कभी स्थायी रूप से रिकॉर्ड या बेचे नहीं जाते। अनुस्मारक केवल आपके निजी ब्राउज़र लोकल स्टोरेज में रहते हैं।',
        acknowledgeBtn: 'मैंने समझ लिया और मैं सहमत हूँ'
      }
    },
    footer: {
      erssTitle: 'भारत राष्ट्रीय आपातकालीन प्रतिक्रिया सहायता प्रणाली (ERSS)',
      erssDesc:
        'सभी राज्यों और केंद्र शासित प्रदेशों में त्वरित चिकित्सा सहायता: 112 (समग्र आपातकालीन) या 108 (एम्बुलेंस) डायल करें।',
      erssBtn: 'आपातकालीन मार्गदर्शन (112)',
      brandTagline:
        'बेहतर स्वास्थ्य समझ की शुरुआत यहीं से होती है। सांस्कृतिक संवेदनशीलता और बहुभाषी AI सहायता से भारत में स्वास्थ्य साक्षरता की दूरी को पाटना।',
      safetyBadge: 'नैतिक AI और चिकित्सीय सुरक्षा सर्वोपरि',
      corePlatformHeading: 'मुख्य प्लेटफॉर्म',
      assistantLink: 'एआई स्वास्थ्य सहायक (हिंदी, अंग्रेजी, मराठी)',
      symptomsLink: 'लक्षण संबंधी मार्गदर्शन',
      reportsLink: 'मेडिकल रिपोर्ट को सरल भाषा में समझें',
      preventiveLink: 'निवारक स्वास्थ्य देखभाल और अनुस्मारक',
      helplinesHeading: 'सरकारी हेल्पलाइन',
      nationalEmergency: 'राष्ट्रीय आपातकालीन:',
      ambulance: 'चिकित्सा एम्बुलेंस:',
      mohfw: 'स्वास्थ्य मंत्रालय हेल्पलाइन:',
      teleManas: 'टेली-मानस मानसिक स्वास्थ्य:',
      trustHeading: 'विश्वास और नैतिकता',
      medicalDisclaimer: 'चिकित्सीय अस्वीकरण',
      zeroRetention: 'शून्य डेटा प्रतिधारण गोपनीयता',
      hackathonNote:
        'हेल्थकेयर एआई हैकाथॉन के लिए निर्मित। मजबूत ऑफलाइन सिंथेटिक डेमो फॉलबैक के साथ वास्तविक ओपनएआई एकीकरण।',
      copyright: '© 2025–2026 IMD Care. सभी सिंथेटिक उदाहरण हैकाथॉन मूल्यांकन के लिए आरक्षित हैं।',
      privacyPolicy: 'गोपनीयता नीति',
      triageSafety: 'चिकित्सीय ट्राइएज सुरक्षा'
    }
  },

  mr: {
    common: {
      appName: 'IMD Care',
      aiBadge: 'AI',
      submit: 'सबमिट करा',
      loading: 'लोड होत आहे...',
      cancel: 'रद्द करा',
      save: 'जतन करा',
      retry: 'पुन्हा प्रयत्न करा',
      reset: 'रीसेट करा',
      back: 'परत जा',
      optional: 'ऐच्छिक',
      required: 'आवश्यक',
      demoMode: 'डेमो मोड',
      openAIActive: 'ओपनएआय सक्रिय',
      openAI: 'ओपनएआय',
      emergency112: '112 सुरक्षा',
      syntheticBadge: 'सिंथेटिक',
      remindersBadge: 'स्मरणपत्रे'
    },
    nav: {
      brandSubtitle: 'उत्तम आरोग्य मार्गदर्शन',
      menuHeading: 'नेव्हिगेशन मेनू',
      home: 'मुख्य पृष्ठ',
      assistant: 'एआई आरोग्य सहाय्यक',
      symptoms: 'लक्षणांबाबत मार्गदर्शन',
      reports: 'वैद्यकीय अहवाल सोप्या भाषेत समजून घ्या',
      preventive: 'प्रतिबंधात्मक आरोग्यसेवा',
      signInRegister: 'साइन इन / नोंदणी',
      signOut: 'साइन आउट',
      emergencyHelplines: 'तातडीची हेल्पलाइन',
      emergencyTriageDesc: 'छातीत दुखणे किंवा स्ट्रोकच्या लक्षणांसाठी तातडीची वैद्यकीय मदत.',
      emergencyGuidanceBtn: 'तातडीचे मार्गदर्शन',
      medicalDisclaimerLink: 'वैद्यकीय अस्वीकरण',
      version: 'v2.1',
      openMenuAria: 'नेव्हिगेशन मेनू उघडा',
      mobilePlatformTag: 'हेल्थकेअर एआय प्लॅटफॉर्म',
      mobileCall112: '112 वर कॉल करा / तातडीचे मार्गदर्शन',
      mobileDisclaimer: 'वैद्यकीय सुरक्षा व गोपनीयता अस्वीकरण',
      pageTitles: {
        home: { title: 'आरोग्य आढावा', subtitle: 'उत्तम आरोग्य समजुतीची सुरुवात येथून होते' },
        assistant: { title: 'एआई आरोग्य सहाय्यक', subtitle: 'मराठी, हिंदी व इंग्रजीत थेट संवाद' },
        symptoms: { title: 'लक्षणांबाबत मार्गदर्शन', subtitle: 'सुरक्षित 112 आपत्कालीन ट्रायज आणि विश्लेषण' },
        reports: { title: 'वैद्यकीय अहवाल सोप्या भाषेत समजून घ्या', subtitle: 'लॅब बायोमार्कर्सचे सोपे विश्लेषण' },
        preventive: { title: 'प्रतिबंधात्मक आरोग्यसेवा', subtitle: 'औषधांची स्मरणपत्रे व दैनंदिन स्वास्थ्य' },
        default: { title: 'IMD Care', subtitle: 'बुद्धिमान आरोग्य मार्गदर्शन' }
      }
    },
    hero: {
      greeting: 'नमस्कार 🙏, IMD Care मध्ये आपले स्वागत आहे.',
      hindiSubgreeting: 'निरोगी राहा, सजग राहा.',
      headlinePrefix: 'आपले आरोग्य. आपले प्रश्न.',
      headlineHighlight: 'निरोगी आपण.',
      subtext:
        'आरोग्याची माहिती समजून घ्या, दैनंदिन स्वास्थ्य जोपासा आणि आपल्या AI आरोग्य सहाय्यकासह योग्य निर्णय घ्या.',
      primaryCta: 'चला, सुरुवात करूया',
      secondaryCta: 'आरोग्य मित्राला भेटा',
      badges: [
        'मराठी, हिंदी व इंग्रजीत उपलब्ध',
        '112 सुरक्षित आपत्कालीन ट्रायज',
        'खाजगी व सुरक्षित मार्गदर्शन'
      ],
      emergencyTicker: 'भारतात तातडीची वैद्यकीय आणीबाणी? त्वरित 112 किंवा 108 वर कॉल करा.'
    },
    homeSections: {
      preventiveBadge: 'सवयी व स्मरणपत्र ट्रॅकिंग',
      preventiveTitle: 'दैनंदिन भारतीय आरोग्य आणि औषध स्मरणपत्रे',
      preventiveDesc:
        'औषधे, वैद्यकीय तपासणी, पाण्याचे उद्दिष्ट आणि प्राणायाम सहज सांभाळा. सर्व डेटा आपल्या ब्राउझरमध्ये सुरक्षित राहतो.',
      preventivePill1: 'स्थानिक स्टोरेज गोपनीयता',
      preventivePill2: 'पाणी व झोप ट्रॅकर',
      preventiveCta: 'प्रतिबंधात्मक आरोग्यसेवा उघडा',
      disclaimerNotice:
        'वैद्यकीय सूचना: IMD Care हे केवळ शैक्षणिक मार्गदर्शनासाठी तयार केलेले AI आरोग्य साक्षरता व्यासपीठ आहे. डॉक्टरांच्या सल्ल्याशिवाय आपत्कालीन लक्षणांकडे दुर्लक्ष करू नका किंवा औषधांचे प्रमाण बदलू नका.',
      reviewSafetyTerms: 'सुरक्षा अटी तपासा'
    },
    assistant: {
      sectionBadge: 'थेट आरोग्य संवाद',
      title: 'एआई आरोग्य सहाय्यक',
      description:
        'इंग्रजी, हिंदी किंवा मराठीत सामान्य आरोग्य, पोषण आणि घरगुती उपायांविषयी प्रश्न विचारा.',
      botHeaderTitle: 'IMD Care सहाय्यक',
      activeStatus: 'मराठीमध्ये सक्रिय',
      resetChatTitle: 'संभाषण रीसेट करा',
      resetChatConfirm: 'हे संभाषण रीसेट करायचे आहे का?',
      userLabel: 'तुम्ही',
      criticalAlert: 'गंभीर सूचना',
      call112Btn: '112 वर कॉल करा / माहिती पहा',
      formulatingGuidance: 'लोड होत आहे...',
      errorMessage: 'आरोग्य सहाय्यकाशी संपर्क होऊ शकला नाही. कृपया पुन्हा प्रयत्न करा.',
      suggestedLabel: 'सुचवलेले प्रश्न:',
      inputPlaceholder: 'आपला आरोग्य प्रश्न येथे टाईप करा... (Enter दाबा)',
      sendAria: 'संदेश पाठवा',
      safetyNote:
        'संभाषण पूर्णपणे गोपनीय असून कधीही साठवले जात नाही. छातीत तीव्र वेदना, स्ट्रोकची लक्षणे किंवा श्वास घेण्यास त्रास झाल्यास त्वरित 112 वर संपर्क साधा.',
      emptyResponse: 'आरोग्य सहाय्यकाकडून कोणताही प्रतिसाद मिळाला नाही.'
    },
    symptoms: {
      sectionBadge: 'संरचित आरोग्य ट्रायज',
      title: 'लक्षणांबाबत मार्गदर्शन',
      description:
        'गैर-आपत्कालीन लक्षणांचे शैक्षणिक विश्लेषण. हे वैद्यकीय निदान किंवा औषधोपचार नाही.',
      emergencyWarningTitle: 'तातडीची वैद्यकीय आणीबाणी आढळली',
      emergencyNumbersText: 'राष्ट्रीय आपत्कालीन: 112 | रुग्णवाहिका: 108',
      openEmergencyBtn: 'आपत्कालीन सूचना उघडा',
      formTitle: 'लक्षण नोंदणी फॉर्म',
      symptomLabel: 'आपल्याला काय त्रास होत आहे ते सांगा *',
      symptomPlaceholder: 'उदा. कपाळावर हलकी डोकेदुखी, संगणकाच्या स्क्रीनमुळे डोळ्यांचा ताण, थकवा...',
      scenarioLabel: 'किंवा प्रात्यक्षिक उदाहरण निवडा:',
      durationLabel: 'कालावधी',
      durations: {
        less24h: '२४ तासांपेक्षा कमी',
        days1to3: '१ ते ३ दिवस',
        days4to7: '४ ते ७ दिवस',
        weekPlus: '१ आठवड्यापेक्षा जास्त',
        chronic: 'दीर्घकालीन (> १ महिना)'
      },
      severityLabel: 'तीव्रता',
      severities: {
        mild: 'सौम्य',
        moderate: 'मध्यम',
        severe: 'तीव्र'
      },
      ageGroupLabel: 'वयोगट',
      ageGroups: {
        child: 'मुलगा/मुलगी (०–१२ वर्षे)',
        adolescent: 'किशोरवयीन (१३–१७ वर्षे)',
        youngAdult: 'तरुण (१८–३९ वर्षे)',
        adult: 'प्रौढ (४०–५९ वर्षे)',
        senior: 'ज्येष्ठ नागरिक (६०+ वर्षे)'
      },
      conditionsLabel: 'पूर्वीचे आजार (ऐच्छिक)',
      conditionsPlaceholder: 'उदा. मधुमेह, उच्च रक्तदाब',
      submitCta: 'सबमिट करा',
      loadingCta: 'लोड होत आहे...',
      awaitingTitle: 'लक्षणांच्या माहितीची वाट पाहत आहोत',
      awaitingDesc:
        'डाव्या बाजूला लक्षणे प्रविष्ट करा किंवा दिलेले उदाहरण निवडा. प्रणाली आपल्या लक्षणांचे चार स्पष्ट भागांमध्ये विश्लेषण करेल.',
      awaitingSafety: 'सुरक्षित भारतीय ११२ आपत्कालीन पडताळणी सक्रिय',
      summaryHeader: 'मार्गदर्शन सारांश',
      demoBadge: 'डेमो मोड मार्गदर्शन',
      evaluateNewBtn: 'नवीन लक्षणांचे विश्लेषण करा',
      card1Title: '१. संभाव्य कारणे',
      card2Title: '२. सामान्य घरगुती काळजी',
      card3Title: 'डॉक्टरांचा सल्ला कधी घ्यावा',
      card4Title: 'धोक्याची लक्षणे',
      safetyNoticeTitle: 'वैद्यकीय सुरक्षा सूचना:',
      safetyNoticeSuffix:
        'औषधोपचार किंवा अंतिम वैद्यकीय तपासणीसाठी नेहमी तज्ज्ञ डॉक्टरांचा सल्ला घ्या.',
      errorMessage: 'लक्षणांचे विश्लेषण पूर्ण होऊ शकले नाही. कृपया पुन्हा प्रयत्न करा.'
    },
    reports: {
      sectionBadge: 'बायोमार्कर्स विश्लेषण इंजिन',
      title: 'वैद्यकीय अहवाल सोप्या भाषेत समजून घ्या',
      description:
        'रक्त तपासणी आणि लॅब अहवालाचे आकडे सोप्या भाषेत समजून घ्या. डॉक्टरांच्या पुढील भेटीसाठी उपयुक्त माहिती मिळवा.',
      sampleStripLabel: 'तयार प्रात्यक्षिक अहवाल निवडा:',
      sampleStripBadge: '१००% प्रात्यक्षिक व खाजगी',
      formTitle: 'लॅब चाचणी तपशील',
      testNameLabel: 'चाचणीचे नाव *',
      testNamePlaceholder: 'उदा. हिमोग्लोबिन, कोलेस्ट्रॉल, टीएसएच',
      resultValueLabel: 'निकाल (Value) *',
      resultValuePlaceholder: 'उदा. १०.२, १४८',
      unitLabel: 'एकक (Unit) *',
      unitPlaceholder: 'उदा. g/dL, mg/dL, %',
      rangeLabel: 'लॅब संदर्भ श्रेणी (Reference Range)',
      rangePlaceholder: 'उदा. १२.० - १५.५ g/dL (प्रौढ स्त्री)',
      contextLabel: 'अतिरिक्त माहिती (ऐच्छिक)',
      contextPlaceholder: 'उदा. उपाशीपोटी चाचणी, नियमित तपासणी',
      submitCta: 'सबमिट करा',
      loadingCta: 'लोड होत आहे...',
      statusBadges: {
        below: 'सामान्य श्रेणीपेक्षा कमी',
        normal: 'सामान्य श्रेणीत',
        above: 'सामान्य श्रेणीपेक्षा जास्त',
        inconclusive: 'तुलना प्रलंबित'
      },
      awaitingTitle: 'आपला लॅब अहवाल समजण्यास सोपा करण्यासाठी सज्ज',
      awaitingDesc:
        'वरील उदाहरणांपैकी एक निवडा किंवा आपले आकडे प्रविष्ट करा. सोपा सारांश आणि डॉक्टरांसाठी प्रश्न मिळवण्यासाठी "सबमिट करा" वर क्लिक करा.',
      reportSummaryBadge: 'अहवाल विश्लेषण',
      enteredLabel: 'प्रविष्ट केलेले:',
      rangeLabelText: 'संदर्भ श्रेणी:',
      defaultRangeFallback: 'प्रमाणित लॅब श्रेणी',
      plainLanguageHeader: 'सोप्या भाषेत या चाचणीचा काय अर्थ होतो:',
      factorsHeader: 'हा निकाल प्रभावित करू शकणारे दैनंदिन घटक:',
      questionsHeader: 'आपल्या डॉक्टरांना विचारण्यासाठी शिफारस केलेले प्रश्न:',
      disclaimerPrefix: 'प्रात्यक्षिक शैक्षणिक विश्लेषण:',
      disclaimerSuffix:
        'कोणत्याही निर्णयापूर्वी मूळ लॅब अहवाल तज्ज्ञ डॉक्टरांना दाखवा.',
      errorMessage: 'अहवाल सोपा करताना त्रुटी आली. कृपया इंटरनेट तपासा आणि पुन्हा प्रयत्न करा.',
      tabManual: 'आकडे मॅन्युअली भरा',
      tabImport: 'लॅब अहवाल आयात करा (Import)',
      importBadge: 'दस्तऐवज व्हिजन व PDF वाचन',
      importTitle: 'डायग्नोस्टिक लॅब अहवाल आयात करा',
      importSubtitle:
        'बायोमार्कर्सचे सोपे विश्लेषण मिळवण्यासाठी आपला लॅब अहवाल (PDF किंवा फोटो) अपलोड करा.',
      dropzoneTitle: 'आपले निकाल समजून घेण्यासाठी आपला लॅब अहवाल अपलोड करा.',
      dropzoneSubtitle: 'फाईल येथे ड्रॅग करून टाका किंवा आपल्या डिव्हाइसमधून निवडा',
      browseFiles: 'फाईल्स निवडा (Browse Files)',
      supportedFormats: 'PDF, JPG, JPEG आणि PNG फाईल्स स्वीकारल्या जातात (कमाल १० MB)',
      privacyPledge: '१००% इन-मेमरी प्रक्रिया • सर्व्हरवर कोणतीही फाईल साठवली जात नाही',
      selectedFileTitle: 'अहवाल फाईल तयार आहे',
      removeFile: 'फाईल काढा (Remove)',
      importAnother: 'दुसरी फाईल निवडा (Import Another)',
      analyzeBtn: 'अहवालाचे विश्लेषण करा (Analyze Report)',
      analyzingBtn: 'अहवालाचे विश्लेषण सुरू आहे...',
      analyzingHint: 'बायोमार्कर्स वाचून सोपे स्पष्टीकरण तयार केले जात आहे...',
      extractedTestsTitle: 'शोधलेले लॅब बायोमार्कर्स',
      testsCountLabel: (count: number) => `${count} चाचण्या आढळल्या`,
      measuredResultLabel: 'चाचणीचा निकाल:',
      referenceRangeLabel: 'लॅब संदर्भ श्रेणी:',
      notSpecified: 'अहवालात नमूद केलेले नाही',
      reassuranceTitle: 'चाचणी निकालांबद्दल महत्त्वाची माहिती',
      unreadableTitle: 'अहवाल स्पष्टपणे वाचता आला नाही',
      unreadableTryAgain: 'कृपया अधिक स्पष्ट, चांगल्या प्रकाशातील फोटो किंवा डिजिटल PDF अहवाल अपलोड करा.',
      errorOversized: 'अपलोड केलेली फाईल १० MB पेक्षा मोठी आहे. कृपया लहान फाईल निवडा.',
      errorUnsupportedType: 'असमर्थित फाईल प्रकार. कृपया फक्त PDF, JPG किंवा PNG फाईल अपलोड करा.',
      reviewTitle: 'शोधलेल्या चाचण्यांची पडताळणी करा',
      reviewSubtitle:
        'आपल्या मूळ अहवालाशी या आकड्यांची तुलना करा. स्पष्टीकरण मिळवण्यापूर्वी आपण कोणताही निकाल किंवा संदर्भ श्रेणी बदलू शकता.',
      confidenceLabel: 'अचूकता (Confidence)',
      tableHeaderTestName: 'चाचणीचे नाव (Test Name)',
      tableHeaderResult: 'निकालाचे आकडे (Result)',
      tableHeaderUnit: 'एकक (Unit)',
      tableHeaderRange: 'लॅब संदर्भ श्रेणी (Reference Range)',
      tableHeaderStatus: 'स्थिती (Status)',
      tableHeaderVerification: 'पडताळणी (Verification)',
      statusVerified: 'पडताळणी पूर्ण (Verified)',
      statusNeedsVerification: 'खात्री आवश्यक (Needs verification)',
      confirmAndExplainBtn: 'निकालांची पुष्टी करा आणि माहिती मिळवा',
      backToReviewBtn: 'आकडे बदला आणि पुन्हा माहिती मिळवा',
      addTestBtn: '+ आणखी एक चाचणी जोडा',
      viewRawText: 'मूळ मजकूर पहा',
      hideRawText: 'मूळ मजकूर लपवा',
      deleteTestRow: 'ओळ हटवा',
      sourceDocument: 'मूळ दस्तऐवज',
      sourcePreview: 'मूळ अहवाल पूर्वावलोकन'
    },
    preventive: {
      sectionBadge: 'प्रतिबंधात्मक आरोग्य दिनचर्या',
      title: 'प्रतिबंधात्मक आरोग्यसेवा',
      description: 'महत्त्वाच्या दैनंदिन सवयी, औषधे आणि डॉक्टरांच्या भेटींचे वेळापत्रक आपल्या फोनवर ट्रॅक करा.',
      privacyTitle: 'गोपनीयता हमी:',
      privacyBody:
        'स्मरणपत्रे आणि नोंदी पूर्णपणे आपल्या फोनच्या स्थानिक ब्राउझरमध्ये साठवल्या जातात. कोणताही खाजगी डेटा बाहेरील सर्व्हरवर पाठवला जात नाही.',
      privacyNotice:
        'सूचना: ब्राउझरमधील डेमो स्मरणपत्रे पार्श्वभूमी पुश सूचना किंवा एसएमएस पाठवत नाहीत. कृपया महत्त्वाची आठवण आपल्या मुख्य कॅलेंडर किंवा अलार्ममध्येही ठेवा.',
      remindersHeader: 'आरोग्य स्मरणपत्रे',
      activeItemsText: (count: number) => `${count} सक्रिय स्मरणपत्रे`,
      addReminderBtn: 'स्मरणपत्र जोडा',
      cancelBtn: 'रद्द करा',
      newReminderTitle: 'नवीन स्मरणपत्र नोंदणी',
      titlePlaceholder: 'उदा. बीपीचे औषध, थायरॉईड तपासणी',
      categoryLabel: 'प्रवर्ग',
      categories: {
        medication: 'औषध',
        appointment: 'डॉक्टरांची भेट',
        lab_test: 'लॅब चाचणी',
        lifestyle: 'जीवनशैली / व्यायाम'
      },
      timeLabel: 'वेळ',
      timePlaceholder: 'उदा. सकाळी ०८:३०',
      frequencyLabel: 'वारंवारता',
      frequencyPlaceholder: 'उदा. दररोज, आठवड्यातून एकदा',
      notesPlaceholder: 'अतिरिक्त माहिती (उदा. कोमट पाण्यासोबत घ्या)',
      saveReminderBtn: 'स्मरणपत्र जतन करा',
      noRemindersText: 'अद्याप कोणतेही स्मरणपत्र जोडलेले नाही. नवीन जोडण्यासाठी "स्मरणपत्र जोडा" वर क्लिक करा.',
      deleteReminderAria: 'स्मरणपत्र हटवा',
      trackerHeader: 'दैनंदिन वेलनेस ट्रॅकर',
      trackerSubtitle: 'निरोगी जीवनशैलीचे आधारस्तंभ',
      todayScoreText: 'आजचा स्कोअर',
      pillars: {
        hydrationTitle: 'पाण्याचे उद्दिष्ट (हायड्रेशन)',
        hydrationSub: 'उद्दिष्ट: ८ ग्लास / २.५ लिटर',
        physicalTitle: 'शारीरिक हालचाल / व्यायाम',
        physicalSub: '३० मिनिटे शतपावली, चालणे किंवा योग',
        sleepTitle: 'शांत व पुरेशी झोप',
        sleepSub: '७ ते ८ तास अखंड विश्रांती',
        pranayamaTitle: 'प्राणायाम व श्वसन',
        pranayamaSub: '१० मिनिटे अनुलोम-विलोम किंवा ध्यान',
        nutritionTitle: 'संतुलित व पौष्टिक आहार',
        nutritionSub: 'कडधान्ये, डाळी, ताजी कोशिंबीर व कमी मीठ'
      }
    },
    modals: {
      emergency: {
        title: 'गंभीर आपत्कालीन मार्गदर्शन',
        subtitle: 'भारत राष्ट्रीय वैद्यकीय ट्रायज इशारा',
        whyAlertAppeared: 'हा इशारा का दाखवला गेला:',
        immediateHelplinesHeading: 'तातडीचे आपत्कालीन संपर्क (भारत)',
        protocolHeading: 'जीव वाचवण्यासाठी तातडीचे नियम',
        rules: [
          'स्वतः वाहन चालवू नका: त्वरित कुटुंबातील व्यक्ती, शेजारी किंवा रुग्णवाहिकेची मदत घ्या.',
          'आरामदायी स्थितीत बसा: छातीत दाब किंवा धाप लागत असल्यास आरामशीर खुर्चीत बसा. मान व छातीभोवतीचे कपडे सैल करा.',
          'FAST स्ट्रोक तपासणी: चेहरा एका बाजूला वाकडा होणे, हातातील ताकद जाणे किंवा बोलताना अडखळणे आढळल्यास क्षणाचाही विलंब न करता रुग्णालयात जा.',
          'वैद्यकीय कागदपत्रे तयार ठेवा: नुकतीच दिलेली औषधे, आधार/आयुष्मान कार्ड आणि चालू औषधांची माहिती डॉक्टरांसाठी तयार ठेवा.'
        ],
        disclaimer:
          'IMD Care हे एक स्वयंचलित आरोग्य साक्षरता साधन असून ते थेट वैद्यकीय उपचार देत नाही. तातडीच्या प्रसंगी त्वरित आपत्कालीन वैद्यकीय सेवांशी संपर्क साधा.',
        closeBtn: 'बंद करा आणि परत जा'
      },
      disclaimer: {
        title: 'वैद्यकीय अस्वीकरण व गोपनीयता सूचना',
        subtitle: 'IMD Care — जबाबदार AI आरोग्य साक्षरता',
        alertTitle: 'वैद्यकीय सल्ला नाही:',
        alertBody:
          'IMD Care हे केवळ शैक्षणिक प्रात्यक्षिकासाठी तयार केलेले AI आरोग्य साक्षरता व्यासपीठ आहे. यातील माहिती व्यावसायिक वैद्यकीय निदान, उपचार किंवा प्रत्यक्ष डॉक्टरांचा सल्ला मानली जाऊ नये.',
        principlesHeading: 'मूलभूत तत्त्वे व सुरक्षा नियम',
        principles: {
          noRelationship:
            'डॉक्टर-रुग्ण नातेसंबंध नाही: या ॲपचा वापर म्हणजे प्रत्यक्ष डॉक्टरांचा सल्ला नाही. कोणत्याही वैद्यकीय प्रश्नासाठी नोंदणीकृत डॉक्टरांशीच (MBBS/MD) संपर्क साधा.',
          syntheticReports:
            'प्रात्यक्षिक अहवाल: सर्व दिलेले अहवाल प्रात्यक्षिकासाठी आहेत. आम्ही खरी रुग्णांची नावे किंवा खाजगी वैद्यकीय नोंदी गोळा करत नाही.',
          emergencyProtocol:
            'आपत्कालीन प्रोटोकॉल: गंभीर लक्षणांसाठी (छातीत वेदना, अचानक येणारी शिथिलता किंवा श्वास घेण्यास अडचण) भारतात त्वरित 112 किंवा 108 वर संपर्क करा.'
        },
        privacyHeading: 'शून्य खाजगी डेटा संकलन',
        privacyBody:
          'आम्ही आपल्या गोपनीयतेचा आदर करतो. संभाषण आणि लक्षण मूल्यांकन केवळ मेमरीमध्ये सुरक्षितपणे हाताळले जाते आणि कधीही साठवले जात नाही. स्मरणपत्रे केवळ आपल्या खाजगी ब्राउझर स्टोरेजमध्ये राहतात.',
        acknowledgeBtn: 'मी समजून घेतले आणि मला मान्य आहे'
      }
    },
    footer: {
      erssTitle: 'भारत राष्ट्रीय आपत्कालीन प्रतिसाद सहाय्य प्रणाली (ERSS)',
      erssDesc:
        'सर्व राज्यांमध्ये तातडीची वैद्यकीय मदत: ११२ (सर्व आणीबाणीसाठी) किंवा १०८ (रुग्णवाहिका) वर कॉल करा.',
      erssBtn: 'आपत्कालीन मार्गदर्शन (११२)',
      brandTagline:
        'उत्तम आरोग्य समजुतीची सुरुवात येथून होते. बहुभाषिक AI च्या माध्यमातून भारतातील आरोग्य साक्षरतेला गती देणे.',
      safetyBadge: 'नैतिक AI आणि वैद्यकीय सुरक्षेला सर्वोच्च प्राधान्य',
      corePlatformHeading: 'मुख्य प्लॅटफॉर्म',
      assistantLink: 'एआई आरोग्य सहाय्यक (मराठी, हिंदी, इंग्रजी)',
      symptomsLink: 'लक्षणांबाबत मार्गदर्शन',
      reportsLink: 'वैद्यकीय अहवाल सोप्या भाषेत समजून घ्या',
      preventiveLink: 'प्रतिबंधात्मक आरोग्यसेवा व स्मरणपत्रे',
      helplinesHeading: 'शासकीय हेल्पलाइन',
      nationalEmergency: 'राष्ट्रीय आपत्कालीन:',
      ambulance: 'वैद्यकीय रुग्णवाहिका:',
      mohfw: 'आरोग्य मंत्रालय हेल्पलाइन:',
      teleManas: 'टेली-मानस मानसिक आरोग्य:',
      trustHeading: 'विश्वास आणि नैतिकता',
      medicalDisclaimer: 'वैद्यकीय अस्वीकरण',
      zeroRetention: 'शून्य डेटा साठवणूक गोपनीयता',
      hackathonNote:
        'हेल्थकेअर एआय हॅकाथॉनसाठी तयार केलेले. ओपनएआय एकत्रीकरण आणि मजबूत ऑफलाइन प्रात्यक्षिक सुविधा.',
      copyright: '© 2025–2026 IMD Care. सर्व प्रात्यक्षिक उदाहरणे हॅकाथॉनसाठी राखीव.',
      privacyPolicy: 'गोपनीयता धोरण',
      triageSafety: 'वैद्यकीय ट्रायज सुरक्षा'
    }
  }
};
