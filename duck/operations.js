import axios from 'axios'
import { Creators } from './actions'
import { Image } from 'react-native'
import { Asset, Font, Icon } from 'expo'

const startUp = () => dispatch => {
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
    dispatch(fetchData())
  } catch (error) {
    dispatch(Creators.prefetchFail(error))
  }
}

/**
 * Get data
 * @returns {Function}
 */
const fetchData = () => dispatch => {
  dispatch(Creators.fetchDataStarted())

  axios.get(`https://myrenas.se/api-species/json/v1.json`)
    .then(response => {
      dispatch(Creators.fetchDataSuccess(response.data))

      const results = response.data.results

      dispatch(normalizeData(results))

      // dispatch(Creators.prefetchStart())
    })
    .catch(error => {
      console.log('error', error)
      dispatch(Creators.fetchDataFail(error))
    })
}

const normalizeData = (results) => dispatch => {
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

  dispatch(prefetchImages(allImagesFlat))
}

const prefetchImages = (images) => dispatch => {
  // console.log('_prefetch images', images)

  images.forEach(({ uri }) => {
    // console.log('_prefetch uri', uri, uri.lastIndexOf())
    Image.prefetch(uri)
  })

  dispatch(Creators.prefetchSuccess())
}

export default {
  startUp
}
