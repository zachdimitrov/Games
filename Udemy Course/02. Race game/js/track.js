var trackW = 40;
var trackH = 40;
var trackGap = 1;
var trackRows = 15;
var trackCols = 20;
var trackGrid = [
    4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1,
    4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 1, 0, 0, 0, 0, 1,
    4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1,
    1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 4, 4, 1, 1, 4, 1, 0, 0, 1, 4,
    1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 4, 1, 0, 0, 1, 1, 0, 0, 1, 4,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1,
    5, 0, 2, 5, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 3, 0, 0, 0, 0, 1, 1, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 3, 0, 0, 0, 0, 0, 1, 1, 1, 4, 4, 4, 1, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4
];

const trackRoad = 0;
const trackWall = 1;
const trackPlayer = 2;
const trackChecker = 3;
const trackNature = 4;
const trackFlag = 5;

function rowColToArrayIndex(col, row) {
    return arrayIndex = trackCols * row + col;
}

function isObstacleAtColRow(col, row) {
    if (col >= 0 && col < trackCols &&
        row >= 0 && row < trackRows) {
        var trackIndexUnderCoord = rowColToArrayIndex(col, row);
        return (trackGrid[trackIndexUnderCoord] != trackRoad);
    } else {
        return false;
    }
}

function drawtracks() {
    for (let j = 0; j < trackRows; j++) {
        for (let i = 0; i < trackCols; i++) {
            let arrayIndex = rowColToArrayIndex(i, j);
            var tileKindHere = trackGrid[arrayIndex];

            switch (tileKindHere) {
                case trackRoad:
                    context.drawImage(roadPic, trackW * i, trackH * j);
                    break;
                case trackPlayer:
                    context.drawImage(roadPic, trackW * i, trackH * j);
                    break;
                case trackWall:
                    context.drawImage(wallPic, trackW * i, trackH * j);
                    break;
                case trackChecker:
                    context.drawImage(checkerPic, trackW * i, trackH * j);
                    break;
                case trackNature:
                    context.drawImage(naturePic, trackW * i, trackH * j);
                    break;
                case trackFlag:
                    context.drawImage(flagPic, trackW * i, trackH * j);
                    break;
            }
        }
    }
}

function cartrackHandle() {
    let carCol = Math.floor(carX / trackW);
    let carRow = Math.floor(carY / trackH);
    let trackIndexUndercar = rowColToArrayIndex(carCol, carRow);
    if (carCol >= 0 && carCol < trackCols &&
        carRow >= 0 && carRow < trackRows) {
        if (isObstacleAtColRow(carCol, carRow)) {
            carSpeed *= 0.5;
        }
    }
}