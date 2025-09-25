//JS Logical Operators

// logical operators
let animal1 = 'monkey', animal2 = 'bear', animal3 = 'tiger';

// and
console.log(animal1 === 'monkey' && animal2 === 'bear');

// or
console.log(animal1 === 'ape' || animal2 === 'bear');

// ands are eval before ors
// can use parentheses
console.log((animal1 === 'ape' || animal2 === 'bear') && animal3 === 'tiger');