// import React, { useState, useEffect } from "react";
// import { Box, FlatList, Center, NativeBaseProvider, Text } from "native-base";
// import { Text, View, Image, TouchableOpacity } from "react-native";


// export default function CoffeeAutonomous() {
//     const [data, setData] = useState([]);
//     const [doctors, setDoctors] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchData = async () => {
//         const resp = await fetch("https://api.sampleapis.com/coffee/hot");
//         const data = await resp.json();
//         // const Docs = await axios.get("http://192.168.1.104:4000/api/doctors/");
//         const Docs = await fetch("http://192.168.1.104:4000/api/doctors/");
//         console.log(resp);
//         const d = await Docs.json();
//         console.log(d["doctors"]);
//         setDoctors(d["doctors"]);
//         console.log(doctors);
//         // console.log(Docs.data["doctors"]);
//         // setDoctors(Docs.data["doctors"]);
//         // console.log(doctors);
//         setData(data);
//         setLoading(false);
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const renderItem = ({ item }) => {
//         return (
//             <View style={{ backgroundColor: 'white', marginTop: 20, paddingBottom: 10, borderRadius: 20 }}>
//                 <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 10, padding: 5, }}>
//                     <View style={{ flex: 1, flexDirection: "column", justifyContent: "flex-start", paddingLeft: 7 }}>
//                         <Text>Dr. Sandip Mondal </Text>
//                         <Text>MBBS, PhD Neurology</Text>
//                         <Text>Dermatologist</Text>
//                         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                             <IoIcon name="star" color="#696969" size={15} />
//                             <IoIcon name="star" color="#696969" size={15} />
//                             <IoIcon name="star" color="#696969" size={15} />
//                             <IoIcon name="star" color="#696969" size={15} />
//                             <IoIcon name="star-half-sharp" color="#696969" size={15} />
//                         </View>
//                     </View>
//                 </View>
//                 <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//                     <TouchableOpacity style={{ backgroundColor: 'coral', padding: 10, alignSelf: 'flex-start', borderRadius: 10, marginTop: 10 }}>
//                         <Text style={{ color: 'black', fontSize: 13, fontWeight: 'bold' }}>Book Appointment</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={{ backgroundColor: 'coral', padding: 10, alignSelf: 'flex-start', borderRadius: 10, marginTop: 10 }}>
//                         <Text style={{ color: 'black', paddingHorizontal: 40, fontSize: 13, fontWeight: 'bold' }}>Profile</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         );
//     };

//     return (
//         <NativeBaseProvider>
//             <Center flex={1}>
//                 <Box> Fetch API</Box>
// {loading && <Box>Loading..</Box>}
//                 {doctors.length && <Box>Doctrs{doctors.length}</Box>}
//                 {doctors.length && (
//                     <FlatList
//                         data={doctors}
//                         renderItem={renderItem}
//                         keyExtractor={(item) => item._id.toString()}
//                     />
//                 )}
//             </Center>
//         </NativeBaseProvider>
//     );
// }


//doctors:

// set = [require(`../../assets/doctors/a.jpg`),require(`../../assets/doctors/b.jpg`),require(`../../assets/doctors/c.jpg`),
// require(`../../assets/doctors/d.jpg`),require(`../../assets/doctors/e.jpg`),require(`../../assets/doctors/f.jpg`)]
// import * as React from "react";
// import { Text, View, Dimensions, Image, ScrollView, TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import IoIcon from "react-native-vector-icons/Ionicons";
// import { useState, useEffect } from "react";

// export default function Doctors() {
//     const [doctors, setDoctors] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchData = async () => {
//         const Docs = await fetch("http://192.168.1.104:4000/api/doctors/");
//         const d = await Docs.json();
//         setDoctors(d["doctors"]);
//         setLoading(false);
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);
//     const navigation = useNavigation();
//     var payments = [];

//     for (let i = 0; i < doctors.length; i++) {
//         payments.push(<View style={{ backgroundColor: 'white', marginTop: 20, paddingBottom: 10, borderRadius: 20 }}>
//             <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 10, padding: 5, }}>
//                 {/* <Image style={{maxHeight:100, maxWidth:100,marginLeft:5,borderRadius:15}} source={set[i]} /> */}
//                 <View style={{ flex: 1, flexDirection: "column", justifyContent: "flex-start", paddingLeft: 7 }}>
//                     <Text>{doctors[i].name} </Text>
//                     <Text>{doctors[i].qualifications}</Text>
//                     <Text>{doctors[i].bio}</Text>
//                     <Text>Availibe betweeen {((doctors[i].availability.from / 100) % 12)}:{
//                         (doctors[i].availability.from.toString().slice(-2))
//                     }
//                         {((doctors[i].availability.from / 100) / 12) && <Text>AM</Text>}
//                         {!((doctors[i].availability.from / 100) / 12) && <Text>PM</Text>}
//                         to {((doctors[i].availability.to / 100) % 12)}:{
//                             (doctors[i].availability.to.toString().slice(-2))
//                         }

//                         {parseInt((doctors[i].availability.to / 100) / 12) && <Text>AM</Text>}
//                         {(parseInt((doctors[i].availability.to / 100) / 12) - 1) && <Text>PM</Text>}
//                     </Text>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <IoIcon name="star" color="#696969" size={15} />
//                         <IoIcon name="star" color="#696969" size={15} />
//                         <IoIcon name="star" color="#696969" size={15} />
//                         <IoIcon name="star" color="#696969" size={15} />
//                         <IoIcon name="star-half-sharp" color="#696969" size={15} />
//                     </View>
//                 </View>
//             </View>
//             <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//                 <TouchableOpacity style={{ backgroundColor: 'coral', padding: 10, alignSelf: 'flex-start', borderRadius: 10, marginTop: 10 }}>
//                     <Text style={{ color: 'black', fontSize: 13, fontWeight: 'bold' }}>Book Appointment</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={{ backgroundColor: 'coral', padding: 10, alignSelf: 'flex-start', borderRadius: 10, marginTop: 10 }}>
//                     <Text style={{ color: 'black', paddingHorizontal: 40, fontSize: 13, fontWeight: 'bold' }}>Profile</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>)
//     }


//     return (
//         <ScrollView>
//             {loading && <Text>Loading..</Text>}
//             {!loading &&
//                 <View style={{ paddingTop: 50, paddingHorizontal: Dimensions.get('window').width * 0.1 / 2, flex: 1, flexDirection: "column", backgroundColor: '#f0f8ff' }}>


//                     <View style={{ backgroundColor: `#00ff7f`, borderRadius: 20 }}>
//                         <Text style={{ color: 'black', paddingVertical: 10, fontWeight: "bold", fontSize: 30, textAlign: "center", fontFamily: 'FredokaOne-Regular' }}>Doctors</Text>
//                     </View>

//                     {payments}

//                 </View>
//             }
//         </ScrollView>
//     );
// }
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const HomeScreen = () => {
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
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default HomeScreen