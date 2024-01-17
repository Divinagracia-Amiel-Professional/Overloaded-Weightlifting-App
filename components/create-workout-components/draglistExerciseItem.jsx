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
import { getExerciseIcon } from '../../functions/functions-index'

export default function DraglistExerciseItem(props){
    const theme = useTheme()
    const exerciseObj = props.data

    const handleLongPressSelect = () => {
    
    }

    const handlePress = () => {
       
    }

    const leftIcon = getExerciseIcon(exerciseObj, theme, 1.5)

    return(
        <View
            // onPressIn={() => {
            //     props.setScroll(false)
            //     props.onDragStart()
            // }}
            // onPressOut={() => {
            //     props.setScroll(true)
            //     props.onDragEnd()
            // }}
            style={{
                alignItems: 'flex-start',
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                alignSelf: 'stretch',
                height: 75,
                gap: 10,
                borderWidth: 1,
                borderRadius: 10,
                marginVertical: 5,
                flexDirection: 'row',
                overflow: 'hidden',
                ...props.containerStyle,
            }}
        >
            <View
                style={{...listStyles.draggable.HamburgerContainer,
                    backgroundColor: props.isActive ? theme.colors.secondary : 'transparent',
                    paddingHorizontal: 10,
                    marginRight: 0,
                }}
            >
                <Pressable 
                    // onPressIn={() => {
                    //     props.setScroll(false)
                    // }}
                    onPressIn={() => {
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
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    gap: 15,
                    
                    flexGrow: 0,
                    flexShrink: 1,
                    paddingRight: 10,
                }}
            >   
                {
                    props.type === 'exercise' && 
                    leftIcon
                }
                <View
                    style={{...listStyles.draggable.DetailContainer, 
                        flexShrink: 1,
                    }}
                >
                    <Text
                        style={{
                            ...textStyles.list.draggable.headerText,
                            color: theme.colors.secondary,
                            fontSize: 16,
                            flexWrap: 'wrap',
                            flex: 0
                        }}
                    >{props.name}</Text>
                </View>
            </View>
        </View>
    )
}