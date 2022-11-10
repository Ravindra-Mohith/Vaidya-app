// // // // import * as React from 'react';
// // // // import { useState, useEffect } from 'react';
// // // // import { Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
// // // // import { NavigationContainer } from '@react-navigation/native';
// // // // import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// // // // import { MaterialCommunityIcons } from '@expo/vector-icons';
// // // // import axios from "axios";
// // // // import { response } from 'express';

// // // // function Feed() {
// // // //   const [eemail, setEmail] = useState("");
// // // //   const [Username, setUsername] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const SignUp = async (req, res) => {
// // // //     fetch("http://localhost:3000/api/users/", { method: "GET" }).then(response=>response.json())
// // // //     await axios.post("http://localhost:3000/api/users/signup", { email: eemail, password: password, username: Username });
// // // //   }
// // // //   return (
// // // //     <View style={{ paddingTop: 40 }}>
// // // //       <KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ width: Dimensions.get('window').width, paddingHorizontal: 20 }}>

// // // //         <Text style={{ fontWeight: 'bold' }}>Email</Text>
// // // //         <TextInput keyboardType='email-address' placeholder='a@b.com' onChangeText={newText => setEmail(newText)} style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10, height: 40, fontSize: 20, paddingLeft: 10, marginBottom: 20 }} />
// // // //         <Text style={{ fontWeight: 'bold' }}>Username</Text>
// // // //         <TextInput keyboardType='email-address' placeholder='a@b.com' onChangeText={newText => setUsername(newText)} style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10, height: 40, fontSize: 20, paddingLeft: 10, marginBottom: 20 }} />
// // // //         <Text>E:{Username}</Text>
// // // //         <Text style={{ fontWeight: 'bold' }}>Password</Text>
// // // //         <TextInput placeholder='***' value={text => setPassword(text)} style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10, height: 40, fontSize: 20, paddingLeft: 10, marginBottom: 20 }} />

// // // //         <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(27,27,51,0.4)', height: 50, }} onPress={SignUp}>
// // // //           <Text style={{ color: '#fff', fontSize: 25 }}>Login</Text>
// // // //         </TouchableOpacity>

// // // //         <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
// // // //           <Text style={{ fontWeight: 'bold' }}>OR</Text>
// // // //         </View>

// // // //         <Text style={{ fontWeight: 'bold' }}>Mobile</Text>
// // // //         <TextInput keyboardType='number-pad' placeholder='9876543210' style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10, height: 40, fontSize: 20, paddingLeft: 10, marginBottom: 20 }} />

// // // //         <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(27,27,51,0.4)', height: 50, }}>
// // // //           <Text style={{ color: '#fff', fontSize: 25 }}>Request OTP</Text>
// // // //         </TouchableOpacity>


// // // //       </KeyboardAvoidingView>
// // // //     </View>
// // // //   );

// // // // }

// // // // function Profile() {
// // // //   return (
// // // //     <View style={{ paddingTop: 40 }}>
// // // //       <KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ width: Dimensions.get('window').width, paddingHorizontal: 20 }}>

// // // //         <Text style={{ fontWeight: 'bold' }}>Full Name</Text>
// // // //         <TextInput placeholder='Jethalal Gadha' style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10, height: 40, fontSize: 20, paddingLeft: 10, marginBottom: 20 }} />
// // // //         <Text style={{ fontWeight: 'bold' }}>Email</Text>
// // // //         <TextInput placeholder='a@b.com' style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10, height: 40, fontSize: 20, paddingLeft: 10, marginBottom: 20 }} />
// // // //         <Text style={{ fontWeight: 'bold' }}>Mobile</Text>
// // // //         <TextInput keyboardType='number-pad' placeholder='9876543210' style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10, height: 40, fontSize: 20, paddingLeft: 10, marginBottom: 20 }} />
// // // //         <Text style={{ fontWeight: 'bold' }}>Password</Text>
// // // //         <TextInput placeholder='***' style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10, height: 40, fontSize: 20, paddingLeft: 10, marginBottom: 20 }} />
// // // //         <Text style={{ fontWeight: 'bold' }}>Confirm Password</Text>
// // // //         <TextInput placeholder='***' style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10, height: 40, fontSize: 20, paddingLeft: 10, marginBottom: 20 }} />

// // // //         <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(27,27,51,0.4)', height: 50, }}>
// // // //           <Text style={{ color: '#fff', fontSize: 25 }}>Create Account</Text>
// // // //         </TouchableOpacity>

// // // //       </KeyboardAvoidingView>
// // // //     </View>
// // // //   );
// // // // }


// // // // const Tab = createMaterialTopTabNavigator();

// // // // function MyTabs() {
// // // //   return (

// // // //     <Tab.Navigator
// // // //       initialRouteName="Feed"
// // // //       inactiveColor="black"
// // // //       activeColor="white"
// // // //       labelStyle={{ fontSize: 12 }}
// // // //       barStyle={{ backgroundColor: 'royalblue' }}
// // // //     >
// // // //       <Tab.Screen
// // // //         name="Feed"
// // // //         component={Feed}
// // // //         options={{
// // // //           tabBarLabel: 'Login',
// // // //           tabBarIcon: ({ color }) => (
// // // //             <MaterialCommunityIcons name="home" color={color} size={26} />
// // // //           ),
// // // //           tabBarColor: 'green',
// // // //         }}
// // // //       />
// // // //       <Tab.Screen
// // // //         name="Profile"
// // // //         component={Profile}
// // // //         options={{
// // // //           tabBarLabel: 'SignUp',
// // // //           tabBarIcon: ({ color }) => (
// // // //             <MaterialCommunityIcons name="account" color={color} size={26} />
// // // //           ),
// // // //           tabBarColor: 'violet',
// // // //         }}
// // // //       />
// // // //     </Tab.Navigator>
// // // //   );
// // // // }

