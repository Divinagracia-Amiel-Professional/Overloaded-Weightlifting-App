import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addInitExercisesToStore } from '../redux/slices/ExerciseSlice';
import { addInitWorkoutToStore } from '../redux/slices/WorkoutSlice';
import exercisesInitDb from '../redux/databases/exercises-init-db';
import workoutsInitDb from '../redux/databases/workouts-init-db';

interface ErrorState {
    isEmpty: boolean,
    noUsed: boolean,
}

const init = {
    isEmpty: false,
    noUsed: false,
} 

const getCurrentlyUsedWorkoutObject = () => {
    const [ err, setErr ] = useState<ErrorState>({
        isEmpty: true,
        noUsed: true,
    })
    const [ data, setData ] = useState({})
    const currentlyUsed = useSelector((state: RootState) => state.currentUser.currentWorkout);
    const userWorkouts = useSelector((state: RootState) => state.currentUser.workoutUsed);
    // const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        try {
            if(!userWorkouts[0]){
                setErr(prevState => ({
                    ...prevState,
                    isEmpty: true,
                }))
                throw new Error('There are no currently used workouts!')
            }
            setErr(prevState => ({
                ...prevState,
                isEmpty: false,
            }))
            if(!currentlyUsed){
                setErr(prevState => ({
                    ...prevState,
                    noUsed: true,
                }))
                throw new Error('There is no workout in use!')
            }           
            const workoutObject = userWorkouts.find(workout => workout.id === currentlyUsed)
            setData(workoutObject)
            setErr(prevState => ({
                ...prevState,
                noUsed: false,
            }))
            
        } catch(e) {
            console.log(e)
        }
    }, [ currentlyUsed ])
    
    return { data, err }
}

export default getCurrentlyUsedWorkoutObject