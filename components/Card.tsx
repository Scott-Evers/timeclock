import React, {useState, Component} from 'react';
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';


const styles = StyleSheet.create({
  pad: {
    fontSize: 11,
    borderWidth: 20,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactive: {
    backgroundColor: '#eee',
    color: '#444'
  },
  active: {
    backgroundColor: '#9e9',
    color: '#242'
  },
});



const Card = (props) => {

  var [isActive, setIsActive] = useState(false);

  //this.setIsActive = setIsActive;
  //this.isActive = isActive;

  let height = props.screenHeight === undefined ? 600: props.screenHeight; //useWindowDimensions().height;
  let width = props.screenWidth === undefined ? 600: props.screenWidth; //useWindowDimensions().width;
  
  var dim: number = height > width ? (dim = width / 4) : (dim = height / 4 - 10);

  var o = {
    isActive: isActive,
    setIsActive: setIsActive,
    info: props.info,
  }
  const press = () => {
    console.log(props.handlers)
    props.handlers.press(o)
  }
  const longPress = () => {
    props.handlers.longPress(o)
  }
    
  return (
    <Pressable
      onPress={() => press()}
      onLongPress={() => longPress()}>
      <View style={isActive ? [styles.pad, styles.active] : [styles.pad, styles.inactive]}>
        <Text>{props.info.description}</Text>
      </View>
    </Pressable>
  );
}

  export default Card;