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
const getSelectedImage = state => getSpeciesData(state).selectedImage
const getSelectedSpecie = state => getSpeciesData(state).selectedSpecie
const getFamilies = (state, language) => getSpeciesData(state).families[language]
const getAbundance = state => getSpeciesData(state).abundance

// Links
const getLinksData = state => state.links
const getLinks = (state, language) => getLinksData(state).links[language]

// Settings
const getSettings = state => state.settings
const getLanguage = state => getSettings(state).language
const getLanguages = state => getSettings(state).languages
const getFilterArea = state => getSettings(state).filterArea
const getFilterLevel = state => getSettings(state).filterLevel

export default {
  getAllImagesFlat,
  getData,
  getAbundance,
  getLanguage,
  getLanguages,
  getRawData,
  getFamilies,
  getLinks,
  getFilterArea,
  getFilterLevel,
  getSelectedImage,
  getSelectedSpecie,
  isFetchingData,
  isFetchDataFailed,
  isLoading
}
