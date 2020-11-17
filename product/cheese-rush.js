window.addEventListener("load", titleScreen);
let lives = 3;
let score = 0;



function titleScreen() {
    console.log("function titleScreen");

    document.querySelector("#title_screen_button_play").addEventListener("click", startGame);
    document.querySelector("#title_screen_button_instructions").addEventListener("click", instructions);
    document.querySelector("#titlescreen-buttons").classList.remove("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#button-restart2").classList.add("hidden");
    document.querySelector("#button-home2").classList.add("hidden");
    document.querySelector("#level_complete").classList.add("hidden");
    document.querySelector("#button-restart1").classList.add("hidden");
    document.querySelector("#button-home1").classList.add("hidden");

    document.querySelector("#container5").classList.value = "";
    document.querySelector("#cheese1").classList.value = "";
    document.querySelector("#container6").classList.value = "";
    document.querySelector("#cheese2").classList.value = "";
    document.querySelector("#container66").classList.value = "";
    document.querySelector("#cheese3").classList.value = "";
    document.querySelector("#container666").classList.value = "";
    document.querySelector("#cheese4").classList.value = "";
    document.querySelector("#container7").classList.value = "";
    document.querySelector("#mousetrap1").classList.value = "";
    document.querySelector("#container77").classList.value = "";
    document.querySelector("#mousetrap2").classList.value = "";
     document.querySelector("#container4").classList.value = "";
    document.querySelector("#cat").classList.value = "";
    document.querySelector("#heart1").classList.value = "";
    document.querySelector("#heart2").classList.value = "";
    document.querySelector("#heart3").classList.value = "";
}

function startGame() {

    console.log("function startGame");

    score = 0;

    document.querySelector("#level_complete").classList.add("hidden");
    document.querySelector("#button-restart1").classList.add("hidden");
    document.querySelector("#button-home1").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#button-restart2").classList.add("hidden");
    document.querySelector("#button-home2").classList.add("hidden");
    document.querySelector("#titlescreen-buttons").classList.add("hidden");

    document.querySelector("#heart1").classList.add("position8");
    document.querySelector("#heart2").classList.add("position9");
    document.querySelector("#heart3").classList.add("position10");

    document.querySelector("#container5").classList.add("falling");
    document.querySelector("#container5").classList.add("spritePosition1");
    document.querySelector("#cheese1").classList.add("rolling");

    document.querySelector("#container6").classList.add("falling");
    document.querySelector("#container6").classList.add("spritePosition2");
    document.querySelector("#cheese2").classList.add("rolling");

    document.querySelector("#container66").classList.add("falling");
    document.querySelector("#container66").classList.add("spritePosition3");
    document.querySelector("#cheese3").classList.add("rolling");

    document.querySelector("#container666").classList.add("falling");
    document.querySelector("#container666").classList.add("spritePosition4");
    document.querySelector("#cheese4").classList.add("rolling");

    document.querySelector("#container7").classList.add("falling");
    document.querySelector("#container7").classList.add("spritePosition5");
    document.querySelector("#mousetrap1").classList.add("rolling");

    document.querySelector("#container77").classList.add("falling");
    document.querySelector("#container77").classList.add("spritePosition6");
    document.querySelector("#mousetrap2").classList.add("rolling");

    document.querySelector("#container4").classList.add("horizontal");
    document.querySelector("#cat").classList.add("mirror-disappear");


document.querySelector("#container5").addEventListener("click", clickCheese1);
document.querySelector("#container6").addEventListener("click", clickCheese2);
document.querySelector("#container66").addEventListener("click", clickCheese3);
document.querySelector("#container666").addEventListener("click", clickCheese4);
document.querySelector("#container7").addEventListener("click", clickMousetrap1);
document.querySelector("#container77").addEventListener("click", clickMousetrap2);
document.querySelector("#container4").addEventListener("click", clickCat);

//Lives

document.querySelector("#mousetrap1").addEventListener("click", loseLife);
document.querySelector("#mousetrap2").addEventListener("click", loseLife);
document.querySelector("#cat").addEventListener("click", loseLife);

//Score

document.querySelector("#cheese1").addEventListener("click", getPoints);
document.querySelector("#cheese2").addEventListener("click", getPoints);
document.querySelector("#cheese3").addEventListener("click", getPoints);
document.querySelector("#cheese4").addEventListener("click", getPoints);

}


function instructions() {
    console.log("function instructions");
    document.querySelector("#instructions").classList.remove("hidden");
    document.querySelector("#button-cancel").classList.remove("hidden");

    document.querySelector("#button-cancel").addEventListener("click", exitInstructions);
}

