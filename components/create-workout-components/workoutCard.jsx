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
import Gradient from '../general/gradient';
import { Placeholder2 } from '../../constants/images';
import { Rating } from 'react-native-ratings';
import { RatingImgGray } from '../../constants/images';

export default function WorkoutCard(props){
    const theme = useTheme()
    
    return(
        <View
            style={{...cardStyles.workoutCard.container,
                backgroundColor: theme.colors.tertiaryContainer
            }}
        >
            <View
                style={{...cardStyles.workoutCard.nameContainer}}
            >
                <ImageBackground source={Placeholder2} resizeMode='cover'
                    style={{...cardStyles.workoutCard.imageBackground}}
                >

                    <Gradient /> 
                </ImageBackground>
            </View>
            <View
                style={{...cardStyles.workoutCard.details.container}}
            >
                <Text
                        style={{...textStyles.workoutCard.header,
                            position: 'relative',
                            color: theme.colors.secondary,
                            lineHeight: 50,
                            alignSelf: 'stretch',
                            textAlign: 'center',
                            paddingBottom: 10,
                        }}
                    >{props.name}</Text>
                <View
                    style={{...cardStyles.workoutCard.details.difficultyContainer}}
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

                <Text
                    style={{...textStyles.workoutCard.body,
                        color: theme.colors.secondary
                    }}
                >Focus:  {props.focus}</Text>
                
                <View
                   style={{...cardStyles.workoutCard.details.moreDetailsContainer}} 
                >
                    <Pressable
                        style={{...cardStyles.workoutCard.details.pressable}}
                        onPress={props.onPress}
                    >
                        <Text
                            style={{...textStyles.workoutCard.body,
                                color: theme.colors.secondary
                            }}
                        >More Details</Text>
                        <FontAwesome5 name='angle-right' size={24} color={theme.colors.secondary}/>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}