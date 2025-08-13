const bankQuestions = [
    {
        id: "b1",
        question: "What does 'CRR' stand for in banking?",
        options: [
            { optionId: 0, text: "Cash Reserve Ratio" },
            { optionId: 1, text: "Credit Rate Ratio" },
            { optionId: 2, text: "Central Reserve Rate" },
            { optionId: 3, text: "Current Ratio Requirement" }
        ],
        answerId: 0
    },
    {
        id: "b2",
        question: "Which organization regulates banking in India?",
        options: [
            { optionId: 0, text: "SEBI" },
            { optionId: 1, text: "RBI" },
            { optionId: 2, text: "IRDA" },
            { optionId: 3, text: "Ministry of Finance" }
        ],
        answerId: 1
    },
    {
        id: "b3",
        question: "What is the full form of NEFT?",
        options: [
            { optionId: 0, text: "National Electronic Funds Transfer" },
            { optionId: 1, text: "National Exchange for Financial Transactions" },
            { optionId: 2, text: "National Easy Funds Transfer" },
            { optionId: 3, text: "Network Electronic Fund Transfer" }
        ],
        answerId: 0
    },
    {
        id: "b4",
        question: "What is the term for a bank account that allows deposits and withdrawals at any time?",
        options: [
            { optionId: 0, text: "Current Account" },
            { optionId: 1, text: "Fixed Deposit" },
            { optionId: 2, text: "Recurring Deposit" },
            { optionId: 3, text: "Term Loan" }
        ],
        answerId: 0
    },
    {
        id: "b5",
        question: "Which type of card is directly linked to your bank account?",
        options: [
            { optionId: 0, text: "Credit Card" },
            { optionId: 1, text: "Debit Card" },
            { optionId: 2, text: "Prepaid Card" },
            { optionId: 3, text: "Gift Card" }
        ],
        answerId: 1
    },
    {
        id: "b6",
        question: "What does 'RTGS' stand for?",
        options: [
            { optionId: 0, text: "Real Time Gross Settlement" },
            { optionId: 1, text: "Rapid Transfer Gateway System" },
            { optionId: 2, text: "Reserve Transaction Guarantee Scheme" },
            { optionId: 3, text: "Real Transfer of Government Securities" }
        ],
        answerId: 0
    },
    {
        id: "b7",
        question: "What is the minimum age to open a bank savings account in India (with guardian)?",
        options: [
            { optionId: 0, text: "1 year" },
            { optionId: 1, text: "5 years" },
            { optionId: 2, text: "10 years" },
            { optionId: 3, text: "No minimum age" }
        ],
        answerId: 3
    },
    {
        id: "b8",
        question: "Which is the largest public sector bank in India?",
        options: [
            { optionId: 0, text: "Punjab National Bank" },
            { optionId: 1, text: "State Bank of India" },
            { optionId: 2, text: "Bank of Baroda" },
            { optionId: 3, text: "Canara Bank" }
        ],
        answerId: 1
    },
    {
        id: "b9",
        question: "What does 'IFSC' code help identify?",
        options: [
            { optionId: 0, text: "Bank and Branch" },
            { optionId: 1, text: "Account Type" },
            { optionId: 2, text: "Loan Category" },
            { optionId: 3, text: "Currency Type" }
        ],
        answerId: 0
    },
    {
        id: "b10",
        question: "What type of deposit earns higher interest but cannot be withdrawn before maturity without penalty?",
        options: [
            { optionId: 0, text: "Savings Account" },
            { optionId: 1, text: "Fixed Deposit" },
            { optionId: 2, text: "Current Account" },
            { optionId: 3, text: "Recurring Deposit" }
        ],
        answerId: 1
    },
    {
        id: "b11",
        question: "Which banking service allows you to withdraw money without visiting a branch?",
        options: [
            { optionId: 0, text: "ATM" },
            { optionId: 1, text: "RTGS" },
            { optionId: 2, text: "NEFT" },
            { optionId: 3, text: "SWIFT" }
        ],
        answerId: 0
    },
    {
        id: "b12",
        question: "What does 'SWIFT' stand for in international banking?",
        options: [
            { optionId: 0, text: "Society for Worldwide Interbank Financial Telecommunication" },
            { optionId: 1, text: "Secure Worldwide Internet Funds Transfer" },
            { optionId: 2, text: "System for Web International Fund Transactions" },
            { optionId: 3, text: "Standard Worldwide Instant Fund Transfer" }
        ],
        answerId: 0
    },
    {
        id: "b13",
        question: "Which banking instrument is used for making payments without using cash?",
        options: [
            { optionId: 0, text: "Cheque" },
            { optionId: 1, text: "Cash Slip" },
            { optionId: 2, text: "Passbook" },
            { optionId: 3, text: "Deposit Slip" }
        ],
        answerId: 0
    },
    {
        id: "b14",
        question: "What is the term for an account that earns interest daily but is accessible anytime?",
        options: [
            { optionId: 0, text: "Savings Account" },
            { optionId: 1, text: "Recurring Deposit" },
            { optionId: 2, text: "Fixed Deposit" },
            { optionId: 3, text: "Loan Account" }
        ],
        answerId: 0
    },
    {
        id: "b15",
        question: "What does KYC stand for in banking?",
        options: [
            { optionId: 0, text: "Know Your Customer" },
            { optionId: 1, text: "Keep Your Cash" },
            { optionId: 2, text: "Know Your Currency" },
            { optionId: 3, text: "Keep Your Credit" }
        ],
        answerId: 0
    },
    {
        id: "b16",
        question: "Which bank is known as the 'Central Bank of India'?",
        options: [
            { optionId: 0, text: "Reserve Bank of India" },
            { optionId: 1, text: "State Bank of India" },
            { optionId: 2, text: "Central Bank of India" },
            { optionId: 3, text: "ICICI Bank" }
        ],
        answerId: 0
    },
    {
        id: "b17",
        question: "Which scheme provides accidental insurance linked to savings accounts in India?",
        options: [
            { optionId: 0, text: "Pradhan Mantri Suraksha Bima Yojana" },
            { optionId: 1, text: "Pradhan Mantri Jan Dhan Yojana" },
            { optionId: 2, text: "Pradhan Mantri Jeevan Jyoti Bima Yojana" },
            { optionId: 3, text: "Atal Pension Yojana" }
        ],
        answerId: 0
    },
    {
        id: "b18",
        question: "Which of these is a digital payment method in India?",
        options: [
            { optionId: 0, text: "NEFT" },
            { optionId: 1, text: "UPI" },
            { optionId: 2, text: "Cheque" },
            { optionId: 3, text: "Demand Draft" }
        ],
        answerId: 1
    },
    {
        id: "b19",
        question: "What is the main purpose of a bank loan?",
        options: [
            { optionId: 0, text: "To deposit money" },
            { optionId: 1, text: "To provide funds for specific needs" },
            { optionId: 2, text: "To withdraw without charges" },
            { optionId: 3, text: "To print currency" }
        ],
        answerId: 1
    },
    {
        id: "b20",
        question: "Which Indian bank launched the YONO app?",
        options: [
            { optionId: 0, text: "HDFC Bank" },
            { optionId: 1, text: "State Bank of India" },
            { optionId: 2, text: "ICICI Bank" },
            { optionId: 3, text: "Axis Bank" }
        ],
        answerId: 1
    }
];

export default bankQuestions;
