const multiply = (a) => (b) => a * b;
const operations = [multiply(2), multiply(3)];
const result = operations.reduce((acc, fn) => fn(acc), 5);

console.log(result);