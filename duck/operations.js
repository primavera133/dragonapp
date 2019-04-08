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

      const structure = {}
      const families = {}
      const links = {}
      let allImagesFlat = []

      languages.forEach(language => {
        const result = results.find(result => result.language_id === language)
        const departments = result.departments

        structure[language] = departments
          .find(department => department.department_id === 'structure')
          .groups[0]
        structure[language].order = Array.prototype.concat(...structure[language].order)

        const _families = departments
          .find(department => department.department_id === 'families')
          .groups
          .map(family => ({ title: family.group_id, data: family.items }))

        families[language] = structure[language].order.map(key => _families.find(family => family.title === key))

        allImagesFlat = allImagesFlat.concat(families[language].map(family => {
          return family.data.map(specie => {
            let _images = []
            if (specie.images && specie.images.thumb) {
              _images.push(specie.images.thumb)
            }
            if (specie.images && specie.images.images) {
              _images = _images.concat(specie.images.images)
            }
            return _images
          }).reduce((acc, curr) => acc.concat(curr))
        }).reduce((acc, curr) => acc.concat(curr)))

        links[language] = departments.find(department => department.department_id === 'links')
          .groups
      })

      dispatch(Creators.setAllImagesFlat(allImagesFlat))

      dispatch(Creators.setFamilies(families))
      dispatch(Creators.setLinks(links))
      dispatch(Creators.setStructure(structure))
    })
    .catch(error => {
      console.log('error', error)
      dispatch(Creators.fetchDataFail(hasRawData, error))
    })
}

export default {
  fetchData
}
