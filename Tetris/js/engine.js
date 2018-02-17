let currentFigure = {
    obj: {},
    row: 0,
    col: 0,
}

var engine = (function() {

    table.push(Array.from({ length: TETRIS_COLS }).map(() => true));

    function getFigure() {
        const index = Math.random() * figures.length | 0;
        currentFigure.obj = figures[index];
        currentFigure.row = 0;
        currentFigure.col = ((TETRIS_COLS / 2) | 0) - 1;
    }

    function getCellX(row) {
        return TETRIS_BLOCK * row;
    }

    function getCellY(col) {
        return TETRIS_BLOCK * col;
    }

    function checkForCollision() {
        for (let i = 0; i < currentFigure.obj.cells.length; i++) {
            const row = i + currentFigure.row;
            for (let j = 0; j < currentFigure.obj.cells[i].length; j++) {
                const col = j + currentFigure.col;
                if (currentFigure.obj.cells[i][j]) {
                    table[row][col] = currentFigure.obj.color;
                }
            }
        }
    }

    function update() {
        let canFall = true;
        for (let i = 0; i < currentFigure.obj.cells.length; i++) {
            const row = i + currentFigure.row + 1;
            for (let j = 0; j < currentFigure.obj.cells[i].length; j++) {
                const col = j + currentFigure.col;

                if (currentFigure.obj.cells[i][j] && table[row][col]) {
                    canFall = false;
                    break;
                }
            }

            if (!canFall) {
                break;
            }
        }

        if (canFall) {
            currentFigure.row += 1;
        } else {
            checkForCollision();
            getFigure();
        }

        setTimeout(update, gameSpeed);
    }

    getFigure(); // to update based on cycles

    return {
        getCellX,
        getCellY,
        getFigure,
        update
    }
}());