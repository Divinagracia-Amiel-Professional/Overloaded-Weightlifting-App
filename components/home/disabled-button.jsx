import React, {useEffect, useState} from 'react';
import { Text, View, Pressable, Image, TouchableOpacity, TextInput } from 'react-native';
import { useTheme, Portal, Modal } from 'react-native-paper';
import {
  mainStyles,
  textStyles,
  buttonStyles,
  cardStyles
} from '../../styles/style-index'
import { Logo, Calendar } from '../../constants/icons';
import { textSizes } from '../../constants/theme';

export default function DisabledStartButton(props){
  const theme = useTheme()
  
  return(
    <View
      style={{...cardStyles.disabledStartButton}}
    >
      <Text
        style={{...textStyles.cardBodyText,
          color: theme.colors.onTertiaryContainer,
          // fontSize: textSizes
        }}
      >Go to Planner</Text>
      <Calendar height={30} strokeColor={theme.colors.onTertiaryContainer}/>
      <Text
        style={{...textStyles.cardBodyText,
          color: theme.colors.onTertiaryContainer
        }}
      >to create workout</Text>
      <Text
        style={{...textStyles.cardBodyText,
          color: theme.colors.onTertiaryContainer,
          fontSize: textSizes.small,
        }}
      >Don't forget to use it in 'manage workout' first!</Text>
    </View>
  )
}