const initialState = {
    quote: null,
    quoteId: null,
    correctLetters: [],
    wrongLetters: [],
    gameState: 'inProgress', // Can be 'inProgress', 'won', 'lost',
    startAt: null
}

const hangman = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QUOTE':
            return {
                ...state,
                quote: action.quote,
                quoteId: action.quoteId
            };
        case 'SET_GAME_STATE':
            return {
                ...state,
                gameState: action.state,
            };
        case 'SET_CORRECT_LETTERS':
            return {
                ...state,
                correctLetters: action.correctLetters,
            };
        case 'SET_WRONG_LETTERS':
            return {
                ...state,
                wrongLetters: action.wrongLetters,
            };
        case 'ADD_CORRECT_LETTER':
            return {
                ...state,
                correctLetters: [...state.correctLetters, action.letter],
            };
        case 'ADD_WRONG_LETTER':
            return {
                ...state,
                wrongLetters: [...state.wrongLetters, action.letter],
            };
        case 'START_COUNTER':
            return {
                ...state,
                startAt: new Date()
            }

        default:
            return state
    }
}

export default hangman