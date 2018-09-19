const speedDecay = 0.94;
var drivePower = 0.5;
var reversePower = 0.2;
const turningForce = 0.1;
const minSpeedToTurn = 0.5;

function carClass() {
    this.X = 80;
    this.Y = 400;
    this.speed = 0;
    this.ang = -Math.PI / 2;
    this.myCarPic;
    this.name = "Untitled Car";

    this.keyHeldGas = false;
    this.keyHeldReverse = false;
    this.keyHeldLeft = false;
    this.keyHeldRight = false;

    this.controlKeyUp;
    this.controlKeyRight;
    this.controlKeyDown;
    this.controlKeyLeft;

    this.setupInput = function(upKey, rightKey, downKey, leftKey) {
        this.controlKeyUp = upKey;
        this.controlKeyRight = rightKey;
        this.controlKeyDown = downKey;
        this.controlKeyLeft = leftKey;
    }

    this.reset = function(whichImage, carName) {
        this.myCarPic = whichImage;
        this.name = carName;
        this.speed = 0;

        for (let j = 0; j < trackRows; j++) {
            for (let i = 0; i < trackCols; i++) {
                let arrayIndex = rowColToArrayIndex(i, j);
                if (trackGrid[arrayIndex] == trackPlayer) {
                    trackGrid[arrayIndex] = trackRoad;
                    this.ang = -Math.PI / 2;
                    this.X = i * trackW + trackW / 2;
                    this.Y = j * trackH + trackH / 2;
                    return;
                }
            }
        }
        console.log("NO PLAYER START FOUND!");
    }

    this.move = function() {
        this.speed *= speedDecay;
        if (this.keyHeldGas) {
            this.speed += drivePower;
        }

        if (this.keyHeldReverse) {
            this.speed -= reversePower;
        }

        //if (Math.abs(this.speed) > minSpeedToTurn) {
        if (this.keyHeldLeft) {
            this.ang -= turningForce;
        }

        if (this.keyHeldRight) {
            this.ang += turningForce;
        }
        //}

        this.X += Math.cos(this.ang) * this.speed;
        this.Y += Math.sin(this.ang) * this.speed;

        cartrackHandle(this);
    }

    this.draw = function() {
        drawRotatedImage(this.myCarPic, this.X, this.Y, this.ang);
    }
};