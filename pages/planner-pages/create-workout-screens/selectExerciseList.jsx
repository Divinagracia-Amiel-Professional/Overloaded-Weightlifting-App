import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Pressable, ScrollView, FlatList } from 'react-native';
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
import { getAllExercises } from '../../../functions/functions-index';
import { 
    BackButton, 
    SelectExerciseListItem 
} from '../../../components/component-index';
import { textSizes } from '../../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';

export default function SelectExercisePage({navigation, route}){
    const theme = useTheme()

    const exercisesDB = getAllExercises()

    const dataFromSplit = route.params.workoutData ? route.params.workoutData : []

    const exercisesWithAdditionalAttributes = exercisesDB.map(exercise => {
        let isSelected = false

        if(dataFromSplit.exercises[0]){
            isSelected = dataFromSplit.exercises.some(fromSplitExercise => fromSplitExercise.id === exercise.id)
        }
        
        return({
            ...exercise,
            isSelected: isSelected
        })
    })

    const [ selectedExercises, setSelectedExercises ] = useState(exercisesWithAdditionalAttributes)
   

    const handleDone = () => {
        const filtered = selectedExercises.filter(exercise => exercise.isSelected === true)
        
        navigation.navigate('CreateFromScratch', {
            isEdit: false,
            workoutData: {
                cycleOrder: dataFromSplit.cycleOrder,
                splitOrder: dataFromSplit.splitOrder,
                exercises: filtered
            }
        })
    }

    const RenderItem = ({ item }) => {
        // const lastItemId = useRef(item.id);
        // const [ selected, setSelected ] = useState(item.isSelected);
        // if (item.id !== lastItemId.current) {
        //     lastItemId.current = item.id;
        //     setSelected(item.isSelected);
        // }
        
        return(
            <SelectExerciseListItem
                key={item.id}
                item={item}
                isSelected={item.isSelected}
                exercises={selectedExercises}
                setSelected={setSelectedExercises}
            />
        ) 
    }

    return(
        <SafeAreaView
            style={{flex: 1, position: 'relative'}}
        >
            <BackButton navigation={navigation} type='select_exercise_list' hidden={true} params={{}}/>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    paddingVertical: 20,
                }}
            >
                <Text>Select Exercises</Text>
            </View>
            <FlashList
                data={selectedExercises}
                renderItem={RenderItem}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                estimatedItemSize={100}
                scrollEnabled={true}
            />
            <View
                style={{...buttonStyles.bottomAbsoluteContainer,
                    backgroundColor: theme.colors.background,
                    borderColor: theme.colors.customLightGray,
                    flexDirection: 'row'
                    }}
            >
                <Pressable style={{...buttonStyles.bottomAbsoluteButton,
                    backgroundColor: theme.colors.primary
                    }}
                    onPress={() => {
                        handleDone()
                    }}
                >
                    <Text
                        style={{...buttonStyles.bottomAbsoluteButtonText,
                            color: theme.colors.background
                            }}
                    >Done</Text>
                </Pressable>
                <Pressable 
                    style={{...buttonStyles.bottomAbsoluteButton,
                        backgroundColor: 'transparent',
                        borderWidth: 1,
                        borderColor: theme.colors.secondary
                    }}
                    onPress={() => {
                        setSelectedExercises(exercisesWithAdditionalAttributes)
                    }}
                >
                    <Text
                        style={{...buttonStyles.bottomAbsoluteButtonText,
                            color: theme.colors.secondary
                            }}
                    >Reset</Text>
                </Pressable>
            </View>
            {/* <ScrollView
            style={{...mainStyles.PremadeScrollView,
                paddingHorizontal: 0,
            }}
            contentContainerStyle={{...mainStyles.PremadeScrollViewContainerStyle,
                gap: 0,
                
            }}
            >
                
            </ScrollView> */}
        </SafeAreaView>
    )
}