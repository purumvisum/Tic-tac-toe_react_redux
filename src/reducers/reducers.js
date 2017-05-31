import {cloneDeep} from 'lodash';


const initialState = {
    board: {
        0: ['', '', ''],
        1: ['', '', ''],
        2: ['', '', '']
    },
    symbol: '0'
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_SYMBOL':
            console.log(action.position)
            console.log(action.row)
            let newState = cloneDeep(state);
            if (newState.board[action.row][action.position]) {
                console.log("you can't do this")
                return state
            } else {
                newState.symbol = (newState.symbol === '0') ? 'X' : '0';
                newState.board[action.row][action.position] = newState.symbol;
            }
            // newState.symbol = (newState.symbol === '0') ? 'X' : '0';
            // newState.board[action.row][action.position] = newState.symbol;
        return newState
    default:
        return state;
    }
}

export default reducer;

// board: [[1,2,3],[4,5,6],[7,8,9]]