//associate HTML buttons to JavaScript constants 
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const lobster = document.querySelector('#lobster');
const container = document.querySelector('#choiceContainer');
const pointsContainer = document.querySelector('#points');
const winnerContainer = document.querySelector('#winner');
const userDiv = document.createElement('div');
const compDiv = document.createElement('div');
const gamesDiv = document.createElement('div');
const userChoice = document.createElement('div');
const compChoice = document.createElement('div');
const winChoice = document.createElement('div');
const winningPlayer = document.createElement('div');



//score variables 
let user_score = 0;
let comp_score = 0;
let added_score = 0;
let games = 0;


//make it so that Buttons is called when the window opens
window.onload = playerSelection

//this function chooses between rock, paper or lobster and returns it. the computer choice.
function computerPlay() {
    const options = ['rock', 'paper', 'lobster'];
    let choice = options[Math.floor(options.length * Math.random())];
    console.log(choice);
    return choice;
}

//this function calls Game once the player chooses rock, paper or lobster. The player choice.
function playerSelection() {
    rps = ['rock','paper','lobster'];
    rpsVar = [rock,paper,lobster];
    for ( let i = 0; i < rps.length; i++) {
        rpsVar[i].addEventListener('click', () => {
            console.log(rps[i]);
            Game(rps[i],computerPlay());
            console.log(user_score);
            console.log(comp_score);
            console.log(added_score);
            declareNreset();
        })
    }
}

//this function compares between player choice and computer choice and choses the winner.
function Game(mychoice,compchoice) {
    let winning_choice = ''
    const pairs = {
        'paper': 'rock',
        'rock': 'lobster',
        'lobster': 'paper'
    }
    if (pairs[mychoice] == compchoice) {
        console.log(mychoice + " beats " + compchoice + ". player wins.")
        user_score += 1;
        winning_choice = mychoice;
    }
    else if (pairs[compchoice] == mychoice) {
        console.log(compchoice + " beats " + mychoice + ". computer wins.")
        comp_score += 1;
        winning_choice = compchoice;
    }
    else {
        console.log('tie')
    }
    added_score = user_score + comp_score;
    games += 1;
    displayUserScore();
    displayCompScore();
    displayNumOfGames();
    displayUserChoice(mychoice);
    displayComputerChoice(compchoice);

}

//this function is declaring the winner 
function declare_winner(myscore, compscore) {
    if (myscore > compscore) {
        winningPlayer.textContent = "PLAYER WINS!";
        winnerContainer.appendChild(winningPlayer);
    }
    else if (myscore < compscore) {
        winningPlayer.textContent = "COMPUTER WINS!";
        winnerContainer.appendChild(winningPlayer);
    }
    else {
        winningPlayer.textContent = "ITS A TIE!";
        winnerContainer.appendChild(winningPlayer);
    }
}

// calculates the points to decide who won.
function declareNreset() {
    console.log(games)
    if (games > 4) {
        declare_winner(user_score, comp_score);
        user_score = 0;
        comp_score = 0;
        added_score = 0;
        games = 0;
    }
    else {
        winningPlayer.textContent = "";
    }
}

//display user score.
function displayUserScore() {
    userDiv.textContent = "PLAYER SCORE: " + user_score;
    pointsContainer.appendChild(userDiv);
}

//display computer score.
function displayCompScore() {
    compDiv.textContent = "COMPUTER SCORE: " + comp_score;
    pointsContainer.appendChild(compDiv);
}

//display how many games played so far.
function displayNumOfGames() {
    gamesDiv.textContent = "GAMES PLAYED: " + games;
    pointsContainer.appendChild(gamesDiv);
}

//display user choice.
function displayUserChoice(mychoice) {
    userChoice.textContent = "PLAYER: " + mychoice;
    container.appendChild(userChoice);
}

//display computer choice.
function displayComputerChoice(compchoice) {
    compChoice.textContent = "COMPUTER: " + compchoice;
    container.appendChild(compChoice);
}


