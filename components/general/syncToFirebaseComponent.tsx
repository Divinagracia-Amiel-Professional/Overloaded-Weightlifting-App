import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';

const SyncToFirebase = () => {
    const currentUserSlice = useSelector((state: RootState) => state.currentUser)
    
    useEffect(() => {
        console.log('Sync To Firebase Fired')
    }, [currentUserSlice])
    
    return (
        <>
        </>
    )
}

export default SyncToFirebase