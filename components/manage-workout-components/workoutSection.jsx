import React, { useState } from 'react';
import { Text, View, Pressable, ImageBackground } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles,
    cardStyles,
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Add, Edit, CalendarSearch, CalendarEdit } from 'iconsax-react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Gradient from '../general/gradient'
import { Placeholder2 } from '../../constants/images';
import { Rating } from 'react-native-ratings';
import { RatingImgGray } from '../../constants/images';
import ButtonOption from './buttonOption';
import OptionsWorkoutModal from './optionsWorkoutModal';

const modalStatesInit = {
    useModalVisible: false,
    deleteModalVisible: false,
    editModalVisible: false,
    checkScheduleVisible: false
}

export default function WorkoutSection(props){
    const theme = useTheme()
    const [ visible, setVisible ] = useState(modalStatesInit)

    console.log(visible)

    let count = 0

    const optionsData = [
        {
            type:'icon',
            modal: 'editModalVisible',
            icon: <Edit size={25} color={theme.colors.secondary}/>,
            fill: theme.colors.customLightGray,
            color: theme.colors.background,
            // onPress: () => {
            //     console.log('Edit Workout')
            // }
        },
        // {
        //     type:'icon',
        //     icon: <CalendarEdit size={25} color={theme.colors.secondary}/>,
        //     fill: theme.colors.customLightGray,
        //     color: theme.colors.background,
        //     onPress: () => {
        //         console.log('Edit Schedule')
        //     }
        // },
        {
            type: 'icon',
            modal: 'checkScheduleVisible',
            icon: <CalendarSearch size={25} color={theme.colors.secondary}/>,
            fill: theme.colors.customLightGray,
            color: theme.colors.background,
            // onPress: () => {
            //     console.log('Check Schedule')
            // }
        },
        {
            type:'icon',
            modal: 'deleteModalVisible',
            icon: <MaterialIcons name="delete-forever" size={25} color={theme.colors.background}/>,
            color: theme.colors.background,
            fill: theme.colors.primary,
            // onPress: () => {
            //     console.log('Delete Forever')
            // }
        },
    ]

    const hideModal = (modalState) => {
        setVisible(prevState => ({
            ...prevState,
            [modalState]: false
        }))
    }
    
    return(
        <View
            style={{...cardStyles.workoutCard.container,
                backgroundColor: theme.colors.tertiaryContainer,
                zIndex: 2,
                elevation: 3,
            }}
        >
            <OptionsWorkoutModal
                visible={visible.useModalVisible}
                hideModal={() => {
                    hideModal('useModalVisible')
                }}
                mode='use'
                workoutId={props.id}
                state={props.state}
                navigation={props.navigation}
                thisWorkout={props.thisWorkout}
            />
            <OptionsWorkoutModal
                visible={visible.deleteModalVisible}
                hideModal={() => {
                    hideModal('deleteModalVisible')
                }}
                mode='delete'
                prompt='Delete Workout?'
                workoutId={props.id}
                state={props.state}
                navigation={props.navigation}
                thisWorkout={props.thisWorkout}
            />
            <OptionsWorkoutModal 
                visible={visible.editModalVisible}
                hideModal={() => {
                    hideModal('editModalVisible')
                }}
                mode='edit'
                prompt='Edit Workout?'
                workoutId={props.id}
                state={props.state}
                navigation={props.navigation}
                thisWorkout={props.thisWorkout}
            />
            <OptionsWorkoutModal 
                visible={visible.checkScheduleVisible}
                hideModal={() => {
                    hideModal('checkScheduleVisible')
                }}
                mode='schedule'
                prompt='Check Schedule?'
                workoutId={props.id}
                state={props.state}
                navigation={props.navigation}
                thisWorkout={props.thisWorkout}
            />
            <View
                style={{...cardStyles.workoutCard.nameContainer}}
            >
                <ImageBackground source={Placeholder2} resizeMode='cover'
                    style={{...cardStyles.workoutCard.imageBackground}}
                >

                    <Gradient />
                    <Text
                        style={{...textStyles.workoutCard.header,
                            color: theme.colors.tertiaryContainer
                        }}
                    >{props.name}</Text>
                    
                </ImageBackground>
            </View>
            <View
                style={{...cardStyles.workoutCard.details.container,
                    paddingHorizontal: 0,
                    paddingVertical: 0,
                }}
            >
                <View
                    style={{...cardStyles.workoutCard.details.difficultyContainer,
                        paddingHorizontal: 15,
                        paddingTop: 15,
                    }}
                >
                    <Text
                        style={{...textStyles.workoutCard.body,
                            color: theme.colors.secondary
                        }}
                    >Difficulty: </Text>
                    <Rating 
                        type='custom'
                        ratingImage={RatingImgGray}
                        ratingColor={theme.colors.primary}
                        ratingBackgroundColor={theme.colors.customLightGray}
                        ratingCount={5}
                        imageSize={30}
                        fractions={2}
                        startingValue={props.difficulty}
                        readonly={true}
                    />
                </View>
                
                <View
                    style={{
                        paddingHorizontal: 15,
                        alignSelf: 'stretch',
                        alignItems: 'flex-start',
                        elevation: 5,
                    }}
                >
                    <Text
                        style={{...textStyles.workoutCard.body,
                            color: theme.colors.secondary
                        }}
                    >Focus:  {props.focus}</Text>
                </View>
                <View
                   style={{...cardStyles.workoutCard.details.moreDetailsContainer,
                    paddingBottom: 15,
                    paddingHorizontal: 15,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    gap: 5,
                }} 
                >
                    <ButtonOption 
                        type='toggle'
                        falseText='Use Workout'
                        trueText='In use'
                        color={theme.colors.background}
                        fill={theme.colors.secondary}
                        state={props.state}
                        onPress={() => {
                            setVisible(prevState => ({
                                ...prevState,
                                useModalVisible: true
                            }))
                        }}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 5,
                        }}
                    >
                        {

                        optionsData.map(option => {
                            count++
                            return(
                            <ButtonOption 
                                key={count}
                                type={option.type}
                                icon={option.icon}
                                color={option.color}
                                fill={option.fill}
                                onPress={() => {
                                    setVisible(prevState => ({
                                        ...prevState,
                                        [option.modal] : true
                                    }))
                                }}
                            />
                        )
                        })}
                    </View>
                </View>
            </View>
        
        </View>
    )
}


/* <Pressable
        style={{...buttonStyles.manageWorkoutOptions,
            backgroundColor: 'transparent',
            
        }}
        onPress={() => {
            props.setHasOptions(prevState => !prevState)
        }}
>
    <FontAwesome5 name='bars' size={24} color={theme.colors.secondary}/>
</Pressable> */