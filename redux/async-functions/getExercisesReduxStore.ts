import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';

const getExercisesFunction = async(workout_id, cycle_order, split_order) => {
    const workoutDB = useSelector((state: RootState) => state.workout.data)

    if(workoutDB){
        const workoutQuery = await workoutDB.find(workout => {
            return workout.id === workout_id
        })
        const cycleQuery = await workoutQuery.cycles.find(cycle => {
            return cycle.order === cycle_order
        })
        const splitQuery = await cycleQuery.split.find(split => {
            return split.cycleQuery === split_order
        })
        const exercises = splitQuery.exercises
    } else {

    }
}
