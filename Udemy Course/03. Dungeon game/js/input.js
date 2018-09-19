const keyLeftArrow = 37;
const keyRightArrow = 39;
const keyUpArrow = 38;
const keyDownArrow = 40;

function keySet(keyEvent, whichHero, setTo) {
    if (keyEvent.keyCode == whichHero.controlKeyLeft) {
        whichHero.keyHeldLeft = setTo;
    }

    if (keyEvent.keyCode == whichHero.controlKeyRight) {
        whichHero.keyHeldRight = setTo;
    }

    if (keyEvent.keyCode == whichHero.controlKeyUp) {
        whichHero.keyHeldUp = setTo;
    }

    if (keyEvent.keyCode == whichHero.controlKeyDown) {
        whichHero.keyHeldDown = setTo;
    }
}

function keyPressed(evt) {
    keySet(evt, batman, true);
}

function keyReleased(evt) {
    keySet(evt, batman, false);
}

function setupInput() {
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);

    batman.setupInput(keyUpArrow, keyRightArrow, keyDownArrow, keyLeftArrow);
}