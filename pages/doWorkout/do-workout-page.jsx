import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import DraggableSortableList from '../../components/do-workout-components/draggable-sortable-list'
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'
import { useTheme, Card } from 'react-native-paper';
import { ExerciseScreen, RestScreen, BackButton, ConfirmationModal } from '../../components/component-index';
import useBackListener from '../../custom-hooks/useBackListener';

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

export default function DoWorkoutPage({ route, navigation }){
    const [ isGoingBack, SetIsGoingBack ] = useState(false)
    const [ isRest, setIsRest ] = useState(false)
    const [ set, setSet ] = useState(1) //set currentset of exercise
    const [ index, setIndex ] = useState(0) //sets index of exercise
    const [ restTime, setRestTime ] = useState(0) 

    const { data } = route.params

    const [ currentWorkoutRecords, setCurrentWorkoutRecords ] = useState([])
    console.log("Current Workout Records: " + JSON.stringify(currentWorkoutRecords))

    const isLastRest = set === data[index].item.workout_data.set_count + 1 && data.length === data[index].item.workout_data.order

    console.log("Last Rest? " + isLastRest)

    useEffect(() => {
        if(isLastRest){
            navigation.navigate('PostWorkoutPage', {
                workoutId: route.params.workoutId,
                workoutName: route.params.workoutName,
                cycle: route.params.cycle,
                split: route.params.split,
                currentWorkoutRecords: currentWorkoutRecords,
                isComplete: true
            })
        }
    }, [currentWorkoutRecords])
    
    return(
        <View style={{flex: 1, position: 'relative'}}>
            <BackButton navigation={navigation} type='doWorkout' />
            {isRest ? //conditional to switch from exercise to rest vice versa
                <RestScreen
                    time={data[index].item.workout_data.rest_initial}
                    setIsRest={setIsRest}
                    setIndex={setIndex}
                    setSet={setSet}
                    setCurrentWorkoutRecords={setCurrentWorkoutRecords}
                    currentWorkoutRecords={currentWorkoutRecords}
                    currentSet={set}
                    setCount={data[index].item.workout_data.set_count} //not useState, simply number of sets
                    currentWorkout={data[index]}
                    nextWorkout={data[index + 1]}
                    workoutLength={data.length}
                    nextSet={set + 1}
                    navigation={navigation}
                /> :
                <ExerciseScreen 
                    recordData={recordData}
                    setIsRest={setIsRest}
                    setSet={setSet}
                    currentWorkout={data[index]}
                    workoutLength={data.length}
                    currentSet={set}
                    navigation={navigation}
                /> 
            }
        </View>
    )
}