import { combineReducers } from 'redux'
import name from './nameReducer'
import scores from './scores'

export default combineReducers({ name, scores })

