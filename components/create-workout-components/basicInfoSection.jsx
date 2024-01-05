import React, { useState } from 'react';
import { Text, View, Pressable, ScrollView, TextInput } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles,
    cardStyles,
    listStyles
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
import { Dropdown } from 'react-native-element-dropdown';

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
                <View
                    style={{...cardStyles.workoutCard.details.difficultyContainer}}
                >
                    <Text
                        style={{}}
                    >Difficulty: </Text>
                    <Rating 
                        type='custom'
                        ratingImage={RatingImgGray}
                        ratingColor={theme.colors.primary}
                        ratingBackgroundColor={theme.colors.customLightGray}
                        ratingCount={5}
                        imageSize={30}
                        fractions={2}
                        startingValue={props.data.difficulty}
                        readonly={false}
                        jumpValue={0.25}
                        showRating={false}
                        onStartRating={rating => {
                            console.log(rating)
                        }}
                        onFinishRating={rating => {
                            props.setBasicInfo(prevState => ({
                                ...prevState,
                                difficulty: rating
                            }))
                        }}
                        
                    />
                </View>
                <DropdownComponent
                    focus={props.data.focus}
                    setBasicInfo={props.setBasicInfo}
                />
                <TextInputCustom 
                    label='Description: '
                    value={props.data.description}
                    onChangeText={newDesc => props.setBasicInfo(prevState => ({
                        ...prevState,
                        description: newDesc
                    }))}
                    placeholder='not required'
                />
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
                        placeholder={props.placeholder}
                    />
                </View>
            </View>
        </View>
    )
}

const focusData = [
    {label: 'None', value: 'None'},
    {label: 'Strength Building', value: 'Strength Building'},
    {label: 'Power Lifting', value: 'Power Lifting'},
    {label: 'Body Building', value: 'Body Building'},
    {label: 'Cardio', value: 'Cardio'},
    {label: 'Core/Abs', value: 'Core/Abs'},
    {label: 'Legs', value: 'Legs'},
    
]

const DropdownComponent = (props) => {
    const theme = useTheme()

    return(
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'stretch',
                flexGrow: 1,
            }}
        >
            <Text>Focus: </Text>
            <Dropdown
                mode='modal'
                style={{...listStyles.dropdown.container,
                    width: '100%'
                }}
                containerStyle={{...listStyles.dropdown.listContainer,
                    margin: 15,
                    borderRadius: 10,
                    overflow: 'hidden'
                }}
                itemContainerStyle={listStyles.dropdown.itemContainer}
                itemTextStyle={textStyles.restScreen.bodyTextAnton}
                placeholderStyle={textStyles.restScreen.bodyTextAnton}
                selectedTextStyle={textStyles.restScreen.bodyTextAnton}
                data={focusData}
                labelField='label'
                valueField='value'
                placeholder={'Select Focus'}
                value={props.focus}
                onChange={item => {
                    props.setBasicInfo(prevState => ({
                        ...prevState,
                        focus: item.value
                    }))
                }}
            />
        </View>
    )
}