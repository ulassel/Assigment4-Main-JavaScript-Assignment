function computerPlay(){
    return Math.floor(Math.random()*3);
}

function playRound(playerSelection, computerSelection){
    const options = ["rock", "paper", "scissors"];
    playerSelection = "";
    playerSelection = prompt("What is your selection? (Rock-Paper-Scissors):").toLowerCase();
    while(!options.includes(playerSelection)){
        playerSelection = prompt("Please enter a valid value (Rock-Paper-Scissors):").toLowerCase();
    }
    computerSelection = "";
    computerSelection = computerPlay();

    const results = [["t", "c", "p"], 
                   ["p", "t", "c"], 
                   ["c", "p", "t"]];
    console.log(`Player choice: ${playerSelection}`);
    console.log(`Computer choice: ${options[computerSelection]}`);
    playerSelection = options.indexOf(playerSelection);
    return results[playerSelection][computerSelection];
}

function game(){
    let player = 0;
    let computer = 0;
    let result = "";

    for(let i = 0; i<5; i++){
        result = playRound();
        switch(result){
            case "p":
                player++;
                console.log(`Player wins this round! Player: ${player} - Computer: ${computer}`);
                break;
            case "c":
                computer++;
                console.log(`Computer wins this round! Player: ${player} - Computer: ${computer}`);
                break;
            case "t":
                console.log(`It's a draw! Player: ${player} - Computer: ${computer}`);
        }
    }



    if(player > computer){
        console.log("Player wins the game!");
    }else if(computer > player){
        console.log("Computer wins the game!");
    }else if(computer == player){
        console.log("It's a draw! No one wins the game!");
    }
}

game();