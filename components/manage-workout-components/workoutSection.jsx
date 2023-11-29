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
import { FontAwesome5 } from '@expo/vector-icons';
import Gradient from '../general/gradient'
import { Placeholder2 } from '../../constants/images';
import { Rating } from 'react-native-ratings';
import { RatingImgGray } from '../../constants/images';
import ButtonOption from './buttonOption';
import UseWorkoutModal from './useWorkoutModal';

const optionsData = [
    {
        type:'icon',
        icon: null,
        onPress: () => {}
    },
    {
        type:'icon',
        icon: null,
        onPress: () => {}
    },
    {
        type:'icon',
        icon: null,
        onPress: () => {}
    },
    {
        type:'icon',
        icon: null,
        onPress: () => {}
    },
]

export default function WorkoutSection(props){
    const theme = useTheme()
    const [ visible, setVisible ] = useState(false)

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    
    return(
        <View
            style={{...cardStyles.workoutCard.container,
                backgroundColor: theme.colors.tertiaryContainer,
                zIndex: 2,
                elevation: 3,
            }}
        >
            <UseWorkoutModal
                visible={visible}
                setVisible={setVisible}
                hideModal={hideModal}
                workoutId={props.id}
                state={props.state}
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
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
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
                            showModal()
                        }}
                    />
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