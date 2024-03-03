const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
const playerScoreText = document.querySelector('.player-score');
const computerScoreText = document.querySelector('.computer-score');
const resultText = document.querySelector('.result-container');
let round = 0;

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
            return "scissors";
            break;
    }
}

//Plays a round of rock paper and scissors getting an input from the user

function playRound() {
    if(round < 5) {
        const playerSelection = this.textContent.toLowerCase();
        const computerSelection = getComputerChoice();
        let result;
        let whoWhon;

        //logic for a draw

        if (playerSelection === "rock" && computerSelection === "rock" ||
            playerSelection === "paper" && computerSelection === "paper" ||
            playerSelection === "scissors" && computerSelection === "scissors") {
                result = `This is a draw. You've chosen ${playerSelection} and the computer also has chosen ${computerSelection}.`;
                whoWon = 'draw';

            //logic for a win

        } else if (playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" ||
            playerSelection === "scissors" && computerSelection === "paper") {
                result = `You Win! ${playerSelection} beats ${computerSelection}`;
                whoWon = 'player';

            //logic for a lose

        } else if (playerSelection === "rock" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "rock") {
                result = `You lose! ${computerSelection} beats ${playerSelection}`;
                whoWon = 'computer';

        }
        round++;
        console.log(result,whoWon);
        game (result, whoWon);
    }
    
}

// 5 round game function

function game(result,whoWon) {

    //Defining score variables
    let playerScore = playerScoreText.textContent;
    let computerScore = computerScoreText.textContent;
    
    

        //updating scores based on result
        switch (whoWon) {
            case "player":
                ++playerScore; //player wins add 1 to player score
                break;
            case "computer":
                ++computerScore; //computer wins add 1 to computer score
                break;
        }
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    if(round === 5){
        if (playerScore > computerScore) {
            console.log(`You win the game! \nYour score is: ${playerScore}\nComputer score is: ${computerScore}`);
            resultText.textContent = `You win the game!`;
        } else if (playerScore < computerScore) {
            console.log(`You lose the game! \nYour score is: ${playerScore}\nComputer score is: ${computerScore}`);
            resultText.textContent = `You lose the game!`;
        } else {
            console.log(`Draw! \nYour score is: ${playerScore}\nComputer score is: ${computerScore}`);
            resultText.textContent = `The game is a Draw!`;
        }
    } else {
        resultText.textContent = result;
    }
}

// game();

btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);