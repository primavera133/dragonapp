import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import selectors from '../duck/selectors'
import { FlatList } from 'react-native'
import ListSpecieItem from '../components/ListSpecieItem'


class SpecieDetailsScreen extends React.Component {
  constructor (props) {
    super(props)

    this.navigationOptions = {
      title: 'Details'
    }
  }

  render () {
    const {specie} = this.props
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Specie details</Text>
        <View>
          <Text>{specie.scientific_name}</Text>
          <Text>{specie.local_name}</Text>
        </View>
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
  }
})

const mapStateToProps = state => {
  const specie = selectors.getSpecie(state)

  return {specie}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecieDetailsScreen)
