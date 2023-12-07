import React, { useState, useReducer } from 'react';
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

const workoutReducer = (state, action) => {
    switch (action.type) {
      case "ADD_CYCLE":
        return state.map(prevState => {
            
        })
      default:
        return state;
    }
};

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

    const [ work, dispatch ] = useReducer(workoutReducer, initCycle)

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