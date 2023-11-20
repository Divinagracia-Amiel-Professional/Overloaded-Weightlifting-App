import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
} from '../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function InputScreen(){
    const theme = useTheme()

    return(
        <View
            style={{...mainStyles.mainContainer,
                backgroundColor: theme.colors.background
            }}
        >
            <Text>Input Screen</Text>
        </View>
    )
}