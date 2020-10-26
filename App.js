import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/searchScreen';
import DetailScreen from './src/screens/detailScreen';

const navigator = createStackNavigator(
  {
    Home: SearchScreen,
    Details: DetailScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Online Store'
    }
  }
  );

  export default createAppContainer(navigator)