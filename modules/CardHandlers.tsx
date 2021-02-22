import Card from '../components/Card'

exports.press = (control) => {
    console.log('press', control.info);
    console.log(control.isActive);
    control.setIsActive(!control.isActive);
    console.log(control.isActive);
  },

exports.longPress = (control) => {
    console.log('longPress', control.info);
  }
export default () => {
  return;
};