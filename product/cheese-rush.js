window.addEventListener("load", titleScreen);


function titleScreen() {
    console.log("function titleScreen");

    document.querySelector("#title_screen_button_play").addEventListener("click", startGame);
}

function startGame() {
    console.log("function startGame");
    document.querySelector("#titlescreen-buttons").classList.add("hidden");
    document.querySelector("#container5").classList.add("falling");
    document.querySelector("#container5").classList.add("position5");
    document.querySelector("#cheese1").classList.add("rolling");
    document.querySelector("#container6").classList.add("falling");
    document.querySelector("#container6").classList.add("position6");
    document.querySelector("#cheese2").classList.add("rolling");
    document.querySelector("#container7").classList.add("falling");
    document.querySelector("#container7").classList.add("position7");
    document.querySelector("#mousetrap1").classList.add("rolling");
    document.querySelector("#container4").classList.add("horizontal");
    document.querySelector("#cat").classList.add("mirror-disappear");

document.querySelector("#container5").addEventListener("click", clickCheese1);

document.querySelector("#container6").addEventListener("click", clickCheese2);

document.querySelector("#container7").addEventListener("click", clickMousetrap1);

document.querySelector("#container4").addEventListener("click", clickCat);
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
    document.querySelector("#container5").classList.add("position5");
    document.querySelector("#cheese1").classList.add("rolling");
}



function clickCheese2() {
    console.log("function clickCheese2");
    document.querySelector("#cheese2").classList.add("paused");
    document.querySelector("#container6").classList.add("paused");
    document.querySelector("#cheese2").classList.add("zoom_out");

    document.querySelector("#cheese2").addEventListener("animationend", restartCheese2);
}

function restartCheese2() {
    console.log("function restartCheese12");
    document.querySelector("#container6").classList.value = "";
    document.querySelector("#cheese2").classList.value = "";
    document.querySelector("#container6").offsetHeight;

    document.querySelector("#container6").classList.add("falling");
    document.querySelector("#container6").classList.add("position6");
    document.querySelector("#cheese2").classList.add("rolling");
}



function clickMousetrap1() {
    console.log("function clickMousetrap1");
    document.querySelector("#mousetrap1").classList.remove("rolling");
    document.querySelector("#container7").classList.add("paused");
    document.querySelector("#mousetrap1").classList.add("zoom_out");
    document.querySelector("#mia-neutral").classList.add("hidden");
    document.querySelector("#mia-scared").classList.remove("hidden");

    document.querySelector("#mousetrap1").addEventListener("animationend", restartMousetrap);
}

function restartMousetrap() {
    console.log("function restartMousetrap");
    document.querySelector("#container7").classList.value = "";
    document.querySelector("#mousetrap1").classList.value = "";
    document.querySelector("#container7").offsetHeight;

    document.querySelector("#container7").classList.add("falling");
    document.querySelector("#container7").classList.add("position7");
    document.querySelector("#mousetrap1").classList.add("rolling");
}



function clickCat() {
    console.log("function clickCat");
    document.querySelector("#cat").classList.add("paused");
    document.querySelector("#container4").classList.add("paused");
    document.querySelector("#cat").classList.add("zoom_out");
    document.querySelector("#mia-neutral").classList.add("hidden");
    document.querySelector("#mia-scared").classList.remove("hidden");

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



function
