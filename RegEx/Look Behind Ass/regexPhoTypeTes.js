const regex = /(?<!free)code/i;
console.log("freeCodeCamp".match(regex)); 
console.log("free code camp".match(regex)); 
console.log(
  "I need someone for free to write code for me".match(regex)
); 