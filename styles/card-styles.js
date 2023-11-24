import { StyleSheet } from 'react-native'
import { colors, fontWeight, fontFamily, textSizes, shadow } from '../constants/theme'
import { StretchInX } from 'react-native-reanimated'

const cardStyles = StyleSheet.create({
    cardContainer: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 25,
        gap: 10,
        ...shadow.medium,

        borderRadius: 12,
    },
    startButtonContainer: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        ...shadow.medium,
        paddingBottom: 10,

        borderRadius: 12,
    },
    startButtonDetailsContainer: {
        zIndex: -1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        gap: 5,

        borderRadius: 12,
    },
    startButtonMusclesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingBottom: 5,
    },
})

export default cardStyles