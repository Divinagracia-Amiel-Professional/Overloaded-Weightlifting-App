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


export default function ConfirmationModal(props){ //visible, showModal, and hideModal is necessary as a prop 
    const dispatch = useDispatch<AppDispatch>();
    const theme = useTheme()

    // const [ visible, setVisible ] = useState(false)

    // const showModal = () => setVisible(true);
    // const hideModal = () => setVisible(false);

    // useEffect(() => {
    //     setVisible(!props.hidden)
    // }, [props.hidden])

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
                    >{props.prompt}</Text>
                    <View
                        style={cardStyles.manageWorkoutModal.buttonContainer}
                    >
                        <ButtonWithIcon 
                            text="Yes"
                            onPress={() => {
                                props.onAccept ? props.onAccept() : null
                                props.hideModal()              
                            }}
                        />
                        <ButtonWithIcon 
                            text="No"
                            onPress={() => {
                                props.onDecline ? props.onDecline() : null
                                props.hideModal()
                            }}
                        />
                    </View>
            </Modal>
        </Portal>
    )
}