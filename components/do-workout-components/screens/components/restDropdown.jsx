import React, { useState, useEffect } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { useTheme } from 'react-native-paper'
import { 
  textStyles,
  listStyles,
  mainStyles,
} from '../../../../styles/style-index'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const initData = [
    {label: 'loading', value: 'loading'}
]

export default function MetricDropdown(props){
    const theme = props.theme

    const [ data, setData ] = useState(initData)
    
    useEffect(() => {
        setData(getListType(props.type))
        console.log(data)
    }, [props.type])
    

    return(
        <Dropdown
            mode='auto'
            style={listStyles.dropdown.container}
            containerStyle={listStyles.dropdown.listContainer}
            itemContainerStyle={listStyles.dropdown.itemContainer}
            itemTextStyle={textStyles.restScreen.bodyTextAnton}
            placeholderStyle={textStyles.restScreen.bodyTextAnton}
            selectedTextStyle={textStyles.restScreen.bodyTextAnton}
            data={data}
            maxHeight={300}
            labelField='label'
            valueField='value'
            placeholder={data[0].label}
            value={props.metric}
            onChange={item => {
                props.setMetric(item.value)
            }}
        />
    )
}

const getListType = (type) => {
    let data;
    switch(type){
        case 'weight':
            data = weightOptions
            break;
        case 'length':
            data = lengthOptions
            break;
        case 'time':
            data = timeOptions
            break;
    }
    return data
} 

const weightOptions = [
    { label: 'kg', value: 'kg' },
    { label: 'lbs', value: 'lbs'},
]

const lengthOptions = [
    { label: 'cm', value: 'cm' },
    { label: 'm', value: 'm' },
    { label: 'km', value: 'km' },
    { label: 'in', value: 'in' },
    { label: 'ft', value: 'ft' },
    { label: 'mi', value: 'mi' },
]

const timeOptions = [
    { label: 'seconds', value: 's' },
    { label: 'minutes', value: 'm' },
    { label: 'hours', value: 'hr' },
]