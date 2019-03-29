import React from 'react'
import { connect } from 'react-redux'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import operations from '../duck/operations'

import MainTabNavigator from './MainTabNavigator'

let Navigation = createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator
}))

class NavigationContainer extends React.Component {
  componentWillMount () {
    this.props.fetchData()
  }

  render () {
    return (<Navigation />)
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  const fetchData = () => dispatch(operations.fetchData())

  return {
    fetchData
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationContainer)
