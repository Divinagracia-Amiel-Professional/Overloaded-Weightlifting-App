import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CommonActions } from '@react-navigation/routers'
import { Text, BottomNavigation } from 'react-native-paper'
import { Image } from 'react-native'
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
        <Tab.Navigator screenOptions={{
            headerShown: false,
          }}
          tabBar={({ navigation, state, descriptors, insets }) => (
            <BottomNavigation.Bar
             navigationState={state}
             safeAreaInsets={insets}
              onTabPress={({ route, preventDefault }) => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });
    
                if (event.defaultPrevented) {
                  preventDefault();
                } else {
                 navigation.dispatch({
                    ...CommonActions.navigate(route.name, route.params),
                    target: state.key,
                  });
                }
              }}
              renderIcon={({ route, focused, color }) => {
                const { options } = descriptors[route.key];
                if (options.tabBarIcon) {
                  return options.tabBarIcon({ focused, color, size: 24 });
                }
    
                return null;
              }}
              getLabelText={({ route }) => {
                const { options } = descriptors[route.key];
                const label =
                  options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.title;
    
                return label;
              }}
            />
          )}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    // tabBarIcon: ({size, color}) => {
                    //     return <Image source={logoIcon} size={size} color={color} />
                    // }
                }}
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