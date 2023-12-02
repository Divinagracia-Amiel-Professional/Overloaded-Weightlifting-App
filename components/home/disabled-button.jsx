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

export default function DisabledStartButton(){
  const theme = useTheme()
  
  return(
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        rowGap: 2.5,
        columnGap: 5,
      }}
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