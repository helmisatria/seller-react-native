import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection } from './common'
import AddSub from './AddSub'

class MenuDetail extends Component {

  render() {
    const { nama } = this.props.menu
    const { textStyle, containerStyle } = styles
    return (
      <Card>
        <CardSection>
          <View style={containerStyle}>
            <View style={{ flex: 1 }}>
              <Text style={textStyle}> {nama} </Text>
            </View>
            <View style={{ flex: 1 }}>
              <AddSub menu={this.props.menu} />
            </View>
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
