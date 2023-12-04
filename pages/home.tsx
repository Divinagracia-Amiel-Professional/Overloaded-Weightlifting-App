import React, {useEffect, useState} from 'react';
import { Text, View, Pressable, Image, TouchableOpacity, TextInput } from 'react-native';
import { useTheme, Portal, Modal, List } from 'react-native-paper';
import {
  mainStyles,
  textStyles,
  buttonStyles,
  cardStyles
} from '../styles/style-index'
import { StartButton, CardButton, DisabledStartButton, WorkoutPicker } from '../components/component-index';
import { Logo, Calendar } from '../constants/icons';

import initializeDBSync from '../custom-hooks/initDBsync';
import getCurrentlyUsedWorkoutObject from '../custom-hooks/getCurrentlyUsedWorkoutObject';
import { getLocalDateTime, addDays } from '../functions/functions-index';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';

export default function Home({navigation}){
  const theme = useTheme()
  const initDB = initializeDBSync()

  const [ visible, setVisible ] = useState(false)

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

  // console.log(useSelector((state: RootState) => state.currentUser.workoutUsed))
  const currentUsedWorkout = getCurrentlyUsedWorkoutObject()

  const currentDate = getLocalDateTime()

  const getStartButton = () => {
    if(currentUsedWorkout.data.id){
      return (
        <StartButton
          data={currentUsedWorkout}
          showModal={showModal}
          hideModal={hideModal}
          onPress={() => {
            navigation.navigate('PreWorkoutPage', {
              currentWorkout: currentUsedWorkout
            })
          }}
        />
      )
    }
    else {
      return (
        <CardButton 
          state={false}
          header='Create Workout First!'
          mainIcon={null}
          mainIconDisabled={<Logo width={90} height={80} scale={1.5} fill={theme.colors.onTertiaryContainer} strokeColor={theme.colors.tertiaryContainer}/>}
          sideIcon={null}
          sideIconDisabled={null}
          customMessage={<DisabledStartButton />}
          disabledIcon=''
          onPress={() => {     
          }}
        />
      )
    }
  }

  return (
    <View style={{...mainStyles.bodyContainer,
      backgroundColor: theme.colors.background
    }}>
      {getStartButton()}
      <Text>{useSelector((state: RootState) => state.init.data) ? "Loaded" : "No_DB"}</Text>
      <Portal>
        <Modal
          visible={visible} 
          onDismiss={hideModal} 
          dismissable={false}
          dismissableBackButton={true}
          contentContainerStyle={{...cardStyles.manageWorkoutModal.container,
              backgroundColor: theme.colors.tertiaryContainer
          }}>
            <WorkoutPicker 
              data={currentUsedWorkout}
            />
        </Modal>
      </Portal>
    </View>
  );
}


{/* <StartButton
        onPress={() => {
          navigation.navigate('PreWorkoutPage')
        }}
        showModal={showModal}
        hideModal={hideModal}
      />
      <CardButton 
        state={false}
        header='Create Workout First!'
        mainIcon={null}
        mainIconDisabled={<Logo width={90} height={80} scale={1.5} fill={theme.colors.onTertiaryContainer} strokeColor={theme.colors.tertiaryContainer}/>}
        sideIcon={null}
        sideIconDisabled={null}
        customMessage={<DisabledStartButton />}
        disabledIcon=''
        onPress={() => {     
        }}
      /> */}