// API Data
const getData = state => state.data
const getAllImagesFlat = state => getData(state).allImagesFlat
const getRawData = state => getData(state).raw
const isFetchingData = state => getData(state).fetchingData
const isFetchDataFailed = state => getData(state).fetchingDataFailed
const isPrefetching = state => getData(state).prefetching
const isLoading = state => isFetchingData(state) || isPrefetching(state)

// Species
const getSpeciesData = state => state.species
const getSpecie = state => getSpeciesData(state).selectedSpecie
const getFamilies = (state, language) => getSpeciesData(state).families[language]

// Links
const getLinksData = state => state.links
const getLinks = (state, language) => getLinksData(state).links[language]

// Settings
const getSettings = state => state.settings
const getLanguage = state => getSettings(state).language
const getLanguages = state => getSettings(state).languages

export default {
  getAllImagesFlat,
  getData,
  getLanguage,
  getLanguages,
  getRawData,
  getFamilies,
  getLinks,
  getSpecie,
  isFetchingData,
  isFetchDataFailed,
  isLoading
}
