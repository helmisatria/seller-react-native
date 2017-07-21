import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import refDB from '../firebaseApp'
import MenuDetail from '../components/MenuDetail'
import menus from '../menus'
import { Button } from '../components/common'

class ScreenHasil extends Component {
  state = {
    menus: [],
    dataCount: [0, 0, 0, 0, 0]
  }

  componentWillMount() {
    this.setState({ dataCount: [0, 0, 0, 0, 0] })
    this.setState({ menus })
    this.fetchData()
  }
  componentDidMount() {
    this.setState({ menus })
    this.fetchData()
  }

  fetchData() {
    const data = []
    this.setState({ menus })
    const dataCount = this.state.dataCount
    refDB.ref().once('value').then((a) => {
      a.forEach((pesan) => {
        data.push(pesan.val())
      })
      console.log('data', data);
      data.forEach((i) => {
        dataCount[0] += i.pesanan[0].count
        dataCount[1] += i.pesanan[1].count
        dataCount[2] += i.pesanan[2].count
        dataCount[3] += i.pesanan[3].count
        dataCount[4] += i.pesanan[4].count
      })
    })
    this.setState({ dataCount })
    console.log('dataCount', dataCount);
  }

  renderMenus() {
    let c = 0
    const menudata = this.state.menus
    menudata.forEach((menu) => {
      menu.count = this.state.dataCount[c]
      console.log('menu', menu);
      c++
    })
    console.log('menudata', menudata);

    return menudata.map(menu =>
      <MenuDetail
        key={menu.nama}
        menu={menu}
        flexStyle={2}
      />
    )
  }

  render() {
    return (
      <ScrollView>
        {this.renderMenus()}
        <Button
          onPress={this.fetchData.bind(this)}
        >
          Refresh
        </Button>
      </ScrollView>
    )
  }
}

export default ScreenHasil
