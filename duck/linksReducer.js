import { createReducer } from 'reduxsauce'
import { Types } from './actions'

export const INITIAL_STATE = {
  links: null
}

const _setLinks = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    links: action.value
  }
}

const HANDLERS = {
  [Types.SET_LINKS]: _setLinks
}

export default createReducer(INITIAL_STATE, HANDLERS)
