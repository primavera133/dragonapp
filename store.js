import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './duck/reducers'

let store = null

export const initStore = () => {
  const enhancer = compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // other store enhancers if any
  )

  if (!store) {
    store = createStore(
      rootReducer,
      enhancer
    )
  }

  return store
}
