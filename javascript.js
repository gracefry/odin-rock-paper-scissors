function getComputerChoice() {
    // Get random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * (4 - 1) + 1); 

    // Return choice based on number
    switch(randomNumber) {
        case 1:
            return "rock";
            break;

        case 2:
            return "paper";
            break;

        case 3:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {

}

function game() {

}