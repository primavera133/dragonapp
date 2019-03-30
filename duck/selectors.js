const getData = state => state.data
const getRawData = state => getData(state).raw
const getSpecies = state => getRawData(state).results
const isFetchingData = state => getData(state).fetchingData && !getData(state).fetchingDataFailed
const isFetchDataFailed = state => getData(state).fetchingDataFailed

export default {
  getData,
  getRawData,
  getSpecies,
  isFetchingData,
  isFetchDataFailed
}
