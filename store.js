import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import thunkMiddleware from 'redux-thunk'
import rootReducer from './duck/reducers'

let store = null

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const initStore = () => {
  const composedEnhancers = compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // other store enhancers if any
  )

  if (!store) {
    store = createStore(
      persistedReducer,
      composedEnhancers
    )
  }

  return { store, persistor: persistStore(store) }
}
