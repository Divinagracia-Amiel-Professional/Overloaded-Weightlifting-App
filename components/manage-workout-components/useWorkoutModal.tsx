import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, ImageBackground } from 'react-native';
import { useTheme, Modal, Portal } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles,
    cardStyles,
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import ButtonWithIcon from '../general/button';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { useWorkout } from '../../redux/slices/CurrentUserSlice';

export default function UseWorkoutModal(props){
    const dispatch = useDispatch<AppDispatch>();
    const theme = useTheme()

    return(
        <Portal>
            <Modal 
                visible={props.visible} 
                onDismiss={props.hideModal} 
                dismissable={false}
                dismissableBackButton={true}
                contentContainerStyle={{...cardStyles.manageWorkoutModal.container,
                    backgroundColor: theme.colors.tertiaryContainer
            }}>
 
                    <Text
                        style={{...textStyles.cardHeaderText}}
                    >{props.state ? 'Stop Using Workout?' : 'Use Workout?'}</Text>
                    <View
                        style={cardStyles.manageWorkoutModal.buttonContainer}
                    >
                        <ButtonWithIcon 
                            text="Yes"
                            onPress={() => {
                                if(props.state){
                                    dispatch(useWorkout(''))
                                }
                                else{
                                    dispatch(useWorkout(props.workoutId))
                                }
                                props.hideModal()
                            }}
                        />
                        <ButtonWithIcon 
                            text="No"
                            onPress={props.hideModal}
                        />
                    </View>
            </Modal>
        </Portal>
    )
}