import { createReducer } from 'reduxsauce'
import { Types } from './actions'

export const INITIAL_STATE = {
  raw: null,
  fetchingData: false,
  fetchingDataFailed: false,
  allImagesFlat: []
}

const _fetchDataFail = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetchingData: false,
    fetchingDataFailed: !action.hasRawData // never mind if only update
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

const _setAllImagesFlat = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    allImagesFlat: action.value
  }
}

const HANDLERS = {
  [Types.FETCH_DATA_FAIL]: _fetchDataFail,
  [Types.FETCH_DATA_STARTED]: _fetchDataStarted,
  [Types.FETCH_DATA_SUCCESS]: _fetchDataSuccess,
  [Types.SET_ALL_IMAGES_FLAT]: _setAllImagesFlat
}

export default createReducer(INITIAL_STATE, HANDLERS)
