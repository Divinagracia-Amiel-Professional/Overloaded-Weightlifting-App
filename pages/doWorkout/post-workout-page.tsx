import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import DraggableSortableList from '../../components/do-workout-components/draggable-sortable-list'
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'
import { useTheme, Card } from 'react-native-paper';
import { PostWorkoutMessage, BackButton } from '../../components/component-index';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { updateRecords, completeWorkout } from '../../redux/slices/CurrentUserSlice';
import { getLocalDateTime } from '../../functions/functions-index';

export default function PostWorkoutPage({ navigation, route, props}){
    const theme = useTheme()
    const dispatch = useDispatch<AppDispatch>()
    const [ isComplete , setIsComplete ] = useState(false)

    useEffect(() => { //prevent looping of setComplete, and only fires when route.params.isComplete(data from exercise screen to say if the workout is completed) changes
        setIsComplete(route.params.isComplete)
    }, [route.params.isComplete])

    const toUpdateData = {
        date_achieved: getLocalDateTime().toISOString(),
        workoutId: route.params.workoutId,
        workoutName: route.params.workoutName,
        cycle: route.params.cycle,
        split: route.params.split,
        recordsData: route.params.currentWorkoutRecords
    }

    useEffect(() => {
        dispatch(updateRecords(toUpdateData)) //updates records to redux
    }, [route.params])

    console.log("Data Received: " + JSON.stringify(route.params.currentWorkoutRecords))

    return(
        <View
            style={{...mainStyles.postWorkoutPage.container,
                backgroundColor: theme.colors.primary,
            }}
        >
            <BackButton navigation={navigation} type='direct_home' hidden={true}/>
            <PostWorkoutMessage
                theme={theme}
                isComplete={isComplete}
                setIsComplete={setIsComplete}
                navigation={navigation}
            />
        </View>
    )
}