import React, { useEffect, useState } from 'react';
import { View, Text, BackHandler } from 'react-native'

const useBackHandler = (handler) => {//will fire back button if the handler returns boolean true otherwise it never fires
    const goBack = handler()

    useEffect(() => {
        const backAction = () => {
          if(goBack){
            return false;
          }
          return true
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
    }, [handler]);
}

export default useBackHandler

