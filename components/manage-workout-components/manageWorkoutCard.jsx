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
import WorkoutSection from './workoutSection';
import OptionsContainer from './optionsContainer';
import { getCurrentlyUsedWorkouts } from '../../functions/functions-index';

export default function ManageWorkoutCard(props){
    // const [ hasOptions, setHasOptions ] = useState(false)
    // const currentlyUsed = getCurrentlyUsedWorkouts()
    const state = props.id === getCurrentlyUsedWorkouts()
    console.log(state)

    const theme = useTheme()

    return(
        <View
            style={{...cardStyles.manageWorkoutCard.container,
                backgroundColor: theme.colors.tertiaryContainer,
            }}
        >
            <WorkoutSection 
                key={props.id}
                id={props.id}
                name={props.name}
                difficulty={props.difficulty}
                focus={props.focus}
                state={state}
            />
            
            {/* setHasOptions={setHasOptions} */}
            
            {/* {hasOptions && 
                <OptionsContainer
                        optionsData={props.optionsData}
                />
            }  */}
        </View>
    )
}