// // // // export default function App() {
// // // //   return (
// // // //     <NavigationContainer>
// // // //       <View style={{ flex: 1, paddingTop: 40 }}>

// // // //         <View style={{ height: 80, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd' }}>

// // // //           <View style={{ flexDirection: 'row' }}>
// // // //             <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Welcome </Text>
// // // //             <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Back</Text>
// // // //           </View>
// // // //           <Text style={{ fontSize: 15 }}>Vaidya Healthcare Pvt. Ltd.</Text>

// // // //         </View>

// // // //         <MyTabs />

// // // //       </View>
// // // //     </NavigationContainer>
// // // //   );
// // // // }

// // // import React, { useEffect, useState } from 'react';
// // // import { FlatList, Text, View } from 'react-native';
// // // import axios from 'axios';

// // // export default App = () => {
// // //   const [isLoading, setLoading] = useState(true);
// // //   const [data, setData] = useState([]);
// // //   console.log(data);

// // //   useEffect(() => {
// // //     axios
// // //       .get("http://localhost:3000/api/users/")
// // //       .then((response) => {
// // //         console.log(response);
// // //       }).catch(err => console.log(err))
// // //   }, []);

// // //   return (

// // //     <View style={{ flex: 1, padding: 24 }}>
// // //       {isLoading ? <Text>Loading...</Text> :
// // //         (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
// // //           <Text style={{ fontSize: 18, color: 'green', textAlign: 'center' }}>{data.title}</Text>
// // //           <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10 }}>Articles:</Text>
// // //           <FlatList
// // //             data={data.articles}
// // //             keyExtractor={({ id }, index) => id}
// // //             renderItem={({ item }) => (
// // //               <Text>{item.id + '. ' + item.title}</Text>
// // //             )}
// // //           />
// // //         </View>
// // //         )}
// // //     </View>
// // //   );
// // // };

// // import { useState } from "react";
// // import { StyleSheet, View, Text, Button } from "react-native";
// // import axios from "axios";
// // // import SyncStorage from 'sync-storage';



// // export default function App() {

// //   const [advice, setAdvice] = useState("");

// //   const getRandomId = (min, max) => {
// //     min = Math.ceil(min);
// //     max = Math.floor(max);
// //     return (Math.floor(Math.random() *
// //     (max - min + 1)) + min).toString();
// //   };

// //   const getAdvice = async () => {
// //     console.log("SSSs")
// //     try {
// //       const res = await axios.get("http://192.168.215.218:4000/api/users");
// //       console.log(res.data)
// //     } catch (e) {
// //       console.log(e)
// //     }
// //     // axios({
// //     //   method: 'get',
// //     //   url: "http://192.168.240.1:3000/api/users/",
// //     //   headers: {
// //     //     'Accept': 'application/json',
// //     //     'Content-Type': 'application/json'
// //     //   },
// //     // })

// //     // fetch("http://192.168.1.102:3000/api/users/", {
// //     //   method: 'get',
// //     // })
// //     //   .then((response) => {
// //     //     // setAdvice(response.data.slip.advice);
// //     //     console.log(response)
// //     //   }).catch(err => console.log(err)).finally(() => console.log("Ss"));
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.advice}>{advice}</Text>
// //       <Button title="Get Advice"
// //         onPress={getAdvice} color="green" />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   advice: {
// //     fontSize: 20,
// //     fontWeight: "bold",
// //     marginHorizontal: 20,
// //   },
// // });
// import * as React from 'react';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './screens/LoginScreen.js';
// import HomeScreen from './screens/HomeScreen.js';
// import SignUpScreen from './screens/SignUpScreen.js';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useState, useEffect } from 'react';

// const Stack = createNativeStackNavigator();

// function App() {
//   const [userID, setuserID] = useState('');
//   useEffect(() => {
//     const fetchUser = async () => {
//       const res = await AsyncStorage.getItem('ID');
//       setuserID(res);
//       console.log(res);
//     }
//     fetchUser();
//   }, []);
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import { StatusBar } from "expo-status-bar";
import Onboarding from "./screens/OnBorading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTabs from "./screens/NavbarScreen";
import Login from "./screens/LoginScreen";
import BMICalc from "./screens/components/BMI"
import EditProfile from "./screens/components/editprofile"
import Orders from "./screens/components/orders";
import DoctorProfile from "./screens/components/doctorProfile";
// import SignUpScreen from "./screens/SignUpScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Onboarding" component={Onboarding} />
          {/* <AppStack.Screen name="NavBar" component={NavBar} /> */}
          <Stack.Screen name="NavBar" component={MyTabs} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="bmi" component={BMICalc} />
          {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
          <Stack.Screen name="editProfile" component={EditProfile} />
          <Stack.Screen name="Orders" component={Orders} />
          <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
