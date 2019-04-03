import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppNavigator from './navigation/AppNavigator'
import operations from './duck/operations'
import selectors from './duck/selectors'
import i18n from 'i18n-js'

class Main extends Component {
  componentWillMount () {
    const { hasRawData } = this.props
    this.props.fetchData(hasRawData)

    i18n.fallbacks = true
    i18n.translations = {
      en_GB: {
        links: {
          h1: 'Links'
        },
        settings: {
          h1: 'Settings',
          h2: 'Language:',
          change: 'change',
          changeLanguages: {
            h1: 'Settings',
            h2: 'Change language'
          }
        },
        species: {
          h1: 'Dragonflies of Europe'
        }
      },
      sv_SE: {
        links: {
          h1: 'Länkar!'
        },
        settings: {
          h1: 'Inställningar',
          h2: 'Språk:',
          change: 'ändra',
          changeLanguages: {
            h1: 'Inställningar',
            h2: 'Ändra språk'
          }
        },
        species: {
          h1: 'Europas trollsländor'
        }
      }
    }
    i18n.locale = this.props.language
    console.log('this.props.language', this.props.language)
  }

  render () {
    return <AppNavigator />
  }
}

const mapStateToProps = state => {
  const language = selectors.getLanguage(state)
  const hasRawData = !!selectors.getRawData(state)
  return {
    hasRawData,
    language
  }
}

const mapDispatchToProps = {
  fetchData: (hasRawData) => operations.fetchData(hasRawData)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
