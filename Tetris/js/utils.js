function rotateLeft(matrix) {
    const rotated = [];
    for (let j = 0, len = matrix[0].length; j < len; j += 1) {
        const row = [];

        for (let i = 0, len = matrix.length; i < len; i += 1) {
            row.push(matrix[i][j]);
        }

        rotated.push(row);
    }

    return rotated;
}

function rotateRight(matrix) {
    const rotated = [];
    for (let j = 0, len = matrix[0].length; j < len; j += 1) {
        const row = [];

        for (let i = 0, len = matrix.length; i < len; i += 1) {
            row.push(matrix[i][j]);
        }

        rotated.push(row);
    }

    return rotated;
}