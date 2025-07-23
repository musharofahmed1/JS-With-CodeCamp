const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");

button.addEventListener("click",() => {
  const userInput = input.value;
  if(userInput.length === 0){
    alert("Please input a value");
    return;
  }

  // check palindorme
const output = document.getElementById("result");
const str = userInput.trim().toLowerCase().replace(/[^a-z0-9]/gi, '');
const reverseString = str.split('').reverse().join('').toLowerCase();

if(str === reverseString){
  output.textContent = `${userInput} is a palindrome`;
}else{
  output.textContent = `${userInput} is not a palindrome`
}
})

 
