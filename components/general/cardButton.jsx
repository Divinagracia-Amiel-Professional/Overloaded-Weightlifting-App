import React, { useState, useEffect } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
  cardStyles,
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function CardButton(props){
    const [ isEnabled , setIsEnabled ] = useState(props.state)
    const theme = useTheme()
    console.log(theme.colors.primary)

    useEffect(() => {
        setIsEnabled(props.state)
    }, [props.state])

    const stateColors = getStateStyle(isEnabled, theme)

    const bodyText = 
        <View
            style={{...cardStyles.bodyTextContainer}}
        >
                {props.disabledMessage ? <Text
                    style={{...textStyles.cardBodyText,
                        ...stateColors.text
                    }}
                >{props.disabledMessage}</Text>
                :
                props.customMessage}
        </View>;

    return(
        <Pressable
            style={{...cardStyles.cardContainer,
                ...stateColors.container
            }}
            onPress={props.onPress}
        >
            <View
                style={{...cardStyles.iconContainer}}
            >
                {isEnabled ? props.mainIcon : props.mainIconDisabled}
                {isEnabled ? props.sideIcon : props.sideIconDisabled}
            </View>
            <View
                style={{...cardStyles.textSection}}
            >
                <Text
                    style={{...textStyles.cardHeaderText,
                        ...stateColors.text
                    }}
                >{props.header}</Text>
                {
                    isEnabled ? 
                    '' :
                    bodyText
                }
            </View>
        </Pressable>
    )
}

function getStateStyle(isEnabled, theme){
    let style;
    if(isEnabled){
        style={
            container: {
                backgroundColor: theme.colors.primary
            },
            text: {
                color: theme.colors.background
            } 
        }
    }else{
        style={
            container: {
                backgroundColor: theme.colors.tertiaryContainer,
                opacity: 0.25
            },
            text: {
                color: theme.colors.onTertiaryContainer
            } 
        }
    }

    return style
}

