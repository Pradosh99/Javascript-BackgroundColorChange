let random = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#guess-submit');
const userInput = document.querySelector('#guess');
const lowOrhigh = document.querySelector('#loworhigh');
const prevGuess = document.querySelector('.prev-guess');
const remGuess = document.querySelector('.rem-num-guess');
const startOver = document.querySelector('.result-paras');

const p = document.createElement('p');
let prevGuessArray = [];
let numGuess = 1;
let playgame = true;

if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(guess < 1 || guess > 100 || isNaN(guess)){
        alert('Please enter a number between 1 and 100');
    }else{
        prevGuessArray.push(guess);
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game Over! Random Number Was ${random}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === random){
        displayMessage(`You Won! The number was ${random}`);
        endGame();
    }else if(guess < random){
        displayMessage('Number is Low')
    }else if(guess > random){
        displayMessage('Number is High')
    }
}

function displayGuess(guess){
    userInput.value = '';
    prevGuess.innerHTML += `${guess} `
    numGuess++;
    remGuess.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrhigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p)
    playgame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function() {
        random = parseInt(Math.random() * 100 + 1); 
        prevGuessArray = [];
        numGuess = 1;
        prevGuess.innerHTML = "";
        remGuess.innerHTML = "10";
        lowOrhigh.innerHTML = "";
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playgame = true;
    });
}
