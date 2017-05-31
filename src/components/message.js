import React from 'react';

const Message = ({symbolPlayer, startNew, win}) => {
    return (
        <p>
            {win ?
                <span> Win {symbolPlayer} player</span>
                :
                <span>Try again</span>
            }
            <br/>
            <button onClick={startNew}>Start new Game?</button>
        </p>
    );
};

export default Message