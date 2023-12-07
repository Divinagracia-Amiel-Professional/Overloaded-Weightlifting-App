import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function SelectExerciseListItem(props){
    const theme = useTheme()

    return(
        <View
            style={{...listStyles.draggable.listItemContainerWithHamburger
            }}
        >
            <View
                style={{...listStyles.draggable.HamburgerContainer}}
            >
                <Pressable
                    onLongPress={() => {}}
                    onPressIn={props.onDragStart}
                    onPressOut={props.onDragEnd}>
                    <MaterialIcons name={'radio-button-unchecked'} size={25} color={theme.colors.secondary}/>
                </Pressable>
            </View>
            <View
                style={{...listStyles.draggable.ListItemContainer,
                    backgroundColor: theme.colors.background,
                    borderColor: theme.colors.customLightGray
                }}
            >
                <Feather name={'image'} size={75} color={theme.colors.secondary} />
                <View
                    style={{...listStyles.draggable.DetailContainer}}
                >
                    <View
                        style={{...listStyles.draggable.HeaderContainer}}
                    >
                        <Text
                            style={{...textStyles.list.draggable.headerText,
                                color: theme.colors.secondary,
                            }}
                        >{props.name}</Text>
                        <Pressable
                    
                        >
                            <Feather name={'info'} size={15} color={theme.colors.secondary} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}