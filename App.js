import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Pads from './screens/tabIcons/Pads';
import Then from './screens/Then';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {View, Text} from 'react-native';

const Tab = createBottomTabNavigator();
const StackThen = createStackNavigator();
const StackNow = createStackNavigator();

Ionicons.loadFont();
MaterialCommunityIcons.loadFont();

const ScreenStackThen = () => {
  return (
    <StackThen.Navigator>
      <StackThen.Screen name="Then" component={Then} />
      <StackThen.Screen name="Details" component={Pads} />
    </StackThen.Navigator>
  );
};

const ScreenStackNow = () => {
  return (
    <StackNow.Navigator>
      <StackNow.Screen name="Home" component={Pads} />
      <StackNow.Screen name="Details" component={Pads} />
    </StackNow.Navigator>
  );
};

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Then') {
              return <MaterialCommunityIcons name="calendar-clock" size={size} color={color} />;
            } else if (route.name === 'Now') {
              return (
                <Ionicons
                  name={focused ? 'grid' : 'grid-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}>
        <Tab.Screen name="Then" component={ScreenStackThen} />
        <Tab.Screen name="Now" component={ScreenStackNow} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
