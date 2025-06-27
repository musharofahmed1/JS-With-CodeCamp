//Look Ahead: matching conditionally based on a following pattern
const regex = /free(?=code)/i;
console.log(regex.test("freeCodeCamp")); // true
console.log(regex.test("free code camp")); // false
console.log(
  regex.test("I need someone for free to write code for me")
); // false