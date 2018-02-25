function rotateLeft(matrix) {
    const rotated = [];
    const rows = matrix[0].length;
    const cols = matrix.length;

    for (let j = 0; j < rows; j += 1) {
        const row = [];

        for (let i = 0; i < cols; i += 1) {
            row.push(matrix[i][rows - 1 - j]);
        }

        rotated.push(row);
    }

    return rotated;
}

function rotateRight(matrix) {
    const rotated = [];
    const rows = matrix[0].length;
    const cols = matrix.length;

    for (let j = 0; j < rows; j += 1) {
        const row = [];

        for (let i = 0; i < cols; i += 1) {
            row.push(matrix[cols - 1 - i][j]);
        }

        rotated.push(row);
    }

    return rotated;
}