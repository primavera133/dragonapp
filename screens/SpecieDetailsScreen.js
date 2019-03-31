import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import selectors from '../duck/selectors'
import Markdown from 'react-native-markdown-renderer'

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
        <View style={styles.localName}>
          <Text style={styles.localNameText}>{specie.local_name}</Text>
        </View>
        <View style={styles.sciName}>
          <Text>{specie.scientific_name}</Text>
        </View>
        <View style={styles.descriptionBlock}>
          <Text style={styles.descriptionHeader}>Description</Text>
        </View>
        <View style={styles.descriptionBlock}>
          <Markdown>{ specie.description }</Markdown>
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

  localName: {
    marginLeft: 15,
    marginTop: 9
  },

  localNameText: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  sciName: {
    marginLeft: 15,
    marginTop: 9,
    fontSize: 12
  },

  descriptionBlock: {
    marginLeft: 15,
    marginTop: 9
  },

  descriptionHeader: {
    fontWeight: 'bold'
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
