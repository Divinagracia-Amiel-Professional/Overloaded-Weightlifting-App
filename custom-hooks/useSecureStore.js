import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store'

function useSecureStore(key, value){
    const [ isSuccess, setIsSuccess ] = useState(false)

    useEffect(() => {
        (async() => {
            await SecureStore.setItemAsync(key, value)
            setIsSuccess(true)})() 
    }, [])

    return { isSuccess }
}

function getSecureStoreString(key){
    const [ data, setData ] = useState('')
    const [ isEmpty, setIsEmpty ] = useState(true)

    useEffect(() => {
        (async() => {
            const res = await SecureStore.getItemAsync(key)
            if(res){
                setData(res)
                setIsEmpty(false)
            }
            else{
                setIsEmpty(true)
            }
        })()
    }, [])

    return { data, isEmpty }
}

function getSecureStoreJSON(key){
    const [ data, setData ] = useState({})
    const [ isEmpty, setIsEmpty ] = useState(false)

    useEffect(() => {
        (async() => {
            const res = await SecureStore.getItemAsync(key)
            if(res){
                setData(res)
                setIsEmpty(false)
            }
            else{
                setIsEmpty(true)
            }
        })()
    }, [])

    return { data, isEmpty }
}

export {
    useSecureStore,
    getSecureStoreString,
    getSecureStoreJSON,
}