import React from 'react'
import { View, Text, Pressable } from 'react-native'
import DraggableSortableList from '../../components/do-workout-components/draggable-sortable-list'
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'
import { useTheme, Card } from 'react-native-paper';
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Logo } from '../../constants/icons';


export default function PostWorkoutMessage(props){
    const theme = props.theme

    return(
        <View
            style={{...mainStyles.postWorkoutPage.messageSection.container}}
        >
            <View
                style={{...mainStyles.postWorkoutPage.messageSection.messageContainer}}
            >
                {
                    props.isComplete ?
                        <Logo width={90} height={80} scale={2} strokeColor={theme.colors.primary} fill={theme.colors.background}/>
                        : 
                        <Feather color='white' name={'frown'} size={132} />
                }
                <Text
                    style={{...textStyles.postWorkout.headerText,
                        color: 'white'
                    }}
                >{props.isComplete ? completeMessage.header : incompleteMessage.header}</Text>
                <Text
                    style={{...textStyles.postWorkout.bodyText,
                        color: 'white'
                    }}
                >{props.isComplete ? completeMessage.body : incompleteMessage.body}</Text>
            </View>

            <Pressable
                style={{...buttonStyles.restScreen.skipContainer,
                    backgroundColor: 'white'
                }}
                onPress={() => {
                    props.navigation.navigate('Navbar')
                }}
            >
                <Text
                    style={{...buttonStyles.restScreen.skipText,
                        color: theme.colors.primary
                    }}
                >Back to Home</Text>
            </Pressable>
        </View>
    )
}

const completeMessage = {
    header: 'Lightweight Baby!!!',
    body: "Congratulations for Completing today's Workout! Keep IT UP!",
};

const incompleteMessage = {
    header: 'Workout Failed',
    body: "We'll get 'em next time",
};