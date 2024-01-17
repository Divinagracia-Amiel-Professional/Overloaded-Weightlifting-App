import React from 'react';
import { Text, View, Pressable } from 'react-native';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../styles/style-index'
import GetWorkoutData from '../functions/getWorkoutData';
import useExercises from '../custom-hooks/useExercises';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import exercisesInitDb from '../redux/databases/exercises-init-db';
import workoutsInitDb from '../redux/databases/workouts-init-db';
import { addInitExercises } from '../redux/slices/ExerciseSlice';
import { addInitWorkouts } from '../redux/slices/WorkoutSlice';
import { ButtonWithIcon } from '../components/component-index';
import { db } from '../firebase'
import { auth } from '../firebase';

export default function Profile(){
    const dispatch = useDispatch<AppDispatch>()
    const firebaseAuth = auth
    const path = ['Workouts', 'gxgmfK5Z0bvhN1FkodoQ', 'Cycles', 'cycle_two','Splits']
    const collections = useExercises(db, path)
    console.log(collections)

    return(         
        <View style={mainStyles.bodyContainer}>
            <Text style={textStyles.headerText}>Profile</Text>
            <ButtonWithIcon
                style={{paddingVertical: 10, opacity: 0.8}}
                text="Reset Workout DB"
                onPress={() => {
                    dispatch(addInitWorkouts(workoutsInitDb))
                }}
            />
            <ButtonWithIcon
                style={{paddingVertical: 10, opacity: 0.8}}
                text="Reset Exercise DB"
                onPress={() => {
                    dispatch(addInitExercises(exercisesInitDb))
                }}
            />
        </View>
    )
}