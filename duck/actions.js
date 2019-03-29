import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
  fetchDataStarted: [],
  fetchDataSuccess: ['value'],
  fetchDataFail: []
})

export { Creators, Types }
