import { Text, View } from 'react-native';
import mainStyles from './styles/mainStyles';
import Home from './pages/home';
import { useFonts } from 'expo-font'

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
  <View style={mainStyles.mainContainer}>
     <Home />
  </View> 
  );
}
