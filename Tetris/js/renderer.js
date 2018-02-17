var renderer = (function() {
    const canvas = document.getElementById("tetris-canvas");
    const context = canvas.getContext("2d");
    const { getCellX, getCellY } = engine;

    canvas.width = TETRIS_COLS * TETRIS_BLOCK;
    canvas.height = TETRIS_ROWS * TETRIS_BLOCK;

    function drawFigure() {
        const { obj: { color, cells }, row, col } = currentFigure;
        context.fillStyle = color;

        for (let i = 0; i < cells.length; i += 1) {
            for (let j = 0; j < cells[i].length; j += 1) {
                if (!cells[i][j]) {
                    continue;
                }

                context.fillRect(getCellY(col + j), getCellX(row + i), TETRIS_BLOCK, TETRIS_BLOCK);
            }
        }
    }

    function drawTable() {
        for (let i = 0; i < TETRIS_ROWS; i += 1) {
            for (let j = 0; j < TETRIS_COLS; j += 1) {
                if (!table[i][j]) {
                    continue;
                }

                const color = table[i][j];
                context.fillStyle = color;
                context.fillRect(getCellY(j), getCellX(i), TETRIS_BLOCK, TETRIS_BLOCK);
            }
        }
    }

    function drawGrid() {
        for (let i = 0; i <= TETRIS_ROWS; i += 1) {
            context.strokeStyle = "#ddd";
            context.moveTo(0, getCellY(i));
            context.lineTo(getCellX(TETRIS_COLS), getCellY(i));
            context.stroke();

            context.moveTo(getCellX(i), 0);
            context.lineTo(getCellX(i), getCellY(TETRIS_ROWS));
            context.stroke();
        }
    }

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        drawFigure();
        drawTable();
        drawGrid();

        window.requestAnimationFrame(draw);
    }

    return {
        draw,
    }
}());

// https://youtu.be/gww_4GBZnjc?t=47m7s