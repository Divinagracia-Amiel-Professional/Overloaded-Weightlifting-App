import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const getUserWorkoutObjects = () => {
    const workoutDB = useSelector((state: RootState) => state.workout.data)
    const userWorkouts = useSelector((state: RootState) => state.currentUser.workoutUsed)
    const initState = []
    const [ data, setData ] = useState([])
    const [ error, setError ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        (async() => {
            setIsLoading(true)
            if(workoutDB && userWorkouts){
                try{
                    // if(!splitQuery){
                    //     setData(initState)
                    //     setError(true)
                    //     throw new Error('Split with corresponding order does not exist')           
                    // }
         
                    // const exercises = await exerciseDB.filter(({id}) => {   
                    //     return splitQuery.exercises.some(include => include.exercise_id === id)
                    // })
                    
                    const combineArrays = await userWorkouts.map(workout_id => { 
                        return ({
                            ...workoutDB.find(workout => workout.id === workout_id)
                        })
                    })

                    // setData(prevdata => [...prevdata, combineArrays])
                    // console.log({...combineArrays,
                    //     test: 'test'
                    // })

                    // setData(combineArrays)
                }
                catch(e){
                    console.log(e)
                }
            } else {
                console.log('Error: There are no workout database')
            }
            setIsLoading(false)
        })()
    }, [ userWorkouts ])

    return { data, isLoading }
}

export default getUserWorkoutObjects