//With the above code, when you type in the input, the character you type will be displayed in the 
// p element.

// const input = document.querySelector("input");
// const output = document.getElementById("output");

// input.addEventListener("keydown", (e) => {
// output.innerText = `You pressed the ${e.key} key`;
// });

//This is great, but we don't want to show the characters in the input as well. This is where our 
// preventDefault() method comes in. The default behavior of a keydown is to render the character 
// in the input. Let's avoid that by calling e.preventDefault():

const input = document.querySelector("input");
const output = document.getElementById("output");

input.addEventListener("keydown", (e) => {
  e.preventDefault();
  output.innerText = `You pressed the ${e.key} key`;
});



/*
Another common example of when to use the e.preventDefault method has to deal with form submissions.
 By default, submitting a form sends data to the server and reloads the page. Using
e.preventDefault() prevents this from happening.
*/
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // rest of code goes here
// });

