import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
// import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header'
import React from 'react';

const screens = {
  Home: {
    screen: Home, //<--this is from the home screen
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='SCV RV'/>,
      }
    }
  },
//     ReviewDetails: {
//       screen: ReviewDetails,
//       navigationOptions: {
//         title: 'Review Details',
//         headerTintColor:'red',
//         headerStyle: {backgroundColor: '#A7CFCC'}
//     }
//   },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default HomeStack; //<--this puts the HomeStack data in one conponents