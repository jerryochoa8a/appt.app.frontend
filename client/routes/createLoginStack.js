import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import createLogin from '../screens/createLogin';
// import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header'
import React from 'react';

const screens = {
  createLogin: {
    screen: createLogin, //<--this is from the home screen
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Create an Account'/>,
      }
    }
  },
};

const createLoginStack = createStackNavigator(screens);

export default createLoginStack; 