import { cloneDeep } from 'lodash';

const initialState = {
    board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ],
    symbol: '0',
    gameEnd: false
};


function detectWinner(state) {
    let win = false;
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
            countInCell.push(state.board[cell][row]);
        }

        // check if every in created array are equal to state symbol
        if (countInCell.every(elem => elem === state.symbol)) {
            // console.log(`${state.symbol}- win cell`);
            win = true;
        }

        // clean values from cell array
        countInCell = [];

        // create diagonal arrays to check if they contain all state symbols
        countInDiagonal.push(state.board[row][row]);
        countInRevertDiagonal.push(state.board[row][length--]);
    }

    if ((countInDiagonal.every(elem => elem === state.symbol)) ||
        countInRevertDiagonal.every(elem => elem === state.symbol)) {
        // console.log(`${state.symbol}- win diagonal`);
        win = true;
    }

    return win;
}


function reducer(state = initialState, action) {
    switch (action.type) {
    case 'CHANGE_SYMBOL':
        const newState = cloneDeep(state);
        if (newState.board[action.row][action.position]) {
            console.log('you can\'t do this');
            return state;
        }
        newState.symbol = (newState.symbol === '0') ? 'X' : '0';
        // newState.symbol = 'X'
        newState.board[action.row][action.position] = newState.symbol;

        newState.gameEnd = detectWinner(newState);

        return newState;
    default:
        return state;
    }
}

export default reducer;
