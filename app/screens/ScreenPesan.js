import React, { Component } from 'react';
import firebase from 'firebase'
import { ScrollView } from 'react-native';
// import { CardSection, Card } from '../components/common';
import { Button } from '../components/common'
import MenuDetail from '../components/MenuDetail'

const config = {
  apiKey: 'AIzaSyA3Xgablep_EERD8c1p37qD8Ijpqk4p7ZE',
  authDomain: 'bakmijawa232.firebaseapp.com',
  databaseURL: 'https://bakmijawa232.firebaseio.com',
  projectId: 'bakmijawa232',
  storageBucket: '',
  messagingSenderId: '360044495248'
};

const refDB = firebase.initializeApp(config);

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

  pesan() {
    const Pesanan = []
    this.state.menus.map((pesan) =>
      Pesanan.push(pesan)
    )
    console.log('pesanan', Pesanan);
    refDB.database().ref().push(Pesanan)
    
    // this.state.menus.forEach((menu) => {
    //   this.props.refDB.push(menu)
    // })
  }

  renderMenus() {
    return this.state.menus.map(menu =>
      <MenuDetail key={menu.nama} menu={menu} state={this.state} />
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
    );
  }
}

export default Screen;
