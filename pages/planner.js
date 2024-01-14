import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    mainStyles
} from '../styles/style-index'
import { CardButton } from '../components/component-index';
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Add, CalendarEdit } from 'iconsax-react-native'
import { Rack } from '../constants/icons';
import { getUserWorkouts, getAllExercises } from '../functions/functions-index';

export default function Planner({navigation}){
    const theme = useTheme()
    const userWorkout = getUserWorkouts()
    const exercisesDB = getAllExercises()
    const [ workoutUsed , setWorkoutUsed ] = useState([])
    const [ exercises, setExercises ] = useState([])

    useEffect(() => {
        setWorkoutUsed(userWorkout)
    }, [userWorkout])

    useEffect(() => {
        setExercises(exercisesDB)
    }, [exercisesDB])
    
    console.log(userWorkout)

    return(
        <View style={{...mainStyles.bodyContainer,
            backgroundColor: theme.colors.background
        }}>
            <CardButton 
                state={true}
                header='Create Workout'
                mainIcon={<Rack fill={theme.colors.background}/>}
                mainIconDisabled={<Rack fill={theme.colors.onTertiaryContainer}/>}
                sideIcon={<Add size='32' color={theme.colors.background} />}
                sideIconDisabled={<Add size='32' color={theme.colors.onTertiaryContainer} />}
                disabledMessage='Cannot Create Workout'
                onPress={() => {
                    navigation.navigate('SelectionPage')
                }}
            />
            <CardButton 
                state={userWorkout[0] ? true : false}
                header='Manage Workout'
                mainIcon={<CalendarEdit size={80} color={theme.colors.background} />}
                mainIconDisabled={<CalendarEdit size={80} color={theme.colors.onTertiaryContainer} />}
                sideIcon={null}
                sideIconDisabled={null}
                disabledMessage='Create Workout First!'
                onPress={() => {
                    userWorkout[0] ? navigation.navigate('ManageWorkoutPage', {userWorkout: userWorkout}) : null
                }} 
            />
            <CardButton 
                state={exercises[0] ? true : false}
                header='Exercise List'
                mainIcon={<FontAwesome5 name="clipboard-list" size={80} color={theme.colors.background} />}
                mainIconDisabled={<FontAwesome5 name="clipboard-list" size={80} color={theme.colors.onTertiaryContainer} />}
                sideIcon={null}
                sideIconDisabled={null}
                disabledMessage='Unavailable for now'
                onPress={() => {
                    exercises[0] ? navigation.navigate('ExerciseListPage', {userWorkout: userWorkout}) : null
                }}
            />
        </View>
    )
}