import React, { useEffect, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import { FontAwesome5 } from '@expo/vector-icons';
import { getExerciseIcon } from '../../functions/functions-index'

export default function SelectRecordsListItem(props){ //Exercise Item in Select Exercises Page
    const theme = useTheme()
    const exerciseRecord = props.item
    const exerciseDB = props.exerciseDB

    console.log(exerciseRecord)

    const handlePress = () => {
        props.navigation.navigate("Tracker", {
            exerciseRecord: {...exerciseRecord}
        })
    }

    const exerciseObj = exerciseDB.find(exercise => exercise.id === exerciseRecord.id)

    const leftIcon = getExerciseIcon(exerciseObj, theme)

    return(
        <Pressable
            onPress={() => {
                handlePress()
            }}
            style={{...listStyles.draggable.listItemContainerWithHamburger,
                ...props.containerStyle,
            }}
        >
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
                                color: theme.colors.secondary,
                            }}
                        >{exerciseRecord.name}</Text>
                    </View>
                </View>
            </View>
            <View
                style={{...listStyles.draggable.HamburgerContainer}}
            >  
                <FontAwesome5 name='angle-right' size={24} color={theme.colors.secondary}/>
            </View>
        </Pressable>
    )
}