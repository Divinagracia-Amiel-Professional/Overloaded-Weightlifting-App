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
})

export default buttonStyles;