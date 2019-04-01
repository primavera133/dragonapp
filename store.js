import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import thunkMiddleware from 'redux-thunk'
import rootReducer from './duck/reducers'

import { INITIAL_STATE as dataInitialState } from './duck/dataReducer'
import { INITIAL_STATE as speciesInitialState } from './duck/speciesReducer'
import { INITIAL_STATE as settingsInitialState } from './duck/settingsReducer'
import { INITIAL_STATE as linksInitialState } from './duck/linksReducer'

let store = null

const persistConfig = {
  key: 'v1',
  storage,
  migrate: (state) => {
    return Promise.resolve({
      ...state,
      settings: {
        ...state.settings,
        language: 'en_GB'
      }
    })
  }
}

const initialState = {
  data: dataInitialState,
  species: speciesInitialState,
  settings: settingsInitialState,
  links: linksInitialState
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const initStore = () => {
  const enhancers = []
  const middlewares = [thunkMiddleware]
  if (__DEV__) {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
  )

  if (!store) {
    store = createStore(
      persistedReducer,
      initialState,
      composedEnhancers
    )
  }

  return { store, persistor: persistStore(store) }
}
