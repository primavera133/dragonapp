import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import listReducer from './listReducer'

const rootReducer = combineReducers({
  data: dataReducer,
  list: listReducer
})

export default rootReducer
