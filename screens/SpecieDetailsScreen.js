import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Creators } from '../duck/actions'
import selectors from '../duck/selectors'
import Markdown from 'react-native-markdown-renderer'
import Photo from '../components/Photo'

class SpecieDetailsScreen extends React.PureComponent {
  constructor (props) {
    super(props)

    this.navigationOptions = {
      title: 'Details'
    }

    this._handleSelectImage = this._handleSelectImage.bind(this)
  }

  _handleSelectImage (image) {
    const { navigation } = this.props
    this.props.selectImage(image)
    navigation.navigate('Image')
  }

  render () {
    const { specie } = this.props
    const images = specie.images ? specie.images.images : []

    return (
      <ScrollView style={styles.container}>
        <View style={styles.localName}>
          <Text style={styles.localNameText}>{specie.local_name}</Text>
        </View>
        <View style={styles.sciName}>
          <Text>{specie.scientific_name}</Text>
        </View>
        <View style={styles.descriptionBlock}>
          <Text style={styles.descriptionHeader}>Description</Text>
        </View>
        <View style={styles.descriptionBlock}>
          <Markdown>{specie.description}</Markdown>
        </View>
        {images.map((image, idx) =>
          <Photo
            key={`photo_${idx}`}
            onSelect={this._handleSelectImage}
            preview
            image={image}
          />
        )}
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

  localName: {
    marginLeft: 15,
    marginTop: 9
  },

  localNameText: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  sciName: {
    marginLeft: 15,
    marginTop: 9,
    fontSize: 12
  },

  descriptionBlock: {
    marginLeft: 15,
    marginTop: 9
  },

  descriptionHeader: {
    fontWeight: 'bold'
  }

})

const mapStateToProps = state => {
  const specie = selectors.getSelectedSpecie(state)

  return { specie }
}

const mapDispatchToProps = {
  selectImage: (img) => Creators.setSelectedImage(img)
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecieDetailsScreen)
