console.log("This is my first line of code");
var startButton = document.getElementById("start-button");
var body = document.getElementById("body");

function wipeElements() {
    var body = document.getElementById('body');

    while(body[0].className != "lives") {
        body[0].removeChild(body[0]);
    }
}
var lives = 3;
var stage = 0;
function makeElement(elementName, className, n){
    for (let i = 0; i < n; i++){
        var myElement = document.createElement(elementName);
        myElement.classList.add(className);
        body.appendChild(myElement);
    }
}
function incrementStage(){
    stage += 1;
    console.log("New stage: " + stage);
    startButton.remove();
    switch(stage){
        case(1):
            makeElement("button", "fake-button", 3);
            makeElement("button", "real-button", 1);
            makeElement("button", "fake-button", 2);
    }
}
// while (stage < 2){

startButton.addEventListener("click", incrementStage);
    
// }
