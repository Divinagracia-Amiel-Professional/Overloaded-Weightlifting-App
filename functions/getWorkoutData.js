import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { db } from '../firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'


export default function GetWorkoutData(){

    const refPath = ['Workouts', 'gxgmfK5Z0bvhN1FkodoQ', 'Cycles', 'cycle_two', 'Splits']
    const ref = collection(db, ...refPath)
    

    useEffect(() => {
        const getData = async () => {
            const snap = await getDocs(ref)
            console.log(snap)
            // const data = snap.data()
            // return exerciseRef
        }
        getData()
    }, [])


    return(
        <View>
            <Text>connecting to db...</Text>
        </View>
    )
}

// const getWorkoutData = async () => {
//     const ref = doc(db, 'Workouts', 'gxgmfK5Z0bvhN1FkodoQ', 'Cycles', 'cycle_one')
//     const snap = await getDoc(ref)

//     return snap.data()
// }