import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
  fetchDataStarted: [],
  fetchDataSuccess: ['value'],
  fetchDataFail: ['hasRawData', 'error'],
  setSelectedSpecie: ['value']
})

export { Creators, Types }
