const sscData = [
    {
        id: "s1",
        question: "Which is the largest planet in our solar system?",
        hindiQuestion: "हमारे सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
        options: [
            { optionId: 0, text: "Earth", hindiText: "पृथ्वी" },
            { optionId: 1, text: "Jupiter", hindiText: "बृहस्पति" },
            { optionId: 2, text: "Saturn", hindiText: "शनि" },
            { optionId: 3, text: "Mars", hindiText: "मंगल" }
        ],
        answerId: 1
    },
    {
        id: "s2",
        question: "Who is known as the Father of the Indian Constitution?",
        hindiQuestion: "भारतीय संविधान के जनक के रूप में कौन जाना जाता है?",
        options: [
            { optionId: 0, text: "Mahatma Gandhi", hindiText: "महात्मा गांधी" },
            { optionId: 1, text: "B. R. Ambedkar", hindiText: "बी. आर. अंबेडकर" },
            { optionId: 2, text: "Jawaharlal Nehru", hindiText: "जवाहरलाल नेहरू" },
            { optionId: 3, text: "Sardar Patel", hindiText: "सरदार पटेल" }
        ],
        answerId: 1
    },
    {
        id: "s3",
        question: "Which gas is essential for photosynthesis?",
        hindiQuestion: "प्रकाश संश्लेषण के लिए कौन सी गैस आवश्यक है?",
        options: [
            { optionId: 0, text: "Carbon dioxide", hindiText: "कार्बन डाइऑक्साइड" },
            { optionId: 1, text: "Oxygen", hindiText: "ऑक्सीजन" },
            { optionId: 2, text: "Nitrogen", hindiText: "नाइट्रोजन" },
            { optionId: 3, text: "Hydrogen", hindiText: "हाइड्रोजन" }
        ],
        answerId: 0
    },
    {
        id: "s4",
        question: "The currency of Japan is?",
        hindiQuestion: "जापान की मुद्रा क्या है?",
        options: [
            { optionId: 0, text: "Yen", hindiText: "येन" },
            { optionId: 1, text: "Won", hindiText: "वॉन" },
            { optionId: 2, text: "Dollar", hindiText: "डॉलर" },
            { optionId: 3, text: "Ringgit", hindiText: "रिंगिट" }
        ],
        answerId: 0
    },
    {
        id: "s5",
        question: "Who wrote the national anthem of India?",
        hindiQuestion: "भारत का राष्ट्रीय गान किसने लिखा?",
        options: [
            { optionId: 0, text: "Bankim Chandra Chatterjee", hindiText: "बंकिम चंद्र चटर्जी" },
            { optionId: 1, text: "Rabindranath Tagore", hindiText: "रवींद्रनाथ टैगोर" },
            { optionId: 2, text: "Sarojini Naidu", hindiText: "सरोजिनी नायडू" },
            { optionId: 3, text: "Subhas Chandra Bose", hindiText: "सुभाष चंद्र बोस" }
        ],
        answerId: 1
    },
    {
        id: "s6",
        question: "Which river is known as the 'Sorrow of Bihar'?",
        hindiQuestion: "कौन सी नदी 'बिहार का दुख' के रूप में जानी जाती है?",
        options: [
            { optionId: 0, text: "Kosi", hindiText: "कोसी" },
            { optionId: 1, text: "Ganga", hindiText: "गंगा" },
            { optionId: 2, text: "Son", hindiText: "सोन" },
            { optionId: 3, text: "Gandak", hindiText: "गंडक" }
        ],
        answerId: 0
    },
    {
        id: "s7",
        question: "The first battle of Panipat was fought in which year?",
        hindiQuestion: "पानीपत की पहली लड़ाई किस वर्ष में लड़ी गई थी?",
        options: [
            { optionId: 0, text: "1526", hindiText: "1526" },
            { optionId: 1, text: "1556", hindiText: "1556" },
            { optionId: 2, text: "1761", hindiText: "1761" },
            { optionId: 3, text: "1707", hindiText: "1707" }
        ],
        answerId: 0
    },
    {
        id: "s8",
        question: "Who invented the telephone?",
        hindiQuestion: "टेलीफोन का आविष्कार किसने किया?",
        options: [
            { optionId: 0, text: "Alexander Graham Bell", hindiText: "अलेक्जेंडर ग्राहम बेल" },
            { optionId: 1, text: "Thomas Edison", hindiText: "थॉमस एडिसन" },
            { optionId: 2, text: "Michael Faraday", hindiText: "माइकल फैराडे" },
            { optionId: 3, text: "Guglielmo Marconi", hindiText: "गूलिएल्मो मार्कोनी" }
        ],
        answerId: 0
    },
    {
        id: "s9",
        question: "Which Indian state is the largest producer of tea?",
        hindiQuestion: "भारत का कौन सा राज्य चाय का सबसे बड़ा उत्पादक है?",
        options: [
            { optionId: 0, text: "Assam", hindiText: "असम" },
            { optionId: 1, text: "Kerala", hindiText: "केरल" },
            { optionId: 2, text: "West Bengal", hindiText: "पश्चिम बंगाल" },
            { optionId: 3, text: "Tamil Nadu", hindiText: "तमिलनाडु" }
        ],
        answerId: 0
    },
    {
        id: "s10",
        question: "Which element is denoted by the chemical symbol 'O'?",
        hindiQuestion: "रासायनिक प्रतीक 'O' किस तत्व को दर्शाता है?",
        options: [
            { optionId: 0, text: "Oxygen", hindiText: "ऑक्सीजन" },
            { optionId: 1, text: "Osmium", hindiText: "ऑस्मियम" },
            { optionId: 2, text: "Oxide", hindiText: "ऑक्साइड" },
            { optionId: 3, text: "Opal", hindiText: "ओपल" }
        ],
        answerId: 0
    },
    {
        id: "s11",
        question: "Who was the first President of India?",
        hindiQuestion: "भारत के पहले राष्ट्रपति कौन थे?",
        options: [
            { optionId: 0, text: "Dr. Rajendra Prasad", hindiText: "डॉ. राजेंद्र प्रसाद" },
            { optionId: 1, text: "Sarvepalli Radhakrishnan", hindiText: "सर्वपल्ली राधाकृष्णन" },
            { optionId: 2, text: "Zakir Husain", hindiText: "जाकिर हुसैन" },
            { optionId: 3, text: "V. V. Giri", hindiText: "वी. वी. गिरी" }
        ],
        answerId: 0
    },
    {
        id: "s12",
        question: "What is the capital of Australia?",
        hindiQuestion: "ऑस्ट्रेलिया की राजधानी क्या है?",
        options: [
            { optionId: 0, text: "Sydney", hindiText: "सिडनी" },
            { optionId: 1, text: "Melbourne", hindiText: "मेलबर्न" },
            { optionId: 2, text: "Canberra", hindiText: "कैनबरा" },
            { optionId: 3, text: "Perth", hindiText: "पर्थ" }
        ],
        answerId: 2
    },
    {
        id: "s13",
        question: "Who discovered penicillin?",
        hindiQuestion: "पेनिसिलिन की खोज किसने की?",
        options: [
            { optionId: 0, text: "Alexander Fleming", hindiText: "अलेक्जेंडर फ्लेमिंग" },
            { optionId: 1, text: "Louis Pasteur", hindiText: "लुई पाश्चर" },
            { optionId: 2, text: "Joseph Lister", hindiText: "जोसेफ लिस्टर" },
            { optionId: 3, text: "Edward Jenner", hindiText: "एडवर्ड जेनर" }
        ],
        answerId: 0
    },
    {
        id: "s14",
        question: "Which planet is known as the 'Red Planet'?",
        hindiQuestion: "कौन सा ग्रह 'लाल ग्रह' के रूप में जाना जाता है?",
        options: [
            { optionId: 0, text: "Mercury", hindiText: "बुध" },
            { optionId: 1, text: "Venus", hindiText: "शुक्र" },
            { optionId: 2, text: "Mars", hindiText: "मंगल" },
            { optionId: 3, text: "Jupiter", hindiText: "बृहस्पति" }
        ],
        answerId: 2
    },
    {
        id: "s15",
        question: "In which state is the Sun Temple of Konark located?",
        hindiQuestion: "कोणार्क का सूर्य मंदिर किस राज्य में स्थित है?",
        options: [
            { optionId: 0, text: "Odisha", hindiText: "ओडिशा" },
            { optionId: 1, text: "Rajasthan", hindiText: "राजस्थान" },
            { optionId: 2, text: "Madhya Pradesh", hindiText: "मध्य प्रदेश" },
            { optionId: 3, text: "Gujarat", hindiText: "गुजरात" }
        ],
        answerId: 0
    },
    {
        id: "s16",
        question: "What is the SI unit of force?",
        hindiQuestion: "बल की SI इकाई क्या है?",
        options: [
            { optionId: 0, text: "Newton", hindiText: "न्यूटन" },
            { optionId: 1, text: "Joule", hindiText: "जूल" },
            { optionId: 2, text: "Pascal", hindiText: "पास्कल" },
            { optionId: 3, text: "Watt", hindiText: "वाट" }
        ],
        answerId: 0
    },
    {
        id: "s17",
        question: "Which is the smallest prime number?",
        hindiQuestion: "सबसे छोटी अभाज्य संख्या कौन सी है?",
        options: [
            { optionId: 0, text: "1", hindiText: "1" },
            { optionId: 1, text: "2", hindiText: "2" },
            { optionId: 2, text: "3", hindiText: "3" },
            { optionId: 3, text: "5", hindiText: "5" }
        ],
        answerId: 1
    },
    {
        id: "s18",
        question: "Who painted the Mona Lisa?",
        hindiQuestion: "मोना लिसा को किसने चित्रित किया?",
        options: [
            { optionId: 0, text: "Vincent van Gogh", hindiText: "विन्सेंट वैन गॉग" },
            { optionId: 1, text: "Leonardo da Vinci", hindiText: "लियोनार्डो दा विंची" },
            { optionId: 2, text: "Pablo Picasso", hindiText: "पाब्लो पिकासो" },
            { optionId: 3, text: "Michelangelo", hindiText: "माइकलएंजेलो" }
        ],
        answerId: 1
    },
    {
        id: "s19",
        question: "Which Indian city is known as the 'Pink City'?",
        hindiQuestion: "कौन सा भारतीय शहर 'गुलाबी शहर' के रूप में जाना जाता है?",
        options: [
            { optionId: 0, text: "Jaipur", hindiText: "जयपुर" },
            { optionId: 1, text: "Jodhpur", hindiText: "जोधपुर" },
            { optionId: 2, text: "Udaipur", hindiText: "उदयपुर" },
            { optionId: 3, text: "Bikaner", hindiText: "बीकानेर" }
        ],
        answerId: 0
    },
    {
        id: "s20",
        question: "What is the boiling point of water at sea level?",
        hindiQuestion: "समुद्र तल पर पानी का क्वथनांक क्या है?",
        options: [
            { optionId: 0, text: "90°C", hindiText: "90 डिग्री सेल्सियस" },
            { optionId: 1, text: "95°C", hindiText: "95 डिग्री सेल्सियस" },
            { optionId: 2, text: "100°C", hindiText: "100 डिग्री सेल्सियस" },
            { optionId: 3, text: "105°C", hindiText: "105 डिग्री सेल्सियस" }
        ],
        answerId: 2
    }
];

export default sscData;