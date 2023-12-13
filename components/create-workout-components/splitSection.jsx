import React, { useState } from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Add, CalendarEdit, Edit2 } from 'iconsax-react-native'
import { reorderWorkout } from '../../functions/functions-index';
import AddSectionButton from './addSectionButton';
import ExerciseItem from './exerciseItem';

export default function SplitSection(props){
    const theme = useTheme()

    const [ isReordering, setIsReordering ] = useState(false)

    const exercises = props.exercises[0] ? props.exercises.map(exercise => (
        <ExerciseItem 
            key={exercise.id}
            id={exercise.id}
            name={exercise.name}
            workoutData={exercise.workoutData}
            workout={props.workout}
            setWorkout={props.setWorkout}
        />
    )) : null

    const handleRename = () => {

    }

    const handleReorder = () => {
        setIsReordering(prevData => !prevData)
    }

    const handleAddWorkout = () => {
        props.navigation.navigate('SelectExercisePage', {
            workoutData: {
                cycleOrder: props.cycleOrder,
                splitOrder: props.splitOrder,
                exercises: props.exercises
            }
        })
    }

    const handleDelete = () => {
        const cycles = props.workout.cycles
        const split = cycles[props.cycleOrder - 1].split
        
        split.splice(props.splitOrder - 1, 1)

        cycles.splice(props.cycleOrder - 1, 1, {
            order: props.cyleOrder,
            split: [
                ...split
            ]
        })

        const reordered = reorderWorkout(cycles)
        console.log(reordered[0].split)

        props.setWorkout({
            cycles: [
                ...reordered
            ]
        })
    }

    const mainBody = (
        <>
            {/* <View
                style={{
                    gap: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                }}
            > */}
                { exercises }
            {/* </View> */}
            <AddSectionButton 
                type='split'
                text='Add Workout'
                onPress={() => {
                    handleAddWorkout()
                }}
            />
        </>
    )

    const draglist = (
        <>
        </>
    )

    return(
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                alignSelf: 'stretch',
                gap: 10,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10
                }}
            >
                <Text>{props.name}</Text>
                <Pressable>
                    <Edit2 size={30} color={theme.colors.onBackground}/>
                </Pressable>
                <Pressable
                    onPress={() => {
                        handleReorder()
                    }}
                >
                    <MaterialIcons name="reorder" size={30} color={isReordering ? theme.colors.primary : theme.colors.onBackground}/>
                </Pressable>
                {
                    props.splitOrder !== 1 &&
                    <Pressable
                        onPress={() => {
                            handleDelete()
                        }}
                    >
                        <MaterialIcons name="delete-forever" size={30} color={theme.colors.onBackground}/>
                    </Pressable>
                }
            </View>
            { mainBody }
        </View>
    )
}