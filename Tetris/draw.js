var draw = (function() {
    const canvas = document.getElementById("tetris-canvas");
    const context = canvas.getContext("2d");

    canvas.width = TETRIS_COLS * TETRIS_BLOCK;
    canvas.height = TETRIS_ROWS * TETRIS_BLOCK;

    function drawGrid(i) {
        context.strokeStyle = "#ddd";
        context.moveTo(0, i * TETRIS_BLOCK);
        context.lineTo(TETRIS_COLS * TETRIS_BLOCK, TETRIS_BLOCK * i);
        context.stroke();

        context.moveTo(i * TETRIS_BLOCK, 0);
        context.lineTo(TETRIS_BLOCK * i, TETRIS_ROWS * TETRIS_BLOCK);
        context.stroke();
    }

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i <= TETRIS_ROWS; i += 1) {
            drawGrid(i);
        }

        window.requestAnimationFrame(draw);
    }

    return {
        draw
    }
}());

draw.draw();