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

function keySet(keyEvent, whichHero, setTo) {
    if (keyEvent.keyCode == whichHero.controlKeyLeft) {
        whichHero.keyHeldLeft = setTo;
    }

    if (keyEvent.keyCode == whichHero.controlKeyRight) {
        whichHero.keyHeldRight = setTo;
    }

    if (keyEvent.keyCode == whichHero.controlKeyUp) {
        whichHero.keyHeldGas = setTo;
    }

    if (keyEvent.keyCode == whichHero.controlKeyDown) {
        whichHero.keyHeldReverse = setTo;
    }
}

function keyPressed(evt) {
    keySet(evt, batman, true);
}

function keyReleased(evt) {
    keySet(evt, batman, false);
}

function setupInput() {
    canvas.addEventListener("mousemove", updateMousePos);
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);

    batman.setupInput(keyUpArrow, keyRightArrow, keyDownArrow, keyLeftArrow);
}