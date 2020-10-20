import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import myAppt from '../screens/myAppt';
// import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header'
import React from 'react';

const screens = {
  myAppt: {
    screen: myAppt, //<--this is from the home screen
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='My Appointments'/>,
      }
    }
  },
};

const myApptStack = createStackNavigator(screens);

export default myApptStack; 