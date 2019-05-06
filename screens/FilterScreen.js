import React from 'react'
import { connect } from 'react-redux'
import { Picker, StyleSheet, Text, View } from 'react-native'
import { Creators } from '../duck/actions'
import selectors from '../duck/selectors'
import i18n from 'i18n-js'
import operations from '../duck/operations'

class FilterScreen extends React.Component {
  constructor (props) {
    super(props)

    this.navigationOptions = {
      title: 'Filter'
    }

    this._handleOnChange = this._handleOnChange.bind(this)
  }

  _handleOnChange (itemValue, itemIndex) {
    const value = itemValue.replace('_EXTENDED', '')

    const isOff = itemValue === 'OFF'
    if (isOff) {
      this.props.setFilterArea('OFF')
      this.props.setFilterLevel('OFF')
      this.props.normalize()
      return
    }

    this.props.setFilterArea(value)

    if (itemValue.includes('_EXTENDED')) {
      this.props.setFilterLevel('EXTENDED')
    } else {
      this.props.setFilterLevel('MAIN')
    }

    this.props.normalize()
  }

  render () {
    const { abundance, selectedFilterArea, selectedFilterLevel } = this.props
    const { areas } = abundance
    let selectedFilter = selectedFilterArea
    if (selectedFilterLevel === 'EXTENDED') {
      selectedFilter += '_EXTENDED'
    }

    const pickers = []

    areas.forEach((area, idx) => {
      pickers.push(<Picker.Item
        key={`${area}${idx}`}
        label={i18n.t(`settings.changeFilter.areas.${area}`)}
        value={area}
      />)
      pickers.push(<Picker.Item
        key={`${area}${idx}_ext`}
        label={i18n.t(`settings.changeFilter.areas.${area}_EXTENDED`)}
        value={`${area}_EXTENDED`}
      />)
    })

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{i18n.t('settings.changeFilter.h1')}</Text>

        <Text
          style={styles.subHeaderText}>{i18n.t('settings.changeFilter.h2')} {i18n.t(`settings.changeFilter.areas.${selectedFilter}`)}</Text>

        <View style={styles.block}>
          <Picker
            selectedValue={selectedFilter}
            style={styles.picker}
            onValueChange={this._handleOnChange}>
            <Picker.Item
              key={`off`}
              label={i18n.t(`settings.changeFilter.areas.OFF`)}
              value={'OFF'}
            />
            {pickers}
          </Picker>
        </View>
      </View>
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

  subHeaderText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12
  }
})

const mapStateToProps = state => {
  const abundance = selectors.getAbundance(state)
  const selectedFilterArea = selectors.getFilterArea(state)
  const selectedFilterLevel = selectors.getFilterLevel(state)

  return {
    abundance,
    selectedFilterArea,
    selectedFilterLevel
  }
}

const mapDispatchToProps = {
  setFilterArea: (area) => (Creators.setFilterArea(area)),
  setFilterLevel: (area) => (Creators.setFilterLevel(area)),
  normalize: () => operations.reNormalizeData()
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterScreen)
