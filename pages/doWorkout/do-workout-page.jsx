import React from 'react'
import { View, Text } from 'react-native'
import DraggableSortableList from '../../components/do-workout-components/draggable-sortable-list'
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'
import { useTheme, Card } from 'react-native-paper';

export default function DoWorkoutPage(){
    const theme = useTheme()
    
    return(
        <View style={{...mainStyles.bodyContainer,
            backgroundColor: theme.colors.background
            }}>
            <Text>doWorkoutPage</Text>
        </View>
    )
}