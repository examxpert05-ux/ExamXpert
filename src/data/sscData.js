const sscData = [
    {
        id: "s1",
        question: "Which is the largest planet in our solar system?",
        options: [
            { optionId: 0, text: "Earth" },
            { optionId: 1, text: "Jupiter" },
            { optionId: 2, text: "Saturn" },
            { optionId: 3, text: "Mars" }
        ],
        answerId: 1
    },
    {
        id: "s2",
        question: "Who is known as the Father of the Indian Constitution?",
        options: [
            { optionId: 0, text: "Mahatma Gandhi" },
            { optionId: 1, text: "B. R. Ambedkar" },
            { optionId: 2, text: "Jawaharlal Nehru" },
            { optionId: 3, text: "Sardar Patel" }
        ],
        answerId: 1
    },
    {
        id: "s3",
        question: "Which gas is essential for photosynthesis?",
        options: [
            { optionId: 0, text: "Carbon dioxide" },
            { optionId: 1, text: "Oxygen" },
            { optionId: 2, text: "Nitrogen" },
            { optionId: 3, text: "Hydrogen" }
        ],
        answerId: 0
    },
    {
        id: "s4",
        question: "The currency of Japan is?",
        options: [
            { optionId: 0, text: "Yen" },
            { optionId: 1, text: "Won" },
            { optionId: 2, text: "Dollar" },
            { optionId: 3, text: "Ringgit" }
        ],
        answerId: 0
    },
    {
        id: "s5",
        question: "Who wrote the national anthem of India?",
        options: [
            { optionId: 0, text: "Bankim Chandra Chatterjee" },
            { optionId: 1, text: "Rabindranath Tagore" },
            { optionId: 2, text: "Sarojini Naidu" },
            { optionId: 3, text: "Subhas Chandra Bose" }
        ],
        answerId: 1
    },
    {
        id: "s6",
        question: "Which river is known as the 'Sorrow of Bihar'?",
        options: [
            { optionId: 0, text: "Kosi" },
            { optionId: 1, text: "Ganga" },
            { optionId: 2, text: "Son" },
            { optionId: 3, text: "Gandak" }
        ],
        answerId: 0
    },
    {
        id: "s7",
        question: "The first battle of Panipat was fought in which year?",
        options: [
            { optionId: 0, text: "1526" },
            { optionId: 1, text: "1556" },
            { optionId: 2, text: "1761" },
            { optionId: 3, text: "1707" }
        ],
        answerId: 0
    },
    {
        id: "s8",
        question: "Who invented the telephone?",
        options: [
            { optionId: 0, text: "Alexander Graham Bell" },
            { optionId: 1, text: "Thomas Edison" },
            { optionId: 2, text: "Michael Faraday" },
            { optionId: 3, text: "Guglielmo Marconi" }
        ],
        answerId: 0
    },
    {
        id: "s9",
        question: "Which Indian state is the largest producer of tea?",
        options: [
            { optionId: 0, text: "Assam" },
            { optionId: 1, text: "Kerala" },
            { optionId: 2, text: "West Bengal" },
            { optionId: 3, text: "Tamil Nadu" }
        ],
        answerId: 0
    },
    {
        id: "s10",
        question: "Which element is denoted by the chemical symbol 'O'?",
        options: [
            { optionId: 0, text: "Oxygen" },
            { optionId: 1, text: "Osmium" },
            { optionId: 2, text: "Oxide" },
            { optionId: 3, text: "Opal" }
        ],
        answerId: 0
    },
    // New 10 questions
    {
        id: "s11",
        question: "Who was the first President of India?",
        options: [
            { optionId: 0, text: "Dr. Rajendra Prasad" },
            { optionId: 1, text: "Sarvepalli Radhakrishnan" },
            { optionId: 2, text: "Zakir Husain" },
            { optionId: 3, text: "V. V. Giri" }
        ],
        answerId: 0
    },
    {
        id: "s12",
        question: "What is the capital of Australia?",
        options: [
            { optionId: 0, text: "Sydney" },
            { optionId: 1, text: "Melbourne" },
            { optionId: 2, text: "Canberra" },
            { optionId: 3, text: "Perth" }
        ],
        answerId: 2
    },
    {
        id: "s13",
        question: "Who discovered penicillin?",
        options: [
            { optionId: 0, text: "Alexander Fleming" },
            { optionId: 1, text: "Louis Pasteur" },
            { optionId: 2, text: "Joseph Lister" },
            { optionId: 3, text: "Edward Jenner" }
        ],
        answerId: 0
    },
    {
        id: "s14",
        question: "Which planet is known as the 'Red Planet'?",
        options: [
            { optionId: 0, text: "Mercury" },
            { optionId: 1, text: "Venus" },
            { optionId: 2, text: "Mars" },
            { optionId: 3, text: "Jupiter" }
        ],
        answerId: 2
    },
    {
        id: "s15",
        question: "In which state is the Sun Temple of Konark located?",
        options: [
            { optionId: 0, text: "Odisha" },
            { optionId: 1, text: "Rajasthan" },
            { optionId: 2, text: "Madhya Pradesh" },
            { optionId: 3, text: "Gujarat" }
        ],
        answerId: 0
    },
    {
        id: "s16",
        question: "What is the SI unit of force?",
        options: [
            { optionId: 0, text: "Newton" },
            { optionId: 1, text: "Joule" },
            { optionId: 2, text: "Pascal" },
            { optionId: 3, text: "Watt" }
        ],
        answerId: 0
    },
    {
        id: "s17",
        question: "Which is the smallest prime number?",
        options: [
            { optionId: 0, text: "1" },
            { optionId: 1, text: "2" },
            { optionId: 2, text: "3" },
            { optionId: 3, text: "5" }
        ],
        answerId: 1
    },
    {
        id: "s18",
        question: "Who painted the Mona Lisa?",
        options: [
            { optionId: 0, text: "Vincent van Gogh" },
            { optionId: 1, text: "Leonardo da Vinci" },
            { optionId: 2, text: "Pablo Picasso" },
            { optionId: 3, text: "Michelangelo" }
        ],
        answerId: 1
    },
    {
        id: "s19",
        question: "Which Indian city is known as the 'Pink City'?",
        options: [
            { optionId: 0, text: "Jaipur" },
            { optionId: 1, text: "Jodhpur" },
            { optionId: 2, text: "Udaipur" },
            { optionId: 3, text: "Bikaner" }
        ],
        answerId: 0
    },
    {
        id: "s20",
        question: "What is the boiling point of water at sea level?",
        options: [
            { optionId: 0, text: "90°C" },
            { optionId: 1, text: "95°C" },
            { optionId: 2, text: "100°C" },
            { optionId: 3, text: "105°C" }
        ],
        answerId: 2
    }
];

export default sscData;
