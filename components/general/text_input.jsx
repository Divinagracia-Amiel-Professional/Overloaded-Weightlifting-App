import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme, Portal, Modal, Checkbox } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
  buttonStyles,
  cardStyles
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import RestInputs from '../do-workout-components/screens/components/restInputs'
import { Add, Minus } from 'iconsax-react-native'

export default function CustomTextInput(props){
    const theme = useTheme()
    const type = props.type ? props.type : 'default'
    const value = props.value ? props.value : ''

    return(
        <TextInput 
            style={{
                ...style.inputContainer,
                ...getDefaultStyle(type, theme),
                ...props.containerStyle,
            }}
            inputMode='text'
            maxLength={35}
            value={value}
            onChangeText={props.onChangeText}
            onEndEditing={props.onEndEditing}
            autoFocus={true}
        />  
    )
}

const style = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        padding: 1,
        
        minWidth: 100,
    },
    textInput: {
        alignSelf:'stretch',
        flexGrow: 1,
    },
})

const getDefaultStyle = (type, theme) => {
    switch(type){
        case 'underline':
            return {
                borderBottomWidth: 1
            }
        case 'box':
            return {
                backgroundColor: theme.colors.background,

                borderRadius: 10,
            }
        default:
            return {
                backgroundColor: theme.colors.background,

                borderRadius: 10,
            }
    }
}