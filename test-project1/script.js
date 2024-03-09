var startButton = document.getElementById("start-button");
var body = document.getElementById("body");
var lifeDisplay = document.getElementById("life-display");
var title = document.getElementById("title");
var stageDisplay = document.getElementById("stage-display");

var startElements = [startButton, lifeDisplay, title];
var lives = 3;
var stage = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function wipeButtons() {
    var allButtons = document.getElementsByTagName("button");
    while (allButtons[0]) {
        allButtons[0].remove();
    }
}

function decrementLife(){
    lives = lives - 1;
    lifeDisplay.innerHTML = ("lives left: " + lives);
    switch (lives){
        case 2:
            lifeDisplay.style.color = "#c91c36";
            break;
        case 1:
            lifeDisplay.style.color = "#ff0026";
            break;
        case 0:
            wipeButtons();
            var myText = document.createElement("h2");
            myText.innerHTML = "no more lives available";
            body.appendChild(myText);
    }
}

function makeElement(elementName, className, n, elementText){
    for (let i = 0; i < n; i++){
        var myElement = document.createElement(elementName);
        myElement.innerHTML = elementText;
        myElement.classList.add(className);
        if (className == "fake-button"){
            myElement.addEventListener("click", decrementLife);
        }
        if (className == "real-button"){
            myElement.addEventListener("click", incrementStage);
        }
        
        body.appendChild(myElement);
    }
}
function shuffle(amt){
    var myNumber = getRandomInt(amt);
    for (let i = 0; i < amt; i++){
        if (i == myNumber){
            makeElement("button", "real-button", 1, "");
        }
        else {
            makeElement("button", "fake-button", 1, "");
        }
    }
}
function incrementStage(){
    stage += 1;
    console.log("New stage: " + stage);
    startButton.remove();
    switch(stage){
        case(1):
            stageDisplay.innerHTML = ("current stage: " + stage);
            shuffle(10);
            break;
        case(2):
            wipeButtons();
    }
}
// while (stage < 2){

startButton.addEventListener("click", incrementStage);
    
// }
