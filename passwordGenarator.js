// ✅ Function to generate a random password of a given length
function generatePassword(lengthOfPass) {
  // A string containing all possible characters you can use in the password
  let sourceString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  // Variable to store the final generated password
  let result = "";

  // Loop runs exactly 'lengthOfPass' times to build the password character by character
  for (let i = 0; i < lengthOfPass; i++) {
    // Generate a random index between 0 and (sourceString.length - 1)
    const randomIndex = Math.floor(Math.random() * sourceString.length);

    // Append the character at the random index from sourceString to result
    result += sourceString[randomIndex];
  }

  // Return the final generated password
  return result;
}

// ✅ Call the function to generate a password of length 8
const password = generatePassword(8);

// ✅ Output the generated password to the console with a label
console.log(`Generated Password: ${password}`);
