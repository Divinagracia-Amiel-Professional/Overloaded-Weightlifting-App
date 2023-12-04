import { createSlice } from "@reduxjs/toolkit";

const initState = {
    id: 'divisplitID',
    cycle: 2,
    split: {
        order: 3,
        name: 'Leg Day',
    },
}

const currentSplit = createSlice({
    name: "CurrentUser",
    initialState: initState,
    reducers: {
        addCurrentSplit: (state, action) => {
            state.id = action.payload.id
            state.cycle = action.payload.cycle
            state.split.order = action.payload.order
            state.split.name = action.payload.name
        },
    },
    extraReducers: {

    }
})

export default currentSplit.reducer
export const { addCurrentSplit } = currentSplit.actions