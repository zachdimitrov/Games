const speedDecay = 0.95;
var movePower = 0.5;
const turningForce = 0.1;
const minSpeedToTurn = 0.5;

function heroClass() {
    this.X = 80;
    this.Y = 400;
    this.speed = 0;
    this.ang = -Math.PI / 2;
    this.myHeroPic;
    this.name = "Untitled Hero";

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

    this.reset = function(whichImage, heroName) {
        this.myHeroPic = whichImage;
        this.name = heroName;
        this.speed = 0;

        for (let j = 0; j < worldRows; j++) {
            for (let i = 0; i < worldCols; i++) {
                let arrayIndex = rowColToArrayIndex(i, j);
                if (worldGrid[arrayIndex] == worldPlayer) {
                    worldGrid[arrayIndex] = worldRoad;
                    this.ang = -Math.PI / 2;
                    this.X = i * worldW + worldW / 2;
                    this.Y = j * worldH + worldH / 2;
                    return;
                }
            }
        }
        console.log("NO PLAYER START FOUND!");
    }

    this.move = function() {
        this.speed *= speedDecay;
        if (this.keyHeldGas) {
            this.speed += movePower;
        }

        if (this.keyHeldReverse) {
            this.speed -= movePower;
        }

        if (Math.abs(this.speed) > minSpeedToTurn) {
            if (this.keyHeldLeft) {
                this.ang -= turningForce;
            }

            if (this.keyHeldRight) {
                this.ang += turningForce;
            }
        }

        this.X += Math.cos(this.ang) * this.speed;
        this.Y += Math.sin(this.ang) * this.speed;

        heroWorldHandle(this);
    }

    this.draw = function() {
        drawRotatedImage(this.myHeroPic, this.X, this.Y, this.ang);
    }
};