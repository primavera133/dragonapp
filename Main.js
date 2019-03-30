import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppNavigator from './navigation/AppNavigator'
import operations from './duck/operations'
import selectors from './duck/selectors'

class Main extends Component {
  componentWillMount () {
    this.props.fetchData(this.props.hasRawData)
  }

  render () {
    return <AppNavigator />
  }
}

const mapStateToProps = state => {
  const hasRawData = !!selectors.getRawData(state)
  return { hasRawData }
}

const mapDispatchToProps = dispatch => {
  const fetchData = (hasRawData) => dispatch(operations.fetchData(hasRawData))

  return {
    fetchData
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
