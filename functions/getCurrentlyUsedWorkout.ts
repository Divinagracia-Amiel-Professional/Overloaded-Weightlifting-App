import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addInitExercisesToStore } from '../redux/slices/ExerciseSlice';
import { addInitWorkoutToStore } from '../redux/slices/WorkoutSlice';
import exercisesInitDb from '../redux/databases/exercises-init-db';
import workoutsInitDb from '../redux/databases/workouts-init-db';

const getCurrentlyUsedWorkouts = () => {
    const currentlyUsed = useSelector((state: RootState) => state.currentUser.currentWorkout);
    const dispatch = useDispatch<AppDispatch>();

    return currentlyUsed
}

export default getCurrentlyUsedWorkouts