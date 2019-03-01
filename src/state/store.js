import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducer'

const rootReducer = combineReducers({app: reducer})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
