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
    const [isDetailShown, setIsDetailShown] = useState(false)

    return(
        <View style={{...cardStyles.startButtonContainer,
            backgroundColor: theme.colors.tertiaryContainer}}>
            <Pressable 
                style={{...cardStyles.cardContainer,
                backgroundColor: theme.colors.primaryContainer}}
                onPress={props.onPress}
            >
                <Logo width={90} height={80} scale={1.5} strokeColor={theme.colors.primary} fill={theme.colors.background}/>
                <Text 
                    style={{...textStyles.cardHeaderText,
                    color: theme.colors.onPrimaryContainer}}
                >
                        Let's Go JIM!!!
                </Text>
            </Pressable>    
            {
                isDetailShown 
                && 
                <StartButtonDetail/>
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