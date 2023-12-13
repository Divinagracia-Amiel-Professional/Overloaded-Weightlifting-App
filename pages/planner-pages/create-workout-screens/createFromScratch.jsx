import React, { useState, useReducer, useEffect } from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Add, CalendarEdit } from 'iconsax-react-native'
import { AddSectionButton, CycleSection, BasicInfoSection, BackButton } from '../../../components/component-index';
import { textSizes } from '../../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { reorderWorkout } from '../../../functions/functions-index';

export default function CreateFromScratch({navigation, route}){
    const theme = useTheme()
    const [ basicInfo , setBasicInfo ] = useState({
        name: '',
        difficulty: 3,
        focus: '',
    })
    const [ workout, setWorkout ] = useState({
        ...initCycle
    })

    const routeParams = route.params ? route.params.workoutData : ''

    const updateExercises = () => {
        if(routeParams){
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

            console.log(previousWorkout.cycles[cycleOrder - 1].split[splitOrder - 1].exercises)

            setWorkout({...previousWorkout})
        }
    }

    useEffect(() => {
        updateExercises()
    }, [routeParams])

    const cycles = workout.cycles.map(cycle => (
        <CycleSection
            key={cycle.order}
            order={cycle.order}
            split={cycle.split}
            workout={workout}
            setWorkout={setWorkout}
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

    return(
        <SafeAreaView
            style={{flex: 1, position: 'relative'}}
        >
            <BackButton type='doWorkout' navigation={navigation} />
            <ScrollView
            style={{...mainStyles.PremadeScrollView,
                paddingHorizontal: 0,
            }}
            contentContainerStyle={{...mainStyles.PremadeScrollViewContainerStyle,
                gap: 0,
                
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
                        focus: basicInfo.focus
                    }}
                    setBasicInfo={setBasicInfo}
                />

                {cycles}

                <AddSectionButton
                    type='cycle'
                    text='Add Cycle'
                    onPress={() => {
                        handleAddCycle()
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const initCycle = {
    cycles: [
        {
            order: 1,
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
}