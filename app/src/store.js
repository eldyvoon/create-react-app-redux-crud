import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import usersReducer from './reducers/users'

export default createStore(
    combineReducers({
        usersReducer,
    }),
    applyMiddleware(
        logger(),
        promise()
    )
);
