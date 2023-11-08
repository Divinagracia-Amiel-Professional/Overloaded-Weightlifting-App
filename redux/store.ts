import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from './slices/ExerciseSlice'
import workoutReducer from "./slices/WorkoutSlice";

export const store = configureStore({
    reducer: {
        exercise: exerciseReducer,
        workout: workoutReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;