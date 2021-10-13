import React from "react";
import GameScreen from './GameScreen';
import NameInput from './NameInput';
import { useSelector } from 'react-redux';


const Hangman = () => {
    const name = useSelector(state => state.name);
    return (
        <>
            {name ? <GameScreen /> : <NameInput />}
        </>
    )
};

export default Hangman;