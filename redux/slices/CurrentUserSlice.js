import { createSlice } from "@reduxjs/toolkit";

const initState = {
    user: 'guestUser',
    currentWorkout: '',
    workoutUsed: [],
    records:[],
    preferences: {
        lightTheme: true,
    }
}

const CurrentUserSlice = createSlice({
    name: "CurrentUser",
    initialState: initState,
    reducers: {
        addWorkout: (state, action) => {
            state.workoutUsed = [...state.workoutUsed, action.payload]
        },
        useWorkout: (state, action) => {
            state.currentWorkout = action.payload
        },
        updateState: (state, action) => {
            if(state.workoutUsed[0]){
                const workoutIndex = state.workoutUsed.findIndex(workout => workout.id === action.payload.workoutId)
                const data = {
                    ...action.payload
                }

                state.workoutUsed[workoutIndex].latest_state = data
                console.log(state.workoutUsed[workoutIndex].latest_state)
            }
            else{
                console.log('There is no workout with that ID')
            }
        }
    },
    extraReducers: {

    }
})

export default CurrentUserSlice.reducer
export const { addWorkout, useWorkout, updateState } = CurrentUserSlice.actions