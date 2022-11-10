import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, StyleSheet, StatusBar, TextInput, KeyboardAvoidingView, View, Alert, ScrollView, TouchableOpacity } from 'react-native'

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [num, setNum] = useState('')
  const [bio, setBio] = useState('')
  const [Q, setQ] = useState('')
  

  return (
    <ScrollView >
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <View style={styles.input2}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome To Vaidya </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Name'
            value={name}
            onChangeText={text => setName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder='Email'
            value={email}

            onChangeText={text => setEmail(text)}
            style={styles.input1}
          />
          <TextInput
            placeholder='password'
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input1}
            secureTextEntry
          />
          <TextInput
            placeholder='Mobile No'
            value={num}
            onChangeText={text => setNum(text)}
            style={styles.input1}
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("NavBar")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </ScrollView>

  );
}
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    textAlign: 'left',
  },
  input2: {
    padding: 50,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 2,
  },
  input1: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 19,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },

  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})
