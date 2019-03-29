import axios from 'axios'
import { Creators } from './actions'

/**
 * Get data
 * @returns {Function}
 */
const fetchData = () => dispatch => {
  dispatch(Creators.fetchDataStarted())

  axios.get(`https://myrenas.se/api-species/json/v1/english/species.json`)
    .then(response => {
      dispatch(Creators.fetchDataSuccess(response.data))
    })
    .catch(error => {
      dispatch(Creators.fetchDataFail(error))
    })
}

export default {
  fetchData
}
