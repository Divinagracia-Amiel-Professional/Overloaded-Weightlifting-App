import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const getExercisesFromWorkoutRedux = (workout_id, cycle_order, split_order) => {
    const workoutDB = useSelector((state: RootState) => state.workout.data)
    const exerciseDB = useSelector((state: RootState) => state.exercise.data)
    const initState = []
    const [ data, setData ] = useState([])
    const [ error, setError ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        (async() => {
            setIsLoading(true)
            if(workoutDB && exerciseDB){
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
         
                    // const exercises = await exerciseDB.filter(({id}) => {   
                    //     return splitQuery.exercises.some(include => include.exercise_id === id)
                    // })
                    
                    const combineArrays = await splitQuery.exercises.map(workout => { 
                        return ({
                            ...workout,
                            exercise_obj: exerciseDB.find(item => item.id === workout.exercise_id)
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
    }, [workout_id, cycle_order, split_order])

    return { data, isLoading }
}

export default getExercisesFromWorkoutRedux