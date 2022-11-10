import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import ViewPager from '@react-native-community/viewpager';
import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';

import Page from './components/Page';
import Footer from './components/Footer';

export default function App() {
    const navigation = useNavigation();
    const pagerRef = useRef(null);

    const handlePageChange = (pageNumber) => {
        pagerRef.current.setPage(pageNumber);
    };

    return (
        <View style={{ flex: 1 }}>
            <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
                <View key="1">
                    <Page
                        backgroundColor="#ffc93c"
                        iconName={require("../assets/tutorial_imgs/Consulting.png")}
                        title="Consulting made easy"
                    />
                    <Footer
                        backgroundColor="#ffc93c"
                        rightButtonLabel="Next"
                        rightButtonPress={() => {
                            handlePageChange(1);
                        }}
                    />
                </View>
                <View key="2">
                    <Page
                        backgroundColor="#ffc93c"
                        iconName={require("../assets/tutorial_imgs/Doctors.webp")}
                        title="Check for doctor's availability"
                    />
                    <Footer
                        backgroundColor="#ffc93c"
                        leftButtonLabel="Back"
                        leftButtonPress={() => {
                            handlePageChange(0);
                        }}
                        rightButtonLabel="Next"
                        rightButtonPress={() => {
                            handlePageChange(2); // need to navigate to the screen containing navBar
                        }}
                    />
                </View>
                <View key="3">
                    <Page
                        backgroundColor="#ffc93c"
                        iconName={require("../assets/tutorial_imgs/Appointment.webp")}
                        title="Book an appointment online"
                    />
                    <Footer
                        backgroundColor="#ffc93c"
                        leftButtonLabel="Back"
                        leftButtonPress={() => {
                            handlePageChange(1);
                        }}
                        rightButtonLabel="Next"
                        rightButtonPress={() => {
                            handlePageChange(3); // need to navigate to the screen containing navBar
                        }}
                    />
                </View>
                <View key="4">
                    <Page
                        backgroundColor="#ffc93c"
                        iconName={require("../assets/tutorial_imgs/Test.webp")}
                        title="Order Lab Tests"
                    />
                    <Footer
                        backgroundColor="#ffc93c"
                        leftButtonLabel="Back"
                        leftButtonPress={() => {
                            handlePageChange(2);
                        }}
                        rightButtonLabel="Next"
                        rightButtonPress={() => {
                            handlePageChange(4); // need to navigate to the screen containing navBar
                        }}
                    />
                </View>
                <View key="5">
                    <Page
                        backgroundColor="#ffc93c"
                        iconName={require("../assets/tutorial_imgs/File.webp")}
                        title="Save Health Records"
                    />
                    <Footer
                        backgroundColor="#ffc93c"
                        leftButtonLabel="Back"
                        leftButtonPress={() => {
                            handlePageChange(3);
                        }}
                        rightButtonLabel="Continue"
                        rightButtonPress={() => {
                            navigation.navigate('Login'); // need to navigate to the screen containing navBar
                        }}
                    />
                </View>
            </ViewPager>
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
