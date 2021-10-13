import React from 'react'
import { useSelector } from 'react-redux';

const Header = () => {
    const name = useSelector(state => state.name);
    return (
        <>
            <h1>Hangman</h1>
            <p>Find the hidden quote - Enter a letter</p>
            <p>Player: {name.name}</p>
        </>
    )
}

export default Header
