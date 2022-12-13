function getComputerChoice() {
    // Get random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * (4 - 1) + 1); 

    // Return choice based on number
    switch(randomNumber) {
        case 1:
            return "Rock";
            break;

        case 2:
            return "Paper";
            break;

        case 3:
            return "Scissors";
            break;
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
                return tie;
            } else if (computerSelection == "Paper") {
                return computerWin;
            } else if (computerSelection == "Scissors") {
                return playerWin;
            }
            break;
        
        case "Scissors":
            if (computerSelection == "Rock") {
                return computerWin;
            } else if (computerSelection == "Paper") {
                return playerWin;
            } else if (computerSelection == "Scissors") {
                return tie;
            }
            break;

        case "Paper":
            if (computerSelection == "Rock") {
                return playerWin;
            } else if (computerSelection == "Paper") {
                return tie;
            } else if (computerSelection == "Scissors") {
                return computerWin;
            }
            break;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, Paper, or Scissors?: ");
        let computerChoice = getComputerChoice();

        console.log(playRound(playerChoice, computerChoice));
    }
}