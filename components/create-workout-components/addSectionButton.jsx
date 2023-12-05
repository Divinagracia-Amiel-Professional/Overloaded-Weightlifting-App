import React, { useState } from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Add, CalendarEdit, AddCircle } from 'iconsax-react-native'

export default function AddSectionButton(props){
    const theme = useTheme()

    return(
        <Pressable
            style={{...buttonStyles.fromScratch.addSectionButton.container,
                margin: props.type === 'cycle' ? 15 : 0,
                paddingVertical: props.type === 'cycle' ? 40 : 20
            }}
            onPress={props.onPress ? props.onPress : () => {}}
        >
            <Text>{props.text}</Text>
            <AddCircle size={25} color={theme.colors.onBackground}/>
        </Pressable>
    )
}