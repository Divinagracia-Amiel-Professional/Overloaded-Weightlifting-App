import { StyleSheet } from 'react-native'
import { colors, fontWeight, fontFamily, textSizes, shadow } from '../constants/theme'

const textStyles = StyleSheet.create({
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
    navBarText: {
        fontFamily: fontFamily.primaryHeader,
        fontSize: textSizes.medium,
        color: colors.black
    },
    cardHeaderText: {
        fontFamily: fontFamily.primaryHeader,
        fontSize: textSizes.xxLarge,
    },
    cardBodyText: {
        fontFamily: fontFamily.bodyHeader,
        fontSize: textSizes.medium,
    },
    cardDetailHeaderText: {
        fontFamily: fontFamily.bodyHeader,
        fontSize: textSizes.medium,
    },
    cardDetailBody: {
        fontFamily: fontFamily.bodyText,
        fontSize: textSizes.medium,
    },
    preWorkoutPage: {
        headerText: {
            fontFamily: fontFamily.primaryHeader,
            fontSize: textSizes.xxLarge,
        },
        bodyText: {
            fontFamily: fontFamily.body,
            fontSize: textSizes.medium
        }
    },
    doWorkoutScreen: {
        headerText: {
            fontFamily: fontFamily.secondaryHeader,
            fontSize: textSizes.xxLarge
        },
        bodyText: {
            fontFamily: fontFamily.body,
            fontSize: textSizes.medium
        },
        bodyHeaderText: {
            fontFamily: fontFamily.bodyHeader,
            fontSize: textSizes.medium
        },
        setText: {
            fontFamily: fontFamily.bodyHeader,
            fontSize: textSizes.xxxLarge
        }
    },
    restScreen: {
        headerTimer: {
            textAlign: 'center',
            fontFamily: fontFamily.secondaryHeader,
            fontSize: textSizes.xxxLarge,
        },
        timer: {
            textAlign: 'center',
            fontFamily: fontFamily.primaryHeader,
            fontSize: textSizes.timer,
            letterSpacing: 6.4,
        },
        bodyTextAnton: {
            textAlign: 'center',
            fontFamily: fontFamily.secondaryHeader,
            fontSize: textSizes.medium,
        },
        bodyTextSignika: {
            textAlign: 'center',
            fontFamily: fontFamily.body,
            fontSize: textSizes.medium,
        },
        upcomingHeader: {
            textAlign: 'center',
            fontFamily: fontFamily.secondaryHeader,
            fontSize: textSizes.xxLarge,
        }
    },  
    postWorkout: {
        headerText: {
            fontFamily: fontFamily.secondaryHeader,
            fontSize: textSizes.xxxLarge,
        },
        bodyText: {
            textAlign: 'center',
            fontFamily: fontFamily.secondaryHeader,
            fontSize: textSizes.xLarge,
        }
    },
    list: {
        draggable: {
            headerText: {
                fontFamily: fontFamily.primaryHeader,
                fontSize: textSizes.large
            },
            bodyText: {
                fontFamily: fontFamily.body,
                fontSize: textSizes.small
            }
        },
    }
})

export default textStyles;

