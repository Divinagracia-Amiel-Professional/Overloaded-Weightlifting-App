import React, { useEffect, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useTheme, Portal, Modal } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
  buttonStyles,
  cardStyles
} from '../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function ExerciseItem(props){
    const theme = useTheme()

    const [ visible, setVisible ] = useState(false)

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const workoutData = {
        start: props.workoutData.rep_start,
        end: props.workoutData.rep_end,
        sets: props.workoutData.set_count,
        initial: props.workoutData.rest_initial,
        increment: props.workoutData.rest_increment
    }

    const { start, end, sets, increment, initial } = workoutData

    const handleLongPressSelect = () => {
    
    }

    const handleEdit = () => {
        showModal()
    }

    return(
        // <View
        //     // onLongPress={() => {
        //     //     handlePress()
        //     // }}
        //     onPress={() => {
        //         handlePress()
        //     }}
        //     // onPressIn={props.onDragStart}
        //     // onPressOut={props.onDragEnd}
        //     style={{
        //         flexDirection: 'row',
        //         alignItems: 'center',
        //         justifyContent: 'center',
        //         alignSelf: 'stretch',
        //         gap: 10,
        //         overflow: 'hidden',
        //         paddingVertical: 5,
        //         flexGrow: 1,
        //         paddingHorizontal: 10,
        //         paddingVertical: 2.5,
        //         ...props.containerStyle,
        //     }}
        // >
           
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'stretch',
                justifyContent: 'space-between',

                gap: 15,
                flexGrow: 1,
                
                borderWidth: 1,
                borderRadius: 10,
                height: 100,
                paddingVertical: 2.5,
                paddingHorizontal: 15,
            }}
        >   
            <EditModal 
                visible={visible}
                setVisible={showModal}
                hideModal={hideModal}
                workoutData={workoutData}
            />
            <Feather name={'image'} size={50} color={theme.colors.secondary} />
            <View
                style={{
                    ...listStyles.draggable.DetailContainer, 
                    flexGrow: 1,
                    flexShrink: 1,       
                }}
            >
                <Text
                    style={{...textStyles.list.draggable.headerText,
                        fontSize: 16,
                        flexWrap: 'wrap',
                        flex: 0,
                        flexGrow: 0,
                    }}
                >{props.name}</Text>  
                <View
                    style={{...mainStyles.repContainer}}
                >
                    <Text
                        style={{...textStyles.list.draggable.bodyText,
                            color: theme.colors.secondary
                        }}
                    >{sets ? sets : '_'} sets</Text>

                    <Feather name={'x'} size={12} color={theme.colors.secondary} />
                    
                    <Text
                        style={{...textStyles.list.draggable.bodyText,
                            color: theme.colors.secondary
                        }}
                    >{start ? start : '_'} {(end !== start ? `- ${end} reps` : 'reps') /*conditional if there is no range*/}</Text>
                </View>
                <Text
                    style={{...textStyles.list.draggable.bodyText,
                        color: theme.colors.secondary
                    }}
                >{initial}s Rest</Text>
                <Text
                    style={{...textStyles.list.draggable.bodyText,
                        color: theme.colors.secondary
                    }}
                >{increment}s Rest Increment</Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 20
                }}
            >
                <Pressable
                    onPress={() => {
                        handleEdit()
                    }}
                >
                    <MaterialIcons name="tune" size={20} color={theme.colors.onBackground}/>
                </Pressable>
                <Pressable>
                    <MaterialIcons name="delete-forever" size={20} color={theme.colors.onBackground}/>
                </Pressable>
                <Pressable
            
                >
                    <Feather name={'info'} size={15} color={theme.colors.secondary} />
                </Pressable>  
            </View>  
        </View>
    )
}

const EditModal = (props) => {
    const theme = useTheme()

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

                    <Text
                        style={{...textStyles.cardHeaderText}}
                    >{props.prompt}</Text>
                    <View
                        style={cardStyles.manageWorkoutModal.buttonContainer}
                    >
                        
                    </View>
            </Modal>
        </Portal>
    )
}

const EditExerciseForm = () => {
    const theme = useTheme()
    
}