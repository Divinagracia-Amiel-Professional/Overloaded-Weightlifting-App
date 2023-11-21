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

export default function ExerciseHeader(props){
  const theme = props.theme

  return(
    <View>
      <View>
        <Text>{props.name}</Text>
        <Pressable
                    
        >
            <Feather name={'info'} size={15} color={theme.colors.secondary} />
        </Pressable>
      </View>
      <View
          
      >
        <Text>{props.start}</Text>
          <Feather name={'x'} size={12} color={theme.colors.secondary} />
        <Text>
         {props.start} {(props.end !== props.start ? `- ${props.end} reps` : 'reps') /*conditional if there is no range*/}
        </Text>
      </View>
    </View>
  )
  
}