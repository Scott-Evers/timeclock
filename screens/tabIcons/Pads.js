import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import * as Icons from 'react-native-vector-icons';

const Pads = ({navigation, route}) => {
  console.log('Pads loading');

  return (
    <View style={styles.padView}>
      <Text style={styles.text}>HELLO WORLD!!</Text>
      <Button title="press me" />
    </View>
  );
};

const styles = StyleSheet.create({
  padView: {
    flex: 1,
    height: 200,
    backgroundColor: '#222',
  },
  text: {
    color: '#888',
  },
});

export default Pads;
