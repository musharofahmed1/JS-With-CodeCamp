//Pattern
const regex = /freeCodeCamp/;

//test() Method: Same Same oile true return korbo
const regexTest = /freeCodeCamp/;
const test1 = regexTest.test("freeCodeCamp"); //true
const test2 = regexTest.test("e"); // false
console.log(test1); 
console.log(test2); 

//match() Method: The match method returns the match array for the string.
const regexMatch = /freeCodeCamp/;
const match = "freeCodeCamp".match(regexMatch);
console.log(match); // ["freeCodeCamp"]

//replace() Method: the regular expression to match (or a string), and the string to replace the 
// match with
const regexReplace = /Jessica/;
const str = "Jessica is rly kewl";
const replaced = str.replace(regexReplace, "freeCodeCamp");
console.log(replaced); // "freeCodeCamp is rly kewl"


//replaceAll Method:This method is used to replace all occurrences of a specified pattern with a new 
// string. This method will throw an error if you give it a regular expression without the global 
// modifier.

const text = "I hate JavaScript! I hate programming!";
const newText = text.replaceAll("hate", "love");
console.log(newText);  // "I love JavaScript! I love programming!"


//matchAll Method: This method is used to retrieve all matches of a given regular expression in a string
 const str1 = "JavaScript, Python, JavaScript, Swift, JavaScript";
const regexMatchAll = /JavaScript/g;

const iterator = str.matchAll(regexMatchAll);

for (let match of iterator) {
  console.log(match[0]); // "JavaScript" for each match
}

//Regular Expression Modifiers
//i Flag: This flag makes a regex ignore case.

const regexIModifiers = /freeCodeCamp/i;
console.log(regexIModifiers.test("freecodecamp")); // true
console.log(regexIModifiers.test("FREECODECAMP")); // true

//g Flag: This flag, or global modifier, allows your regular expression to match a pattern more than once.
const regexGModifiers = /freeCodeCamp/gi;
console.log(regexGModifiers.test("freeCodeCamp")); // true
console.log(regexGModifiers.test("freeCodeCamp is great")); // false

//Anchor Definition: The ^ anchor, at the beginning of the regular expression, says "match the start 
// of the string". The $ anchor, at the end of the regular expression, says "match the end of the 
// string".

const start = /^freeCodeCamp/i;
const end = /freeCodeCamp$/i;
console.log(start.test("freecodecamp")); // true
console.log(end.test("freecodecamp")); // true