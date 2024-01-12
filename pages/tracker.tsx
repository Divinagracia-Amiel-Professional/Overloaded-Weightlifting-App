import React from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
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
import { resetRecords, consoleLogRecords } from '../redux/slices/CurrentUserSlice';

export default function Tracker(){
    const theme = useTheme()
    const dispatch = useDispatch<AppDispatch>()

    return(
        <View style={mainStyles.bodyContainer}>
            <Text style={textStyles.headerText}>Tracker</Text>
            <ButtonWithIcon
                style={{paddingVertical: 10, opacity: 0.8}}
                text="Reset Records"
                onPress={() => {
                    dispatch(resetRecords())
                }}
            />
            <ButtonWithIcon
                style={{paddingVertical: 10, opacity: 0.8}}
                text="Console Log Records"
                onPress={() => {
                    dispatch(consoleLogRecords())
                }}
            />
        </View>
    )
}