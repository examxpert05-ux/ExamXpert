const upscQuestions = [
    {
        id: "u1",
        question: "The Constitution of India was adopted on",
        hindiQuestion: "भारत का संविधान कब अपनाया गया?",
        options: [
            { optionId: 0, text: "15 August 1947", hindiText: "15 अगस्त 1947" },
            { optionId: 1, text: "26 January 1950", hindiText: "26 जनवरी 1950" },
            { optionId: 2, text: "26 November 1949", hindiText: "26 नवंबर 1949" },
            { optionId: 3, text: "2 October 1950", hindiText: "2 अक्टूबर 1950" }
        ],
        answerId: 1
    },
    {
        id: "u2",
        question: "Who wrote the National Song of India?",
        hindiQuestion: "भारत का राष्ट्रीय गीत किसने लिखा?",
        options: [
            { optionId: 0, text: "Rabindranath Tagore", hindiText: "रवींद्रनाथ टैगोर" },
            { optionId: 1, text: "Bankim Chandra Chatterjee", hindiText: "बंकिम चंद्र चटर्जी" },
            { optionId: 2, text: "Kavi Pradeep", hindiText: "कवि प्रदीप" },
            { optionId: 3, text: "Subhash Chandra Bose", hindiText: "सुभाष चंद्र बोस" }
        ],
        answerId: 1
    },
    {
        id: "u3",
        question: "Which is the largest state by area in India?",
        hindiQuestion: "क्षेत्रफल के हिसाब से भारत का सबसे बड़ा राज्य कौन सा है?",
        options: [
            { optionId: 0, text: "Madhya Pradesh", hindiText: "मध्य प्रदेश" },
            { optionId: 1, text: "Rajasthan", hindiText: "राजस्थान" },
            { optionId: 2, text: "Maharashtra", hindiText: "महाराष्ट्र" },
            { optionId: 3, text: "Uttar Pradesh", hindiText: "उत्तर प्रदेश" }
        ],
        answerId: 1
    },
    {
        id: "u4",
        question: "INS Vikramaditya is a",
        hindiQuestion: "आईएनएस विक्रमादित्य क्या है?",
        options: [
            { optionId: 0, text: "Aircraft Carrier", hindiText: "विमानवाहक पोत" },
            { optionId: 1, text: "Destroyer", hindiText: "विध्वंसक" },
            { optionId: 2, text: "Frigate", hindiText: "फ्रिगेट" },
            { optionId: 3, text: "Submarine", hindiText: "पनडुब्बी" }
        ],
        answerId: 0
    },
    {
        id: "u5",
        question: "Which planet is known as the Red Planet?",
        hindiQuestion: "कौन सा ग्रह 'लाल ग्रह' के रूप में जाना जाता है?",
        options: [
            { optionId: 0, text: "Venus", hindiText: "शुक्र" },
            { optionId: 1, text: "Mars", hindiText: "मंगल" },
            { optionId: 2, text: "Jupiter", hindiText: "बृहस्पति" },
            { optionId: 3, text: "Saturn", hindiText: "शनि" }
        ],
        answerId: 1
    },
    {
        id: "u6",
        question: "The headquarters of WHO is at",
        hindiQuestion: "विश्व स्वास्थ्य संगठन का मुख्यालय कहाँ है?",
        options: [
            { optionId: 0, text: "Geneva", hindiText: "जिनेवा" },
            { optionId: 1, text: "New York", hindiText: "न्यूयॉर्क" },
            { optionId: 2, text: "Paris", hindiText: "पेरिस" },
            { optionId: 3, text: "London", hindiText: "लंदन" }
        ],
        answerId: 0
    },
    {
        id: "u7",
        question: "Who is the author of 'Discovery of India'?",
        hindiQuestion: "'डिस्कवरी ऑफ इंडिया' के लेखक कौन हैं?",
        options: [
            { optionId: 0, text: "Jawaharlal Nehru", hindiText: "जवाहरलाल नेहरू" },
            { optionId: 1, text: "Mahatma Gandhi", hindiText: "महात्मा गांधी" },
            { optionId: 2, text: "S. Radhakrishnan", hindiText: "एस. राधाकृष्णन" },
            { optionId: 3, text: "B. R. Ambedkar", hindiText: "बी. आर. अंबेडकर" }
        ],
        answerId: 0
    },
    {
        id: "u8",
        question: "Which acid is present in citrus fruits?",
        hindiQuestion: "खट्टे फलों में कौन सा अम्ल मौजूद होता है?",
        options: [
            { optionId: 0, text: "Tartaric acid", hindiText: "टार्टरिक अम्ल" },
            { optionId: 1, text: "Citric acid", hindiText: "साइट्रिक अम्ल" },
            { optionId: 2, text: "Lactic acid", hindiText: "लैक्टिक अम्ल" },
            { optionId: 3, text: "Acetic acid", hindiText: "एसिटिक अम्ल" }
        ],
        answerId: 1
    },
    {
        id: "u9",
        question: "The longest river in India is",
        hindiQuestion: "भारत की सबसे लंबी नदी कौन सी है?",
        options: [
            { optionId: 0, text: "Godavari", hindiText: "गोदावरी" },
            { optionId: 1, text: "Ganges", hindiText: "गंगा" },
            { optionId: 2, text: "Brahmaputra", hindiText: "ब्रह्मपुत्र" },
            { optionId: 3, text: "Narmada", hindiText: "नर्मदा" }
        ],
        answerId: 1
    },
    {
        id: "u10",
        question: "Who proposed the theory of relativity?",
        hindiQuestion: "सापेक्षता के सिद्धांत को किसने प्रस्तावित किया?",
        options: [
            { optionId: 0, text: "Isaac Newton", hindiText: "आइजक न्यूटन" },
            { optionId: 1, text: "Albert Einstein", hindiText: "अल्बर्ट आइंस्टीन" },
            { optionId: 2, text: "Nikola Tesla", hindiText: "निकोला टेस्ला" },
            { optionId: 3, text: "Galileo Galilei", hindiText: "गैलीलियो गैलीली" }
        ],
        answerId: 1
    },
    {
        id: "u11",
        question: "Which is the smallest state in India by area?",
        hindiQuestion: "क्षेत्रफल के हिसाब से भारत का सबसे छोटा राज्य कौन सा है?",
        options: [
            { optionId: 0, text: "Goa", hindiText: "गोवा" },
            { optionId: 1, text: "Sikkim", hindiText: "सिक्किम" },
            { optionId: 2, text: "Tripura", hindiText: "त्रिपुरा" },
            { optionId: 3, text: "Nagaland", hindiText: "नागालैंड" }
        ],
        answerId: 0
    },
    {
        id: "u12",
        question: "Who was the first President of India?",
        hindiQuestion: "भारत के पहले राष्ट्रपति कौन थे?",
        options: [
            { optionId: 0, text: "Dr. Rajendra Prasad", hindiText: "डॉ. राजेंद्र प्रसाद" },
            { optionId: 1, text: "Sarvepalli Radhakrishnan", hindiText: "सर्वपल्ली राधाकृष्णन" },
            { optionId: 2, text: "Zakir Hussain", hindiText: "जाकिर हुसैन" },
            { optionId: 3, text: "V. V. Giri", hindiText: "वी. वी. गिरी" }
        ],
        answerId: 0
    },
    {
        id: "u13",
        question: "Which is the national animal of India?",
        hindiQuestion: "भारत का राष्ट्रीय पशु कौन सा है?",
        options: [
            { optionId: 0, text: "Elephant", hindiText: "हाथी" },
            { optionId: 1, text: "Bengal Tiger", hindiText: "बंगाल टाइगर" },
            { optionId: 2, text: "Lion", hindiText: "शेर" },
            { optionId: 3, text: "Leopard", hindiText: "तेंदुआ" }
        ],
        answerId: 1
    },
    {
        id: "u14",
        question: "Where is the Sun Temple located?",
        hindiQuestion: "सूर्य मंदिर कहाँ स्थित है?",
        options: [
            { optionId: 0, text: "Konark", hindiText: "कोणार्क" },
            { optionId: 1, text: "Modhera", hindiText: "मोढेरा" },
            { optionId: 2, text: "Khajuraho", hindiText: "खजुराहो" },
            { optionId: 3, text: "Somnath", hindiText: "सोमनाथ" }
        ],
        answerId: 0
    },
    {
        id: "u15",
        question: "Which Indian city is known as the 'City of Lakes'?",
        hindiQuestion: "कौन सा भारतीय शहर 'झीलों का शहर' के रूप में जाना जाता है?",
        options: [
            { optionId: 0, text: "Bhopal", hindiText: "भोपाल" },
            { optionId: 1, text: "Udaipur", hindiText: "उदयपुर" },
            { optionId: 2, text: "Srinagar", hindiText: "श्रीनगर" },
            { optionId: 3, text: "Hyderabad", hindiText: "हैदराबाद" }
        ],
        answerId: 1
    },
    {
        id: "u16",
        question: "In which year did India win its first Cricket World Cup?",
        hindiQuestion: "भारत ने अपना पहला क्रिकेट विश्व कप किस वर्ष में जीता?",
        options: [
            { optionId: 0, text: "1983", hindiText: "1983" },
            { optionId: 1, text: "1987", hindiText: "1987" },
            { optionId: 2, text: "1996", hindiText: "1996" },
            { optionId: 3, text: "2003", hindiText: "2003" }
        ],
        answerId: 0
    },
    {
        id: "u17",
        question: "Who is known as the 'Missile Man of India'?",
        hindiQuestion: "'भारत का मिसाइल मैन' के रूप में कौन जाना जाता है?",
        options: [
            { optionId: 0, text: "Vikram Sarabhai", hindiText: "विक्रम साराभाई" },
            { optionId: 1, text: "A. P. J. Abdul Kalam", hindiText: "ए. पी. जे. अब्दुल कलाम" },
            { optionId: 2, text: "Satish Dhawan", hindiText: "सतीश धवन" },
            { optionId: 3, text: "K. Sivan", hindiText: "के. सिवन" }
        ],
        answerId: 1
    },
    {
        id: "u18",
        question: "Which Mughal Emperor built the Taj Mahal?",
        hindiQuestion: "किस मुगल सम्राट ने ताजमहल बनवाया?",
        options: [
            { optionId: 0, text: "Akbar", hindiText: "अकबर" },
            { optionId: 1, text: "Jahangir", hindiText: "जहाँगीर" },
            { optionId: 2, text: "Shah Jahan", hindiText: "शाहजहाँ" },
            { optionId: 3, text: "Aurangzeb", hindiText: "औरंगजेब" }
        ],
        answerId: 2
    },
    {
        id: "u19",
        question: "Which Indian state has the longest coastline?",
        hindiQuestion: "भारत का कौन सा राज्य सबसे लंबी तटरेखा रखता है?",
        options: [
            { optionId: 0, text: "Andhra Pradesh", hindiText: "आंध्र प्रदेश" },
            { optionId: 1, text: "Maharashtra", hindiText: "महाराष्ट्र" },
            { optionId: 2, text: "Gujarat", hindiText: "गुजरात" },
            { optionId: 3, text: "Tamil Nadu", hindiText: "तमिलनाडु" }
        ],
        answerId: 2
    },
    {
        id: "u20",
        question: "Who invented the telephone?",
        hindiQuestion: "टेलीफोन का आविष्कार किसने किया?",
        options: [
            { optionId: 0, text: "Alexander Graham Bell", hindiText: "अलेक्जेंडर ग्राहम बेल" },
            { optionId: 1, text: "Thomas Edison", hindiText: "थॉमस एडिसन" },
            { optionId: 2, text: "Michael Faraday", hindiText: "माइकल फैराडे" },
            { optionId: 3, text: "Nikola Tesla", hindiText: "निकोला टेस्ला" }
        ],
        answerId: 0
    }
];

export default upscQuestions;