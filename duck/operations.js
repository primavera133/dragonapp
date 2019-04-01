import axios from 'axios'
import { Creators } from './actions'

/**
 * Get data
 * @returns {Function}
 */
const fetchData = (hasRawData, lang) => dispatch => {
  if (hasRawData) {
    console.log('rehydrated ok, fetching updates')
  }

  dispatch(Creators.fetchDataStarted())

  axios.get(`https://myrenas.se/api-species/json/v1.json`)
    .then(response => {
      dispatch(Creators.fetchDataSuccess(response.data))

      const results = response.data.results
      const departments = results.find(result => result.language_id === lang).departments
      const families = departments
        .find(department => department.department_id === 'families')
        .groups
        .map(family => ({ title: family.group_id, data: family.items }))

      const links = departments.find(department => department.department_id === 'links')
        .groups

      dispatch(Creators.fetchDataSuccessFamilies(families))
      dispatch(Creators.fetchDataSuccessLinks(links))
    })
    .catch(error => {
      console.log('error', error)
      dispatch(Creators.fetchDataFail(hasRawData, error))
    })
}

export default {
  fetchData
}
