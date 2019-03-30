import React from 'react'
import { Icon } from 'expo'
import Colors from '../constants/Colors'
import { Platform, StyleSheet, Text, View } from 'react-native'

export default class ListSpecieItem extends React.Component {
  render () {
    const {item} = this.props
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
          <Text>{item.scientific_name}</Text>
        </View>
        <View style={styles.col2}>
          <Text>{item.local_name}</Text>
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
