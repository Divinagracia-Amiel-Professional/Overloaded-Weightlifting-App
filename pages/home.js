import React from 'react';
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



export default function Home() {
  const theme = useTheme()

  return (
    <View style={{...mainStyles.bodyContainer,
    backgroundColor: theme.colors.background
    }}>
      <StartButton />
      <GetDBButton />
    </View>
  );
}