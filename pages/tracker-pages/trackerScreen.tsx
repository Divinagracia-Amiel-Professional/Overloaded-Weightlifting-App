import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, ScrollView, StyleSheet } from 'react-native';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'
import TestDBComponent from '../../components/test-components/test-store';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { useTheme } from 'react-native-paper';
import { ButtonWithIcon } from '../../components/component-index';
import { resetRecords } from '../../redux/slices/CurrentUserSlice';
import { FontAwesome5 } from '@expo/vector-icons'

const initSelectedExerise = {
    id: null,
    name: 'Select Exercise First',
    records: [

    ]
}

export default function TrackerScreen(props){ //takes in navigation and route
    const userRecords = useSelector((state: RootState) => state.currentUser.records)
    const theme = useTheme()
    const dispatch = useDispatch<AppDispatch>()

    const [ selectedExercise, setSelectedExercise ] = useState(initSelectedExerise)

    const routeParams = props.route.params ? props.route.params : null

    useEffect(() => {
        if(routeParams){
            const exerciseRecord = routeParams.exerciseRecord
            setSelectedExercise({
                id: exerciseRecord.id,
                name: exerciseRecord.name,
                records: exerciseRecord.records
            })
        }
    }, [ routeParams ])

    const handleGoToList = () => {
        props.navigation.navigate('SelectRecordPage', {
            userRecords: userRecords
        })
    }

    return(
        <View style={{
            ...style.container,
            backgroundColor: theme.colors.background
        }}>
            <Pressable
                style={{
                    ...style.headerContainer
                }}
                onPress={() => {
                    handleGoToList()
                }}
            >
                <Text
                    style={{
                        ...textStyles.headerText,
                        fontFamily: 'Stem-Medium',
                        color: theme.colors.secondary,
                        fontSize: 28
                    }}
                >{selectedExercise.name}</Text>
                <FontAwesome5 name='angle-right' size={30} color={theme.colors.secondary}/>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        gap: 10,
        position: 'relative'
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 15,
    }
})