import React, { useState } from 'react'
import { View, Text } from 'react-native'
import DraggableSortableList from '../../components/do-workout-components/draggable-sortable-list'
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'
import { useTheme, Card } from 'react-native-paper';
import { ExerciseScreen, RestScreen } from '../../components/component-index';

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

export default function DoWorkoutPage(){
    const [ isRest, setIsRest ] = useState(false)

    return(
        <View style={{flex: 1}}>
            {isRest ? 
                <RestScreen
                    time={150}
                    setIsRest={setIsRest}
                /> :
                <ExerciseScreen 
                    recordData={recordData}
                    setIsRest={setIsRest}
                /> 
            }
        </View>
    )
}