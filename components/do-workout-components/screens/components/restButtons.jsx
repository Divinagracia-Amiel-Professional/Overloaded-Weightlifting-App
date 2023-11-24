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

export default function RestButtons(props){
    const theme = props.theme

    return(
        <View
          style={{...mainStyles.restScreen.mainSection.skipContainer}}
        >
            <Pressable
              style={{...buttonStyles.restScreen.skipContainer,
                backgroundColor: 'white'
              }}
              onPress={() => {
                //ADD CASE IF WORKOUT IS FINISHED
                if(props.currentSet === props.setCount + 1){
                  props.setSet(1)
                  props.setIndex(prev => prev + 1)
                  props.setIsRest(false)
                }
                else{
                  props.setIsRest(false)
                }    
              }}
            >
              <Text
                style={{...buttonStyles.restScreen.skipText,
                  color: theme.colors.primary,
                  paddingBottom: 5
                }}
              >Skip</Text>
              <Next
                size="40"
                color={theme.colors.primary}
                variant="Outline"
              />
            </Pressable>
        </View>
    )
}