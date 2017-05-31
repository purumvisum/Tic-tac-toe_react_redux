export function changeSymbol(row, position) {
    return {
        type: 'CHANGE_SYMBOL',
        row: row,
        position: position
    };
}

export function startNewGame() {
    return {
        type: 'START_NEW_GAME'
    };
}
