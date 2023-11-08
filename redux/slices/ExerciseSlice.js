import { createSlice } from '@reduxjs/toolkit'
import { initDbAddExercisesToStore } from '../actions'
import { initDbAddWorkoutsToStore } from '../actions'

const initExerciseDbState = {

}

const ExerciseSlice = createSlice({
    name: "ExerciseDB",
    initialState: initExerciseDbState, 
    reducers: {
        addInitExercisesToStore: (state, action) => {
            state.value = action.payload
        },
    }
})

export default ExerciseSlice.reducer
export const { addInitExercisesToStore } = ExerciseSlice.actions
