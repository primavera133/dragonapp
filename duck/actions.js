import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
  fetchDataStarted: [],
  fetchDataSuccess: ['value'],
  fetchDataFail: ['error'],
  setAbundance: ['value'],
  setFamilies: ['value'],
  setLanguage: ['value'],
  setLanguages: ['value'],
  setLinks: ['value'],
  setFilterArea: ['value'],
  setFilterLevel: ['value'],
  setSelectedImage: ['value'],
  setSelectedSpecie: ['value'],
  setStructure: ['value']
})

export { Creators, Types }
