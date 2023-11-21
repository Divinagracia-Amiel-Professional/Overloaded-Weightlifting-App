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
  const data = props.data
  const records = data.map(item => { 
    const Record = 
      <View>
        <Text>Have Data</Text>
      </View>; 

    return(
      <View>
        <Text>{item.title}</Text>
        {(item.data.id ? Record : <Text>No Data</Text>)}
      </View>
    )
  })

  return(
    <View>
        {records}
    </View>
  )
}