
    

//Creating an array to hold the possible options of the game 
const options = ['rock','paper','scissors'];

//Creating a function to randomly return a choice  
function getComputerChoice(){

    const choice = options[Math.floor(Math.random() * options.length) ];
    return choice;
}


//Function that checks who won between player and computer 
function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return 'tie';
    } 
    else if (
     (playerSelection == 'rock' && computerSelection == 'scissors') || 
     (playerSelection == 'scissors' && computerSelection == 'paper') ||
     (playerSelection == 'paper' && computerSelection == 'rock')
    ){

        return 'Player'
    }
     else {
        return 'Computer'
     }

}
// Function to simulate one round of the game 
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == 'tie'){
        return "It's a tie!";
    } else if (result == 'Player') {
        return `You win! ${playerSelection} beats ${computerSelection}`  
    } else{
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    
}

// Function 
function getPlayerChoice(){
    let validatedInput = false; 
    while(validatedInput == false){
        const choice = prompt('Rock Paper Scissors');
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
    }
}

function game(){
    console.log('Welcome')
    for(let i = 0; i < 5 ; i++ ){
        const playerSelection = 'rock';
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();