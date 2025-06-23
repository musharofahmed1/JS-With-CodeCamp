//number
const num = 10;
console.log(num); //output: 10

//string
console.log("Hello World"); //output: Hello World

//Boolean
const isProgrammer = true;
console.log(isProgrammer); //output: true

//undefined
let x;
console.log(x); // Output: undefined

//null
let number = null;
console.log(number); // Output: null

//object

let person = {
    fullName : "Musharof A Musa",
    age : 25,
    isProgrammer : true,
};
console.log(person.fullName); //output: Musharof A Musa
console.log(person.age); //output : 25
console.log(person.isProgrammer); //output : true

//symbol
/* A Symbol is a special type of value in JavaScript that is always 
unique and cannot be changed. It's often used to create unique 
labels or identifiers for properties:*/

// Creating two symbols
const symbol1 = Symbol('mySymbol');
const symbol2 = Symbol('mySymbol');
// console.log(symbol1);
console.log(symbol1 === symbol2); // Outputs: false

