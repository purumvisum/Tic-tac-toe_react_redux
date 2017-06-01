import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ symbolPlayer, startNew, win }) => (
    <p>
        {win ?
            <span> Win {symbolPlayer} player</span>
                :
            <span>Try again</span>
            }
        <br />
        <button onClick={startNew}>Start new Game?</button>
    </p>
    );


Message.propTypes = {
    startNew: PropTypes.func.isRequired,
    win: PropTypes.bool.isRequired,
    symbolPlayer: PropTypes.string.isRequired
};

export default Message;
