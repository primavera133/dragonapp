import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import linksReducer from './linksReducer'
import speciesReducer from './speciesReducer'
import settingsReducer from './settingsReducer'

const rootReducer = combineReducers({
  data: dataReducer,
  links: linksReducer,
  species: speciesReducer,
  settings: settingsReducer
})

export default rootReducer
