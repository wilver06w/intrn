import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import NavigationDrawer from './src/navigation/NavigationDrawer';
export default function App() {

 return (
 <NavigationContainer>
  <NavigationDrawer/>
 </NavigationContainer>
 );
 //<NavigationTab/>
  //<NavigationStack/>

  /* return (
    <View style={styles.container}>
      <Saludar firstname="Wendy" lastname= "Mojica"/>
      <Saludar firstname="Wilver" lastname= "Rojas"/>
      <Saludar firstname="Jorge" lastname= "Chiquillo"/>
    </View>
  );
  */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
