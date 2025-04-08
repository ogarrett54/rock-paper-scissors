// CREATE variables for human score and computer score
humanScore = 0;
computerScore = 0;

// GET computer choice
function getComputerChoice() {
  // CREATE a variable choice, with initial value scissors
  let choice = "scissors";
  // CREATE a random number between 0 and 1
  const num = Math.random();
  // IF random number is between 0 and 0.333, choice is rock
  if (num >= 0 && num < 0.333) {
    choice = "rock";
  }
  // ELSE IF random number is between 0.333 and 0.667, choice is paper
  if (num >= 0.333 && num < 0.667) {
    choice = "paper";
  }
  // ELSE choice is scissors, implied by default value
  return choice;
}

// GET human choice
function getHumanChoice() {
  // CREATE variable choice, with value set to user input into prompt
  const choice = prompt("Rock, paper, scissors, 1, 2, 3! ");
  return choice;
}

// GET round outcome
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  let outcome = "lose";

  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      outcome = "lose";
    } else if (computerChoice === "scissors") {
      outcome = "win";
    } else {
      outcome = "tie";
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      outcome = "lose";
    } else if (computerChoice === "rock") {
      outcome = "win";
    } else {
      outcome = "tie";
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      outcome = "lose";
    } else if (computerChoice === "paper") {
      outcome = "win";
    } else {
      outcome = "tie";
    }
  }

  if (outcome === "win") {
    ++humanScore;
    console.log(
      `Congrats! You won! \n Human score: ${humanScore}, Computer score: ${computerScore}`
    );
  } else if (outcome === "lose") {
    ++computerScore;
    console.log(
      `Get gud. You lost. \n Human score: ${humanScore}, Computer score: ${computerScore}`
    );
  } else {
    console.log(
      `Tie! \n Human score: ${humanScore}, Computer score: ${computerScore}`
    );
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("Congratulations! You're smarter than the computer!");
  } else if (humanScore === computerScore) {
    console.log(
      "You tied with the computer. Probably more interesting than winning or losing."
    );
  } else {
    console.log("You lost to the computer, you incompetent swine.");
  }
}

playGame();
