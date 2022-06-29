let userScore = 0

let cpuScore = 0

let round = 0

let finalwinner = ""

const choices = ["Rock", "Paper", "Scissors"]
const openModal = document.querySelector(".openModal")
const modalContainer = document.querySelector(".modalContainer")
const resultContainer = document.querySelector(".resultContainer");
const roundNUM = document.querySelector(".roundNUM");
const userpick = document.querySelector(".userpick");
const cpupick = document.querySelector(".cpupick");
const whoWins = document.querySelector(".whoWins");
const userpoints = document.querySelector(".userpoints");
const cpupoints = document.querySelector(".cpupoints");



// let resultpopup = function () {
//     resultcontainer.style.display = "flex";
// }

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
       return("Rock")
   } else if (randomNumber === 2) {
       return("Paper")
   } else if (randomNumber === 3) {
       return("Scissors")
   } else {
       alert("Something went wrong...")
   }
};

//asks for user input of rock/paper/scissors
// let userSelection = function() {
//     let input = prompt("Please type rock, paper, or scissors.");
//     while(input == null) {
//         input = prompt("Please type rock, paper, or scissors.");
//     }
//     input = input.toLowerCase();
//     let check = validateInput(input)
//     while (check == false) {
//         input = prompt("Oops! Looks like you mispelled your choice! Please type rock, paper, or scissors!");
//         while(input == null) {
//             input = prompt("Please type rock, paper, or scissors.");
//         }
//         input = input.toLowerCase();
//         check = validateInput(input)
//     }
//     return(input)
// }


//takes cpuChoice and userChoice, then outputs string declaring winner.
let checkWinner = function(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
        round = ++ round
        return(`It's a draw! You both chose ${userChoice}!`)
    } else if (   
        (userChoice === "Rock" && cpuChoice === "Paper") || 
        (userChoice === "Paper" && cpuChoice === "Scissors") ||
        (userChoice === "Scissors" && cpuChoice === "Rock")
    ) {
        round = ++round
        cpuScore = ++cpuScore
        return(`You lose! ${cpuChoice} beats ${userChoice}!`)
    } else if (
        (userChoice === "Rock" && cpuChoice === "Scissors") ||
        (userChoice === "Paper" && cpuChoice === "Rock") ||
        (userChoice === "Scissors" && cpuChoice === "Paper")
    ) {
        round = ++round
        userScore = ++userScore
        return(`You win! ${userChoice} beats ${cpuChoice}!`)
    }
}



let singleRound = function(e) {
    let userSelection = `${e.target.id}`
    let cpuChoice = cpuSelection();
    let userChoice = userSelection;
    const winner = checkWinner(userChoice, cpuChoice);
    // console.log(`ROUND #` + round)
    // console.log(`CPU chose ${cpuChoice}`);
    // console.log(`USER chose ${userChoice}`);
    // console.log(winner)
    // console.log(`USER SCORE: ${userScore}`)
    // console.log(`CPU SCORE: ${cpuScore}`)
    textResults(round, cpuChoice, userChoice, winner);
    pointTracker();
    // resultpopup();
    return(winner)
}



let textResults = function(round, cpuChoice, userChoice, winner){
    // const resultContainer = document.querySelector(".resultContainer");
    // const roundNUM = document.querySelector(".roundNUM");
    // const userpick = document.querySelector(".userpick");
    // const cpupick = document.querySelector(".cpupick");
    // const whoWins = document.querySelector(".whoWins");
    roundNUM.textContent = `ROUND #` + round; 
    userpick.textContent = `${userChoice}`;
    cpupick.textContent = `${cpuChoice}`;
    whoWins.textContent = `${winner}`;
    resultContainer.style.display = "flex";
}

let pointTracker = function() {
    // const userpoints = document.querySelector(".userpoints");
    // const cpupoints = document.querySelector(".cpupoints");
    userpoints.textContent = `USER SCORE: ${userScore}`;
    cpupoints.textContent = `CPU SCORE: ${cpuScore}`;
    if (userScore == 5 || cpuScore == 5) {
        finalWinner(userScore, cpuScore);
        updateModal(finalwinner, userScore, cpuScore);
    }
}

let finalWinner = function(userScore, cpuScore) {
    if (userScore > cpuScore) {
         finalwinner = "USER"
    } else if (userScore < cpuScore) {
         finalwinner = "CPU"
    }
}

let updateModal = function (finalwinner, userScore, cpuScore) {
    const whoWon = document.querySelector(".whoWon");
    const userfinal = document.querySelector(".userfinal");
    const cpufinal = document.querySelector(".cpufinal");
    whoWon.textContent = `${finalwinner}`
    userfinal.textContent = `${userScore}`
    cpufinal.textContent = `${cpuScore}`
    modalContainer.style.display = "flex";
}

let restart = function () {
    userScore = 0;
    cpuScore = 0;
    round = 0;
    userpoints.textContent = `USER SCORE: ${userScore}`;
    cpupoints.textContent = `CPU SCORE: ${cpuScore}`;
    modalContainer.style.display = "none";
    resultContainer.style.display = "none";
}


const buttons = document.querySelectorAll(".game");
buttons.forEach(button=> button.addEventListener('click', singleRound));

const newGame = document.querySelector(".restartbtn");
newGame.addEventListener('click', restart);




// textResults()

// buttons.forEach(button => button.addEventListener('click', uWu))
//     const userD = function(e) {
//         const userSelection = this.classList.value
//     }

// let game = function() {
//     for (let i = 0; i < 5; i++) {
//         singleRound();
//         console.log(`USER SCORE: ${userScore}`)
//         console.log(`CPU SCORE: ${cpuScore}`)
//         console.log("--------------------------")
//     }
//     console.log(`FINAL SCORE: User:${userScore} Cpu:${cpuScore}`)
//     finalWinner(userScore, cpuScore)
// }

// singleRound()
// game()
console.log("test")

openModal.addEventListener('click', () => {
    modalContainer.style.display = "flex";
})
