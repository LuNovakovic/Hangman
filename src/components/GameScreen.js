import React, { useState, useEffect } from 'react';
import Header from './Header';
import Figure from './Figure';
import WrongLetters from './WrongLetters';
import Word from './Word';
import Notification from './Notification';
import Popup from './Popup';
import { showNotification as show } from '../helpers/helpers';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote, typeLetter } from '../actions/hangman';



function GameScreen() {
    console.log('STATE:', useSelector(state => state))
    const { quote, gameState } = useSelector(state => state.hangman);
    const dispatch = useDispatch();
    const playable = gameState === 'inProgress';


    useEffect(() => {
        dispatch(fetchQuote());
    }, [dispatch]);

    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event;
            if (playable && keyCode >= 65 && keyCode <= 90) {
                dispatch(typeLetter(key));
            }
        }

        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, [dispatch, playable]);


    if (!quote) {
        return <h1>Loading...</h1>;
    }

    console.log('QUOTE: ', quote, quote.split(' '));


    return (
        <>
            <Header />
            <div className="game-container">
                <Figure />
                <WrongLetters />
                <div className="word-list">
                    {quote.split(' ').map((word, idx) => (
                        <span key={idx}>
                            <Word word={word} />
                            &nbsp;&nbsp;
                        </span>
                    ))}
                </div>
            </div>
            <Popup />
            {/* <Notification showNotification={showNotification} /> */}
        </>
    );
}

export default GameScreen