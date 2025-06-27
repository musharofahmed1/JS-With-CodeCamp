//Basic Str: /pattern/modifiers;

//Local Modifiers : const regex = /freeCodeCamp/i;

// const regex = /freeCodeCamp/i;
// console.log(regex.test("freeCodeCamp")); // true
// console.log(regex.test("freeCodeCamp is great")); // true
// console.log(regex.test("I love freeCodeCamp")); // true
// console.log(regex.test("freecodecamp")); // false
// console.log(regex.test("FREECODECAMP")); // false
// console.log(regex.test("free")); // false
// console.log(regex.test("code")); // false
// console.log(regex.test("camp")); // false

//Global Modifiers: const regex = /freeCodeCamp/gi;

const regex = /freeCodeCamp/gi;
console.log(regex.test("freeCodeCamp")); // true
console.log(regex.test("freeCodeCamp is great")); // false
console.log(regex.test("I love freeCodeCamp")); // true
console.log(regex.test("freecodecamp")); // false
console.log(regex.test("FREECODECAMP")); // true
console.log(regex.test("free")); // false
console.log(regex.test("code")); // false
console.log(regex.test("camp")); // false