const TETRIS_ROWS = 18;
const TETRIS_COLS = 10;
const TETRIS_BLOCK = 32;

const table = Array.from({ length: TETRIS_ROWS })
    .map(x => Array.from({ length: TETRIS_COLS }).map(() => false));

const figures = [{
    color: 'red',
    cells: [
        [1, 1],
        [1, 1],
    ],
}, {
    color: 'green',
    cells: [
        [1],
        [1],
        [1],
        [1],
    ],
}, {
    color: 'purple',
    cells: [
        [1, 0],
        [1, 1],
        [1, 0],
    ],
}, {
    color: 'cyan',
    cells: [
        [1, 0],
        [1, 1],
        [0, 1],
    ],
}, {
    color: 'black',
    cells: [
        [0, 1],
        [1, 1],
        [1, 0],
    ],
}, {
    color: 'orange',
    cells: [
        [1, 0],
        [1, 0],
        [1, 1],
    ],
}, {
    color: 'blue',
    cells: [
        [1, 1],
        [1, 0],
        [1, 0],
    ],
}, ];

const gameSpeed = 2;
const gameSpeedDown = 100;
let speed = gameSpeed;