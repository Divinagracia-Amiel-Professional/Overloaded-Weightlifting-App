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
    const [ isRest, setIsRest ] = useState(false) //set if rest screen 
    const [ set, setSet ] = useState(1) //set currentset of exercise
    const [ index, setIndex ] = useState(0) //sets index of exercise
    const [ restTime, setRestTime ] = useState(0) 

    const { data, saveState } = route.params

    const [ currentWorkoutRecords, setCurrentWorkoutRecords ] = useState([])
    console.log("Current Workout Records: " + JSON.stringify(currentWorkoutRecords))

    const isLastRest = set === data[index].item.workout_data.set_count + 1 && !isRest && data.length === data[index].item.workout_data.order

    console.log("Last Rest? " + isLastRest)

    useEffect(() => {   //Fires every change in state
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
    }, [set, isRest])

    useEffect(() => { //Fires if there are changes in Save State. Used to update current do workout to SaveState
        if(saveState){
            setSet(saveState.set)
            setIndex(saveState.index)
            setCurrentWorkoutRecords(saveState.records)
        }
    }, [saveState])

    console.log(
        `Set: ${set} \n` + 
        `Set Count + 1: ${data[index].item.workout_data.set_count + 1} \n` +
        `Workout Length: ${data.length} \n` +
        `Current Exercise Order: ${data[index].item.workout_data.order}`
    )

    const currentDoWorkoutData = {
        time: data[index].item.workout_data.rest_initial,   //Rest Time
        currentSet: set,                                    //current Set
        setCount: data[index].item.workout_data.set_count,  //number of sets in an exercise
        currentWorkout: data[index],                        //the data of the current exercise
        nextWorkout: data[index + 1],                       //the data of the next exercise
        workoutLength: data.length,                         //the number exercises in the workout
        nextSet: set + 1,                                   //the next set
    }

    const doWorkoutState = {
        set: set,
        index: index,
        records: currentWorkoutRecords,
        data: data
    }

    return(
        <View style={{flex: 1, position: 'relative'}}>
            <BackButton navigation={navigation} type='doWorkout' enabled={!isRest} hidden={isRest} data={doWorkoutState}/>
            {isRest ? //conditional to switch from exercise to rest vice versa
                <RestScreen
                    time={currentDoWorkoutData.time}
                    setIsRest={setIsRest}
                    setIndex={setIndex}
                    setSet={setSet}
                    setCurrentWorkoutRecords={setCurrentWorkoutRecords}
                    currentWorkoutRecords={currentWorkoutRecords}
                    currentSet={currentDoWorkoutData.currentSet}
                    setCount={currentDoWorkoutData.setCount} //not useState, simply number of sets
                    currentWorkout={currentDoWorkoutData.currentWorkout}
                    nextWorkout={currentDoWorkoutData.nextWorkout}
                    workoutLength={currentDoWorkoutData.workoutLength}
                    nextSet={currentDoWorkoutData.nextSet}
                    navigation={navigation}
                /> :
                <ExerciseScreen 
                    recordData={recordData}
                    setIsRest={setIsRest}
                    setIndex={setIndex}
                    setSet={setSet}
                    currentSet={set}
                    setCount={currentDoWorkoutData.setCount} //not useState, simply number of sets
                    currentWorkout={currentDoWorkoutData.currentWorkout}
                    workoutLength={currentDoWorkoutData.workoutLength}
                    navigation={navigation}
                    isLastRest={isLastRest}
                /> 
            }
        </View>
    )
}