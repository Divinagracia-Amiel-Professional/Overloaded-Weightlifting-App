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
    PremadeWorkoutDetails,
    ManageWorkoutPage,
    SelectExercisePage,
    ExerciseListPage,
    ExerciseDetailsPage
} from './planner-pages/planner-pages-index';
import SelectRecordsListPage from './tracker-pages/SelectRecordsListScreen';
import NavBar from './navbar'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function DoWorkoutStack(props){
    return(
        <Stack.Navigator
            detachInactiveScreens={true}
            screenOptions={{
            headerShown: false,
          }}
        >
            <Stack.Screen name='Navbar' children={() => <NavBar promptAsync={props.promptAsync} />} />

            <Stack.Screen name='PreWorkoutPage'component={gestureHandlerRootHOC(PreWorkoutPage)}/>
            <Stack.Screen name='DoWorkoutPage' component={DoWorkoutPage}/>
            <Stack.Screen name='PostWorkoutPage' component={PostWorkoutPage}/>
            
            <Stack.Screen name='SelectionPage' component={SelectionPage}/>
            <Stack.Screen name='SelectFromPremade' component={SelectFromPremade}/>
            <Stack.Screen name='CreateFromScratch' component={gestureHandlerRootHOC(CreateFromScratch)}/>
            <Stack.Screen name='PremadeWorkoutDetails' component={PremadeWorkoutDetails}/>
            <Stack.Screen name='SelectExercisePage' component={SelectExercisePage}/>

            <Stack.Screen name='ManageWorkoutPage' component={ManageWorkoutPage}/>

            <Stack.Screen name='ExerciseListPage' component={ExerciseListPage}/>
            <Stack.Screen name='ExerciseDetailsPage' component={ExerciseDetailsPage}/>

            <Stack.Screen name='SelectRecordPage' component={SelectRecordsListPage}/>
        </Stack.Navigator>
    )
}