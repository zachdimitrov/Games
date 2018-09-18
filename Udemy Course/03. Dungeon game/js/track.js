var trackW = 40;
var trackH = 40;
var trackGap = 1;
var trackRows = 15;
var trackCols = 20;
var levelOne = [
    4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1,
    4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 1, 0, 0, 0, 0, 1,
    4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 1,
    1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1,
    1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 4, 4, 1, 1, 4, 1, 0, 0, 1, 4,
    1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 4, 1, 0, 0, 1, 1, 0, 0, 1, 4,
    1, 0, 0, 1, 0, 0, 5, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1,
    1, 2, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 1,
    1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 3, 0, 0, 0, 0, 1, 1, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 3, 0, 0, 0, 0, 0, 1, 1, 1, 4, 4, 4, 1, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4
];

var trackGrid = [];

const trackRoad = 0;
const trackWall = 1;
const trackPlayer = 2;
const trackChecker = 3;
const trackNature = 4;
const trackFlag = 5;

function rowColToArrayIndex(col, row) {
    return arrayIndex = trackCols * row + col;
}

function returnTileTypeAtColRow(col, row) {
    if (col >= 0 && col < trackCols &&
        row >= 0 && row < trackRows) {
        var trackIndexUnderCoord = rowColToArrayIndex(col, row);
        return (trackGrid[trackIndexUnderCoord]);
    } else {
        return trackWall;
    }
}

function drawtracks() {
    let arrayIndex = 0;
    let drawTileX = 0;
    let drawTileY = 0;
    for (let j = 0; j < trackRows; j++) {
        for (let i = 0; i < trackCols; i++) {
            var tileKindHere = trackGrid[arrayIndex];
            var useImage = trackPics[tileKindHere];
            context.drawImage(useImage, drawTileX, drawTileY);
            drawTileX += trackW;
            arrayIndex++;
        }
        drawTileX = 0;
        drawTileY += trackH;
    }
}

function cartrackHandle(car) {
    let carCol = Math.floor(car.X / trackW);
    let carRow = Math.floor(car.Y / trackH);

    if (carCol >= 0 && carCol < trackCols &&
        carRow >= 0 && carRow < trackRows) {
        var tileHere = returnTileTypeAtColRow(carCol, carRow);
        if (tileHere == trackChecker) {
            console.log(car.name + " WINS!");
            loadLevel(levelOne);
        } else if (tileHere != trackRoad) {
            car.speed *= -0.8;
            car.onTrack = false;
        }

        if (tileHere == trackRoad) {
            car.onTrack = true;
        }
    }
}