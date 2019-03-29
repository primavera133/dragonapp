import React from 'react'
import { Provider } from 'react-redux'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import { initStore } from './store'
import AppNavigator from './navigation/AppNavigator'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoadingComplete: false
    }

    this.store = initStore()

    this._loadResourcesAsync = this._loadResourcesAsync.bind(this)
    this._handleLoadingError = this._handleLoadingError.bind(this)
    this._handleFinishLoading = this._handleFinishLoading.bind(this)
  }

  render () {
    return (
      <Provider store={this.store}>
        {
          (!this.state.isLoadingComplete && !this.props.skipLoadingScreen)
            ? <AppLoading
              startAsync={this._loadResourcesAsync}
              onError={this._handleLoadingError}
              onFinish={this._handleFinishLoading}
            />
            : <View style={styles.container}>
              {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
              <AppNavigator />
            </View>
        }
      </Provider>
    )
  }

  async _loadResourcesAsync () {
    console.log('_loadResourcesAsync')
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png')
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
      })
    ])
  }

  _handleLoadingError (error) {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading () {
    console.log('_handleFinishLoading')
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
