import React from 'react'
import { Icon } from 'expo'
import Colors from '../constants/Colors'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Image } from 'react-native-expo-image-cache'

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
    const preview = { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==' }
    const imageUri = item.images && item.images.thumb ? item.images.thumb : null
    const thumb = {
      preview,
      uri: imageUri
    }

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this._handleNavigation}
      >
        <View style={styles.col0}>
          {imageUri ? (
            <Image style={styles.thumb} {...thumb} />
          ) : (
            <Icon.Ionicons
              name={Platform.OS === 'ios' ? 'ios-image' : 'md-image'}
              size={26}
              style={{ marginBottom: -3 }}
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
