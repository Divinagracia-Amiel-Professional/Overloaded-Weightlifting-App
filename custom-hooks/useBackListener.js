import React, { useEffect, useState } from 'react';
import { View, Text, BackHandler } from 'react-native'

const useBackListener = (handler) => { //only listens to the backHandler; will only fire the function but never fire the go back button
    useEffect(() => {
        const backAction = () => {
          handler()
          return true
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
    }, [handler]);
}

export default useBackListener