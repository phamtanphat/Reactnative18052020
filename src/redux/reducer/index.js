import { combineReducers } from 'redux'
import wordReducer from './wordReducer'
import shouldshowformReducer from './shouldshowformReducer'
import filterModeReducer from './filterModeReducer'

const reducer = combineReducers({
    words : wordReducer,
    shouldshowform : shouldshowformReducer,
    filterMode : filterModeReducer
})

export default reducer