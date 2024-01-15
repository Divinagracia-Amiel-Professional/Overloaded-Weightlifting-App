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
import { Add, Minus } from 'iconsax-react-native'

export default function NumericInput(props){
    const theme = useTheme()

    const hasButtons = props.hasButtons ? props.hasButtons : false

    return(
        <View
            style={{
                ...style.container,
                ...props.style
            }}
        >
            {props.label ? <Text>{props.label}</Text> : null}
            <View
                style={{...style.inputContainer,
                    backgroundColor: theme.colors.customLightGray,
                }}
            >
                {
                    hasButtons ? 
                    <Button
                    icon={<Minus size={20} color={theme.colors.secondary}/>}
                    onPress={props.onSubtract} 
                    /> : null
                }
                
                <View
                    style={{...style.displayStyle,
                        backgroundColor: theme.colors.background
                    }}
                >
                    {props.textInput ? 
                        <TextInput 
                            style={{...style.textInput,
                                ...props.textInputStyle
                            }}
                            inputMode='numeric'
                            maxLength={10}
                            value={props.value}
                            onChangeText={text => props.onChange(text)}
                            onKeyPress={props.onKeyPress}
                            onEndEditing={props.onEndEditing}
                        />  : 
                        <Text>{props.value}</Text>
                    }
                </View>
                
                {
                    hasButtons ? 
                    <Button 
                    icon={<Add size={20} color={theme.colors.secondary}/>}
                    onPress={props.onAdd} 
                    />  : null
                }
                
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
        gap: 5
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
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    textInput: {
        width: '100%',
        textAlign: 'right'
    },
})
