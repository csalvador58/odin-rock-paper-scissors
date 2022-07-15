let playerWinCount;
let computerWinCount;

game();

function game() {
    // Start Rock, Paper, Scissors game. Scores are reset to zero.
    playerWinCount = 0;
    computerWinCount = 0;

    for (let i = 0; i < 5; i++) {
    // Play five rounds
        let playerAnswer = prompt(`Round ${i+1} - Rock, Paper, or Scissors?`);
        playerSelection = playerAnswer.toLowerCase();

        // Check for invalid player input
        while ((playerSelection != 'rock') && (playerSelection != 'paper') && (playerSelection != 'scissors')) {
            playerAnswer = prompt("Please enter a valid selection - Rock, Paper, or Scissors?");
            playerSelection = playerAnswer.toLowerCase(); 
        }

        computerSelection = randomSelect();
        playRound(playerSelection, computerSelection);

    }
    
    // Display winner and current scores.
    if (playerWinCount > computerWinCount) {
        console.log(`You win the game! Overall score - You: ${playerWinCount}, Computer: ${computerWinCount}`);
    } else if (playerWinCount < computerWinCount) {
        console.log(`You lost the game. Overall score - You ${playerWinCount}, Computer: ${computerWinCount}`);
    } else {
        console.log(`Tie game! Overall score - You ${playerWinCount}, Computer: ${computerWinCount}`);
    }
}


function randomSelect() {
    // Randomly selects rock, paper, or scissor. 
    let playOptions = ['rock', 'paper', 'scissors'];
    return playOptions[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
    // Compare selections to determine winner.
    if (player === computer) {
        console.log(`It\'s a tie! Both players selected ${player}.`);
    }
    else if (player === 'rock' && computer === 'scissors') {
        console.log(`Rock beats scissors, You win!`);
        playerWinCount++;
    } else if (player === 'rock' && computer === 'paper') {
        console.log(`Paper beats rock, Computer wins!`);
        computerWinCount++;
    } else if (player === 'paper' && computer === 'rock') {
        console.log(`Paper beats rock, You win!`);
        playerWinCount++;
    } else if (player === 'paper' && computer === 'scissors') {
        console.log(`Scissors beats paper, Computer wins!`);
        computerWinCount++;
    } else if (player === 'scissors' && computer === 'rock') {
        console.log(`Rock beats scissors, Computer wins!`);
        computerWinCount++;
    } else if (player === 'scissors' && computer === 'paper') {
        console.log('Scissors beats paper, You win!')
        playerWinCount++;
    } else {
        console.log(`System error occurred, please try again!`);
    }

}