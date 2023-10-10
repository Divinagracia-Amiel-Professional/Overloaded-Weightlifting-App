import { Text, View } from 'react-native';
import mainStyles from './styles/mainStyles';
import Home from './pages/home';

export default function App() {
  return (
  <View style={mainStyles.container}>
     <Home />
  </View> 
  );
}
