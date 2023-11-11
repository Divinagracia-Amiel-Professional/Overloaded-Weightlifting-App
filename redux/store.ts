import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from './slices/ExerciseSlice'
import workoutReducer from "./slices/WorkoutSlice";
import initReducer from "./slices/InitSlice";

export const store = configureStore({
    reducer: {
        exercise: exerciseReducer,
        workout: workoutReducer,
        init: initReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;