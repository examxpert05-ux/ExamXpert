const catData = [
    {
        "id": "cat01",
        "question": "If the ratio of the ages of A and B is 5:3 and their sum is 40, what is A's age?",
        "hindiQuestion": "यदि A और B की आयु का अनुपात 5:3 है और उनकी आयु का योग 40 है, तो A की आयु क्या है?",
        "options": [
            { "optionId": 0, "text": "15", "hindiText": "15" },
            { "optionId": 1, "text": "20", "hindiText": "20" },
            { "optionId": 2, "text": "25", "hindiText": "25" },
            { "optionId": 3, "text": "30", "hindiText": "30" }
        ],
        "answerId": 2
    },
    {
        "id": "cat02",
        "question": "What is the value of x if 2x + 3 = 7?",
        "hindiQuestion": "यदि 2x + 3 = 7, तो x का मान क्या है?",
        "options": [
            { "optionId": 0, "text": "1", "hindiText": "1" },
            { "optionId": 1, "text": "2", "hindiText": "2" },
            { "optionId": 2, "text": "3", "hindiText": "3" },
            { "optionId": 3, "text": "4", "hindiText": "4" }
        ],
        "answerId": 1
    },
    {
        "id": "cat03",
        "question": "A train travels 120 km in 2 hours. What is its speed in km/h?",
        "hindiQuestion": "एक ट्रेन 2 घंटे में 120 किमी की यात्रा करती है। इसकी गति किमी/घंटा में क्या है?",
        "options": [
            { "optionId": 0, "text": "50", "hindiText": "50" },
            { "optionId": 1, "text": "60", "hindiText": "60" },
            { "optionId": 2, "text": "70", "hindiText": "70" },
            { "optionId": 3, "text": "80", "hindiText": "80" }
        ],
        "answerId": 1
    },
    {
        "id": "cat04",
        "question": "If the day after tomorrow is Wednesday, what day is today?",
        "hindiQuestion": "यदि परसों बुधवार है, तो आज कौन सा दिन है?",
        "options": [
            { "optionId": 0, "text": "Monday", "hindiText": "सोमवार" },
            { "optionId": 1, "text": "Tuesday", "hindiText": "मंगलवार" },
            { "optionId": 2, "text": "Sunday", "hindiText": "रविवार" },
            { "optionId": 3, "text": "Saturday", "hindiText": "शनिवार" }
        ],
        "answerId": 0
    },
    {
        "id": "cat05",
        "question": "The synonym of 'abundant' is:",
        "hindiQuestion": "'abundant' का पर्यायवाची शब्द है:",
        "options": [
            { "optionId": 0, "text": "Scarce", "hindiText": "कमी" },
            { "optionId": 1, "text": "Plentiful", "hindiText": "प्रचुर" },
            { "optionId": 2, "text": "Rare", "hindiText": "दुर्लभ" },
            { "optionId": 3, "text": "Limited", "hindiText": "सीमित" }
        ],
        "answerId": 1
    },
    {
        "id": "cat06",
        "question": "If a shirt costs Rs. 500 after a 20% discount, what was the original price?",
        "hindiQuestion": "यदि 20% छूट के बाद एक शर्ट की कीमत 500 रुपये है, तो मूल कीमत क्या थी?",
        "options": [
            { "optionId": 0, "text": "600", "hindiText": "600" },
            { "optionId": 1, "text": "625", "hindiText": "625" },
            { "optionId": 2, "text": "650", "hindiText": "650" },
            { "optionId": 3, "text": "700", "hindiText": "700" }
        ],
        "answerId": 1
    },
    {
        "id": "cat07",
        "question": "Which number is missing in the series: 2, 6, 12, 20, __, 42?",
        "hindiQuestion": "श्रृंखला में कौन सी संख्या गायब है: 2, 6, 12, 20, __, 42?",
        "options": [
            { "optionId": 0, "text": "28", "hindiText": "28" },
            { "optionId": 1, "text": "30", "hindiText": "30" },
            { "optionId": 2, "text": "32", "hindiText": "32" },
            { "optionId": 3, "text": "34", "hindiText": "34" }
        ],
        "answerId": 0
    },
    {
        "id": "cat08",
        "question": "The antonym of 'transparent' is:",
        "hindiQuestion": "'transparent' का विलोम शब्द है:",
        "options": [
            { "optionId": 0, "text": "Clear", "hindiText": "साफ" },
            { "optionId": 1, "text": "Opaque", "hindiText": "अपारदर्शी" },
            { "optionId": 2, "text": "Visible", "hindiText": "दृश्यमान" },
            { "optionId": 3, "text": "Lucid", "hindiText": "स्पष्ट" }
        ],
        "answerId": 1
    },
    {
        "id": "cat09",
        "question": "If 3x - 2y = 10 and x + y = 5, what is the value of x?",
        "hindiQuestion": "यदि 3x - 2y = 10 और x + y = 5, तो x का मान क्या है?",
        "options": [
            { "optionId": 0, "text": "3", "hindiText": "3" },
            { "optionId": 1, "text": "4", "hindiText": "4" },
            { "optionId": 2, "text": "5", "hindiText": "5" },
            { "optionId": 3, "text": "6", "hindiText": "6" }
        ],
        "answerId": 1
    },
    {
        "id": "cat10",
        "question": "A car travels 240 km in 4 hours. How long will it take to travel 360 km?",
        "hindiQuestion": "एक कार 4 घंटे में 240 किमी की यात्रा करती है। 360 किमी की यात्रा में कितना समय लगेगा?",
        "options": [
            { "optionId": 0, "text": "5 hours", "hindiText": "5 घंटे" },
            { "optionId": 1, "text": "6 hours", "hindiText": "6 घंटे" },
            { "optionId": 2, "text": "7 hours", "hindiText": "7 घंटे" },
            { "optionId": 3, "text": "8 hours", "hindiText": "8 घंटMangaluru" }
        ],
        "answerId": 1
    },
    {
        "id": "cat11",
        "question": "If 5 pens cost Rs. 100, how much will 8 pens cost?",
        "hindiQuestion": "यदि 5 पेन की कीमत 100 रुपये है, तो 8 पेन की कीमत कितनी होगी?",
        "options": [
            { "optionId": 0, "text": "140", "hindiText": "140" },
            { "optionId": 1, "text": "150", "hindiText": "150" },
            { "optionId": 2, "text": "160", "hindiText": "160" },
            { "optionId": 3, "text": "170", "hindiText": "170" }
        ],
        "answerId": 2
    },
    {
        "id": "cat12",
        "question": "Complete the analogy: Big : Small :: Fast : ?",
        "hindiQuestion": "समानता पूरी करें: बड़ा : छोटा :: तेज : ?",
        "options": [
            { "optionId": 0, "text": "Slow", "hindiText": "धीमा" },
            { "optionId": 1, "text": "Quick", "hindiText": "तेज" },
            { "optionId": 2, "text": "Large", "hindiText": "बड़ा" },
            { "optionId": 3, "text": "Heavy", "hindiText": "भारी" }
        ],
        "answerId": 0
    },
    {
        "id": "cat13",
        "question": "What is 20% of 250?",
        "hindiQuestion": "250 का 20% क्या है?",
        "options": [
            { "optionId": 0, "text": "40", "hindiText": "40" },
            { "optionId": 1, "text": "50", "hindiText": "50" },
            { "optionId": 2, "text": "60", "hindiText": "60" },
            { "optionId": 3, "text": "70", "hindiText": "70" }
        ],
        "answerId": 1
    },
    {
        "id": "cat14",
        "question": "Which word is closest in meaning to 'ephemeral'?",
        "hindiQuestion": "'ephemeral' के अर्थ के सबसे करीब कौन सा शब्द है?",
        "options": [
            { "optionId": 0, "text": "Permanent", "hindiText": "स्थायी" },
            { "optionId": 1, "text": "Temporary", "hindiText": "अस्थायी" },
            { "optionId": 2, "text": "Eternal", "hindiText": "शाश्वत" },
            { "optionId": 3, "text": "Lasting", "hindiText": "टिकाऊ" }
        ],
        "answerId": 1
    },
    {
        "id": "cat15",
        "question": "If a = 4 and b = 3, what is the value of a² + b²?",
        "hindiQuestion": "यदि a = 4 और b = 3, तो a² + b² का मान क्या है?",
        "options": [
            { "optionId": 0, "text": "25", "hindiText": "25" },
            { "optionId": 1, "text": "20", "hindiText": "20" },
            { "optionId": 2, "text": "15", "hindiText": "15" },
            { "optionId": 3, "text": "10", "hindiText": "10" }
        ],
        "answerId": 0
    },
    {
        "id": "cat16",
        "question": "In a class of 40 students, 60% are boys. How many girls are there?",
        "hindiQuestion": "40 छात्रों की एक कक्षा में 60% लड़के हैं। कितनी लड़कियाँ हैं?",
        "options": [
            { "optionId": 0, "text": "12", "hindiText": "12" },
            { "optionId": 1, "text": "14", "hindiText": "14" },
            { "optionId": 2, "text": "16", "hindiText": "16" },
            { "optionId": 3, "text": "18", "hindiText": "18" }
        ],
        "answerId": 2
    },
    {
        "id": "cat17",
        "question": "Find the odd one out: 4, 9, 16, 25, 30",
        "hindiQuestion": "अलग को चुनें: 4, 9, 16, 25, 30",
        "options": [
            { "optionId": 0, "text": "4", "hindiText": "4" },
            { "optionId": 1, "text": "9", "hindiText": "9" },
            { "optionId": 2, "text": "25", "hindiText": "25" },
            { "optionId": 3, "text": "30", "hindiText": "30" }
        ],
        "answerId": 3
    },
    {
        "id": "cat18",
        "question": "If the perimeter of a square is 48 cm, what is its area?",
        "hindiQuestion": "यदि एक वर्ग का परिमाप 48 सेमी है, तो इसका क्षेत्रफल क्या है?",
        "options": [
            { "optionId": 0, "text": "100 cm²", "hindiText": "100 सेमी²" },
            { "optionId": 1, "text": "144 cm²", "hindiText": "144 सेमी²" },
            { "optionId": 2, "text": "169 cm²", "hindiText": "169 सेमी²" },
            { "optionId": 3, "text": "196 cm²", "hindiText": "196 सेमी²" }
        ],
        "answerId": 1
    },
    {
        "id": "cat19",
        "question": "Which word does not belong: Big, Large, Huge, Tiny?",
        "hindiQuestion": "कौन सा शब्द नहीं belongs: बड़ा, विशाल, बहुत बड़ा, छोटा?",
        "options": [
            { "optionId": 0, "text": "Big", "hindiText": "बड़ा" },
            { "optionId": 1, "text": "Large", "hindiText": "विशाल" },
            { "optionId": 2, "text": "Huge", "hindiText": "बहुत बड़ा" },
            { "optionId": 3, "text": "Tiny", "hindiText": "छोटा" }
        ],
        "answerId": 3
    },
    {
        "id": "cat20",
        "question": "If 2x + y = 10 and x = 3, what is the value of y?",
        "hindiQuestion": "यदि 2x + y = 10 और x = 3, तो y का मान क्या है?",
        "options": [
            { "optionId": 0, "text": "2", "hindiText": "2" },
            { "optionId": 1, "text": "3", "hindiText": "3" },
            { "optionId": 2, "text": "4", "hindiText": "4" },
            { "optionId": 3, "text": "5", "hindiText": "5" }
        ],
        "answerId": 3
    }
];

export default catData;