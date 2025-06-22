//without condition
//The elements are compared as strings based on UTF-16 code units.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits);

//with condition
const numbers = [414, 200, 5, 10, 3];

numbers.sort((a, b) => a - b); 
/*Sorts the array in ascending order using the sort() method with a compare function:

If a - b is negative, a comes before b

If a - b is positive, a comes after b

If a - b is 0, their order stays the same*/

console.log(numbers); 