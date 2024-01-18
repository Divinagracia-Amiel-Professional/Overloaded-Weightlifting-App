import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, ScrollView, StyleSheet } from 'react-native';
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
import { getCurrentlyUsedWorkouts, getUserWorkouts, getLocalDateTime }from '../../functions/functions-index';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { addWorkout, updateState } from '../../redux/slices/CurrentUserSlice';
import getUserWorkoutObjects from '../../custom-hooks/getUserWorkoutObjects';
import { ManageWorkoutCard } from '../component-index';
import ListAccordion from 'react-native-paper/lib/typescript/components/List/ListAccordion';
import { fontFamily } from '../../constants/theme';
import { TextalignCenter } from 'iconsax-react-native';

export default function WorkoutPicker(props){
    const dispatch = useDispatch<AppDispatch>();

    const theme = useTheme()
    const workoutData = props.data
    console.log(workoutData.data.cycles)

    return(
        <List.Section
            style={{alignSelf: 'stretch'}}
        >
            <Text
                style={{
                    ...style.header,
                    color: theme.colors.onBackground
                }}
            >Choose Workout</Text>
            <List.AccordionGroup>
                {workoutData.data.cycles.map(cycle => (
                        <List.Accordion 
                            id={cycle.order}
                            key={cycle.order}
                            style={{backgroundColor: theme.colors.tertiaryContainer}}
                            rippleColor={theme.colors.customLightGray}
                            titleStyle={{
                                ...style.cycleTitleStyle,
                                color: theme.colors.onBackground,
                            }}
                            titleNumberOfLines={1}
                            title={`Cycle ${cycle.order}`} 
                        >
                            {cycle.split.map(split => (
                                <List.Item
                                    key={split.order}
                                    style={{paddingLeft: 40}}
                                    titleStyle={{
                                        ...style.splitTitleSyle,
                                        color: theme.colors.onBackground
                                    }}
                                    title={split.name} 
                                    right={props => <MaterialCommunityIcons name='chevron-right' size={24} color={theme.colors.secondary}/>}
                                    onPress={() => {
                                        const id = workoutData.data.id
                                        const data = {
                                            workoutId: id,
                                            is_completed: false,
                                            date_used: getLocalDateTime().toISOString(),
                                            cycle: cycle.order,
                                            split: split.order,
                                            name: split.name
                                        } 
                                        dispatch(updateState(data))
                                        props.hideModal()
                                    }}
                                />
                            ))}
                        </List.Accordion>
                    )
                )}
            </List.AccordionGroup>
        </List.Section> 
    )
}

const style = StyleSheet.create({
    header: {
        alignSelf:'stretch', 
        textAlign: 'center',
        fontFamily: 'Stem-Medium', 
        fontSize: 24
    },
    cycleTitleStyle: {
        fontFamily: 'Staatliches-Regular', 
        fontSize: 20
    },
    splitTitleSyle: { 
        fontFamily: 'Signika-Regular', 
        fontSize: 16
    }
})