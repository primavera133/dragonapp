import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
  fetchDataStarted: [],
  fetchDataSuccess: ['value'],
  fetchDataSuccessFamilies: ['value'],
  fetchDataSuccessLinks: ['value'],
  fetchDataFail: ['hasRawData', 'error'],
  setSelectedSpecie: ['value'],
  setLanguage: ['value']
})

export { Creators, Types }
