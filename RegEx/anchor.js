//checking from strat
const start = /^freecodecamp/i;

//checking from end
const end = /freecodecamp$/i;

console.log(start.test("freecodecamp"));
console.log(end.test("freecodecamp")); 
console.log(start.test("freecodecamp is great")); 
console.log(end.test("freecodecamp is great")); 
console.log(start.test("i love freecodecamp")); 
console.log(end.test("i love freecodecamp")); 
console.log(start.test("have met freecodecamp's founder")); 
console.log(end.test("have met freecodecamp's founder")); 