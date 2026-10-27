import { Language } from '../types';

export interface AuthTranslations {
  // Brand & Welcome
  welcomeTitle: string;
  welcomeSubtitle: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroPoints: string[];

  // Login
  loginHeading: string;
  loginSubheading: string;
  loginBtn: string;
  loggingIn: string;
  dontHaveAccount: string;
  signUpLink: string;

  // Register
  registerHeading: string;
  registerSubheading: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  confirmPasswordLabel: string;
  confirmPasswordPlaceholder: string;
  registerBtn: string;
  registering: string;
  alreadyHaveAccount: string;
  loginLink: string;
  termsConsentPrefix: string;
  termsConsentLink: string;
  termsConsentSuffix: string;

  // Forgot Password
  forgotPasswordHeading: string;
  forgotPasswordSubheading: string;
  sendResetBtn: string;
  sendingReset: string;
  backToLoginBtn: string;
  resetLinkSentTitle: string;
  resetLinkSentDesc: string;

  // Common Form Fields
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  showPassword: string;
  hidePassword: string;
  rememberMe: string;
  forgotPasswordLink: string;
  backToHome: string;

  // Validation Errors
  nameRequired: string;
  nameMinLength: string;
  emailRequired: string;
  emailInvalid: string;
  passwordRequired: string;
  passwordMinLength: string;
  confirmPasswordRequired: string;
  passwordsDoNotMatch: string;
  termsRequired: string;

  // Alerts & Notifications
  loginSuccess: string;
  registerSuccessTitle: string;
  registerSuccessDesc: string;
  genericError: string;
  invalidCredentials: string;
  emailAlreadyInUse: string;

  // Supabase Setup State (when credentials not yet configured)
  setupBannerTitle: string;
  setupBannerDesc: string;
  setupInstructionsBtn: string;
  setupInstructionsClose: string;
  setupStep1: string;
  setupStep2: string;
  setupStep3: string;
  privacyGuarantee: string;
}

