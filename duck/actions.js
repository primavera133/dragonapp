import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
  fetchDataStarted: [],
  fetchDataSuccess: ['value'],
  fetchDataFail: ['hasRawData', 'error'],
  setFamilies: ['value'],
  setLanguage: ['value'],
  setLanguages: ['value'],
  setLinks: ['value'],
  setSelectedSpecie: ['value'],
  setAllImagesFlat: ['value']
})

export { Creators, Types }
