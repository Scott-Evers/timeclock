import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from 'react-native';

const Card = ({info, handlers}) => {
  let height = useWindowDimensions().height;
  let width = useWindowDimensions().width;

  let dim = 0;
  height > width ? (dim = width / 4) : (dim = height / 4 - 10);

  let styles = StyleSheet.create({
    border: {
      padding: 15,
      backgroundColor: '#ccc',
      alignContent: 'center',
    },
    pad: {
      fontSize: 11,
      borderWidth: 20,
      borderColor: '#fff',
      backgroundColor: '#eee',
      justifyContent: 'center',
      alignItems: 'center',
      height: dim,
      width: dim,
    },
    text: {
      fontSize: 30,
    },
  });

  return (
    <Pressable
      onPress={() => handlers.press(info.id, this)}
      onLongPress={() => handlers.longPress(info.id, this)}>
      <View style={styles.pad}>
        <Text style={styles.text}>abc</Text>
      </View>
    </Pressable>
  );
};

export default Card;
