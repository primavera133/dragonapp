import { createReducer } from 'reduxsauce'
import { Types } from './actions'
// import { Types } from './actions'

export const INITIAL_STATE = {
  lang: 'en'
}

const _setLanguage = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    lang: action.value
  }
}

const HANDLERS = {
  [Types.SET_LANGUAGE]: _setLanguage
}

export default createReducer(INITIAL_STATE, HANDLERS)
