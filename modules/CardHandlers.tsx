import Card from '../components/Card'

exports.press = (control: Card) => {
    console.log('press', control.info);
    control.setIsActive(!control.isActive);
    console.log(control.isActive)
  },

exports.longPress = (control: Card) => {
    console.log('longPress', control.info);
  }
export default () => {
  return;
};