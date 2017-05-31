import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
    cell: {
        border: '1px solid black',
        width: '70px',
        height: '70px'
    }
};


class BlankCell extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    /*
    * to pass props without binding
    */
    onClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props.row, this.props.cell);
        }

    }

    render() {
        return (
            <div
                role="presentation"
                onClick={!this.props.gameEnd ? this.onClick : null}
                style={styles.cell}>
                {this.props.symbol}
            </div>
        );
    }
}

BlankCell.propTypes = {
    symbol: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    row: PropTypes.number.isRequired,
    cell: PropTypes.number.isRequired,
    gameEnd: PropTypes.bool.isRequired
};


export default BlankCell;
