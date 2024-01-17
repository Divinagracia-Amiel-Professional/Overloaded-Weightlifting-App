import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
} from '../../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import RestTimer from './restTimer'
import RestInputs from './restInputs'
import RestButtons from './restButtons'

const initFormState = {
    weight: {
        input: '0',
        metric: 'kg'
    },
    rep: {
        input: 0,
    }
}

export default function RestMainSection(props){
    const theme = useTheme()
    
    const [ hasInput, setHasInput ] = useState(false)
    const [ restFormData, setRestFormData ] = useState(initFormState)

    console.log(parseInt(restFormData.weight.input))
    console.log(parseFloat(restFormData.weight.input) < 0.00)

    console.log(restFormData)

    useEffect(() => {
        if(parseFloat(restFormData.weight.input) > 0.00){
            setHasInput(true)
        } else {
            setHasInput(false)
        }
    }, [restFormData])

    const isLastRest = props.currentSet === props.setCount && props.workoutLength === props.currentWorkout.item.workout_data.order

    return(
        <View
            style={{...mainStyles.restScreen.mainSection.container}}
        >
            {
                isLastRest ? null : ( //conditional to remove timer if its the last rest if the workout, only the inputs remain
                    <RestTimer
                        theme={theme}
                        time={props.time}
                    />
                )
            }
            <RestInputs 
                theme={theme}

                restFormData={restFormData}
                setRestFormData={setRestFormData}
            />
            <RestButtons 
                theme={theme}

                setIsRest={props.setIsRest}
                setIndex={props.setIndex} 
                setSet={props.setSet}
                currentSet={props.currentSet}
                setCount={props.setCount}

                hasInput={hasInput}
                restFormData={restFormData}

                isLastRest={isLastRest}
                navigation={props.navigation}

                currentWorkout={props.currentWorkout}
                setCurrentWorkoutRecords={props.setCurrentWorkoutRecords}
                currentWorkoutRecords={props.currentWorkoutRecords}
            />

            {
                !hasInput ? 
                    <Text style={{
                        color: 'white',
                        opacity: 0.75
                    }}>Please enter weight first (bar is already 20kg)</Text> :
                    null
            }
            
        </View>
    )
}