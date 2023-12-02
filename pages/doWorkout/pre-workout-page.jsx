import React, { useState, useEffect } from 'react'
import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import {
    mainStyles,
    textStyles,
    buttonStyles,
    imageStyles
} from '../../styles/style-index'
import { useTheme, Card } from 'react-native-paper';
import DraggableSortableList from '../../components/do-workout-components/draggable-sortable-list';
import getExercisesFromWorkoutRedux from '../../custom-hooks/getExercisesFromWorkoutRedux';
import { Placeholder as PlaceholderImage } from '../../constants/images';
import setWorkoutName from '../../functions/setWorkoutName';

export default function PreWorkoutPage({navigation}){
    const theme = useTheme()

    const currentWorkout = {
        id: 'divisplitID',
        cycle: 2,
        split: {
            order: 3,
            name: 'Push Day',
        },
    }
    const [ data, setParentData ] = useState([])
    // console.log(data)
    // for(let i=0; i<data.length; i++){
    //     console.log(data[i].id + ' ' + data[i].item.exercise_obj.name)
    //     console.log(data[i].item.workout_data)
    // }
    
    return(
        <View style={{...mainStyles.preWorkoutContainer,
            backgroundColor: theme.colors.background
            }}
            >
            <Image 
                style={{...imageStyles.placeholder, 
                    borderColor: theme.colors.onBackground
                }}
                source={PlaceholderImage}
            />
            <View 
                style={mainStyles.preWorkoutHeaderContainer}
            >
                {
                    currentWorkout ? 
                    <Text
                        style={{...textStyles.preWorkoutPage.headerText,
                            color: theme.colors.secondary
                        }}
                    >{setWorkoutName(currentWorkout.cycle, currentWorkout.split.name)}</Text> : 
                    'No Workout'
                }
                {
                    data.length ? 
                    <Text
                        style={{...textStyles.preWorkoutPage.bodyText,
                            color: theme.colors.secondary
                        }}
                    >{data.length} exercises</Text> :
                    ''
                }
            </View>
            <ScrollView
                style={{alignSelf: 'stretch'}}
            >
                <DraggableSortableList
                    currentWorkout = {currentWorkout}
                    data = {data}
                    post = {setParentData}
                />
            </ScrollView>
            <View
                style={{...buttonStyles.bottomAbsoluteContainer,
                    backgroundColor: theme.colors.background,
                    borderColor: theme.colors.customLightGray
                    }}
            >
                <Pressable style={{...buttonStyles.bottomAbsoluteButton,
                    backgroundColor: theme.colors.primary
                    }}
                    onPress={() => {
                        navigation.navigate('DoWorkoutPage', {
                            data: data
                        })
                    }}
                >
                    <Text
                        style={{...buttonStyles.bottomAbsoluteButtonText,
                            color: theme.colors.background
                            }}
                    >Let's GO!</Text>
                </Pressable>
            </View>  
        </View>
    )
}