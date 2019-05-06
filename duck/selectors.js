// API Data
const getData = state => state.data
const getRawData = state => getData(state).raw
const isFetchingData = state => getData(state).fetchingData
const isFetchDataFailed = state => getData(state).fetchingDataFailed
const isLoading = state => isFetchingData(state)

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
const getFilters = state => ({
  area: getFilterArea(state),
  level: getFilterLevel(state)
})

export default {
  getData,
  getAbundance,
  getLanguage,
  getLanguages,
  getRawData,
  getFamilies,
  getFilters,
  getLinks,
  getFilterArea,
  getFilterLevel,
  getSelectedImage,
  getSelectedSpecie,
  isFetchingData,
  isFetchDataFailed,
  isLoading
}
