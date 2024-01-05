import React, { useEffect, useState } from 'react'
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
    const [ isSelected, setIsSelected ] = useState(props.isSelected);

    useEffect(() => {
        setIsSelected(props.isSelected)
    }, [props.isSelected])

    const handleLongPressSelect = () => {
        // const prevData = [...props.exercises]
        // const index = prevData.findIndex(exercise => exercise.id === props.item.id)
        
        // prevData[index].isSelected = true
        // console.log(prevData[index])

        // // console.log(prevData)


        // props.setSelected(prevData)
    }

    const handlePress = () => {
        const prevData = [...props.exercises]
        const index = prevData.findIndex(exercise => exercise.id === props.item.id)

        if(props.isSelected){
            prevData[index].isSelected = false
            console.log(prevData[index])

            props.setSelected(prevData)
        } else { 
            prevData[index].isSelected = true
            console.log(prevData[index])

            props.setSelected(prevData)
        }
    }

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
                style={{...listStyles.draggable.HamburgerContainer}}
            >  
                <MaterialIcons name={`radio-button-${!isSelected ? 'un' : ''}checked`} size={25} color={theme.colors.secondary}/>
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
                        >{props.item.name}</Text>
                        <Pressable
                    
                        >
                            <Feather name={'info'} size={15} color={theme.colors.secondary} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}