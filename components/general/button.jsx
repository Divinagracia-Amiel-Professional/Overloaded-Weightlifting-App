import React, { useState, useEffect } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
  cardStyles,
  buttonStyles
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function ButtonWithIcon(props){
  const theme = useTheme()
  const iconOnly = props.iconOnly ? props.iconOnly : false
  const customStyle = props.style ? props.style : {}

  return(
    <Pressable
      style={{...buttonStyles.button,
        backgroundColor: theme.colors.secondary,
        flexDirection: 'row',
        gap: 5,
        minWidth: 50,
        ...customStyle
      }}

      onPress={props.onPress ? props.onPress : () => {
        console.log('di pumapasok')
      }}
      >
      {
        !iconOnly && 
        <Text
          style={{...buttonStyles.buttonText,
            color: theme.colors.background
          }}
        >
          {props.text}
        </Text>
      }
        {props.icon && props.icon}
    </Pressable>
  )
}