export const AUTH_TRANSLATIONS: Record<Language, AuthTranslations> = {
  en: {
    welcomeTitle: 'Namaste 🙏 Welcome Back to IMD Care',
    welcomeSubtitle: 'Your health journey continues here.',
    heroHeadline: 'Culturally Grounded Healthcare Intelligence',
    heroSubheadline:
      'Access your personal health reminders, private wellness logs, and clear AI guidance across English, Hindi, and Marathi.',
    heroPoints: [
      'Empathetic Multilingual Health AI',
      'Zero Sensitive Data Logging Guarantee',
      'Trusted 112 / 108 Emergency Safety Protocol'
    ],

    // Login
    loginHeading: 'Sign in to your account',
    loginSubheading: 'Enter your credentials to continue to IMD Care.',
    loginBtn: 'Log In',
    loggingIn: 'Signing in...',
    dontHaveAccount: "Don't have an account?",
    signUpLink: 'Create an account',

    // Register
    registerHeading: 'Create Your IMD Care Account',
    registerSubheading: 'Join India’s trusted health literacy and awareness platform.',
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'e.g. Aarav Sharma / Priya Patel',
    confirmPasswordLabel: 'Confirm Password',
    confirmPasswordPlaceholder: 'Re-enter your password',
    registerBtn: 'Create Account',
    registering: 'Creating account...',
    alreadyHaveAccount: 'Already have an account?',
    loginLink: 'Sign in here',
    termsConsentPrefix: 'I agree to the',
    termsConsentLink: 'Medical Safety Terms & Privacy Policy',
    termsConsentSuffix: 'and acknowledge that IMD Care provides educational guidance, not clinical prescription.',

    // Forgot Password
    forgotPasswordHeading: 'Reset Your Password',
    forgotPasswordSubheading:
      'Enter your registered email address and we will send you secure recovery instructions.',
    sendResetBtn: 'Send Reset Link',
    sendingReset: 'Sending reset email...',
    backToLoginBtn: 'Back to Log In',
    resetLinkSentTitle: 'Password Recovery Email Sent',
    resetLinkSentDesc:
      'If an account exists with this email address, you will receive password recovery instructions shortly. Please check your inbox and spam folder.',

    // Common Form Fields
    emailLabel: 'Email Address',
    emailPlaceholder: 'you@example.com',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Enter your password (min. 6 characters)',
    showPassword: 'Show password',
    hidePassword: 'Hide password',
    rememberMe: 'Remember me on this browser',
    forgotPasswordLink: 'Forgot password?',
    backToHome: 'Back to IMD Care Home',

    // Validation
    nameRequired: 'Please enter your full name.',
    nameMinLength: 'Name should be at least 2 characters.',
    emailRequired: 'Please enter your email address.',
    emailInvalid: 'Please enter a valid email address.',
    passwordRequired: 'Please enter your password.',
    passwordMinLength: 'Password must be at least 6 characters.',
    confirmPasswordRequired: 'Please confirm your password.',
    passwordsDoNotMatch: 'Passwords do not match.',
    termsRequired: 'You must consent to the Medical Safety Terms to create an account.',

    // Alerts
    loginSuccess: 'Successfully authenticated. Redirecting...',
    registerSuccessTitle: 'Registration Successful!',
    registerSuccessDesc:
      'Your account has been created. Check your inbox if Supabase email confirmation is enabled, or sign in now.',
    genericError: 'An unexpected authentication error occurred. Please try again.',
    invalidCredentials: 'Invalid email or password. Please verify your details.',
    emailAlreadyInUse: 'An account with this email address is already registered.',

    // Setup Notice
    setupBannerTitle: 'Supabase Authentication Setup Required',
    setupBannerDesc:
      'To enable live user login and registration, configure your Supabase project credentials in your environment variables.',
    setupInstructionsBtn: 'View Configuration Guide',
    setupInstructionsClose: 'Dismiss Guide',
    setupStep1: 'Create a free project at supabase.com and navigate to Project Settings -> API.',
    setupStep2: 'Copy your Project URL and anon public key.',
    setupStep3: 'Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env.local file.',
    privacyGuarantee: 'Privacy First: We never store medical consultation histories in your auth profile.'
  },

  hi: {
    welcomeTitle: 'नमस्ते 🙏 IMD Care में आपका फिर से स्वागत है',
    welcomeSubtitle: 'आपकी स्वास्थ्य यात्रा यहाँ जारी रहती है।',
    heroHeadline: 'भारतीय परिवेश के लिए समर्पित स्वास्थ्य AI',
    heroSubheadline:
      'अपने व्यक्तिगत स्वास्थ्य अनुस्मारक, दैनिक वेलनेस लॉग और हिंदी, अंग्रेजी व मराठी में स्पष्ट मार्गदर्शन प्राप्त करें।',
    heroPoints: [
      'सहानुभूतिपूर्ण बहुभाषी स्वास्थ्य AI',
      'शून्य संवेदनशील डेटा संग्रह गारंटी',
      'विश्वसनीय 112 / 108 आपातकालीन सुरक्षा प्रणाली'
    ],

    // Login
    loginHeading: 'अपने खाते में साइन इन करें',
    loginSubheading: 'IMD Care में आगे बढ़ने के लिए अपना विवरण दर्ज करें।',
    loginBtn: 'लॉग इन करें',
    loggingIn: 'लॉग इन हो रहा है...',
    dontHaveAccount: 'क्या आपके पास खाता नहीं है?',
    signUpLink: 'नया खाता बनाएं',

    // Register
    registerHeading: 'अपना IMD Care खाता बनाएं',
    registerSubheading: 'भारत के विश्वसनीय स्वास्थ्य साक्षरता मंच से आज ही जुड़ें।',
    fullNameLabel: 'पूरा नाम',
    fullNamePlaceholder: 'उदा. आरव शर्मा / प्रिया पटेल',
    confirmPasswordLabel: 'पासवर्ड की पुष्टि करें',
    confirmPasswordPlaceholder: 'अपना पासवर्ड दोबारा दर्ज करें',
    registerBtn: 'खाता बनाएं',
    registering: 'खाता बनाया जा रहा है...',
    alreadyHaveAccount: 'क्या पहले से खाता है?',
    loginLink: 'यहाँ लॉग इन करें',
    termsConsentPrefix: 'मैं',
    termsConsentLink: 'चिकित्सीय सुरक्षा शर्तों और गोपनीयता नीति',
    termsConsentSuffix: 'से सहमत हूँ और स्वीकार करता हूँ कि IMD Care शैक्षिक मार्गदर्शन प्रदान करता है, चिकित्सीय नुस्खा नहीं।',

    // Forgot Password
    forgotPasswordHeading: 'अपना पासवर्ड रीसेट करें',
    forgotPasswordSubheading:
      'अपना पंजीकृत ईमेल पता दर्ज करें और हम आपको सुरक्षित पासवर्ड रिकवरी निर्देश भेजेंगे।',
    sendResetBtn: 'रीसेट लिंक भेजें',
    sendingReset: 'लिंक भेजा जा रहा है...',
    backToLoginBtn: 'लॉग इन पर वापस जाएं',
    resetLinkSentTitle: 'पासवर्ड रिकवरी ईमेल भेज दिया गया है',
    resetLinkSentDesc:
      'यदि इस ईमेल से कोई खाता पंजीकृत है, तो आपको शीघ्र ही रीसेट निर्देश प्राप्त होंगे। कृपया अपना इनबॉक्स और स्पैम फ़ोल्डर जांचें।',

    // Common Form Fields
    emailLabel: 'ईमेल पता',
    emailPlaceholder: 'you@example.com',
    passwordLabel: 'पासवर्ड',
    passwordPlaceholder: 'अपना पासवर्ड दर्ज करें (न्यूनतम 6 अक्षर)',
    showPassword: 'पासवर्ड दिखाएं',
    hidePassword: 'पासवर्ड छिपाएं',
    rememberMe: 'इस ब्राउज़र पर मुझे याद रखें',
    forgotPasswordLink: 'पासवर्ड भूल गए?',
    backToHome: 'मुख्य पृष्ठ पर वापस जाएं',

    // Validation
    nameRequired: 'कृपया अपना पूरा नाम दर्ज करें।',
    nameMinLength: 'नाम में कम से कम 2 अक्षर होने चाहिए।',
    emailRequired: 'कृपया अपना ईमेल पता दर्ज करें।',
    emailInvalid: 'कृपया एक वैध ईमेल पता दर्ज करें।',
    passwordRequired: 'कृपया अपना पासवर्ड दर्ज करें।',
    passwordMinLength: 'पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।',
    confirmPasswordRequired: 'कृपया पासवर्ड की पुष्टि करें।',
    passwordsDoNotMatch: 'पासवर्ड मेल नहीं खाते।',
    termsRequired: 'खाता बनाने के लिए आपको चिकित्सीय सुरक्षा शर्तों से सहमत होना आवश्यक है।',

    // Alerts
    loginSuccess: 'सफलतापूर्वक प्रमाणित। पृष्ठ लोड हो रहा है...',
    registerSuccessTitle: 'पंजीकरण सफल रहा!',
    registerSuccessDesc:
      'आपका खाता तैयार हो गया है। यदि ईमेल पुष्टिकरण सक्रिय है तो इनबॉक्स जांचें, अथवा अब लॉग इन करें।',
    genericError: 'एक अप्रत्याशित प्रमाणीकरण त्रुटि हुई। कृपया पुनः प्रयास करें।',
    invalidCredentials: 'अमान्य ईमेल या पासवर्ड। कृपया विवरण की जांच करें।',
    emailAlreadyInUse: 'इस ईमेल पते से पहले से ही एक खाता पंजीकृत है।',

    // Setup Notice
    setupBannerTitle: 'Supabase प्रमाणीकरण सेटअप आवश्यक है',
    setupBannerDesc:
      'लाइव उपयोगकर्ता लॉगिन और पंजीकरण सक्रिय करने के लिए, अपने Supabase प्रोजेक्ट विवरण को एनवायरनमेंट वेरिएबल्स में जोड़ें।',
    setupInstructionsBtn: 'कॉन्फ़िगरेशन गाइड देखें',
    setupInstructionsClose: 'गाइड बंद करें',
    setupStep1: 'supabase.com पर एक निःशुल्क प्रोजेक्ट बनाएं और Project Settings -> API पर जाएं।',
    setupStep2: 'अपना Project URL और anon public key कॉपी करें।',
    setupStep3: 'अपने .env.local में NEXT_PUBLIC_SUPABASE_URL और NEXT_PUBLIC_SUPABASE_ANON_KEY जोड़ें।',
    privacyGuarantee: 'गोपनीयता सर्वोपरि: हम कभी भी आपकी मेडिकल बातचीत को प्रमाणीकरण प्रोफ़ाइल में नहीं रखते।'
  },

  mr: {
    welcomeTitle: 'नमस्कार 🙏 IMD Care मध्ये आपले पुन्हा स्वागत आहे',
    welcomeSubtitle: 'तुमचा आरोग्य प्रवास येथे सुरू राहतो.',
    heroHeadline: 'भारतीय जीवनशैलीसाठी समर्पित आरोग्य AI',
    heroSubheadline:
      'आपली औषध स्मरणपत्रे, दैनंदिन वेलनेस नोंदी आणि मराठी, हिंदी व इंग्रजीत सुरक्षित AI मार्गदर्शन मिळवा.',
    heroPoints: [
      'आपुलकीने संवाद साधणारा बहुभाषिक आरोग्य AI',
      'शून्य खाजगी आरोग्य डेटा संकलन हमी',
      'विश्वसनीय 112 / 108 आपत्कालीन सुरक्षा प्रणाली'
    ],

    // Login
    loginHeading: 'आपल्या खात्यात साइन इन करा',
    loginSubheading: 'IMD Care मध्ये पुढे जाण्यासाठी आपली माहिती प्रविष्ट करा.',
    loginBtn: 'लॉग इन करा',
    loggingIn: 'लॉग इन होत आहे...',
    dontHaveAccount: 'आपले खाते नाही का?',
    signUpLink: 'नवीन खाते तयार करा',

    // Register
    registerHeading: 'आपले IMD Care खाते तयार करा',
    registerSubheading: 'भारतातील विश्वासार्ह आरोग्य साक्षरता व्यासपीठाशी आजच जोडा.',
    fullNameLabel: 'पूर्ण नाव',
    fullNamePlaceholder: 'उदा. आरव शर्मा / प्रिया पाटील',
    confirmPasswordLabel: 'पासवर्डची पुष्टी करा',
    confirmPasswordPlaceholder: 'आपला पासवर्ड पुन्हा प्रविष्ट करा',
    registerBtn: 'खाते तयार करा',
    registering: 'खाते तयार होत आहे...',
    alreadyHaveAccount: 'आधीपासून खाते आहे का?',
    loginLink: 'येथे साइन इन करा',
    termsConsentPrefix: 'मी',
    termsConsentLink: 'वैद्यकीय सुरक्षा अटी व गोपनीयता धोरणाशी',
    termsConsentSuffix: 'सहमत आहे आणि IMD Care केवळ शैक्षणिक मार्गदर्शन देते, वैद्यकीय उपचार नाही हे मान्य करतो.',

    // Forgot Password
    forgotPasswordHeading: 'आपला पासवर्ड रीसेट करा',
    forgotPasswordSubheading:
      'आपला नोंदणीकृत ईमेल पत्ता प्रविष्ट करा आणि आम्ही आपल्याला सुरक्षित रीसेट सूचना पाठवू.',
    sendResetBtn: 'रीसेट लिंक पाठवा',
    sendingReset: 'लिंक पाठवली जात आहे...',
    backToLoginBtn: 'लॉग इन कडे परत जा',
    resetLinkSentTitle: 'पासवर्ड पुनर्प्राप्ती ईमेल पाठवला आहे',
    resetLinkSentDesc:
      'जर या ईमेल पत्त्यावर खाते अस्तित्वात असेल, तर आपल्याला लवकरच पासवर्ड रीसेट सूचना प्राप्त होतील. कृपया इनबॉक्स तपासा.',

    // Common Form Fields
    emailLabel: 'ईमेल पत्ता',
    emailPlaceholder: 'you@example.com',
    passwordLabel: 'पासवर्ड',
    passwordPlaceholder: 'आपला पासवर्ड प्रविष्ट करा (किमान ६ अक्षरे)',
    showPassword: 'पासवर्ड दाखवा',
    hidePassword: 'पासवर्ड लपवा',
    rememberMe: 'या ब्राउझरवर मला लक्षात ठेवा',
    forgotPasswordLink: 'पासवर्ड विसरलात?',
    backToHome: 'मुख्य पृष्ठावर परत जा',

    // Validation
    nameRequired: 'कृपया आपले पूर्ण नाव प्रविष्ट करा.',
    nameMinLength: 'नावात किमान २ अक्षरे असावीत.',
    emailRequired: 'कृपया आपला ईमेल पत्ता प्रविष्ट करा.',
    emailInvalid: 'कृपया वैध ईमेल पत्ता प्रविष्ट करा.',
    passwordRequired: 'कृपया आपला पासवर्ड प्रविष्ट करा.',
    passwordMinLength: 'पासवर्ड किमान ६ अक्षरांचा असावा.',
    confirmPasswordRequired: 'कृपया पासवर्डची पुष्टी करा.',
    passwordsDoNotMatch: 'पासवर्ड जुळत नाहीत.',
    termsRequired: 'खाते तयार करण्यासाठी आपल्याला वैद्यकीय सुरक्षा अटी मान्य करणे आवश्यक आहे.',

    // Alerts
    loginSuccess: 'प्रमाणीकरण यशस्वी. मुख्य पृष्ठ उघडत आहे...',
    registerSuccessTitle: 'नोंदणी यशस्वी झाली!',
    registerSuccessDesc:
      'आपले खाते तयार झाले आहे. ईमेल पडताळणी सक्रिय असल्यास इनबॉक्स तपासा किंवा आताच लॉग इन करा.',
    genericError: 'एक अनपेक्षित त्रुटी आली. कृपया पुन्हा प्रयत्न करा.',
    invalidCredentials: 'अवैध ईमेल किंवा पासवर्ड. कृपया माहिती तपासा.',
    emailAlreadyInUse: 'या ईमेल पत्त्यावर आधीपासूनच एक खाते नोंदणीकृत आहे.',

    // Setup Notice
    setupBannerTitle: 'Supabase प्रमाणीकरण सेटअप आवश्यक आहे',
    setupBannerDesc:
      'थेट वापरकर्ता लॉगिन आणि नोंदणी सुरू करण्यासाठी, आपल्या पर्यावरणात Supabase प्रकल्प क्रेडेन्शियल जोडा.',
    setupInstructionsBtn: 'कॉन्फिगरेशन मार्गदर्शक पहा',
    setupInstructionsClose: 'मार्गदर्शक बंद करा',
    setupStep1: 'supabase.com वर विनामूल्य प्रकल्प तयार करा आणि Project Settings -> API वर जा.',
    setupStep2: 'आपला Project URL आणि anon public key कॉपी करा.',
    setupStep3: 'आपल्या .env.local मध्ये NEXT_PUBLIC_SUPABASE_URL आणि NEXT_PUBLIC_SUPABASE_ANON_KEY जोडा.',
    privacyGuarantee: 'गोपनीयता प्रथम: आम्ही आपल्या आरोग्यविषयक चर्चा प्रमाणीकरण प्रोफाईलमध्ये कधीही साठवत नाही.'
  }
};
