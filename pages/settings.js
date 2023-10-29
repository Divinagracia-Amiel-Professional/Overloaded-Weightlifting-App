import React from 'react';
import { Text, View, Pressable } from 'react-native';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../styles/style-index'
import GetWorkoutData from '../functions/getWorkoutData';
import useExercises from '../custom-hooks/useExercises';
import { db } from '../firebase'

export default function Settings(){

    const path = ['Workouts', 'gxgmfK5Z0bvhN1FkodoQ', 'Cycles', 'cycle_two','Splits']
    const collections = useExercises(db, path)
    console.log(collections)

    return(
        <View style={mainStyles.bodyContainer}>
            <Text style={textStyles.headerText}>Settings</Text>
            {/* <GetWorkoutData /> */}
        </View>
    )
}