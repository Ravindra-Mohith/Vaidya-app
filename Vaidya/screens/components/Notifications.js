set = [require(`../../assets/doctors/a.jpg`), require(`../../assets/doctors/b.jpg`), require(`../../assets/doctors/c.jpg`),
require(`../../assets/doctors/d.jpg`), require(`../../assets/doctors/e.jpg`), require(`../../assets/doctors/f.jpg`)]
size = 3
import * as React from "react";
import { Text, View, TouchableWithoutFeedback, Dimensions, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IoIcon from "react-native-vector-icons/Ionicons";

export default function History() {
    const navigation = useNavigation();

    var payments = [];
    for (let i = 0; i < size; i++) {
        payments.push(<View key={i} style={{ backgroundColor: 'aquamarine', marginTop: 20, paddingBottom: 10, borderRadius: 20 }}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 10, padding: 5 }}>
                <View style={{ flex: 1, flexDirection: "column", justifyContent: "flex-start", paddingLeft: 7 }}>
                    <Text style={{ fontWeight: "bold" }}>Doctor {i+1}, dermatologist</Text>
                    <Text style={{ fontWeight: "bold" }}>Illness: Rashes</Text>
                    <Text style={{ fontWeight: "bold" }}>Time taken for treating: 15 mins</Text>
                    <Text style={{ fontWeight: "bold" }}>Doctor Comments: Successful Cure</Text>
                </View>
            </View>
        </View>)
    }


    return (
        <ScrollView>
            <View style={{ paddingTop: 50, paddingHorizontal: Dimensions.get('window').width * 0.1 / 2, flex: 1, flexDirection: "column", backgroundColor: '#f0f8ff' }}>

                <View style={{ backgroundColor: `#00ff7f`, borderRadius: 20 }}>
                    <Text style={{ color: 'black', paddingVertical: 10, fontWeight: "bold", fontSize: 30, textAlign: "center", fontFamily: 'sollu' }}>Medical History
                    </Text>
                </View>
                {payments}

            </View>
        </ScrollView>
    );
}