import { createSlice } from "@reduxjs/toolkit";

const initState = {
    user: 'guestUser',
    currentWorkout: '',
    workoutUsed: [],
    records:[],
    preferences: {
        lightTheme: true,
    }
}

const CurrentUserSlice = createSlice({
    name: "CurrentUser",
    initialState: initState,
    reducers: {
        addWorkout: (state, action) => {
            state.workoutUsed = [...state.workoutUsed, action.payload]
        },
        useWorkout: (state, action) => {
            state.currentWorkout = action.payload
        }
    },
    extraReducers: {

    }
})

export default CurrentUserSlice.reducer
export const { addWorkout, useWorkout } = CurrentUserSlice.actions