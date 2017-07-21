import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import moment from 'moment'
// import { CardSection, Card } from '../components/common';
import { Button } from '../components/common'
import MenuDetail from '../components/MenuDetail'
import refDB from '../firebaseApp'
import menus from '../menus'

class Screen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menus: []
    }
    console.ignoredYellowBox = [
         'Setting a timer'
     ];
  }

  componentWillMount() {
    this.setState({ menus })
  }

  pesan() {
    const Upload = {
      time: moment().format('MMMM Do YYYY, h:mm:ss a'),
      pesanan: [],
    }
    this.state.menus.map((pesan) =>
      Upload.pesanan.push(pesan)
    )
    console.log('pesanan', Upload);
    refDB.ref().push(Upload)
  }

  renderMenus() {
    console.log('this.state.menus', this.state.menus);
    return this.state.menus.map(menu =>
      <MenuDetail
        key={menu.nama}
        menu={menu}
        screen={'pesan'}
        flexStyle={1}
        // data={null}
      />
    )
  }

  render() {
    return (
      <ScrollView>
        {this.renderMenus()}
        <Button
          onPress={this.pesan.bind(this)}
        >
          Pesan
        </Button>
      </ScrollView>
    )
  }
}

export default Screen;
