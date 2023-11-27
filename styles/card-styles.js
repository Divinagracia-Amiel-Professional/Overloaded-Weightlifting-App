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
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    textSection: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    bodyTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
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
    workoutCard: {
        container: {
            alignSelf: 'stretch',
            // justifyContent: 'center',
            // alignItems: 'center',
            overflow: 'hidden',

            borderRadius: 10,

            ...shadow.medium
        },
        nameContainer: {
            height: 150,
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 0,
        },
        imageBackground: {
            flexGow: 1,
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
        },
        details: {
            container: {
                paddingVertical: 15,
                paddingHorizontal: 15,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: 10,
                alignSelf: 'stretch',
            },
            difficultyContainer: {
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                alignSelf: 'stretch',
            },
            moreDetailsContainer: {
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
            },
            pressable: {
                flexDirection: 'row'
            }
        }
    }
})

export default cardStyles