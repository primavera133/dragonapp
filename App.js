import React from 'react'
import { Provider } from 'react-redux'
import { initStore } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import Main from './Main'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    const { persistor, store } = initStore()
    this.store = store
    this.persistor = persistor
  }

  render () {
    return (
      <Provider store={this.store}>
        <PersistGate loading={null} persistor={this.persistor}>
          <Main />
        </PersistGate>
      </Provider>
    )
  }
}
