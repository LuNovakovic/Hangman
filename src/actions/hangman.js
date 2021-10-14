import { checkWin } from "../helpers/helpers";
import axios from "axios";


export const fetchQuote = () => {
    return async (dispatch) => {
        const { data } = await axios.get('https://api.quotable.io/random');
        const quote = data.content.replaceAll(/[^a-zA-Z0-9 ]/g, '');
        console.log('Got quote: ', quote);
        dispatch({ type: 'SET_QUOTE', quote });
    }
}

export const typeLetter = (key) => {
    const letter = key.toLowerCase();
    return async (dispatch, getState) => {
        const { quote, correctLetters, wrongLetters } = getState().hangman;

        if (quote.toLowerCase().includes(letter)) {
            if (!correctLetters.includes(letter)) {
                dispatch({ type: 'ADD_CORRECT_LETTER', letter });
            } else {
                // show(setShowNotification);
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                dispatch({ type: 'ADD_WRONG_LETTER', letter });
            } else {
                // show(setShowNotification);
            }
        }
        const state = getState().hangman;
        const winState = checkWin(state.correctLetters, state.wrongLetters, state.quote);
        if (winState === 'win') {
            console.log('WON')
            dispatch({ type: 'SET_GAME_STATE', state: 'won' });
        } else if (winState === 'lose') {
            dispatch({ type: 'SET_GAME_STATE', state: 'lost' });

        }
    }
}

/**
 * Resetira tocna i netocna slova, vraca igru u tijek, povlaci novi citat
 */
export const playAgain = () => {
    return async (dispatch) => {
        dispatch({ type: 'SET_CORRECT_LETTERS', correctLetters: [] });
        dispatch({ type: 'SET_WRONG_LETTERS', wrongLetters: [] });
        dispatch({ type: 'SET_GAME_STATE', state: 'inProgress' });
        await dispatch(fetchQuote());
    }
}