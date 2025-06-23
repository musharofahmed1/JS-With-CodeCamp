/* n this case, multiplyBy is a higher order function that returns a new function. This new function
 is specialized based on the factor passed to multiplyBy. This allows us to create 
 custom multiplication functions with ease.*/

function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  }
}

let double = multiplyBy(2);
let triple = multiplyBy(3);

console.log(double(5)); 
console.log(triple(5)); 