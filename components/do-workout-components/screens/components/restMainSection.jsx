import React, { useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
} from '../../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import RestTimer from './restTimer'
import RestInputs from './restInputs'
import RestButtons from './restButtons'

export default function RestMainSection(props){
    const theme = useTheme()

    return(
        <View
            style={{...mainStyles.restScreen.mainSection.container}}
        >
            <RestTimer
                theme={theme}
                time={props.time}
            />
            <RestInputs 
                theme={theme}
                
            />
            <RestButtons 
                theme={theme}
                setIsRest={props.setIsRest}
            />
        </View>
    )
}