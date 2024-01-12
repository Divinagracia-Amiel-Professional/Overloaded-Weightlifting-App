import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
} from '../../../styles/style-index'
import {
    RestMainSection,
    RestUpcomingSection, 
    MetricDropdown 
} from './components/doWorkoutComponentIndex'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function RestScreen(props){
    const theme = useTheme()
    const [ metric, setMetric ] = useState('kg')
    console.log(props.currentSet)
    console.log(props.setCount)
    console.log(props.workoutLength)

    const justifyContentLogic = ( //conditional to justify content if its the last rest of the set and the workout
        props.currentSet === props.setCount + 1 && props.workoutLength === props.currentWorkout.item.workout_data.order ? 'center' : (
            props.currentSet === props.setCount + 1 ? 'flex-end' : 'center'
        )
    )

    return(
        <View
            style={{...mainStyles.restScreen.screenContainer,
                backgroundColor: theme.colors.primary,
                justifyContent: justifyContentLogic //condtional: center rest when exercise is in between set not finished
            }}
        >
            <View
                style={{...mainStyles.restScreen.bodyContainer
                
                }}
            >
                <RestMainSection 
                    theme={theme}
                    time={props.time}
                    setIsRest={props.setIsRest}
                    setIndex={props.setIndex}
                    setSet={props.setSet}
                    currentSet={props.currentSet}
                    currentWorkout={props.currentWorkout}
                    workoutLength={props.workoutLength}
                    setCount={props.setCount} //not useState, simply number of sets

                    setCurrentWorkoutRecords={props.setCurrentWorkoutRecords}
                    currentWorkoutRecords={props.currentWorkoutRecords}

                    navigation={props.navigation}
                />
                {(
                    props.currentSet === props.setCount + 1 &&  //conditional so that upcoming section won't appear if exercise is not finised yet
                    props.workoutLength !== props.currentWorkout.item.workout_data.order &&
                    <RestUpcomingSection 
                        theme={theme}
                        workoutLength={props.workoutLength} 
                        nextWorkoutName={props.nextWorkout.item.exercise_obj.name}
                        nextWorkoutOrder={props.nextWorkout.item.workout_data.order}
                        nextWorkoutSetCount={props.nextWorkout.item.workout_data.set_count}
                        nextWorkoutRepStart={props.nextWorkout.item.workout_data.rep_start}
                        nextWorkoutRepEnd={props.nextWorkout.item.workout_data.rep_end}
                    />
                )}
            </View>
            
            {/* <View
                style={{height: 50,
                    flexDirection: 'row',
                    width:  40
                }}
            >
                <MetricDropdown 
                    theme={theme}
                    type={'weight'}
                    metric={metric}
                    setMetric={setMetric}
                />
            </View> */}
        </View>
    )
}