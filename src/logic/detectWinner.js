function detectWinner(state) {
    let win = state.win;
    let stillPlay = false;
    let countInCell = [];
    const countInDiagonal = [];
    const countInRevertDiagonal = [];
    let length = state.board.length - 1;
    // every in row
    for (const row in state.board) {
        // check all values in one row [0][0]/[0][1]/[0][2]
        if (state.board[row].every(elem => elem === state.symbol)) {
            // console.log(`${state.symbol}- win row(${row})`);
            win = true;
        }

        // create array from values [0][0]/[1][0]/[2][0] to check cells
        for (const cell in state.board[row]) {
            // if there still empty cells
            if (state.board[cell][row] === '') {
                stillPlay = true;
            }
            countInCell.push(state.board[cell][row]);
        }

        // check if every in created array are equal to state state.symbol
        if (countInCell.every(elem => elem === state.symbol)) {
            // console.log(`${state.symbol}- win cell`);
            win = true;
        }

        // clean values from cell array
        countInCell = [];

        // create diagonal arrays to check if they contain all state state.symbols
        countInDiagonal.push(state.board[row][row]);
        countInRevertDiagonal.push(state.board[row][length--]);
    }

    if ((countInDiagonal.every(elem => elem === state.symbol)) ||
        countInRevertDiagonal.every(elem => elem === state.symbol)) {
        // console.log(`${state.symbol}- win diagonal`);
        win = true;
    }

    return {
        win,
        stillPlay
    };
}

export default detectWinner;
