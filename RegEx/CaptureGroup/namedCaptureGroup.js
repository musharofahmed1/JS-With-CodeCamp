const regex = /free(?<code>co+de)camp.*free\k<code>camp/i;
console.log(regex.test("freecooooodecamp is freecooooodecamp")); // true