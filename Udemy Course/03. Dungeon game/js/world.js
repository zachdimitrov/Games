var worldW = 40;
var worldH = 40;
var worldGap = 1;
var worldRows = 15;
var worldCols = 20;
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
    1, 0, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 1,
    1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 3, 0, 0, 0, 0, 1, 1, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 3, 0, 0, 0, 0, 0, 1, 1, 1, 4, 4, 4, 1, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4
];

var worldGrid = [];

const worldRoad = 0;
const worldWall = 1;
const worldPlayer = 2;
const worldChecker = 3;
const worldNature = 4;
const worldFlag = 5;

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
            var useImage = worldPics[tileKindHere];
            context.drawImage(useImage, drawTileX, drawTileY);
            drawTileX += worldW;
            arrayIndex++;
        }
        drawTileX = 0;
        drawTileY += worldH;
    }
}

function heroWorldHandle(hero) {
    let heroCol = Math.floor(hero.X / worldW);
    let heroRow = Math.floor(hero.Y / worldH);

    if (heroCol >= 0 && heroCol < worldCols &&
        heroRow >= 0 && heroRow < worldRows) {
        var tileHere = returnTileTypeAtColRow(heroCol, heroRow);
        if (tileHere == worldChecker) {
            console.log(hero.name + " WINS!");
            loadLevel(levelOne);
        } else if (tileHere != worldRoad) {
            hero.speed *= -0.8;
        }
    }
}