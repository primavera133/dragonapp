import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import AutoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './duck/reducers'
// import { AsyncStorage } from 'react-native'

import { INITIAL_STATE as dataInitialState } from './duck/dataReducer'
import { INITIAL_STATE as speciesInitialState } from './duck/speciesReducer'
import { INITIAL_STATE as settingsInitialState } from './duck/settingsReducer'
import { INITIAL_STATE as linksInitialState } from './duck/linksReducer'

/*
const dumpRawAsyncStorage = () => {
  return AsyncStorage.getAllKeys().then(keys => {
    keys.forEach(key => {
      return AsyncStorage.getItem(key).then(value => {
        console.log(123123123, key, value)
      })
    })
  })
}
*/

let store = null

const persistConfig = {
  key: 'v2',
  storage,
  debug: true,
  stateReconciler: AutoMergeLevel2
}

const initialState = {
  data: dataInitialState,
  species: speciesInitialState,
  settings: settingsInitialState,
  links: linksInitialState
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const initStore = () => {
  // dumpRawAsyncStorage()

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
