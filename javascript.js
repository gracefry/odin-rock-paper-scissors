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
                console.log(tie);
                return "T";
            } else if (computerSelection == "Paper") {
                console.log(computerWin);
                return "C";
            } else if (computerSelection == "Scissors") {
                console.log(playerWin);
                return "P";
            }
            break;
        
        case "Scissors":
            if (computerSelection == "Rock") {
                console.log(computerWin);
                return "C";
            } else if (computerSelection == "Paper") {
                console.log(playerWin);
                return "P";
            } else if (computerSelection == "Scissors") {
                console.log(tie);
                return "T";
            }
            break;

        case "Paper":
            if (computerSelection == "Rock") {
                console.log(playerWin);
                return "P";
            } else if (computerSelection == "Paper") {
                console.log(tie);
                return "T";
            } else if (computerSelection == "Scissors") {
                console.log(computerWin);
                return "C";
            }
            break;
    }
}

function game() {
    let computerWins = 0;
    let playerWins = 0;
    let gameNumber = 0;

    // Play 5 games
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt(`This is game ${gameNumber} of 5.\nRock, Paper, or Scissors?: `);
        let computerChoice = getComputerChoice();

        switch (playRound(playerChoice, computerChoice)) {
            case "C":
                computerWins++;
                break;
            
            case "P":
                playerWins++;
                break;

            case "T":
                break;
        }

        gameNumber++;
    }

    // Calculate final score
    if (computerWins > playerWins) {
        console.log(`Computer Wins! ${computerWins} v ${playerWins}`);
    } else if (computerWins == playerWins) {
        console.log(`It's a Tie! ${computerWins} v ${playerWins}.`);
    } else {
        console.log(`You Win! ${playerWins} v ${computerWins}`)
    }
}