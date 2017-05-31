export default function changeSymbol(row, position) {
    return {
        type: 'CHANGE_SYMBOL',
        row: row,
        position: position
    };
}
