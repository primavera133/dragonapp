import axios from 'axios'
import { Creators } from './actions'

/**
 * Get data
 * @returns {Function}
 */
const fetchData = (hasRawData) => dispatch => {
  if (hasRawData) {
    console.log('fetching updates')
  }

  dispatch(Creators.fetchDataStarted())

  axios.get(`https://myrenas.se/api-species/json/v1.json`)
    .then(response => {
      dispatch(Creators.fetchDataSuccess(response.data))

      const results = response.data.results

      const languages = results.map(result => result.language_id)
      dispatch(Creators.setLanguages(languages))

      const families = {}
      const links = {}
      languages.forEach(language => {
        const result = results.find(result => result.language_id === language)
        const departments = result.departments
        families[language] = departments
          .find(department => department.department_id === 'families')
          .groups
          .map(family => ({ title: family.group_id, data: family.items }))

        links[language] = departments.find(department => department.department_id === 'links')
          .groups
      })
      dispatch(Creators.setFamilies(families))
      dispatch(Creators.setLinks(links))
    })
    .catch(error => {
      console.log('error', error)
      dispatch(Creators.fetchDataFail(hasRawData, error))
    })
}

export default {
  fetchData
}
