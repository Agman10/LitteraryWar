var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var game = new Game();

var keysDown = [];

document.addEventListener("keydown", event => {
    if (!keysDown[event.keyCode]) {
        document.dispatchEvent(new Event(event.code))
    }
    keysDown[event.keyCode] = true;
})

document.addEventListener("keyup", event => {
    keysDown[event.keyCode] = false;
})

window.onload = () => {
    game.start();
    stars.push();
    console.log(wall.x + " " + wall.y)
}