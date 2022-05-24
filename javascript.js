console.log("testing")

//randomly selects either 1,2, or 3
let randomNumber = Math.floor(Math.random() * 3) + 1;

// randomly picks rock, paper, or scissors based on randomNumber
let cpuPlay = function() {
   if (randomNumber === 1) {
       return("rock")
   } else if (randomNumber === 2) {
       return("paper")
   } else if (randomNumber === 3) {
       return("scissors")
   } else {
       alert("Something went wrong...")
   }
};

//store computerPlay output in variable computerChoice
let cpuChoice = cpuPlay();

//asks for user input of rock/paper/scissors
let userSelection = prompt("Please type rock, paper, or scissors.");

//stores user input of rock/paper/scissors in lowercase to make input case-insensitive
let userChoice = userSelection.toLowerCase();

// win statement stencil
let win = `You win! ${userChoice} beats ${cpuChoice}!`;

// loss statement stencil
let loss = `You lose! ${cpuChoice} beats ${userChoice}!`;

//takes cpuChoice and userChoice, then outputs string declaring winner.
let singleRound = function () {
    if (userChoice === cpuChoice) {
        return(`It's a Draw! You both chose ${userChoice}!`)
    } else if (userChoice === "rock") {
        if (cpuChoice === "scissors") {
            return(win)
        } else if (cpuChoice === "paper") {
            return(loss)
        }
    } else if (userChoice === "paper") {
        if (cpuChoice === "rock") {
            return(win)
        } else if (cpuChoice === "scissors") {
            return(loss)
        }
    } else if (userChoice === "scissors") {
        if (cpuChoice === "paper") {
            return(win)
        } else if (cpuChoice === "rock") {
            return(loss)
        }
    } else {
        return("Oops! Looks like you mispelled your choice!")
    }
}

console.log("second testing")

//easy variable tests
console.log("Computer chose " + cpuChoice)
console.log("User chose " + userChoice)

console.log(singleRound());



