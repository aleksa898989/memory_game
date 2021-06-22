import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import memoryGame from 'app/redux/reducers/reducers'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(memoryGame, composeEnhancers(
    applyMiddleware(thunk)
));