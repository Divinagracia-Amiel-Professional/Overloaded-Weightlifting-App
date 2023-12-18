import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import getCurrentlyUsedWorkoutObject from './getCurrentlyUsedWorkoutObject';

const getExercisesFromCurrentlyUsedWorkouts = (cycle_order, split_order) => {
    const currentlyUsed = useSelector((state: RootState) => state.currentUser.currentWorkout);
    const userWorkouts = useSelector((state: RootState) => state.currentUser.workoutUsed);
    const exerciseDB = useSelector((state: RootState) => state.exercise.data)

    const workoutObject = userWorkouts.find(workout => workout.id === currentlyUsed)

    const initState = []
    const [ data, setData ] = useState([])
    const [ error, setError ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        (async() => {
            setIsLoading(true)
            if(workoutObject){
                try{
                    const cycleQuery = await workoutObject.cycles.find(cycle => {
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
                    const combineArrays = await splitQuery.exercises.map(exercise => { 
                        return ({
                            ...exercise,
                            exercise_obj: exerciseDB.find(item => item.id === exercise.exercise_id)
                        })
                    })

                    setData(combineArrays)
                }
                catch(e){
                    console.log(e)
                }
            } else {
                console.log('Error: There are no workout database')
            }
            setIsLoading(false)
        })()
    }, [])

    return { data, isLoading }
}

export default getExercisesFromCurrentlyUsedWorkouts