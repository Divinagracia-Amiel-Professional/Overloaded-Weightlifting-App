import React from 'react';
import { Text, View, Pressable, ScrollView, StyleSheet } from 'react-native';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../styles/style-index'
import TestDBComponent from '../components/test-components/test-store';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { useTheme } from 'react-native-paper';
import { ButtonWithIcon } from '../components/component-index';
import { resetRecords } from '../redux/slices/CurrentUserSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import TrackerScreen from './tracker-pages/trackerScreen';

export default function Tracker({route, navigation}){
    const userRecords = useSelector((state: RootState) => state.currentUser.records)
    const theme = useTheme()
    const dispatch = useDispatch<AppDispatch>()

    return(
        <SafeAreaView
            style={{flex: 1, position: 'relative'}}
        >
            <ScrollView
                style={{...style.container,
                    backgroundColor: theme.colors.background
                }}
                contentContainerStyle={style.contentContainer}
            >
                {/* <Text style={textStyles.headerText}>Tracker</Text> */}
                {/* <ButtonWithIcon
                    style={{paddingVertical: 10, opacity: 0.8}}
                    text="Reset Records"
                    onPress={() => {
                        dispatch(resetRecords())
                    }}
                /> */}
                <ButtonWithIcon
                    style={{paddingVertical: 10, opacity: 0.8}}
                    text="Console Log Records"
                    onPress={() => {
                        console.log(JSON.stringify(userRecords))
                    }}
                />
                <TrackerScreen
                    navigation={navigation}
                    route={route}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 30,
    }
})