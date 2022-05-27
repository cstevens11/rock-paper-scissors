console.log("testing")




//user score tracker
let userScore = 0

//cpu score tracker
let cpuScore = 0

let round = 0


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
let checkWinner = function(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
        round = ++ round
        return(`It's a draw! You both chose ${userChoice}!`)
    } else if (   
        (userChoice === "rock" && cpuChoice === "paper") || 
        (userChoice === "paper" && cpuChoice === "scissors") ||
        (userChoice === "scissors" && cpuChoice === "rock")
    ) {
        round = ++round
        cpuScore = ++cpuScore
        return(`You lose! ${cpuChoice} beats ${userChoice}!`)
    } else if (
        (userChoice === "rock" && cpuChoice === "scissors") ||
        (userChoice === "paper" && cpuChoice === "rock") ||
        (userChoice === "scissors" && cpuChoice === "paper")
    ) {
        round = ++round
        userScore = ++userScore
        return(`You win! ${userChoice} beats ${cpuChoice}!`)
    } else {
        return("Oops! Looks like you mispelled your choice!")
    }
}

let singleRound = function() {
    let cpuChoice = cpuSelection();
    let userChoice = userSelection();
    const winner = checkWinner(userChoice, cpuChoice);
    console.log(`ROUND #` + round)
    console.log(`CPU chose ${cpuChoice}`);
    console.log(`USER chose ${userChoice}`);
    console.log(winner)
    return(winner)
}

// let finalWinner = function(userScore, cpuScore) {
//     if (userScore = cpuScore) {
//         return("FINAL WINNER: It's a tie game!")
//     } else if (userScore > cpuScore) {
//         return("FINAL WINNER: User won the game!")
//     } else if (userScore < cpuScore) {
//         return("FINAL WINNER: Cpu won the game!")
//     }

// }

let game = function() {
    for (let i = 0; i < 5; i++) {
        singleRound();
        console.log(`USER SCORE: ${userScore}`)
        console.log(`CPU SCORE: ${cpuScore}`)
    }
    console.log(`FINAL SCORE: User:${userScore} Cpu:${cpuScore}`)
    if (userScore == cpuScore) {
        console.log("FINAL SCORE: ITS A TIE!")
    } else if (userScore > cpuScore) {
        console.log("FINAL SCORE: USER WINS!")
    } else if (userScore < cpuScore) {
        console.log("FINAL SCORE: CPU WINS!")
    }
}




console.log("second testing")

//easy variable tests
// console.log("Computer chose " + cpuChoice)
// console.log("User chose " + userChoice)
game()
// console.log(`User score is ${userScore}!`)
// console.log(`Cpu score is ${cpuScore}!`)

// console.log(checkWinner(userChoice, cpuChoice));
