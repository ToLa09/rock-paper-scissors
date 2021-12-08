let counterComputer = 0;
let counterPlayer = 0;
let counterGame = 0;

function computerPlay () {
    let randomNumber = Math.ceil(Math.random()*3);    
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else if (randomNumber === 3) {
        return "scissors"
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You Win! Rock beats scissors!";
        } else if (computerSelection === "paper") {
            return "You Lose! Paper beats rock!";
        } else {
            return "It's a tie!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win! Paper beats rock!";
        } else if (computerSelection === "scissors") {
            return "You Lose! Scissors beats paper!";
        } else {
            return "It's a tie!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You Win! Scissors beats paper!";
        } else if (computerSelection === "rock") {
            return "You Lose! Rock beats scissors!";
        } else {
            return "It's a tie!";
        }
    }
}

function game(playerSelection) {  
    face.innerHTML = "";
    if ((playerSelection === "rock") || (playerSelection === "paper") || (playerSelection === "scissors")) {
        let outcome = playRound(playerSelection, computerPlay());
        result.innerText = outcome;
        if (outcome.includes("Win")) {
            counterPlayer += 1;
        } else if (outcome.includes("Lose")) {
            counterComputer += 1;
        }
        counterGame += 1;
        score.innerText = ("Player " + counterPlayer + " : Computer " + counterComputer);
        numberGame.innerText = ("Game " + counterGame);        
    }
    if (counterPlayer == 5) {
        result.innerText = "You won the game! To start a new game, just press an item again."
        face.innerHTML = "<img src=\"images/meme-trollface.png\">";
        counterPlayer = 0;
        counterComputer = 0;
        counterGame = 0;        
    }
    if (counterComputer == 5) {
        result.innerText = "You lost the game! To start a new game, just press an item again."
        face.innerHTML = "<img src=\"images/meme-child.png\">";
        counterPlayer = 0;
        counterComputer = 0;
        counterGame = 0;
    }    
}

function runGame(e) {
    console.log(e.target.id);
    if (e.target.id == "btnRock") {
        game("rock");
    } else if (e.target.id == "btnPaper") {
        game("paper");
    } else if (e.target.id == "btnScissors") {
        game("scissors");
    }
}

const output = document.querySelector(".output");
const result = document.createElement("p");
result.id = "result";
const score = document.createElement("p");
const numberGame = document.createElement("p");
const face = document.createElement("p");

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", runGame);
});

output.appendChild(result);
output.appendChild(score);
output.appendChild(numberGame);
output.appendChild(face);

