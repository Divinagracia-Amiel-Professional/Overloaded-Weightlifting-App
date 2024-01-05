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
                style={{alignSelf:'stretch', textAlign: 'center'}}
            >Choose Workout</Text>
            <List.AccordionGroup>
                {workoutData.data.cycles.map(cycle => (
                        <List.Accordion 
                            id={cycle.order}
                            key={cycle.order}
                            style={{backgroundColor: theme.colors.tertiaryContainer}}
                            rippleColor={theme.colors.customLightGray}
                            titleStyle={{color: theme.colors.onTertiaryContainer}}
                            titleNumberOfLines={1}
                            title={`Cycle ${cycle.order}`} 
                        >
                            {cycle.split.map(split => (
                                <List.Item
                                    key={split.order}
                                    style={{paddingLeft: 40}}
                                    title={split.name} 
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

{/* <List.AccordionGroup>
                <List.Accordion 
                    id='1'
                    style={{backgroundColor: theme.colors.tertiaryContainer}}
                    rippleColor={theme.colors.customLightGray}
                    titleStyle={{color: 'black'}}
                    titleNumberOfLines={1}
                    title={workoutData.data.id} >
                    <List.Item title='Item 1' />
                </List.Accordion>
                <List.Accordion 
                    id='2'
                    style={{backgroundColor: theme.colors.tertiaryContainer}}
                    rippleColor={theme.colors.customLightGray}
                    titleStyle={{color: 'black'}}
                    titleNumberOfLines={1}
                    title='WTF' >
                    <List.Item title='Item 1' />
                </List.Accordion>
    </List.AccordionGroup>  */}