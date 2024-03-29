import React from 'react'
import { Text } from 'react-native';
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { NavBar } from './components/component-index';
import DoWorkoutStack from './pages/main-stack-navigator';
import { 
  MD3LightTheme,
  MD3DarkTheme,
  PaperProvider } from 'react-native-paper';
import { darkTheme, lightTheme } from './constants/theme';
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { SheetProvider } from 'react-native-actions-sheet'
import './components/general/actionSheets'
import { SyncToFirebase } from './components/component-index';

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
    'Signika-Bold': require('./assets/fonts/Signika-Bold.ttf'),

    'Stem-Bold': require('./assets/fonts/Stem-Bold.ttf'),
    'Stem-Regular' : require('./assets/fonts/Stem-Regular.ttf'),
    'Stem-Medium' : require('./assets/fonts/Stem-Medium.ttf'),
    'Stem-SemiLight' : require('./assets/fonts/Stem-SemiLight.ttf'),

    'Proxima-Nova-Bold' : require('./assets/fonts/Proxima-Nova-Bold.otf'),
    'Proxima-Nova-Regular' : require('./assets/fonts/ProximaNova-Regular.otf'),
  })

  if(!fontsLoaded){
      return <Text>Loading...</Text>
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={useLightTheme}>
        <SheetProvider>
          <PersistGate loading={null} persistor={persistor}>
              <SyncToFirebase />
              <NavigationContainer theme={useLightTheme}>
                <DoWorkoutStack />
              </NavigationContainer>
          </PersistGate>
        </SheetProvider>
      </PaperProvider>
    </Provider>
  );
}
