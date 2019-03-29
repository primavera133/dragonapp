import { createReducer } from 'reduxsauce'
import { Types } from './actions'

const INITIAL_STATE = {
  raw: null
}

const _fetchDataSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    raw: action.value
  }
}

const HANDLERS = {
  [Types.FETCH_DATA_SUCCESS]: _fetchDataSuccess
}

export default createReducer(INITIAL_STATE, HANDLERS)
