//Function that randomly selects an option
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "sissors";
            break;
    }
}

//Plays a round of rock paper and sissors getting an input from the user

function playRound() {
    const playerSelection = prompt("Enter Rock, Paper, or Sissors").toLowerCase();
    const computerSelection = getComputerChoice();
    let result;
    let whoWhon;

    //logic for a draw

    if (playerSelection === "rock" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "paper" ||
        playerSelection === "sissors" && computerSelection === "sissors") {
        result = `This is a draw. You've chosen ${playerSelection} and the computer also has chosen ${computerSelection}.`;
        whoWon = 'draw';

        //logic for a win

    } else if (playerSelection === "rock" && computerSelection === "sissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "sissors" && computerSelection === "paper") {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
        whoWon = 'player';

        //logic for a lose

    } else if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "sissors" ||
        playerSelection === "sissors" && computerSelection === "rock") {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
        whoWon = 'computer';

    }

    return [result, whoWon];
}

// 5 round game function

function game() {

    //Defining score variables
    let playerScore = 0,
        computerScore = 0;

    //Running 5 rounds
    for (let i = 0; i < 5; i++) {
        const result = playRound();
        //logging the result string of who won
        console.log(result[0]);

        //updating scores based on result
        switch (result[1]) {
            case "player":
                ++playerScore; //player wins add 1 to player score
                break;
            case "computer":
                ++computerScore; //computer wins add 1 to computer score
                break;
        }
    }

    if (playerScore > computerScore) {
        console.log(`You win the game! \nYour score is: ${playerScore}\nComputer score is: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lose the game! \nYour score is: ${playerScore}\nComputer score is: ${computerScore}`);
    } else {
        console.log(`Draw! \nYour score is: ${playerScore}\nComputer score is: ${computerScore}`);
    }
}

game();