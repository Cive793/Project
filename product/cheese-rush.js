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
}
