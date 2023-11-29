import React, { useState } from 'react';
import { Text, View, Pressable, ImageBackground } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles,
    cardStyles,
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { FontAwesome5 } from '@expo/vector-icons';
import Gradient from '../general/gradient'
import { Placeholder2 } from '../../constants/images';
import { Rating } from 'react-native-ratings';
import { RatingImgGray } from '../../constants/images';
import WorkoutOption from './optionItem';
import Animated from 'react-native-reanimated';

export default function OptionsContainer(props){
    let zIndex = 0
    const theme = useTheme()
    const options = props.optionsData.map(option => {
        zIndex--
        return(
            <WorkoutOption 
            key = {option.label}
            option = {option.label}
            icon = {option.icon}
            onPress = {option.onPress}
            zIndex = {zIndex}
        />)
    })

    return(
        <Animated.View
           style={{...cardStyles.manageWorkoutCard.optionsContainer}} 
        >
            {options}
        </Animated.View>
    )
}

