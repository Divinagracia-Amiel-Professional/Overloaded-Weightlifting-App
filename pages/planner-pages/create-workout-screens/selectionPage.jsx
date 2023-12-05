import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { TouchableRipple, useTheme } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Add, CalendarEdit } from 'iconsax-react-native'
import { CardButton } from '../../../components/component-index';
import { Rack, Gear, Package, Tools } from '../../../constants/icons';

export default function SelectionPage({navigation}){
    const theme = useTheme()

    return(
        <View
            style={{...mainStyles.bodyContainer,
                backgroundColor: theme.colors.background,
                justifyContent: 'center'
            }}
        >  
            <Text
                style={{...textStyles.headerText,
                    color: theme.colors.onBackground
                }}
            >Create Workout</Text>
            <CardButton 
                state={true}
                header='Select From Premade Workouts'
                mainIcon={<Package scale={1.5} strokeColor={theme.colors.background} />}
                mainIconDisabled={<Package scale={1.5} strokeColor={theme.colors.onTertiaryContainer} />}
                sideIcon={<Gear scale={1.5} fill={theme.colors.background} strokeColor={'none'} />}
                sideIconDisabled={<Gear scale={1.5} strokeColor={theme.colors.onTertiaryContainer} />}
                disabledMessage='Cannot Create Workout'
                onPress={() => {
                    navigation.navigate('SelectFromPremade')
                }}
            />
            <CardButton 
                state={true}
                header='Create Your Own'
                mainIcon={<Rack scale={1.5} fill={theme.colors.background} />}
                mainIconDisabled={<Rack scale={1.5} fill={theme.colors.onTertiaryContainer} />}
                sideIcon={<Tools scale={1.5} fill={theme.colors.background} />}
                sideIconDisabled={<Tools scale={1.5} fill={theme.colors.background} />}
                disabledMessage='Cannot Create Workout'
                onPress={() => {
                    navigation.navigate('CreateFromScratch')
                }}
            />
        </View>
    )
}