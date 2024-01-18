import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { Snackbar, Portal } from 'react-native-paper';
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
import getUserWorkoutObjects from '../../../custom-hooks/getUserWorkoutObjects';
import { BackButton } from '../../../components/component-index';

export default function PremadeWorkoutDetails({navigation, route}){
    const dispatch = useDispatch<AppDispatch>();
    const workoutUsed = useSelector((state: RootState) => state.currentUser.workoutUsed)
    const [ isSnackBarVisible, setIsSnackBarVisible ] = useState(false)
    const [ snackBarMessage, setSnackBarMessage ] = useState('')

    const data = route.params.workoutDetails
    // console.log(data)
    // console.log(workoutUsed)

    const doesExist = workoutUsed.find(workouts => workouts.id === data.id) ? true : false
    console.log(doesExist)

    return(
        <View
            style={{flex: 1, position: 'relative'}}
        >
            <BackButton type='default' navigation={navigation} />
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
                        if(doesExist){
                            setSnackBarMessage('Workout is already added. Please go to Manage Workout Page')
                            setIsSnackBarVisible(true)
                            return
                        }
                        setSnackBarMessage('Successfully Added to Workouts. You can now go to Manage Workout Page')
                        setIsSnackBarVisible(true)
                        dispatch(addWorkout(data))
                    }}
                    editWorkout={() => {
                        console.log(workoutUsed)
                    }}
                />
                <Portal>
                    <Snackbar
                        visible={isSnackBarVisible}
                        onDismiss={() => {
                            setIsSnackBarVisible(false)
                        }}
                        action={{
                        label: 'close',
                        onPress: () => {
                            setIsSnackBarVisible(false)
                        },
                        }}
                        >
                        {snackBarMessage}
                    </Snackbar>
                </Portal>
            </ScrollView>
        </View>
    )
}