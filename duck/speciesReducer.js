import { createReducer } from 'reduxsauce'
import { Types } from './actions'

export const INITIAL_STATE = {
  selectedSpecie: null,
  families: null
}

const _setSelectedSpecie = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    selectedSpecie: action.value
  }
}

const _setFamilies = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    families: action.value
  }
}

const HANDLERS = {
  [Types.SET_FAMILIES]: _setFamilies,
  [Types.SET_SELECTED_SPECIE]: _setSelectedSpecie
}

export default createReducer(INITIAL_STATE, HANDLERS)
