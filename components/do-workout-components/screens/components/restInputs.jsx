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
import MetricDropdown from './restDropdown'
import NumericInput from '../../../general/numeric_input'

const excludedChars = {
    weight: {
        end: [',', '-', ' '],
        start: [',', '-', ' ', '0', '.']
    },
    rep: {
        end: [',', '-', ' ', '.'],
        start: [',', '-', ' ', '0', '.']
    }
}

const removeInvalidChar = (text) => { //function for final removal of any invalid char in the text
    let initText = text.trim() ? text.trim() : '0' //trims all whitespaces before and after the text, and if text is blank it defaults to 0 in string

    const textLength = initText.length //text length
    const firstDecPointIndex =  initText.search(/[.]/g) //finds index of first decimal point of initText
    const decPoint = initText.match(/[.]/g) ? initText.match(/[.]/g).length : 0 //finds the number of decimal points of the init text
    
    console.log('decPoint: ' + decPoint) //for debugging
    console.log('decPointIndex: ' + firstDecPointIndex) //for debugging 
    
    const beforeDecimalStr = firstDecPointIndex !== -1 ? initText.slice(0, firstDecPointIndex) : initText.slice(0, textLength) //gets the string before the first decimal point
    const beforeDecimalStrFiltered = (beforeDecimalStr.length > 1 && beforeDecimalStr[0] === '0' && !beforeDecimalStr.match(/(,|-|\s)/g) ? //removes leading zeros
        beforeDecimalStr.slice(1, beforeDecimalStr.length) : beforeDecimalStr
    )

    const afterDecimalStr = firstDecPointIndex !== -1 ? initText.slice(firstDecPointIndex + 1, textLength) : '' //gets the string after decimal point if there is otherwise it's a blank string
    const afterDecimalStrFiltered = afterDecimalStr.replace(/[.]/g,'') //removes any decimal point after the first decimal point

    console.log('beforeDec: ' + beforeDecimalStr) //for debugging
    console.log('beforeDecFil: ' + beforeDecimalStrFiltered) //for debugging
    console.log('afterDec: ' + afterDecimalStr) //for debugging
    console.log('afterDecFil: ' + afterDecimalStrFiltered) //for debugging

    const combinedText = firstDecPointIndex !== -1 ? `${beforeDecimalStrFiltered}.${afterDecimalStrFiltered}` : beforeDecimalStrFiltered //combines the string before and after the decimal otherwise just the string before the point

    console.log('combined: ' + combinedText) //for debugging

    const finalText = combinedText.replace(/(,|-|\s)/g,'') //final removal of all invalid char of the whole string

    console.log('final: ' + finalText) //for debugging
    
    return finalText
}

export default function RestInputs(props){
    const checkIfInt = (num) => {
        let result
        const parsed = parseInt(num)

        const test = num - parsed
        
        if(test === 0){
            return true
        }
        else{
            return false
        }
    } 

    const handleWeightInput = (text) => {
        let initText = text

        const finalText = removeInvalidChar(initText) //final removal of invalid characters

        props.setRestFormData(prevState => ({
            ...prevState,
            weight: {
                ...prevState.weight,
                input: finalText
            }
        }))
    }

    const handleOnEndEditing = (text) => {
        if(text === '0'){
            return
        }

        const parsed = parseFloat(text).toFixed(2)
        console.log(parsed)
        
        const finalText = parsed.toString()

        props.setRestFormData(prevState => ({
            ...prevState,
            weight: {
                ...prevState.weight,
                input: finalText
            }
        }))
    }

    const handleRepInput = (text) => {
        let initText = text
        let finalText
        const textLength = initText.length

        console.log(`end char: ${initText[textLength - 1]}`)
        console.log(`start char: ${initText[0]}`)

        finalText = initText

        if(textLength === 0){ //conditional to change text to 0 if initial text is blank
            finalText = '0'
        }

        else if(initText === '0'){ //conditional to retain text if inital text is 0; exception from excluded start character
            finalText = initText
        }

        else if(excludedChars.rep.end.includes(initText[textLength - 1])){ //conditional to filter out non-number characters at the end of string
            const spliced = initText.substr(0, textLength - 1)
            finalText = spliced
        } else if(initText[0] === '0'){ //conditional to filter out non-number characters and 0 at the start of string
            const spliced = initText.substr(1, textLength)
            finalText = spliced
        }

        console.log('final text: ' + finalText)

        const parsed = parseInt(finalText.replace(/(,|-|\s|[.])/g,''))

        console.log('parsed: ' + parsed)

        props.setRestFormData(prevState => ({
            ...prevState,
            rep: {
                input: parsed
            }
        }))
    }

    const handleOnRepAdd = () => {
        console.log(props.restFormData.rep.input)

        props.setRestFormData(prevState => ({
            ...prevState,
            rep: {
                input: parseInt(prevState.rep.input) + 1
            }
        }))
    }

    const handleOnRepSubtract = () => {
        if(props.restFormData.rep.input >= 1){
            props.setRestFormData(prevState => ({
                ...prevState,
                rep: {
                    input: prevState.rep.input - 1
                }
            }))
        }
    }

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
                    <NumericInput
                        value={props.restFormData.weight.input.toString()}
                        textInput={true}
                        style={{
                            alignItems: 'flex-end',
                            flexGrow: 1,
                            height: 100,
                        }}
                        onChange={text => {
                            handleWeightInput(text)
                        }}
                        onEndEditing={() => {
                            handleOnEndEditing(props.restFormData.weight.input.toString())
                        }}
                    />
                    <MetricDropdown 
                        type='weight'
                        metric={props.restFormData.weight.metric}
                        setMetric={value => {
                            props.setRestFormData(prevState => ({
                                ...prevState,
                                weight: {
                                    ...prevState.weight,
                                    metric: value
                                }
                            }))
                        }}
                    />
                </View>
            </View>
            <View
                style={{...mainStyles.restScreen.mainSection.inputWithLabelContainer,
                    justifyContent: 'center'
                }}
            >
                <Text
                    style={{...textStyles.restScreen.bodyTextAnton,
                        color:'white'
                    }}
                >Input Reps</Text>
                <View
                    style={{...mainStyles.restScreen.mainSection.inputContainer,
                        backgroundColor: 'transparent',
                    }}
                >  
                    <NumericInput
                        value={props.restFormData.rep.input.toString()}
                        textInput={true}
                        hasButtons={true}
                        style={{
                            flexGrow: 1,
                            alignItems: 'center',   
                            height: 50,
                            borderRadius: 5,
                        }}
                        textInputStyle={{
                            textAlign: 'center'
                        }}
                        onChange={text => {
                            handleRepInput(text)
                        }}
                        onAdd={() => {
                            handleOnRepAdd()
                        }}
                        onSubtract={() => {
                            handleOnRepSubtract()
                        }}
                    />
                </View>
            </View>
        </View>
    )
}