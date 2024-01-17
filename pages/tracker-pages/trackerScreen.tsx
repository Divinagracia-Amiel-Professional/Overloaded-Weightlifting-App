import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, ScrollView, StyleSheet } from 'react-native';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'
import { DataTable } from 'react-native-paper';
import TestDBComponent from '../../components/test-components/test-store';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { useTheme } from 'react-native-paper';
import { ButtonWithIcon } from '../../components/component-index';
import { resetRecords } from '../../redux/slices/CurrentUserSlice';
import { FontAwesome5 } from '@expo/vector-icons'
import { getMDYFormat, get12HFormat } from '../../functions/functions-index';

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

    //Exercise Object Selected By User
    const [ selectedExercise, setSelectedExercise ] = useState(initSelectedExerise)

    //---- Table States, Pagination
    const [ page, setPage ] = useState(0)
    const [ numberOfItemsPerPageList ] = useState([ 1, 2, 3, 4 ])
    const [ itemsPerPage, onItemsPerPageChange ] = useState(numberOfItemsPerPageList[0])

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, selectedExercise.records.length);

    useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);
    //-----

    const routeParams = props.route.params ? props.route.params : null

    useEffect(() => {
        if(routeParams){
            const exerciseRecord = routeParams.exerciseRecord
            setSelectedExercise({
                id: exerciseRecord.id,
                name: exerciseRecord.name,
                records: exerciseRecord.records
            })
            setPage(0)
        }
    }, [ routeParams ])

    const handleGoToList = () => {
        props.navigation.navigate('SelectRecordPage', {
            userRecords: userRecords
        })
    }

    const RecordDataTable = (
        <View
            style={{
                ...style.DataTableContainer
            }}
        >
            <DataTable
                style={{
                    ...style.DataTableContainer,
                }}
            >
                {
                    selectedExercise.records.slice(from, to).map(record => {
                        const date = getMDYFormat(record.date_achieved)
                        const repRangeString = `${record.set_count} x ${record.rep_start} ${(record.rep_end !== record.rep_start ? `- ${record.rep_end} reps` : 'reps')}`

                        return(
                            <>
                            <DataTable.Header
                                key={record.id + 'a'}
                            >
                                <DataTable.Title
                                    textStyle={{fontSize: 12}} 
                                >
                                    {date}
                                </DataTable.Title>
                                <DataTable.Title
                                    textStyle={{fontSize: 12}} 
                                >
                                    {repRangeString}
                                </DataTable.Title>
                            </DataTable.Header>
                            <DataTable.Header
                                key={record.id + 'b'}
                            >
                                <DataTable.Title>Set</DataTable.Title>
                                <DataTable.Title>Time</DataTable.Title>
                                <DataTable.Title numeric>Wt(kg)</DataTable.Title>
                                <DataTable.Title numeric>Reps</DataTable.Title>
                                <DataTable.Title numeric>Failed</DataTable.Title>
                            </DataTable.Header>
                            {
                                record.sets.map(set => {
                                    const hour = set.date_achieved.slice(11, 13)
                                    const minute = set.date_achieved.slice(14, 16)
                                    const reformmatedDate = get12HFormat(hour, minute)

                                    return (
                                        <DataTable.Row
                                            key={set.set}
                                        >
                                            <DataTable.Cell>{set.set}</DataTable.Cell>
                                            <DataTable.Cell>{reformmatedDate}</DataTable.Cell>
                                            <DataTable.Cell numeric>{set.weight}</DataTable.Cell>
                                            <DataTable.Cell numeric>{set.reps}</DataTable.Cell>
                                            <DataTable.Cell numeric>{JSON.stringify(set.isFailed)}</DataTable.Cell>
                                        </DataTable.Row>
                                    )
                                })
                            }
                            </>
                        )
                    })
                }
                <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.ceil(selectedExercise.records.length / itemsPerPage)}
                    onPageChange={page => setPage(page)}
                    label={`${from + 1}-${to} of ${selectedExercise.records.length}`}
                    showFastPaginationControls
                    numberOfItemsPerPageList={numberOfItemsPerPageList}
                    numberOfItemsPerPage={itemsPerPage}
                    onItemsPerPageChange={onItemsPerPageChange}
                    selectPageDropdownLabel={'Rows per page'}
                />
            </DataTable>
        </View>
    )

    return(
        <View style={{
            ...style.container,
            backgroundColor: theme.colors.background,
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
            {
                selectedExercise.id ? 
                RecordDataTable :
                <Text>No Records to Show</Text> 
            }
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 0,
        gap: 10,
        position: 'relative',
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 15,
    },
    DataTableContainer: {
       alignSelf: 'stretch'
    }
})