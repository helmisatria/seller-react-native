import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection } from './common'
import AddSub from './AddSub'

class MenuDetail extends Component {
  constructor(props) {
    super(props)
    const { screen, flexStyle, data } = this.props

    this.state = {
      screen,
      flexStyle,
      data
    }
  }

  renderAddSub() {
    switch (this.props.screen) {
      case 'pesan':
        return (
          <View style={{ flex: 1 }}>
            <AddSub menu={this.props.menu} />
          </View>
        )
      default:
        return (
          <View style={{ flex: 1 }}>
            <Text>{this.props.menu.count}</Text>
          </View>
        )
    }
  }
  render() {
    const flexStyle = this.props.flexStyle
    const { textStyle, containerStyle } = styles
    const { nama } = this.props.menu
    return (
      <Card>
        <CardSection>
          <View style={containerStyle}>
            <View style={{ flex: flexStyle }}>
              <Text style={textStyle}> {nama} </Text>
            </View>
            {this.renderAddSub()}
          </View>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  textStyle: {
    fontSize: 17,
    // borderWidth: 1
  },
  containerText: {
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    // borderWidth: 1
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default MenuDetail
