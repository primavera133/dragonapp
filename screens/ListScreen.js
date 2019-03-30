import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import selectors from '../duck/selectors'
import { FlatList } from 'react-native'
import ListSpecieItem from '../components/ListSpecieItem'


class ListScreen extends React.Component {
  constructor (props) {
    super(props)

    this.navigationOptions = {
      title: 'List'
    }
  }

  _keyExtractor = (item, index) => item.specie_id

  render () {
    const {species} = this.props
    return (
      <ScrollView style={styles.container}>
          <Text style={styles.headerText}>Species</Text>
          <FlatList
            style={styles.list}
            keyExtractor={this._keyExtractor}
            data={species}
            renderItem={({item}) => <ListSpecieItem item={item}/>}
            ItemSeparatorComponent={() => (
              <View style={styles.separator} />
              )}
          />
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

  list: {
    flex:1,
    borderTopColor: '#333',
    borderBottomColor: '#333',
    borderTopWidth: 1,
    borderBottomWidth: 1
  },

  separator: {
    height: 1,
    backgroundColor: '#333'
  }
})

const mapStateToProps = state => {
  const species = selectors.getSpecies(state)

  return {species}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen)
