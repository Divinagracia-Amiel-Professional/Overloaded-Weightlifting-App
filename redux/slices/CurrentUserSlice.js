import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getLocalDateTime from "../../functions/getLocalDateTime";
import toHash from "../../functions/toHash"

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
        addWorkout: (state, action) => { //Used in Adding Workouts; CreateFromScratchPage and PremadeWorkoutDetails Page   
            state.workoutUsed = [...state.workoutUsed, action.payload]
        },
        deleteWorkout: (state, action) => { //Used in Manage Workout Page if user wants to delete workout
            const workoutIndex = state.workoutUsed.findIndex(workout => workout.id === action.payload)

            state.workoutUsed.splice(workoutIndex, 1)
        },
        useWorkout: (state, action) => { //Used in Manage Workout Page if user wants to use workout
            const isAdd = action.payload.date_used ? true : false
            const workoutId = isAdd ? action.payload.id : action.payload
            state.currentWorkout = workoutId

            if(isAdd){
                const workoutIndex = state.workoutUsed.findIndex(workout => workout.id === action.payload.id)
                state.workoutUsed[workoutIndex].latest_state.date_used = action.payload.date_used
            }
            
            console.log(`Workout Used: ${JSON.stringify(state.workoutUsed)} 
                        Current Workout: ${state.currentWorkout} 
            `)
        },
        editWorkout: (state, action) => { //Used at the edit workout function in Manage Workout Page
            const editedWorkout = action.payload
            const workoutIndex = state.workoutUsed.findIndex(workout => workout.id === editedWorkout.id)

            state.workoutUsed[workoutIndex] = {
                ...editedWorkout,
                id: toHash(action.payload.name).toString()
            }

            state.currentWorkout = ''
            
            console.log(JSON.stringify(state.workoutUsed))
        },
        updateState: (state, action) => { //Used in Workout Picker in Start Button Details
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
        goToNextSplit: (state) => { //Reducer to go to next split when it's midnight or the next day
            if(state.currentWorkout){
                const workoutIndex = state.workoutUsed.findIndex(workout => workout.id === state.currentWorkout)
                const currentWorkoutObj = state.workoutUsed[workoutIndex]
                const isRestDay = currentWorkoutObj.latest_state.split === 0 && currentWorkoutObj.latest_state.cycle === 0
                const isCompleted = currentWorkoutObj.latest_state.is_completed

                const currentCycleIndex = state.workoutUsed[workoutIndex].latest_state.cycle - 1
                const currentSplitIndex = state.workoutUsed[workoutIndex].latest_state.split - 1
                const cycleLength = currentWorkoutObj.cycles.length
                const splitLength = !isRestDay ? currentWorkoutObj.cycles[currentCycleIndex].split.length : 1
                
                console.log(`Split Index: ${currentSplitIndex}   Cycle Index: ${currentCycleIndex}`)
                console.log(`Cycle Length: ${cycleLength}   Split Length: ${splitLength}`)
                console.log(`isRestDay? ${isRestDay}    isCompleted? ${isCompleted}`)

                if(isCompleted){ //checks if user completed the currentWorkout, does not go to next split until user completes the current workout
                    if(isRestDay){  //Reset date to first cycle and split after Rest Day
                        const newLatestState = {
                            ...currentWorkoutObj.latest_state,
                            is_completed: false,
                            date_used: getLocalDateTime().toISOString(),
                            split: 1,
                            cycle: 1,
                            name: currentWorkoutObj.cycles[0].split[0].name
                        }
    
                        state.workoutUsed[workoutIndex].latest_state = {
                            ...newLatestState
                        }
                    } else if(state.workoutUsed[workoutIndex].latest_state.split < splitLength){ //Go to next split, given that there is in the current cycle; if there is not, then next condition
                        console.log("Add Split")
    
                        const newLatestState = {
                            ...currentWorkoutObj.latest_state,
                            is_completed: false,
                            date_used: getLocalDateTime().toISOString(),
                            split: currentWorkoutObj.latest_state.split + 1,
                            name: currentWorkoutObj.cycles[currentCycleIndex].split[currentSplitIndex + 1].name
                        }
    
                        state.workoutUsed[workoutIndex].latest_state = {
                            ...newLatestState
                        }
                    } else if (currentWorkoutObj.latest_state.cycle < cycleLength){ //Go to next cycle given that there is; if there is not, then next condition
                        console.log("Add Cycle")
    
                        const newLatestState = {
                            ...currentWorkoutObj.latest_state,
                            is_completed: false,
                            date_used: getLocalDateTime().toISOString(),
                            split: 1,
                            cycle: currentWorkoutObj.latest_state.cycle + 1,
                            name: currentWorkoutObj.cycles[currentCycleIndex + 1].split[0].name
                        }
    
                        state.workoutUsed[workoutIndex].latest_state = {
                            ...newLatestState
                        }
                    } else {    //Only fires, if its the last split of the last cycle; changes split and cycle to 0 which is used to indicate Rest Day
                        console.log("To Rest Day")
                        const newLatestState = {
                            ...currentWorkoutObj.latest_state,
                            is_completed: true,
                            date_used: getLocalDateTime().toISOString(),
                            split: 0,
                            cycle: 0,
                            name: currentWorkoutObj.cycles[0].split[0].name
                        }
    
                        state.workoutUsed[workoutIndex].latest_state = {
                            ...newLatestState
                        }
                    }
                } 
            }
        },
        completeWorkout: (state, action) => { //PostWorkoutPage
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
            const recordsData = action.payload.recordsData //data from PostWorkoutPage
            const isStateRecordsEmpty = state.records[0] ? false : true //check if state records is empty

            recordsData.forEach(record => {
                const hasExerciseRecord = !isStateRecordsEmpty ? state.records.some(stateRecord => { //check if exercise already exists in redux
                    return stateRecord.id === record.id
                }) : false

                if(hasExerciseRecord){
                    const exerciseIndex = state.records.findIndex(stateRecord => stateRecord.id === record.id) 
                    const thisExerciseRecord = state.records[exerciseIndex]

                    state.records[exerciseIndex] = { //add records to existing ones
                        ...thisExerciseRecord,
                        records: [
                            ...thisExerciseRecord.records,
                            {
                                date_achieved: action.payload.date_achieved,
                                rep_start: record.repStart,
                                rep_end: record.repEnd,
                                set_count: record.setCount,
                                sets: record.sets
                            }
                        ]
                    }
                } else {
                    state.records = [ //add new record of a new exercise
                        ...state.records,
                        {
                            id: record.id,
                            name: record.name,
                            records: [
                                {
                                    date_achieved: action.payload.date_achieved,
                                    rep_start: record.repStart,
                                    rep_end: record.repEnd,
                                    set_count: record.setCount,
                                    sets: record.sets
                                }
                            ]
                        }
                    ]
                }
            });

            console.log(state.records)
        },
        resetRecords: (state) => { //Delete every record
            state.records = initState.records

            console.log(state.records)
        },
        resetCurrentUserSlice: (state) => {
            return state = initState
        }
    },
    extraReducers: {

    }
})

export default CurrentUserSlice.reducer
export const { 
    addWorkout,
    deleteWorkout, 
    useWorkout, 
    editWorkout,
    updateState, 
    goToNextSplit,
    completeWorkout,
    updateRecords, 
    resetRecords,
    resetCurrentUserSlice
 } = CurrentUserSlice.actions