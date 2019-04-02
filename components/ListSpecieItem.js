import React from 'react'
import { Icon } from 'expo'
import Colors from '../constants/Colors'
import { Button, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class ListSpecieItem extends React.Component {
  constructor (props) {
    super(props)

    this._handleNavigation = this._handleNavigation.bind(this)
  }

  _handleNavigation () {
    const { item, navigation, setSelectedSpecie } = this.props
    setSelectedSpecie(item)
    navigation.navigate('Details')
  }

  render () {
    const { item, navigation } = this.props
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this._handleNavigation}
        >
        <View style={styles.col0}>
          <Icon.Ionicons
            name={Platform.OS === 'ios' ? 'ios-image' : 'md-image'}
            size={26}
            style={{ marginBottom: -3 }}
            color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        </View>
        <View style={styles.col1}>
          <Text style={styles.loc}>{item.local_name}</Text>
          <Text style={styles.sci}>{item.scientific_name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },

  col0: {
    width: 36,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginLeft: 12
  },

  col1: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 50
  },

  loc: {
    fontSize: 20
  },

  sci: {
    fontSize: 14
  },

})
