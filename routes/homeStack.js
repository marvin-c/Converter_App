import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Curr from '../screens/currency_converter';
import Temp from '../screens/temp_converter';
import About from '../screens/about';

const screens = {
 
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    },
    Curr_Converter: {
        screen: Curr,
        navigationOptions: {
            title: 'Currency Converter'
        }
    },
    Temp_Converter: {
        screen: Temp,
        navigationOptions: {
            title: 'Temperature Converter'
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            title: 'About'
        }
    },   
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);