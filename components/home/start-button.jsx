import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';
import { 
    Logo,
    Abs,
    Legs
} from '../../constants/icons';
import { 
    // logoStartEnabled as LogoStartEnabled,
    // calendarStartDisabled as CalendarStartDisabled,
    // MuscleStartCore,
    // MuscleStartLegs
 } from '../../constants/icons';
import { 
    cardStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'
import StartButtonDetail from './start-button-details';
import FontAwesome from '@expo/vector-icons/FontAwesome5'
import { NavigationContainer } from '@react-navigation/native'

export default function StartButton(props){
    const theme = useTheme()
    const isRestDay = props.isRestDay
    const isCompleted = props.isCompleted
    const [isDetailShown, setIsDetailShown] = useState(false)

    return(
        <View style={{...cardStyles.startButtonContainer,
            backgroundColor: theme.colors.tertiaryContainer}}>
            <Pressable 
                style={{...cardStyles.cardContainer,
                    backgroundColor: !isRestDay && !isCompleted ? theme.colors.primary : theme.colors.tertiaryContainer,
                    opacity: !isRestDay && !isCompleted ? 1 : 0.5
                }}
                onPress={() => {
                    if(!isRestDay && !isCompleted){
                        props.onPress()
                    }
                }}
            >
                <Logo width={90} height={80} scale={1.5} strokeWidth={1} strokeColor={!isRestDay && !isCompleted ? theme.colors.primary : theme.colors.tertiaryContainer} fill={!isRestDay && !isCompleted ? theme.colors.background : theme.colors.onTertiaryContainer}/>
                <Text 
                    style={{...textStyles.cardHeaderText,
                    color: !isRestDay && !isCompleted ? theme.colors.onPrimaryContainer : theme.colors.onTertiaryContainer}}
                >
                        {
                            isRestDay ?
                                "Rest Day" :
                                ( 
                                    isCompleted ? 
                                        "Workout Complete!" :
                                        "Let's Go JIM!!!"
                                )
                        }
                </Text>
                {
                    isRestDay || isCompleted ? 
                    <Text
                        style={{...textStyles.cardBodyText,
                            color: theme.colors.onTertiaryContainer,
                            paddingHorizontal: 25,
                            textAlign: 'center',
                            fontSize: 15,
                        }}
                    >
                        {    
                            isRestDay ?
                                `It's 'stopping the urge to go to the gym' day!` 
                                :
                                ( 
                                    isCompleted ? 
                                        "You have completed today's workout! Back to real life :<" :
                                        ""
                                )
                        }
                    </Text> :
                    null
                }
                
            </Pressable>    
            {
                isDetailShown 
                && 
                <StartButtonDetail
                    data={props.data}
                    isRestDay={props.isRestDay}
                    showModal={props.showModal}
                    hideModal={props.hideModal}
                />
            }
            <Pressable 
                style={buttonStyles.button}
                onPress={() => {
                    return (
                        setIsDetailShown(prevState => !prevState)
                    )
                }}
            >
                {
                    !isDetailShown && <Text style={{
                        ...buttonStyles.buttonText,
                        color: theme.colors.secondary
                    }}>Show Details</Text>
                }
                <FontAwesome name={isDetailShown ? "angle-up" : "angle-down"} size={24} color={theme.colors.secondary}/>
            </Pressable>  
        </View>  
    )
}