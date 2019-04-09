import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
  fetchDataStarted: [],
  fetchDataSuccess: ['value'],
  fetchDataFail: ['error'],
  prefetchStart: ['value'],
  prefetchSuccess: [],
  prefetchFail: ['value'],
  setFamilies: ['value'],
  setLanguage: ['value'],
  setLanguages: ['value'],
  setLinks: ['value'],
  setSelectedSpecie: ['value'],
  setAllImagesFlat: ['value'],
  setStructure: ['value']
})

export { Creators, Types }
