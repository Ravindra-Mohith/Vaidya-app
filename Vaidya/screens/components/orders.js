set = [require(`../../assets/doctors/a.jpg`), require(`../../assets/doctors/b.jpg`), require(`../../assets/doctors/c.jpg`),
require(`../../assets/doctors/d.jpg`), require(`../../assets/doctors/e.jpg`), require(`../../assets/doctors/f.jpg`)]
size = 5
import * as React from "react";
import { Text, View, TouchableWithoutFeedback, Dimensions, Button, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Iocons from "react-native-vector-icons/Ionicons";


export default function Orders() {
    const navigation = useNavigation();

    var payments = [];
    for (let i = 0; i < size; i++) {
        payments.push(<View key={i} style={{ backgroundColor: '#f5f5dc', marginTop: 20, paddingBottom: 10, borderRadius: 20 }}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 10, padding: 5 }}>
                <View style={{ flex: 1, flexDirection: "column", justifyContent: "flex-start", paddingLeft: 7 }}>
                    <Text style={{ fontWeight: "bold" }}>Order 1</Text>
                </View>
            </View>
        </View>)
    }


    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <TouchableOpacity style={{ marginTop: 40, marginLeft: 20, }} onPress={() => { navigation.navigate("NavBar"); }}>
                <Iocons name="arrow-back-sharp" size={35} color="#ddd" />
            </TouchableOpacity>
            <View style={{ paddingTop: 10, paddingHorizontal: Dimensions.get('window').width * 0.1 / 2, flex: 1, flexDirection: "column" }}>

                <View>
                    <Text style={{ color: 'black', paddingVertical: 10, fontWeight: "bold", fontSize: 30, textAlign: "center", fontFamily: 'sollu' }}>My Orders
                    </Text>
                </View>
                {payments}

            </View>
            <View style={{ alignItems: "center", marginVertical: 20 }}>
                <TouchableOpacity style={{ alignItems: 'center', padding: 20, width: 200, backgroundColor: '#00bfff', borderRadius: 20 }} ><Text style={{ fontSize: 20, fontWeight: "bold" }}>Order Now</Text></TouchableOpacity></View>
        </ScrollView>
    );
}