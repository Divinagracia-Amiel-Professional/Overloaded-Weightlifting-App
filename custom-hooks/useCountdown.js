import { useState, useEffect } from 'react'

export default function useCountdown(init){
    const [ secondsLeft, setSecondsLeft ] = useState(init)

    useEffect(() => {
        if(secondsLeft <= 0){
            return
        }

        const timeout = setTimeout(() => {
            setSecondsLeft(prevState => prevState - 1)
        }, 1000)

        return () => clearTimeout(timeout)

    }, [secondsLeft])

    const setTime = (seconds) => {
        setSecondsLeft(seconds)
    }

    return [ secondsLeft, setTime ]
}