import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../home';
import DoWorkoutPage from './do-workout-page';
import PreWorkoutPage from './pre-workout-page';
import PostWorkoutPage from './post-workout-page';
import { NavBar } from '../../components/component-index';

const Stack = createStackNavigator();

export default function DoWorkoutStack(){
    return(
        <Stack.Navigator
            detachInactiveScreens={false}
            screenOptions={{
            headerShown: false,
          }}
        >
            <Stack.Screen name='Navbar' component={NavBar} />
            <Stack.Screen name='PreWorkoutPage'component={PreWorkoutPage}/>
            <Stack.Screen name='DoWorkoutPage' component={DoWorkoutPage}/>
            <Stack.Screen name='PostWorkoutPage' component={PostWorkoutPage}/>
        </Stack.Navigator>
    )
}