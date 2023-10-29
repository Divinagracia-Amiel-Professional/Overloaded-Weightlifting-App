import React, { useState, useEffect } from 'react'
import { doc, getDoc, getDocs, collection, orderBy, onSnapshot, query } from 'firebase/firestore'

const useExercises = (db, path) => {
    const [ isLoading, setIsLoading ] = useState(false)
    const [ isError, setIsError ] = useState(false)
    const [ data, setData ] = useState([])

    useEffect(() => {
        (async () => {
            setIsLoading(prevState => !prevState)
            const colRef = collection(db, ...path)
            const q = query(colRef, orderBy("order", "asc")) 
            const snap = onSnapshot(q, (snap) => {
                if(snap.size){
                    const data = [];
                    snap.forEach((doc) => {
                        data.push({...doc.data(), uid: doc.id})
                        console.log(data)
                    });
                    setData(data)
                    setIsLoading(prevState => !prevState)
                } else {
                    setIsLoading(prevState => !prevState)
                }
            }, (error) => setIsError(error.message))

            return () => {
                snap()
            }
        })()     
    }, [])

    return { isLoading, isError, data }
}

export default useExercises