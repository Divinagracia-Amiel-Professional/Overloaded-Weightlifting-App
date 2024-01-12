import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
        deleteWorkout: (state, action) => {
            const workoutIndex = state.workoutUsed.findIndex(workout => workout.id === action.payload)

            state.workoutUsed.splice(workoutIndex, 1)
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
        },
        completeWorkout: (state, action) => {
            if(state.workoutUsed[0]){
                const workoutIndex = state.workoutUsed.findIndex(workout => workout.id === action.payload)

                state.workoutUsed[workoutIndex].latest_state.is_completed = true
                console.log(state.workoutUsed[workoutIndex].latest_state)
            }
            else{
                console.log('There is no workout with that ID')
            }
        },
        updateRecords: (state, action) => {
            const recordsData = action.payload.recordsData
            const isStateRecordsEmpty = state.records[0] ? false : true

            recordsData.forEach(record => {
                const hasExerciseRecord = !isStateRecordsEmpty ? state.records.some(stateRecord => {
                    return stateRecord.id === record.id
                }) : false

                if(hasExerciseRecord){
                    const exerciseIndex = state.records.findIndex(stateRecord => stateRecord.id === record.id)
                    const thisExerciseRecord = state.records[exerciseIndex]

                    state.records[exerciseIndex] = {
                        ...thisExerciseRecord,
                        records: [
                            ...thisExerciseRecord.records,
                            {
                                date_achieved: action.payload.date_achieved,
                                rep_start: record.repStart,
                                rep_end: record.repEnd,
                                sets: record.sets
                            }
                        ]
                    }
                } else {
                    state.records = [
                        ...state.records,
                        {
                            id: record.id,
                            name: record.name,
                            records: [
                                {
                                    date_achieved: action.payload.date_achieved,
                                    rep_start: record.repStart,
                                    rep_end: record.repEnd,
                                    sets: record.sets
                                }
                            ]
                        }
                    ]
                }
            });

            console.log(state.records)
        },
        resetRecords: (state) => {
            state.records = []

            console.log(state.records)
        },
        consoleLogRecords: (state) => {
            console.log(JSON.stringify(state.records))
        }
    },
    extraReducers: {

    }
})

export default CurrentUserSlice.reducer
export const { 
    addWorkout,
    seWorkout, 
    updateState, 
    deleteWorkout, 
    updateRecords, 
    resetRecords,
    completeWorkout,
    consoleLogRecords,
 } = CurrentUserSlice.actions