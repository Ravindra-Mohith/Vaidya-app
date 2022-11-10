import React, { useEffect, useState } from 'react';

import { View, SafeAreaView, StyleSheet, Button, ScrollView } from 'react-native';
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

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoIcon from 'react-native-vector-icons/Ionicons';
import Kc from 'react-native-vector-icons/FontAwesome5';


export default function Profile() {
    const navigation = useNavigation();
    const [user, setUser] = useState("");
    useEffect(() => {
        const f = async () => {
        }
    }, [])
    return (
        <ScrollView style={styles.container} marginTop={40}>
            <View style={styles.userInfoSection}>
                <View alignItems="center">
                    <Avatar.Image
                        source={
                            require('../../assets/profile.png')
                        }
                        size={120}
                    />
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.title}>Sabya</Text>
                    <Caption style={styles.caption}>210050035</Caption>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name='map-marker-radius' color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 10 }}>Mumbai, Maharashtra</Text>
                </View>
                <View style={styles.row}>
                    <Icon name='phone' color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 10 }}>+91-8766908532</Text>
                </View>
                <View style={styles.row}>
                    <Icon name='email' color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 10 }}>210050035@iitb.ac.in</Text>
                </View>
            </View>
            <View style={{ width: 300, alignItems: 'center', marginLeft: "10%", marginTop: -10, marginBottom: 10 }}>
                <Button onPress={() => { navigation.navigate("editProfile"); }} title='Edit profile' color="grey" />
            </View>

            <View style={[styles.infoBoxWrapper, {
                flex: 1,
                flexDirection: 'row',
                maxHeight: 100
            }]}>
                <TouchableRipple onPress={() => {navigation.navigate("History") }} style={{
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1,
                    flex: 1, backgroundColor: '#b0e0e6'
                }}>
                    <View style={[styles.infoBox, {
                        flex: 1,
                        flexDirection: 'row'
                    }]} >
                        <Text style={{ fontWeight: 'bold', fontSize: 24, paddingLeft: 25, color: '#da70d6' }}>Reports</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { navigation.navigate("Orders") }} style={{
                    flex: 1, backgroundColor: '#98fb98'
                }}>
                    <View style={[styles.infoBox, {
                        flex: 1,
                        flexDirection: 'row'
                    }]}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24, paddingLeft: 25, color: '#da70d6' }}>Orders</Text>
                    </View>
                </TouchableRipple>
            </View>
            <TouchableRipple onPress={() => navigation.navigate('bmi')} style={{ marginTop: 15 }}>
                <View style={styles.menuItem}>
                    <Icon name='heart' color='#FF6347' size={24} />
                    <Text style={styles.menuItemText}>Body Mass Index</Text>
                </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => { navigation.navigate("History") }}>
                <View style={styles.menuItem}>
                    <Kc name='notes-medical' color='#FF6347' size={24} />
                    <Text style={styles.menuItemText}>Medical History</Text>
                </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => { }}>
                <View style={styles.menuItem}>
                    <Icon name='account-check-outline' color='#FF6347' size={24} />
                    <Text style={styles.menuItemText}>Support</Text>
                </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => { }}>
                <View style={styles.menuItem}>
                    <IoIcon name="settings-outline" color='#FF6347' size={24} />
                    <Text style={styles.menuItemText}>Settings</Text>
                </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                });
                navigation.navigate("Onboarding")
            }}>
                <View style={styles.menuItem}>
                    <Icon name="logout" color='#FF6347' size={24} />
                    <Text style={styles.menuItemText}>Logout</Text>
                </View>
            </TouchableRipple>
        </ScrollView>
    )
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
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