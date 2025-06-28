//replace content using capture group

// const regex = /free(code)camp/i;
// console.log("freecodecamp".replace(regex, "paidcodeworld")); //paidcodeworld


// // if we didn't know how many o's were in code? If we need a quantifier for one or more os:
// const regex = /free(co+de)camp/i;
// console.log("freecoooooooodecamp".replace(regex, "paidcodeworld"));

const regex = /free(co+de)camp/i;
console.log("freecoooooooodecamp".replace(regex, "paid$1world")); //paidcoooooooodeworld