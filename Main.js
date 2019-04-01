import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppNavigator from './navigation/AppNavigator'
import operations from './duck/operations'
import selectors from './duck/selectors'

class Main extends Component {
  componentWillMount () {
    const { hasRawData, language } = this.props
    this.props.fetchData(hasRawData, language)
  }

  render () {
    return <AppNavigator />
  }
}

const mapStateToProps = state => {
  const hasRawData = !!selectors.getRawData(state)
  const language = selectors.getLanguage(state)
  return {
    hasRawData,
    language
  }
}

const mapDispatchToProps = {
  fetchData: (hasRawData, lang) => operations.fetchData(hasRawData, lang)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
