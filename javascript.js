let userScore = 0

let cpuScore = 0

let round = 0

const choices = ["rock", "paper", "scissors"]

let validateInput = function(choice) {
    if(choices.includes(choice)) {
        return true
    } else {
        return false
    }
}

// randomly picks rock, paper, or scissors based on randomNumber
let cpuSelection = function() {
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

//asks for user input of rock/paper/scissors
let userSelection = function() {
    let input = prompt("Please type rock, paper, or scissors.");
    while(input == null) {
        input = prompt("Please type rock, paper, or scissors.");
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    while (check == false) {
        input = prompt("Oops! Looks like you mispelled your choice! Please type rock, paper, or scissors!");
        while(input == null) {
            input = prompt("Please type rock, paper, or scissors.");
        }
        input = input.toLowerCase();
        check = validateInput(input)
    }
    return(input)
}


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

let finalWinner = function(userScore, cpuScore) {
    if (userScore == cpuScore) {
        console.log("FINAL SCORE: ITS A TIE!")
    } else if (userScore > cpuScore) {
        console.log("FINAL SCORE: USER WINS!")
    } else if (userScore < cpuScore) {
        console.log("FINAL SCORE: CPU WINS!")
    }
}

let game = function() {
    for (let i = 0; i < 5; i++) {
        singleRound();
        console.log(`USER SCORE: ${userScore}`)
        console.log(`CPU SCORE: ${cpuScore}`)
        console.log("--------------------------")
    }
    console.log(`FINAL SCORE: User:${userScore} Cpu:${cpuScore}`)
    finalWinner(userScore, cpuScore)
}


game()
