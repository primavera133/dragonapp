// API Data
const getData = state => state.data
const getRawData = state => getData(state).raw
const isFetchingData = state => getData(state).fetchingData && !getData(state).fetchingDataFailed
const isFetchDataFailed = state => getData(state).fetchingDataFailed

// Species
const getSpeciesData = state => state.species
const getSpecie = state => getSpeciesData(state).selectedSpecie
const getFamilies = state => {
  const results = getRawData(state).results
  const language = getLanguage(state)
  return results.find(result => result.language_id === language).families
}

// Settings
const getSettings = state => state.settings
const getLanguage = state => getSettings(state).lang

export default {
  getData,
  getLanguage,
  getRawData,
  getFamilies,
  getSpecie,
  isFetchingData,
  isFetchDataFailed
}
