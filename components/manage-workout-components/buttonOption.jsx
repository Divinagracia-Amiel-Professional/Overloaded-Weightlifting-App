import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, ImageBackground } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles,
    cardStyles,
} from '../../styles/style-index'

export default function ButtonOption(props){
    const [ toggle, setToggle ] = useState(false)
    const theme = useTheme()
    const stateStyle = getStateStyle(toggle, theme)

    const getLabel = (type) => {
        switch(type){
            case 'toggle':
                return (<Text
                            style={{...buttonStyles.buttonText,
                               ...stateStyle.text
                            }}
                        >{props.state ? props.trueText : props.falseText}</Text>)
            case 'icon':
                return props.icon    
        }
    }

    useEffect(() => {
        if(props.type === 'toggle'){
            setToggle(props.state)
        }
    }, [props.state])

    return(
        <Pressable
            style={{...buttonStyles.manageWorkoutButtonOptions,
                ...stateStyle.container,
                paddingVertical: props.type === 'icon' ? 5 : 0,
                backgroundColor: props.type === 'icon' ? props.fill : stateStyle.container.backgroundColor,
                // borderWidth: 1,
                // borderColor: props.color
            }}

            onPress={props.onPress}
        >
            {getLabel(props.type)}
        </Pressable>
    )
}

const getStateStyle = (toggle, theme) => {
    if(toggle){
        return ({
            container: {
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: theme.colors.secondary,
                borderRadius: 5,
            },
            text: {
                color: theme.colors.secondary
            }
        })
    }
    else{
        return({
            container: {
                backgroundColor: theme.colors.secondary,
                borderRadius: 5,
            },
            text: {
                color: theme.colors.background
            }
        })   
    }
}