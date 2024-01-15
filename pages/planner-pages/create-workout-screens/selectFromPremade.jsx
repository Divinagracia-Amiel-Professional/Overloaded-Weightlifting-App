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
import { WorkoutCard, BackButton } from '../../../components/component-index';
import getWorkouts from '../../../functions/getWorkouts';

export default function SelectFromPremade({navigation}){
    const theme = useTheme()
    const [ data, setData ] = useState(getWorkouts())

    const display = data[0] ? data.map(workout => {
        return(
            <WorkoutCard 
                key={workout.id}
                name={workout.name}
                difficulty={workout.difficulty}
                focus={workout.focus}
                onPress={() => {
                    navigation.navigate('PremadeWorkoutDetails', {
                        workoutDetails: workout
                    })
                }}
            />
        ) 
    }) : setData(getWorkouts())

    return(
        <View
            style={{flex: 1, position: 'relative'}}
        >
            <BackButton type='create_workout' navigation={navigation}/>
            <ScrollView
                style={{...mainStyles.scrollView,
                    backgroundColor: theme.colors.background
                }}
                contentContainerStyle={mainStyles.scrollViewContainerStyle}
            >
            <Text
                style={{...textStyles.headerText,
                    color: theme.colors.secondary
                }}
            > Select a Workout </Text>
            {display}
            </ScrollView>
        </View> 
    )
}