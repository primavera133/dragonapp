import React from 'react'
import { Icon } from 'expo'

import Colors from '../constants/Colors'

export default class LinkIcon extends React.Component {
  render () {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={20}
        style={{ marginTop: 9, marginBottom: -3 }}
        color={this.props.focused ? Colors.linkIconSelected : Colors.linkIconDefault}
      />
    )
  }
}
