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
// let person = {
//     name: "Alice",
//     details: {
//         age: 25,
//         hobbies: ["reading", "swimming"]
//     }
// };

// console.log(person.details.hobbies[1]);

// 1. You should access the averageRating property of recipe1.
// 2. You should assign the result of calling getAverageRating with recipe1.ratings to the averageRating property of recipe1.
// 3. You should access the totalIngredients property of recipe1.
// 4. You should assign the result of calling getTotalIngredients with recipe1.ingredients to the totalIngredients property of recipe1.
// 5. You should access the difficultyLevel property of recipe1.
// 6. You should assign the result of calling getDifficultyLevel with recipe1.cookingTime to the cookingTime property of recipe1.
// recipe1.averageRating = recipe1.ratings;
// recipe1.ratings = recipe1AverageRating;
// recipe1.totalIngredients;
// recipe1.ingredients = recipe1TotalIngredients;
// recipe1.difficultyLevel;
// recipe1.cookingTime = recipe1DifficultyLevel;

// const fruits = ['apple', 'banana', 'cherry'];

// for (let fruit of fruits) {
//   console.log(fruit.toUpperCase());
// }

// const fruit = {
//   name: 'apple',
//   color: 'red',
//   price: 0.99
// };

// for (const prop in fruit) {
//   console.log(fruit[prop]);
// }
// const person = {
//   name: 'John',
//   age: 30,
//   address: {
//     street: '123 Main St',
//     city: 'Anytown',
//     state: 'CA'
//   }
// };

// for (const prop in person) {
//   console.log(person[prop]);
// }

function isObject(obj) {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

// for (const prop in person) {
//   if (isObject(person[prop])) {
//     for (const nestedProp in person[prop]) {
//       console.log(person[prop][nestedProp]);
//     }
//   } else {
//     console.log(person[prop]);
//   }
// }
// const fruit = {
//   name: 'apple',
//   color: 'red',
//   price: 0.99
// };

// for (const prop in fruit) {
//   console.log(fruit[prop]);
// }

// function getWordCount(sentence){
//   let count = 1;
//   let word = " ";
//   for(let char of sentence){
//     if(word.includes(char)){
//       count++;
//     }
//   }
//   return count;
// }
// console.log(getWordCount("Musa A Musa"));
// let num = 5;

// function factorialCalculator(num){
//   let result = 1;
//   for(let i = 1; i <= num; i++){
//     result *= i;
//   }
//  return result;
// }

// let resultMsg = factorialCalculator(`Factorial of ${num} is ${factorial}`);
// console.log(resultMsg);
// for (let i = 0; i < 25; i += 2) {
//   if (i % 5 === 0) {
//     continue;
//   }
//   if (i % 13 === 0) {
//     break;
//   }
//   console.log(i);
// }
// const shoppingList = { tomatoes: 4, apples: 10 };
// for (const item in shoppingList) {
//   console.log(item);
// }
// for (let i = 1; i <= 13; i++) {
//   console.log(i);
// }
// //1,2..
// for (let i = 2; i <= 13; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }
// const fruits = ["Mango", "Pineapple", "Oranges"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// let x = 0
// while (x < 5) {
//   console.log("in the loop");
// }
// let obj = { name: "John", age: 30 };
// console.log(obj.toString());

let arr = new Array(3);
console.log(arr);