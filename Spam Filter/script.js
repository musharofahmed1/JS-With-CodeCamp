//Step: 1
/*
To begin the project, retrieve the #message-input, #result-message, and #check-message-btn elements 
from the HTML document, and assign them to the variables messageInput, result,
and checkMessageButton, respectively.
*/

//using getElementById() access the html elements in JS
const messageInput = document.getElementById('message-input');
const result = document.getElementById("result-message");
const checkMessageButton = document.getElementById("check-message-btn");

//Step: 2
/*
Attach an event listener to your checkMessageButton, listening for the click event.
f the messageInput is empty, display an alert to the user with the message "Please enter a message.".

Then, exit the function execution.
*/
const helpRegex = /please help|assist me/i;

const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;

const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;

const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;

const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

const denyList = [helpRegex,dollarRegex,freeRegex,stockRegex,dearRegex];

const isSpam = (msg) => denyList.some(regex => regex.test(msg));


checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }
    result.textContent = isSpam(messageInput.value) ? "Oh no! This looks like a spam message." : "This message does not seem to contain any spam.";

     messageInput.value = "";

});


