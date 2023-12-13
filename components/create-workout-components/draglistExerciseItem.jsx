import React, { useEffect, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
  buttonStyles
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function DraglistExerciseItem(props){
    const theme = useTheme()

    const handleLongPressSelect = () => {
    
    }

    const handlePress = () => {
       
    }

    return(
        <View
            // onLongPress={() => {
            //     handlePress()
            // }}
            onPress={() => {
                handlePress()
            }}
            // onPressIn={props.onDragStart}
            // onPressOut={props.onDragEnd}
            style={{...buttonStyles.fromScratch.addSectionButton.container,
                overflow: 'hidden',
                paddingVertical: 5,
                ...props.containerStyle,
            }}
        >
            <View
                style={{...listStyles.draggable.HamburgerContainer,
                    backgroundColor: props.isActive ? theme.colors.secondary : theme.colors.background
                }}
            >
                <Pressable 
                    onPressIn={() => {
                        props.setScroll(false)
                    }}
                    onLongPress={() => {
                        props.setScroll(false)
                        props.onDragStart(() => {
                            console.log('dragged')
                        })
                    }}
                    onPressOut={() => {
                        props.setScroll(true)
                        props.onDragEnd()
                    }}>
                    <MaterialIcons name={'drag-indicator'} size={30} color={props.isActive ? theme.colors.background : theme.colors.secondary}/>
                </Pressable>
            </View>
            <View
                style={{...listStyles.draggable.ListItemContainer,
                    paddingHorizontal: 10,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    paddingVertical: 2.5
                }}
            >   
                <Feather name={'image'} size={50} color={theme.colors.secondary} />
           
                <View
                    style={{...listStyles.draggable.HeaderContainer,
                    }}
                >
                    <Text
                        style={{...textStyles.list.draggable.headerText,
                        color: theme.colors.secondary,
                        fontSize: 16,
                    }}
                    >{props.name}</Text> 
                </View>
            </View>
        </View>
    )
}