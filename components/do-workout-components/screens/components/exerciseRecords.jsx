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

export default function ExerciseRecords(props){
  const theme = props.theme
  const data = props.data
  const records = data.map(item => { 
    const Record = 
      <View>
        <Text>Have Data</Text>
      </View>; 

    return(
      <View
        key={item.title}
        style={{...mainStyles.doWorkoutScreen.recordSection.recordContainer,
        }}
      >
        <Text
          style={{...textStyles.doWorkoutScreen.bodyHeaderText,
            color: theme.colors.secondary
          }}
        >{item.title}</Text>
        {(item.data.id ? Record : <Text style={{...textStyles.doWorkoutScreen.bodyText}}>No Data</Text>)}
      </View>
    )
  })

  return(
    <View
      style={{...mainStyles.doWorkoutScreen.recordSection.container}}
    >
        {records}
    </View>
  )
}