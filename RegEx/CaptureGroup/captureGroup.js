// Let's say we want to match freecodecamp twice, 
// with the same number of o's, but anywhere in the string.
const regex = /free(co+de)camp.*free\1camp/i;
console.log(regex.test("freecooooodecamp is great i love freecooooodecamp")); // true
console.log(regex.test("freecooooodecamp is great i love freecodecamp")); // false