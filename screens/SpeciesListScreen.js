import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Creators } from '../duck/actions'
import selectors from '../duck/selectors'
import { SectionList } from 'react-native'
import ListSpecieItem from '../components/ListSpecieItem'

class SpeciesListScreen extends React.Component {
  constructor (props) {
    super(props)

    this.navigationOptions = {
      title: 'List'
    }
  }

  _keyExtractor = (item, index) => item.specie_id

  render () {
    const { navigation, setSelectedSpecie, families } = this.props
    console.log('families', families)

    const sections = families.map(family => ({ title: family.family_id, data: family.species}))

    return (
      <View style={styles.container}>
        <SectionList
          ItemSeparatorComponent={() => <View style={styles.separator}/>}

          keyExtractor={this._keyExtractor}

          ListHeaderComponent={() => <Text style={styles.headerText}>Species</Text>}

          renderItem={({ item }) => <ListSpecieItem
              item={item}
              navigation={navigation}
              setSelectedSpecie={setSelectedSpecie}/>}

          renderSectionHeader={({section: {title}}) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{title}</Text>
            </View>
          )}

          sections={sections}

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
  },

  separator: {
    height: 1,
    backgroundColor: '#333'
  }
})

const mapStateToProps = state => {
  const families = selectors.getFamilies(state)

  return { families }
}

const mapDispatchToProps = dispatch => {
  const setSelectedSpecie = item => dispatch(Creators.setSelectedSpecie(item))
  return {
    setSelectedSpecie
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesListScreen)
