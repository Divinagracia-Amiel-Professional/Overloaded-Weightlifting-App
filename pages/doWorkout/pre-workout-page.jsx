import React, { useState, useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'
import { useTheme, Card } from 'react-native-paper';
import DraggableSortableList from '../../components/do-workout-components/draggable-sortable-list';
import getExercisesFromWorkoutRedux from '../../custom-hooks/getExercisesFromWorkoutRedux';


export default function PreWorkoutPage({navigation}){
    const theme = useTheme()
    const [ data, setParentData ] = useState([])
    console.log(data)

    return(
        <View style={{...mainStyles.bodyContainer,
            backgroundColor: theme.colors.background
            }}>
            <Text></Text>
            <DraggableSortableList 
                data = {data}
                post = {setParentData}
            />
            <Pressable style={{}}
                onPress={() => {
                    navigation.navigate('DoWorkoutPage')
                }}
            >
                <Text>Let's GO!</Text>
            </Pressable>
        </View>
    )
}