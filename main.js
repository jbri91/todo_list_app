let userChoice;
let computerChoice;

let rock = document.getElementById('rock').addEventListener('click',rockPaperScissor);
let paper = document.getElementById('paper').addEventListener('click',rockPaperScissor);
let scissor = document.getElementById('scissor').addEventListener('click', rockPaperScissor);
console.log(rockPaperScissor)

// computerChoice = 'rock'
// userChoice = 'rock'
// console.log(userChoice)
// console.log(computerChoice)


function rockPaperScissor(userChoice,computerChoice) {
    if(userChoice === 'rock' && computerChoice === 'scissor') {
        document.getElementById('results').innerHTML = 'YOU WIN!';
    }
    if (userChoice === 'rock' && computerChoice === 'rock'){
        document.getElementById('results').innerHTML = 'YOU ARE TIED!';
    }
    if (userChoice === 'rock' && computerChoice === 'paper'){
        document.getElementById('results').innerHTML = 'YOU LOSE!';
    }
    if(userChoice === 'paper' && computerChoice === 'rock') {
        document.getElementById('results').innerHTML = 'YOU WIN!';
    }
    if(userChoice === 'paper' && computerChoice === 'paper') {
        document.getElementById('results').innerHTML = 'YOU ARE TIED!';
    }
    if(userChoice === 'paper' && computerChoice === 'scissor') {
        document.getElementById('results').innerHTML = 'YOU LOSE!';
    }
    if(userChoice === 'scissor' && computerChoice === 'paper') {
        document.getElementById('results').innerHTML = 'YOU WIN!';
    }
    
    if(userChoice === 'scissor' && computerChoice === 'scissor') {
        document.getElementById('results').innerHTML = 'YOU ARE TIED!';
    }
    
    if(userChoice === 'scissor' && computerChoice === 'rock') {
        document.getElementById('results').innerHTML = 'YOU LOSE!';
    }
    if (userChoice === undefined || computerChoice === undefined) 
    {document.getElementById('results').innerHTML = 'PICK A WEAPON!'}
}


rockPaperScissor(userChoice, computerChoice);

// computer randomly picks rock, paper or scissor. Perhaps from list?
// user picks rock, paper or scissor
// Winner is decided and displayed
// Keep track of score