import React, { useEffect, useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../styles/style-index'
// import getSQLDatabase from '../watermelon-db/getSQLDatabase';

export default function Tracker(){
    // const [db, setDb] = useState('')

    // useEffect(() => {
    //     const getData = async() => {
    //         const db = await getSQLDatabase('sample')
            //    console.log(db) 
    //     }
        
    //     getData()
    // },[])

    return(
        <View style={mainStyles.bodyContainer}>
            <Text style={textStyles.headerText}>Tracker</Text>
        </View>
    )
}