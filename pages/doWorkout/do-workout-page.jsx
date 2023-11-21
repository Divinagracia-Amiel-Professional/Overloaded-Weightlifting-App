import React from 'react'
import { View, Text } from 'react-native'
import DraggableSortableList from '../../components/do-workout-components/draggable-sortable-list'
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'
import { useTheme, Card } from 'react-native-paper';
import ExerciseScreen from '../../components/do-workout-components/screens/do-workout-exercise-screen';

export default function DoWorkoutPage(){
    const recordData = [
        {
            title: 'Previous Record',
            data: {}
        },
        {
            title: 'Max Reps Record',
            data: {}
        },
        {
            title: '1 Rep Max Record',
            data: {}
        }
    ]

    return(
        <View style={{flex: 1}}>
            <ExerciseScreen 
                recordData={recordData}
            />
        </View>
    )
}