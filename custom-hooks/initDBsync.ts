import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addInitExercises } from '../redux/slices/ExerciseSlice';
import { addInitWorkouts } from '../redux/slices/WorkoutSlice';
import { setInit } from '../redux/slices/InitSlice';
import exercisesInitDb from '../redux/databases/exercises-init-db';
import workoutsInitDb from '../redux/databases/workouts-init-db';
import { useSecureStore } from './useSecureStore';

const initializeDBSync = () => {
    const [ isSuccess, setIsSuccess ] = useState(false)
    const exerciseDB = useSelector((state: RootState) => state.exercise);
    const workoutDB = useSelector((state: RootState) => state.workout);
    const isInit = useSelector((state: RootState) => state.init.data)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        console.log('success!')
        console.log(isInit)

        if(!isInit){
            dispatch(addInitExercises(exercisesInitDb));
            dispatch(addInitWorkouts(workoutsInitDb));
            dispatch(setInit())
        }
        
        setIsSuccess(true)
    }, [])

    return { isSuccess }
}

export default initializeDBSync