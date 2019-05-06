import axios from 'axios'
import { Creators } from './actions'
import { Asset, Font, Icon } from 'expo'
import selectors from './selectors'

const startUp = (filters) => dispatch => {
  try {
    Asset.loadAsync([
      require('../assets/images/robot-dev.png'),
      require('../assets/images/robot-prod.png')
    ])
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Icon.Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free
      // to remove this if you are not using it in your app
      'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf')
    })
    dispatch(fetchData(filters))
  } catch (error) {
    // dispatch(Creators.fetchDataFail(error))
  }
}

/**
 * Get data
 * @returns {Function}
 */
const fetchData = (filters) => dispatch => {
  dispatch(Creators.fetchDataStarted())

  axios.get(`https://myrenas.se/api-species/json/v1.json`)
    .then(response => {
      dispatch(Creators.fetchDataSuccess(response.data))

      const results = response.data.results

      dispatch(normalizeData(results, filters))
    })
    .catch(error => {
      console.log('error', error)
      dispatch(Creators.fetchDataFail(error))
    })
}

const normalizeData = (results, filters) => dispatch => {
  const languages = results.map(result => result.language_id)
  dispatch(Creators.setLanguages(languages))

  const structure = {}
  let abundance = {}
  const families = {}
  const links = {}

  languages.forEach(language => {
    const result = results.find(result => result.language_id === language)
    const departments = result.departments

    structure[language] = departments
      .find(department => department.department_id === 'structure')
      .groups[0]
    structure[language].order = Array.prototype.concat(...structure[language].order)

    if (structure[language].abundance) {
      abundance = structure[language].abundance
    }

    const _families = departments
      .find(department => department.department_id === 'families')
      .groups
      .map(family => ({ title: family.group_id, data: family.items }))

    families[language] = structure[language].order.map(key => _families.find(family => family.title === key))

    // filter families
    if (filters.area !== 'OFF') {
      let abundantSpecies = abundance[filters.area].main
      if (filters.level === 'EXTENDED') {
        abundantSpecies = abundantSpecies.concat(abundance[filters.area].extended)
      }

      let filteredFamilies = families[language].map(family => {
        family.data = family.data.filter(specie => {
          return abundantSpecies.includes(specie.scientific_name)
        })
        return family
      })

      filteredFamilies = filteredFamilies.filter(family => {
        return family.data.length
      })


      families[language] = filteredFamilies
    }

    links[language] = departments.find(department => department.department_id === 'links')
      .groups
  })

  dispatch(Creators.setAbundance(abundance))
  dispatch(Creators.setFamilies(families))
  dispatch(Creators.setLinks(links))
  dispatch(Creators.setStructure(structure))
}

const reNormalizeData = () => (dispatch, getState) => {
  const state = getState()
  const results = selectors.getRawData(state).results
  const filters = selectors.getFilters(state)
  dispatch(normalizeData(results, filters))
}

export default {
  startUp,
  reNormalizeData
}
