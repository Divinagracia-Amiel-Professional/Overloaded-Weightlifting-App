import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { useTheme, ActivityIndicator, Portal } from 'react-native-paper';
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
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ManageWorkoutPage({navigation, route}){
    const theme = useTheme()
    const [ isLoading, setIsLoading ] = useState(false)

    const data = {
        userWorkout: useSelector((state: RootState) => state.currentUser.workoutUsed), 
        currentlyUsed: useSelector((state: RootState) => state.currentUser.currentWorkout)
    }

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
                navigation={navigation}
                thisWorkout={workout}
                setIsLoading={setIsLoading}
            />
        )
    }) : navigation.navigate('Navbar')

    return(
        <SafeAreaView
            style={{flex: 1, position: 'relative'}}
        >
            <View
                style={{
                    padding: 0,

                    zIndex: 100,
                    position: 'absolute',
                    top: '50%',
                    bottom: '50%',
                    left: '50%',
                    right: '50%'
                 }}
            >
                <ActivityIndicator size={50} animating={isLoading} color={theme.colors.primary} />
            </View>   
            <ScrollView
                style={{...mainStyles.scrollView,
                    backgroundColor: theme.colors.background,
                }}
                contentContainerStyle={{
                    ...mainStyles.scrollViewContainerStyle,
                    paddingVertical: 0
                }}
            >
                {workouts ? workouts : <Text>No used Workouts</Text>}
            </ScrollView>
        </SafeAreaView>
    )
}