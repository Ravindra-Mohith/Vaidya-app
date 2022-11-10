import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
    Alert,
} from 'react-native';
import Iocons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";


export default function BMICalc() {
    const navigation = useNavigation();
    const [height, setheight] = useState("");
    const [weight, setweight] = useState("");
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ marginTop: 40, marginLeft: 20, }} onPress={() => { navigation.navigate("NavBar"); }}>
                <Iocons name="arrow-back-sharp" size={35} color="black" />
            </TouchableOpacity>
            <View>
                <Text style={{ fontSize: 20, padding: 20, textAlign: 'center' }}> Input Your Height and Weight to calculate your BMI</Text>
            </View>
            <View >
                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 25 }}>Height:</Text>
                <TextInput
                    style={{ height: 50, width: 250, textAlign: 'center', borderColor: 'black', borderWidth: 1, marginTop: 8, }}
                    keyboardType='number-pad'
                    placeholder='height (cm)'
                    onChangeText={(text) => setheight(text)}
                    placeholderTextColor="grey"
                />
                <Text style={{ fontWeight: 'bold', marginTop: 20, textAlign: 'center', fontSize: 25 }}>Weight:</Text>
                <TextInput
                    style={{ height: 50, width: 250, textAlign: 'center', borderColor: 'black', marginTop: 8, borderWidth: 1, }}
                    keyboardType='number-pad'
                    placeholder='weight (Kg)'
                    onChangeText={(text) => setweight(text)}
                    placeholderTextColor="grey"
                />
            </View>

            <TouchableOpacity style={styles.commandButton} onPress={() => {
                const ht = parseInt(height) / 100;
                const wt = parseInt(weight);
                const bmi = wt / (ht * ht);
                Alert.alert("BMI", bmi.toString(), [{
                    text: "Done"
                }])
            }}>
                <Text style={styles.panelButtonTitle}> Submit</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
});





