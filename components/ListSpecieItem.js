import React from 'react'
import { Icon } from 'expo'
import Colors from '../constants/Colors'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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
    const { item } = this.props
    const uri = item.images && item.images.thumb ? item.images.thumb.uri : null

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this._handleNavigation}
      >
        <View style={styles.col0}>
          {uri ? (
            <Image style={styles.thumb} source={{ uri }} />
          ) : (
            <Icon.Ionicons
              name={Platform.OS === 'ios' ? 'ios-image' : 'md-image'}
              size={36}
              style={styles.thumbPlaceholder}
              color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          )}
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
    backgroundColor: '#fff',
    paddingTop: 6,
    paddingBottom: 6
  },

  col0: {
    width: 50,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginLeft: 12,
    marginRight: 9
  },

  thumb: {
    width: 50,
    height: 50
  },

  thumbPlaceholder: {
    marginBottom: -3
  },

  col1: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  loc: {
    fontSize: 20
  },

  sci: {
    fontSize: 14
  }

})
