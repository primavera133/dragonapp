import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { WebBrowser } from 'expo'
import selectors from '../duck/selectors'
import { Creators } from '../duck/actions'
import { connect } from 'react-redux'
import i18n from 'i18n-js'

class LinksScreen extends React.Component {
  constructor (props) {
    super(props)

    this.navigationOptions = {
      title: 'Links'
    }
  }

  static _handleLink (lnk) {
    WebBrowser.openBrowserAsync(lnk)
  };

  render () {
    const { language } = this.props // enforce re-render when changing language
    const { links } = this.props
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>{i18n.t('links.h1')}!</Text>

        {links.map(link => (
          <View key={link.group_id}>
            <Text onPress={() => LinksScreen._handleLink(link.url)} style={styles.linkText}>{link.text}</Text>
          </View>
        ))}
      </ScrollView>
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

  linkText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12
  }
})

const mapStateToProps = state => {
  const language = selectors.getLanguage(state)
  const links = selectors.getLinks(state)

  return {
    language,
    links
  }
}

const mapDispatchToProps = {
  setSelectedSpecie: item => Creators.setSelectedSpecie(item)
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksScreen)
