var backgroundColor = "black";
var canvas, context;

var batmanCar = new carClass();
var sedanCar = new carClass();

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
    loadLevel(levelOne);
}


function updateAll() {
    batmanCar.move();
    sedanCar.move();
    drawtracks();
    batmanCar.draw();
    sedanCar.draw();
}

function loadLevel(level) {
    trackGrid = level.slice();
    batmanCar.reset(carPic, "Batmobil");
    sedanCar.reset(blueCarPic, "Blue Storm");
}