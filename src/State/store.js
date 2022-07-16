import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { userReducer } from './reducers/userReducer'
import { mediaReducer } from './reducers/mediaReducer'
import { utubeReducer } from './reducers/utubeReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  combineReducers({
    user: userReducer,
    media: mediaReducer,
    utube: utubeReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
)
