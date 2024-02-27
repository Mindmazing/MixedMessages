// data for the structure of the sentences
const verbs = ["Run", "Jump", "Write", "Read", "Sing", "Dance", "Think", "Laugh", "Cook", "Paint", "Drive", "Swim", "Teach", "Learn", "Build", "Grow", "Sell", "Buy", "Throw", "Catch"];
const subjects = ["your", "his", "her", "their", "our", "anybody's"];
const objects = ["Chair", "Table", "Computer", "Book", "Pen", "Phone", "Cup", "Key", "Wallet", "Glasses", "Watch", "Lamp", "Car", "Guitar", "Plant", "Ball", "Shoe", "Bag"];

// function to get random string from array
const getRandomWord = arr => arr[Math.floor(Math.random() * arr.length)];

// build sentence
const sentence = `Today you will: ${getRandomWord(verbs)} ${getRandomWord(subjects)} ${getRandomWord(objects)}.`;
console.log(sentence);