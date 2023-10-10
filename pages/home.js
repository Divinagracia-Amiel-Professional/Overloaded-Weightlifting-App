import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import mainStyles from '../styles/mainStyles';

export default function Home() {
  return (
    <View>
      <Text style={mainStyles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}