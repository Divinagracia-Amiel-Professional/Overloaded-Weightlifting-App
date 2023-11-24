import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { addInitExercisesToStore } from '../../redux/slices/ExerciseSlice';
import { Text, View, Pressable, Image } from 'react-native';
import { useTheme, Card, Modal, Portal } from 'react-native-paper';
import {
  mainStyles,
  textStyles,
  buttonStyles
} from '../../styles/style-index';
import exercisesInitDb from '../../redux/databases/exercises-init-db';

export default function GetDBButton() {
    const exerciseDB = useSelector((state: RootState) => state.exercise);
    const dispatch = useDispatch<AppDispatch>();
    const theme = useTheme();

    const [ data, setData ] = useState({})
    const [ visible, setVisible ] = useState(false)

    console.log(exerciseDB)

    useEffect(() => {
        if(exerciseDB.isPending){
            setVisible(true)
        } 
        else{
            setVisible(false)
        }
    }, [exerciseDB.isPending])
    

    return(
        <>
            <Pressable 
                style={{...buttonStyles.button,
                    backgroundColor: theme.colors.onBackground}}
                    onPress={() => dispatch(addInitExercisesToStore(
                        exercisesInitDb,
                    ))}
            >
                <Text style={{...buttonStyles.buttonText,
                color: theme.colors.background}}>{(exerciseDB.isPending ? "...Loading" : exerciseDB.data[0] ? exerciseDB.data[0].name : "no_db")}</Text>
            </Pressable>
            <Portal>
                <Modal visible={visible}>
                    <Text>Loading...</Text>
                </Modal>
            </Portal>
        </>
    )
}