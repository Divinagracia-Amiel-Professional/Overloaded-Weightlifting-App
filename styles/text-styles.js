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
        fontSize: textSizes.small,
        color: color.black
    }
})

export default textStyles;

