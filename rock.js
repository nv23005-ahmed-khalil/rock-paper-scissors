//step one:
console.log("hello world")
//step 2:
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}
//Step 3
function getHumanChoice() {
  return prompt("Enter your choice: rock, paper, or scissors");
}
//Step 4
let humanScore = 0;
let computerScore = 0;
//Step 5
function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  if (human === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (human === "rock" && computerChoice === "scissors") ||
    (human === "paper" && computerChoice === "rock") ||
    (human === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${human} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${human}`);
  }
}

//step 6
function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

 console.log(`Final Score: Human ${humanScore}, Computer ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("You lose the game!");
  } else {
    console.log("The game is a tie!");
  }
}

playGame();
