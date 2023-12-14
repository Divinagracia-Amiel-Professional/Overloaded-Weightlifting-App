import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native'
import { useTheme, Portal, Modal, Checkbox } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
  buttonStyles,
  cardStyles
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import RestInputs from '../do-workout-components/screens/components/restInputs'
import NumericInput from '../general/numeric_input'
import { Dropdown } from 'react-native-element-dropdown'

const timeData = []

for(let i=0; i<60; i++){
    timeData.push({
        label: i.toString(), value: i
    })
}

const EditExerciseModal = (props) => {
    const theme = useTheme()
    const [ isRange, setIsRange ] = useState(false)
    const [ isIncrement, setIsIncrement ] = useState(false)

    const initialWorkoutData = {
        start: props.workoutData.start,
        end: props.workoutData.end,
        sets: props.workoutData.sets,
    }

    const initialRest = {
        initial: formatTime(props.workoutData.initial),
        increment: formatTime(props.workoutData.increment)
    }

    const [ workoutData, setWorkoutData ] = useState(initialWorkoutData)

    const [ restData, setRestData ] = useState(initialRest)

    useEffect(() => { // makes rep-start and rep-end equal when user press checkbox for rep range
        setWorkoutData(prevState => {             
            return(
                {
                    ...prevState,
                    start : prevState.start,
                    end: prevState.start
                }
            )
        })
    }, [isRange])

    const handleOnAdd = (field) => {
        if(field === 'start' && !isRange){
            setWorkoutData(prevState => {             
                return(
                    {
                        ...prevState,
                        [field]: prevState[field] + 1,
                        end: prevState[field] + 1
                    }
                )
            })
        } else if ( field === 'start' && workoutData[field] + 1 >= workoutData['end'] ){
            setWorkoutData(prevState => {
                return(
                    {
                        ...prevState,
                        [field]: prevState[field] + 1,
                        end: prevState['end'] + 1
                    }
                )
            })
        } else {
            setWorkoutData(prevState => {             
                return(
                    {
                        ...prevState,
                        [field]: prevState[field] + 1
                    }
                )
            })
        }
    }

    const handleOnSubtract = (field) => {
        if ( workoutData[field] <= 1 ){
            return
        } else if (field === 'start' && !isRange){
            setWorkoutData(prevState => {             
                return(
                    {
                        ...prevState,
                        [field]: prevState[field] - 1,
                        end: prevState[field] - 1
                    }
                )
            })
        } else if ( field === 'end' && workoutData[field] - 1 <= workoutData['start'] ){
            return
        } else {
            setWorkoutData(prevState => {             
                return(
                    {
                        ...prevState,
                        [field]: prevState[field] - 1
                    }
                )
            })
        }
    } 

    const RestIncrement = (
        <Section
            title={'Rest Increment'}
        >
            <SetRepContainer>
                <DropdownComponent 
                    type='increment'
                    timeType='minute'
                    restData={restData}
                    setRestData={setRestData}
                />
                <DropdownComponent 
                    type='increment'
                    timeType='second'
                    restData={restData}
                    setRestData={setRestData}
                />
            </SetRepContainer>
        </Section>
    )

    return(
        <Portal>
            <Modal 
                visible={props.visible} 
                onDismiss={props.hideModal} 
                dismissable={true}
                dismissableBackButton={true}
                contentContainerStyle={{...cardStyles.manageWorkoutModal.container,
                    backgroundColor: theme.colors.tertiaryContainer
            }}>
                <Section
                    title={'Sets and Reps'}
                >
                    <CheckBoxWithLabel 
                        label={'Repitition Range'}
                        onPress={() => {
                            setIsRange(!isRange);
                        }}
                        state={isRange}
                    />
                    <SetRepContainer>
                        <Text>{workoutData.sets} sets</Text>

                        <Feather name={'x'} size={12} color={theme.colors.secondary} />
                        
                        <Text>{workoutData.start} {(workoutData.end !== workoutData.start ? `- ${workoutData.end} reps` : 'reps') /*conditional if there is no range*/}</Text>
                    </SetRepContainer>
                    <SetRepContainer>
                        <NumericInput
                            label={'Sets'} 
                            value={workoutData.sets}
                            onAdd={() => {
                                handleOnAdd('sets')
                            }}
                            onSubtract={() => {
                                handleOnSubtract('sets')
                            }}
                        />
                    </SetRepContainer>
                    <SetRepContainer>
                        <NumericInput
                            label={isRange ? 'Start' : 'Reps'} 
                            value={workoutData.start}
                            onAdd={() => {
                                handleOnAdd('start')
                            }}
                            onSubtract={() => {
                                handleOnSubtract('start')
                            }}
                        />
                        {isRange && 
                            <NumericInput
                                label={'End'} 
                                value={workoutData.end}
                                onAdd={() => {
                                    handleOnAdd('end')
                                }}
                                onSubtract={() => {
                                    handleOnSubtract('end')
                                }}
                            />
                        }   
                    </SetRepContainer>
                </Section>
                <Section
                    title={'Rest'}
                >
                    <CheckBoxWithLabel 
                        label={'Rest Increment'}
                        onPress={() => {
                            setIsIncrement(!isIncrement);
                        }}
                        state={isIncrement}
                    />
                    <Section
                        title={'Rest Time'}
                    >
                        <SetRepContainer>
                            <DropdownComponent 
                                type='initial'
                                timeType='minute'
                                restData={restData}
                                setRestData={setRestData}
                            />
                            <DropdownComponent 
                                type='initial'
                                timeType='second'
                                restData={restData}
                                setRestData={setRestData}
                            />
                        </SetRepContainer>

                        {
                            isIncrement &&
                            RestIncrement
                        }
                    </Section>
                </Section>
                <SetRepContainer>
                    <Pressable style={{...buttonStyles.bottomAbsoluteButton,
                        backgroundColor: theme.colors.primary
                        }}
                        onPress={() => {
                           props.hideModal()
                        }}
                    >
                        <Text
                            style={{...buttonStyles.bottomAbsoluteButtonText,
                                color: theme.colors.background
                                }}
                        >Done</Text>
                    </Pressable>
                </SetRepContainer>
            </Modal>
        </Portal>
    )
}

