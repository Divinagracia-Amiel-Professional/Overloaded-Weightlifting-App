import React, {useEffect, useState} from 'react';
import { Text, View, Pressable, Image, TouchableOpacity, TextInput } from 'react-native';
import { useTheme, Portal, Modal, List } from 'react-native-paper';
import { SheetManager } from 'react-native-actions-sheet';
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
import useOnDayChange from '../custom-hooks/useOnDayChange';
import { getLocalDateTime, addDays, toHash } from '../functions/functions-index';

import { updateState, goToNextSplit } from '../redux/slices/CurrentUserSlice';
import { updateDate } from '../redux/slices/CurrentDate';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';

export default function Home({navigation}){
  const theme = useTheme()
  const initDB = initializeDBSync()
  const currentDate = useSelector((state: RootState) => state.currentDate)
  const dispatch = useDispatch<AppDispatch>()

  console.log("Current Date: " + currentDate)

  const [ visible, setVisible ] = useState(false)

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

  // console.log(useSelector((state: RootState) => state.currentUser.workoutUsed))
  const currentUsedWorkout = getCurrentlyUsedWorkoutObject()
  
  console.log(currentUsedWorkout)

  const isRestDay = !currentUsedWorkout.err.noUsed && !currentUsedWorkout.err.isEmpty ? currentUsedWorkout.data.latest_state.split === 0 && currentUsedWorkout.data.latest_state.cycle === 0 : false
  const isCompleted = !currentUsedWorkout.err.noUsed && !currentUsedWorkout.err.isEmpty ? currentUsedWorkout.data.latest_state.is_completed : false

  useOnDayChange(() => { //fires when it's midnight; changes date in redux
    dispatch(goToNextSplit())
  })

  const getStartButton = () => { 
    if(!currentUsedWorkout.err.noUsed && !currentUsedWorkout.err.isEmpty){
      return (
        <StartButton
          data={currentUsedWorkout}
          showModal={showModal}
          hideModal={hideModal}
          isRestDay={isRestDay}
          isCompleted={isCompleted}
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
      {/* <Text>{useSelector((state: RootState) => state.init.data) ? "Loaded" : "No_DB"}</Text> */}
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
              hideModal={hideModal}
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