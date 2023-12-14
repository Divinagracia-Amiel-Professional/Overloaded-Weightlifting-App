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

export default function NumericInput(props){
    const theme = useTheme()

    return(
        <View
            style={{...style.container}}
        >
            <Text>{props.label}</Text>
            <View
                style={{...style.inputContainer,
                    backgroundColor: theme.colors.customLightGray
                }}
            >
                <Button
                    icon={<Minus size={20} color={theme.colors.secondary}/>}
                    onPress={props.onSubtract} 
                />
                
                <View
                    style={{...style.displayStyle,
                        backgroundColor: theme.colors.background
                    }}
                >
                    {props.textInput ? 
                        <TextInput 
                            style={style.textInput}
                            inputMode='numeric'
                            maxLength={3}
                            value={props.value}
                            onChangeText={props.onChange}
                            onKeyPress={props.onKeyPress}
                        />  : 
                        <Text>{props.value}</Text>
                    }
                </View>
                
                <Button 
                    icon={<Add size={20} color={theme.colors.secondary}/>}
                    onPress={props.onAdd} 
                    />
            </View>
        </View>  
    )
}

const Button = (props) => {
    const theme = useTheme()

    return(
        <TouchableOpacity
            style={{...style.buttonStyle}}
            onPress={props.onPress}
        >
            {props.icon}
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        gap: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 10,
    },
    buttonStyle: {
        padding: 5,
    },
    displayStyle: {
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    textInput: {
        width: '100%',
        textAlign: 'right'
    },
})
