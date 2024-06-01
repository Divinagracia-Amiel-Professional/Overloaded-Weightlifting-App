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

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { updateDoWorkoutSave, updateCreateWorkoutSave } from '../../redux/slices/CurrentUserSlice'

export default function BackButton(props){
    const theme = useTheme()
    const dispatch = useDispatch<AppDispatch>()
    const [ visible, setVisible ] = useState(false)
    const [ visibleSave, setVisibleSave ] = useState(false)
    const [ isEnabled, setIsEnabled ] = useState(props.enabled !== undefined ? props.enabled : true)
    const [ isHidden, setIsHidden ] = useState(props.hidden !== undefined ? props.hidden : false)

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const showModalSave = () => setVisibleSave(true);
    const hideModalSave = () => setVisibleSave(false);

    const type = props.type ? props.type : 'default'
    const data = props.data ? props.data : {}

    console.log("isEnabled? " + isEnabled)
    console.log("isBackButtonHidden? " + isHidden)

    console.log('pasok')

    const getSave = () => {
        return(
            <ConfirmationModal 
                visible={visibleSave}
                setVisible={showModalSave}
                hideModal={hideModalSave}
                prompt={`Save Progress?`}
                subprompt={getSavePrompt(type)}
                onAccept={() => {
                    onSave(type)
                    props.navigation.popToTop()
                    props.navigation.navigate('Home')
                }}
                onDecline={()=>{
                    props.navigation.popToTop()
                    props.navigation.navigate('Home')
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
            case 'create_workout' :
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
            default: 
                return 
        }
    }

    const getSavePrompt = (type) => {
        switch(type){
            case 'doWorkout':
                return 'Pressing No will return the workout to previous save of the workout'
            case 'create_workout':
                return 'Pressing No will retain the previous save of this form'
        }
    }

    const onSave = (type) => {
        switch(type){
            case 'doWorkout':
                console.log('save doWorkout')
                dispatch(updateDoWorkoutSave(data))
                break;
            case 'create_workout':
                console.log('save createFromScratch')
                dispatch(updateCreateWorkoutSave(data))
                break;
        }
    }

    const onGoBack = () => {
        switch(type){
            case 'default': 
                props.navigation.goBack()
                break;
            case 'select_exercise_list': 
                props.navigation.navigate('CreateFromScratch')
                break;
            case 'direct_home':
                props.navigation.navigate('Navbar')
                props.navigation.navigate('Home')
                break;
            case 'exercise_list':
                props.navigation.navigate('Navbar')
                props.navigation.navigate('Planner')
                break;
            default: 
                showModal()
        }
    }

    useBackListener(() => {
        isEnabled ? onGoBack() : null
    })

    useEffect(() => {
        if(props.enabled !== undefined){
            setIsEnabled(props.enabled)
        }
    }, [props.enabled])

    useEffect(() => {
        if(props.enabled !== undefined){
            setIsHidden(props.hidden)
        }
    }, [props.hidden])

    return(
        <SafeAreaView
            style={{
                padding: 10,

                zIndex: 100,
                position: 'absolute',
                top: 10,
                left: 10,
                display: isHidden ? 'none' : 'flex'
            }}
        >   
            <ButtonWithIcon
                iconOnly={true}
                icon={props.icon ? props.icon : <ArrowLeft size={30} color={theme.colors.background}/>}
                style={{paddingVertical: 10, opacity: 0.8}}
                text="Yes"
                onPress={() => {
                    isEnabled ? onGoBack() : null
                }}
            />

            {isEnabled ? getModal(type) : null}
            {isEnabled ? getSave() : null}
        </SafeAreaView>
    )
}

