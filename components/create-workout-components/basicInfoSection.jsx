import React, { useState } from 'react';
import { Text, View, Pressable, ScrollView, TextInput } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles,
    cardStyles
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Add, CalendarEdit, Edit2 } from 'iconsax-react-native'
import AddSectionButton from './addSectionButton';
import SplitSection from './splitSection';
import { textSizes } from '../../constants/theme';
import { Rating } from 'react-native-ratings';
import { RatingImgGray } from '../../constants/images';

export default function BasicInfoSection(props){
    const theme = useTheme()
    console.log({
        name: props.data.name,
        focus: props.data.focus
    })

    return(
        <View
            style={{...mainStyles.fromScratch.cycleSection.container}}
        >
            <View
                style={{...mainStyles.fromScratch.cycleSection.headerContainer}}
            >
                <Text>Basic Info</Text>
            </View>
            <View
                style={{...mainStyles.fromScratch.cycleSection.bodyContainer,
                    maxWidth: '50%'
                }}
            >
                <TextInputCustom 
                    label='Name: '
                    value={props.data.name}
                    onChangeText={newName => props.setBasicInfo(prevState => ({
                        ...prevState,
                        name: newName
                    }))}
                />
                {/* <View
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
                </View> */}
                <TextInputCustom 
                    label='Focus: '
                    value={props.data.focus}
                    onChangeText={newFocus => props.setBasicInfo(prevState => ({
                        ...prevState,
                        focus: newFocus
                    }))}
                />
                {/* <TextInputCustom 
                    label='Description: '
                /> */}
            </View>
        </View>
    )
}

const TextInputCustom = (props) => {
    const theme = useTheme()

    return(
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                alignSelf: 'stretch',
            }}
        >
            <Text>{props.label}</Text>
            <View
                style={{
                    width: '100%',
                    borderBottomWidth: 1,
                }}
            >
                <View
                    style={{flex: 1}}
                >
                    <TextInput 
                        style={{
                            width: '100%'   
                        }}
                        defaultValue={props.value}
                        onChangeText={props.onChangeText}
                    />
                </View>
            </View>
        </View>
    )
}