import React, { useState, useRef } from 'react';
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
    const workoutData = route.params.workoutData

    const exercisesWithAdditionalAttributes = exercisesDB.map(exercise => ({
        ...exercise,
        isSelected: false,
    }))
    console.log(exercisesDB[0])

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
                name={item.name}
                isSelected={item.isSelected}  
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
                data={exercisesWithAdditionalAttributes}
                renderItem={RenderItem}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                estimatedItemSize={100}
                scrollEnabled={true}
            />
            
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