//Negative lookahead ((?!pattern)) asserts that a certain pattern does NOT follow the current 
// position, without including it in the match.

const regex = /(?<!free)code/i;
console.log(regex.test("freeCodeCamp")); // false
console.log(regex.test("free code camp")); // true
console.log(
  regex.test("I need someone for free to write code for me")
); // true