import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
const styles = require('../styles/Phone')


const Phone = ()  => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        THIS IS THE SECOND SCREEN!
      </Text>
    </View>
  );
}

// Phone.navigationOptions = {
//   drawer: {
//       icon: () => (
//         <Image
//         source={require('../imgs/home.png')}
//           style={[styles.tabIcon, {tintColor: 'black'}]}
//         />
//   )}
// };

export default Phone
