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
        }
    }
})

export default textStyles;

