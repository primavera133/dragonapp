import { createReducer } from 'reduxsauce'
import { Types } from './actions'

export const INITIAL_STATE = {
  abundance: null,
  selectedImage: null,
  selectedSpecie: null,
  families: null
}

const _setAbundance = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    abundance: action.value
  }
}

const _setSelectedImage = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    selectedImage: action.value
  }
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

const _setStructure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    structure: action.value
  }
}

const HANDLERS = {
  [Types.SET_ABUNDANCE]: _setAbundance,
  [Types.SET_FAMILIES]: _setFamilies,
  [Types.SET_SELECTED_IMAGE]: _setSelectedImage,
  [Types.SET_SELECTED_SPECIE]: _setSelectedSpecie,
  [Types.SET_STRUCTURE]: _setStructure
}

export default createReducer(INITIAL_STATE, HANDLERS)
