import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../home';
import DoWorkoutPage from './do-workout-page';
import PreWorkoutPage from './pre-workout-page';

const Stack = createStackNavigator();

export default function DoWorkoutStack(){
    return(
        <Stack.Navigator
            detachInactiveScreens={true}
            screenOptions={{
            headerShown: false,
          }}
        >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='PreWorkoutPage'component={PreWorkoutPage}/>
            <Stack.Screen name='DoWorkoutPage' component={DoWorkoutPage}/>
        </Stack.Navigator>
    )
}