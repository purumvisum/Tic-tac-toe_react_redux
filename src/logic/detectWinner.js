function detectWinner(board, symbol) {
    let win = false;
    let countInCell = [];
    const countInDiagonal = [];
    const countInRevertDiagonal = [];
    let length = board.length - 1;
    // every in row
    for (const row in board) {
        // check all values in one row [0][0]/[0][1]/[0][2]
        if (board[row].every(elem => elem === symbol)) {
            // console.log(`${symbol}- win row(${row})`);
            win = true;
        }

        // create array from values [0][0]/[1][0]/[2][0] to check cells
        for (const cell in board[row]) {
            countInCell.push(board[cell][row]);
        }

        // check if every in created array are equal to state symbol
        if (countInCell.every(elem => elem === symbol)) {
            // console.log(`${symbol}- win cell`);
            win = true;
        }

        // clean values from cell array
        countInCell = [];

        // create diagonal arrays to check if they contain all state symbols
        countInDiagonal.push(board[row][row]);
        countInRevertDiagonal.push(board[row][length--]);
    }

    if ((countInDiagonal.every(elem => elem === symbol)) ||
        countInRevertDiagonal.every(elem => elem === symbol)) {
        // console.log(`${symbol}- win diagonal`);
        win = true;
    }

    return win;
}

export default detectWinner;
