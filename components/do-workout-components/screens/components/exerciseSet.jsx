import React, { useState, useEffect } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
} from '../../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function ExerciseSet(props){
    const theme = props.theme

    return(
      <View
        style={{...mainStyles.doWorkoutScreen.setSection.container,
          backgroundColor: theme.colors.background
        }}
      >
        <Text
          style={{...textStyles.doWorkoutScreen.setText,
            color: theme.colors.secondary
          }}
        >Set {props.currentSet} of {props.setCount}</Text>
      </View>
    )
}