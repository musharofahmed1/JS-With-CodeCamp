const date = new Date();
console.log(date);
//2025-06-30T08:11:18.563Z

//toISOString() format: YYYY-MM-DDTHH:mm:ss.sssZ
const date2 = new Date();
console.log(date2.toISOString());

//toLocaleDateString() : 6/30/2025
const date3 = new Date();
console.log(date3.toLocaleDateString());

//The locales parameter is a string representing the locale to use
const date4 = new Date();
console.log(date4.toLocaleDateString("fr-FR"));

//option

const date5 = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date5.toLocaleDateString("en-GB", options));

console.log(new Date(2003, 6, 27).getMonth());

console.log(new Date(2003, 6, 27).getFullYear());

const d = new Date("2021-12-25");
console.log(d.getFullYear())

const e = new Date("2021-12-25");
console.log(e.toISOString())

console.log(new Date().toLocaleTimeString());

const now = new Date();
console.log(now)