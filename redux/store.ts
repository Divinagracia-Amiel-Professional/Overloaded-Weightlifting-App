import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from './slices/ExerciseSlice'
import workoutReducer from "./slices/WorkoutSlice";
import initReducer from "./slices/InitSlice";
import currentUserReducer from "./slices/CurrentUserSlice";

export const store = configureStore({
    reducer: {
        exercise: exerciseReducer,
        workout: workoutReducer,
        init: initReducer,
        currentUser: currentUserReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;