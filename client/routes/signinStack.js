import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
// import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header'
import React from 'react';

const screens = {
  Login: {
    screen: Login, //<--this is from the home screen
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Sign In'/>,
      }
    }
  },
};

const signinStack = createStackNavigator(screens);

export default signinStack; 