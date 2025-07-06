function add(a, b) {
  return a + b;
}

console.log(add(3, 4)); // Output: 7

//This is a function that takes two arguments and returns their sum. Now, let's see how we can curry this function:

function curriedAdd(a) {
  return function(b) {
    return a + b;
  }
}

console.log(curriedAdd(3)(4)); // Output: 7

const curriedAverage = a => b => c => (a + b + c) / 3;