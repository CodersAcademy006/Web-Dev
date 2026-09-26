// Move logic for app.js. Every move is "slide a row left", applied to rows or columns.
function slide(row) {
    const tiles = row.filter(v => v);
    for (let i = 0; i < tiles.length - 1; i++) {
        if (tiles[i] === tiles[i + 1]) {
            tiles[i] *= 2;
            tiles.splice(i + 1, 1);
        }
    }
    while (tiles.length < 4) tiles.push(0);
    return tiles;
}

function moveRows(reverse) {
    for (let r = 0; r < 4; r++) {
        const row = reverse ? [...board[r]].reverse() : board[r];
        const out = slide(row);
        board[r] = reverse ? out.reverse() : out;
    }
}

function moveCols(reverse) {
    for (let c = 0; c < 4; c++) {
        let col = board.map(row => row[c]);
        if (reverse) col.reverse();
        col = slide(col);
        if (reverse) col.reverse();
        col.forEach((v, r) => board[r][c] = v);
    }
}

const moveLeft = () => moveRows(false);
const moveRight = () => moveRows(true);
const moveUp = () => moveCols(false);
const moveDown = () => moveCols(true);
