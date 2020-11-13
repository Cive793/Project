window.addEventListener("load", startGame);

function startGame() {
    console.log("function startGame");
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
    document.querySelector("#container4").classList.add("position4");


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
}


function clickCheese2() {
    console.log("function clickCheese2");
    document.querySelector("#cheese2").classList.add("paused");
    document.querySelector("#container6").classList.add("paused");
    document.querySelector("#cheese2").classList.add("zoom_out");
}

function clickMousetrap1() {
    console.log("function clickMousetrap1");
    document.querySelector("#mousetrap1").classList.remove("rolling");
    document.querySelector("#container7").classList.add("paused");
    document.querySelector("#mousetrap1").classList.add("zoom_out");
    document.querySelector("#mia-neutral").classList.add("hidden");
    document.querySelector("#mia-scared").classList.remove("hidden");
}


function clickCat() {
    console.log("function clickCat");
    document.querySelector("#cat").classList.add("paused");
    document.querySelector("#container4").classList.add("paused");
    document.querySelector("#cat").classList.add("zoom_out");
    document.querySelector("#mia-neutral").classList.add("hidden");
    document.querySelector("#mia-scared").classList.remove("hidden");
}

document.querySelector("#container4").addEventListener("animationend", newPosition)

function newPosition() {
    console.log("function newPosition");
    document.querySelector("#container4").classList.add("mirror");
    document.querySelector("#container4").classList.add("horizontal2");
    document.querySelector("#container4").classList.add("position4-2");
}

