const initialState = {
    highscore: null,
    scores: [],
};

const scores = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SCORE':
            return {
                ...state,
                scores: action.scores,

            };
        case 'SET_HIGHSCORE':
            return {
                ...state,
                highscore: action.highscore,
            }
        default:
            return state
    }
}

export default scores