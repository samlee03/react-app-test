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
function setChoices(choices, correct, correctAns, difference){
    switch(correct){
        case 0:
            choices.children[0].innerHTML = correctAns;
            choices.children[1].innerHTML = parseInt(correctAns) + 1*difference;
            choices.children[2].innerHTML = parseInt(correctAns) + 2*difference;
            choices.children[3].innerHTML = parseInt(correctAns) + 3*difference;
            break;
        case 1:
            choices.children[0].innerHTML = parseInt(correctAns) + -1*difference;
            choices.children[1].innerHTML = correctAns;
            choices.children[2].innerHTML = parseInt(correctAns) + 2*difference;
            choices.children[3].innerHTML = parseInt(correctAns) + 3*difference;
            break;
        case 2:
            choices.children[0].innerHTML = parseInt(correctAns) + -2*difference;
            choices.children[1].innerHTML = parseInt(correctAns) + -1*difference;
            choices.children[2].innerHTML = correctAns;
            choices.children[3].innerHTML = parseInt(correctAns) + 1*difference;
            break;
        case 3:
            choices.children[0].innerHTML = parseInt(correctAns) + -3*difference;
            choices.children[1].innerHTML = parseInt(correctAns) + -2*difference;
            choices.children[2].innerHTML = parseInt(correctAns) + -1*difference;
            choices.children[3].innerHTML = correctAns;
            break;
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
            var randNum1 = getRandNum(1, 20);
            var randNum2 = getRandNum(1, 20);

            input1_ = randNum1;
            input2_ = randNum2;

            var correctAns = randNum1 + randNum2;
            choices.children[correctChoice].innerHTML = correctAns;
            console.log(correctChoice);
            setChoices(choices, correctChoice, correctAns, 1);
    } else if (operationType == "subtract"){
            var randNum1 = getRandNum(1, 20);
            var randNum2 = randNum1 + getRandNum(1, 20);

            input1_ = randNum2;
            input2_ = randNum1;

            var correctAns = randNum2 - randNum1;
            choices.children[correctChoice].innerHTML = correctAns;
            console.log(correctChoice);
            setChoices(choices, correctChoice, correctAns, 1);
    } else if (operationType == "multiply"){
        // if (score < 5){
            var randNum1 = getRandNum(0, 13);
            var randNum2 = getRandNum(0, 13);

            input1_ = randNum1;
            input2_ = randNum2;

            var correctAns = randNum2 * randNum1;
            choices.children[correctChoice].innerHTML = correctAns;
            console.log(correctChoice);
            setChoices(choices, correctChoice, correctAns, 1);
        // }
        //multiply
    } else {
        // if (score < 5){
            var randNum1 = getRandNum(1, 12);
            var randNum2 = getRandNum(1, 12);
            var randNum3 = randNum1 * randNum2;
            input1_ = randNum3;
            input2_ = randNum1;
            var correctAns = randNum2;
            choices.children[correctChoice].innerHTML = correctAns;
            console.log(correctChoice);
            setChoices(choices, correctChoice, correctAns, 1);
        // }
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

    var choices = document.getElementById("choices");


    while (isCorrect){
        let rand = getRandNum(0, 4);
        makeQuestion(operations[rand], score);

  
        choices.children[0].addEventListener("click", function(){
            if (choices.children[0].classList.contains("correct-choice")){
                console.log('correct answer');
            } else {
                console.log('wrong answer');
            }
        })
        choices.children[1].addEventListener("click", function(){
            if (choices.children[0].classList.contains("correct-choice")){
                console.log('correct answer');
            } else {
                console.log('wrong answer');
            }
        })
        choices.children[2].addEventListener("click", function(){
            if (choices.children[0].classList.contains("correct-choice")){
                console.log('correct answer');
            } else {
                console.log('wrong answer');
            }
        })
        choices.children[3].addEventListener("click", function(){
            if (choices.children[0].classList.contains("correct-choice")){
                console.log('correct answer');
            } else {
                console.log('wrong answer');
            }
        })

        isCorrect = false;


    }
}

playGame();


