import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'
import { useTheme, Card } from 'react-native-paper';
import DraggableSortableList from '../../components/do-workout-components/draggable-sortable-list';
import getExercisesFromWorkoutRedux from '../../custom-hooks/getExercisesFromWorkoutRedux';


export default function PreWorkoutPage(){
    const theme = useTheme()

    return(
        <View style={{...mainStyles.bodyContainer,
            backgroundColor: theme.colors.background
            }}>
            <Text>preWorkoutPage</Text>
            <DraggableSortableList />
        </View>
    )
}