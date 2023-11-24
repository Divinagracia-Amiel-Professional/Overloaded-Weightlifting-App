import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initWorkoutDB = {
    data: {},
    isPending: false
}

const WorkoutSlice = createSlice({
    name: "WorkoutDB",
    initialState: initWorkoutDB, 
    reducers: {
        addInitWorkouts: (state, action) => {
            state.data = action.payload
        },
        reset: (state) => {
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(addInitWorkoutToStore.pending, (state) => {
            state.isPending = true
        })
        .addCase(addInitWorkoutToStore.fulfilled, (state, action) => {
            state.isPending = false
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
export const { reset, addInitWorkouts } = WorkoutSlice.actions