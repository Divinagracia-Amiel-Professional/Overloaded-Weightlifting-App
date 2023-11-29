import React, { useEffect, useState } from 'react';
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
import { getCurrentlyUsedWorkouts, getUserWorkouts }from '../../../functions/functions-index';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { addWorkout } from '../../../redux/slices/CurrentUserSlice';
import getUserWorkoutObjects from '../../../custom-hooks/getUserWorkoutObjects';
import { ManageWorkoutCard } from '../../../components/component-index';

export default function ManageWorkoutPage({navigation, route}){
    const theme = useTheme()
    const [ data, setData ] = useState({
        userWorkout: getUserWorkouts(), 
        currentlyUsed: getCurrentlyUsedWorkouts()
    })

    // const userWorkout = getUserWorkouts()
    // const currentlyUsed = getCurrentlyUsedWorkouts()
    // console.log(userWorkout)
    console.log(data.currentlyUsed ? data.currentlyUsed : 'wala')

    let key=0
    const workouts = data.userWorkout[0] || data.currentlyUsed ? data.userWorkout.map(workout => {
        key++
        return(
        <ManageWorkoutCard 
            key={workout.id}
            id={workout.id}
            name={workout.name}
            difficulty={workout.difficulty}
            focus={workout.focus}
        />
    )}) : setData({
        userWorkout: getUserWorkouts(), 
        currentlyUsed: getCurrentlyUsedWorkouts()
    })

    return(
        <ScrollView
            style={{...mainStyles.scrollView,
                backgroundColor: theme.colors.background
            }}
            contentContainerStyle={mainStyles.scrollViewContainerStyle}
        >
            <ManageWorkoutCard
                key={'2'}
                name={'Name'}
                difficulty={3}
                focus={'Focus'}
            />
            {workouts ? workouts : null}
        </ScrollView>
    )
}