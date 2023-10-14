import { Text } from 'react-native';
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import NavBar from './components/component-index';

export default function App() {
  let [ fontsLoaded ] = useFonts({
    'Staatliches-Regular': require('./assets/fonts/Staatliches-Regular.ttf'),
    'Anton-Regular': require('./assets/fonts/Anton-Regular.ttf'),
    'Signika-Regular': require('./assets/fonts/Signika-Regular.ttf')
  })

  if(!fontsLoaded){
      return <Text>Loading...</Text>
  }

  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  );
}
