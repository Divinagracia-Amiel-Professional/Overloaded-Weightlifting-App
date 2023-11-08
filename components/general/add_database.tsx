import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { addInitExercisesToStore } from '../../redux/slices/ExerciseSlice';
import { Text, View, Pressable, Image } from 'react-native';
import { useTheme, Card } from 'react-native-paper';
import {
  mainStyles,
  textStyles,
  buttonStyles
} from '../../styles/style-index';

export default function GetDBButton() {
    const exerciseDB = useSelector((state: RootState) => state.exercise.value);
    const dispatch = useDispatch();
    const theme = useTheme();

    return(
        <>
            <Pressable 
                style={{...buttonStyles.button,
                    backgroundColor: theme.colors.onBackground}}
                    onPress={() => dispatch(addInitExercisesToStore(
                    {
                        name: "amiel",
                        age: 23,
                        sex: "m"
                    }
                ))}
            >
                <Text style={{...buttonStyles.buttonText,
                color: theme.colors.background}}>{exerciseDB ? exerciseDB.name : "no_DB"}</Text>
            </Pressable>
        </>
    )
}