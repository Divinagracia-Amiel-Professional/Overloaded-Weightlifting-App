import React, { useState, useEffect } from 'react'
import { getLocalDateTime } from '../functions/functions-index'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { updateDate } from '../redux/slices/CurrentDate';

const useOnDayChange = (callback) => {
    const currentDate = useSelector((state: RootState) => state.currentDate)
    const testNowDate = "2024-01-13"
    const dispatch = useDispatch<AppDispatch>()

    const midnight = ["00:00:00"];   
    let count = 0

    useEffect(() => {
        const interval = setInterval(() => {
            count++
            const now = getLocalDateTime()
            const nowDate = now.toISOString().slice(0, 10)
            const nowTime = now.toISOString().slice(11, 19)
            const isMidnight = midnight.includes(nowTime)
            const isNextDay = new Date(nowDate).getTime() !== new Date(currentDate).getTime()
            console.log(nowTime)
            console.log("isMidnight? " + isMidnight)
            console.log("isNextDay? " + isNextDay)
            console.log("Now Date: " + nowDate)
            console.log('Test Now Date: ' + testNowDate)
            console.log('Current Date: ' + currentDate)
            
            if(isMidnight || isNextDay){
                dispatch(updateDate(nowDate))
                callback()
            }
        }, 1000)

        return () => {clearInterval(interval)}
    }, [currentDate])

    return 
}

export default useOnDayChange