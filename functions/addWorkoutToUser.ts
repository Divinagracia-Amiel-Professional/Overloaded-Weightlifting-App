import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addWorkout } from '../redux/slices/CurrentUserSlice';

const addWorkoutsToUser = ( workout_id ) => {
    // const exerciseDB = useSelector((state: RootState) => state.exercise);
    // const workoutDB = useSelector((state: RootState) => state.workout);
    const dispatch = useDispatch<AppDispatch>();

    dispatch(addWorkout(workout_id))
}

export default addWorkoutsToUser