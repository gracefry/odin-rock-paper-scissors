function getComputerChoice() {
    // Get random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * (4 - 1) + 1); 

    // Return choice based on number
    switch(randomNumber) {
        case 1:
            return "Rock";

        case 2:
            return "Paper";

        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // Standardise player response
    let lowerCase = playerSelection.toLowerCase();
    playerSelection = lowerCase.replace(lowerCase[0], lowerCase[0].toUpperCase());

    // Set win/lose statements
    let computerWin = `You Lose! ${computerSelection} beats ${playerSelection}.`
    let playerWin = `You Win! ${playerSelection} beats ${computerSelection}.`
    let tie = `It's a Tie! ${playerSelection} ties with ${computerSelection}.`

    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Rock") {
                div.textContent = tie;
                return "T";
            } else if (computerSelection == "Paper") {
                div.textContent = computerWin;
                return "C";
            } else if (computerSelection == "Scissors") {
                div.textContent = (playerWin);
                return "P";
            }
            break;
        
        case "Scissors":
            if (computerSelection == "Rock") {
                div.textContent = (computerWin);
                return "C";
            } else if (computerSelection == "Paper") {
                div.textContent = (playerWin);
                return "P";
            } else if (computerSelection == "Scissors") {
                div.textContent = (tie);
                return "T";
            }
            break;

        case "Paper":
            if (computerSelection == "Rock") {
                div.textContent = (playerWin);
                return "P";
            } else if (computerSelection == "Paper") {
                div.textContent = (tie);
                return "T";
            } else if (computerSelection == "Scissors") {
                div.textContent = (computerWin);
                return "C";
            }
            break;
    }
}

function checkScore() {
    // Calculate final score
    if (computerWins == 5) {
        alert(`Computer Wins! ${computerWins} v ${playerWins}`);
        computerWins = 0;
        playerWins = 0;
    } else if (playerWins == 5) {
        alert(`You Win! ${playerWins} v ${computerWins}`)
        computerWins = 0;
        playerWins = 0;
    }
}

function game(e) {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);
    switch (result) {
        case "C":
            computerWins++;
            break;
        
        case "P":
            playerWins++;
            break;

        case "T":
            break;
    }

    checkScore();
}

const body = document.querySelector("body");
const div = document.createElement("h3");
body.appendChild(div);

let computerWins = 0;
let playerWins = 0;

// Button presses

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', game)
    });


