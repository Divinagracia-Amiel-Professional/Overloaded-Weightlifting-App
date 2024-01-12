import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLocalDateTime } from "../../functions/functions-index";

const initDate = getLocalDateTime().toISOString().slice(0,10)

const initState = {
    value: initDate
}

const CurrentDateSlice = createSlice({
    name: "CurrentDate",
    initialState: initState,
    reducers: {
        updateDate: (state, action) => {    
            return state.value = action.payload
        } 
    },
    extraReducers: {

    }
})

export default CurrentDateSlice.reducer
export const { 
    updateDate,
 } = CurrentDateSlice.actions