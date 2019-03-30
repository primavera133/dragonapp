import React from 'react'
import { Icon } from 'expo'
import Colors from '../constants/Colors'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'

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
      <View style={styles.container}>
        <View style={styles.col0}>
          <Icon.Ionicons
            name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'}
            size={26}
            style={{ marginBottom: -3 }}
            color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        </View>
        <View style={styles.col1}>
          <Button
            title={item.scientific_name}
            onPress={this._handleNavigation}
            accessibilityLabel={`Go to details about ${item.scientific_name}`}
          />
        </View>
        <View style={styles.col2}>
          <Button
            title={item.local_name}
            onPress={this._handleNavigation}
            accessibilityLabel={`Go to details about ${item.local_name}`}
          />
        </View>
      </View>
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
    flex: 1,
    justifyContent: 'center',
    width: 50,
    height: 50
  },

  col2: {
    flex: 1,
    justifyContent: 'center',
    width: 50,
    height: 50
  }
})
