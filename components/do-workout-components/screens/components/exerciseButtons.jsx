import React, { useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  buttonStyles,
  textStyles,
  listStyles,
  mainStyles,
} from '../../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Next } from 'iconsax-react-native' 

export default function ExerciseButtons(props){
  const theme = props.theme

  return(
    <View
      style={{...mainStyles.doWorkoutScreen.buttonSection.container}}
    >
      <Pressable
        style={{...buttonStyles.doWorkout.done,
          backgroundColor: theme.colors.primary
        }}
      >
        <Feather name="check" size={25} color={theme.colors.background}/>
        <Text
          style={{...buttonStyles.doWorkout.doneText,
            color: theme.colors.background
          }}
        >Done</Text>
      </Pressable>
      <Pressable
        style={{...buttonStyles.doWorkout.skip}}
      >
        <Text
          style={{...buttonStyles.doWorkout.skipText,
            color: theme.colors.secondary
          }}
        >Skip</Text>
        <Next 
          size={30}
          color={theme.colors.secondary}
        />
      </Pressable>  
    </View>
  )
}