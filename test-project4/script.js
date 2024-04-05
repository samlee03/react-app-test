var question = document.getElementById("question");
var choices = document.getElementById("choices");


function getRandNum(min, range){
    return (Math.floor(Math.random() * range) + min);
}

function makeQuestion(operationType, score){
    var data = getInputs(operationType, score);
    if (operationType == "add"){
        //add
        question.innerHTML = "what is " + data.input1 + " + " + data.input2 + "?";
    } else if (operationType == "subtract"){
        question.innerHTML = "what is " + data.input1 + " - " + data.input2 + "?";
        //sub
    } else if (operationType == "multiply"){
        question.innerHTML = "what is " + data.input1 + " x " + data.input2 + "?";
        //multiply
    } else {
        question.innerHTML = "what is " + data.input1 + " / " + data.input2 + "?";
        //quotient
    }
}


function getInputs(operationType, score){
    var input1_ = "0";
    var input2_ = "0";
    var choice1_ = "1";
    var choice2_ = "2";
    var choice3_ = "3";
    var choice4_ = "4";

    var correctChoice = getRandNum(0, 4);
    choices.children[correctChoice].classList.add("correct-choice");
    
    if (operationType == "add"){
        //add
        if (score < 5){
            var randNum1 = getRandNum(1, 20);
            var randNum2 = getRandNum(1, 20);

            input1_ = randNum1;
            input2_ = randNum2;
            
            // if (!(choice))
        }

    } else if (operationType == "subtract"){
        //sub
        if (score < 5){
            var randNum1 = getRandNum(1, 20);
            var randNum2 = randNum1 + getRandNum(1, 20);

            input1_ = randNum2;
            input2_ = randNum1;
        }
    } else if (operationType == "multiply"){
        if (score < 5){
            var randNum1 = getRandNum(0, 13);
            var randNum2 = getRandNum(0, 13);

            input1_ = randNum1;
            input2_ = randNum2;
        }
        //multiply
    } else {
        if (score < 5){
            var randNum1 = getRandNum(1, 12);
            var randNum2 = getRandNum(1, 12);
            var randNum3 = randNum1 * randNum2;
            input1_ = randNum3;
            input2_ = randNum1;
        }
        //quotient
    }

    return {
        input1: input1_,
        input2: input2_,
        choice1: choice1_,
        choice2: choice2_,
        choice3: choice3_,
        choice4: choice4_
    }
}

function playGame(){
    var score = 0;
    var operations = ["add", "subtract", "multiply", "divide"];
    var isCorrect = true;
    while (isCorrect){
        let rand = getRandNum(0, 4);
        makeQuestion(operations[rand], score);
        isCorrect = false;
    }
}

playGame();


