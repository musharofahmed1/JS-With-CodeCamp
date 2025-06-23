const options = ["Rock", "Paper","Scissors"];

function getRandomComputerResult() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(player,computer){
    if(player=="Rock" && computer=="Scissors" || player=="Scissors" && computer=="Paper" ||player=="Paper" && computer=="Rock" ){
        return true
    }
    else{
        return false;
    }
}

let playerScore = 0;
let computerScore = 0;


function getRoundResults(userOption){ //round or result der
    const computerResult = getRandomComputerResult(); //random computer choose
    if(hasPlayerWonTheRound(userOption,computerResult)){
        playerScore+=1;
         return `Player wins! ${userOption} beats ${[computerResult]}`
    }
    else if(userOption==computerResult){
        return `It's a tie! Both chose ${userOption}`
    }
    else{
        computerScore+=1
        return `Computer wins! ${computerResult} beats ${userOption}`
    }  
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");

function showResults(userOption){
    roundResultsMsg
}