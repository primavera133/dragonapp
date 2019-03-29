import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppNavigator from './navigation/AppNavigator'
import operations from './duck/operations'
import Database from './Database'

const dbConnection = Database.getConnection()

class Main extends Component {
  componentWillMount () {
    dbConnection.transaction(tx => {
      tx.executeSql(
        'create table if not exists species (id integer primary key not null, value text);'
      )
    })

    this.props.fetchData()
  }

  componentDidMount () {
  }

  render () {
    return <AppNavigator />
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
)(Main)
