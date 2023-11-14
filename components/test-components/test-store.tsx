import React from 'react';
import { Text, View } from 'react-native';
import getExercisesFromWorkoutRedux from '../../custom-hooks/getExercisesFromWorkoutRedux';



export default function TestDBComponent(){
    // const exerciseDB = useSelector((state: RootState) => state.exercise)
    // const workoutDB = useSelector((state: RootState) => state.workout)
    const test = getExercisesFromWorkoutRedux('divisplitID', 2, 3,);
    // const getID = getSingleExerciseFromRedux(test.data[0] ? test.data[1].exercise_id : '')
    
    const map = (test.data[0] ? test.data.map(exercise => {
            return (
                <Text>{exercise.exercise_id}</Text>
            )
        }) : '')

    return(
        <View>
            <Text>{}</Text> 
            {map}
        </View>
    )
}
