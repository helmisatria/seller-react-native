import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import { CardSection, Card } from '../components/common';
import { Button } from '../components/common'
import MenuDetail from '../components/MenuDetail'

class Screen extends Component {
  state = {
    menus: []
  }

  componentWillMount() {
    this.setState({ menus: [
      {
        nama: 'Nasi Goreng Ayam',
        count: 0
      }, {
        nama: 'Nasi Goreng Bebek',
        count: 0
      }, {
        nama: 'Mie Goreng Ayam',
        count: 0
      }, {
        nama: 'Mie Goreng Bebek',
        count: 0
      }, {
        nama: 'Mie Rebus Ayam',
        count: 0
      }
    ]
    })
  }

  renderMenus() {
    return this.state.menus.map(menu =>
      <MenuDetail key={menu.nama} menu={menu} state={this.state}/>
    )
  }

  pesan() {
    console.log('PESAAN!');
  }
  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderMenus()}
        <Button
          onPress={this.pesan.bind(this)}
        >
          Pesan
        </Button>
      </ScrollView>
    );
  }
}

export default Screen;
