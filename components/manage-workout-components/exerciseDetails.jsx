import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, Image, StyleSheet, ScrollView } from 'react-native';
import { useTheme, Modal, Portal, ActivityIndicator } from 'react-native-paper';
import ActionSheet, { SheetProps, registerSheet } from "react-native-actions-sheet";
import {
    mainStyles,
    textStyles,
    buttonStyles,
    cardStyles,
    imageStyles
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import ButtonWithIcon from '../general/button';
import { Placeholder as PlaceholderImage } from '../../constants/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FrontMuscles, BackMuscles } from '../../constants/icons';
import { getMuscleName, getExerciseGroupName } from '../../functions/functions-index';
import { 
    Abs,
    Logo,
    Legs,
    Back, 
    Calisthenics, 
    Chest, 
    FullBody, 
    Stretching, 
    Treadmill,
    PushUp,
    PullUp
} from '../../constants/icons';

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

const preloadImage = (url) => {
    return fetch(url)
}

const ExerciseDetails = (props) => {
    const theme = useTheme()
    const exerciseData = props.exerciseData ? props.exerciseData : defaultValues
    const isActionSheet = props.isActionSheet ? props.isActionSheet : false

    const isImgInt = parseInt(exerciseData.resources.img_urls[0].url) ? true : false
    const [ isImgLoading, setIsImgLoading ] = useState(false)

    const imgUrl = exerciseData.resources.img_urls[0].url

    const [ isMusclesFront, setIsMusclesFront ] = useState(true)
    
    const handleRotate = () => {
        setIsMusclesFront(prevState => !prevState)
    }

    console.log(isImgInt)
    console.log(imgUrl)
    console.log(exerciseData.resources.img_urls)

    const getExerciseGroupIcon = (group, params) => {
        if(group === 'push'){
            return <PushUp height={params.height} width={params.width} fill={params.fill} />
        } else if (group === 'pull'){
            return <PullUp height={params.height} width={params.width} fill={params.fill} />
        } else if (group === 'legs'){
            return <Legs height={params.height} width={params.width} fill={params.fill} />
        } else if (group === 'chest'){
            return <Chest height={params.height} width={params.width} fill={params.fill} strokeColor={params.strokeColor} />
        } else if (group === 'arms'){
            return <Logo height={params.height} width={params.width} fill={params.fill} strokeColor={params.strokeColor} />
        } else if (group === 'core'){
            return <Abs height={params.height} width={params.width} fill={params.fill} strokeColor={params.strokeColor} />
        } else if (group === 'full'){
            return <FullBody height={params.height} width={params.width} fill={params.fill}/>
        } else if (group === 'back'){
            return <Back height={params.height} width={params.width} fill={params.fill} strokeColor={params.strokeColor}/>
        } else if (['flexibility', 'stretches'].includes(group)){
            return <Stretching height={params.height} width={params.width} fill={params.fill} />
        } else if (['warmup', 'cooldown'].includes(group)){
            return <Treadmill height={params.height} width={params.width} fill={params.fill} />
        } else if (group === 'calisthenics'){
            return <Calisthenics height={params.height} width={params.width} fill={params.fill} />
        }
    }

    return(
        <View
            style={style.container}
        >
            <Image 
                style={{...imageStyles.doWorkout,
                    height: isActionSheet ? 200 : 300,
                    display: isImgLoading ? 'none' : 'flex'
                }}
                resizeMethod={'scale'}
                resizeMode={'contain'}
                source={isImgInt ? imgUrl : null}
                src={isImgInt ? null : imgUrl}
                onError={(e) => {
                    console.log(e)
                }}
                onLoadStart={() => {
                    setIsImgLoading(true)
                }}
                onLoadEnd={() => {
                    setIsImgLoading(false)
                }}
            />
            {
                isImgLoading ? 
                    <View
                        style={{
                            ...style.loadingContainer,
                            height: isActionSheet ? 200 : 300
                        }}
                    >
                        <ActivityIndicator size={75}/>
                    </View> :
                    null
            }
            
            <View
                style={style.bodyContainer}
            >
                <View
                    style={style.headerDescContainer}
                >
                    <Text
                        style={{...textStyles.headerBarText,
                            fontFamily: 'Stem-Bold',
                            color: theme.colors.secondary,
                            fontSize: 40
                        }}
                    >
                        {exerciseData.name}
                    </Text>
                    <Text
                        style={{...textStyles.bodyText,
                            color: theme.colors.secondary,
                            fontSize: 16,
                            fontFamily: 'Proxima-Nova-Regular'
                        }}
                    >
                        {exerciseData.description}
                    </Text>
                </View>
                <View
                    style={style.focusSectionContainer}
                >       
                    <Text
                        style={{...textStyles.headerBarText,
                            color: theme.colors.secondary,
                            fontSize: 20,
                            fontFamily: 'Stem-Medium'
                        }}
                    >
                        Muscle Focus
                    </Text>
                    <View
                        style={style.focusFacingHeader}
                    >
                        <Text
                            style={{...textStyles.headerBarText,
                                color: theme.colors.secondary,
                                fontSize: 20,
                                fontFamily: 'Proxima-Nova-Regular'
                            }}
                        >
                            {
                                isMusclesFront ? 'Front' : 'Back'
                            }
                        </Text>
                        <Pressable
                            onPress={() => {
                                handleRotate()
                            }}
                        >
                            <MaterialCommunityIcons name="rotate-360" size={30} color={theme.colors.secondary} />
                        </Pressable>
                    </View>
                    {
                        isMusclesFront ? 
                            <FrontMuscles 
                                height={175} 
                                scale={3} 
                                muscleFocus={exerciseData.focus} 
                                activeFill={theme.colors.primary} 
                                inactiveFill={`${theme.colors.secondary}30`} 
                                backgroundColor={theme.colors.customLightGray}
                            /> :
                            <BackMuscles 
                                height={175} 
                                scale={3} 
                                muscleFocus={exerciseData.focus}
                                activeFill={theme.colors.primary} 
                                inactiveFill={`${theme.colors.secondary}30`} 
                                backgroundColor={theme.colors.customLightGray}
                            />
                    }
                    <View
                        style={style.tagsContainer}
                    >
                        {
                            exerciseData.focus.map(focus => {
                                return (
                                    <Pressable
                                        key={focus}
                                        style={{
                                            ...buttonStyles.button,
                                            ...style.tagButton,
                                            // borderColor: theme.colors.secondary,
                                            backgroundColor: theme.colors.primary
                                        }}
                                    >
                                        <Text
                                            key={focus}
                                            style={{...textStyles.bodyText,
                                                ...style.textContainer,
                                                color: theme.colors.background,
                                            }}
                                        >
                                            {getMuscleName(focus)}
                                        </Text>
                                    </Pressable>  
                                )
                            })
                        }
                    </View>   
                </View>
                <View
                    style={style.focusSectionContainer}
                >
                    <Text
                        style={{...textStyles.headerBarText,
                            color: theme.colors.secondary,
                            fontSize: 20,
                            fontFamily: 'Stem-Medium'
                        }}
                    >
                        Exercise Group
                    </Text>
                    <View
                        style={style.tagsContainer}
                    >
                        {
                            exerciseData.group.map(group => {
                                const iconParams = {
                                    height: 50,
                                    width: 50,
                                    fill: theme.colors.background,
                                    strokeColor: theme.colors.primary,
                                }

                                return (
                                    <Pressable
                                        key={group}
                                        style={{
                                            ...buttonStyles.button,
                                            ...style.tagButton,
                                            paddingVertical: 7.5,
                                            paddingHorizontal: 15,
                                            backgroundColor: theme.colors.primary
                                        }}
                                    >
                                        {getExerciseGroupIcon(group, iconParams)}
                                        <Text     
                                            style={{...textStyles.bodyText,
                                                ...style.textContainer,
                                                textAlign: 'center',
                                                color: theme.colors.background,
                                            }}
                                        >
                                            {getExerciseGroupName(group)}
                                        </Text>
                                    </Pressable>     
                                )
                            })
                        }
                    </View>
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
                            fontSize: 24,
                            fontFamily: 'Stem-Bold'
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

const TagButton = (props) => {
    theme = useTheme() 

    return(
        <View>

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
        gap: 30
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
        gap: 10,
    },
    focusSectionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        gap: 20,
    },
    focusFacingHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
        gap: 10
    },
    tagsContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },
    tagButton: {
        // borderWidth: 1,
        // paddingHorizontal: 10
    },
    tagButtonText: {

    },
    loadingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    }
})

export default ExerciseDetails

// flexDirection: 'row',
// flexWrap: 'wrap'