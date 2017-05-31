import { cloneDeep } from 'lodash';
import detectWinner from '../logic/detectWinner';

const initialState = {
    board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ],
    symbol: '0',
    gameEnd: false
};

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

        newState.gameEnd = detectWinner(newState.board, newState.symbol);

        return newState;
    default:
        return state;
    }
}

export default reducer;
