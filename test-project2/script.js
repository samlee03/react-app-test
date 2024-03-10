var allButtons = document.getElementsByClassName("button-choice");
var playButton = document.getElementById("play");
var isPlayingSequence = false;
var sequence = [];

// Helper Functions
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var wait = (ms) => {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}
/* *** */

function activateButton(buttonElement, buttonId){
    switch (buttonId){
        case (1):
            console.log("activated button");
            buttonElement.style.backgroundColor = "black";
            break;
        default:
            break;
    }
}

function playSequence(seqAmt, buttonAmt){
    isPlayingSequence = true;
    for (let i = 0; i < seqAmt; i++){
        var randNum = getRandomInt(buttonAmt) + 1;
        console.log(randNum);

        sequence[i] = randNum;
        // allButtons[randNum-1].style.backgroundColor = "black";
        // allButtons[randNum-1].style.backgroundColor = "red";

        // sequence[i] = randNum;
        // allButtons[randNum-1].style.backgroundColor = "black";
        // allButtons[randNum-1].style.backgroundColor = "red";
    }
    console.log("Sequence: " + sequence);
}

// playButton.addEventListener('click', () => activateButton(allButtons[0], 1));
playButton.addEventListener('click', function(){
    isPlayingSequence? "" : playSequence(3,3);
});