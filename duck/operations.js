import axios from 'axios'
import { Creators } from './actions'

/**
 * Get data
 * @returns {Function}
 */
const fetchData = (hasRawData, language = 'en_GB') => dispatch => {
  if (hasRawData) {
    console.log('rehydrated ok, fetching updates')
  }

  dispatch(Creators.fetchDataStarted())

  axios.get(`https://myrenas.se/api-species/json/v1.json`)
    .then(response => {
      dispatch(Creators.fetchDataSuccess(response.data))

      const results = response.data.results

      const languages = results.map(result => result.language_id)

      const result = results.find(result => result.language_id === language)
      const departments = result.departments
      const families = departments
        .find(department => department.department_id === 'families')
        .groups
        .map(family => ({ title: family.group_id, data: family.items }))

      const links = departments.find(department => department.department_id === 'links')
        .groups

      dispatch(Creators.setFamilies(families))
      dispatch(Creators.setLinks(links))
      dispatch(Creators.setLanguages(languages))
    })
    .catch(error => {
      console.log('error', error)
      dispatch(Creators.fetchDataFail(hasRawData, error))
    })
}

export default {
  fetchData
}
