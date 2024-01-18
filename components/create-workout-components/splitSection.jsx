import React, { useState, memo, useEffect } from 'react';
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
import CustomTextInput from '../general/text_input';
import ReorderList from './draggable-list';
import { Gesture } from 'react-native-gesture-handler';

const SplitSection = (props) => {
    const theme = useTheme()

    const [ isReordering, setIsReordering ] = useState(false)

    const [ isRenaming, setIsRenaming ] = useState(false)
    const [ name, setName ] = useState(props.name)

    useEffect(() => {
        setName(props.name)
    }, [props.name])

    const exercises = props.exercises[0] ? props.exercises.map(exercise => {
        console.log(exercise)

        return (
        <ExerciseItem 
            key={exercise.id}
            id={exercise.id}
            name={exercise.name}
            workoutData={exercise.workoutData}
            exerciseData={exercise}
        
            splitOrder={props.splitOrder}
            cycleOrder={props.cycleOrder}
            exerciseOrder={exercise.workoutData.order}
            workout={props.workout}
            setWorkout={props.setWorkout}
        />
    )}) : null

    const handleRename = () => {
        setIsRenaming(prevState => !prevState)

        console.log(name)
    }

    const handleEndRename = (text) => {
        setIsRenaming(prevState => !prevState)

        if(!name.trim()){
            return
        }

        if(name === props.name){
            return
        }

        const previousCycles = props.workout.cycles
        const previousSplit = previousCycles[props.cycleOrder - 1].split[props.splitOrder - 1]

        previousCycles[props.cycleOrder - 1].split[props.splitOrder - 1] = {
            ...previousSplit,
            name: name
        }

        const newCycles = previousCycles

        props.setWorkout({
            cycles: [
                ...newCycles
            ]
        })
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

        // cycles.splice(props.cycleOrder - 1, 1, {
        //     order: props.cyleOrder,
        //     split: [
        //         ...split
        //     ]
        // })

        cycles[props.cycleOrder - 1].split = split

        const reordered = reorderWorkout(cycles)
        console.log(reordered[0].split)

        props.setWorkout({
            cycles: [
                ...reordered
            ]
        })
    }

    const tapReorderList = Gesture.Tap()

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
                { 
                    !isReordering ?                
                    exercises :
                    <ReorderList 
                        data={props.exercises}
                        cycleOrder={props.cycleOrder}
                        splitOrder={props.splitOrder}
                        workout={props.workout}

                        post={props.setWorkout}
                        type='exercise'
                        setScroll={props.setScroll} 
                        onGesture={tapReorderList}        
                    />      
                }
            {/* </View> */}

            {
                !isReordering &&
                <AddSectionButton 
                    type='workout'
                    text='Add Workout'
                    onPress={() => {
                        handleAddWorkout()
                    }}
                />
            }
        </>
    )

    const SplitOptions = (
        <>
            <Pressable
                onPress={() => {
                    handleRename()
                }}
            >
                <Edit2 size={25} color={isRenaming ? theme.colors.primary : theme.colors.onBackground}/>
            </Pressable>
            <Pressable
                onPress={() => {
                    handleReorder()
                }}
            >
                <MaterialIcons name="reorder" size={25} color={isReordering ? theme.colors.primary : theme.colors.onBackground}/>
            </Pressable>
            {
                props.splitArr.length !== 1 &&
                <Pressable
                    onPress={() => {
                        handleDelete()
                    }}
                >
                    <MaterialIcons name="delete-forever" size={25} color={theme.colors.onBackground}/>
                </Pressable>
            }
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
                {!isRenaming ? 
                    <Text>{props.name}</Text> :
                    <CustomTextInput
                        type='underline'
                        value={name}
                        onChangeText={text => {
                            setName(text)
                        }}
                        onEndEditing={text => {
                            handleEndRename(text)
                        }}
                    /> 
                }
                {!isRenaming &&
                    SplitOptions
                } 
            </View>
            { mainBody }
        </View>
    )
}

export default memo(SplitSection)