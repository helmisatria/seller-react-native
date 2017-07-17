import { Navigation } from 'react-native-navigation'
import { Component } from 'react'
// import Icon from 'react-native-vector-icons/EvilIcons'
// import { iconsMap, iconsLoaded } from './helpers/appIcons';
import firebase from 'firebase'
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import ScreenPesan from './screens/ScreenPesan'

Navigation.registerComponent('Screen1', () => Screen1)
Navigation.registerComponent('Screen2', () => Screen2)
Navigation.registerComponent('ScreenPesan', () => ScreenPesan)

let icon

export default class App extends Component {
  constructor() {
    super()
    this.populateIcons().then(() => {
      this.startApp();
    }).catch((error) => {
      console.error(error);
    });
    const config = {
      apiKey: 'AIzaSyA3Xgablep_EERD8c1p37qD8Ijpqk4p7ZE',
      authDomain: 'bakmijawa232.firebaseapp.com',
      databaseURL: 'https://bakmijawa232.firebaseio.com',
      projectId: 'bakmijawa232',
      storageBucket: '',
      messagingSenderId: '360044495248'
    };
    firebase.initializeApp(config);
  }

  populateIcons = () => {
    return new Promise((resolve, reject) => {
      icon = require('./components/icons/coin.png')
      resolve(true).done()
    });
  };
  startApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Pesan',
          screen: 'ScreenPesan', // this is a registered name for a screen
          icon: icon,
          selectedIcon: icon, // iOS only
          title: 'Bakmi Jawa 232',
          navigatorStyle: {
            navBarTextColor: '#FFFFFF',
            navBarTextFontSize: 21,
            navBarBackgroundColor: '#1E88E5',
          },
        },
        {
          label: 'Hasil',
          screen: 'Screen2',
          title: 'Bakmi Jawa 232',
          icon: icon,
          selectedIcon: icon, // iOS only
          navigatorStyle: {
            navBarTextColor: '#FFFFFF',
            navBarTextFontSize: 21,
            navBarBackgroundColor: '#1E88E5',
          },
        }
      ],
      appStyle: {
        tabBarButtonColor: '#000',
        tabBarSelectedButtonColor: '#0D47A1',
        tabBarTranslucent: false,
        tabBarBackgroundColor: '#E3F2FD',
        forceTitlesDisplay: false,
      }
    });
  }
}
