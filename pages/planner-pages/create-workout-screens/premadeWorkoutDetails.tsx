import React, { useState } from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DescriptionSection from './premadeWorkoutDetailsSections/descriptionSection';
import { addWorkoutsToUser }from '../../../functions/functions-index';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { addWorkout } from '../../../redux/slices/CurrentUserSlice';

export default function PremadeWorkoutDetails({navigation, route}){
    const dispatch = useDispatch<AppDispatch>();
    const workoutUsed = useSelector((state: RootState) => state.currentUser.workoutUsed)

    const data = route.params.workoutDetails
    console.log(data)
    console.log(workoutUsed)

    return(
        <ScrollView
            style={{...mainStyles.PremadeScrollView
            
            }}
            contentContainerStyle={mainStyles.PremadeScrollViewContainerStyle}
        >
            <DescriptionSection
                name={data.name}
                difficulty={data.difficulty}
                focus={data.focus}
                description={data.description}
                addWorkout={() => {
                    if(workoutUsed.includes(data.id)){
                        return console.log('Workout is already used!')
                    }
                    dispatch(addWorkout(data.id))
                }}
                editWorkout={() => {}}
            />
        </ScrollView>
    )
}