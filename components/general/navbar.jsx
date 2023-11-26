import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { CommonActions } from '@react-navigation/routers'
import { 
  BottomNavigation,
  useTheme
   } from 'react-native-paper'
import { Text, View } from 'react-native'
import {
    logoSelected as LogoSelected,
    logoIcon as Logo,
    graphIcon as Graph,
    graphIconFocused as GraphFocused,
    gearIcon as Gear,
    gearIconFocused as GearFocused,
    calendarIcon as CalendarFocused,
    calenderIconFocused as Calendar
    } from '../../constants/icons'
import {
    mainStyles,
    textStyles
} from '../../styles/style-index'
import { Planner, Settings, Tracker } from '../../pages/pages-index'
import DoWorkoutStack from '../../pages/main-stack-navigator'
import { Home } from '../../pages/pages-index'

const Tab = createBottomTabNavigator()

export default function NavBar(){
    const theme = useTheme()

    return(
        <Tab.Navigator 
          detachInactiveScreens={true}
          screenOptions={{
            headerShown: false,
            lazy: true,
            freezeOnBlur: true
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
                component={gestureHandlerRootHOC(Home)}
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
                component={gestureHandlerRootHOC(Planner)}
                options={{
                    tabBarLabel: 'Planner',
                    tabBarIcon: ({size, focused}) => {
                      return (focused ? <CalendarFocused height={size} />
                      : <Calendar height={size} />) 
                    },
                  }}
            />
            <Tab.Screen
                name={'Tracker'} 
                component={gestureHandlerRootHOC(Tracker)}
                options={{
                    tabBarLabel: 'Tracker',
                    tabBarIcon: ({size, focused}) => {
                      return (focused ? <GraphFocused height={size} />
                      : <Graph height={size} />) 
                    },
                }}
            />
            <Tab.Screen
                name={'Settings'} 
                component={gestureHandlerRootHOC(Settings)}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({size, focused}) => {
                      return (focused ? <GearFocused height={size} />
                      : <Gear height={size} />) 
                    },
                  }}
            />        
        </Tab.Navigator>
    ) 
}