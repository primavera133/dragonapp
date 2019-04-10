import React from 'react'
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import ResponsiveImage from 'react-native-responsive-image'

export default class extends React.PureComponent {
  constructor (props) {
    super(props)

    this.width = Dimensions.get('window').width
    this.initHeight = this.width / props.image.ratio
    this.initWidth = this.width

    this._handleSelectImage = this._handleSelectImage.bind(this)
  }

  _handleSelectImage () {
    const { image, onSelect } = this.props
    onSelect(image)
  }

  render () {
    const { preview, image } = this.props
    return preview
      ? (
        <TouchableOpacity
          onPress={this._handleSelectImage}
          style={styles.imageBox}
        >
          <ResponsiveImage
            source={{ uri: image.uri }}
            initWidth={this.initWidth}
            initHeight={this.initHeight}
          />
        </TouchableOpacity>
      ) : (
        <ScrollView
          minimumZoomScale={1}
          maximumZoomScale={3}
          contentContainerStyle={styles.imageBox}
        >
          <ResponsiveImage
            source={{ uri: image.uri }}
            initWidth={this.initWidth}
            initHeight={this.initHeight}
          />
        </ScrollView>
      )
  }
}

const styles = StyleSheet.create({
  imageBox: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  }
})
