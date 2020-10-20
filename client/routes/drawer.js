import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import myApptStack from './myApptStack';
import signinStack from './signinStack';
import createLoginStack from './createLoginStack'


const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    MyAppointments: {
        screen: myApptStack,
    },
    SignIn: {
        screen: signinStack,
    },
    CreateLogin: {
        screen: createLoginStack,
    },
    About: {
        screen: AboutStack,
    },
}, 
{
    drawerBackgroundColor: '#1AAD8F',
    color: 'white',
    contentOptions: {
        labelStyle: {
          color: 'white',
        },
      }
},

);


export default createAppContainer(RootDrawerNavigator);