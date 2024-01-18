import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import exerciseReducer from './slices/ExerciseSlice'
import workoutReducer from "./slices/WorkoutSlice";
import initReducer from "./slices/InitSlice";
import currentUserReducer from "./slices/CurrentUserSlice";
import themeReducer from "./slices/ThemeSlice";
import currentSplitReducer from "./slices/CurrentSplit";
import currentDateReducer from "./slices/CurrentDate";

import ExpoFileSystemStorage from "redux-persist-expo-filesystem";

const rootReducer = combineReducers({
    exercise: exerciseReducer,
    workout: workoutReducer,
    init: initReducer,
    currentUser: currentUserReducer,
    currentSplit: currentSplitReducer,
    currentDate: currentDateReducer,
    theme: themeReducer,
})

const persistConfig = {
  key: "root",
  storage: ExpoFileSystemStorage,
};

const persistedReducer =  persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store)