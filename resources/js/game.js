// ROCK PAPER SCISSORS!
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const scoreBoard = document.querySelector('#scoreboard');
const gameResults = document.querySelector('#game-results');
const gameWinner = document.createElement('p');
const CPUscore = document.createElement('p');
const PLYscore = document.createElement('p');

// randomized computer choice
let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerThrow;
    if (randomNumber === 0) {
        computerThrow = "rock";
    } else if (randomNumber === 1) {
        computerThrow = "paper";
    } else {
        computerThrow = "scissors";
    };
    return computerThrow;
};

let game = () => {
    let computerScore = 0;
    let playerScore = 0;

    // binding player choice to onscreen button
    rock.addEventListener('click', 
        function() {
        matchPlay('rock');
    });
    paper.addEventListener('click', 
        function() {
        matchPlay('paper');
    });
    scissors.addEventListener('click', 
        function() {
        matchPlay('scissors');
    });

        // winning/losing match parameters 
    let matchPlay = playerChoice => {
        let computerChoice = getComputerChoice();
        if (playerChoice === 'scissors' && computerChoice === 'rock') {
            gameWinner.textContent = "Computer chose rock. Computer wins!";
            gameResults.appendChild(gameWinner);
            computerScore++
        } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
            gameWinner.textContent = "Computer chose paper. Player wins!";
            gameResults.appendChild(gameWinner);
            playerScore++
        } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
            gameWinner.textContent = "Computer chose scissors. Computer wins!";
            gameResults.appendChild(gameWinner);
            computerScore++
        } else if (playerChoice === 'paper' && computerChoice === 'rock') {
            gameWinner.textContent = "Computer chose rock. Player wins!";
            gameResults.appendChild(gameWinner);
            playerScore++
        } else if (playerChoice === 'rock' && computerChoice === 'paper') {
            gameWinner.textContent = "Computer chose paper. Computer wins!";
            gameResults.appendChild(gameWinner);
            computerScore++
        } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
            gameWinner.textContent = "Computer chose scissors. Player wins!";
            gameResults.appendChild(gameWinner);
            playerScore++
        } else {
            gameWinner.textContent = "Draw!";
            gameResults.appendChild(gameWinner);
        };
        
        // defining a game winner with a stopping point
        if (playerScore >= 5 && computerScore < playerScore) {
            PLYscore.textContent = 'Player wins the game!';
            scoreBoard.appendChild(PLYscore);
            CPUscore.remove();
        } else if (computerScore >= 5 && playerScore < computerScore) {
            CPUscore.textContent = 'Computer wins the game!';
            scoreBoard.appendChild(CPUscore);
            PLYscore.remove();
        } else {
            PLYscore.textContent = 'Player: ' + playerScore;
            CPUscore.textContent = 'Computer: ' + computerScore;
            scoreBoard.appendChild(PLYscore);
            scoreBoard.appendChild(CPUscore);
        }
    };
};

game();