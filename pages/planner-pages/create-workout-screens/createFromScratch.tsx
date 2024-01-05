import React, { useState, useReducer, useEffect } from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { Snackbar, useTheme, Portal } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Add, CalendarEdit, Edit2 } from 'iconsax-react-native'
import { 
    AddSectionButton, 
    CycleSection, 
    BasicInfoSection, 
    BackButton 
} from '../../../components/component-index';
import { textSizes } from '../../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
    reorderWorkout,
    formatData as formatForReorder,
    checkIfExerciseEmpty,
    checkBasicInfo,
    getUserWorkouts,
    toHash
} from '../../../functions/functions-index';
import ReorderList from '../../../components/create-workout-components/draggable-list';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import { addWorkout } from '../../../redux/slices/CurrentUserSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';

const initCycle = {
    cycles: [
        {
            order: 1,
            split: [
                {
                    name: 'Split 1',
                    order: 1,
                    exercises: []
                }
            ]
        }
    ]
}


export default function CreateFromScratch({navigation, route}){
    const theme = useTheme()
    const userWorkouts = getUserWorkouts()
    const dispatch = useDispatch<AppDispatch>()

    const [ basicInfo , setBasicInfo ] = useState({
        name: '',
        difficulty: 3,
        focus: '',
        description: '',
    })
    const [ workout, setWorkout ] = useState({
        ...initCycle
    })

    const [ scroll, setScroll ] = useState(true)

    console.log(scroll)

    const [ reorderingData, setReorderingData ] = useState(workout.cycles)
    const [ isReordering, setIsReordering ] = useState(false)

    const [ isSnackBarVisible, setIsSnackBarVisible ] = useState(false)
    const [ snackBarMessage, setSnackBarMessage ] = useState('')

    useEffect(() => {
        setReorderingData(workout.cycles)
    }, [workout])

    const routeParams = route.params ? route.params.workoutData : ''
    const isEdit = route.params ? route.params.isEdit : false

    const updateWorkout = () => { //function on how to update workout whether it is from edit workout page or from select exercises page
        if(routeParams){
            if(!isEdit){
                updateExercises()
            }
            else{
                getToEditData()
            }
        }
    }

    const updateExercises = () => { //function to update exercises in workout if user is from select exercises page
        const { cycleOrder, splitOrder, exercises } = route.params.workoutData
        const previousWorkout = workout 
        let previousExercises = previousWorkout.cycles[cycleOrder - 1].split[splitOrder - 1].exercises
        const newExercises = exercises.filter(exercise => {
            return !previousExercises.some(prev => prev.id === exercise.id)
        })

        let newExercisesFormatted 

        let count = 0
        newExercisesFormatted = newExercises.map(exercise => {
        count++
            return({
                id: exercise.id,
                name: exercise.name,
                workoutData: {
                    order: count,
                    rep_end: 8,
                    rep_start: 6,
                    rest_increment: 30,
                    rest_initial: 60,
                    set_count: 3
                }
            })
        })

        // if(previousExercises >= exercises){
            previousExercises = previousExercises.filter(prevExercise => {
                return exercises.some(exercise => exercise.id === prevExercise.id)
            })
        // }

        previousWorkout.cycles[cycleOrder - 1].split[splitOrder - 1].exercises = [ 
            ...previousExercises,
            ...newExercisesFormatted
        ]

        const reordered = reorderWorkout(previousWorkout.cycles)

        console.log(reordered[cycleOrder - 1].split[splitOrder - 1].exercises)

        setWorkout({
            cycles: [
                ...reordered
            ]
        })
    }

    const getToEditData = () => {
        console.log('edit')   
    }

    useEffect(() => {
        updateWorkout()
    }, [routeParams, isEdit])

    const cycles = workout.cycles.map(cycle => (
        <CycleSection
            key={cycle.order}
            order={cycle.order}
            split={cycle.split}
            cycle={cycle}
            workout={workout}
            setWorkout={setWorkout}
            setScroll={setScroll}
            navigation={navigation}
        />
    ))

    const handleAddCycle = () => {
        setWorkout(prevState => ({
            cycles: [
                ...prevState.cycles,
                {
                    order: prevState.cycles[prevState.cycles.length - 1].order + 1,
                    split: [
                        {
                            name: 'Split 1',
                            order: 1,
                            exercises: [
        
                            ]
                        }
                    ]
                }
            ]
        }))
    }

    const handleReorder = () => {
        setIsReordering(prevData => !prevData)
        
        if(isReordering){ 
            console.log(reorderingData)   
            const resetOrder = reorderWorkout(reorderingData)

            setWorkout({
                cycles: [
                    ...resetOrder
                ]
            })
        }
    }

    const handleDone = () => {
        const checkInfo = checkBasicInfo(basicInfo)
        const workout_id = toHash(basicInfo.name)

        if(isReordering){
            setIsSnackBarVisible(true)
            setSnackBarMessage('Finish Reordering Cycle First')
            return
        }   

        if(checkInfo.hasError){
            setSnackBarMessage(prevState => prevState.concat(checkInfo.message))
        }

        if(checkIfExerciseEmpty(workout.cycles).checkExercises){
            setSnackBarMessage(prevState => prevState.concat(genericEmptyMessage.concat(getEmptySplits())))
        }

        if(checkIfExerciseEmpty(workout.cycles).checkExercises || checkInfo.hasError){
            setIsSnackBarVisible(true)
            return
        }

        const doesIdExist = userWorkouts.some(userWorkout => userWorkout.id === workout_id)

        if(doesIdExist){
            setSnackBarMessage("Workout with that name already exists. Please rename your workout")
            setIsSnackBarVisible(true)
            return
        }

        const reformattedCycles = workout.cycles.map(cycle => ({
            ...cycle,
            split: cycle.split.map(split => ({
                ...split,
                exercises: split.exercises.map(exercise => ({
                    exercise_id: exercise.id,
                    workout_data: {
                        ...exercise.workoutData
                    }
                }))
            }))
        }))

        const reformattedWorkout = {
            ...basicInfo,
            id: workout_id,
            latest_state: {
                is_completed: false,
                date_used: '',
                cycle: 1,
                split: 1,
                name: reformattedCycles[0].split[0].name
            },
            cycles: [
                ...reformattedCycles
            ]
        }

        dispatch(addWorkout(reformattedWorkout))
        navigation.navigate('Navbar')
    }

    const getEmptySplits = () => {
        const emptySplits = checkIfExerciseEmpty(workout.cycles).filtered
        
        const messages = emptySplits.map(item => {
            const splits = item.emptySplits.map(split => {
                return `- ${split.name} `
            })

            return `Cycle ${item.cycle}: \n${splits.join(`\n`)}`
        })

        const combineMessages = messages.join(`\n`)

        return combineMessages
    }

    const genericEmptyMessage = `Splits should have at least 1 exercise. A split has no exercises.\nat: \n`
    const tapReorderList = Gesture.Tap()  

    const WorkoutBody = (
        <View
            style={{
                alignSelf: 'stretch',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignSelf: 'stretch',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10
                }}
            >
            <Text>{basicInfo.name ? basicInfo.name : 'Unnamed Workout'}</Text>
            <Pressable
                onPress={() => {
                    handleReorder()
                }}
            >
                <MaterialIcons name="reorder" size={30} color={isReordering ? theme.colors.primary : theme.colors.onBackground}/>
            </Pressable> 
            </View>

            {
                !isReordering ?
                cycles :
                    <ReorderList 
                        data={reorderingData}
                        post={setReorderingData}
                        type='cycle'
                        setScroll={setScroll}
                        onGesture={tapReorderList}      
                    />
            }

        </View> 
    )

    return(
        <SafeAreaView
            style={{flex: 1, position: 'relative'}}
        >
            <BackButton type='doWorkout' navigation={navigation} />
            <ScrollView
                scrollEnabled={scroll}
                style={{...mainStyles.PremadeScrollView,
                    paddingHorizontal: 0,
                }}
                contentContainerStyle={{...mainStyles.PremadeScrollViewContainerStyle,
                    gap: 0,
                    paddingBottom: 100,
                }}
            >
                <View
                    style={{...mainStyles.fromScratch.headerContainer,
                        backgroundColor: theme.colors.primary,
                    }}
                >
                    <Text
                        style={{...textStyles.headerText,
                            color: 'white',
                            fontSize: textSizes.xxLarge
                        }}
                    >Create Workout From Scratch</Text>
                </View>
                <BasicInfoSection
                    data={{
                        name: basicInfo.name,
                        difficulty: basicInfo.difficulty,
                        focus: basicInfo.focus,
                        description: basicInfo.description
                    }}
                    setBasicInfo={setBasicInfo}
                />

                { WorkoutBody }

                {
                    !isReordering &&
                    <AddSectionButton
                        type='cycle'
                        text='Add Cycle'
                        onPress={() => {
                            handleAddCycle()
                        }}
                    />
                }
            </ScrollView>
            <View
                style={{...buttonStyles.bottomAbsoluteContainer,
                    backgroundColor: `${theme.colors.secondary}`,
                    borderColor: theme.colors.customLightGray
                    }}
            >
                <Pressable style={{...buttonStyles.bottomAbsoluteButton,
                    backgroundColor: theme.colors.background,
                    }}
                    onPress={() => {
                        handleDone()
                    }}
                >
                    <Text
                        style={{...buttonStyles.bottomAbsoluteButtonText,
                            color: theme.colors.secondary
                            }}
                    >Save Workout</Text>
                </Pressable>
            </View>
            <Snackbar
              visible={isSnackBarVisible}
              onDismiss={() => {
                setSnackBarMessage('')
                setIsSnackBarVisible(false)
              }}
              action={{
                label: 'OK'
              }}
            >
                {snackBarMessage}
            </Snackbar>
        </SafeAreaView>
    )
}

const SnackBarComponent = (props) => {
    const theme = useTheme()

    return(
        <Snackbar
            visible={props.visible}
            onDismiss={props.onDismiss}
            action={props.action}
        >
            {props.message}
        </Snackbar>
    )
}