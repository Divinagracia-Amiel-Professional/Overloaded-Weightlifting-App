import { StyleSheet } from 'react-native'
import { colors, fontWeight, fontFamily, textSizes, shadow } from '../constants/theme'

const mainStyles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    }, 
    bodyContainer: {
      flex: 1,
      backgroundColor: colors.lightGray,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 15,
      gap: 10,
    }
});

export default mainStyles;

