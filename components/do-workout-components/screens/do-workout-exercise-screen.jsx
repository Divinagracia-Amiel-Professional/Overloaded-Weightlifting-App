import React, { useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
  imageStyles
} from '../../../styles/style-index'
import { 
    ExerciseButtons,
    ExerciseHeader,
    ExerciseRecords,
    ExerciseSet
} from './components/doWorkoutComponentIndex'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Placeholder as PlaceholderImage } from '../../../constants/images'

export default function ExerciseScreen(props){
 
    const theme = useTheme()

    return(
        <View
            style={{...mainStyles.doWorkoutScreen.bodyContainer,
                backgroundColor: theme.colors.background
            }}
        >
            <Image 
                style={{...imageStyles.doWorkout,
                    
                }}
                source={PlaceholderImage}
            />
            <ExerciseHeader
                theme={theme}
                name={'Deadlift'}
                setCount={4}
                start={4}
                end={4}
            />
            <ExerciseSet 
                theme={theme}
                currentSet={1}
                setCount={4}
            />
            <ExerciseRecords
                theme={theme}
                data={props.recordData}
            />
            <ExerciseButtons
                theme={theme}
            />

            {/* <ExerciseTimer
                theme={theme}
                time={30}
            /> */}
        </View>
    )
}