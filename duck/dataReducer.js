import { createReducer } from 'reduxsauce'
import { Types } from './actions'

export const INITIAL_STATE = {
  raw: null,
  fetchingData: false,
  fetchingDataFailed: false,
  prefetching: false,
  allImagesFlat: []
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
    prefetching: true,
    raw: action.value
  }
}

const _setAllImagesFlat = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    allImagesFlat: action.value
  }
}

const _prefetchStart = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    prefetching: true
  }
}

const _prefetchSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    prefetching: false
  }
}

const _prefetchFail = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    prefetching: false,
    prefetchError: action.value
  }
}

const HANDLERS = {
  [Types.FETCH_DATA_FAIL]: _fetchDataFail,
  [Types.FETCH_DATA_STARTED]: _fetchDataStarted,
  [Types.FETCH_DATA_SUCCESS]: _fetchDataSuccess,
  [Types.SET_ALL_IMAGES_FLAT]: _setAllImagesFlat,
  [Types.PREFETCH_START]: _prefetchStart,
  [Types.PREFETCH_SUCCESS]: _prefetchSuccess,
  [Types.PREFETCH_FAIL]: _prefetchFail
}

export default createReducer(INITIAL_STATE, HANDLERS)
