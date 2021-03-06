import React from 'react'
import { connect } from 'react-redux'
import { SectionList, StyleSheet, Text, View } from 'react-native'
import { Creators } from '../duck/actions'
import selectors from '../duck/selectors'
import ListSpecieItem from '../components/ListSpecieItem'
import i18n from 'i18n-js'

class SpeciesListScreen extends React.Component {
  constructor (props) {
    super(props)

    this.navigationOptions = {
      title: 'List'
    }

    this._handleNavigateToDetails = this._handleNavigateToDetails.bind(this)
  }

  static _keyExtractor (item) {
    return item.items_id
  }

  _handleNavigateToDetails (item) {
    const { navigation, setSelectedSpecie } = this.props
    setSelectedSpecie(item)
    navigation.navigate('Details')
  }

  render () {
    const { language } = this.props // enforce re-render when changing language
    const { setSelectedSpecie, families } = this.props

    return (
      <View style={styles.container} data-lang={language}>
        <SectionList
          ItemSeparatorComponent={() => <View style={styles.separator} />}

          keyExtractor={SpeciesListScreen._keyExtractor}

          ListHeaderComponent={() => <Text style={styles.headerText}>{i18n.t('species.h1')}</Text>}

          renderItem={({ item }) => <ListSpecieItem
            item={item}
            navigate={this._handleNavigateToDetails}
            setSelectedSpecie={setSelectedSpecie} />}

          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{title}</Text>
            </View>
          )}

          sections={families}

          style={styles.list}
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

  list: {
    flex: 1,
    borderBottomColor: '#333',
    borderBottomWidth: 1
  },

  sectionHeader: {
    flex: 1,
    backgroundColor: '#eee',
    fontSize: 16,
    paddingLeft: 15,
    paddingTop: 12,
    paddingBottom: 9
  },

  sectionHeaderText: {
    fontWeight: 'bold',
    textTransform: 'capitalize'
  }

})

const mapStateToProps = state => {
  const language = selectors.getLanguage(state)
  const families = selectors.getFamilies(state, language)

  return {
    families,
    language
  }
}

const mapDispatchToProps = {
  setSelectedSpecie: item => Creators.setSelectedSpecie(item)
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesListScreen)
