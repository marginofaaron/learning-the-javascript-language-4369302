// JS Comparison Operators

// create vars
const one = 1, two = 2;
console.log(one, two);

// no data conversion (strict)
console.log(one === one);
console.log(one === two);
console.log(one === 1);
console.log(one === '1');

// implicit data conversion (non-strict)
console.log(one == one);
console.log(one == two);
console.log(one == 1);
console.log(one == '1');

// implicit data conversion (relational)
console.log(one > one);
console.log(one < two);
console.log(one >= 1);
console.log(one > '1');