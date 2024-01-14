import React, { useEffect, useState, useRef } from 'react';
import { Text, View, Pressable, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { useTheme, Modal, Portal } from 'react-native-paper';
import ActionSheet, { SheetProps, registerSheet, useScrollHandlers, ActionSheetRef } from "react-native-actions-sheet";
import {
    mainStyles,
    textStyles,
    buttonStyles,
    cardStyles,
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import ButtonWithIcon from '../general/button';
import ExerciseDetails from '../manage-workout-components/exerciseDetails';

const ExerciseSheet = (props: SheetProps) => {
    const actionSheetRef = useRef<ActionSheetRef>(null);
    const scrollHandlers = useScrollHandlers<ScrollView>(
        'scrollview-1',
        actionSheetRef,
    );
    const theme = useTheme()

    const [ isScrolling, setIsScrolling ] = useState(false)

    return(
        <ActionSheet 
            id={props.sheetId}
            ref={actionSheetRef}        
            gestureEnabled={!isScrolling}
            statusBarTranslucent
            
            snapPoints={[50, 100]}
            containerStyle={{
                backgroundColor: theme.colors.tertiaryContainer,
            }}
            indicatorStyle={{
                backgroundColor: theme.colors.customLightGray,
                marginVertical: 10,
            }}

            useBottomSafeAreaPadding
        >
            <ScrollView
                {...scrollHandlers}
                scrollEnabled
            >
                <Pressable
                    onPressIn={() => {
                        setIsScrolling(true)
                    }}
                    onPressOut={() => {
                        setIsScrolling(false)
                    }}
                >
                    <ExerciseDetails 
                        exerciseData={{
                            ...props.payload?.exerciseData
                        }}
                        isActionSheet={props.payload?.isActionSheet}
                    />
                </Pressable>
            </ScrollView>
        </ActionSheet>
    )
}

const style = StyleSheet.create({
    container: {
        paddingBottom: 0,
    }
})

export default ExerciseSheet