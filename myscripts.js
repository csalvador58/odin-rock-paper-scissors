let playerWin;
let computerWin;

game();

function game() {
    // Start Rock, Paper, Scissors game. Scores are reset.
    playerWin = 0;
    computerWin = 0;

    for (let i = 0; i < 5; i++) {
    // Play five rounds
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        playerPick = playerSelection.toLowerCase();

        // Check for invalid player input
        while ((playerPick != 'rock') && (playerPick != 'paper') && (playerPick != 'scissors')) {
            playerSelection = prompt("Pleas enter a valid selection - Rock, Paper, or Scissors?");
            playerPick = playerSelection.toLowerCase(); 
        }

        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);

    }
    
    if (playerWin > computerWin) {
        console.log(`You win the game! Overall score - You: ${playerWin}, Computer: ${computerWin}`);
    } else if (playerWin < computerWin) {
        console.log(`You lost the game. Overall score - You ${playerWin}, Computer: ${computerWin}`);
    } else {
        console.log(`Tie game!`);
    }
}


function computerPlay() {
    // randomly selects rock, paper, or scissor. 
    return 'paper'; //default selection test only
}

function playRound(player, computer) {
    // Compare selections to determine winner
    

    if (playerPick === computer) {
        console.log(`It\'s a tie! Both players selected ${playerPick}.`);
    }
    else if (playerPick === 'rock' && computer === 'scissors') {
        console.log(`Rock beats scissors, You win!`);
        playerWin++;
    } else if (playerPick === 'rock' && computer === 'paper') {
        console.log(`Paper beats rock, Computer wins!`);
        computerWin++;
    } else if (playerPick === 'paper' && computer === 'rock') {
        console.log(`Paper beats rock, You win!`);
        playerWin++;
    } else if (playerPick === 'paper' && computer === 'scissors') {
        console.log(`Scissors beats paper, Computer wins!`);
        computerWin++;
    } else if (playerPick === 'scissors' && computer === 'rock') {
        console.log(`Rock beats scissors, Computer wins!`);
        computerWin++;
    } else if (playerPick === 'scissors' && computer === 'paper') {
        console.log('Scissors beats paper, You win!')
        playerWin++;
    } else {
        console.log(`${playerPick} is an invalid entry, try again!`);
    }

}