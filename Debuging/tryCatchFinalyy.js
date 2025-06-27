//practice error handing

function processInput(input) {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string.");
  }

  return input.toUpperCase();
}

//The try block is used to wrap code that might throw an error. 
// It acts as a safe space to try something that could fail.
try {
  console.log("Starting to process input...");
  const result = processInput(9);
  console.log("Processed result:", result);
} 
//The catch block captures and handles errors that occur in the try block. 
// You can use the Error object inside catch to inspect what went wrong.
catch (error) {
  console.error("Error occurred:", error.message);
} 
processInput("Hello");

/*
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that runs regardless of whether an error occurred or not
}
  */