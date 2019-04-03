import React from 'react'
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import { WebBrowser } from 'expo'
import selectors from '../duck/selectors'
import { Creators } from '../duck/actions'
import { connect } from 'react-redux'
import i18n from 'i18n-js'
import LinkIcon from '../components/LinkIcon'

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
      <View style={styles.container} data-lang={language}>
        <Text style={styles.headerText}>{i18n.t('links.h1')}</Text>

        <FlatList
          style={styles.linkBlock}
          data={links}
          keyExtractor={(item) => item.group_id}
          renderItem={({ item }) => {
            return (
              <View style={styles.link}>
                <Text
                  onPress={() => LinksScreen._handleLink(item.url)}
                  style={styles.linkText}
                >{item.text}</Text>
                <LinkIcon
                  name={Platform.OS === 'ios' ? 'ios-open' : 'md-open'}
                />
              </View>
            )
          }
          }
        />
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

  linkBlock: {

  },

  link: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },

  linkText: {
    fontSize: 16,
    marginLeft: 15,
    marginRight: 6,
    marginTop: 9,
    marginBottom: 12
  }
})

const mapStateToProps = state => {
  const language = selectors.getLanguage(state)
  const links = selectors.getLinks(state, language)

  return {
    language,
    links
  }
}

const mapDispatchToProps = {
  setSelectedSpecie: item => Creators.setSelectedSpecie(item)
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksScreen)
