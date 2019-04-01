import { createReducer } from 'reduxsauce'
import { Types } from './actions'
// import { Types } from './actions'

export const INITIAL_STATE = {
  links: null
}

const _fetchDataSuccessLinks = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    links: action.value
  }
}

const HANDLERS = {
  [Types.FETCH_DATA_SUCCESS_LINKS]: _fetchDataSuccessLinks
}

export default createReducer(INITIAL_STATE, HANDLERS)
