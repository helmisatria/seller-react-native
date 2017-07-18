import { Navigation } from 'react-native-navigation'
// import Icon from 'react-native-vector-icons/EvilIcons'
// import { iconsMap, iconsLoaded } from './helpers/appIcons';
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import ScreenPesan from './screens/ScreenPesan'

Navigation.registerComponent('Screen1', () => Screen1)
Navigation.registerComponent('Screen2', () => Screen2)
Navigation.registerComponent('ScreenPesan', () => ScreenPesan)


const icon = require('./components/icons/coin.png')

export default () => {
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
        screen: 'Screen1',
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
    },
    passProps: {}
  })
}
