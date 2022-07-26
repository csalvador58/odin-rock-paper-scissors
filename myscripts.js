let playerWinCount = 0;
let computerWinCount = 0;



const displayScore = document.querySelector("#displayScore");
const displayWinner = document.querySelector("#displayWinner");
const gameIntro = document.getElementById("gameIntro");

const bgImage = document.querySelector(".bgImage");
const main = document.getElementById("main");

const mainTitle = document.getElementById("mainTitle");


startGame.addEventListener("click", function(e) {
    gameIntro.style.display = "none";
    bgImage.style.backgroundImage = "url(/pics/pexels-pixabay-220182-wallBackground.jpg)";
    main.style.display = "block";

    enableUI();
    game();
});




function game() {
  
    rock.addEventListener("click", function(e) {
        playerSelection = "rock";
        computerSelection = randomSelect();
        playRound(playerSelection, computerSelection);
    });

    scissors.addEventListener("click", function() {
        playerSelection = "scissors";
        computerSelection = randomSelect();
        playRound(playerSelection, computerSelection);
    });

    paper.addEventListener("click", function() {
        playerSelection = "paper";
        computerSelection = randomSelect();
        playRound(playerSelection, computerSelection);
    });
}


function randomSelect() {
    // Randomly selects rock, paper, or scissor. 
    let playOptions = ["rock", "paper", "scissors"];
    return playOptions[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
    // Compare selections to determine winner.
    if (player === computer) {
        displayWinner.textContent = `It\'s a tie! Both players selected ${player}.`;
    }
    else if (player === "rock" && computer === "scissors") {
        displayWinner.textContent = `Rock beats scissors, You win!`;
        playerWinCount++;
    } else if (player === "rock" && computer === "paper") {
        displayWinner.textContent = `Paper beats rock, Computer wins!`;
        computerWinCount++;
    } else if (player === "paper" && computer === "rock") {
        displayWinner.textContent = `Paper beats rock, You win!`;
        playerWinCount++;
    } else if (player === "paper" && computer === "scissors") {
        displayWinner.textContent = `Scissors beats paper, Computer wins!`;
        computerWinCount++;
    } else if (player === "scissors" && computer === "rock") {
        displayWinner.textContent = `Rock beats scissors, Computer wins!`;
        computerWinCount++;
    } else if (player === "scissors" && computer === "paper") {
        displayWinner.textContent = "Scissors beats paper, You win!";
        playerWinCount++;
    } else {
        displayWinner.textContent = `System error occurred, please try again!`;
    }

    // Display current scores.
    displayScore.textContent = `Overall score - You: ${playerWinCount}, Computer: ${computerWinCount}`;

    // Display game winner
    if (playerWinCount === 5 || computerWinCount === 5) {
        if (playerWinCount > computerWinCount) {
            displayScore.textContent = `You win the game! Overall score - You: 
                ${playerWinCount}, Computer: ${computerWinCount}`;
            displayWinner.textContent = "";
        } else if (playerWinCount < computerWinCount) {
            displayScore.textContent = `You lost the game. Overall score - You: 
                ${playerWinCount}, Computer: ${computerWinCount}`;
            displayWinner.textContent = "";
        } else {
            displayScore.textContent = `Tie game! Overall score - You: 
                ${playerWinCount}, Computer: ${computerWinCount}`;
            displayWinner.textContent = "";
        }
        playerWinCount = 0;
        computerWinCount = 0;
    }
}

function enableUI() {
    mainTitle.style.transition = "all 2s";
    mainTitle.style.fontFamily = "Copperplate", "serif";
    mainTitle.style.fontSize = "100px";
    mainTitle.style.textAlign = "center";
    mainTitle.style.textShadow = "5px 5px white";

}


