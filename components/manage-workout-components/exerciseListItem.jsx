import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
  imageStyles
} from '../../styles/style-index'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { SheetManager } from 'react-native-actions-sheet'
import { FontAwesome5 } from '@expo/vector-icons';
import { getExerciseIcon } from '../../functions/functions-index'

export default function ExerciseListItem(props){ //Exercise Item in Select Exercises Page
    const theme = useTheme()
    const exerciseData = props.item

    console.log(exerciseData)

    const handlePress = () => {
        props.navigation.navigate("ExerciseDetailsPage", {
            exerciseData: {...exerciseData}
        })
    }

    const imgUrl = exerciseData.resources.img_urls[0].url

    const leftIcon = getExerciseIcon(exerciseData, theme)

    // <Logo width={90} height={80} scale={1.5} fill={theme.colors.secondary}/>

    return(
        <Pressable
            // onLongPress={() => {
            //     handlePress()
            // }}
            onPress={() => {
                handlePress()
            }}
            // onPressIn={props.onDragStart}
            // onPressOut={props.onDragEnd}
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
                <View
                    style={{paddingVertical: 10}}
                >
                    {leftIcon}
                </View>
                <View
                    style={{...listStyles.draggable.DetailContainer}}
                >
                    <View
                        style={{...listStyles.draggable.HeaderContainer}}
                    >
                        <Text
                            style={{...textStyles.list.draggable.headerText,
                                fontFamily: 'Proxima-Nova-Regular',
                                color: theme.colors.secondary,
                            }}
                        >{exerciseData.name}</Text>
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