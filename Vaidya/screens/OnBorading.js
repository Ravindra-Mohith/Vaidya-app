import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from "@react-navigation/native";
// You can import from local files
import GetStarted1 from './components/GetStarted1';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <GetStarted1 />
            <TouchableOpacity onPress={this.openPopup} style={styles.next}>
                <View>
                    <Text>Next</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ alignItems: "center", justifyContent: "center" }}
                onPress={() => { navigation.navigate("Login"); }}
            >
                <Text style={{ fontSize: 22, color: "white", fontWeight: "bold", backgroundColor: 'lightblue', padding: 10, marginTop: 10 }}>
                    {'Get Started'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        alignItems: 'center',
    },
    logo: {
        height: 128,
        width: 128,
        marginBottom: 20,
    },
    card: {
        marginHorizontal: 20,
    },
    item: {
        padding: 12,
        marginTop: 16,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    next: {
        marginTop: 20,
    },
});