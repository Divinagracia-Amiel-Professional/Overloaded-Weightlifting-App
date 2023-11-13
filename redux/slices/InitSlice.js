import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const isInit = {
    data: false,
    isPending: false
}

const InitSlice = createSlice({
    name: "InitSlice",
    initialState: isInit, 
    reducers: {
        setInit : (state) => {
            state.data = !state.data
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(addInitExercisesToStore.pending, (state) => {
    //             state.isPending = !state.isPending
    //         })
    //         .addCase(addInitExercisesToStore.fulfilled, (state, action) => {
    //             state.isPending = !state.isPending
    //             state.data = action.payload
    //         })    
    // }
})

// export const addInitExercisesToStore = createAsyncThunk(
//     "ExerciseDB/addInitExercisesToStore",
//     async (db) => {
//         await new Promise((resolve) => setTimeout(resolve, 1000))
//         return db
//     }
// )

export default InitSlice.reducer
export const { setInit } = InitSlice.actions