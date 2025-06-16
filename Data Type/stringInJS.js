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