const Section = (props) => {
    const theme = useTheme()
    return(
        <View
            style={{...modalStyle.sectionContainer
                
            }}
        >
            <Text>{ props.title }</Text>
            { props.children }
        </View>
    )
}

const CheckBoxWithLabel = (props) => {
    const theme = useTheme()

    return(
        <View
            style={{...modalStyle.rowWithIcon}}
        >
            <Text>{props.label}</Text>
            <Checkbox
                status={props.state ? 'checked' : 'unchecked'}
                onPress={props.onPress}
                color={theme.colors.secondary}
            />
        </View>
    )
}

const SetRepContainer = (props) => {
    const theme = useTheme()

    return(
        <View
            style={{...mainStyles.repContainer,
                gap: 5,
                flexWrap: 'wrap'
            }}
        >
            {props.children}
        </View> 
    )
}

const DropdownComponent = (props) => {
    const theme = useTheme()
    const type = props.type
    const timeType = props.timeType

    const getTitle = (type) => {
        switch(type){
            case 'minute':
                return 'Minute(s)'
            case 'second':
                return 'Second(s)'
        }
    }

    return(
        <View
            style={{
                alignItems: 'center',
                alignSelf: 'stretch',
                flexGrow: 1,
            }}
        >
            <Text>{getTitle(timeType)}</Text>
            <Dropdown
                mode='modal'
                style={listStyles.dropdown.container}
                containerStyle={{...listStyles.dropdown.listContainer,
                    margin: 15,
                    height: '50%',
                }}
                itemContainerStyle={listStyles.dropdown.itemContainer}
                itemTextStyle={textStyles.restScreen.bodyTextAnton}
                placeholderStyle={textStyles.restScreen.bodyTextAnton}
                selectedTextStyle={textStyles.restScreen.bodyTextAnton}
                data={timeData}
                labelField='label'
                valueField='value'
                placeholder={timeData[0].label}
                value={props.restData[type][timeType]}
                onChange={item => {
                    props.setRestData(prevState => ({
                        ...prevState,
                        [type]: {
                            ...prevState[type],
                            [timeType]: item.value
                        }
                    }))
                }}
            />
        </View>
    )
}

const formatTime = (seconds) => {
    const minute = parseInt(seconds/60)
    const second = seconds % 60

    return ({
        minute: minute,
        second: second
    })
}

const toSeconds = (minute, second) => {
    const seconds = (minute * 60) + second

    return seconds
}

const modalStyle = StyleSheet.create({
    sectionContainer: {
        paddingVertical: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    rowWithIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    repContainer: {

    },
    inputContainer: {
        padding: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexBasis: 30,
        flexShrink: 1,

        borderBottomWidth: 1,
    },
})

export default EditExerciseModal