import { createSlice } from "@reduxjs/toolkit";

const initState = {
    user: 'guestUser',
    records: []
}

const recordsSlice = createSlice({
    name: "CurrentUser",
    initialState: initState,
    reducers: {
        addRecord: (state, action) => {
            state.workoutUsed = [...state.workoutUsed, action.payload]
        },
        removeRecord: (state, action) => {
            state.currentWorkout = action.payload
        }
    },
    extraReducers: {

    }
})

export default recordsSlice.reducer
export const {} = recordsSlice.actions