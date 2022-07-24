//associate HTML buttons to JavaScript constants 
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const container = document.querySelector('#container');
const userDiv = document.createElement('div');
const compDiv = document.createElement('div');
const gaemsDiv = document.createElement('div');
const userChoice = document.createElement('div');
const compChoice = document.createElement('div');
const winChoice = document.createElement('div');



//score variables 
let user_score = 0;
let comp_score = 0;
let added_score = 0;
let games = 0;


//make it so that Buttons is called when the window opens
window.onload = playerSelection

//this function chooses between rock, paper or scissors and returns it. the computer choice.
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(options.length * Math.random())];
    console.log(choice);
    return choice;
}

//this function calls Game once the player chooses rock, paper or scissors. The player choice.
function playerSelection() {
    rps = ['rock','paper','scissors']
    rpsVar = [rock,paper,scissors]
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
        'rock': 'scissors',
        'scissors': 'paper'
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
        alert("player wins!!!!!!!!!")
    }
    else if (myscore < compscore) {
        alert("computer wins!!!!!!!!!")
    }
    else {1
        alert("its a tie!!!!!!!!!")
    }
}

// calculates the points to decide who won.
function declareNreset() {
    console.log(games)
    if (games > 9) {
        declare_winner(user_score, comp_score);
        user_score = 0;
        comp_score = 0;
        added_score = 0;
        games = 0;
    }
}

//display user score.
function displayUserScore() {
    userDiv.textContent = "PLAYER SCORE: " + user_score;
    userDiv.style.color = "red";
    container.appendChild(userDiv);
}

//display computer score.
function displayCompScore() {
    compDiv.textContent = "COMPUTER SCORE: " + comp_score;
    compDiv.style.color = "blue";
    container.appendChild(compDiv);
}

//display how many games played so far.
function displayNumOfGames() {
    gaemsDiv.textContent = "GAMES PLAYED: " + games;
    gaemsDiv.style.color = "green";
    container.appendChild(gaemsDiv);
}

//display user choice.
function displayUserChoice(mychoice) {
    userChoice.textContent = "USER CHOICE: " + mychoice;
    userChoice.style.color = "red";
    container.appendChild(userChoice);
}

//display computer choice.
function displayComputerChoice(compchoice) {
    compChoice.textContent = "COMPUTER CHOICE: " + compchoice;
    compChoice.style.color = "blue";
    container.appendChild(compChoice);
}



//when i did it in a retarded way
    // rock.addEventListener('click', () => {
    //     console.log('rock');
    //     Game('rock',computerPlay());
    //     console.log(user_score);
    //     console.log(comp_score);
    //     console.log(added_score)
    //     numOfGames();
    // })
    // paper.addEventListener('click', () => {
    //     console.log('paper');
    //     Game('paper',computerPlay());
    //     console.log(user_score);
    //     console.log(comp_score);
    //     console.log(added_score)
    //     numOfGames();

    // })
    // scissors.addEventListener('click', () => {
    //     console.log('scissors');
    //     Game('scissors',computerPlay());
    //     console.log(user_score);
    //     console.log(comp_score);
    //     console.log(added_score)
    //     numOfGames();
    // })
