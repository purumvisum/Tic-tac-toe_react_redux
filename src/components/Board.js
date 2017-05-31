import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BlankCell from './BlankCell';
import changeSymbol from '../actions/actions';

const styles = {
    row: {
        float: 'left'
    }
};

class Board extends Component {
    buildMatrix() {
        return (
            Object.keys(this.props.board).map((item, cell) => (
                <div style={styles.row} className={`row row${cell}`} key={cell}>
                    {
                        this.props.board[cell].map((symbol, row) => (
                            <BlankCell
                                style={styles.cell}
                                key={row}
                                row={row}
                                cell={cell}
                                onClick={this.props.handleClick}
                                symbol={this.props.board[row][cell]}
                            />

                        ))
                    }
                </div>
            ))
        );
    }

    render() {
        return (
            <div>
                {this.buildMatrix()}
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    board: state.board
});

const mapDispatchToProps = (dispatch) => ({
    handleClick: (row, cell) => {
        dispatch(changeSymbol(row, cell));
    }
});

Board.propTypes = {
    board: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
