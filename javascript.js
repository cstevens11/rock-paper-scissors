console.log("testing")

//randomly selects either 1,2, or 3
let randomNumber = Math.floor(Math.random() * 3) + 1;

// randomly picks rock, paper, or scissors based on randomNumber
let computerPlay = function() {
   if (randomNumber === 1) {
       return("rock")
   } else if (randomNumber === 2) {
       return("paper")
   } else if (randomNumber === 3) {
       return("scissors")
   } else {
       alert("Something went wrong...")
   }
}

//asks for user input of rock/paper/scissors
let userSelection = prompt("Please type rock, paper, or scissors.", "")

//stores user input of rock/paper/scissors in lowercase to make input case-insensitive
let userChoice = userSelection.toLowerCase()

//  console.log(computerPlay())
console.log(userChoice)

//store computerPlay output in variable computerChoice


