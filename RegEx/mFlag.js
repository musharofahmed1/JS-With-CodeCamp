const start = /^freecodecamp/im;
const end = /freecodecamp$/im;
const string = `I really love
freecodecamp
it's my favorite`;

console.log(start.test(string)); 
console.log(end.test(string)); 