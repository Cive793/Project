window.addEventListener("load", titleScreen);
let lives = 3;
let score = 0;
let timeLeft = 20;
let gameIsEnded = false;

let cheeseSound11 = document.querySelector("cheeseSound1");
let cheeseSound22 = document.querySelector("cheeseSound2");
let cheeseSound33 = document.querySelector("cheeseSound3");
let cheeseSound44 = document.querySelector("cheeseSound4");
let mousetrapSound11 = document.querySelector("mousetrapSound1");
let mousetrapSound22 = document.querySelector("mousetrapSound2");
let catSound1 = document.querySelector("catSound");
let loseSound1 = document.querySelector("loseSound");
let winSound1 = document.querySelector("winSound");
let bgMusic1 = document.querySelector("bgMusic");



function titleScreen() {
    console.log("function titleScreen");

    document.querySelector("#title_screen_button_play").addEventListener("click", startGame);
//    document.querySelector("#title_screen_button_play").addEventListener("click", playBackgroundMusic);
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
    gameIsEnded = false;
    score = 0;
    timeLeft = 20;
    document.querySelector("#points").textContent = score;
    document.querySelector("#time").textContent = timeLeft;
    startTimer();

    document.querySelector("#bgMusic").play();
    bgMusic.currentTime = 0;


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
document.querySelector("#button-sound-on").addEventListener("click", muteSound);
document.querySelector("#button-sound-off").addEventListener("click", unmuteSound);

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

    document.querySelector("#cheeseSound1").play();
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

    document.querySelector("#cheeseSound2").play();
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

    document.querySelector("#cheeseSound3").play();
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

    document.querySelector("#cheeseSound4").play();
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

    document.querySelector("#mousetrapSound1").play();
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

    document.querySelector("#mousetrapSound2").play();
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

    document.querySelector("#catSound").play();
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

    if (score == 20) {
        youWon();}
}

function startTimer() {
    console.log("startTimer");

    if (gameIsEnded == false) {

    if (timeLeft == 0) {
        youLost();
    } else {
        setTimeout (showTime, 1000);
    }
    }
}

function showTime() {
    console.log("showTime");
    if (timeLeft > 0) {
        timeLeft--;
        startTimer();
        document.querySelector("#time").textContent = timeLeft;
    } else {
        youLost();
    }
}


//function playBackgroundMusic() {
//    console.log("function playBackgroundMusic()");
////    bgMusic.currentTime = 0;
//    document.querySelector("#bgMusic").play();
//}

function muteSound() {
    console.log("function muteSound()");
    document.querySelector("#button-sound-off").classList.remove("hidden");
    bgMusic.muted = true;
    cheeseSound1.muted = true;
    cheeseSound2.muted = true;
    cheeseSound3.muted = true;
    cheeseSound4.muted = true;
    mousetrapSound1.muted = true;
    mousetrapSound2.muted = true;
    catSound.muted = true;
    winSound.muted = true;
    loseSound.muted = true;

}

function unmuteSound() {
    console.log("function unmuteSound()");
    document.querySelector("#button-sound-off").classList.add("hidden");
    bgMusic.muted = false;
    cheeseSound1.muted = false;
    cheeseSound2.muted = false;
    cheeseSound3.muted = false;
    cheeseSound4.muted = false;
    mousetrapSound1.muted = false;
    mousetrapSound2.muted = false;
    catSound.muted = false;
    winSound.muted = false;
    loseSound.muted = false;
}



function youLost() {
    console.log("function youLost");

    document.querySelector("#bgMusic").pause();
    document.querySelector("#loseSound").play();
    document.querySelector("#button-restart2").classList.remove("hidden");
    document.querySelector("#button-home2").classList.remove("hidden");
    document.querySelector("#game_over").classList.remove("hidden");

    gameIsEnded = true;

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
    lives = 3;
    score = 0;

}

function youWon() {
    console.log("function youWon");

    document.querySelector("#bgMusic").pause();
    document.querySelector("#winSound").play();
    document.querySelector("#button-restart1").classList.remove("hidden");
    document.querySelector("#button-home1").classList.remove("hidden");
    document.querySelector("#level_complete").classList.remove("hidden");

    gameIsEnded = true;

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
    score = 0;
    lives = 3;
}
