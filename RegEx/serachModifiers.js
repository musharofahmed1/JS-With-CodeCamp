//Basic Str: /pattern/modifiers;

//Local Modifiers : const regex = /freeCodeCamp/i;

// const regex = /freeCodeCamp/i;
// console.log(regex.test("freeCodeCamp")); 
// console.log(regex.test("freeCodeCamp is great")); 
// console.log(regex.test("I love freeCodeCamp")); 
// console.log(regex.test("freecodecamp")); 
// console.log(regex.test("FREECODECAMP")); 
// console.log(regex.test("free")); 
// console.log(regex.test("code")); 
// console.log(regex.test("camp")); 

//Global Modifiers: const regex = /freeCodeCamp/gi;

const regex = /freeCodeCamp/gi;
console.log(regex.test("freeCodeCamp"));
console.log(regex.test("freeCodeCamp is great")); 
console.log(regex.test("I love freeCodeCamp")); 
console.log(regex.test("freecodecamp")); 
console.log(regex.test("FREECODECAMP")); 
console.log(regex.test("free")); 
console.log(regex.test("code")); 
console.log(regex.test("camp")); 