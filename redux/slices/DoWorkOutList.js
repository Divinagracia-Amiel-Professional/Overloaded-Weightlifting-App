import { createSlice } from "@reduxjs/toolkit";

const initState = {
    user: 'guestUser',
    workoutUsed: [],
    preferences: {
        lightTheme: true,
    }
}

const DoWorkoutListSlice = createSlice({
    name: "CurrentUser",
    initialState: initState,
    reducers: {
        addWorkout: (state, action) => {
            state.workoutUsed = action.payload
        }
    },
    extraReducers: {

    }
})

export default DoWorkoutListSlice.reducer
export const {} = DoWorkoutListSlice.actions