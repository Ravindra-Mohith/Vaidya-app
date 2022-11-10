import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, TextInput, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const handleSignUp = () => {
        navigation.navigate("SignUp")
    }
    const handleLogin = async () => {
        var s = {}
        try {
            const res = await axios.post("http://192.168.81.218:4000/api/users/login", {
                email: email,
                password: password
            })
            s = res.data
            setUser(s);
            AsyncStorage.setItem('ID', res.data._id);
            const USER = await AsyncStorage.getItem('ID');

            if (USER) {
                navigation.navigate("NavBar");
            }
        } catch (e) {
            console.log(e)
        }
        console.log(s)
        try {
            await SecureStore.setItemAsync("UserID", JSON.stringify(s))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText} >Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );

}
export default LoginScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,

    },
    button: {
        backgroundColor: "orange",
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'purple',
        marginTop: 10,
        borderColor: 'white',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center'
    },
})