//randomized computer choice
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

let game = (playerChoice) => { // player vs cpu 
    let computerChoice = getComputerChoice();
        // winning match parameters ---------------------------------------------------
    if (playerChoice === 'scissors' && computerChoice === 'rock') {
        console.log("Rock beats scissors. Computer wins!");
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        console.log("Scissors beats paper. Player wins!");
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        console.log("Scissors beats paper. Computer wins!");
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        console.log("Paper beats rock. Player wins!");
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        console.log("Paper beats rock. Computer wins!");
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        console.log("Rock beats scissors. Player wins!");
    } else {
        console.log("Draw!");
    };
};

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", 
    function() {
        game('rock');
    });
paper.addEventListener("click",
    function() {
        game('paper');
    });
scissors.addEventListener("click", 
    function() {
        game('scissors');
    });