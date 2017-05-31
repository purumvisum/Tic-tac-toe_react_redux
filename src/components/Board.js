import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BlankCell from './BlankCell';
import { changeSymbol, startNewGame } from '../actions/actions';
import Message from '../components/message';

const styles = {
    row: {
        float: 'left'
    }
};

class Board extends Component {
    buildMatrix() {
        return (
            this.props.board.map((item, cell) => (
                <div style={styles.row} className={`row row${cell}`} key={cell}>
                    {
                        this.props.board[cell].map((symbol, row) => (
                            <BlankCell
                                style={styles.cell}
                                key={row}
                                row={row}
                                cell={cell}
                                gameEnd={this.props.gameEnd}
                                onClick={this.props.handleClick}
                                symbol={this.props.board[row][cell]}
                            />

                        ))
                    }
                </div>
            ))
        );
    }

    winMessage() {
        return (
            this.props.gameEnd ?
                <Message
                    startNew={this.props.startNew}
                    win = {this.props.win}
                    symbolPlayer={this.props.symbol}
                />
                : null
        );
    }

    render() {
        return (
            <div>
                {this.winMessage()}
                {this.buildMatrix()}
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    board: state.board,
    gameEnd: state.gameEnd,
    symbol: state.symbol,
    win: state.win

});

const mapDispatchToProps = (dispatch) => ({
    handleClick: (row, cell) => {
        dispatch(changeSymbol(row, cell));
    },
    startNew: () => {
        dispatch(startNewGame());
    }
});

Board.propTypes = {
    board: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
    gameEnd: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
