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
import { useWorkout, deleteWorkout } from '../../redux/slices/CurrentUserSlice';
import { getLocalDateTime } from '../../functions/functions-index';

export default function OptionsWorkoutModal(props){
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
                    >{props.mode === 'use' ? (props.state ? 'Stop Using Workout?' : 'Use Workout?') :
                        props.prompt
                    }</Text>
                    {
                        props.mode === 'delete' ? <Text>This will delete the exercise forever.</Text> 
                        : 
                        null
                    }
                    <View
                        style={cardStyles.manageWorkoutModal.buttonContainer}
                    >
                        <ButtonWithIcon 
                            text="Yes"
                            onPress={() => {
                                switch (props.mode) {
                                    case 'use':
                                        if(props.state){
                                            dispatch(useWorkout(''))
                                        }
                                        else{
                                            const data = {
                                                id: props.workoutId,
                                                date_used: getLocalDateTime().toISOString()
                                            }
                                            dispatch(useWorkout(data))
                                        }
                                        break;
                                    case 'delete':
                                        if(props.state){
                                            dispatch(useWorkout(''))
                                        }
                                        dispatch(deleteWorkout(props.workoutId))
                                        break;
                                    case 'edit':
                                        props.navigation.navigate('CreateFromScratch', {
                                            isEdit: true,
                                            workoutData: {
                                                ...props.thisWorkout
                                            }
                                        })
                                        break;
                                    case 'schedule':
                                        console.log('check schedule')
                                        break;
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