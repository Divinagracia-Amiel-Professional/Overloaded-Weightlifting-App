import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addInitExercisesToStore } from '../redux/slices/ExerciseSlice';
import { addInitWorkoutToStore } from '../redux/slices/WorkoutSlice';
import exercisesInitDb from '../redux/databases/exercises-init-db';
import workoutsInitDb from '../redux/databases/workouts-init-db';

const checkIfWorkoutExists = (workout_id) => {
    const userWorkouts = useSelector((state: RootState) => state.currentUser.workoutUsed);
    const dispatch = useDispatch<AppDispatch>();

    const doesExist = userWorkouts.some(workout => workout.id === workout_id)

    return doesExist
}

export default checkIfWorkoutExists