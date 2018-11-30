import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View,
  Platform
} from 'react-native';
const constant = require('./Constant');

var styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    bottom: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      position: "absolute",
     // paddingTop: ( Platform.OS === 'ios' ) ? 10 : 0,
      bottom: 30,
      //left: 40
    },
    loginText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: 'white',
      top:60,
      position: 'absolute',
      left: 140,
    },
    instructions: {
      textAlign: 'center',
      color: 'white',
      marginBottom: 5,
    },
    button: {
      marginRight:40,
      marginLeft:40,
      marginTop:10,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor: constant.primary,
      borderRadius: constant.$borderRadius,
      borderWidth: 1,
      borderColor: constant.secondary,
      width: 130,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        width: 400,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
  });

  module.exports = styles