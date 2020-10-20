import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, marginTop: 30}}>An app that Jerry made to practice 
      React native. This is just a clickable prototype. Only front is done.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});