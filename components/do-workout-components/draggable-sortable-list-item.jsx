import React, { useState } from 'react'
import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
} from '../../styles/style-index'
import FontAwesome from '@expo/vector-icons/FontAwesome5'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Placeholder as PlaceholderImage } from '../../constants/images'

let dragListStyle = {}
let listContainerStyle = {}
let list_textStyle = {}

export default function DragListItem(props){
    const theme = useTheme()

    //styling
    

    return(
        <View
            style={{...listStyles.draggable.listItemContainerWithHamburger
            }}
        >
            <View
                style={{...listStyles.draggable.HamburgerContainer}}
            >
                <Pressable 
                    onPressIn={props.onDragStart}
                    onPressOut={props.onDragEnd}>
                    <Feather name={'menu'} size={30} color={theme.colors.secondary}/>
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
                            style={{...textStyles.list.draggable.headerText}}
                        >{props.name}</Text>
                        <Pressable
                    
                        >
                            <Feather name={'info'} size={15} color={theme.colors.secondary} />
                        </Pressable>
                    </View>
                    <View
                        style={{...listStyles.draggable.RepContainer}}
                    >
                        <Text
                            style={{...textStyles.list.draggable.bodyText}}
                        >{props.sets} sets</Text>
                        <Feather name={'x'} size={12} color={theme.colors.secondary} />
                        <Text
                             style={{...textStyles.list.draggable.bodyText}}
                        >{props.start} {(props.end !== props.start ? `- ${props.end} reps` : 'reps') /*conditional if there is no range*/}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}