import React from 'react';
import { Text, View,  Pressable, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../styles/style-index'
import GetWorkoutData from '../functions/getWorkoutData';
import useExercises from '../custom-hooks/useExercises';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import exercisesInitDb from '../redux/databases/exercises-init-db';
import workoutsInitDb from '../redux/databases/workouts-init-db';
import { addInitExercises } from '../redux/slices/ExerciseSlice';
import { addInitWorkouts } from '../redux/slices/WorkoutSlice';
import { ButtonWithIcon } from '../components/component-index';
import { db, auth } from '../firebase'

export default function Profile(){
    const dispatch = useDispatch<AppDispatch>()
    const path = ['Workouts', 'gxgmfK5Z0bvhN1FkodoQ', 'Cycles', 'cycle_two','Splits']
    const collections = useExercises(db, path)
    console.log(collections)

    const [Email, setEmail] = React.useState('')
    const [Password, setPassword] = React.useState('')

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(Email, Password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user.Email);
        })
        .catch((error) => {alert(error.message)})
    }

    return(         
        // <View style={mainStyles.bodyContainer}>
        //     <Text style={textStyles.headerText}>Profile</Text>
        //     <ButtonWithIcon
        //         style={{paddingVertical: 10, opacity: 0.8}}
        //         text="Reset Workout DB"
        //         onPress={() => {
        //             dispatch(addInitWorkouts(workoutsInitDb))
        //         }}
        //     />
        //     <ButtonWithIcon
        //         style={{paddingVertical: 10, opacity: 0.8}}
        //         text="Reset Exercise DB"
        //         onPress={() => {
        //             dispatch(addInitExercises(exercisesInitDb))
        //         }}
        //     />

        // </View>
        <KeyboardAvoidingView 
            style={styles.container}
            behavior="padding"
            >
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                    value={Email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Email"/>
                    <TextInput style={styles.input} 
                    value={Password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Password" secureTextEntry/>

                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => {}} style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.buttonOutline]}>
                        <Text style={styles.buttonOutlineText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    inputContainer: {
        width: '80%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        padding: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
        },
    buttonContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        flex: 1,
    },
    button: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        color: 'white'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'blue'
    },
    buttonOutlineText: {
        color: 'blue',
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonOutline: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'blue',
        marginLeft: 10
    }
})