import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Abs, Legs } from '../../constants/icons';
import { 
    cardStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'
import { setWorkoutName } from '../../functions/functions-index';

export default function StartButtonDetail(props){
    const theme = useTheme()
    const workoutData = props.data
    const isRestDay = props.isRestDay

    const handleChooseSplit = () => {
        if(props.hasSave){
            props.setChooseModalVisible(true)
        } else {
            props.showModal()
        }
    }

    return(
        <View
                style={cardStyles.startButtonDetailsContainer}
            >
                <Text 
                    style={{
                        ...textStyles.cardDetailHeaderText,
                        color: theme.colors.secondary,
                        paddingBottom: 5,
                    }}
                >
                    Exercise Today: {!isRestDay ? setWorkoutName(workoutData.data.latest_state.cycle, workoutData.data.latest_state.name) : "Just go rest bro"}
                </Text>
                {/* <Text
                    style={{
                        ...textStyles.cardDetailBody,
                        color: theme.colors.secondary
                    }}
                >
                    Target Muscles:</Text>
                <View style={{
                    ...cardStyles.startButtonMusclesContainer
                }}>
                    <Abs height={30} strokeColor={theme.colors.tertiaryContainer} fill={theme.colors.secondary}/>
                    <Legs height={30} strokeColor={theme.colors.tertiaryContainer} fill={theme.colors.secondary}/>
                </View> */}
                <Pressable
                    style={{
                        ...buttonStyles.button,
                        backgroundColor: theme.colors.secondary
                    }}

                    onPress={() => {
                        handleChooseSplit()
                    }}
                    >
                    <Text style={{
                        ...buttonStyles.buttonText,
                        color: theme.colors.onSecondary
                    }}>Choose another split?</Text>
                </Pressable>
            </View>
    )
}