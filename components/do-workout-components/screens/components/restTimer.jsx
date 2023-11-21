import React, { useState, useEffect } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
} from '../../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import useCountdown from '../../../../custom-hooks/useCountdown'

export default function RestTimer(props){
    const { secondsLeft, setSecondsLeft } = useCountdown(props.time)

    useEffect(() => {
      setSecondsLeft(props.time)
    }, [props.time])

    return(
      <View>
        <Text>Set {props.currentSet}/{props.setCount}</Text>
        <Text>{displayTime(secondsLeft)}</Text>
        {/* <Pressable
                style={{height: 100, width: 100, backgroundColor: 'red'}}
                onPressIn={() => {setSecondsLeft(prevState => prevState + 30)}}
            >
                <Text>Set Time</Text>
        </Pressable> */}
      </View>
    )
}

function displayTime(num){
  let minute = parseInt(num/60)
  let second = num % 60
  if(minute < 10){
    minute = `0${minute}`
  }
  if(second < 10){
    second = `0${second}`
  }
  
  return `${minute}:${second}`
}