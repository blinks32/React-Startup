import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
//import {styles} from '../styles/Home'
const styles = require('../styles/Home')


const MyHome = ()  => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native Navigation Sample!
      </Text>
    </View>
  );


}


const Home = DrawerNavigator({
  First: { screen: MyHome }
});


export default Home
