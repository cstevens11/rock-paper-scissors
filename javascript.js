console.log("testing")




//user score tracker
let userScore = 0

//cpu score tracker
let cpuScore = 0




// randomly picks rock, paper, or scissors based on randomNumber
let cpuSelection = function() {
    //randomly selects either 1,2, or 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;
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
// let cpuChoice = cpuSelection();

//asks for user input of rock/paper/scissors
let userSelection = function() {
    let input = prompt("Please type rock, paper, or scissors.");
    while(input == null) {
        input = prompt("Please type rock, paper, or scissors.");
    }
    input = input.toLowerCase();
    return(input)
}

//stores user input of rock/paper/scissors in lowercase to make input case-insensitive
// let userChoice = userSelection();









//takes cpuChoice and userChoice, then outputs string declaring winner.
let checkWinner = function (userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
        return(`It's a draw! You both chose ${userChoice}!`)
    } else if (   
        (userChoice === "rock" && cpuChoice === "paper") || 
        (userChoice === "paper" && cpuChoice === "scissors") ||
        (userChoice === "scissors" && cpuChoice === "rock")
    ) {
        cpuScore = ++cpuScore
        return(`You lose! ${cpuChoice} beats ${userChoice}!`)
    } else if (
        (userChoice === "rock" && cpuChoice === "scissors") ||
        (userChoice === "paper" && cpuChoice === "rock") ||
        (userChoice === "scissors" && cpuChoice === "paper")
    ) {
        userScore = ++userScore
        return(`You win! ${userChoice} beats ${cpuChoice}!`)
    } else {
        return("Oops! Looks like you mispelled your choice!")
    }
}

let singleRound = function () {
    let cpuChoice = cpuSelection();
    let userChoice = userSelection();
    const winner = checkWinner(userChoice, cpuChoice);
    console.log(`Cpu chose ${cpuChoice}`);
    console.log(`User chose ${userChoice}`);
    console.log(winner)
    return(winner)
}

let game = function() {
    for (let i = 0; i < 5; i++) {
        singleRound();
    }
}




console.log("second testing")

//easy variable tests
// console.log("Computer chose " + cpuChoice)
// console.log("User chose " + userChoice)
console.log(game())
// console.log(checkWinner(userChoice, cpuChoice));
let scoreBoard = `Current score is: USER: ${userScore} CPU: ${cpuScore}`
