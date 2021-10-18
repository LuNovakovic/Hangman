import axios from "axios";

const SCORE_API = 'https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores';


export const fetchScores = () => {
    return async (dispatch) => {
        const { data } = await axios.get(SCORE_API);
        dispatch({ type: 'SET_SCORES', scores: data });

    }
}

export const logScore = (score) => {
    return async (dispatch, getState) => {
        const { quoteId, quote, startAt, wrongLetters } = getState().hangman;
        const player = getState().name.name
        dispatch({ type: 'ADD_SCORE', score: { score, player } });

        const now = new Date();
        const duration = now - startAt;

        const quoteLetters = quote.toLowerCase().replaceAll(' ', '');
        const uniqueCharacters = new Set([...quoteLetters]);

        await axios.post(SCORE_API, {
            quoteId,
            length: quote.length,
            uniqueCharacters: uniqueCharacters.length,
            userName: player,
            errors: wrongLetters.length,
            duration
        })
        await dispatch(fetchScores());
    }
}