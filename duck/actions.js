import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
  fetchDataStarted: [],
  fetchDataSuccess: ['value'],
  fetchDataFail: ['hasRawData', 'error']
})

export { Creators, Types }
