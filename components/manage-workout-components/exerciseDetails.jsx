import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, Image, StyleSheet, ScrollView } from 'react-native';
import { useTheme, Modal, Portal } from 'react-native-paper';
import ActionSheet, { SheetProps, registerSheet } from "react-native-actions-sheet";
import {
    mainStyles,
    textStyles,
    buttonStyles,
    cardStyles,
    imageStyles
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import ButtonWithIcon from '../general/button';
import { Placeholder as PlaceholderImage } from '../../constants/images';
import { SafeAreaView } from 'react-native-safe-area-context';

const defaultValues = {
    id: "ID",
    name: "Name",
    description: "Description",
    difficulty: 3,
    focus: [],
    group: [],
    resources: {
        img_urls: [],
        vid_urls: []
    }
}

const ExerciseDetails = (props) => {
    const theme = useTheme()
    const exerciseData = props.exerciseData ? props.exerciseData : defaultValues
    const isActionSheet = props.isActionSheet ? props.isActionSheet : false

    return(
        <View
            style={style.container}
        >
            <Image 
                style={{...imageStyles.doWorkout,
                    height: isActionSheet ? 200 : 300
                }}
                source={PlaceholderImage}
            />
            <View
                style={style.bodyContainer}
            >
                <View
                    style={style.headerDescContainer}
                >
                    <Text
                        style={{...textStyles.headerBarText,
                            // fontFamily: 'Stem-Bold',
                            color: theme.colors.secondary,
                            fontSize: 28
                        }}
                    >
                        {exerciseData.name}
                    </Text>
                    <Text
                        style={{...textStyles.bodyText,
                            color: theme.colors.secondary,
                            fontSize: 16,
                        }}
                    >
                        {exerciseData.description}
                    </Text>
                </View>
                <View
                    style={style.sectionContainer}
                >
                    <Text
                        style={{...textStyles.headerBarText,
                            color: theme.colors.secondary,
                            fontSize: 20
                        }}
                    >
                        Focus
                    </Text>
                    {
                        exerciseData.focus.map(focus => {
                            return (
                                <Text
                                    key={focus}
                                    style={{...textStyles.bodyText,
                                        ...style.textContainer,
                                        color: theme.colors.secondary,
                                    }}
                                >
                                    {focus}
                                </Text>
                            )
                        })
                    }
                </View>
                <View
                    style={style.sectionContainer}
                >
                    <Text
                        style={{...textStyles.headerBarText,
                            color: theme.colors.secondary,
                            fontSize: 20
                        }}
                    >
                        Group
                    </Text>
                    {
                        exerciseData.group.map(group => {
                            return (
                                <Text
                                    key={group}
                                    style={{...textStyles.bodyText,
                                        ...style.textContainer,
                                        color: theme.colors.secondary,
                                    }}
                                >
                                    {group}
                                </Text>
                            )
                        })
                    }
                </View>
                {/* <View>
                    <Text
                        style={{...textStyles.headerBarText,
                            color: theme.colors.secondary,
                            fontSize: 20
                        }}
                    >
                        Images
                    </Text>
                    <>
                    </>
                </View> */}
                <View>
                    <Text
                        style={{...textStyles.headerBarText,
                            ...style.textContainer,
                            color: theme.colors.secondary,
                            fontSize: 20
                        }}
                    >
                        Supplementary Videos
                    </Text>
                    <>
                    </>
                </View>
            </View>
        </View>
    ) 
}

const style = StyleSheet.create({
    container: {
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    bodyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingHorizontal: 15,
        gap: 10
    },
    headerDescContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        gap: 0
    },
    textContainer: {
        alignSelf: 'stretch',
        textAlign: 'left',
        fontSize: 16,
    },
    sectionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    }
})

export default ExerciseDetails