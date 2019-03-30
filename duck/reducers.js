import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import speciesReducer from './speciesReducer'

const rootReducer = combineReducers({
  data: dataReducer,
  species: speciesReducer
})

export default rootReducer
