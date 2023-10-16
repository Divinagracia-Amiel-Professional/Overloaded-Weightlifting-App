import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';
import { 
    logoStartEnabled as LogoStartEnabled,
    calendarStartDisabled as CalendarStartDisabled,
    MuscleStartCore,
    MuscleStartLegs
 } from '../../constants/icons';
import { 
    cardStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'

export default function StartButton(){
    const theme = useTheme()

    return(
        <View style={cardStyles.startButtonContainer}>
            <Pressable 
                style={{...cardStyles.cardContainer,
                backgroundColor: theme.colors.primaryContainer}}
            >
                <LogoStartEnabled />
                <Text 
                    style={{...textStyles.cardHeaderText,
                    color: theme.colors.onPrimaryContainer}}
                >
                        Let's Go JIM!!!
                </Text>
            </Pressable>
            <View
                style={{...cardStyles.startButtonDetailsContainer,
                backgroundColor: theme.colors.tertiaryContainer}}
            >
                <Text 
                    style={{
                        ...textStyles.cardDetailHeaderText,
                        color: theme.colors.secondary,
                    }}
                >
                    Exercise Today: 2nd Leg Cycle
                </Text>
                <Text
                    style={{
                        ...textStyles.cardDetailBody,
                        color: theme.colors.secondary
                    }}
                >
                    Target Muscles:</Text>
                <View style={{
                    ...cardStyles.startButtonMusclesContainer
                }}>
                    <MuscleStartCore />
                    <MuscleStartLegs />
                </View>
                <Pressable
                    style={{
                        ...buttonStyles.button,
                        backgroundColor: theme.colors.secondary
                    }}
                    >
                    <Text style={{
                        ...buttonStyles.buttonText,
                        color: theme.colors.onSecondary
                    }}>Take a Break?</Text>
                </Pressable>
            </View>    
        </View>  
    )
}