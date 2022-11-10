import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

const Page = ({ backgroundColor, iconName, title, body }) => {
    const styles = StyleSheet.create({
        image: {
            width: '100%',
            height: '45%',
            resizeMode: 'cover'
        }
    });
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor,
            }}
        >
            <Image source={iconName} style={styles.image} />
            <View style={{ marginTop: 16 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
                    {title}
                </Text>
                <Text style={{ fontSize: 20, color: "white" }}>
                    {body}
                </Text>
            </View>
        </View>
    );
};

export default Page;
