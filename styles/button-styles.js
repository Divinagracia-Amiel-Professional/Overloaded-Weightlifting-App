import { StyleSheet } from 'react-native'
import { colors, fontWeight, fontFamily, textSizes, shadow } from '../constants/theme'

const buttonStyles = StyleSheet.create({
      buttonText: {
        fontFamily: fontFamily.secondaryHeader,
        fontSize: textSizes.medium,
        color: colors.lightGray
      },
      button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      bottomAbsoluteContainer: {
        width: '100%',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,

        position: 'absolute',
        bottom: 0,

        borderTopWidth: 0.5,

        // border-top: 0.5px solid #DAD7CD;
      },
      bottomAbsoluteButton: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,

        borderRadius: 50,
      },
      bottomAbsoluteButtonText: {
        textAlign: 'center',
        fontFamily: fontFamily.primaryHeader,
        fontSize: textSizes.large,
      },
      doWorkout: {
        skip: {
          flexDirection: 'row',
          paddingVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },
        skipText: {
          fontFamily: fontFamily.secondaryHeader,
          fontSize: textSizes.medium
        },
        done: {
          flexDirection: 'row',
          paddingHorizontal: 40,
          paddingVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
          
          borderRadius: 15,
        },
        doneText: {
          fontFamily: fontFamily.secondaryHeader,
          fontSize: textSizes.xLarge,

          // lineHeight: 'normal'
        },
      },
      restScreen: {
        skipContainer:{
          flexDirection: 'row',
          paddingVertical: 5,
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,

          borderRadius: 30,
        },
        skipText: {
          fontFamily: fontFamily.secondaryHeader,
          fontSize: textSizes.xxLarge
        }
      },
      manageWorkoutOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingVertical: 10,
      },
      manageWorkoutButtonOptions: {
        paddingHorizontal: 10,
        minHeight: 35,
        justifyContent: 'center'
      },
      fromScratch: {
        addSectionButton: {
          container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'stretch',
            gap: 10,

            borderWidth: 1,
            borderRadius: 10,
          },
          text: {

          }
        }
      }
})

export default buttonStyles;