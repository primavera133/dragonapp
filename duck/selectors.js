// API Data
const getData = state => state.data
const getRawData = state => getData(state).raw
const isFetchingData = state => getData(state).fetchingData && !getData(state).fetchingDataFailed
const isFetchDataFailed = state => getData(state).fetchingDataFailed

// Species
const getSpeciesData = state => state.species
const getSpecie = state => getSpeciesData(state).selectedSpecie
const getFamilies = state => getSpeciesData(state).families

// Links
const getLinksData = state => state.links
const getLinks = state => getLinksData(state).links

// Settings
const getSettings = state => state.settings
const getLanguage = state => getSettings(state).language
const getLanguages = state => getSettings(state).languages

export default {
  getData,
  getLanguage,
  getLanguages,
  getRawData,
  getFamilies,
  getLinks,
  getSpecie,
  isFetchingData,
  isFetchDataFailed
}
