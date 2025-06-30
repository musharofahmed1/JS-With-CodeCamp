//Date
const now = new Date();
console.log(now); //current time based on setting of pc and location : 2025-06-30T08:04:01.833Z

//To Get Specific Date by user
const specificDate = new Date("July 4, 1776 12:00:00");
console.log(specificDate);

const now2 = new Date();
const date = now2.getDate();
console.log(date); // 30 : Today's Date

// running month
const now3 = new Date();
const month = now.getMonth();
console.log(month);

//this year
const now4 = new Date();
const year = now.getFullYear();
console.log(year);
// Output: 2025

console.log(Date.now())
//
//others method: getHours, getMinutes, getSeconds
//1751270980615
