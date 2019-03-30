const getData = state => state.data
const getRawData = state => getData(state).raw
const getSpecies = state => getRawData(state).results
const isFetchingData = state => getData(state).fetchingData && !getData(state).fetchingDataFailed
const isFetchDataFailed = state => getData(state).fetchingDataFailed

const getSpeciesData = state => state.species
const getSpecie = state => getSpeciesData(state).selectedSpecie

export default {
  getData,
  getRawData,
  getSpecies,
  getSpecie,
  isFetchingData,
  isFetchDataFailed
}
