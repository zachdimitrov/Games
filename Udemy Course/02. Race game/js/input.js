const keyLeftArrow = 37;
const keyRightArrow = 39;
const keyUpArrow = 38;
const keyDownArrow = 40;

var keyHeldGas = false;
var keyHeldReverse = false;
var keyHeldLeft = false;
var keyHeldRight = false;

var mouseX = 0;
var mouseY = 0;

function updateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;
}

function keyPressed(evt) {
    if (evt.keyCode == keyLeftArrow) {
        keyHeldLeft = true;
    }

    if (evt.keyCode == keyRightArrow) {
        keyHeldRight = true;
    }

    if (evt.keyCode == keyUpArrow) {
        keyHeldGas = true;
    }

    if (evt.keyCode == keyDownArrow) {
        keyHeldReverse = true;
    }
}

function keyReleased(evt) {
    if (evt.keyCode == keyLeftArrow) {
        keyHeldLeft = false;
    }

    if (evt.keyCode == keyRightArrow) {
        keyHeldRight = false;
    }

    if (evt.keyCode == keyUpArrow) {
        keyHeldGas = false;
    }

    if (evt.keyCode == keyDownArrow) {
        keyHeldReverse = false;
    }
}

function setupInput() {
    canvas.addEventListener("mousemove", updateMousePos);
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);
}