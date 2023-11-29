import React, { useState } from 'react';
import { Text, View, Pressable, ImageBackground } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles,
    cardStyles,
} from '../../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Gradient, ButtonWithIcon } from '../../../../components/component-index';
import { Placeholder2, RatingImgGray } from '../../../../constants/images';
import { Rating } from 'react-native-ratings';
import { Add } from 'iconsax-react-native';
import { Gear } from '../../../../constants/icons';

export default function DescriptionSection(props){
    const theme = useTheme()

    return(
        <View
            style={{...cardStyles.workoutCard.container,
                backgroundColor: theme.colors.tertiaryContainer,
            }}
        >
            <View
                style={{...cardStyles.workoutCard.nameContainer,
                    height: 400
                }}
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
                style={{...cardStyles.workoutCard.details.container}}
            >
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
                    style={{
                        alignSelf: 'stretch',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        gap: 0,
                    }}
                >
                    <Text
                    style={{...textStyles.workoutCard.body,
                        color: theme.colors.secondary
                    }}
                    >Description: </Text>
                    <Text
                        style={{...textStyles.bodyText,
                            color: theme.colors.secondary
                        }}
                    >
                        {props.description}
                    </Text>
                </View>
                
                <View
                   style={{...cardStyles.workoutCard.details.moreDetailsContainer,
                        flexDirection: 'row',
                        gap: 30,
                        marginTop: 10,
                }} 
                >
                    <ButtonWithIcon 
                        text='Add to Workouts'
                        icon={<Add size={20} color={theme.colors.background}/>}
                        onPress={props.addWorkout}
                    />
                    <ButtonWithIcon 
                        text='Edit Workout'
                        icon={<Gear height={20} fill={theme.colors.background}/>}
                        onPress={props.editWorkout}
                    />
                </View>
            </View>
        </View>
    )
}