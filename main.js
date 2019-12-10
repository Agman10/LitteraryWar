var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var game = new Game();

window.onload = () => {
    game.start();
}