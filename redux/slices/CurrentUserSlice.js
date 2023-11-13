import { createSlice } from "@reduxjs/toolkit";

const initState = {
    user: 'guestUser',
    workoutUsed: [],
    preferences: {
        lightTheme: true,
    }
}

const CurrentUserSlice = createSlice({
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

export default CurrentUserSlice.reducer
export const {} = CurrentUserSlice.actions