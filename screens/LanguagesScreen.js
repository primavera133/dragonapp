import React from 'react'
import { connect } from 'react-redux'
import { Picker, StyleSheet, Text, View } from 'react-native'
import { Creators } from '../duck/actions'
import selectors from '../duck/selectors'
import i18n from 'i18n-js';

class LanguagesScreen extends React.Component {
  constructor (props) {
    super(props)

    this.navigationOptions = {
      title: 'Languages'
    }

    this._handleOnChange = this._handleOnChange.bind(this)
  }

  _handleOnChange (itemValue, itemIndex) {
    this.props.setLanguage(itemValue)
    i18n.locale = itemValue
  }

  render () {
    const { language, languages } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{i18n.t('settings.changeLanguages.h1')}</Text>

        <Text style={styles.subHeaderText} >{i18n.t('settings.changeLanguages.h2')}</Text>

        <View style={styles.block}>
          <Picker
            selectedValue={language}
            style={styles.picker}
            onValueChange={this._handleOnChange}>
            { languages.map((lang, idx) => (
              <Picker.Item
                key={`${lang}${idx}`}
                label={lang}
                value={lang}
              />
            ))}
          </Picker>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },

  headerText: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12
  },

  subHeaderText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12
  }
})

const mapStateToProps = state => {
  const language = selectors.getLanguage(state)
  const languages = selectors.getLanguages(state)

  return {
    language,
    languages
  }
}

const mapDispatchToProps = {
  setLanguage: (language) => (Creators.setLanguage(language))
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesScreen)
