import { createReducer } from 'reduxsauce'
import { Types } from './actions'
// import { Types } from './actions'

const INITIAL_STATE = {
  selectedSpecie: null
}

const _setSelectedSpecie = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    selectedSpecie: action.value
  }
}

const HANDLERS = {
  [Types.SET_SELECTED_SPECIE]: _setSelectedSpecie
}

export default createReducer(INITIAL_STATE, HANDLERS)
