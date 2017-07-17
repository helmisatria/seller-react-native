import React, { Component } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'

export default class AddSub extends Component {
  buttonMinusPress() {
    if (this.props.menu.count > 0) {
      this.setState({ count: this.props.menu.count-- })
    }
  }

  buttonPlusPress() {
    this.setState({ count: this.props.menu.count++ })
  }

  render() {
    const { count } = this.props.menu
    const { textStyle, containerText, containerStyle } = styles

    return (
      <View style={containerStyle}>
        <View>
          <TouchableOpacity
            onPress={this.buttonMinusPress.bind(this)}
          >
            <Image
              source={require('./icons/minus.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>
        <View style={containerText}>
          <Text style={textStyle}>
            {count}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={this.buttonPlusPress.bind(this)}
          >
          <Image
            source={require('./icons/plus.png')}
            style={{ width: 40, height: 40 }}
          />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = {
  textStyle: {
    fontSize: 19
  },
  containerText: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // borderWidth: 1
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}
