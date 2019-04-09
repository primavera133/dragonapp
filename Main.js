import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import AppNavigator from './navigation/AppNavigator'
import operations from './duck/operations'
import selectors from './duck/selectors'
import i18n from 'i18n-js'
import translations from './data/translations'

class Main extends Component {
  componentWillMount () {
    this.props.startUp()

    i18n.fallbacks = true
    i18n.translations = translations
    i18n.locale = this.props.language
  }

  render () {
    const { isLoading } = this.props
    return (isLoading)
      ? (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
          <AppNavigator />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  loadingText: {
    textAlign: 'center'
  }
})

const mapStateToProps = state => {
  const language = selectors.getLanguage(state)
  const isLoading = selectors.isLoading(state)
  return {
    isLoading,
    language
  }
}

const mapDispatchToProps = {
  startUp: () => operations.startUp()
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
