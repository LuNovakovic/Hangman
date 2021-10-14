import React from 'react'
import { useSelector } from 'react-redux';


function Word({ word }) {
    const { correctLetters } = useSelector(state => state.hangman);
    return (
        <div className="word">
            {word.split('').map((letter, i) => {
                return (
                    <span className="letter" key={i}>
                        {correctLetters.includes(letter.toLowerCase()) ? letter : ''}
                    </span>
                )
            })}
        </div>
    )
}

export default Word
