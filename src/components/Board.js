import React, { Component } from 'react';
import BlankCell from './BlankCell';
import { connect } from 'react-redux';
import changeSymbol from '../actions/actions';

const styles = {
    row: {
        float: 'left'
    },
    cell: {
        border: '1px solid black',
        width: '70px',
        height: '70px'
    }
};

class Board extends Component {
    constructor(props) {
        super(props);
    }

    buildMatrix() {
        console.log(this.props.board);
        const matrix = this.props.board;
        matrix.map(rowIndex => {
            // matrix[rowIndex].map(item => {
            console.log(rowIndex);
            // })
        });
    }

    render() {
        return (
            <div>
                {
                    Object.keys(this.props.board)
                        .map(cell => (
                            <div style={styles.row} className={`row row${cell}`} key={cell}>
                                {
                                    this.props.board[cell].map((symbol, row) => {
                                        return (
                                            <div
                                                style={styles.cell}
                                                key={row}
                                                onClick={this.props.handleClick.bind(this, row, cell)}
                                            >
                                                {this.props.board[row][cell]}
                                            </div>

                                        )
                                    })
                                    }
                            </div>
                            ))
                }
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    board: state.board
});

const mapDispatchToProps = (dispatch) => ({
    handleClick: (row, cell ) => {
        dispatch(changeSymbol(row, cell))
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Board);
