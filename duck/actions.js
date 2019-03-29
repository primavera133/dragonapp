import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
  fetchListDataSuccess: ['value']
})

export { Creators, Types }
