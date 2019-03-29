import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default class ListScreen extends React.Component {
  constructor (props) {
    super(props)

    this.navigationOptions = {
      title: 'List'
    }
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.headerText}>Species</Text>
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
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12
  }
})
