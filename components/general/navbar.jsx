import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CommonActions } from '@react-navigation/routers'
import { 
  BottomNavigation,
  useTheme
   } from 'react-native-paper'
import { Text, View } from 'react-native'
import {
    logoSelected as LogoSelected,
    logoIcon as Logo
    } from '../../constants/icons'
import {
    mainStyles,
    textStyles
} from '../../styles/style-index'
import { Home, Planner, Settings, Tracker } from '../../pages/pages-index'

const Tab = createBottomTabNavigator()

export default function NavBar(){
    const theme = useTheme()

    return(
        <Tab.Navigator 
          screenOptions={{
            headerShown: false,
          }}
          tabBar={({ navigation, state, descriptors, insets }) => (
            <BottomNavigation.Bar
             inactiveColor={theme.colors.onBackground}
             activeColor={theme.colors.onBackground}
             style={{
              backgroundColor: theme.colors.tertiaryContainer
             }}

             navigationState={state}
             safeAreaInsets={{insets}}
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
              renderLabel={({ route, focused }) => {
                const { options } = descriptors[route.key];
                return(
                  <View style={mainStyles.tabBarLabelContainer}>
                    <Text style={{...textStyles.navBarText,
                      color: (focused ? theme.colors.onBackground : theme.colors.onBackground)}}>
                      {options.tabBarLabel}
                    </Text>
                  </View>
                ) 
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
                    tabBarIcon: ({size, focused}) => {
                      return (focused ? <LogoSelected height={size} />
                      : <Logo height={size} />) 
                    },
                }}
            />
            <Tab.Screen
                name={'Planner'} 
                component={Planner}
                options={{
                    tabBarLabel: 'Planner',
                  }}
            />
            <Tab.Screen
                name={'Settings'} 
                component={Settings}
                options={{
                    tabBarLabel: 'Settings'}}
            />
            <Tab.Screen
                name={'Tracker'} 
                component={Tracker}
                options={{
                    tabBarLabel: 'Tracker'}}
            />
        </Tab.Navigator>
    ) 
}