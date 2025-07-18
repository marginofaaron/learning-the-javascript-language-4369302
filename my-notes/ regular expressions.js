// Declare a sentence and assign it to a variable
const sentence = "The quick brown fox jumped over the lazy dog.";

// 1. Check if the word "fox" is in the sentence
const hasFox = /fox/.test(sentence); 
console.log("Contains 'fox'? ➜", hasFox); // true

// 2. Match the word "The" (case-sensitive, must be capital T)
const matchThe = sentence.match(/The/); 
console.log("Exact match for 'The':", matchThe[0]); // "The"

// 3. Match the word "the" ignoring case (matches "The" or "the")
const matchTheLower = sentence.match(/the/i); 
console.log("Match for 'the' (case-insensitive):", matchTheLower[0]); // "The"

// 4. Check if the sentence ends with a period
const endsWithPeriod = /\.$/.test(sentence); 
console.log("Ends with a period? ➜", endsWithPeriod); // true

// 5. Match the first space character in the sentence
const firstSpace = sentence.match(/ /); 
console.log("First space is at index:", firstSpace.index); // 3
