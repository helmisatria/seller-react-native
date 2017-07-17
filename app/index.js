import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/EvilIcons'
// import { iconsMap, iconsLoaded } from './helpers/appIcons';

import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import ScreenPesan from './screens/ScreenPesan'

export default () => {
  // const icon1 = Icon['fa-dollar']
  Navigation.registerComponent('Screen1', () => Screen1)
  Navigation.registerComponent('Screen2', () => Screen2)
  Navigation.registerComponent('ScreenPesan', () => ScreenPesan)

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        screen: 'ScreenPesan', // this is a registered name for a screen
        icon: require('./components/icons/coin.png'),
        selectedIcon: require('./components/icons/coin.png'), // iOS only
        navigatorStyle: {
          navBarTextColor: '#FFFFFF',
          navBarTextFontSize: 21,
          navBarBackgroundColor: '#3B6DFF',
        },
        title: 'Bakmi Jawa 232'
      },
      {
        label: 'Two',
        screen: 'Screen2',
        icon: require('./components/icons/plus.png'),
        selectedIcon: require('./components/icons/plus.png'), // iOS only
        title: 'Screen Two'
      }
    ]
  });
}
