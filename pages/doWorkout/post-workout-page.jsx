import React, { useState } from 'react'
import { View, Text } from 'react-native'
import DraggableSortableList from '../../components/do-workout-components/draggable-sortable-list'
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'
import { useTheme, Card } from 'react-native-paper';
import { PostWorkoutMessage } from '../../components/component-index';

export default function PostWorkoutPage(){
    const theme = useTheme()
    const [ isComplete , setIsComplete ] = useState(false)
    
    return(
        <View
            style={{...mainStyles.postWorkoutPage.container,
                backgroundColor: theme.colors.primary
            }}
        >
            <PostWorkoutMessage
                theme={theme}
                isComplete={isComplete}
                setIsComplete={setIsComplete}
            />
        </View>
    )
}