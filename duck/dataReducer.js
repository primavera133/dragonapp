import { createReducer } from 'reduxsauce'
import { Types } from './actions'

export const INITIAL_STATE = {
  raw: null,
  fetchingData: false,
  fetchingDataFailed: false
}

const _fetchDataFail = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetchingData: false,
    fetchingDataFailed: true
  }
}

const _fetchDataStarted = (state = INITIAL_STATE) => {
  return {
    ...state,
    fetchingData: true
  }
}

const _fetchDataSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetchingData: false,
    fetchingDataFailed: false,
    raw: action.value
  }
}

const HANDLERS = {
  [Types.FETCH_DATA_FAIL]: _fetchDataFail,
  [Types.FETCH_DATA_STARTED]: _fetchDataStarted,
  [Types.FETCH_DATA_SUCCESS]: _fetchDataSuccess
}

export default createReducer(INITIAL_STATE, HANDLERS)
