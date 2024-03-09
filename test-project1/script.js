var startButton = document.getElementById("start-button");
var body = document.getElementById("body");
var lifeDisplay = document.getElementById("life-display");
var title = document.getElementById("title");
var stageDisplay = document.getElementById("stage-display");
var hueDisplay = document.getElementById("hue-display");
var difficultyDisplay = document.getElementById("difficulty-display");
var startElements = [startButton, lifeDisplay, title];
var lives = 3;
var stage = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getColor(h,s,l){
    return ("hsl(" + h + "," + s + "%," + l + "%)");
}

function wipeButtons() {
    var allButtons = document.getElementsByTagName("button");
    while (allButtons[0]) {
        allButtons[0].remove();
    }
}
function restartStages() {
    stage = 0;
    lives = 3;
    lifeDisplay.innerHTML = ("lives left: 3");
    gameoverMessage = document.getElementsByClassName("gameover-message");
    gameoverMessage[0].remove(); 
    incrementStage();
    this.remove();
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
            myText.classList.add("gameover-message");
            myText.innerHTML = "no more lives available";
            var retryButton = document.createElement("button");
            retryButton.classList.add("retry-button");
            retryButton.innerHTML = "retry";
            retryButton.addEventListener("click", restartStages);
            body.appendChild(myText);
            body.appendChild(retryButton);
    }
}

function makeElement(elementName, className, n, elementText, stage, color){
    for (let i = 0; i < n; i++){
        var myElement = document.createElement(elementName);
        myElement.innerHTML = elementText;
        myElement.classList.add(className);

        if (className == "fake-button"){
            myElement.addEventListener("click", decrementLife);
            myElement.style.backgroundColor = color;
        }
        if (className == "real-button"){
            myElement.addEventListener("click", incrementStage);
            myElement.style.backgroundColor = color;
        }
        
        body.appendChild(myElement);
    }
}
function shuffle(amt){
    var myNumber = getRandomInt(amt);
    // Color Maker
    var hue = getRandomInt(361);
    var saturation = getRandomInt(20) + 65;
    var lightness = getRandomInt(5) + 48;
    var fakeColor = getColor(hue, saturation, lightness, stage);
    var realColor = "green";
    switch (stage){
        case 1:
            ((hue + 50) > 360)? hue+= 50 : hue-=50;
            realColor = getColor(hue, saturation, lightness);
        case 2:
            ((hue + 30) > 360)? hue+= 30 : hue-=30;
            realColor = getColor(hue, saturation, lightness);
        case 3:
            ((hue + 25) > 360)? hue+= 25 : hue-=25;
            realColor = getColor(hue, saturation, lightness);
        case 4:
            ((hue + 10) > 360)? hue+= 10 : hue-=10;
            realColor = getColor(hue, saturation, lightness);
        case 5:
            ((hue + 5) > 360)? hue+= 5 : hue-=5;
            realColor = getColor(hue, saturation, lightness);
        case 6:
            ((hue + 1) > 360)? hue+= 1 : hue-=1;
            realColor = getColor(hue, saturation, lightness);
    }
    /* *** */
    for (let i = 0; i < amt; i++){
        if (i == myNumber){
            makeElement("button", "real-button", 1, "", stage, realColor);
        }
        else {
            makeElement("button", "fake-button", 1, "", stage, fakeColor);
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
            difficultyDisplay.innerHTML = ("difficulty: too easy");
            shuffle(3);
            hueDisplay.innerHTML = ("hue difference: 50")
            break;
        case(2):
            wipeButtons();
            stageDisplay.innerHTML = ("current stage: " + stage);
            difficultyDisplay.innerHTML = ("difficulty: very easy");
            hueDisplay.innerHTML = ("hue difference: 30");
            shuffle(5);
            break;
        case(3):
            wipeButtons();
            stageDisplay.innerHTML = ("current stage: " + stage);
            difficultyDisplay.innerHTML = ("difficulty: easy");
            shuffle(5);
            hueDisplay.innerHTML = ("hue difference: 25");

            break;
        case(4):
            wipeButtons();
            stageDisplay.innerHTML = ("current stage: " + stage);
            difficultyDisplay.innerHTML = ("difficulty: medium");

            shuffle(10);
            hueDisplay.innerHTML = ("hue difference: 10");

            break;
        case(5):
            wipeButtons();
            stageDisplay.innerHTML = ("current stage: " + stage);
            difficultyDisplay.innerHTML = ("difficulty: hard");

            shuffle(10);
            hueDisplay.innerHTML = ("hue difference: 5");

            break;
        case(6):
            wipeButtons();
            stageDisplay.innerHTML = ("current stage: " + stage);
            difficultyDisplay.innerHTML = ("difficulty: very hard");

            shuffle(10);
            hueDisplay.innerHTML = ("hue difference: 1")
            break;
        default:
            document.write("you beat all the stages so far");
    }
}
// while (stage < 2){

startButton.addEventListener("click", incrementStage);
    
// }
