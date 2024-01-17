import React, { useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  buttonStyles,
  textStyles,
  listStyles,
  mainStyles,
} from '../../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Next } from 'iconsax-react-native' 
import { current } from '@reduxjs/toolkit'
import SkipModal from './skipModal'

export default function ExerciseButtons(props){
  const theme = props.theme
  const [ skipModalVisible, setSkipModalVisible ] = useState(false)

  console.log(`${props.currentWorkoutOrder} of ${props.workoutLength}`)

  const handleDone = () => {
    // props.setSet(currentSet => currentSet + 1) //add set to parent exercise screen
    props.setIsRest(true) 
  }

  const handleSkipSet = () => {
    if(props.isLastRest){ //conditional to navigate to postWorkoutPage

    }
    else if(props.currentSet === props.setCount){
      if(!(props.currentWorkoutOrder === props.workoutLength)){
        props.setSet(1)
        props.setIndex(prev => prev + 1)
      }
      else {
        props.setSet(currentSet => currentSet + 1)
      }
    }
    else{
      props.setSet(currentSet => currentSet + 1)
    } 
  }

  const handleSkipExercise = () => {
    if(!(props.currentWorkoutOrder === props.workoutLength)){
      props.setSet(1)
      props.setIndex(currentIndex => currentIndex + 1)
    }
    else{
      props.setSet(props.setCount + 1)
    }
  }

  return(
    <View
      style={{...mainStyles.doWorkoutScreen.buttonSection.container}}
    >
      <SkipModal 
        visible={skipModalVisible}
        hideModal={() => {
          setSkipModalVisible(false)
        }}
        onSet={() => {
          handleSkipSet()
        }}
        onExercise={() => {
          handleSkipExercise()
        }}
      />
      <Pressable
        style={{...buttonStyles.doWorkout.done,
          backgroundColor: theme.colors.primary
        }}
        onPress={() => {
            handleDone()
        }}
      >
        <Feather name="check" size={25} color={theme.colors.background}/>
        <Text
          style={{...buttonStyles.doWorkout.doneText,
            color: theme.colors.background
          }}
        >Done</Text>
      </Pressable>
      <Pressable
        style={{...buttonStyles.doWorkout.skip}}
        onPress={() => {
          setSkipModalVisible(true)
          // handleSkipSet()
        }}
      >
        <Text
          style={{...buttonStyles.doWorkout.skipText,
            color: theme.colors.secondary
          }}
        >Skip</Text>
        <Next 
          size={30}
          color={theme.colors.secondary}
        />
      </Pressable>  
    </View>
  )
}