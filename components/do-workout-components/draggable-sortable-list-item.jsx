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
import { SheetManager } from 'react-native-actions-sheet'
import { getExerciseIcon } from '../../functions/functions-index'

export default function DragListItem(props){
    const theme = useTheme()

    const onDragStart = () => {

    }

    const leftIcon = getExerciseIcon(props.exerciseData, theme)

    return(
        <View
            style={{...listStyles.draggable.listItemContainerWithHamburger
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
                    backgroundColor: theme.colors.background,
                    borderColor: theme.colors.customLightGray
                }}
            >
                {leftIcon}
                <View
                    style={{...listStyles.draggable.DetailContainer}}
                >
                    <View
                        style={{...listStyles.draggable.HeaderContainer}}
                    >
                        <Text
                            style={{...textStyles.list.draggable.headerText,
                                color: theme.colors.secondary
                            }}
                        >{props.name}</Text>
                        <Pressable
                            onPress={() => {
                                SheetManager.show('exercise-sheet', {
                                    payload: {
                                        exerciseData: props.exerciseData,
                                        isActionSheet: true,
                                    }
                                })
                            }}
                        >
                            <Feather name={'info'} size={15} color={theme.colors.secondary} />
                        </Pressable>
                    </View>
                    <View
                        style={{...mainStyles.repContainer}}
                    >
                        <Text
                            style={{...textStyles.list.draggable.bodyText,
                                color: theme.colors.secondary
                            }}
                        >{props.sets} sets</Text>

                        <Feather name={'x'} size={12} color={theme.colors.secondary} />
                        
                        <Text
                            style={{...textStyles.list.draggable.bodyText,
                                color: theme.colors.secondary
                            }}
                        >{props.start} {(props.end !== props.start ? `- ${props.end} reps` : 'reps') /*conditional if there is no range*/}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}