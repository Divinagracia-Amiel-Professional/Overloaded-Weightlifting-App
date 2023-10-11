import React from 'react';
import { Text, View, Pressable } from 'react-native';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../styles/style-index'

export default function Tracker(){
    return(
        <View style={mainStyles.bodyContainer}>
            <Text style={textStyles.headerText}>Planner</Text>
        </View>
    )
}