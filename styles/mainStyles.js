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
    doWorkoutScreen: {
      bodyContainer: {
        flex: 1,
        backgroundColor: colors.lightGray,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 0,
        paddingVertical: 0,
        gap: 10,
      },
      headerSection: {
        container: {
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          alignSelf: 'stretch',
        },
        headerTextContainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
        },
        repContainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }
      },
      setSection: {
        container: {
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
          alignSelf: 'stretch',

          borderRadius: 10,
          borderWidth: 1,

          ...shadow.medium
        }
      },
      recordSection: {
        container: {
          paddingHorizontal: 15,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          rowGap: 10,
          columnGap: 20,
          alignSelf: 'stretch',
          flexWrap: 'wrap',
        },
        recordContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
        }
      },
      buttonSection: {
        container: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          alignSelf: 'stretch',
        }
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

const doWorkoutPage = StyleSheet.create({
  
})

export default mainStyles;

