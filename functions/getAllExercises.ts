import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addInitExercisesToStore } from '../redux/slices/ExerciseSlice';
import { addInitWorkoutToStore } from '../redux/slices/WorkoutSlice';
import exercisesInitDb from '../redux/databases/exercises-init-db';
import workoutsInitDb from '../redux/databases/workouts-init-db';

const getAllExercises = () => {
    const exerciseDB = useSelector((state: RootState) => state.exercise);
    const workoutDB = useSelector((state: RootState) => state.workout);
    const dispatch = useDispatch<AppDispatch>();

    return exerciseDB.data
}

export default getAllExercises