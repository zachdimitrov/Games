var backgroundColor = "black";
var canvas, context;

var batman = new heroClass();

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
    loadLevel(levels[0]);
}


function updateAll() {
    drawWorlds();
    batman.draw();
    batman.move();
}

function loadLevel(level) {
    worldGrid = level.slice();
    batman.reset(heroPic, "Batman");
}