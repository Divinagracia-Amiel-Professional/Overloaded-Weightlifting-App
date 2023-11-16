import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store'; 
import getExercisesFromWorkoutRedux from './getExercisesFromWorkoutRedux';
import getSingleExerciseFromRedux from './getSingleExerciseFromRedux';

export default function getExerciseListWithExerciseObject(){
    const [ ID, setID ] = useState({})
    const exercises = getExercisesFromWorkoutRedux('diviSplit', 2, 3)

    useEffect(() => {
        const DBdata = exercises.data
        if(DBdata){
          const temp_arr = []
          for(let i = 0; i < DBdata.length; i++){
            temp_arr.push({id: DBdata[i].exercise_id})
            console.log(temp_arr)
          }
        }
    }, [ exercises.data ])

    if(exercises.data)
    
    
    

    return
}