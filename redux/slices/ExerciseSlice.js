import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initExerciseDB = {
    data: {},
    isPending: false
}

const ExerciseSlice = createSlice({
    name: "ExerciseDB",
    initialState: initExerciseDB, 
    reducers: {
        addInitExercises: (state, action) => {
            state.data = action.payload
        },
        reset: (state) => {
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addInitExercisesToStore.pending, (state) => {
                state.isPending = !state.isPending
            })
            .addCase(addInitExercisesToStore.fulfilled, (state, action) => {
                state.isPending = !state.isPending
                state.data = action.payload
            })    
    }
})

export const addInitExercisesToStore = createAsyncThunk(
    "ExerciseDB/addInitExercisesToStore",
    async (db) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return db
    }
)

export default ExerciseSlice.reducer
export const { reset, addInitExercises } = ExerciseSlice.actions
