let currentFigure = {
    obj: {},
    row: 0,
    col: 0,
}

var engine = (function() {
    for (let i = 0; i < TETRIS_COLS; i += 1) {
        table[TETRIS_ROWS - 1][i] = 'rgba(255, 255, 255, 0)';
    }

    let gameSpeed = 500;

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

    function update() {
        let canFall = true;
        for (let i = 0; i < currentFigure.obj.cells.length; i++) {
            for (let j = 0; j < currentFigure.obj.cells[i].length; j++) {
                const col = j + currentFigure.col;
                const row = currentFigure.row;
                if (currentFigure.obj.cells[i][j] && table[row][col]) {
                    canFall = false;
                    break;
                }
            }
        }

        if (canFall) {
            currentFigure.row += 1;
        } else {
            for (let i = 0; i < currentFigure.obj.cells.length; i++) {
                for (let j = 0; j < currentFigure.obj.cells[i].length; j++) {
                    const col = j + currentFigure.col;
                    const row = currentFigure.row;

                    if (currentFigure.obj.cells[i][j]) {
                        table[row][col] = currentFigure.obj.color;
                    }
                }
            }
        }

        setTimeout(update, gameSpeed);
    }

    return {
        getCellX,
        getCellY,
        getFigure,
        update
    }
}());