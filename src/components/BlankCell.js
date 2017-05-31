import React from 'react';

const styles = {
    cell: {
        border: '1px solid black',
        width: '70px',
        height: '70px'
    }
};

const BlankCell = ({onClick, rowIndex, positon, symbol}) => (
    <div onClick={onClick} style={styles.cell}>
        {symbol}
    </div>
);

export default BlankCell;