import React, {useEffect, useState} from 'react';
import { Text, View, Pressable, Image, TouchableOpacity, TextInput } from 'react-native';
import { useTheme, Card } from 'react-native-paper';
import {
  mainStyles,
  textStyles,
  buttonStyles
} from '../styles/style-index'
import {
  logoIcon as Logo,
  calendarIcon as CalendarIcon,
  gearIcon as GearIcon,
  graphIcon as GraphIcon
} from '../constants/icons'
import { StartButton } from '../components/component-index';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import initializeDBSync from '../custom-hooks/initDBsync';
import { setInit } from '../redux/slices/InitSlice';
import { NavigationContainer, CommonActions } from '@react-navigation/native'

export default function Home({navigation}) {
  const theme = useTheme()
  const initDB = initializeDBSync()

  return (
    <View style={{...mainStyles.bodyContainer,
      backgroundColor: theme.colors.background
    }}>
      <StartButton
        onPress={() => {
          navigation.navigate('PreWorkoutPage')
        }}
      />
      <Text>{useSelector((state: RootState) => state.init.data) ? "Loaded" : "No_DB"}</Text>
      <TextInput 
        inputMode='numeric'
      />
    </View>
  );
}