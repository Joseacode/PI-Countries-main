import { createStore, applyMiddleware } from 'redux'
import { composseWitDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducer'

//export const store = createStore(rootReducer)

export const store = createStore(
    rootReducer,
 //   composseWitDevTools(
        applyMiddleware(thunk)
//)
)
