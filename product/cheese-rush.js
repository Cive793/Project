window.addEventListener("load", startGame);

function startGame() {
    console.log("function startGame");
    document.querySelector("#container5").classList.add("falling");
    document.querySelector("#container5").classList.add("position5");
    document.querySelector("#container6").classList.add("falling");
    document.querySelector("#container6").classList.add("position6");
    document.querySelector("#cheese1").classList.add("rolling");

}
