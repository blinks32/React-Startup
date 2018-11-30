'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const { StyleSheet, Text, View, Button, Image, ImageBackground, StatusBar, TouchableHighlight, TouchableOpacity} = ReactNative;
import { createStackNavigator } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";

const styles = require('../styles/Start')
const img = require('../imgs/logo-bg.png')

class Start extends Component {
  static navigationOptions = { header: null };
  render() {
    
  return (
     
    <View style={styles.container}>
     <ImageBackground
    style={styles.image}
    source={img}>
      <Text style={styles.welcome}>
        Taxi App
      </Text>
      <View style={styles.bottom}>
      <Grid>
      <Col style={{ width: 180 }}>
      <TouchableOpacity style={styles.button}
       onPress={() => this.props.navigation.navigate('Login')}>
       <Text style={styles.loginText}>Login</Text>
       </TouchableOpacity>
      </Col>
      <Col style={{ width: 180 }}>
       <TouchableOpacity style={styles.button}
       onPress={() => this.props.navigation.navigate('Signup')}
        >
        <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </Col>
      </Grid>
      </View>
      </ImageBackground>
    </View>
   
  );
}
}

module.exports = Start;
