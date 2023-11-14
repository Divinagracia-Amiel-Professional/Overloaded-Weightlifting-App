import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addInitExercises } from '../redux/slices/ExerciseSlice';
import { addInitWorkouts } from '../redux/slices/WorkoutSlice';
import { setInit } from '../redux/slices/InitSlice';
import exercisesInitDb from '../redux/databases/exercises-init-db';
import workoutsInitDb from '../redux/databases/workouts-init-db';
import { useSecureStore } from './useSecureStore';

const getSingleExerciseFromWorkoutRedux = (workout_id, cycle_order, split_order, exercise_id) => {
    const workoutDB = useSelector((state: RootState) => state.workout.data)
    const initState = ''
    const [ data, setData ] = useState('')
    const [ error, setError ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        (async() => {
            setIsLoading(true)
            if(workoutDB){
                try{
                    const workoutQuery = await workoutDB.find(workout => {
                        return workout.id === workout_id
                    })
                    if(!workoutQuery){
                        setData(initState)
                        setError(true)
                        throw new Error('Workout with corresponding ID does not exist')        
                    }
                    const cycleQuery = await workoutQuery.cycles.find(cycle => {
                        return cycle.order === cycle_order
                    })
                    if(!cycleQuery){
                        setData(initState)
                        setError(true)
                        throw new Error('Cycle with corresponding order does not exist')     
                    }
                    const splitQuery = await cycleQuery.split.find(split => {
                        return split.order === split_order
                    })
                    if(!splitQuery){
                        setData(initState)
                        setError(true)
                        throw new Error('Split with corresponding order does not exist')           
                    }
                    const exerciseQuery = await splitQuery.exercises.find(exercise => {
                        return exercise.id === exercise_id
                    })
                    if(!exerciseQuery){
                        setData(initState)
                        setError(true)
                        throw new Error('Exercise with corresponding ID does not exist')
                    }
                    if(exerciseQuery){
                        setData(exerciseQuery.id)
                        setError(false)
                    }
                }
                catch(e){
                    console.log(e)
                }
            } else {
                console.log('Error: There are no workout database')
            }
            setIsLoading(false)
        })()
    }, [ workout_id, cycle_order, split_order ])

    return { data, isLoading }
}

export default getSingleExerciseFromWorkoutRedux;