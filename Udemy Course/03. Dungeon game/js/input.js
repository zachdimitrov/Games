const keyLeftArrow = 37;
const keyRightArrow = 39;
const keyUpArrow = 38;
const keyDownArrow = 40;

const keyW = 87;
const keyD = 68;
const keyS = 83;
const keyA = 65;

var mouseX = 0;
var mouseY = 0;

function updateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;
}

function keySet(keyEvent, whichCar, setTo) {
    if (keyEvent.keyCode == whichCar.controlKeyLeft) {
        whichCar.keyHeldLeft = setTo;
    }

    if (keyEvent.keyCode == whichCar.controlKeyRight) {
        whichCar.keyHeldRight = setTo;
    }

    if (keyEvent.keyCode == whichCar.controlKeyUp) {
        whichCar.keyHeldGas = setTo;
    }

    if (keyEvent.keyCode == whichCar.controlKeyDown) {
        whichCar.keyHeldReverse = setTo;
    }
}

function keyPressed(evt) {
    keySet(evt, batmanCar, true);
    keySet(evt, sedanCar, true);
}

function keyReleased(evt) {
    keySet(evt, batmanCar, false);
    keySet(evt, sedanCar, false);
}

function setupInput() {
    canvas.addEventListener("mousemove", updateMousePos);
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);

    sedanCar.setupInput(keyUpArrow, keyRightArrow, keyDownArrow, keyLeftArrow);
    batmanCar.setupInput(keyW, keyD, keyS, keyA);
}