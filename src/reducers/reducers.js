import { cloneDeep } from 'lodash';
import detectWinner from '../logic/detectWinner';

const initialState = {
    board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ],
    symbol: '0',
    gameEnd: false,
    win: false
};


function reducer(state = initialState, action) {
    switch (action.type) {
    case 'CHANGE_SYMBOL':
        const newState = cloneDeep(state);
        if (newState.board[action.row][action.position]) {
            return state;
        }
        newState.symbol = (newState.symbol === '0') ? 'X' : '0';
            // newState.symbol = 'X'
        newState.board[action.row][action.position] = newState.symbol;

        const detectWinnerEnd = detectWinner(newState);

            // if someone win
        newState.win = detectWinnerEnd.win;

            // if someone win or no empty cells
        if (detectWinnerEnd.win || !detectWinnerEnd.stillPlay) {
            newState.gameEnd = true;
        }

        return newState;

    case 'START_NEW_GAME':
        return initialState;
    default:
        return state;
    }
}

export default reducer;
