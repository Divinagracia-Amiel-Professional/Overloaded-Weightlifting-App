import React, { useEffect, useState } from 'react';
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
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function WorkoutOption(props){
    const theme = useTheme()

    return(
        <Animated.View
            // entering={FadeInUp}
            // exiting={FadeInDown}
            style={{...cardStyles.manageWorkoutCard.optionsItem,
            backgroundColor: theme.colors.tertiaryContainer,
            zIndex: props.zIndex
            }}
        >
            <Pressable
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignSelf: 'stretch',
                }}
            >
                <Text
                    style={{...textStyles.secondaryHeaderText}}
                >{props.option}</Text>
            </Pressable>
        </Animated.View>
    )
}