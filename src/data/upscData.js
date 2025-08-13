const upscQuestions = [
    {
        id: "u1",
        question: "The Constitution of India was adopted on",
        options: [
            { optionId: 0, text: "15 August 1947" },
            { optionId: 1, text: "26 January 1950" },
            { optionId: 2, text: "26 November 1949" },
            { optionId: 3, text: "2 October 1950" }
        ],
        answerId: 1
    },
    {
        id: "u2",
        question: "Who wrote the National Song of India?",
        options: [
            { optionId: 0, text: "Rabindranath Tagore" },
            { optionId: 1, text: "Bankim Chandra Chatterjee" },
            { optionId: 2, text: "Kavi Pradeep" },
            { optionId: 3, text: "Subhash Chandra Bose" }
        ],
        answerId: 1
    },
    {
        id: "u3",
        question: "Which is the largest state by area in India?",
        options: [
            { optionId: 0, text: "Madhya Pradesh" },
            { optionId: 1, text: "Rajasthan" },
            { optionId: 2, text: "Maharashtra" },
            { optionId: 3, text: "Uttar Pradesh" }
        ],
        answerId: 1
    },
    {
        id: "u4",
        question: "INS Vikramaditya is a",
        options: [
            { optionId: 0, text: "Aircraft Carrier" },
            { optionId: 1, text: "Destroyer" },
            { optionId: 2, text: "Frigate" },
            { optionId: 3, text: "Submarine" }
        ],
        answerId: 0
    },
    {
        id: "u5",
        question: "Which planet is known as the Red Planet?",
        options: [
            { optionId: 0, text: "Venus" },
            { optionId: 1, text: "Mars" },
            { optionId: 2, text: "Jupiter" },
            { optionId: 3, text: "Saturn" }
        ],
        answerId: 1
    },
    {
        id: "u6",
        question: "The headquarters of WHO is at",
        options: [
            { optionId: 0, text: "Geneva" },
            { optionId: 1, text: "New York" },
            { optionId: 2, text: "Paris" },
            { optionId: 3, text: "London" }
        ],
        answerId: 0
    },
    {
        id: "u7",
        question: "Who is the author of 'Discovery of India'?",
        options: [
            { optionId: 0, text: "Jawaharlal Nehru" },
            { optionId: 1, text: "Mahatma Gandhi" },
            { optionId: 2, text: "S. Radhakrishnan" },
            { optionId: 3, text: "B. R. Ambedkar" }
        ],
        answerId: 0
    },
    {
        id: "u8",
        question: "Which acid is present in citrus fruits?",
        options: [
            { optionId: 0, text: "Tartaric acid" },
            { optionId: 1, text: "Citric acid" },
            { optionId: 2, text: "Lactic acid" },
            { optionId: 3, text: "Acetic acid" }
        ],
        answerId: 1
    },
    {
        id: "u9",
        question: "The longest river in India is",
        options: [
            { optionId: 0, text: "Godavari" },
            { optionId: 1, text: "Ganges" },
            { optionId: 2, text: "Brahmaputra" },
            { optionId: 3, text: "Narmada" }
        ],
        answerId: 1
    },
    {
        id: "u10",
        question: "Who proposed the theory of relativity?",
        options: [
            { optionId: 0, text: "Isaac Newton" },
            { optionId: 1, text: "Albert Einstein" },
            { optionId: 2, text: "Nikola Tesla" },
            { optionId: 3, text: "Galileo Galilei" }
        ],
        answerId: 1
    },
    {
        id: "u11",
        question: "Which is the smallest state in India by area?",
        options: [
            { optionId: 0, text: "Goa" },
            { optionId: 1, text: "Sikkim" },
            { optionId: 2, text: "Tripura" },
            { optionId: 3, text: "Nagaland" }
        ],
        answerId: 0
    },
    {
        id: "u12",
        question: "Who was the first President of India?",
        options: [
            { optionId: 0, text: "Dr. Rajendra Prasad" },
            { optionId: 1, text: "Sarvepalli Radhakrishnan" },
            { optionId: 2, text: "Zakir Hussain" },
            { optionId: 3, text: "V. V. Giri" }
        ],
        answerId: 0
    },
    {
        id: "u13",
        question: "Which is the national animal of India?",
        options: [
            { optionId: 0, text: "Elephant" },
            { optionId: 1, text: "Bengal Tiger" },
            { optionId: 2, text: "Lion" },
            { optionId: 3, text: "Leopard" }
        ],
        answerId: 1
    },
    {
        id: "u14",
        question: "Where is the Sun Temple located?",
        options: [
            { optionId: 0, text: "Konark" },
            { optionId: 1, text: "Modhera" },
            { optionId: 2, text: "Khajuraho" },
            { optionId: 3, text: "Somnath" }
        ],
        answerId: 0
    },
    {
        id: "u15",
        question: "Which Indian city is known as the 'City of Lakes'?",
        options: [
            { optionId: 0, text: "Bhopal" },
            { optionId: 1, text: "Udaipur" },
            { optionId: 2, text: "Srinagar" },
            { optionId: 3, text: "Hyderabad" }
        ],
        answerId: 1
    },
    {
        id: "u16",
        question: "In which year did India win its first Cricket World Cup?",
        options: [
            { optionId: 0, text: "1983" },
            { optionId: 1, text: "1987" },
            { optionId: 2, text: "1996" },
            { optionId: 3, text: "2003" }
        ],
        answerId: 0
    },
    {
        id: "u17",
        question: "Who is known as the 'Missile Man of India'?",
        options: [
            { optionId: 0, text: "Vikram Sarabhai" },
            { optionId: 1, text: "A. P. J. Abdul Kalam" },
            { optionId: 2, text: "Satish Dhawan" },
            { optionId: 3, text: "K. Sivan" }
        ],
        answerId: 1
    },
    {
        id: "u18",
        question: "Which Mughal Emperor built the Taj Mahal?",
        options: [
            { optionId: 0, text: "Akbar" },
            { optionId: 1, text: "Jahangir" },
            { optionId: 2, text: "Shah Jahan" },
            { optionId: 3, text: "Aurangzeb" }
        ],
        answerId: 2
    },
    {
        id: "u19",
        question: "Which Indian state has the longest coastline?",
        options: [
            { optionId: 0, text: "Andhra Pradesh" },
            { optionId: 1, text: "Maharashtra" },
            { optionId: 2, text: "Gujarat" },
            { optionId: 3, text: "Tamil Nadu" }
        ],
        answerId: 2
    },
    {
        id: "u20",
        question: "Who invented the telephone?",
        options: [
            { optionId: 0, text: "Alexander Graham Bell" },
            { optionId: 1, text: "Thomas Edison" },
            { optionId: 2, text: "Michael Faraday" },
            { optionId: 3, text: "Nikola Tesla" }
        ],
        answerId: 0
    }
];

export default upscQuestions;
