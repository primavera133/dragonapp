import React from 'react'
import { Dimensions, ScrollView, StyleSheet } from 'react-native'
import ResponsiveImage from 'react-native-responsive-image'

export default ({ image }) => {
  let { width } = Dimensions.get('window')

  const initHeight = width / image.ratio
  const initWidth = width

  return (
    <ScrollView
      minimumZoomScale={1}
      maximumZoomScale={3}
      contentContainerStyle={styles.imageBox}
    >
      <ResponsiveImage
        source={{ uri: image.uri }}
        initWidth={initWidth}
        initHeight={initHeight}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageBox: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },

  image: {
    flex: 1,
    backgroundColor: '#fff',
    height: undefined,
    width: undefined
  }
})