function exitInstructions() {
    console.log("function exitInstructions");
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#button-cancel").classList.add("hidden");
}


function clickCheese1() {
    console.log("function clickCheese1");
    document.querySelector("#cheese1").classList.add("paused");
    document.querySelector("#container5").classList.add("paused");
    document.querySelector("#cheese1").classList.add("zoom_out");

    document.querySelector("#cheese1").addEventListener("animationend", restartCheese1);
}

function restartCheese1() {
    console.log("function restartCheese1");
    document.querySelector("#container5").classList.value = "";
    document.querySelector("#cheese1").classList.value = "";
    document.querySelector("#container5").offsetHeight;

    document.querySelector("#container5").classList.add("falling");
    document.querySelector("#cheese1").classList.add("rolling");


    let randPos = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    document.querySelector("#container5").classList.add("spritePosition" + randPos);
}



function clickCheese2() {
    console.log("function clickCheese2");
    document.querySelector("#cheese2").classList.add("paused");
    document.querySelector("#container6").classList.add("paused");
    document.querySelector("#cheese2").classList.add("zoom_out");

    document.querySelector("#cheese2").addEventListener("animationend", restartCheese2);
}

function restartCheese2() {
    console.log("function restartCheese2");
    document.querySelector("#container6").classList.value = "";
    document.querySelector("#cheese2").classList.value = "";
    document.querySelector("#container6").offsetHeight;

    document.querySelector("#container6").classList.add("falling");
    document.querySelector("#cheese2").classList.add("rolling");

    let randPos = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    document.querySelector("#container6").classList.add("spritePosition" + randPos);
}



function clickCheese3() {
    console.log("function clickCheese3");
    document.querySelector("#cheese3").classList.add("paused");
    document.querySelector("#container66").classList.add("paused");
    document.querySelector("#cheese3").classList.add("zoom_out");

    document.querySelector("#cheese3").addEventListener("animationend", restartCheese3);
}

function restartCheese3() {
    console.log("function restartCheese3");
    document.querySelector("#container66").classList.value = "";
    document.querySelector("#cheese3").classList.value = "";
    document.querySelector("#container66").offsetHeight;

    document.querySelector("#container66").classList.add("falling");
    document.querySelector("#cheese3").classList.add("rolling");

    let randPos = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    document.querySelector("#container66").classList.add("spritePosition" + randPos);
}


function clickCheese4() {
    console.log("function clickCheese4");
    document.querySelector("#cheese4").classList.add("paused");
    document.querySelector("#container666").classList.add("paused");
    document.querySelector("#cheese4").classList.add("zoom_out");

    document.querySelector("#cheese4").addEventListener("animationend", restartCheese4);
}

function restartCheese4() {
    console.log("function restartCheese4");
    document.querySelector("#container666").classList.value = "";
    document.querySelector("#cheese4").classList.value = "";
    document.querySelector("#container666").offsetHeight;

    document.querySelector("#container666").classList.add("falling");
    document.querySelector("#cheese4").classList.add("rolling");

    let randPos = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    document.querySelector("#container666").classList.add("spritePosition" + randPos);
}


function clickMousetrap1() {
    console.log("function clickMousetrap1");
    document.querySelector("#mousetrap1").classList.remove("rolling");
    document.querySelector("#container7").classList.add("paused");
    document.querySelector("#mousetrap1").classList.add("zoom_out");

    document.querySelector("#mia").classList.add("mouse");

    document.querySelector("#mia").addEventListener("animationend", restartMouse);

    document.querySelector("#mousetrap1").addEventListener("animationend", restartMousetrap1);
}

function restartMousetrap1() {
    console.log("function restartMousetrap1");
    document.querySelector("#container7").classList.value = "";
    document.querySelector("#mousetrap1").classList.value = "";
    document.querySelector("#container7").offsetHeight;

    document.querySelector("#container7").classList.add("falling");
    document.querySelector("#mousetrap1").classList.add("rolling");

    let randPos = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    document.querySelector("#container7").classList.add("spritePosition" + randPos);
}


function clickMousetrap2() {
    console.log("function clickMousetrap2");
    document.querySelector("#mousetrap2").classList.remove("rolling");
    document.querySelector("#container77").classList.add("paused");
    document.querySelector("#mousetrap2").classList.add("zoom_out");

    document.querySelector("#mia").classList.add("mouse");

    document.querySelector("#mia").addEventListener("animationend", restartMouse);

    document.querySelector("#mousetrap2").addEventListener("animationend", restartMousetrap2);
}

