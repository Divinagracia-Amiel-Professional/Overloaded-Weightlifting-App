import React from 'react';
import { Text, View, Pressable } from 'react-native';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../styles/style-index'
import DraggableLyrics from '../components/do-workout-components/draggable-sortable-list';
import TestDBComponent from '../components/test-components/test-store';

export default function Planner(){

    return(
        <View style={mainStyles.bodyContainer}>
            <Text style={textStyles.headerText}>Planner</Text>
            <DraggableLyrics />
            <TestDBComponent />
        </View>
    )
}