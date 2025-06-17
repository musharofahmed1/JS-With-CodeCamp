//string
let developer = "Jessica";
developer = "Quincy";

console.log(developer)

//string concat
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName; 
console.log(fullName); // John Doe

//another way
let fName = "John";
let lName = "Doe";

let full = fName + lName; 
console.log(full); // "JohnDoe"

//concat using += operator
let greeting = 'Hello';
greeting += ', John!';


//using concat() function
let str1 = 'Hello';
let str2 = 'World';

let result = str1.concat(' ', str2); 
console.log(result); // Hello World

//ASCII char to ASCII value
let letter = "A";
console.log(letter.charCodeAt(0));  // Output: 65

//ASCII Value to Char
let char = String.fromCharCode(65);
console.log(char);  // Output: A

//slice method
let sentence = "Learning JavaScript is fun!";
let extracted = sentence.slice(9, -5);

console.log(extracted);