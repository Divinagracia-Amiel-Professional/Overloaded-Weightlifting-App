import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { fire_auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = fire_auth;

const signIn = async () => {
    setLoading(true);
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);
    } catch (error: any) {
        console.log(error);
        alert(error.message);
    } finally {
        setLoading(false);
    }
}

const signUp = async () => {
    setLoading(true);
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        console.log(response);
        alert('User created successfully');
    } catch (error: any) {
        console.log(error);
        alert(error.message);
    } finally {
        setLoading(false);
    }
}

  return (
    <View style={styles.container}>
    <KeyboardAvoidingView behavior='padding'>
        <TextInput value={email} style={styles.input} placeholder='Email' onChangeText={setEmail} />
        <TextInput value={password} style={styles.input} placeholder='Password' onChangeText={setPassword} secureTextEntry/>

        {loading ? <ActivityIndicator /> : (
            <View style={styles.buttonContainer}>
                <Button title='Login' onPress={signIn} color='#007AFF' />
                <View style={styles.buttonSpacing} />
                <Button title='Register' onPress={signUp} color='#007AFF' />
            </View>
        )}
    </KeyboardAvoidingView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonSpacing: {
        width: 10,
    }
})