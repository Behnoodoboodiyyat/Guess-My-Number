'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number !';

// document.querySelector('.number').textContent= 13;
// document.querySelector('.score').textContent= 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener
('click' , function(){
    const guess =Number(document.querySelector('.guess').value);

    console.log(guess , typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = "No number !!";
    }
    else if(guess == secretNumber){
        document.querySelector('.message').textContent = "Correct Number :)"
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'
        if(score > highScore)
        {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }
    else if(guess > secretNumber){
        if(score > 1)
        {
            document.querySelector('.message').textContent = "too high !! :)"
            score--;
            document.querySelector('.score').textContent = score;

        }
        else{
            document.querySelector('.message').textContent = "you lost the game !!"
            document.querySelector('.score').textContent = 0;
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#FF0000';


        }

    }
    else if(guess < secretNumber){
        if(score > 1)
        {
            document.querySelector('.message').textContent = "too low !! :)"
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = "you lost the game !!";
            document.querySelector('.score').textContent = 0;
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#FF0000';


        }
    }

});
 


document.querySelector('.again').addEventListener('click' , function(){
    // document.querySelector('.guess').textContent = '';
    location.reload(); 
});