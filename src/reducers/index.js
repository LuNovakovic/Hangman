import { combineReducers } from 'redux'
import name from './nameReducer'
import scores from './scores'
import hangman from './hangman';

export default combineReducers({ name, scores, hangman });

