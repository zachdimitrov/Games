var carColor = "orange";
var carSize = 10;
var carX = 100;
var carY = 80;
var carSpeed = 0;
var carAng = -Math.PI / 2;

const speedDecay = 0.95;
var drivePower = 0.5;
const turningForce = 0.1;

function carReset() {
    for (let j = 0; j < trackRows; j++) {
        for (let i = 0; i < trackCols; i++) {
            let arrayIndex = rowColToArrayIndex(i, j);
            if (trackGrid[arrayIndex] == 2) {
                trackGrid[arrayIndex] == 0;
                carAng = -Math.PI / 2;
                carX = i * trackW;
                carY = j * trackW;
            }
        }
    }
}

function carMove() {
    carSpeed *= speedDecay;
    if (keyHeldGas) {
        carSpeed += drivePower;
    }

    if (keyHeldReverse) {
        carSpeed -= drivePower;
    }

    if (keyHeldLeft) {
        carAng -= turningForce;
    }

    if (keyHeldRight) {
        carAng += turningForce;
    }

    carX += Math.cos(carAng) * carSpeed;
    carY += Math.sin(carAng) * carSpeed;
}

function carDraw() {
    drawRotatedImage(carPic, carX, carY, carAng);
}