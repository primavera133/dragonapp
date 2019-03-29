import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import selectors from '../duck/selectors'

class ListScreen extends React.Component {
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
          <Text>{
            JSON.stringify(this.props.rawData)
          }</Text>
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

const mapStateToProps = state => {
  const rawData = selectors.getRawData(state)

  return {rawData}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen)
