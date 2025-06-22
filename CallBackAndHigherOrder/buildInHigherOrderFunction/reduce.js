//single output
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,0);

console.log(sum); 

//using different variable
const n = [1,2,3,4,5];

const result = n.reduce((sum,num) => sum + num, 0);
console.log(result);