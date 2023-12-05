import React, { useState } from 'react';
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
import { AddSectionButton, CycleSection, BasicInfoSection } from '../../../components/component-index';
import { textSizes } from '../../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CreateFromScratch(props){
    const theme = useTheme()
    const [ basicInfo , setBasicInfo ] = useState({
        name: '',
        difficulty: 3,
        focus: '',
    })
    const [ workout, setWorkout ] = useState({
        ...initCycle
    })

    const cycles = workout.cycles.map(cycle => (
        <CycleSection
            key={cycle.order}
            order={cycle.order}
            split={cycle.split}
            workout={workout}
            setWorkout={setWorkout}
        />
    ))

    return(
        <SafeAreaView
            style={{flex: 1}}
        >
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