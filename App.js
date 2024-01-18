import React, { useEffect, useState } from 'react'
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

import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import * as SecureStore from 'expo-secure-store'
import * as AuthSession from 'expo-auth-session'
import { auth } from './firebase';
import { 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithCredential 
} from 'firebase/auth';

const useLightTheme = {
  ...MD3LightTheme,
  ...lightTheme
}

const useDarkTheme = {
  ...MD3DarkTheme,
  ...darkTheme
}

//web expo 702603637326-qmp955k988rur07fi2oeafi7f7ivml9i.apps.googleusercontent.com
//android 702603637326-h07q11ma9qb1covm4mpgsck5urspfgrn.apps.googleusercontent.com
//expo client 702603637326-fm9hjnkgs1fiv9sckqt1jpms36i0ffkd.apps.googleusercontent.com

WebBrowser.maybeCompleteAuthSession()

export default function App() {
  const [ userInfo, setUserInfo ] = useState(null)
  console.log(JSON.stringify(userInfo))
  // const redirectUri = AuthSession.getRedirectUrl()

  const [ request, response, promptAsync ] = Google.useAuthRequest({
    androidClientId: '702603637326-h07q11ma9qb1covm4mpgsck5urspfgrn.apps.googleusercontent.com',
    expoClientId: '702603637326-fm9hjnkgs1fiv9sckqt1jpms36i0ffkd.apps.googleusercontent.com',
    webClientId: '702603637326-qmp955k988rur07fi2oeafi7f7ivml9i.apps.googleusercontent.com'
  })

  useEffect(() => {
    if(response?.type === 'success'){
      const { id_token } = response.params
      const credentials = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credentials)
    }
  }, [response])

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if(user){
        console.log(JSON.stringify(user, null, 2))
        setUserInfo(user)
        await SecureStore.setItemAsync('@user', JSON.stringify(user))
      } else {
        console.log('User not authenticated')
      }
    })
  }, [])



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
                <DoWorkoutStack promptAsync={promptAsync} />
              </NavigationContainer>
          </PersistGate>
        </SheetProvider>
      </PaperProvider>
    </Provider>
  );
}
