import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, ImageBackground } from 'react-native';
import { useTheme, Modal, Portal } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles,
    cardStyles,
} from '../../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import ButtonWithIcon from '../../../general/button';

export default function SkipModal(props){ //visible, showModal, and hideModal is necessary as a prop 
    const theme = useTheme()

    return(
        <Portal>
            <Modal 
                visible={props.visible} 
                onDismiss={props.hideModal} 
                dismissable={true}
                dismissableBackButton={true}
                contentContainerStyle={{...cardStyles.manageWorkoutModal.container,
                    backgroundColor: theme.colors.tertiaryContainer
            }}>
 
                    <Text
                        style={{...textStyles.cardHeaderText}}
                    >Skip...</Text>
                    <View
                        style={cardStyles.manageWorkoutModal.buttonContainer}
                    >
                        <ButtonWithIcon 
                            text="Set"
                            onPress={() => {
                                props.onSet ? props.onSet() : null
                                props.hideModal()              
                            }}
                        />
                        <ButtonWithIcon 
                            text="Exercise"
                            onPress={() => {
                                props.onExercise ? props.onExercise() : null
                                props.hideModal()
                            }}
                        />
                    </View>
            </Modal>
        </Portal>
    )
}