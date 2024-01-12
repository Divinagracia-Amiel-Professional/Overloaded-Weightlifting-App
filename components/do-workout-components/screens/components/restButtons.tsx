import React, { useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
  buttonStyles
} from '../../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Next } from 'iconsax-react-native'
import { getLocalDateTime } from '../../../../functions/functions-index'

export default function RestButtons(props){
    const theme = props.theme

    console.log('hasInput: ' + props.hasInput)
    console.log(props.currentWorkoutRecords)

    const logWorkoutData = () => {
      // console.log("Current Workout Records: " + JSON.stringify(props.currentWorkoutRecords))
      console.log("Current Exercise: " + JSON.stringify(props.currentWorkout)) 
      // console.log("Rest Form Data: " + JSON.stringify(props.restFormData))
      // console.log("Current Set: " + props.currentSet)
    }

    const convertToKg = (lbs) => {
      const kg = lbs/2.20462262185

      return kg
    }

    const checkIfFailed = () => {
      const repStart = props.currentWorkout.item.workout_data.rep_start
      const repEnd = props.currentWorkout.item.workout_data.rep_end
      const reps = props.restFormData.rep.input

      const isFailed = reps >= repStart ? false : true

      return isFailed
    }

    const handleSetCurrentWorkoutRecords = () => {
      const isCurrentWorkoutRecordsEmpty = props.currentWorkoutRecords[0] ? false : true //check if current workout records is empty
      const hasRecord = !isCurrentWorkoutRecordsEmpty ? props.currentWorkoutRecords.some(item => { //checks if there is an existing record of the exercise
        return item.id === props.currentWorkout.item.exercise_id
      }) : false

      console.log("hasRecord: " + hasRecord) //for debugging
      // console.log(props.currentWorkoutRecords[0].sets)

      const metric = props.restFormData.weight.metric
      const initWeight = props.restFormData.weight.input
      const finalWeight = metric === 'kg' ? initWeight : convertToKg(initWeight).toFixed(5)
      const reps = props.restFormData.rep.input
      
      const currentSetData = {
        date_achieved: getLocalDateTime().toISOString(),
        weight: finalWeight,
        reps: reps,
        isFailed: checkIfFailed()
      } 

      if(hasRecord){
        const exerciseIndex =  props.currentWorkoutRecords.findIndex(exerciseRecord => exerciseRecord.id === props.currentWorkout.item.exercise_id)
        const currentWorkoutRecords = [...props.currentWorkoutRecords]
        const thisExerciseRecord = currentWorkoutRecords[exerciseIndex]

        currentWorkoutRecords[exerciseIndex] = {
          ...thisExerciseRecord,
          sets: [
            ...thisExerciseRecord.sets,
            currentSetData
          ]
        }

        props.setCurrentWorkoutRecords(currentWorkoutRecords)
      } else {
        props.setCurrentWorkoutRecords(prevState => ([
          ...prevState,
          {
            id: props.currentWorkout.item.exercise_obj.id,
            name: props.currentWorkout.item.exercise_obj.name,
            repStart: props.currentWorkout.item.workout_data.rep_start,
            repEnd: props.currentWorkout.item.workout_data.rep_end,
            sets: [
              currentSetData
            ]
          }
        ]))
      }
    }

    const handleSetUserRecords = () => {

    }

    return(
        <View
          style={{...mainStyles.restScreen.mainSection.skipContainer}}
        >
            <Pressable
              style={{...buttonStyles.restScreen.skipContainer,
                backgroundColor: 'white',
                opacity: props.hasInput ? 1: 0.75,
              }}
              onPress={() => {
                if(!props.hasInput){ //return unless user has no input on weight
                  return
                }
                if(props.isLastRest){ //conditional to navigate to postWorkoutPage
                  logWorkoutData()
                  handleSetCurrentWorkoutRecords()
                }
                else if(props.currentSet === props.setCount + 1){
                  logWorkoutData()
                  handleSetCurrentWorkoutRecords()
                  props.setSet(1)
                  props.setIndex(prev => prev + 1)
                  props.setIsRest(false)
                }
                else{
                  logWorkoutData()
                  handleSetCurrentWorkoutRecords()
                  props.setIsRest(false)
                }    
              }}
            >
              <Text
                style={{...buttonStyles.restScreen.skipText,
                  color: theme.colors.primary,
                  paddingBottom: 5
                }}
              >{props.isLastRest ? 'Done' : 'Skip'}</Text>
              {
                !props.isLastRest ? 
                  <Next
                    size="40"
                    color={theme.colors.primary}
                    variant="Outline"
                  /> : 
                  <Feather name="check" size={40} color={theme.colors.primary}/>
              }
            </Pressable>
        </View>
    )
}