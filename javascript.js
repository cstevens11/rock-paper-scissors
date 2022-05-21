console.log("testing")

let randomNumber = Math.floor(Math.random() * 3) + 1;
// computerPlay function should randomly pick rock, paper, or scissors
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

let userSelection = prompt("Please type rock, paper, or scissors.", "")

let userChoice = userSelection

//  console.log(computerPlay())
console.log(userChoice)

//store computerPlay output in variable computerChoice


