import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, ImageBackground } from 'react-native';
import { useTheme, Modal, Portal } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles,
    cardStyles,
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import ButtonWithIcon from '../general/button';
