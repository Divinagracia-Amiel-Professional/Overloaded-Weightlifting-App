import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { WorkoutCard } from '../../../components/component-index';

export default function SelectFromPremade(){
    const theme = useTheme()

    return(
        <View
            style={{...mainStyles.bodyContainer,
                backgroundColor: theme.colors.background
            }}
        >
            <Text
                style={{...textStyles.headerText,
                    color: theme.colors.secondary
                }}
            > Select a Workout </Text>
            <WorkoutCard 
                
            />
        </View>
    )
}