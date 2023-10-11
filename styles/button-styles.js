import { Button, StyleSheet } from 'react-native'
import { colors, fontWeight, fontFamily, textSizes, shadow } from '../constants/theme'

const buttonStyles = StyleSheet.create({
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
})

export default buttonStyles;