import { StyleSheet } from 'react-native'
import { colors, fontWeight, fontFamily, textSizes, shadow } from '../constants/theme'
import { useTheme } from 'react-native-paper'

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
      paddingVertical: 50,
      gap: 10,
    },
    preWorkoutContainer: {
      flex: 1,
      backgroundColor: colors.lightGray,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 0,
      paddingVertical: 0,
      gap: 10,
    },
    preWorkoutHeaderContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
      alignSelf: 'stretch',
    },
    doWorkoutPage: {
      header: {

      },
      timer: {
        
      }
    },
    tabBarLabelContainer: {
      flex: 1,
      alignItems: 'center'
    },
    rowLayout: {
      flex: 1,
      flexDirection: 'row',
    }
});

export default mainStyles;

