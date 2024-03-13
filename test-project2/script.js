var allButtons = document.getElementsByClassName("button-choice");
var playButton = document.getElementById("play");
var isPlayingSequence = false;
var sequence = [];
var playerSequence = [];

// Helper Functions
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/* *** */

function activateButton(buttonElement){
    // switch (buttonId){
    //     case (1):
    //         console.log("activated button");
    //         buttonElement.style.backgroundColor = "black";
    //         break;
    //     default:
    //         break;
    // }
    buttonElement.style.backgroundColor = "black";
}

function resetButton(buttonElement, buttonId){
    // switch (buttonId){
    //     case (1):
    //         console.log("reset button");
    //         buttonElement.style.backgroundColor = "";
    // }
    buttonElement.style.backgroundColor = "";
}
function animateButton(buttonElement) {
    // for (let i = 0; i < 1; i++) {
    //   setTimeout(activateButton(buttonElement, 1), i * 1000); // Change 1000 to adjust the delay in milliseconds
    // }
    activateButton(buttonElement);
    setTimeout(() => {
        resetButton(buttonElement);
    }, 750);
}
function playingSequence(){
    if (!isPlayingSequence){
        playSequence(3, 3);
        playButton.removeEventListener('click', playingSequence);
    }
}
function playSequence(seqAmt, buttonAmt){
    isPlayingSequence = true;
    for (let i = 0; i < seqAmt; i++){
        (function(index){
            var randNum = getRandomInt(buttonAmt) + 1;
            console.log(randNum);
            sequence[i] = randNum;
            setTimeout(() => animateButton(allButtons[randNum-1]), index * 1250);
        })(i);
    }
    setTimeout(function(){
        isPlayingSequence = false;
        playButton.addEventListener('click', playingSequence);
        console.log("Sequence: " + sequence);
    }, seqAmt * 1250)
}


// playButton.addEventListener('click', () => activateButton(allButtons[0], 1));
playButton.addEventListener('click', playingSequence);

