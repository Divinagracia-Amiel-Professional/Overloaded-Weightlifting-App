import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initWorkoutDB = {
    data: {},
    isPending: false
}

const WorkoutSlice = createSlice({
    name: "WorkoutDB",
    initialState: initWorkoutDB, 
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addInitWorkoutToStore.pending, (state) => {
            state.isPending = !state.isPending
        })
        .addCase(addInitWorkoutToStore.fulfilled, (state, action) => {
            state.isPending = !state.isPending
            state.data = action.payload
        })    
    }
})

export const addInitWorkoutToStore = createAsyncThunk(
    "WorkoutDB/addInitWorkoutToStore",
    async (db) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return db
    }
)

export default WorkoutSlice.reducer
// export const { addInitWorkoutToStore } = WorkoutSlice.actions