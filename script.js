'use strict'

let randNum = Math.floor(Math.random() * 20) + 1

const againEl = document.querySelector('.again')
let displayNumberEl = document.querySelector('.display-number p')
const checkBtn = document.querySelector('.check')
let guessEl = document.querySelector('.correct')
let scoreEl = document.querySelector('.score span')
let highscoreEl = document.querySelector('.highscore span')
let initialScore = 20
let highscore = 0

scoreEl.textContent = initialScore

const displayMessage = function(message){
    guessEl.textContent = message
}

checkBtn.addEventListener('click', function() {
    const inputVal = Number(document.querySelector('.guess-input').value)
    if(!inputVal){
        // guessEl.textContent = '⛔️ No Number!'
        displayMessage('⛔️ No Number!')
    }
    else if(inputVal === randNum){
        // guessEl.textContent = "You've guessed it right"
        displayMessage("You've guessed it right")
        document.querySelector('body').style.backgroundColor = '#60b347'
        if(initialScore > highscore){
            highscore = initialScore
            highscoreEl.textContent = highscore
        }
        displayNumberEl.textContent = randNum
    }
    else if(inputVal !== randNum){
        if(initialScore > 1){
            // guessEl.textContent = inputVal > randNum? "Number too high": "Number too low"
            displayMessage(inputVal > randNum? "Number too high": "Number too low")
            initialScore--
            scoreEl.textContent = initialScore
        }else{
            // guessEl.textContent = "You lost the game"
            displayMessage("You lost the game")
            scoreEl.textContent = 0
        }
    }
    //     too high
    // else if(inputVal > randNum){  
    //     if(initialscore > 1){
    //         guessEl.textContent = "Number too high"
    //         initialScore--
    //         scoreEl.textContent = initialScore
    //     }

    //     //too low
    // }else if(inputVal < randNum) {
    //     if(initialScore > 1){
    //         guessEl.textContent = "Number too low"
    //         initialScore--
    //         scoreEl.textContent = initialScore
    //     }else{
    //         guessEl.textContent = "You lost the game"
    //         scoreEl.textContent = 0
    //     }
    // }
})

againEl.addEventListener("click", function(){
    randNum = Math.floor(Math.random() * 20) + 1
    initialScore = 20
    // guessEl.textContent = "Start Guessing..."
    displayMessage("Start Guessing...")
    document.querySelector('.guess-input').value = ''
    scoreEl.textContent = initialScore
    document.querySelector('body').style.backgroundColor = '#222'
    displayNumberEl.textContent = '?'
})
