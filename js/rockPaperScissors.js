let counterComputer = 0;
let counterPlayer = 0;

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

function game() {
    for (let i=0; i<=5; i++) {
        let result="";
        let playerSelection = prompt("What do you choose?").toLowerCase();
        if ((playerSelection === "rock") || (playerSelection === "paper") || (playerSelection === "scissors")) {
            result = playRound(playerSelection, computerPlay());
            console.log(result);
            if (result.includes("Win")) {
                counterPlayer += 1;
            } else if (result.includes("Lose")) {
                counterComputer += 1;
            }
            console.log(counterComputer + " und " + counterPlayer);
            console.log(i);        
        } else {
            console.log("Wrong input! Type rock, paper or scissors.");
        }
    }
}

game();

//let playerSelection = prompt("What do you choose?").toLowerCase();

//if ((playerSelection === "rock") || (playerSelection === "paper") || (playerSelection === "scissors")) {
//    console.log(playRound(playerSelection, computerPlay()));        
//} else {
//    console.log("Wrong input! Type rock, paper or scissors.");
//}

