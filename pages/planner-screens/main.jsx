import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../styles/style-index'
import { CardButton } from '../components/component-index';
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Add, CalendarEdit } from 'iconsax-react-native'
import { CardRack, CardRackDisabled } from '../constants/icons';