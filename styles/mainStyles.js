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
      position: 'relative'
    },
    scrollView: {
      flex: 1,
      backgroundColor: colors.lightGray,
      padding: 15,
    },
    scrollViewContainerStyle: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 30,
      paddingVertical: 50,
      paddingBottom: 75,
    },
    PremadeScrollView: {
      flex: 1,
      backgroundColor: colors.lightGray,
    },
    PremadeScrollViewContainerStyle: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 30,
    },
    repContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
    },
    preWorkoutContainer: {
      flex: 1,
      backgroundColor: colors.lightGray,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 0,
      paddingVertical: 0,
      gap: 10,
      position: 'relative'
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
        paddingBottom: 25,
        gap: 20,
      },
      headerSection: {
        container: {
          justifyContent: 'center',
          alignItems: 'center',
          gap: 0,
          alignSelf: 'stretch',
        },
        headerTextContainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
        },
      },
      setSection: {
        container: {
          marginHorizontal: 15,
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
          flexDirection: 'row',
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
        },
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
    restScreen: {
      screenContainer:{
        flex: 1,
        backgroundColor: colors.lightGray,
        alignItems: 'center',
        // justifyContent: 'flex-end',
        padding: 0,
      },
      bodyContainer: {
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        gap: 30,
      },
      mainSection:{
        container: {
          paddingHorizontal: 10,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 15,
          alignSelf: 'stretch',
        },
        timerContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          gap: -20,
        },
        inputSection: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 15,
          alignSelf: 'stretch',
        },
        inputWithLabelContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
          flexGrow: 1,
          alignSelf: 'stretch',
        },
        inputContainer: {
          height: 40,
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'flex-end',
          alignItems: 'center',
          alignSelf: 'stretch',
          gap: 10,

          borderRadius: 10,
        },
        textInput: {
          width: '100%',
          textAlign: 'right'
        },
        skipContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          marginTop: 10,
        }
      },
      upcoming: {
        container: {
          paddingBottom: 10,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
          alignSelf: 'stretch',
          position: 'relative',

          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
        notchContainer: {
          paddingVertical: 5,
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          zIndex: 1,

          position: 'absolute',
          top: 0,
          left: 0,

          borderBottomRightRadius: 10,
          // borderBottomLeftRadius: 10,

          ...shadow.small
        }
      }
    }, 
    postWorkoutPage: {
      container: {
        flex: 1,
        backgroundColor: colors.lightGray,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        paddingVertical: 50,
        gap: 10,
      },
      messageSection: {
        container: {
          alignItems: 'center',
          alignSelf: 'stretch',
          gap: 20,
        },
        messageContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          gap: 0,
        },
        buttonContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
        }
      }
    },
    fromScratch: {
      headerContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
      },
      cycleSection: {
        container: {
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
        },
        headerContainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          padding: 20,
          gap: 10,
        },
        bodyContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          padding: 20,
          gap: 10,
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

