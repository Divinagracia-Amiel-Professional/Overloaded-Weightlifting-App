import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { useTheme, List } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getCurrentlyUsedWorkouts, getUserWorkouts }from '../../functions/functions-index';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { addWorkout } from '../../redux/slices/CurrentUserSlice';
import getUserWorkoutObjects from '../../custom-hooks/getUserWorkoutObjects';
import { ManageWorkoutCard } from '../component-index';

export default function WorkoutPicker(){

    return(
        <View>
            
         </View>   
    )
}