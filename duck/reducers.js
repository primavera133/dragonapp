import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import speciesReducer from './speciesReducer'
import settingsReducer from './settingsReducer'

const rootReducer = combineReducers({
  data: dataReducer,
  species: speciesReducer,
  settings: settingsReducer
})

export default rootReducer
