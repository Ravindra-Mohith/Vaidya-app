import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function GetStarted1() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/adaptive-icon.png')} />
            <Text style={styles.title}>
                Consulting Made Easy
            </Text>
            <Text style={styles.paragraph}>
                Check for availability. Book an appointment. Order Lab Tests. Save Health Records.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    paragraph: {
        margin: 24,
        marginTop: 0,
        fontSize: 14,
        textAlign: 'center',
        color: '#333',
    },
    logo: {
        height: 128,
        width: 128,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
