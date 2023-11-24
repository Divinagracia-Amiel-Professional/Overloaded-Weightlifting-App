import React from 'react'
import { View, Text, Pressable } from 'react-native'
import useCountdown from '../../custom-hooks/useCountdown'

export default function Timer(){
    const [ secondsLeft, setTime ] = useCountdown(60)

    return(
        <View>
             <Text>{secondsLeft >= 55 ? secondsLeft : 'Finished!'}</Text>
        </View>
    )
}