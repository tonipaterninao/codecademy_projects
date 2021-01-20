let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// The number to be guessed by player
const generateTarget = () => Math.floor(Math.random() * 10);

// copare the human guess to the computer guess
function compareGuesses(humanGuess, compGuess, target){
    // the difference between human guess and target
    humanDiff = getAbsoluteDistance(target, humanGuess);

    // the difference between computer guess and target
    compDiff = getAbsoluteDistance(target, compGuess);

    // points for human if guess is closer to target
    if (humanDiff <= compDiff) {
        return true;
    } else {
        return false
    }
}

function getAbsoluteDistance(x, y) {
    return Math.abs(x - y);
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    } else {
        console.error(`Invalid option ${winner}. Enter 'human' or 'computer' to update the score of the winner!`);
    }

}


// go to the next round of the game
const advanceRound = () => currentRoundNumber += 1;
