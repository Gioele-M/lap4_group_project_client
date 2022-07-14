import { createStore } from 'redux'
import { userReducer } from './reducers/userReducer'
import { devToolsEnhancer } from 'redux-devtools-extension'

export const store = createStore(userReducer, devToolsEnhancer())
