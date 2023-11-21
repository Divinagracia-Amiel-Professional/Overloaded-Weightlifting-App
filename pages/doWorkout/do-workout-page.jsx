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
    const theme = useTheme()
    
    return(
        <View style={{...mainStyles.bodyContainer,
            backgroundColor: theme.colors.background
            }}>
            <ExerciseScreen />
        </View>
    )
}