
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import SettingScreen from '../screen/SettingScreen';

const Stack = createHStackNavigator();

export default function NavigationStack() {

  return (
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Setting" component={SettingScreen} />
  </Stack.Navigator>
  )
}