import React from "react";
import {} from "@react-navigation/bottom-tabs"
import HomeScreen from "../screen/HomeScreen";
import SettingScreen from "../screen/SettingScreen";
import { Settings } from "react-native";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
return (
<Tab.navigator>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="Setting" component={SettingScreen} />
</Tab.navigator>)
}