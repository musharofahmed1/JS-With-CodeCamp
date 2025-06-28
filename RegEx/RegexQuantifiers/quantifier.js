//only allows exactly 4 digits
// const regex = /^\d{4}$/;
// console.log(regex.test("123")); // false
// console.log(regex.test("1234")); // true
// console.log(regex.test("12345")); // false
// console.log(regex.test("123456")); // false
// console.log(regex.test("1234567")); // false

//Allows minimum of 4 digits
// const regex = /^\d{4,}$/;
// console.log(regex.test("123")); // false
// console.log(regex.test("1234")); // true
// console.log(regex.test("12345")); // true
// console.log(regex.test("123456")); // true
// console.log(regex.test("1234567")); // true

//maximum of 6 digits, and a minimum of 4 digits.

// const regex = /^\d{4,6}$/;
// console.log(regex.test("123")); // false
// console.log(regex.test("1234")); // true
// console.log(regex.test("12345")); // true
// console.log(regex.test("123456")); // true
// console.log(regex.test("1234567")); // false