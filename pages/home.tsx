import React, {useEffect, useState} from 'react';
import { Text, View, Pressable, Image } from 'react-native';
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
import Timer from '../components/general/timer';
import GetDBButton from '../components/general/add_database';
import { useSecureStore, getSecureStoreString } from '../custom-hooks/useSecureStore';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import initializeDB from '../custom-hooks/initDB';
import initializeDBSync from '../custom-hooks/initDBsync';
import { setInit } from '../redux/slices/InitSlice';

export default function Home() {
  const theme = useTheme()
  const initDB = initializeDBSync()
  

  return (
    <View style={{...mainStyles.bodyContainer,
    backgroundColor: theme.colors.background
    }}>
      <StartButton />
      <Text>{useSelector((state: RootState) => state.init.data) ? "Loaded" : "No_DB"}</Text>
    </View>
  );
}