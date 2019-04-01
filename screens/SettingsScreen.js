import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import selectors from '../duck/selectors'
import { connect } from 'react-redux'

class SettingsScreen extends React.Component {
  constructor (props) {
    super(props)

    this.navigationOptions = {
      title: 'app.json'
    }
  }

  render () {
    const { language } = this.props

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Settings</Text>

        <View style={styles.block}>
          <View style={styles.blockStart}>
            <Text style={styles.blockHeader} >Language: { language }</Text>
          </View>
          <View style={styles.blockEnd}>
            <Text
              style={styles.blockChange}
              onPress={() => this.props.navigation.navigate('Languages')}
            >Change</Text>
          </View>
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
  },

  block: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 9,
    marginBottom: 12
  },

  blockStart: {
    flex: 1,
    alignSelf: 'flex-end'
  },

  blockEnd: {
    flex: 1
  },

  blockHeader: {
    fontSize: 16
  },

  blockChange: {
    fontSize: 16,
    alignSelf: 'flex-end'
  },

  picker: {
    height: 50,
    width: 100
  }
})

const mapStateToProps = state => {
  const language = selectors.getLanguage(state)

  return { language }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
