const bankQuestions = [
    {
        id: "b1",
        question: "What does 'CRR' stand for in banking?",
        hindiQuestion: "बैंकिंग में 'CRR' का क्या अर्थ है?",
        options: [
            { optionId: 0, text: "Cash Reserve Ratio", hindiText: "नकद आरक्षित अनुपात" },
            { optionId: 1, text: "Credit Rate Ratio", hindiText: "क्रेडिट दर अनुपात" },
            { optionId: 2, text: "Central Reserve Rate", hindiText: "केंद्रीय आरक्षित दर" },
            { optionId: 3, text: "Current Ratio Requirement", hindiText: "वर्तमान अनुपात आवश्यकता" }
        ],
        answerId: 0
    },
    {
        id: "b2",
        question: "Which organization regulates banking in India?",
        hindiQuestion: "भारत में बैंकिंग को कौन सा संगठन नियंत्रित करता है?",
        options: [
            { optionId: 0, text: "SEBI", hindiText: "सेबी" },
            { optionId: 1, text: "RBI", hindiText: "आरबीआई" },
            { optionId: 2, text: "IRDA", hindiText: "आईआरडीए" },
            { optionId: 3, text: "Ministry of Finance", hindiText: "वित्त मंत्रालय" }
        ],
        answerId: 1
    },
    {
        id: "b3",
        question: "What is the full form of NEFT?",
        hindiQuestion: "NEFT का पूर्ण रूप क्या है?",
        options: [
            { optionId: 0, text: "National Electronic Funds Transfer", hindiText: "राष्ट्रीय इलेक्ट्रॉनिक निधि हस्तांतरण" },
            { optionId: 1, text: "National Exchange for Financial Transactions", hindiText: "वित्तीय लेनदेन के लिए राष्ट्रीय विनिमय" },
            { optionId: 2, text: "National Easy Funds Transfer", hindiText: "राष्ट्रीय आसान निधि हस्तांतरण" },
            { optionId: 3, text: "Network Electronic Fund Transfer", hindiText: "नेटवर्क इलेक्ट्रॉनिक निधि हस्तांतरण" }
        ],
        answerId: 0
    },
    {
        id: "b4",
        question: "What is the term for a bank account that allows deposits and withdrawals at any time?",
        hindiQuestion: "उस बैंक खाते का नाम क्या है जिसमें किसी भी समय जमा और निकासी की जा सकती है?",
        options: [
            { optionId: 0, text: "Current Account", hindiText: "चालू खाता" },
            { optionId: 1, text: "Fixed Deposit", hindiText: "सावधि जमा" },
            { optionId: 2, text: "Recurring Deposit", hindiText: "आवर्ती जमा" },
            { optionId: 3, text: "Term Loan", hindiText: "अवधि ऋण" }
        ],
        answerId: 0
    },
    {
        id: "b5",
        question: "Which type of card is directly linked to your bank account?",
        hindiQuestion: "कौन सा कार्ड आपके बैंक खाते से सीधे जुड़ा होता है?",
        options: [
            { optionId: 0, text: "Credit Card", hindiText: "क्रेडिट कार्ड" },
            { optionId: 1, text: "Debit Card", hindiText: "डेबिट कार्ड" },
            { optionId: 2, text: "Prepaid Card", hindiText: "प्रीपेड कार्ड" },
            { optionId: 3, text: "Gift Card", hindiText: "उपहार कार्ड" }
        ],
        answerId: 1
    },
    {
        id: "b6",
        question: "What does 'RTGS' stand for?",
        hindiQuestion: "'RTGS' का क्या अर्थ है?",
        options: [
            { optionId: 0, text: "Real Time Gross Settlement", hindiText: "वास्तविक समय सकल निपटान" },
            { optionId: 1, text: "Rapid Transfer Gateway System", hindiText: "तेज हस्तांतरण गेटवे सिस्टम" },
            { optionId: 2, text: "Reserve Transaction Guarantee Scheme", hindiText: "रिजर्व लेनदेन गारंटी योजना" },
            { optionId: 3, text: "Real Transfer of Government Securities", hindiText: "सरकारी प्रतिभूतियों का वास्तविक हस्तांतरण" }
        ],
        answerId: 0
    },
    {
        id: "b7",
        question: "What is the minimum age to open a bank savings account in India (with guardian)?",
        hindiQuestion: "भारत में बैंक बचत खाता खोलने की न्यूनतम आयु क्या है (अभिभावक के साथ)?",
        options: [
            { optionId: 0, text: "1 year", hindiText: "1 वर्ष" },
            { optionId: 1, text: "5 years", hindiText: "5 वर्ष" },
            { optionId: 2, text: "10 years", hindiText: "10 वर्ष" },
            { optionId: 3, text: "No minimum age", hindiText: "कोई न्यूनतम आयु नहीं" }
        ],
        answerId: 3
    },
    {
        id: "b8",
        question: "Which is the largest public sector bank in India?",
        hindiQuestion: "भारत का सबसे बड़ा सार्वजनिक क्षेत्र का बैंक कौन सा है?",
        options: [
            { optionId: 0, text: "Punjab National Bank", hindiText: "पंजाब नेशनल बैंक" },
            { optionId: 1, text: "State Bank of India", hindiText: "भारतीय स्टेट बैंक" },
            { optionId: 2, text: "Bank of Baroda", hindiText: "बैंक ऑफ बड़ौदा" },
            { optionId: 3, text: "Canara Bank", hindiText: "केनरा बैंक" }
        ],
        answerId: 1
    },
    {
        id: "b9",
        question: "What does 'IFSC' code help identify?",
        hindiQuestion: "'IFSC' कोड किसकी पहचान करने में मदद करता है?",
        options: [
            { optionId: 0, text: "Bank and Branch", hindiText: "बैंक और शाखा" },
            { optionId: 1, text: "Account Type", hindiText: "खाता प्रकार" },
            { optionId: 2, text: "Loan Category", hindiText: "ऋण श्रेणी" },
            { optionId: 3, text: "Currency Type", hindiText: "मुद्रा प्रकार" }
        ],
        answerId: 0
    },
    {
        id: "b10",
        question: "What type of deposit earns higher interest but cannot be withdrawn before maturity without penalty?",
        hindiQuestion: "किस प्रकार की जमा पर अधिक ब्याज मिलता है लेकिन परिपक्वता से पहले बिना जुर्माने के निकाला नहीं जा सकता?",
        options: [
            { optionId: 0, text: "Savings Account", hindiText: "बचत खाता" },
            { optionId: 1, text: "Fixed Deposit", hindiText: "सावधि जमा" },
            { optionId: 2, text: "Current Account", hindiText: "चालू खाता" },
            { optionId: 3, text: "Recurring Deposit", hindiText: "आवर्ती जमा" }
        ],
        answerId: 1
    },
    {
        id: "b11",
        question: "Which banking service allows you to withdraw money without visiting a branch?",
        hindiQuestion: "कौन सी बैंकिंग सेवा आपको शाखा में जाए बिना पैसे निकालने की अनुमति देती है?",
        options: [
            { optionId: 0, text: "ATM", hindiText: "एटीएम" },
            { optionId: 1, text: "RTGS", hindiText: "आरटीजीएस" },
            { optionId: 2, text: "NEFT", hindiText: "एनईएफटी" },
            { optionId: 3, text: "SWIFT", hindiText: "स्विफ्ट" }
        ],
        answerId: 0
    },
    {
        id: "b12",
        question: "What does 'SWIFT' stand for in international banking?",
        hindiQuestion: "अंतरराष्ट्रीय बैंकिंग में 'SWIFT' का क्या अर्थ है?",
        options: [
            { optionId: 0, text: "Society for Worldwide Interbank Financial Telecommunication", hindiText: "वैश्विक अंतरबैंक वित्तीय दूरसंचार सोसाइटी" },
            { optionId: 1, text: "Secure Worldwide Internet Funds Transfer", hindiText: "सुरक्षित वैश्विक इंटरनेट निधि हस्तांतरण" },
            { optionId: 2, text: "System for Web International Fund Transactions", hindiText: "वेब अंतरराष्ट्रीय निधि लेनदेन प्रणाली" },
            { optionId: 3, text: "Standard Worldwide Instant Fund Transfer", hindiText: "मानक वैश्विक तत्काल निधि हस्तांतरण" }
        ],
        answerId: 0
    },
    {
        id: "b13",
        question: "Which banking instrument is used for making payments without using cash?",
        hindiQuestion: "नकद के बिना भुगतान करने के लिए कौन सा बैंकिंग साधन उपयोग किया जाता है?",
        options: [
            { optionId: 0, text: "Cheque", hindiText: "चेक" },
            { optionId: 1, text: "Cash Slip", hindiText: "नकद स्लिप" },
            { optionId: 2, text: "Passbook", hindiText: "पासबुक" },
            { optionId: 3, text: "Deposit Slip", hindiText: "जमा स्लिप" }
        ],
        answerId: 0
    },
    {
        id: "b14",
        question: "What is the term for an account that earns interest daily but is accessible anytime?",
        hindiQuestion: "उस खाते का नाम क्या है जो रोजाना ब्याज अर्जित करता है लेकिन कभी भी उपलब्ध होता है?",
        options: [
            { optionId: 0, text: "Savings Account", hindiText: "बचत खाता" },
            { optionId: 1, text: "Recurring Deposit", hindiText: "आवर्ती जमा" },
            { optionId: 2, text: "Fixed Deposit", hindiText: "सावधि जमा" },
            { optionId: 3, text: "Loan Account", hindiText: "ऋण खाता" }
        ],
        answerId: 0
    },
    {
        id: "b15",
        question: "What does KYC stand for in banking?",
        hindiQuestion: "बैंकिंग में KYC का क्या अर्थ है?",
        options: [
            { optionId: 0, text: "Know Your Customer", hindiText: "अपने ग्राहक को जानें" },
            { optionId: 1, text: "Keep Your Cash", hindiText: "अपना नकद रखें" },
            { optionId: 2, text: "Know Your Currency", hindiText: "अपनी मुद्रा जानें" },
            { optionId: 3, text: "Keep Your Credit", hindiText: "अपना क्रेडिट रखें" }
        ],
        answerId: 0
    },
    {
        id: "b16",
        question: "Which bank is known as the 'Central Bank of India'?",
        hindiQuestion: "कौन सा बैंक 'भारत का केंद्रीय बैंक' के रूप में जाना जाता है?",
        options: [
            { optionId: 0, text: "Reserve Bank of India", hindiText: "भारतीय रिजर्व बैंक" },
            { optionId: 1, text: "State Bank of India", hindiText: "भारतीय स्टेट बैंक" },
            { optionId: 2, text: "Central Bank of India", hindiText: "सेंट्रल बैंक ऑफ इंडिया" },
            { optionId: 3, text: "ICICI Bank", hindiText: "आईसीआईसीआई बैंक" }
        ],
        answerId: 0
    },
    {
        id: "b17",
        question: "Which scheme provides accidental insurance linked to savings accounts in India?",
        hindiQuestion: "कौन सी योजना भारत में बचत खातों से जुड़ी दुर्घटना बीमा प्रदान करती है?",
        options: [
            { optionId: 0, text: "Pradhan Mantri Suraksha Bima Yojana", hindiText: "प्रधानमंत्री सुरक्षा बीमा योजना" },
            { optionId: 1, text: "Pradhan Mantri Jan Dhan Yojana", hindiText: "प्रधानमंत्री जन धन योजना" },
            { optionId: 2, text: "Pradhan Mantri Jeevan Jyoti Bima Yojana", hindiText: "प्रधानमंत्री जीवन ज्योति बीमा योजना" },
            { optionId: 3, text: "Atal Pension Yojana", hindiText: "अटल पेंशन योजना" }
        ],
        answerId: 0
    },
    {
        id: "b18",
        question: "Which of these is a digital payment method in India?",
        hindiQuestion: "इनमें से कौन सा भारत में डिजिटल भुगतान विधि है?",
        options: [
            { optionId: 0, text: "NEFT", hindiText: "एनईएफटी" },
            { optionId: 1, text: "UPI", hindiText: "यूपीआई" },
            { optionId: 2, text: "Cheque", hindiText: "चेक" },
            { optionId: 3, text: "Demand Draft", hindiText: "मांग ड्राफ्ट" }
        ],
        answerId: 1
    },
    {
        id: "b19",
        question: "What is the main purpose of a bank loan?",
        hindiQuestion: "बैंक ऋण का मुख्य उद्देश्य क्या है?",
        options: [
            { optionId: 0, text: "To deposit money", hindiText: "पैसे जमा करने के लिए" },
            { optionId: 1, text: "To provide funds for specific needs", hindiText: "विशिष्ट आवश्यकताओं के लिए धन प्रदान करने के लिए" },
            { optionId: 2, text: "To withdraw without charges", hindiText: "बिना शुल्क के निकासी करने के लिए" },
            { optionId: 3, text: "To print currency", hindiText: "मुद्रा छापने के लिए" }
        ],
        answerId: 1
    },
    {
        id: "b20",
        question: "Which Indian bank launched the YONO app?",
        hindiQuestion: "किस भारतीय बैंक ने YONO ऐप लॉन्च किया?",
        options: [
            { optionId: 0, text: "HDFC Bank", hindiText: "एचडीएफसी बैंक" },
            { optionId: 1, text: "State Bank of India", hindiText: "भारतीय स्टेट बैंक" },
            { optionId: 2, text: "ICICI Bank", hindiText: "आईसीआईसीआई बैंक" },
            { optionId: 3, text: "Axis Bank", hindiText: "एक्सिस बैंक" }
        ],
        answerId: 1
    }
];

export default bankQuestions;