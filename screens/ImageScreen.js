import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import selectors from '../duck/selectors'
import Photo from '../components/Photo'

class ImageScreen extends React.Component {
  constructor (props) {
    super(props)

    this.navigationOptions = {
      title: 'Image'
    }
  }

  render () {
    const { image } = this.props

    return (
      <View style={styles.container}>
        <Photo
          image={image}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})

const mapStateToProps = state => {
  const image = selectors.getSelectedImage(state)

  return { image }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ImageScreen)
