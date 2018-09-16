var backgroundColor = "black";
var canvas, context;

window.onload = function() {
    canvas = document.getElementById("game-canvas");
    context = canvas.getContext("2d");
    colorRect(0, 0, canvas.clientWidth, canvas.clientHeight, 'darkgrey');
    colorText("LOADING...", canvas.width / 2, canvas.height / 2);
    loadImages();
}

function startGame() {
    var framesPerSecond = 30;
    setInterval(updateAll, 1000 / framesPerSecond);
    setupInput();
    carReset();
}

function updateAll() {
    carMove();
    cartrackHandle();
    drawtracks();
    carDraw();
}