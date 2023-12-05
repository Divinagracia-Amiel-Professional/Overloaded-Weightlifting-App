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
import AddSectionButton from './addSectionButton';
import SplitSection from './splitSection';
import { textSizes } from '../../constants/theme';
import { reorderWorkout } from '../../functions/functions-index'; //only takes the cycle array

export default function CycleSection(props){
    const theme = useTheme()

    const splits = props.split.map(split => (
        <SplitSection 
            key={split.order}
            name={split.name}
            workout={props.workout}
            setWorkout={props.setWorkout}
            cycleOrder={props.order}
            splitOrder={split.order}
            exercises={split.exercises[0] ? split.exercises : []}
        />
    ))

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

    return(
        <View
            style={{...mainStyles.fromScratch.cycleSection.container}}
        >
            <View
                style={{...mainStyles.fromScratch.cycleSection.headerContainer}}
            >
                <Text>Cycle {props.order}</Text>
                { 
                    props.order !== 1 &&
                    <Pressable
                        onPress={() => {
                            handleDelete()
                        }}
                    >
                        <MaterialIcons name="delete-forever" size={30} color={theme.colors.onBackground}/>
                    </Pressable>
                }
            </View>
            <View
                style={{...mainStyles.fromScratch.cycleSection.bodyContainer}}
            >
                {splits}
                <AddSectionButton 
                    type='split'
                    text='Add Split'
                    onPress={() => {
                        handleAdd() 
                    }}
                />
            </View>
        </View>
    )
}

const initSplit = {
    name: 'Split 1',
    order: 1,
    exercises: [

    ]
}