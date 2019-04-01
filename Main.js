import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppNavigator from './navigation/AppNavigator'
import operations from './duck/operations'
import selectors from './duck/selectors'

class Main extends Component {
  componentWillMount () {
    const { hasRawData } = this.props
    this.props.fetchData(hasRawData)
  }

  render () {
    return <AppNavigator />
  }
}

const mapStateToProps = state => {
  const hasRawData = !!selectors.getRawData(state)
  return {
    hasRawData
  }
}

const mapDispatchToProps = {
  fetchData: (hasRawData) => operations.fetchData(hasRawData)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
