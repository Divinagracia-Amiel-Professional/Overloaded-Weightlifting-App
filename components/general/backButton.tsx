import React, { useState, useEffect } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
  cardStyles,
  buttonStyles
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import useBackListener from '../../custom-hooks/useBackListener'
import { ArrowLeft } from 'iconsax-react-native'
import ButtonWithIcon from './button'
import ConfirmationModal from './confirmationModal'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function BackButton(props){
    const theme = useTheme()
    const [ visible, setVisible ] = useState(false)
    const [ visibleSave, setVisibleSave ] = useState(false)

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const showModalSave = () => setVisibleSave(true);
    const hideModalSave = () => setVisibleSave(false);

    const type = props.type ? props.type : 'default'
    console.log('pasok')

    const getSave = () => {
        const data = props.data ? props.data : {}
        return(
            <ConfirmationModal 
                visible={visibleSave}
                setVisible={showModalSave}
                hideModal={hideModalSave}
                prompt={`Save Progress?`}
                onAccept={() => {
                    props.navigation.popToTop()
                }}
                onDecline={()=>{
                    props.navigation.popToTop()
                }}
            />
        )
    }

    const getModal = (type) => {
        switch(type){
            case 'doWorkout': 
                return (
                    <ConfirmationModal 
                        visible={visible}
                        setVisible={setVisible}
                        hideModal={hideModal}
                        prompt={`Return Home?`}
                        onAccept={() => {
                            showModalSave()
                        }}
                    />
                )
            case 'home':
                return (
                    <ConfirmationModal 
                        visible={visible}
                        setVisible={setVisible}
                        hideModal={hideModal}
                        prompt={`Return Home?`}
                        onAccept={() => {
                            props.navigation.popToTop()
                        }}
                    />
                )
            case 'createWorkout' :
                return
            default: 
                return 
        }
    }

    const onGoBack = () => {
        switch(type){
            case 'default': 
                props.navigation.goBack()
                break;
            case 'direct_home':
                props.navigation.popToTop()
                break;
            default: 
                showModal()
        }
    }

    useBackListener(() => {
        onGoBack()
    })

    return(
        <SafeAreaView
            style={{
                padding: 10,

                zIndex: 100,
                position: 'absolute',
                top: 10,
                left: 10,
                display: props.hidden ? 'none' : 'flex'
            }}
        >   
            <ButtonWithIcon
                iconOnly={true}
                icon={props.icon ? props.icon : <ArrowLeft size={30} color={theme.colors.background}/>}
                style={{paddingVertical: 10, opacity: 0.8}}
                text="Yes"
                onPress={() => {
                    onGoBack()
                }}
            />

            {getModal(props.type)}
            {getSave()}
        </SafeAreaView>
    )
}

