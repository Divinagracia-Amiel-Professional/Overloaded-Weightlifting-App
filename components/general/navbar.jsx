import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View, Pressable } from 'react-native';
import {
    logoIcon,
    calendarIcon,
    graphIcon,
    gearIcon
} from '../../constants/icons'
import {
    mainStyles
} from '../../styles/style-index'
import { Home, Planner, Settings, Tracker } from '../../pages/pages-index'

const Tab = createBottomTabNavigator()

export default function NavBar(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name={'Home'} 
                component={Home}
            />
            <Tab.Screen
                name={'Planner'} 
                component={Planner}
            />
            <Tab.Screen
                name={'Settings'} 
                component={Settings}
            />
            <Tab.Screen
                name={'Tracker'} 
                component={Tracker}
            />
        </Tab.Navigator>
    ) 
}