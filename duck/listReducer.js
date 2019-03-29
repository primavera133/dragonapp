import { createReducer } from 'reduxsauce'
import { Types } from './actions'
import { INITIAL_STATE } from './initialState'

const _fetchListDataSuccess = (state = INITIAL_STATE, action) => {
  const newData = action.value
  const oldData = { ...state.form }

  const formData = Object.assign({}, oldData, newData)

  return {
    ...state,
    form: formData
  }
}

const HANDLERS = {
  [Types.FETCH_LIST_DATA_SUCCESS]: _fetchListDataSuccess
}

export default createReducer(INITIAL_STATE, HANDLERS)
