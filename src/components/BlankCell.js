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
        this._onClick = this._onClick.bind(this);
    }

    /*
    * to pass props without binding
    */
    _onClick() {
        this.props.onClick(this.props.row, this.props.cell);
    }

    render() {
        return (
            <div
                role="presentation"
                onClick={this._onClick}
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
    cell: PropTypes.number.isRequired
};


export default BlankCell;
