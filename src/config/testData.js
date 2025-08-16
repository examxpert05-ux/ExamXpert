export const tests = [
  { 
    id: 't1', 
    title: 'Bank PO Test', 
    hindiTitle: 'बैंक पीओ टेस्ट',
    duration: 10, 
    description: 'Bank Probationary Officer', 
    hindiDescription: 'बैंक प्रोबेशनरी ऑफिसर',
    price: 99 
  },
  { 
    id: 't2', 
    title: 'SSC CGL Test', 
    hindiTitle: 'एसएससी सीजीएल टेस्ट',
    duration: 10, 
    description: 'Staff Selection Commission\nCombined Graduate Level', 
    hindiDescription: 'कर्मचारी चयन आयोग\nसंयुक्त स्नातक स्तर',
    price: 99 
  },
  { 
    id: 't3', 
    title: 'UPSC Test', 
    hindiTitle: 'यूपीएससी टेस्ट',
    duration: 10, 
    description: 'Union Public Service Commission', 
    hindiDescription: 'संघ लोक सेवा आयोग',
    price: 99 
  },
];

export const getTestById = (id) => tests.find(test => test.id === id);
export const getTestByTitle = (title) => tests.find(test => test.title === title);