import { createSlice } from '@reduxjs/toolkit'

const initWorkoutDB = {
    isPending: false
}

const WorkoutSlice = createSlice({
    name: "WorkoutDB",
    initialState: initWorkoutDB, 
    reducers: {
        addInitWorkoutToStore: (state, action) => {
            state.value = action.payload
        },
    }
})

export default WorkoutSlice.reducer
export const { addInitWorkoutToStore } = WorkoutSlice.actions