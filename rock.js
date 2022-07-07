let user_score = 0;
let comp_score = 0;

//this function chooses between rock, paper or scissors and returns it. the computer choice.
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(options.length * Math.random())];
    console.log(choice);
    return choice;
}

//this function takes user input of rock, paper or scissors and returns it.
function playerSelection() {
    let choice = prompt('Rock, Paper or Scissors?')
    choice = choice.toLowerCase();
    console.log(choice);
    if (choice == 'rock') {
        return 'rock';
    }
    else if (choice == 'paper') {
        return 'paper';
    }
    else if (choice == 'scissors') {
        return 'scissors';
    }
    else {
        alert('Please enter Rock, Paper or Scissors')
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
        console.log(mychoice + " beats" + compchoice + ". player wins.")
        user_score += 1;
    }
    else if (pairs[compchoice] == mychoice) {
        console.log(compchoice + " beats" + mychoice + ". computer wins.")
        comp_score += 1;
    }
    else {
        console.log('tie')
    }
}

//for loop to repeat game ten times
for (let i = 0; i < 11; i++ ) {
    Game(playerSelection(),computerPlay());
}

declare_winner(user_score, comp_score)

//calculates the points to decide who won.
function declare_winner(myscore, compscore) {
    if (myscore > compscore) {
        alert("player wins!")
    }
    else if (myscore < compscore) {
        alert("computer wins!")
    }
    else {1
        alert("its a tie!")
    }
}