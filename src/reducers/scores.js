const initialState = {
    scores: [],
};

const scores = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SCORE':
            return {
                ...state,
                scores: [...state.scores, action.score]


            };
        case 'SET_SCORES':
            return {
                ...state,
                scores: action.scores
            }
        default:
            return state
    }
}

export default scores