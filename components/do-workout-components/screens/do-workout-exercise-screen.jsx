import React, { useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
  imageStyles
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

export default function ExerciseScreen(props){
    const theme = useTheme()
    const currentWorkout = props.currentWorkout

    return(
        <View
            style={{...mainStyles.doWorkoutScreen.bodyContainer,
                backgroundColor: theme.colors.background
            }}
        >
            <Image 
                style={{...imageStyles.doWorkout,

                }}
                source={PlaceholderImage}
            />
            <ExerciseHeader
                theme={theme}
                name={currentWorkout.item.exercise_obj.name}
                setCount={currentWorkout.item.workout_data.set_count}
                start={currentWorkout.item.workout_data.rep_start}
                end={currentWorkout.item.workout_data.rep_end}
                exerciseData={currentWorkout.item.exercise_obj}
            />
            <ExerciseSet 
                theme={theme}
                currentSet={props.currentSet}
                setCount={currentWorkout.item.workout_data.set_count}
            />
            <ExerciseRecords
                theme={theme}
                data={props.recordData}
            />
            <ExerciseButtons
                theme={theme}
                setIsRest={props.setIsRest}
                setSet={props.setSet}
                currentSet={props.currentSet}
                setCount={currentWorkout.item.workout_data.set_count}
                currentWorkoutOrder={props.currentWorkout.item.workout_data.order}
                workoutLength={props.workoutLength}

                navigation={props.navigation}
            />

            {/* <ExerciseTimer
                theme={theme}
                time={30}
            /> */}
        </View>
    )
}