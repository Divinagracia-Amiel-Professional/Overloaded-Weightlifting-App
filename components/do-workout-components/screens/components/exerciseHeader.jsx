import React, { useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
} from '../../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { SheetManager } from 'react-native-actions-sheet'

export default function ExerciseHeader(props){
  const theme = props.theme

  return(
    <View
      style={{...mainStyles.doWorkoutScreen.headerSection.container}}
    >
      <View
        style={{...mainStyles.doWorkoutScreen.headerSection.headerTextContainer}}
      >
        <Text
          style={{...textStyles.doWorkoutScreen.headerText,
            color: theme.colors.secondary
          }}
        >{props.name}</Text>
        <Pressable
            onPress={() => {
              SheetManager.show('exercise-sheet', {
                payload: {
                  exerciseData: props.exerciseData,
                  isActionSheet: true,
                }
              })
            }}
        >
            <Feather name={'info'} size={25} color={theme.colors.secondary} />
        </Pressable>
      </View>
      <View
        style={{...mainStyles.repContainer,
          color: theme.colors.secondary
        }}
      >
        <Text
          style={{...textStyles.doWorkoutScreen.bodyText,
            color: theme.colors.secondary
          }}
        >{props.setCount} sets</Text>

          <Feather name={'x'} size={12} color={theme.colors.secondary} />

        <Text
          style={{...textStyles.doWorkoutScreen.bodyText,
            color: theme.colors.secondary
          }}
        >
         {props.start} {(props.end !== props.start ? `- ${props.end} reps` : 'reps') /*conditional if there is no range*/}
        </Text>
      </View>
    </View>
  )
}