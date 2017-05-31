import { cloneDeep } from 'lodash';

const initialState = {
    board: {
        0: ['', '', ''],
        1: ['', 'X', ''],
        2: ['', '', '']
    },
    symbol: '0'
};

function reducer(state = initialState, action) {
    switch (action.type) {
    case 'CHANGE_SYMBOL':
        console.log(action.position);
        console.log(action.row);
        const newState = cloneDeep(state);
        if (newState.board[action.row][action.position]) {
            console.log('you can\'t do this');
            return state;
        }
        newState.symbol = (newState.symbol === '0') ? 'X' : '0';
        newState.board[action.row][action.position] = newState.symbol;

        return newState;
    default:
        return state;
    }
}

export default reducer;
