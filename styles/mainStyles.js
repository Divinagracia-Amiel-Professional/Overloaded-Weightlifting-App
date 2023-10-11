import { StyleSheet } from 'react-native';
import { colors, fontWeight, fontFamily, textSizes, shadow } from '../constants/theme'

const mainStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.lightGray,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 15,
      gap: 10,
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
    },
    buttonText: {
      fontFamily: fontFamily.secondaryHeader,
      fontSize: textSizes.large,
      color: colors.lightGray
    },
    button: {
      paddingVertical: 5,
      paddingHorizontal: 20,
      backgroundColor: colors.black,
      borderRadius: 5
    }
});

export default mainStyles;

