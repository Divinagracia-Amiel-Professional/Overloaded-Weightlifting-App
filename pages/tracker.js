import React from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../styles/style-index'
import TestDBComponent from '../components/test-components/test-store';
import { Gear, GearHexa, Calendar, CalendarFilled, Logo, Graph, Abs, Legs, Rack, Package, Tools } from '../constants/icons';

export default function Tracker(){
    return(
        <View style={mainStyles.bodyContainer}>
                <Text style={textStyles.headerText}>Tracker</Text>
        </View>
    )
}