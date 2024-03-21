var allButtons = document.getElementsByClassName("button-choice");
var playButton = document.getElementById("play");
var isPlayingSequence = false;
var sequence = [];
var playerSequence = [];
var score = 0;

// Helper Functions
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/* *** */

function retryDisplay(){
    var buttonCollection = document.getElementById("button-collection");
    var copyOfButtons = Array.from(buttonCollection.children);
    var buttons = allButtons;
    while (buttons[0]){
        buttons[0].remove();
    }
    playButton.remove();

    var retryButton = document.createElement("button");
    retryButton.innerHTML = "retry";
    retryButton.classList.add("retry-button");
    document.body.append(retryButton);
    
    retryButton.addEventListener('click', function(){
        copyOfButtons.forEach(function(button){
            buttonCollection.append(button);
            resetButton(button);
        })
        retryButton.remove();
    })
    sequence = [];
    playerSequence = [];
    score = 0;
    var scoreDisplay = document.getElementById("score");
    scoreDisplay.innerHTML = "score: 0";
    
}
function activateButton(buttonElement){
    buttonElement.style.backgroundColor = "black";
}

function resetButton(buttonElement, buttonId){
    buttonElement.style.backgroundColor = "";
}
function animateButton(buttonElement) {
    // for (let i = 0; i < 1; i++) {
    //   setTimeout(activateButton(buttonElement, 1), i * 1000); // Change 1000 to adjust the delay in milliseconds
    // }
    activateButton(buttonElement);
    setTimeout(() => {
        resetButton(buttonElement);
    }, 500);
}
/* Check for Correctness */
function checkInSequence1() {
    checkInSequence(1);
}
function checkInSequence2() {
    checkInSequence(2);
}
function checkInSequence3() {
    checkInSequence(3);
}

function playingSequence(score){
    if (!isPlayingSequence){
        playSequence(3 + score, 3);
        playButton.removeEventListener('click', () => playingSequence(score));
        b1.removeEventListener("click", checkInSequence1);
        b2.removeEventListener("click", checkInSequence2);
        b3.removeEventListener("click", checkInSequence3);
    }
}
function playSequence(seqAmt, buttonAmt){
    isPlayingSequence = true;
    for (let i = 0; i < seqAmt; i++){
        (function(index){
            var randNum = getRandomInt(buttonAmt) + 1;
            console.log(randNum);
            sequence[i] = randNum;
            setTimeout(() => animateButton(allButtons[randNum-1]), index * 1000);
        })(i);
    }
    setTimeout(function(){
        isPlayingSequence = false;
        playButton.addEventListener('click', () => playingSequence(score));
        b1.addEventListener("click", checkInSequence1);
        b2.addEventListener("click", checkInSequence2);
        b3.addEventListener("click", checkInSequence3);
        console.log("Sequence: " + sequence);
    }, seqAmt * 1000)
}


// playButton.addEventListener('click', () => activateButton(allButtons[0], 1));
playButton.addEventListener('click', () => playingSequence(score));

var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
function lightUpButton(buttonPressed, isCorrect){
    if (!isCorrect){
        // document.write("WRONG ANSWER");
        retryDisplay();
    }
    switch (buttonPressed) {
        case (1):
            isCorrect? b1.style.backgroundColor = "green" : b1.style.backgroundColor = "red";
            if (!isCorrect){
                return;
            }
            setTimeout(function(){
                b1.style.backgroundColor = "";
            }, 500);
            break;
        case (2):
            isCorrect? b2.style.backgroundColor = "green" : b2.style.backgroundColor = "red";
            if (!isCorrect){
                return;
            }
            setTimeout(function(){
                b2.style.backgroundColor = "";
            }, 500);
            break;
        case (3):
            isCorrect? b3.style.backgroundColor = "green" : b3.style.backgroundColor = "red";
            if (!isCorrect){
                return;
            }
            setTimeout(function(){
                b3.style.backgroundColor = "";
            }, 500);
            break;
    }
}
function checkInSequence(buttonPressed){
    playerSequence.push(buttonPressed);
    console.log(playerSequence.length);
    for (let i = 0; i < playerSequence.length; i++){
        if (sequence[i] != playerSequence[i]){
            console.log("WRONG ANSWER");
            playerSequence = [];
            lightUpButton(buttonPressed, false);
            return;
        } else {
            lightUpButton(buttonPressed, true);
        }
    }
    if (playerSequence.length == sequence.length){
        console.log("SEQUENCE COMPLETED +1");
        score++;
        var scoreDisplay = document.getElementById("score");
        scoreDisplay.innerHTML = ("score: " + score);
        playerSequence = [];
        b1.removeEventListener("click", checkInSequence1);
        b2.removeEventListener("click", checkInSequence2);
        b3.removeEventListener("click", checkInSequence3);
        setTimeout(() => playingSequence(score), 1000);
    } 
}

// b1.addEventListener("click", () => checkInSequence(1));
// b2.addEventListener("click", () => checkInSequence(2));
// b3.addEventListener("click", () => checkInSequence(3));