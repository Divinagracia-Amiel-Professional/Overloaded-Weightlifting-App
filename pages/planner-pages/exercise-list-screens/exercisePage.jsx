import React, { useEffect, useState, useRef } from 'react';
import { Text, View, Pressable, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { useTheme, Modal, Portal } from 'react-native-paper';
import ActionSheet, { SheetProps, registerSheet, useScrollHandlers, ActionSheetRef } from "react-native-actions-sheet";
import {
    mainStyles,
    textStyles,
    buttonStyles,
    cardStyles,
} from '../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import ButtonWithIcon from '../../../components/general/button';
import ExerciseDetails from '../../../components/manage-workout-components/exerciseDetails';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from '../../../components/component-index';

const ExerciseDetailsPage = ({route, navigation}) => {
    const theme = useTheme()
    const exerciseData = route.params.exerciseData

    return(
        <SafeAreaView
            style={{flex: 1, position: 'relative'}}
        >
            <BackButton navigation={navigation} type='default' hidden={false} params={{}}/>
            <ScrollView
                style={{...mainStyles.PremadeScrollView
            
                }}
                contentContainerStyle={mainStyles.PremadeScrollViewContainerStyle}
            >
                <ExerciseDetails 
                    exerciseData={{
                        ...exerciseData
                    }}
                    isActionSheet={false}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ExerciseDetailsPage