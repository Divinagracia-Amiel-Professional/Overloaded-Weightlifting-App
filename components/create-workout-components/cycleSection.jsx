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
import AddSectionButton from './addSectionButton';
import SplitSection from './splitSection';
import ReorderList from './draggable-list';
import { textSizes } from '../../constants/theme';
import { 
    reorderWorkout,                     //only takes the cycle array
    formatData as formatForReorder
} from '../../functions/functions-index'; 
import { Gesture } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';

const CycleSection = (props) => {
    const theme = useTheme()
    
    const [ isReordering, setIsReordering ] = useState(false)
    // const [ reorderingData, setReorderingData ] = useState(formatForReorder(props.split, 'split'))

    // useEffect(() => {
    //     setReorderingData(formatForReorder(props.split, 'split'))
    // }, [props.workout])


    const splits = props.split.map(split => (
        <SplitSection 
            key={split.order}
            name={split.name}
            splitArr={props.split}
            workout={props.workout}
            setWorkout={props.setWorkout}
            cycleOrder={props.order}
            splitOrder={split.order}
            exercises={split.exercises[0] ? split.exercises : []}
            navigation={props.navigation}
            setScroll={props.setScroll}
        />
    ))

    const handleReorder = () => {
        setIsReordering(prevData => !prevData)

        // if(isReordering){  
        //     const newOrder = reorderingData.map(item => ({
        //         ...item.data
        //     }))

        //     const cycles = props.workout.cycles
        //     console.log(cycles)

        //     cycles[props.order - 1].split = newOrder

        //     const updatedCycle = cycles

        //     const resetOrder = reorderWorkout(updatedCycle)

        //     props.setWorkout({
        //         cycles: [
        //             ...resetOrder
        //         ]
        //     })
        // }
    }

    const handleAdd = () => {
        const data = props.workout.cycles
        const splitLength = data[props.order - 1].split.length
        data.splice(props.order - 1, 1, {
            order: props.order,
            split: [
                ...data[props.order - 1].split,
                {
                    name: `Split ${data[props.order - 1].split[splitLength - 1].order + 1}`,
                    order: data[props.order - 1].split[splitLength - 1].order + 1,
                    exercises: []
                }
            ]
        })

        const reordered = reorderWorkout(data)

        props.setWorkout({
            cycles: [
                ...reordered
            ]
        })
    }

    const handleDelete = () => {
        const data = props.workout.cycles
        data.splice(props.order - 1, 1)

        const reordered = reorderWorkout(data)

        props.setWorkout({
            cycles: [
                ...reordered
            ]
        })
    } 

    // const stopScroll = () => {
    //     props.setScroll(false)
    //     console.log('start')
    // }

    // const toScroll = () => {
    //     props.setScroll(true)
    //     console.log('end')
    // }

    const tapReorderList = Gesture.Pan()
    .onStart(() => {
        // runOnJS(stopScroll)()
    })
    .onEnd(() => {
        // runOnJS(toScroll)()
    })

    const mainBody = (
        <>
            <View
                style={{...mainStyles.fromScratch.cycleSection.bodyContainer}}
            >
                { splits } 
                <AddSectionButton 
                    type='split'
                    text='Add Split'
                    onPress={() => {
                        handleAdd() 
                    }}
                />
            </View>
        </>
    )

    return(
        <View
            style={{...mainStyles.fromScratch.cycleSection.container}}
        >
            <View
                style={{...mainStyles.fromScratch.cycleSection.headerContainer}}
            >
                <Text>Cycle {props.order}</Text>
                <Pressable
                    onPress={() => {
                        handleReorder()
                    }}
                >
                    <MaterialIcons name="reorder" size={25} color={isReordering ? theme.colors.primary : theme.colors.onBackground}/>
                </Pressable>
                { 
                    props.order !== 1 &&
                    <Pressable
                        onPress={() => {
                            handleDelete()
                        }}
                    >
                        <MaterialIcons name="delete-forever" size={25} color={theme.colors.onBackground}/>
                    </Pressable>
                }
            </View>
            { 
                !isReordering ?
                mainBody : 
                <ReorderList 
                    data={props.split}
                    cycleOrder={props.order}
                    workout={props.workout}

                    post={props.setWorkout}
                    type='split'
                    setScroll={props.setScroll} 
                    onGesture={tapReorderList}        
                /> 
            }
        </View>
    )
}

const initSplit = {
    name: 'Split 1',
    order: 1,
    exercises: [

    ]
}

export default memo(CycleSection)