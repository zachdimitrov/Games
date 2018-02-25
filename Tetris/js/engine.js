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
        currentFigure.row = -figures[index].cells.length;
        currentFigure.col = ((TETRIS_COLS / 2) | 0) - 1;
    }

    function getCellX(row) {
        return TETRIS_BLOCK * row;
    }

    function getCellY(col) {
        return TETRIS_BLOCK * col;
    }

    function checkForCollision(offsetRow, offsetCol) {
        for (let i = 0; i < currentFigure.obj.cells.length; i++) {
            const row = i + offsetRow;
            if (row < 0) {
                continue;
            }
            for (let j = 0; j < currentFigure.obj.cells[i].length; j++) {
                const col = j + offsetCol;

                if (currentFigure.obj.cells[i][j] && table[row][col]) {
                    return true;
                }
            }
        }

        return false;
    }

    function update() {
        let canFall = !checkForCollision(currentFigure.row + 1, currentFigure.col);

        if (canFall) {
            currentFigure.row += 1;
        } else {
            for (let i = 0; i < currentFigure.obj.cells.length; i++) {
                const row = i + currentFigure.row;
                for (let j = 0; j < currentFigure.obj.cells[i].length; j++) {
                    const col = j + currentFigure.col;

                    if (currentFigure.obj.cells[i][j]) {
                        table[row][col] = currentFigure.obj.color;
                    }
                }
            }

            getFigure();
        }

        setTimeout(update, 1000 / speed);
    }

    window.addEventListener('keydown', function(ev) {
        let canMove = !checkForCollision(currentFigure.row, currentFigure.col);
        if (canMove) {
            if (currentFigure.col > 0 && ev.key === 'ArrowLeft') {
                currentFigure.col -= 1;
            } else if (ev.key === 'ArrowRight' && currentFigure.obj.cells[0].length + currentFigure.col < TETRIS_COLS) {
                currentFigure.col += 1;
            } else if (ev.key === "ArrowDown") {
                speed = gameSpeedDown;
            } else if (ev.key === 'q') {
                // currentFigure.
            } else if (ev.key === 'w') {

            }
        }
    });

    window.addEventListener('keyup', function(ev) {
        if (ev.key === "ArrowDown") {
            speed = gameSpeed;
        }
    });

    getFigure();
    update();

    return {
        getCellX,
        getCellY,
        getFigure,
        update,
    };
}());