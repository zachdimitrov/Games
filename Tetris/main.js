const TETRIS_ROWS = 18;
const TETRIS_COLS = 10;
const TETRIS_BLOCK = 32;

const table = Array.from({ length: TETRIS_ROWS })
    .map(x => Array.from({ length: TETRIS_COLS }))
    .map(() => false);