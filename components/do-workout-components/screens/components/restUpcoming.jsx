import React, { useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
  imageStyles
} from '../../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Placeholder as PlaceholderImage } from '../../../../constants/images'

export default function RestUpcomingSection(props){
    const theme = props.theme

    return(
        <View
            style={{...mainStyles.restScreen.upcoming.container,
                backgroundColor: theme.colors.tertiaryContainer
            }}
        >
            <View
                style={{...mainStyles.restScreen.upcoming.notchContainer,
                    backgroundColor: theme.colors.primary
                }}
            >
                <Text
                    style={{...textStyles.restScreen.bodyTextAnton,
                        color: 'white'
                    }}
                >Next Exercise 2/7</Text>
            </View>
            <Image
                style={{...imageStyles.rest}}
                source={PlaceholderImage}
            />
            <Text
                style={{...textStyles.restScreen.upcomingHeader,
                    color: theme.colors.secondary
                }}
            >Bularian Split Squats</Text>
            <View
                style={{...mainStyles.repContainer}}
            >
                <Text
                    style={{...textStyles.restScreen.bodyTextSignika,
                        color: theme.colors.secondary
                    }}
                >4 sets</Text>

                <Feather name={'x'} size={12} color={theme.colors.secondary} />

                <Text
                    style={{...textStyles.restScreen.bodyTextSignika,
                        color: theme.colors.secondary
                    }}
                >10-12 reps</Text>
            </View>
        </View>
    )
}