function add(a, b) {
  return a + b;
}

//side effect
function greet(name) {
  console.log(`Hello, ${name}!`);
}

//In functional programming, we might rewrite this as:

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));