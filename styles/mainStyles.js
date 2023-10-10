import { StyleSheet } from 'react-native';
import { colors, fontWeight, fontFamily, textSizes, shadow } from '../constants/theme'

const mainStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.lightGray,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
    },    
    headerText: {
      fontFamily: fontFamily.primaryHeader,
      fontSize: textSizes.xLarge,
      color: colors.black
    },
    secondaryHeaderText: {
      fontFamily: fontFamily.secondaryHeader,
      fontSize: textSizes.large,
      color: colors.black
    },
    bodyText: {
      fontFamily: fontFamily.body,
      fontSize: textSizes.medium,
      color: colors.black
    }
});

export default mainStyles;

