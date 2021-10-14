import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playAgain } from '../actions/hangman';

const Popup = () => {
    const { gameState, quote } = useSelector(state => state.hangman);
    const dispatch = useDispatch();
    let finalMessage = '';
    let finalMessageRevealWord = '';

    if (gameState === 'won') {
        finalMessage = 'Congratulations! You won! 😃';

    } else if (gameState === 'lost') {
        finalMessage = 'Unfortunately you lost. 😕';
        finalMessageRevealWord = `...the quote was: ${quote}`;

    }

    const restart = () => {
        dispatch(playAgain());
    }

    return (
        <div className="popup-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
            <div className="popup">
                <h2>{finalMessage}</h2>
                <h3>{finalMessageRevealWord}</h3>
                <button onClick={restart}>Play Again</button>
            </div>
        </div>
    )
}

export default Popup