function restartMousetrap2() {
    console.log("function restartMousetrap2");
    document.querySelector("#container77").classList.value = "";
    document.querySelector("#mousetrap2").classList.value = "";
    document.querySelector("#container77").offsetHeight;

    document.querySelector("#container77").classList.add("falling");
    document.querySelector("#mousetrap2").classList.add("rolling");

    let randPos = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    document.querySelector("#container77").classList.add("spritePosition" + randPos);
}


function clickCat() {
    console.log("function clickCat");
    document.querySelector("#cat").classList.add("paused");
    document.querySelector("#container4").classList.add("paused");
    document.querySelector("#cat").classList.add("zoom_out");

    document.querySelector("#mia").classList.add("mouse");

    document.querySelector("#mia").addEventListener("animationend", restartMouse);

    document.querySelector("#cat").addEventListener("animationend", restartCat);
}

function restartCat() {
    console.log("function restartCat");
    document.querySelector("#container4").classList.value = "";
    document.querySelector("#cat").classList.value = "";
    document.querySelector("#container4").offsetHeight;

    document.querySelector("#container4").classList.add("horizontal");
    document.querySelector("#cat").classList.add("mirror-disappear");
}


function restartMouse() {
    console.log("function restartMouse");
    document.querySelector("#mia").classList.remove("mouse");

}


function loseLife() {
    document.querySelector("#heart"+lives).classList.add("hidden");
    lives--;
    console.log("lives");

    if (lives == 0) {
        youLost();}
}

function getPoints() {
    score = score + 1;
    document.querySelector("#points").textContent = score;
    console.log("score");

    if (score == 25) {
        youWon();}
}

//function muteSound() {
//    console.log("function muteSound()");
//    //    TODO Mute sound
//    //    TODO Hide Mute button
//    //    TODO Unhide unmute button
//    //    TODO ->click on Unmute button
//}

//function unmuteSound() {
//    console.log("function unmuteSound()");
//    //    TODO Unmute sound
//    //    TODO Hide Unmute button
//    //    TODO Unhide Mute button
//    //    TODO >click on Mute button
//}



function youLost() {
    console.log("function youLost");
    document.querySelector("#button-restart2").classList.remove("hidden");
    document.querySelector("#button-home2").classList.remove("hidden");
    document.querySelector("#game_over").classList.remove("hidden");

    document.querySelector("#container5").classList.value = "";
    document.querySelector("#cheese1").classList.value = "";
    document.querySelector("#container6").classList.value = "";
    document.querySelector("#cheese2").classList.value = "";
    document.querySelector("#container66").classList.value = "";
    document.querySelector("#cheese3").classList.value = "";
    document.querySelector("#container666").classList.value = "";
    document.querySelector("#cheese4").classList.value = "";
    document.querySelector("#container7").classList.value = "";
    document.querySelector("#mousetrap1").classList.value = "";
    document.querySelector("#container77").classList.value = "";
    document.querySelector("#mousetrap2").classList.value = "";
     document.querySelector("#container4").classList.value = "";
    document.querySelector("#cat").classList.value = "";
    document.querySelector("#heart1").classList.value = "";
    document.querySelector("#heart2").classList.value = "";
    document.querySelector("#heart3").classList.value = "";

    document.querySelector("#button-restart2").addEventListener("click", startGame);
    document.querySelector("#button-home2").addEventListener("click", titleScreen);
    lives = 3
}

function youWon() {
    console.log("function youWon");
    document.querySelector("#button-restart1").classList.remove("hidden");
    document.querySelector("#button-home1").classList.remove("hidden");
    document.querySelector("#level_complete").classList.remove("hidden");

    document.querySelector("#container5").classList.value = "";
    document.querySelector("#cheese1").classList.value = "";
    document.querySelector("#container6").classList.value = "";
    document.querySelector("#cheese2").classList.value = "";
    document.querySelector("#container66").classList.value = "";
    document.querySelector("#cheese3").classList.value = "";
    document.querySelector("#container666").classList.value = "";
    document.querySelector("#cheese4").classList.value = "";
    document.querySelector("#container7").classList.value = "";
    document.querySelector("#mousetrap1").classList.value = "";
    document.querySelector("#container77").classList.value = "";
    document.querySelector("#mousetrap2").classList.value = "";
     document.querySelector("#container4").classList.value = "";
    document.querySelector("#cat").classList.value = "";
    document.querySelector("#heart1").classList.value = "";
    document.querySelector("#heart2").classList.value = "";
    document.querySelector("#heart3").classList.value = "";

    document.querySelector("#button-restart1").addEventListener("click", startGame);
    document.querySelector("#button-home1").addEventListener("click", titleScreen);
    score = 0
}
