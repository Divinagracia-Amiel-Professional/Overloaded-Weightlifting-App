import React, { useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
} from '../../../styles/style-index'
import { 
    ExerciseButtons,
    ExerciseHeader,
    ExerciseRecords,
    ExerciseSet
} from './components/doWorkoutComponentIndex'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Placeholder as PlaceholderImage } from '../../../constants/images'

export default function ExerciseScreen(){
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
    
    const theme = useTheme()

    return(
        <View>
            <Image 
                source={PlaceholderImage}
            />
            <ExerciseHeader
                theme={theme}
                name={'Deadlift'}
                start={4}
                end={4}
            />
            <ExerciseSet 
                theme={theme}
                currentSet={1}
                setCount={4}
            />
            <ExerciseRecords
                data={recordData}
            />


            {/* <ExerciseTimer
                theme={theme}
                time={30}
            /> */}
        </View>
    )
}