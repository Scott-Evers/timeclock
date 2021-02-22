import React, {useState, Component} from 'react';
import PropTypes from 'prop-types'
import * as Handlers from '../modules/CardHandlers';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';


export default class Card extends Component {
  static propTypes = {
    containerStyle: PropTypes.style,
    style: PropTypes.style,
    autoFocus: PropTypes.bool,
    editbale: PropTypes.bool,
    textColor: PropTypes.string,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
  };
  height: number = 0;
  width: number = 0;
  info: any;
  props: any;
  styles;
  setIsActive;
  isActive;

  constructor(props) {
    super(props);
    this.info = props.info;
    this.props = props;
    this.styles = StyleSheet.create({
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

    var [isActive, setIsActive] = useState(false);
    //this.setIsActive = setIsActive;
    //this.isActive = isActive;
  }

  
  render = () => {
    let height = this.props.screenHeight === undefined ? 600: this.props.screenHeight; //useWindowDimensions().height;
    let width = this.props.screenWidth === undefined ? 600: this.props.screenWidth; //useWindowDimensions().width;
    
    var dim: number = height > width ? (dim = width / 4) : (dim = height / 4 - 10);



    return (
      <Pressable
        onPress={() => Handlers.press(this)}
        onLongPress={() => Handlers.longPress(this)}>
        <View style={this.padStyles}>
          <Text>abc</Text>
        </View>
      </Pressable>
    );
  }
}