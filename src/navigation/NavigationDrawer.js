
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {} from "@react-navigation/drawer"
import HomeScreen from '../screen/HomeScreen';
import SettingScreen from '../screen/SettingScreen';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
return
(
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Settings" component={SettingScreen} />
  </Drawer.Navigator>
);

}