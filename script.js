const button = document.querySelector('#btn');
button.addEventListener('click', timerOne);

let amountTimeOne = 0;
let amountTimeTwo = 0; 

function timerOne(){

    amountTimeOne = 8;
    amountTimeTwo = 0;

button.removeEventListener('click', timerOne)
    function calculateTimeOne(){

        const countdownOne=document.querySelector("#count");
    
        let minutesOne = Math.floor(amountTimeOne/60);
        let secondsOne= amountTimeOne%60;
    
        amountTimeOne--;
    
        if (secondsOne<10) {
            secondsOne = "0"+secondsOne;
        }
        countdownOne.textContent = `${minutesOne} : ${secondsOne}`;
        if (amountTimeOne<0) {
                stopTimerOne();
            amountTimeOne=0;

            timerTwo()
        }
        function stopTimerOne(){
            clearInterval(timerIdOne);
        }
    }
    let timerIdOne = setInterval(calculateTimeOne,1000);
    }

function timerTwo(){

    amountTimeOne = 0;
    button.addEventListener('click', timerOne);
    amountTimeTwo = 10; 

    function calculateTimeTwo(){
        const countdownTwo=document.querySelector("#count");
    
        let minutesTwo = Math.floor(amountTimeTwo/60);
        let secondsTwo= amountTimeTwo%60;
    
        amountTimeTwo--;

        if (secondsTwo<10) {
            secondsTwo = "0"+secondsTwo;
        }
    
        countdownTwo.textContent = `${minutesTwo} : ${secondsTwo}`;
        if (amountTimeTwo<0) {
                stopTimerTwo();
            amountTimeTwo=0;
            timerOne()
        }
        function stopTimerTwo(){
            clearInterval(timerIdTwo);
        }
    }
    let timerIdTwo = setInterval(calculateTimeTwo,1000);
    }

// const timer = 15;
// let amountTime = timer*60;

// const button = document.querySelector("#btn");
// button.addEventListener("click", function() {
//     document.querySelector('#player').play();

// function calculateTime() {
//     const countdown = document.querySelector("#count");
//     let minutes = Math.floor(amountTime/60);
//     let seconds = amountTime%60;

//     if (seconds < 10) {
//         seconds = "0" + seconds;
//     }
//     countdown.textContent = `${minutes} : ${seconds}`;
//     amountTime--;
//     if (amountTime < 0) {
//         stopTimer();
//         amountTime = 0;
//     }
//     function stopTimer() {
//         clearInterval(timerId);
//     }
// }
// let timerId = setInterval(calculateTime, 1000);
// })