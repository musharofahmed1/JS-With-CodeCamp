// function truncateString(str, num) {

//   if (str.length > num) {
    
//     return str.slice(0, num) + "...";
//   } else {
    
//     return str;
//   }
// }

// console.log(truncateString("Hello, world!", 5));  
// console.log(truncateString("Musa", 10));          
// function exampleFunction() {
//   return "Hello";
//   return "World!";
// };

// exampleFunction();
// const exampleFunction = (param1, param2) => param1 + param2;
// console.log(exampleFunction(3, "Something"));
// const sum = (num1, num2) => num1 + num2
// console.log(sum(0, 0) + num2);
// let colors = ["red", "green", "blue"];
// console.log(colors.length);

// let fruits = ["apple", "banana"];
// fruits = ["This", "will", "not", "work"];
// console.log(fruits);

// let colors = ["red", "green", "blue"];
// let [primary, secondary, tertiary, quaternary = "yellow"] = colors;
// console.log(quaternary);
// let fruits = ["apple", "banana", "orange", "grape"];
// let [first, ...rest, last] = fruits;
// console.log(first, rest, last);

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 0, 6, 7);
// console.log(arr);
// let fruits = ["apple", "banana", "orange"];
// let fruitsCopy = [...fruits];
// console.log(fruitsCopy.length);
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];
// console.log(arr2);
// const colors = ["red", "blue", "green", "yellow"];
// colors.splice(1, 2, "purple");
// console.log(colors);
// const arr = ["apple", "banana", "cherry", "date"];
// const slicedArr = arr.slice(1, 3);
// console.log(slicedArr);
// const fruits = ["apple", "banana", "cherry", "apple", "orange"];

// fruits.splice(0, 1);

// console.log(fruits);
// const arr = ["o", "l", "l", "e", "h"];
// console.log(arr.join(""));

// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// delete car.year;
// console.log(car.year);
// let obj = {a: undefined};
// console.log(obj.a !== undefined);
let person = {
    name: "Alice",
    details: {
        age: 25,
        hobbies: ["reading", "swimming"]
    }
};

console.log(person.details.hobbies[1]);