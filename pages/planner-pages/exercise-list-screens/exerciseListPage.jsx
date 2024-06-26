import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Pressable, ScrollView, FlatList } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../../styles/style-index'
import { getAllExercises } from '../../../functions/functions-index';
import { 
    BackButton, 
} from '../../../components/component-index';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import ExerciseListItem from '../../../components/manage-workout-components/exerciseListItem';

export default function ExerciseListPage({navigation, route}){
    const theme = useTheme()

    const exercisesDB = getAllExercises()
    
    const exercises = [...exercisesDB]
    const sortedByName = exercises.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })

    const RenderItem = ({ item }) => {
        return(
            <ExerciseListItem
                key={item.id}
                item={item}
                navigation={navigation}
            />
        ) 
    }

    return(
        <SafeAreaView
            style={{flex: 1, position: 'relative'}}
        >
            <BackButton navigation={navigation} type='exercise_list' hidden={false}/>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    paddingVertical: 20,
                }}
            >
                <Text
                    style={{
                        ...textStyles.headerText,
                        color: theme.colors.secondary,
                        fontSize: 28
                    }}
                >Exercise List</Text>
            </View>
            <FlashList
                data={sortedByName}
                renderItem={RenderItem}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                estimatedItemSize={100}
                scrollEnabled={true}
            />
        </SafeAreaView>
    )
}