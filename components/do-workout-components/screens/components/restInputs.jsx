import React, { useState } from 'react'
import { View, Text, Pressable, Image, TextInput } from 'react-native'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
} from '../../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function RestInputs(props){

    return(
        <View
            style={{...mainStyles.restScreen.mainSection.inputSection}}
        >
            <View
                style={{...mainStyles.restScreen.mainSection.inputWithLabelContainer}}
            >
                <Text
                    style={{...textStyles.restScreen.bodyTextAnton,
                        color: 'white'
                    }}
                >Input Weight</Text>
                <View
                    style={{...mainStyles.restScreen.mainSection.inputContainer,
                        backgroundColor: 'white',
                    }}
                >
                    <View
                        style={{flex: 1}}
                    >
                        <TextInput 
                            style={{...mainStyles.restScreen.mainSection.textInput}}
                        />
                    </View>
                </View>
            </View>
            <View
                style={{...mainStyles.restScreen.mainSection.inputWithLabelContainer}}
            >
                <Text
                    style={{...textStyles.restScreen.bodyTextAnton,
                        color:'white'
                    }}
                >Input Reps</Text>
                <View
                    style={{...mainStyles.restScreen.mainSection.inputContainer,
                        backgroundColor: 'white',
                    }}
                >
                    <View
                        style={{flex: 1}}
                    >
                        <TextInput
                            style={{...mainStyles.restScreen.mainSection.textInput}}
                            multiline={true}
                        />
                    </View>    
                </View>
            </View>
        </View>
    )
}