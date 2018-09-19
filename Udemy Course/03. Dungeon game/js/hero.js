function heroClass() {
    this.X = 80;
    this.Y = 400;
    this.moveSpeed = 5;
    this.myHeroPic;
    this.name = "Untitled Hero";
    this.keys = 0;

    this.keyHeldUp = false;
    this.keyHeldDown = false;
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

        for (let j = 0; j < worldRows; j++) {
            for (let i = 0; i < worldCols; i++) {
                let arrayIndex = rowColToArrayIndex(i, j);
                if (worldGrid[arrayIndex] == worldPlayer) {
                    worldGrid[arrayIndex] = worldRoad;
                    this.X = i * worldW + worldW / 2;
                    this.Y = j * worldH + worldH / 2;
                    return;
                }
            }
        }
        console.log("NO PLAYER START FOUND!");
    }

    this.move = function() {
        var nextX = this.X;
        var nextY = this.Y;

        if (this.keyHeldUp) {
            nextY -= this.moveSpeed;
        }

        if (this.keyHeldDown) {
            nextY += this.moveSpeed;
        }

        if (this.keyHeldLeft) {
            nextX -= this.moveSpeed;
        }

        if (this.keyHeldRight) {
            nextX += this.moveSpeed;
        }

        let nextCol = Math.floor(nextX / worldW);
        let nextRow = Math.floor(nextY / worldH);
        var nextTile = returnTileTypeAtColRow(nextCol, nextRow);

        if (nextTile == worldWall || (nextTile == worldDoor && this.keys <= 0)) {
            return;
        } else if (nextTile == worldKey) {
            this.keys += 1;
            worldGrid[rowColToArrayIndex(nextCol, nextRow)] = worldRoad;
        } else if (nextTile == worldDoor && this.keys > 0) {
            this.keys--;
            worldGrid[rowColToArrayIndex(nextCol, nextRow)] = worldRoad;
        } else if (nextTile == worldFinish) {
            console.log(this.name + " WINS!");
            if (currentLevel >= levels.length) {
                currentLevel = 0;
            }

            loadLevel(levels[currentLevel].slice());
        }

        this.X = nextX;
        this.Y = nextY;
    }

    this.draw = function() {
        drawCanvasImage(this.myHeroPic, this.X, this.Y);
    }
};