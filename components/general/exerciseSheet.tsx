import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, ImageBackground } from 'react-native';
import { useTheme, Modal, Portal } from 'react-native-paper';
import ActionSheet, { SheetProps } from "react-native-actions-sheet";
import {
    mainStyles,
    textStyles,
    buttonStyles,
    cardStyles,
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import ButtonWithIcon from '../general/button';

const ExerciseSheet = (props: SheetProps) => {
    const theme = useTheme()

    return(
        <ActionSheet id={props.sheetId}>
            <View>
                <Text>Exercise Sheet</Text>
            </View>
        </ActionSheet>
    )
}

export default ExerciseSheet