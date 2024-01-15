import React, { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import firebase from 'firebase';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../styles/style-index'
import GetWorkoutData from '../functions/getWorkoutData';
import useExercises from '../custom-hooks/useExercises';
import { db } from '../firebase'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <View>
            <TextInput
                style={textStyles.inputText}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={textStyles.inputText}
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <Pressable style={buttonStyles.button} onPress={handleLogin}>
                <Text style={textStyles.buttonText}>Log in</Text>
            </Pressable>
        </View>
    );
}

export default function Settings() {
    
    const path = ['Workouts', 'gxgmfK5Z0bvhN1FkodoQ', 'Cycles', 'cycle_two','Splits']
    const collections = useExercises(db, path)
    console.log(collections)

    return (
        <View style={mainStyles.bodyContainer}>
            <Text style={textStyles.headerText}>Settings</Text>
            <Login />
        </View>
    );
}