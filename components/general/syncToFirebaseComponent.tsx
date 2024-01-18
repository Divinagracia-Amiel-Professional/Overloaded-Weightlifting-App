import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { goToNextSplit } from '../../redux/slices/CurrentUserSlice';
import useOnDayChange from '../../custom-hooks/useOnDayChange';

const SyncToFirebase = () => {
    const currentUserSlice = useSelector((state: RootState) => state.currentUser)
    const dispatch = useDispatch<AppDispatch>()
    
    useEffect(() => {
        console.log('Sync To Firebase Fired')
    }, [currentUserSlice])

    useOnDayChange(() => { //fires when it's midnight; changes date in redux
        dispatch(goToNextSplit())
    })
    
    return (
        <>
        </>
    )
}

export default SyncToFirebase