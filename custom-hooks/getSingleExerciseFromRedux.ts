import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addInitExercises } from '../redux/slices/ExerciseSlice';
import { addInitWorkouts } from '../redux/slices/WorkoutSlice';
import { setInit } from '../redux/slices/InitSlice';
import exercisesInitDb from '../redux/databases/exercises-init-db';
import workoutsInitDb from '../redux/databases/workouts-init-db';
import { useSecureStore } from './useSecureStore';

const getSingleExerciseFromRedux = (exercise_id) => {
    const exerciseDB = useSelector((state: RootState) => state.exercise.data)
    const [ data, setData ] = useState({})
    const [ error, setError ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)
    console.log(exercise_id)

    useEffect(() => {
        (async() => {
            setIsLoading(true)
            if(exerciseDB){
                try{
                    const exerciseQuery = await exerciseDB.find(exercise => {
                        return exercise.id === exercise_id
                        
                    })
                    if(!exerciseQuery){
                        setError(true)
                        throw new Error('Exercise Does Not Exist')
                    }
                    else{
                        setData(exerciseQuery)
                        setError(false)
                        setIsLoading(false)
                    }
                    
                }
                catch(e){
                    console.log(e)
                }
            } else {
                console.log('Error: There are no exercise database')
            }
        })()
    }, [])

    return { data, isLoading, error }
}

export default getSingleExerciseFromRedux