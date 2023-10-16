import React from 'react';
import { Text, View, Pressable } from 'react-native';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../styles/style-index'

export default function Settings(){
    return(
        <View style={mainStyles.bodyContainer}>
            <Text style={textStyles.headerText}>Settings</Text>
        </View>
    )
}