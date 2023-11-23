import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
} from '../../../styles/style-index'
import {
    RestMainSection,
    RestUpcomingSection, 
    MetricDropdown 
} from './components/doWorkoutComponentIndex'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function RestScreen(props){
    const theme = useTheme()
    const [ metric, setMetric ] = useState('kg')

    return(
        <View
            style={{...mainStyles.restScreen.screenContainer,
                backgroundColor: theme.colors.primary
            }}
        >
            <View
                style={{...mainStyles.restScreen.bodyContainer}}
            >
                <RestMainSection 
                    theme={theme}
                    time={props.time}
                    setIsRest={props.setIsRest}
                />
                <RestUpcomingSection 
                    theme={theme}
                />
            </View>
            
            {/* <View
                style={{height: 50,
                    flexDirection: 'row',
                    width:  40
                }}
            >
                <MetricDropdown 
                    theme={theme}
                    type={'weight'}
                    metric={metric}
                    setMetric={setMetric}
                />
            </View> */}
        </View>
    )
}