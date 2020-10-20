// npm install react-native-modal-datetime-picker
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import React from 'react';
import Header from './shared/header';
import Home from './screens/home';
import Navigator from './routes/drawer.js';


export default function App() {
  return (
    <View style={styles.body}>
      {/* <Header /> */}

      <Navigator/>

    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#E6EBF5',
    height: '100%'
  },
});
