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

function game() {
    let computerWins = 0;
    let playerWins = 0;
    let gameNumber = 0;

    // Button presses

    const rockButton = document.getElementById('rock');
    rockButton.addEventListener('click', () => {
        let playerSelection = "Rock";
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
    });

    const paperButton = document.querySelector('#paper');
    paperButton.addEventListener('click', () => {
        let playerSelection = "Paper";
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
    });

    const scissorsButton = document.querySelector('#scissors');
    scissorsButton.addEventListener('click', () => {
        let playerSelection = "Scissors";
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
    });

    // Calculate final score
    if (computerWins > playerWins) {
        console.log(`Computer Wins! ${computerWins} v ${playerWins}`);
    } else if (computerWins == playerWins) {
        console.log(`It's a Tie! ${computerWins} v ${playerWins}.`);
    } else {
        console.log(`You Win! ${playerWins} v ${computerWins}`)
    }

}

// Start automatically
const body = document.querySelector("body");
const div = document.createElement("div");
body.appendChild(div);

game();