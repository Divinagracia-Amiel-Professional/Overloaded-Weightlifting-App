import { createSlice } from '@reduxjs/toolkit'
import { initDbAddExercisesToStore } from '../actions'
import { initDbAddWorkoutsToStore } from '../actions'

const initWorkoutDbState = {

}

const WorkoutSlice = createSlice({
    name: "WorkoutDB",
    initialState: initWorkoutDbState, 
    reducers: {
        addInitWorkoutToStore: (state, action) => {
            state.value = action.payload
        },
    }
})

export default WorkoutSlice.reducer
export const { addInitWorkoutToStore } = WorkoutSlice.actions