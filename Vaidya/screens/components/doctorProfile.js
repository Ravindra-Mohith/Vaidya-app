import React, { useState } from 'react';

import { View, SafeAreaView, StyleSheet, Button } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TextInput,
    TouchableRipple,
    TouchableOpacity,
} from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import Iocons from 'react-native-vector-icons/Ionicons';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DoctorProfile() {
    const navigation = useNavigation();

    return (
        <View style={styles.container} marginTop={40}>
            <TouchableRipple style={{ marginTop: 40, marginLeft: 20, }} onPress={() => { navigation.navigate("NavBar"); }}>
                <Iocons name="arrow-back-sharp" size={35} color="#ddd" />
            </TouchableRipple>
            <View style={styles.userInfoSection, { backgroundColor: "#7fffd4", margin: 10, padding: 10, borderRadius: 10 }}>
                <View alignItems="center">
                    <Avatar.Image
                        source={
                            require('../../assets/profile.png')
                        }
                        size={120}
                    />
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.title}>Doctor Name</Text>
                    <Caption style={styles.caption}>General Physician</Caption>
                    <Caption style={styles.caption, { backgroundColor: 'lightblue', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 15, fontWeight: 'bold' }}>Education</Caption>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', padding: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ marginRight: 5 }}>4.5</Text>
                            <Iocons name="star" color="#696969" size={15} />
                            <Iocons name="star" color="#696969" size={15} />
                            <Iocons name="star" color="#696969" size={15} />
                            <Iocons name="star" color="#696969" size={15} />
                            <Iocons name="star-half-sharp" color="#696969" size={15} />
                        </View>
                        <Text style={{ color: "grey" }}>|</Text>
                        <Text style={{ fontWeight: 'bold' }}>Experiance</Text>

                    </View>
                </View>
            </View>

            <View style={[styles.userInfoSection, { backgroundColor: 'white', marginHorizontal: 10, paddingTop: 5, borderRadius: 10 }]}>

                <Text style={{ fontWeight: 'bold', marginVerticle: 10 }}>Address</Text>
                <View style={styles.row}>

                    <Icon name='map-marker-radius' color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 10, paddingTop: 4 }}>Mumbai, Maharashtra</Text>
                </View>
            </View>

            <View style={[styles.userInfoSection, {
                backgroundColor: 'white', marginHorizontal: 10,
                paddingTop: 5, borderRadius: 10
            }]}>

                <Text style={{ fontWeight: 'bold', marginVerticle: 10 }}>Education</Text>
                <Text style={{ color: "#777777", marginLeft: 10, marginTop: 10 }}>MBBS</Text>
                <Caption style={{ paddingHorizontal: 10 }} >college Name</Caption>
                <Caption style={{ paddingHorizontal: 10 }} >Year</Caption>
            </View>
            <View style={[styles.userInfoSection, { backgroundColor: 'white', marginHorizontal: 10, paddingTop: 5, borderRadius: 10 }]}>

                <Text style={{ fontWeight: 'bold', marginVerticle: 10, marginTop: 10 }}>Experiance</Text>
                <Caption style={{ paddingHorizontal: 10 }} >write Experiance</Caption>
            </View>


        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});

