const pattern = "freecodecamp";
const str = "freecodecamp is the best we love freecodecamp";
const matched = str.matchAll(pattern);
const replaced = str.replaceAll(pattern, "freeCodeCamp");
console.log(matched);
console.log(replaced);