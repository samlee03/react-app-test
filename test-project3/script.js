function isEmptyString(str) {
    return str.trim().length === 0;
}
function getStreakTrophy(streak){
    if (streak < 2){
        return 0;
    } else if (streak == 2){
        return 1;
    } else if (streak == 3){
        return 2;
    } else if (streak == 4){
        return 3;
    } else if (streak == 5) {
        return 4;
    } else {
        return 5;
    }
}
function changeTrophy(trophy, streak, isWin){
    let gain = 8;
    let loss = 8;
    if (trophy > 799){
        gain = 7;
    } else if (trophy > 899){
        gain = 6;
    } else if (trophy > 999){
        gain = 5;
    } else if (trophy > 1099){
        gain = 4;
    } else if (trophy > 1199){
        gain = 3;
    }
    // Change Trophy
    if (isWin){
        trophy = trophy + gain + getStreakTrophy();
        streak += 1;
    } else {
        // trophy = trophy - 8;
        streak = 0
        document.write("YOU LOST!");
    }
}

function getValue(){
    var numStart = document.getElementById("trophy-count").value;
    var winSeq = document.getElementById("win-loss").value;
    var goalNum = document.getElementById("goal").value;
    var streak = document.getElementById("streak").value;
    isEmptyString(numStart)? numStart = 0: winSeq
    for (let i = 0; i < winSeq.length; i++){
        console.log(winSeq[i] + " ");
        if (winSeq[i] == "W"){
            changeTrophy(numStart, streak, true);
        } else {
            changeTrophy(numStart, streak, false);
        }
    }

}