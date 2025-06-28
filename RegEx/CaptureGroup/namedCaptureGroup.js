// const regex = /free(?<code>co+de)camp.*free\k<code>camp/i;
// console.log(regex.test("freecooooodecamp is freecooooodecamp")); // true

//To use our named capture group in a replace() call, we'd insert a dollar sign into the string, 
// followed by the name enclosed in less than and greater than signs:

const regex = /free(?<code>co+de)camp/i;
console.log("freecooooodecamp".replace(regex, "paid$<code>camp")); // paidcooooodecamp