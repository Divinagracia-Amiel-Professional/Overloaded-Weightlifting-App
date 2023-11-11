import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { addInitExercisesToStore } from '../../redux/slices/ExerciseSlice';
import { Text, View, Pressable, Image } from 'react-native';
import { useTheme, Card, Modal, Portal } from 'react-native-paper';
import {
  mainStyles,
  textStyles,
  buttonStyles
} from '../../styles/style-index';

export default function TestDBComponent(){
    const exerciseDB = useSelector((state: RootState) => state.exercise)
    const workoutDB = useSelector((state: RootState) => state.workout)

    const test_display = exerciseDB.data 
    const test_workout = workoutDB.data
    console.log(test_display)
    console.log(test_workout)

    return(
        <View style={buttonStyles.button}>
            <Text>{test_display[0].name}</Text>
        </View>
    )
}
