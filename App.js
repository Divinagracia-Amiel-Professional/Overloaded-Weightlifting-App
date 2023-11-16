import React from 'react'
import { Text } from 'react-native';
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { NavBar } from './components/component-index';
import DoWorkoutStack from './pages/doWorkout/doWork-main-stack-navigator';
import { 
  MD3LightTheme,
  MD3DarkTheme,
  PaperProvider } from 'react-native-paper';
import { darkTheme, lightTheme } from './constants/theme';
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { store } from './redux/store';

const useLightTheme = {
  ...MD3LightTheme,
  ...lightTheme
}

const useDarkTheme = {
  ...MD3DarkTheme,
  ...darkTheme
}

export default function App() {
  let [ fontsLoaded ] = useFonts({
    'Staatliches-Regular': require('./assets/fonts/Staatliches-Regular.ttf'),
    'Anton-Regular': require('./assets/fonts/Anton-Regular.ttf'),

    'Signika-Light': require('./assets/fonts/Signika-Light.ttf'),
    'Signika-Medium': require('./assets/fonts/Signika-Medium.ttf'),
    'Signika-Regular': require('./assets/fonts/Signika-Regular.ttf'),
    'Signika-SemiBold': require('./assets/fonts/Signika-SemiBold.ttf'),
    'Signika-Bold': require('./assets/fonts/Signika-Bold.ttf')
  })

  if(!fontsLoaded){
      return <Text>Loading...</Text>
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={useLightTheme}>
        <NavigationContainer theme={useLightTheme}>
          <DoWorkoutStack />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
