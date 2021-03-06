var worldW = 50;
var worldH = 50;
var worldGap = 1;
var worldRows = 12;
var worldCols = 16;
var levels = [
    [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 2, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 3, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 3, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 5, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 4, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 4, 0, 1, 0, 0, 4, 0, 1, 0, 0, 3, 0, 1,
        1, 0, 0, 0, 0, 1, 0, 0, 4, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 5, 1, 1,
        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 2, 0, 0, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1, 1,
        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 5, 0, 0, 4, 0, 5, 0, 0, 4, 0, 1,
        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 5, 0, 1, 4, 4, 1,
        1, 0, 4, 0, 4, 0, 1, 0, 2, 0, 1, 0, 1, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 1, 5, 1, 1,
        1, 1, 1, 5, 1, 1, 1, 0, 4, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 4, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 5, 0, 5, 0, 5, 0, 3, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 4, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 5, 0, 1, 0, 0, 0, 5, 0, 5, 5, 5, 5, 3, 1,
        1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 1, 4, 1, 0, 1, 4, 1, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 1, 0, 1, 5, 1, 1, 1, 0, 1, 0, 1, 1, 5, 1,
        1, 0, 1, 0, 1, 0, 1, 4, 1, 0, 1, 0, 1, 0, 0, 1,
        1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 4, 4, 1,
        1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1,
        1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 4, 4, 1,
        1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 5, 1,
        1, 2, 1, 4, 1, 0, 5, 0, 1, 4, 1, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 4, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 5, 0, 4, 1,
        1, 1, 1, 0, 0, 1, 1, 5, 1, 1, 1, 0, 0, 1, 4, 1,
        1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1,
        1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1,
        1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 0, 0, 1, 4, 0, 1, 0, 0, 1, 1, 0, 1,
        1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1,
        1, 5, 0, 0, 1, 1, 2, 0, 0, 0, 1, 1, 0, 0, 1, 1,
        1, 5, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1,
        1, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ]
];


var worldGrid = [];
var currentLevel = 1;

const worldRoad = 0;
const worldWall = 1;
const worldPlayer = 2;
const worldFinish = 3;
const worldKey = 4;
const worldDoor = 5;

function rowColToArrayIndex(col, row) {
    return arrayIndex = worldCols * row + col;
}

function returnTileTypeAtColRow(col, row) {
    if (col >= 0 && col < worldCols &&
        row >= 0 && row < worldRows) {
        var worldIndexUnderCoord = rowColToArrayIndex(col, row);
        return (worldGrid[worldIndexUnderCoord]);
    } else {
        return worldWall;
    }
}

function drawWorlds() {
    let arrayIndex = 0;
    let drawTileX = 0;
    let drawTileY = 0;
    for (let j = 0; j < worldRows; j++) {
        for (let i = 0; i < worldCols; i++) {
            var tileKindHere = worldGrid[arrayIndex];
            if (tileTypeHasTransparency(tileKindHere)) {
                context.drawImage(worldPics[worldRoad], drawTileX, drawTileY);
            }
            context.drawImage(worldPics[tileKindHere], drawTileX, drawTileY);
            drawTileX += worldW;
            arrayIndex++;
        }
        drawTileX = 0;
        drawTileY += worldH;
    }
}

function tileTypeHasTransparency(tileType) {
    return tileType == worldKey || tileType == worldFinish || tileType == worldDoor;
}