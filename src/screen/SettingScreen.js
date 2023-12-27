import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SettingScreen(props) {
  const { navigation } = props;
  const goToPage = (
    pageName
  ) => {
    navigation.navigate(pageName);
  }
  return (
    <View>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Button onPress={() => goToPage("Home")} title='Ir a Home'></Button>
    </View>
  )
}