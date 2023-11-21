import { StyleSheet } from 'react-native'
import { colors, fontWeight, fontFamily, textSizes, shadow } from '../constants/theme'
import { StretchInX } from 'react-native-reanimated'

const imageStyles = StyleSheet.create({
    placeholder: {
        height: 200,
        alignSelf: 'stretch',
        width: 'auto',

        borderWidth: 1,
        borderColor: '#3D2B3D',
        borderRadius: 5,
    },
    draggable: {
        height: 75,
        width: 75
    },
    doWorkout: {
        flexGrow: 1,
        alignSelf: 'stretch',
        width: 'auto',
    }
})

export default imageStyles