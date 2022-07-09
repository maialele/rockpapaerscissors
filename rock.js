//score constants
let user_score = 0;
let comp_score = 0;
let added_score = 0;
let games =0;

//associate HTML buttons to JavaScript
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


//make it so that Buttons is called when the window opens
window.onload = Buttons

//this function chooses between rock, paper or scissors and returns it. the computer choice.
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(options.length * Math.random())];
    console.log(choice);
    return choice;
}

//this function calls Game once the player chooses rock, paper or scissors. The player choice.
function Buttons() {
    rps = ['rock','paper','scissors']
    rpsVar = [rock,paper,scissors]
    for ( let i = 0; i < rps.length; i++) {
        rpsVar[i].addEventListener('click', () => {
            console.log(rps[i]);
            Game(rps[i],computerPlay());
            console.log(user_score);
            console.log(comp_score);
            console.log(added_score);
            numOfGames();
        })
    }
}

//this function compares between player choice and computer choice and choses the winner.
function Game(mychoice,compchoice) {
    const pairs = {
        'paper': 'rock',
        'rock': 'scissors',
        'scissors': 'paper'
    }
    if (pairs[mychoice] == compchoice) {
        console.log(mychoice + " beats " + compchoice + ". player wins.")
        user_score += 1;
    }
    else if (pairs[compchoice] == mychoice) {
        console.log(compchoice + " beats " + mychoice + ". computer wins.")
        comp_score += 1;
    }
    else {
        console.log('tie')
    }
    added_score = user_score + comp_score;
    games += 1;
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

//this function calls declare_winner after ten games.
function numOfGames() {
    if ( games > 9) {
        declare_winner(user_score, comp_score);
    }
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