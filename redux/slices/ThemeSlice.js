import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { 
    colors, 
    fontWeight, 
    fontFamily, 
    textSizes, 
    shadow 
} from '../../constants/theme'
import { 
    buttonStyles,
    cardStyles,
    mainStyles, 
    textStyles,
    imageStyles,
    listStyles,
} from '../../styles/style-index'

const isInit = {
    data: {
        mainStyles: {
            bodyContainer: {
                flex: 1,
                backgroundColor: colors.lightGray,
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: 15,
                paddingVertical: 50,
                gap: 10,
              },
        },
        // lightTheme: {
        //     colors: {
        //         ...colors
        //     },
        //     containers: {
        //         startButtonContainer: {
        //             ...cardStyles.startButtonContainer,
        //             backgroundColor: colors.lightGray
        //         },
        //         cardContainer: {
        //             ...cardStyles.cardContainer,
        //             backgroundColor: colors.primary
        //         },
        //     },
        //     texts: {
        //         cardHeaderText: {
        //             ...textStyles.cardDetailHeaderText,
        //             color: colors.white
        //         },
        //     },
        //     button: {
        //         container: {
        //             ...buttonStyles.button
        //         },
        //         text: {
        //             ...buttonStyles.text,
        //             color: colors.secondary
        //         }
        //     }
        // },
        // darkTheme: {

        // }
    },
    isPending: false
}

const ThemeSlice = createSlice({
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

export default ThemeSlice.reducer
export const { setInit } = ThemeSlice.actions