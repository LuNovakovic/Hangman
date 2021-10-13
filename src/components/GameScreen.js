import React, { useState, useEffect } from 'react';
import Header from './Header';
import Figure from './Figure';
import WrongLetters from './WrongLetters';
import Word from './Word';
import Notification from './Notification';
import Popup from './Popup';
import { showNotification as show } from '../helpers/helpers';

import axios from 'axios';



function GameScreen() {
    const [quote, setQuote] = useState(null);
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setwrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    const fetchQuote = async () => {
        const { data } = await axios.get('https://api.quotable.io/random');
        const quote = data.content;
        console.log('Got quote: ', quote);
        setQuote(quote);
    }

    useEffect(() => {
        fetchQuote()
    }, []);

    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event;
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();

                if (quote.toLowerCase().includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(currentLetters => [...currentLetters, letter.toLowerCase()]);
                    } else {
                        show(setShowNotification);
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setwrongLetters(wrongLetters => [...wrongLetters, letter]);
                    } else {
                        show(setShowNotification);
                    }
                }
            }
        }

        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, playable, quote, wrongLetters]);

    function playAgain() {
        setPlayable(true);

        // Empty Arrays 
        setCorrectLetters([]);
        setwrongLetters([]);

        fetchQuote();
    }

    if (!quote) {
        return <h1>Loading...</h1>;
    }

    console.log('QUOTE: ', quote, quote.split(' '));


    return (
        <>
            <Header />
            <div className="game-container">
                <Figure wrongLetters={wrongLetters} />
                <WrongLetters wrongLetters={wrongLetters} />
                <div className="word-list">
                    {quote.split(' ').map((word, idx) => (
                        <span key={idx}>
                            <Word word={word} correctLetters={correctLetters} />
                            &nbsp;&nbsp;
                        </span>
                    ))}
                </div>
            </div>
            <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={quote} setPlayable={setPlayable} playAgain={playAgain} />
            <Notification showNotification={showNotification} />
        </>
    );
}

export default GameScreen