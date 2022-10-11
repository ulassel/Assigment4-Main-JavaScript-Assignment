function computerPlay(){
    return Math.floor(Math.random()*3);
}

function playRound(playerSelection, computerSelection){
    playerSelection = prompt("What is your selection? (Rock-Paper-Scissors):").toLowerCase();
    computerSelection = computerPlay();

    let results = [["t", "c", "p"], 
                  ["p", "t", "c"], 
                  ["c", "p", "t"]]

    let options = ["rock", "paper", "scissors"];
    playerSelection = options.indexOf(playerSelection);

    return results[computerSelection][playerSelection];
}

function game(){
    let player = 0;
    let computer = 0;
    let result;

    for(let i = 0; i<5; i++){
        result = playRound();

        if(result == "p"){
            console.log("Player wins this round!");
            player++;
        }else if(result == "c"){
            console.log("Computer wins this round!");
            computer++;
        }else{
            console.log("It's a draw!");
        }
    }

    if(player > computer){
        return "Player wins the game!";
    }else if(computer > player){
        return "Computer wins the game!";
    }else{
        return "It's a draw!";
    }
}

console.log(game());