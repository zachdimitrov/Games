const canvas = document.getElementById("tetris-canvas");
const context = canvas.getContext("2d");

const TETRIS_ROWS = 18;
const TETRIS_COLS = 10;
const TETRIS_BLOCK = 32;

canvas.width = TETRIS_COLS * TETRIS_BLOCK;
canvas.height = TETRIS_ROWS * TETRIS_BLOCK;

let x = 10;
let y = 10;

function update() {
    x += 1;
}

let count = 0;

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
    count += 1;
    window.requestAnimationFrame(draw);
}

draw();
setInterval(update, 200);


setTimeout(() => {
    var fps = document.getElementById("fps");
    fps.innerHTML = count / 2;
    count = 0;
}, 10000);