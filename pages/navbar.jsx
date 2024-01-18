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
  Logo,
  Graph,
  GearHexa,
  Calendar,
  CalendarFilled
} from '../constants/icons'
import {
    mainStyles,
    textStyles
} from '../styles/style-index'
import { Planner, Profile as ProfilePage, Tracker, Home } from './pages-index'
import { Profile } from 'iconsax-react-native'

const Tab = createBottomTabNavigator()

export default function NavBar(props){
    const theme = useTheme()

    const customTheme = {
      ...theme,
      "colors": {
        ...theme.colors,
        "secondaryContainer" : "transparent"
      }
    }

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
              backgroundColor: theme.colors.tertiaryContainer,
             }}

             theme={customTheme}

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
                component={(Home)}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({size, focused}) => {
                      return <Logo height={size} strokeColor={focused ? theme.colors.tertiaryContainer : theme.colors.onBackground} strokeWidth={3} fill={focused ? theme.colors.onBackground : 'none'} />
                    },
                }}
            />
            <Tab.Screen
                name={'Planner'} 
                component={(Planner)}
                options={{
                    tabBarLabel: 'Planner',
                    tabBarIcon: ({size, focused}) => {
                      return (focused ? <CalendarFilled height={size} fill={theme.colors.onBackground} />
                      : <Calendar height={size} strokeColor={theme.colors.onBackground} />) 
                    },
                  }}
            />
            <Tab.Screen
                name={'Tracker'} 
                component={(Tracker)}
                options={{
                    tabBarLabel: 'Tracker',
                    tabBarIcon: ({size, focused}) => {
                      return <Graph height={size} strokeColor={theme.colors.onBackground} fill={focused ? theme.colors.onBackground : 'none'}/>
                    },
                }}
            />
            <Tab.Screen
                name={'Profile'} 
                children={() => <ProfilePage promptAsync={props.promptAsync}/>}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({size, focused}) => {
                      return <Profile size={size} color={theme.colors.onBackground} variant={focused ? 'Bold' : 'Outline'} />
                    },
                  }}
            />        
        </Tab.Navigator>
    ) 
}