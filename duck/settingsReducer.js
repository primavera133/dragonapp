import { createReducer } from 'reduxsauce'
import { Types } from './actions'
// import { Types } from './actions'

export const INITIAL_STATE = {
  language: 'sv_SE',
  languages: ['sv_SE'],
  filterArea: 'OFF',
  filterLevel: 'OFF'
}

const _setFilterArea = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    filterArea: action.value
  }
}

const _setFilterLevel = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    filterLevel: action.value
  }
}

const _setLanguage = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    language: action.value
  }
}

const _setLanguages = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    languages: action.value
  }
}

const HANDLERS = {
  [Types.SET_FILTER_AREA]: _setFilterArea,
  [Types.SET_FILTER_LEVEL]: _setFilterLevel,
  [Types.SET_LANGUAGE]: _setLanguage,
  [Types.SET_LANGUAGES]: _setLanguages
}

export default createReducer(INITIAL_STATE, HANDLERS)
