import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { useTheme, Card } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
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

export default function Home() {
  const theme = useTheme()

  return (
    <View style={{...mainStyles.bodyContainer,
    backgroundColor: theme.colors.background
    }}>
      <StartButton />
    </View>
  );
}