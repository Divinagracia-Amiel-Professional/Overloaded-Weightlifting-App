import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { 
    DoWorkoutPage,
    PostWorkoutPage, 
    PreWorkoutPage 
} from './doWorkout/do-workout-index'
import { 
    SelectionPage,
    SelectFromPremade,
    CreateFromScratch,
    PremadeWorkoutDetails
} from './planner-pages/planner-pages-index';
import NavBar from './navbar';

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
            
            <Stack.Screen name='SelectionPage' component={SelectionPage}/>
            <Stack.Screen name='SelectFromPremade' component={SelectFromPremade}/>
            <Stack.Screen name='CreateFromScratch' component={CreateFromScratch}/>
            <Stack.Screen name='PremadeWorkoutDetails' component={PremadeWorkoutDetails}/>

        </Stack.Navigator>
    )
}