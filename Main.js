import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image } from 'react-native'
import AppNavigator from './navigation/AppNavigator'
import operations from './duck/operations'
import selectors from './duck/selectors'
import i18n from 'i18n-js'
import translations from './data/translations'

class Main extends Component {
  constructor (props) {
    super(props)

    this._prefetch(props.images)

    this._prefetch = this._prefetch.bind(this)
  }

  componentWillMount () {
    const { hasRawData } = this.props
    this.props.fetchData(hasRawData)

    i18n.fallbacks = true
    i18n.translations = translations
    i18n.locale = this.props.language
  }

  _prefetch (images) {
    // console.log('_prefetch images', images)
    images.forEach(({ uri }) => {
      // console.log('_prefetch uri', uri, uri.lastIndexOf())
      Image.prefetch(uri)
    })
  }

  render () {
    return (<AppNavigator />)
  }
}

const mapStateToProps = state => {
  const language = selectors.getLanguage(state)
  const hasRawData = !!selectors.getRawData(state)
  const images = selectors.getAllImagesFlat(state)
  return {
    hasRawData,
    language,
    images
  }
}

const mapDispatchToProps = {
  fetchData: (hasRawData) => operations.fetchData(hasRawData)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
